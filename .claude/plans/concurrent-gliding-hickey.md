# GIR-Metadaten-Badges, Signal-Flags und Kategorisierte Startseite

## Context

Die TypeDoc-Dokumentation nutzt bereits `girMetadata` auf jeder Reflection (serialisiert durch `GirMetadataSerializer`). Aktuell werden nur "Signal"- und "Virtual"-Badges angezeigt. Neue Infos (Signal-Flags, Property-Flags) sollen — wie `@signal` und `@virtual` — als **TSDoc-Tags in den `.d.ts`-Dateien** generiert werden. Das Theme liest primär TSDoc-Tags und fällt auf `girMetadata` zurück.

## Datenfluss (bestehendes Pattern)

```
GIR XML → parseMetadata() → IntrospectedMetadata
        → getTsDocMetadataTags() → TsDocTag[]
        → addGirDocComment() → /** @action @detailed */ in .d.ts
        → TypeDoc liest TSDoc → Theme prüft modifier tags → Badges
        → girMetadata als Fallback (für Fälle ohne TSDoc)
```

---

## Schritt 1: Signal-Flags aus GIR extrahieren + TSDoc-Tags generieren

### 1a: `IntrospectedSignal` erweitern

**`packages/lib/src/gir/signal.ts`** — neue Felder:

```typescript
action: boolean;
noRecurse: boolean;
noHooks: boolean;
when?: "first" | "last" | "cleanup";
```

In `fromXML()` (nach Zeile 95) auslesen:
```typescript
action: element.$.action === "1",
noRecurse: element.$["no-recurse"] === "1",
noHooks: element.$["no-hooks"] === "1",
when: element.$.when as "first" | "last" | "cleanup" | undefined,
```

`copy()`-Methode muss die neuen Felder durchleiten.

### 1b: TSDoc-Tags für Signals generieren

**`packages/generator-typescript/src/generators/signal-generator.ts`** (Zeile 136-149):

Die `signalTags`-Array um neue Tags erweitern:
```typescript
const signalTags: TsDocTag[] = [
    { tagName: "signal", paramName: "", text: "" },
    ...this.namespace.getTsDocMetadataTags(signalInfo.signal.metadata),
];
// Neue Signal-spezifische Tags:
if (signalInfo.signal.detailed) signalTags.push({ tagName: "detailed", paramName: "", text: "" });
if (signalInfo.signal.action) signalTags.push({ tagName: "action", paramName: "", text: "" });
if (signalInfo.signal.when) signalTags.push({ tagName: `run-${signalInfo.signal.when}`, paramName: "", text: "" });
```

Ergebnis im `.d.ts`: `/** @signal @detailed @action @run-first */`

### 1c: Signal-Flags in girMetadata serialisieren (Fallback)

**`packages/generator-json/src/gir-metadata-types.ts`** — `GirSignalMetadata` erweitern:
```typescript
action?: boolean;
when?: "first" | "last" | "cleanup";
```

**`packages/generator-json/src/gir-metadata-serializer.ts`** — `buildSignalMetadata()` erweitern.

---

## Schritt 2: Property-Flag TSDoc-Tags generieren

### 2a: TSDoc-Tags für Properties

**`packages/generator-typescript/src/module-generator.ts`** — in `generateProperty()` (Zeile ~460):

Neue Tags basierend auf Property-Flags hinzufügen:
```typescript
const propTags = [...this.namespace.getTsDocMetadataTags(tsProp.metadata)];
if (tsProp.constructOnly) propTags.push({ tagName: "construct-only", paramName: "", text: "" });
else if (tsProp.readable && !tsProp.writable) propTags.push({ tagName: "read-only", paramName: "", text: "" });
else if (tsProp.writable && !tsProp.readable) propTags.push({ tagName: "write-only", paramName: "", text: "" });
```

Ergebnis im `.d.ts`: `/** @construct-only */` oder `/** @read-only */`

### 2b: Property-Flags in girMetadata (bereits vorhanden)

`girMetadata.propertyMetadata` hat bereits `readable`, `writable`, `constructOnly` — dient als Fallback.

---

## Schritt 3: Multi-Badge-Infrastruktur im Theme

**Problem**: `girMemberBadgeFromComment()` gibt nur einen Badge zurück.

### `packages/typedoc-theme/src/utils.ts`

