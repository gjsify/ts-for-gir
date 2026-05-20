# GObject + Needle DI Constructor Injection

This example demonstrates how to combine GObject properties/signals with automatic dependency resolution using [Needle DI](https://github.com/needle-di/needle-di) decorators.

## Features

- **Automatic Dependency Resolution**: Services are automatically resolved without manual registration
- **GObject Integration**: Combines GObject properties, signals, and lifecycle with dependency injection
- **Simple API**: Uses clean decorator syntax without experimental TypeScript features
- **No Polyfills**: Works with standard TypeScript compilation

## Key Components

- `GObjectLogger`: GObject-based logger with properties and signals
- `GObjectDatabase`: Database service with constructor injection
- `GObjectEmail`: Email service with GObject properties
- `GObjectUserService`: User management with multiple dependencies
- `GObjectApp`: Main application extending Gio.Application

## Usage

```bash
cd examples/di-needle
gjsify install
gjsify run start alice alice@example.com
```

## TypeScript Configuration

This example works with standard TypeScript settings:
- `experimentalDecorators: false`
- `emitDecoratorMetadata: false`
- No reflection polyfills required

## Dependency Injection Pattern

```typescript
// Simple service decoration
@Injectable()
class MyService {
  constructor(private logger = inject(GObjectLogger)) {
    // Dependencies automatically resolved
  }
}
```

The container automatically discovers and resolves all dependencies at runtime.