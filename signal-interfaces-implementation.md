# Implementierungsvorschlag für Signal Interfaces

## Zusammenfassung

Dieses Dokument beschreibt einen konkreten Implementierungsplan für das Feature Request #259 - Signal Interfaces in ts-for-gir.

## Änderungen im Code

### 1. Erweitere IntrospectedClass (`packages/lib/src/gir/class.ts`)

```typescript
export class IntrospectedClass extends IntrospectedBaseClass {
    // ... existing code ...

    /**
     * Generate a SignalSignatures interface for this class
     */
    generateSignalSignatures(): string[] {
        const signals: string[] = [];
        
        // Generate individual signal callback interfaces
        this.signals.forEach(signal => {
            const callbackName = upperCamelCase(signal.name);
            signals.push(`interface ${callbackName} {`);
            
            // Generate the callback signature
            const params = signal.parameters.map(p => 
                `${p.name}: ${p.type.resolve()}`
            ).join(', ');
            
            signals.push(`  (${params}): ${signal.return_type.resolve()};`);
            signals.push(`}`);
        });
        
        // Generate the SignalSignatures interface
        signals.push(`interface SignalSignatures`);
        
        // Extend parent signal signatures
        const parentSignatures = this.parent?.signals 
            ? [`  extends ${this.parent.name}.SignalSignatures`] 
            : [];
        
        // Also extend interfaces' signal signatures
        const interfaceSignatures = this.interfaces
            .map(iface => `  ${iface.name}.SignalSignatures`)
            .filter(sig => sig);
        
        const extensions = [...parentSignatures, ...interfaceSignatures];
        if (extensions.length > 0) {
            signals.push(extensions.join(',\n') + ' {');
        } else {
            signals.push('{');
        }
        
        // Map signal names to their callback interfaces
        this.signals.forEach(signal => {
            const callbackName = upperCamelCase(signal.name);
            signals.push(`  ${signal.name}: ${callbackName};`);
        });
        
        signals.push('}');
        
        return signals;
    }
}
```

### 2. Modifiziere ModuleGenerator (`packages/generator-typescript/src/module-generator.ts`)

```typescript
export class ModuleGenerator extends FormatGenerator<string[]> {
    // ... existing code ...

    generateNamespace(girClass: IntrospectedClass, indentCount = 0) {
        const def: string[] = []
        
        // ... existing namespace generation ...
        
        // Add SignalSignatures generation
        if (girClass.signals.length > 0 || girClass.someParent(p => p.signals.length > 0)) {
            def.push(...this.generateClassSignalInterfaces(girClass, indentCount))
            def.push(...girClass.generateSignalSignatures().map(line => 
                this.generateIndent(line, indentCount)
            ))
        }
        
        // ... rest of namespace generation ...
        
        return def
    }
}
```

### 3. Neue Signal-Connect-Signatur mit Generics

```typescript
// In packages/lib/src/generators/dts.ts

generateSignalMethods(girClass: IntrospectedClass): string[] {
    const methods: string[] = [];
    
    // Generic connect method that uses SignalSignatures
    methods.push(
        `connect<K extends keyof ${girClass.name}.SignalSignatures>(`,
        `  signal: K,`,
        `  callback: ${girClass.name}.SignalSignatures[K]`,
        `): number;`
    );
    
    // Fallback for unknown signals
    methods.push(
        `connect(signal: string, callback: (...args: any[]) => any): number;`
    );
    
    // Similar for connect_after and emit
    methods.push(
        `connect_after<K extends keyof ${girClass.name}.SignalSignatures>(`,
        `  signal: K,`,
        `  callback: ${girClass.name}.SignalSignatures[K]`,
        `): number;`,
        `connect_after(signal: string, callback: (...args: any[]) => any): number;`
    );
    
    methods.push(
        `emit<K extends keyof ${girClass.name}.SignalSignatures>(`,
        `  signal: K,`,
        `  ...args: Parameters<${girClass.name}.SignalSignatures[K]>`,
        `): void;`,
        `emit(signal: string, ...args: any[]): void;`
    );
    
    return methods;
}
```

### 4. Type-Only Inferenz Support