`GirReflectionMeta` erweitern (Fallback-Interface):
```typescript
interface GirReflectionMeta {
    girKind: string;
    introducedVersion?: string;
    deprecated?: boolean;
    deprecatedVersion?: string;
    propertyMetadata?: { readable: boolean; writable: boolean; constructOnly: boolean };
    signalMetadata?: { signalName: string; detailed: boolean; action?: boolean; when?: string };
}
```

Neue Funktion `girMemberBadgesFromReflection(refl): Array<{ label, cssModifier }>`:

1. **Signal/Virtual** — TSDoc-Tags `@signal`, `@virtual` prüfen (bestehende Logik), Fallback `girMetadata`
2. **Signal-Detail** — TSDoc-Tags `@detailed`, `@action`, `@run-first`/`@run-last`/`@run-cleanup` prüfen, Fallback `girMetadata.signalMetadata`
3. **Property-Flags** — TSDoc-Tags `@construct-only`, `@read-only`, `@write-only` prüfen, Fallback `girMetadata.propertyMetadata`
4. **Deprecated** — TSDoc `@deprecated` ist bereits TypeDoc-modifierTag → `refl.isDeprecated()` + `girMetadata.deprecatedVersion` für Versionsnummer im Badge
5. **Since** — TSDoc `@since` Block-Tag auslesen + `girMetadata.introducedVersion` als Fallback

`girMemberBadgeFromComment()` entfernen (Logik integriert).

### `packages/typedoc-theme/src/context.ts`

`reflectionFlags`-Override aktualisieren:
```typescript
const badges = girMemberBadgesFromReflection(props);
if (badges.length === 0) return base;
return JSX.createElement(JSX.Fragment, null, base,
    ...badges.map(b => JSX.createElement("code",
        { class: `tsd-tag tsd-tag-gir tsd-tag-gir-${b.cssModifier}` }, b.label)));
```

---

## Schritt 4: Badge-CSS

### `packages/typedoc-theme/src/static/style.css`

Bestehend: `.tsd-tag-gir-signal` (rot), `.tsd-tag-gir-virtual-method` (blau)

Neue Klassen:
```css
/* Deprecation */
.tsd-tag-gir-deprecated { background: rgba(224, 27, 36, 0.12); color: #c01c24; }
:root[data-theme="dark"] .tsd-tag-gir-deprecated { color: #f06070; }

/* Since version */
.tsd-tag-gir-since { background: rgba(38, 162, 105, 0.12); color: #1a7f37; }
:root[data-theme="dark"] .tsd-tag-gir-since { color: #56d364; }

/* Property flags */
.tsd-tag-gir-read-only { background: rgba(28, 118, 228, 0.12); color: #1c76e4; }
.tsd-tag-gir-write-only { background: rgba(230, 126, 34, 0.12); color: #b35c1e; }
.tsd-tag-gir-construct-only { background: rgba(142, 68, 173, 0.12); color: #8e44ad; }
:root[data-theme="dark"] .tsd-tag-gir-read-only { color: #6cb6ff; }
:root[data-theme="dark"] .tsd-tag-gir-write-only { color: #e0944d; }
:root[data-theme="dark"] .tsd-tag-gir-construct-only { color: #b87fd8; }

/* Signal metadata */
.tsd-tag-gir-signal-detailed { background: rgba(220, 80, 80, 0.08); color: #c04040; }
.tsd-tag-gir-signal-action { background: rgba(230, 126, 34, 0.12); color: #b35c1e; }
.tsd-tag-gir-signal-when { background: rgba(220, 80, 80, 0.08); color: #c04040; }
:root[data-theme="dark"] .tsd-tag-gir-signal-detailed { color: #e06060; }
:root[data-theme="dark"] .tsd-tag-gir-signal-action { color: #e0944d; }
:root[data-theme="dark"] .tsd-tag-gir-signal-when { color: #e06060; }
```

---

## Schritt 5: Kategorisierte Startseite

### 5a: `category` Feld zu `GirModuleMetadata`

**`packages/gir-module-metadata/src/types.ts`**:
```typescript
category?: string;
```

### 5b: Kategorien für alle Module setzen

In `packages/gir-module-metadata/src/data/*.ts`:

