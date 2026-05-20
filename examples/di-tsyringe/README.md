# Traditional Dependency Injection with TSyringe

This example demonstrates traditional dependency injection using [TSyringe](https://github.com/microsoft/tsyringe) with parameter decorators and reflection metadata.

## Features

- **Parameter Decorators**: Uses `@inject()` decorators on constructor parameters
- **Reflection Metadata**: Requires `emitDecoratorMetadata` and reflection polyfill
- **Automatic Resolution**: Services are automatically resolved from the global container
- **GObject Integration**: Combines GObject properties and signals with DI
- **Well-Established**: Uses the most popular DI library for TypeScript

## Key Components

- `GObjectLogger`: GObject-based logger with properties and signals
- `GObjectDatabase`: Database service with parameter injection
- `GObjectEmail`: Email service with GObject properties
- `GObjectUserService`: User management with multiple dependencies
- `GObjectApp`: Main application extending Gio.Application

## Usage

```bash
cd examples/di-tsyringe
gjsify install
gjsify run start alice alice@example.com
```

## TypeScript Configuration

This example requires experimental TypeScript features:
- `experimentalDecorators: true`
- `emitDecoratorMetadata: true`
- Requires `@abraham/reflection` polyfill

## Dependency Injection Pattern

```typescript
// Import reflection polyfill (required)
import "@abraham/reflection";

// Decorate service
@Injectable()
class MyService {
  constructor(
    @inject(GObjectLogger) private logger: GObjectLogger
  ) {
    // Dependencies injected via parameter decorators
  }
}
```

## Dependencies

- `tsyringe`: The dependency injection container
- `@abraham/reflection`: Polyfill for reflection metadata (required for parameter injection)

This approach is familiar to developers coming from other languages with established DI frameworks.