```typescript
// In generated .d.ts files

declare namespace Button {
    // Signal callback interfaces
    interface Activate {
        (): void;
    }
    
    interface Clicked {
        (): void;
    }
    
    // Signal signatures mapping
    interface SignalSignatures extends Widget.SignalSignatures {
        activate: Activate;
        clicked: Clicked;
    }
}

declare class Button extends Widget {
    // Type-only property for inference (won't exist at runtime)
    declare static readonly __signalSignatures: Button.SignalSignatures;
    
    // Generic connect methods
    connect<K extends keyof Button.SignalSignatures>(
        signal: K,
        callback: Button.SignalSignatures[K]
    ): number;
    connect(signal: string, callback: (...args: any[]) => any): number;
}

// Helper types for consumers
type SignalNamesOf<T> = T extends { __signalSignatures: infer S } 
    ? keyof S 
    : never;

type SignalCallbackOf<T, K extends SignalNamesOf<T>> = 
    T extends { __signalSignatures: infer S } 
        ? K extends keyof S 
            ? S[K] 
            : never 
        : never;
```

## Beispiel: Generierte TypeScript-Definition

```typescript
// Gtk.Button.d.ts
export namespace Button {
    interface Activate {
        (): void;
    }
    
    interface Clicked {
        (): void;
    }
    
    interface SignalSignatures extends Widget.SignalSignatures {
        activate: Activate;
        clicked: Clicked;
    }
    
    interface ConstructorProps extends Widget.ConstructorProps {
        label?: string;
        use_underline?: boolean;
    }
}

export class Button extends Widget {
    declare static readonly __signalSignatures: Button.SignalSignatures;
    
    constructor(properties?: Partial<Button.ConstructorProps>);
    
    // Type-safe signal methods
    connect<K extends keyof Button.SignalSignatures>(
        signal: K,
        callback: Button.SignalSignatures[K]
    ): number;
    connect(signal: string, callback: (...args: any[]) => any): number;
    
    connect_after<K extends keyof Button.SignalSignatures>(
        signal: K,
        callback: Button.SignalSignatures[K]
    ): number;
    connect_after(signal: string, callback: (...args: any[]) => any): number;
    
    emit<K extends keyof Button.SignalSignatures>(
        signal: K,
        ...args: Parameters<Button.SignalSignatures[K]>
    ): void;
    emit(signal: string, ...args: any[]): void;
    
    // Properties
    label: string;
    use_underline: boolean;
}
```

## Verwendung in JSX Runtime

```tsx
// jsx-runtime.ts
type ExtractSignals<T> = T extends { __signalSignatures: infer S } ? S : never;

type SignalProps<T> = {
    [K in keyof ExtractSignals<T> as `on-${string & K}`]?: ExtractSignals<T>[K];
};

type GtkElementProps<T> = T extends new (props: infer P) => any
    ? P & SignalProps<T>
    : never;

// Usage
const button = (
    <Gtk.Button
        label="Click me"
        on-clicked={() => console.log('Clicked!')}  // Type-safe!
        on-activate={() => console.log('Activated!')}  // Type-safe!
    />
);
```

## Vorteile

1. **Vollständige Typ-Sicherheit**: Signal-Namen und Callbacks sind vollständig typsicher
2. **Vererbung**: Signale von Parent-Klassen werden korrekt vererbt
3. **Keine Runtime-Auswirkungen**: Verwendet `declare` für type-only Properties
4. **Rückwärtskompatibel**: Alte String-basierte API funktioniert weiterhin
5. **IDE-Support**: Autocomplete für Signal-Namen und Parameter

## Migration

Die vorgeschlagene Implementierung ist vollständig rückwärtskompatibel:

```typescript
// Alt (funktioniert weiterhin)
button.connect('clicked', () => { });

// Neu (mit Typ-Sicherheit)
button.connect('clicked', () => { });  // Autocomplete und Typ-Prüfung!
```

## Nächste Schritte

1. **Prototype**: Implementierung eines Prototyps für eine einzelne Klasse
2. **Tests**: Umfangreiche Tests für Vererbung und Edge-Cases
3. **Performance**: Messung der Auswirkungen auf die TypeScript-Kompilierung
4. **Dokumentation**: Aktualisierung der Dokumentation mit neuen Features
5. **Schrittweise Einführung**: Opt-in Flag für die neue Signal-API