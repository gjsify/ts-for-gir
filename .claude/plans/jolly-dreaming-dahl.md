# Plan: Custom TypeDoc Theme (`@ts-for-gir/typedoc-theme`) im gi-docgen Stil

## Context

Die generierte TypeDoc-HTML-Dokumentation nutzt das Standard-TypeDoc-Theme, das komplex und schwergewichtig ist. Wir wollen ein eigenes, minimalistisches Theme entwickeln, das sich am Layout und Design der GNOME-Bibliotheksdokumentation (gi-docgen, z.B. https://docs.gtk.org/gtk4/) orientiert. Das gi-docgen-Design hat eine dunkle Sidebar links, hellen Content-Bereich mittig, und optionales TOC rechts.

## Architektur-Entscheidung: DefaultTheme erweitern

**Ansatz:** `DefaultTheme` erweitern (nicht von Grund auf neu).

**Warum:** TypeDoc hat 30+ komplexe Partials für Type-Rendering, Signaturen, Member-Darstellung etc. Wir wollen nur Layout und Styling ändern, nicht die gesamte Logik neu implementieren.

**Mechanismus:**
1. `GiDocgenTheme extends DefaultTheme` — setzt `ContextClass = GiDocgenThemeRenderContext`
2. `GiDocgenThemeRenderContext extends DefaultThemeRenderContext` — überschreibt 6 Partials: `defaultLayout`, `sidebar`, `toolbar`, `footer`, `navigation`, `pageNavigation`
3. Custom CSS ersetzt TypeDoc's `style.css` via `RendererEvent.END` Hook
4. TypeDoc's JS (search, navigation, icons) bleibt erhalten

## Design-Entscheidungen

| Frage | Entscheidung |
|-------|-------------|
| Fonts | System-Font-Stack (minimalistisch), `Source Code Pro` für Code |
| Dark/Light Mode | Ja, via CSS Custom Properties + `prefers-color-scheme` |
| TypeDoc JS | Behalten (search.js, navigation.js, icons.js, main.js) |
| Icon-System | TypeDoc SVGs beibehalten, per CSS umstylen |

## Package-Struktur

```
packages/typedoc-theme/
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts                 # Plugin: export function load(app)
    ├── theme.ts                 # GiDocgenTheme extends DefaultTheme
    ├── context.ts               # GiDocgenThemeRenderContext extends DefaultThemeRenderContext
    ├── partials/
    │   ├── layout.tsx           # Drei-Spalten-Layout (sidebar, content, toc)
    │   ├── sidebar.tsx          # Dunkle Sidebar mit Search, Nav, Dependencies
    │   ├── toolbar.tsx          # Minimal (nur Breadcrumbs)
    │   ├── footer.tsx           # Minimal
    │   ├── navigation.tsx       # Namespace-Navigation nach Kind gruppiert
    │   └── page-navigation.tsx  # Rechtes TOC
    └── static/
        └── style.css            # Komplettes gi-docgen-inspiriertes CSS
```

## Implementierungsdetails

### 1. `package.json`

```json
{
  "name": "@ts-for-gir/typedoc-theme",
  "version": "4.0.0-beta.40",
  "type": "module",
  "main": "src/index.ts",
  "module": "src/index.ts",
  "exports": { ".": "./src/index.ts" },
  "files": ["src"],
  "scripts": { "check": "tsc --noEmit" },
  "dependencies": { "typedoc": "^0.28.17" },
  "devDependencies": {
    "@ts-for-gir/tsconfig": "workspace:^",
    "@types/node": "^24.11.0",
    "typescript": "^5.9.3"
  }
}
```

### 2. `tsconfig.json`

```json
{
  "extends": "@ts-for-gir/tsconfig/tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "lib",
    "jsx": "react",
    "jsxFactory": "JSX.createElement",
    "jsxFragmentFactory": "JSX.Fragment"
  },
  "include": ["src/**/*.ts", "src/**/*.tsx"],
  "exclude": ["lib", "node_modules"]
}
```

Wichtig: TypeDoc nutzt eigenes JSX (`import { JSX } from "typedoc"`), daher `jsxFactory: "JSX.createElement"`.

### 3. `src/index.ts` — Plugin Entry

```typescript
import type { Application } from "typedoc";
import { GiDocgenTheme } from "./theme.ts";

export function load(app: Application): void {
  app.renderer.defineTheme("gi-docgen", GiDocgenTheme);
}
```

### 4. `src/theme.ts` — Theme-Klasse

```typescript
import { DefaultTheme, RendererEvent } from "typedoc";
import { GiDocgenThemeRenderContext } from "./context.ts";
// RendererEvent.END: CSS überschreiben nachdem AssetsPlugin die Default-CSS kopiert hat
// postRender() als Alternative falls Timing-Probleme auftreten
```

- Setzt `ContextClass = GiDocgenThemeRenderContext`
- Im Constructor: `RendererEvent.END` Listener der `static/style.css` nach `assets/style.css` kopiert

### 5. `src/context.ts` — Render Context

Überschreibt 6 Partials im Constructor nach `super()`:
- `this.defaultLayout` → `giDocgenLayout` (drei-spaltig)
- `this.sidebar` → `giDocgenSidebar` (dunkel)
- `this.toolbar` → `giDocgenToolbar` (minimal)
- `this.footer` → `giDocgenFooter` (minimal)
- `this.navigation` → `giDocgenNavigation` (nach Kind gruppiert)
- `this.pageNavigation` → `giDocgenPageNavigation` (rechtes TOC)

### 6. Layout (`partials/layout.tsx`)

gi-docgen Struktur statt TypeDoc-Default:

```
<div id="body-wrapper">                    <!-- flex row -->
  <nav id="sidebar">                       <!-- sticky, dark, 35ch min-width -->
    Logo/Name, Search, Navigation, Dependencies
  </nav>
  <section id="main">                      <!-- flex-grow: 1 -->
    <div class="content">                  <!-- max-width: 90ch, centered -->
      Breadcrumbs, Header, Template Content, Footer
    </div>
  </section>
  <nav id="toc">                           <!-- sticky, 25-30ch, optional -->
    Page-Level TOC
  </nav>
</div>
```

Behält alle TypeDoc `<script>` Tags (main.js, search.js, navigation.js, icons.js) bei.

### 7. `static/style.css` — Komplettes Custom CSS

**CSS Custom Properties (Light):**
```css
--text-color: rgb(51, 51, 51);
--primary: rgb(28, 118, 228);
--body-bg: #fff;
--sidebar-bg: #151515;
--sidebar-text-color: #fafafa;
--sidebar-primary: rgb(144, 194, 255);
--box-bg: rgba(135, 135, 135, 0.085);
--box-radius: 0.35rem;
--preferred-content-width: 90ch;
```

**Dark Mode** via `@media (prefers-color-scheme: dark)`:
```css
--text-color: #f6f6f6;
--primary: rgb(144, 194, 255);
--body-bg: #121212;
--sidebar-bg: #1e1e1e;
```

**Layout:** Flexbox drei-spaltig, Sidebar sticky `100vh`, Content `flex-grow: 1`
**Responsive:** `< 700px` → `flex-direction: column`, TOC hidden
**Typography:** System-Font-Stack, `clamp(16px, 1vw, 18px)`, Code 86%
**Sidebar:** Rounded Search (`border-radius: 50px`), blaue Hover/Selected States

## Integration

### `packages/generator-html-doc/package.json`

Neue Dependency:
```json
"@ts-for-gir/typedoc-theme": "workspace:^"
```

### `packages/generator-html-doc/src/html-doc-generator.ts`

Theme nach `createTypeDocApp()` / `createCombinedTypeDocApp()` laden:

```typescript
import { load as loadGiDocgenTheme } from "@ts-for-gir/typedoc-theme";

// In generateCombinedHtmlDoc():
const { app, project } = await this.pipeline.createCombinedTypeDocApp();
loadGiDocgenTheme(app);
app.options.setValue("theme", "gi-docgen");
await app.generateDocs(project, this.config.outdir);

// Analog in generateHtmlDoc()
```

Theme wird im HTML-Doc-Generator geladen (nicht in der Pipeline), damit die Pipeline generisch bleibt und JSON-Generierung nicht betroffen ist.

## Implementierungsreihenfolge

### Phase 1: Scaffolding
1. `packages/typedoc-theme/` mit `package.json`, `tsconfig.json` erstellen
2. `src/index.ts`, `src/theme.ts`, `src/context.ts` (minimal, keine Overrides)
3. `yarn install`, Integration in `html-doc-generator.ts`
4. Verifizieren: Theme lädt und rendert mit Default-Verhalten

### Phase 2: CSS-Transformation
5. `src/static/style.css` mit gi-docgen-Styling erstellen
6. CSS-Kopie via `RendererEvent.END` in `theme.ts`
7. Visuell testen — bereits signifikante Verbesserung nur durch CSS

### Phase 3: Layout-Umbau
8. `layout.tsx` — Drei-Spalten-Struktur
9. `sidebar.tsx` — Dunkle Sidebar
10. `toolbar.tsx`, `footer.tsx` — Minimal
11. CSS an neue HTML-Struktur anpassen

### Phase 4: Navigation & TOC
12. `navigation.tsx` — Nach Kind gruppierte Nav
13. `page-navigation.tsx` — Rechtes TOC
14. Search-Integration (Element-IDs für search.js beibehalten)

### Phase 5: Polish
15. Dark Mode, Responsive Breakpoints
16. Deprecation/Version Badges als Pills
17. Source-Links als `[src]` (muted, right-aligned)
18. Test: Combined + Per-Module Mode

## Kritische Dateien

| Datei | Änderung |
|-------|----------|
| `packages/typedoc-theme/` (NEU) | Gesamtes Theme-Package |
| `packages/generator-html-doc/package.json` | Dependency hinzufügen |
| `packages/generator-html-doc/src/html-doc-generator.ts` | Theme laden + aktivieren |
| `package.json` (Root) | Workspace erkennt neues Package automatisch |

## Verifizierung

1. `yarn install` — Package wird korrekt verlinkt
2. `yarn workspace @ts-for-gir/typedoc-theme check` — Keine Typfehler
3. `ts-for-gir-dev doc freetype2-2.0 --outdir ./test-doc` — Rendert mit neuem Theme
4. Browser: Dunkle Sidebar links, heller Content, TOC rechts
5. Browser: Dark Mode via OS-Einstellung
6. Browser: Responsive bei < 700px
7. Search funktioniert (TypeDoc search.js)
8. Combined Mode: `ts-for-gir-dev doc freetype2-2.0 Gio-2.0 --outdir ./test-doc`

## Potentielle Herausforderungen

- **Asset-Timing:** `RendererEvent.END` muss nach `AssetsPlugin` laufen → Fallback: `postRender()` Override
- **Search-IDs:** Sidebar muss `tsd-search-input`, `tsd-search-results` Element-IDs beibehalten
- **TSX Runtime:** Projekt nutzt `--experimental-strip-types` — `.tsx` muss mit `--experimental-transform-types` funktionieren (bereits in `.npmrc` konfiguriert)
- **Navigation Lazy Loading:** TypeDoc's `navigation.js` befüllt `.site-menu` — unser Layout muss kompatibles Element enthalten