| Kategorie | Module |
|-----------|--------|
| GJS Core | Gjs |
| GLib | GLib-2.0, GObject-2.0, Gio-2.0, GModule-2.0 |
| GTK 4 | Gtk-4.0, Gdk-4.0, Gsk-4.0 |
| GTK 3 | Gtk-3.0, Gdk-3.0 |
| Pango | Pango-1.0, PangoCairo-1.0 |
| Graphics | GdkPixbuf-2.0, Graphene-1.0, cairo-1.0 |
| Text Rendering | HarfBuzz-0.0, freetype2-2.0 |
| Multimedia | Gst-1.0, GstBase-1.0, ... (alle 8 GStreamer) |
| Web | WebKit-6.0, WebKitWebExtension-6.0, JavaScriptCore-6.0 |
| GNOME Libraries | Adw-1, Soup-3.0, GtkSource-5, Shumate-1.0, Notify-0.7, Secret-1, Json-1.0, NM-1.0, Polkit-1.0 |

### 5c: Kategorie durch Pipeline leiten

**`packages/generator-json/src/gir-metadata-types.ts`** — `GirNamespaceMetadata` um `category?: string`.

**`packages/generator-json/src/typedoc-pipeline.ts`** — `category: meta?.category` hinzufügen.

**`packages/typedoc-theme/src/utils.ts`** — lokales `GirNamespaceMetadata` um `category?: string`.

### 5d: Kategorisierte Darstellung

**`packages/typedoc-theme/src/partials/module-reflection.ts`** — in `giDocgenModuleReflection()`:

Wenn `mod.isProject()`:
1. Kinder-Module sammeln, `girNamespaceMetadata.category` auslesen
2. Nach Kategorie gruppieren
3. Feste Reihenfolge, Module ohne Kategorie → "Other"
4. Nur Kategorien mit Modulen anzeigen
5. Jede Kategorie als `<details>`-Accordion

---

## Implementierungsreihenfolge

1. **Schritt 1** — Signal-Flags extrahieren + TSDoc-Tags generieren
2. **Schritt 2** — Property-Flag TSDoc-Tags
3. **Schritt 3** — Multi-Badge-Infrastruktur im Theme (liest TSDoc primär, girMetadata als Fallback)
4. **Schritt 4** — Badge-CSS
5. **Schritt 5** — Kategorisierte Startseite (unabhängig)

## Zu ändernde Dateien

| Datei | Änderung |
|-------|----------|
| `packages/lib/src/gir/signal.ts` | Signal-Flags extrahieren (action, when, etc.) |
| `packages/generator-typescript/src/generators/signal-generator.ts` | TSDoc-Tags @detailed, @action, @run-first |
| `packages/generator-typescript/src/module-generator.ts` | TSDoc-Tags @construct-only, @read-only |
| `packages/generator-json/src/gir-metadata-types.ts` | `GirSignalMetadata` + `GirNamespaceMetadata` erweitern |
| `packages/generator-json/src/gir-metadata-serializer.ts` | Signal-Flags serialisieren |
| `packages/typedoc-theme/src/utils.ts` | `girMemberBadgesFromReflection()` — TSDoc-first, girMetadata-Fallback |
| `packages/typedoc-theme/src/context.ts` | Multi-Badge `reflectionFlags` Override |
| `packages/typedoc-theme/src/static/style.css` | Neue Badge-CSS-Klassen |
| `packages/gir-module-metadata/src/types.ts` | `category` Feld |
| `packages/gir-module-metadata/src/data/*.ts` | Kategorien setzen |
| `packages/generator-json/src/typedoc-pipeline.ts` | Kategorie durchleiten |
| `packages/typedoc-theme/src/partials/module-reflection.ts` | Kategorisierte Startseite |

## Verifizierung

```bash
yarn build:app && yarn build:doc
```

1. `.d.ts` prüfen: Signal hat `/** @signal @detailed @action @run-first */`
2. `.d.ts` prüfen: Property hat `/** @construct-only */` oder `/** @read-only */`
3. Doku: Deprecated → rotes "Deprecated X.Y" Badge
4. Doku: Member mit `@since` → grünes "Since X.Y" Badge
5. Doku: Property → "Read-Only" / "Construct-Only" Badge
6. Doku: Signal → "Signal" + "Detailed" / "Action" Badges
7. Doku: Startseite → Module nach Kategorien gruppiert
8. Dark Mode → alle Badge-Farben korrekt
