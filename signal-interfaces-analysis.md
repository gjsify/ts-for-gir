# Analyse von Issue #259: Signal Interfaces

## Übersicht

Das Issue behandelt die Anforderung, Signal-Interfaces in TypeScript-Definitionen für GObject-basierte Bibliotheken zu verbessern. Das Hauptproblem ist, dass Signale derzeit als Funktionsüberladungen exponiert werden, was es unmöglich macht, die Signalnamen, Parameter und Rückgabetypen für weitere Verwendung zu inferieren.

## Aktueller Zustand

### Problem mit der aktuellen Implementierung

Signale werden derzeit als Funktionsüberladungen generiert:

```typescript
type ButtonSignals = {
  (id: string, callback: (...args: any[]) => any): number;
  (signal: "activate", callback: (_source: Gtk.Button) => void): number;
  (signal: "clicked", callback: (_source: Gtk.Button) => void): number;
};
```

**Hauptprobleme:**
1. **Keine Typ-Inferenz möglich**: TypeScript behandelt Überladungen als Schnittmengen (intersections), wodurch es unmöglich ist, die Signal-Informationen zu extrahieren
2. **Keine Vererbung**: Parent-Klassen-Signale sind nicht enthalten
3. **Keine Iteration möglich**: Man kann nicht über die verfügbaren Signale iterieren
4. **Eingeschränkte Flexibilität**: Die Callback-Signaturen sind im Namespace verfügbar, aber nicht flexibel genug

### Aktuelle Code-Generierung

Die Signal-Generierung erfolgt in mehreren Schritten:

1. **IntrospectedSignal Klasse** (`packages/lib/src/gir/signal.ts`):
   - Repräsentiert ein Signal mit Name, Parametern und Rückgabetyp
   - Kann als `connect`, `connect_after` oder `emit` Methode generiert werden

2. **Signal-Generierung** (`packages/lib/src/generators/dts.ts`):
   - Generiert die `connect`, `connect_after` und `emit` Methoden als Überladungen
   - Prüft auf Konflikte mit existierenden Methoden

3. **Module Generator** (`packages/generator-typescript/src/module-generator.ts`):
   - Generiert Signal-Callback-Interfaces
   - Erstellt die finalen TypeScript-Definitionen

## Vorgeschlagene Lösung

### 1. Signal-Interfaces im Namespace

```typescript
namespace Button {
  // Signal callback interfaces
  interface Activate {
    (): void;
  }

  interface Clicked {
    (): void;
  }

  // Signals
  interface SignalSignatures
    extends GObject.InitiallyUnowned.SignalSignatures,
      Accessible.SignalSignatures,
      Buildable.SignalSignatures,
      ConstraintTarget.SignalSignatures {
    activate: Activate;
    clicked: Clicked;
  }
}
```

**Vorteile:**
- Klare Struktur für Signal-Definitionen
- Vererbung von Parent-Klassen-Signalen
- Typ-sichere Signal-Definitionen

### 2. Inferenz-Möglichkeit durch statisches Feld

```typescript
class Button {
  static get $signals(): Button.SignalSignatures;
}
```

**Problem:** Dies würde zur Laufzeit existieren, obwohl es nur für die Typ-Inferenz benötigt wird.

### 3. Alternative Ansätze

#### a) Template Literal Types
```typescript
type ButtonSignalNames = "activate" | "clicked";
type ButtonSignalMap = {
  activate: () => void;
  clicked: () => void;
};
```

#### b) Conditional Types für Signal-Extraktion
```typescript
type ExtractSignals<T> = T extends {
  connect(signal: infer S, callback: infer C): number;
} ? { signal: S, callback: C } : never;
```

## Anwendungsfall: JSX Runtime

Der Hauptanwendungsfall ist eine JSX-Runtime, die Signal-Handler typsicher machen möchte:

```tsx
<Gtk.Button
  label="Click"
  on-clicked={() => {}}  // Sollte typsicher sein
/>
```

## Implementierungsvorschlag

### Phase 1: Signal-Interface-Generierung

1. **Erweitere IntrospectedClass**:
   - Füge Methode zur Generierung von SignalSignatures hinzu
   - Implementiere Vererbungskette für Signale

2. **Erweitere ModuleGenerator**:
   - Generiere SignalSignatures Interface
   - Generiere individuelle Signal-Callback-Interfaces

### Phase 2: Inferenz-Unterstützung

1. **Utility Types**:
   ```typescript
   type SignalOf<T extends { $signals: any }> = T["$signals"];
   type SignalNames<T> = keyof SignalOf<T>;
   ```

2. **Alternative ohne Runtime-Einfluss**:
   - Verwende TypeScript's `declare` Keyword
   - Nutze Ambient Declarations
   - Oder verwende Symbol-basierte Ansätze

### Phase 3: Integration mit connect-Methoden

1. **Verbesserte connect-Signaturen**:
   ```typescript
   connect<K extends keyof SignalSignatures>(
     signal: K,
     callback: SignalSignatures[K]
   ): number;
   ```

## Technische Herausforderungen

1. **Rückwärtskompatibilität**: Die neue Implementierung muss mit existierendem Code kompatibel sein
2. **Performance**: Keine negativen Auswirkungen auf die TypeScript-Kompilierung
3. **Komplexität**: Balance zwischen Flexibilität und Einfachheit
4. **Runtime vs. Type-only**: Vermeidung von Runtime-Artefakten für reine Typ-Features

## Empfehlung

Ich empfehle einen mehrstufigen Ansatz:

1. **Kurzfristig**: Implementierung der SignalSignatures-Interfaces im Namespace
2. **Mittelfristig**: Entwicklung einer Inferenz-Strategie ohne Runtime-Einfluss
3. **Langfristig**: Integration mit modernen TypeScript-Features und mögliche API-Verbesserungen

Die vorgeschlagene Lösung würde die Typ-Sicherheit erheblich verbessern und neue Anwendungsfälle wie typsichere JSX-Runtimes ermöglichen.