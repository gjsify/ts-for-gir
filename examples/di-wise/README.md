# Type-Safe Dependency Injection with Wise DI

This example demonstrates modern, type-safe dependency injection using [Wise DI](github.com/exuanbo/di-wise) with Type Tokens and interface-based architecture.

## Features

- **Type-Safe Injection**: Uses Type Tokens for compile-time safety
- **Interface-Based Design**: Clean separation between interfaces and implementations
- **Explicit Registration**: Services are explicitly registered with the container
- **No Experimental Features**: Works with standard TypeScript compilation
- **Service-Oriented Architecture**: Clear separation of concerns with dedicated services

## Key Components

- **Service Interfaces**: `Logger`, `Database`, `EmailSender`, `UserService`
- **Type Tokens**: Type-safe injection tokens for each service
- **Service Implementations**: Concrete classes implementing the interfaces
- **Container Registration**: Explicit service registration with the DI container

## Usage

```bash
cd examples/di-wise
gjsify install
gjsify run start
```

## TypeScript Configuration

This example works with standard TypeScript settings:
- `experimentalDecorators: false`
- `emitDecoratorMetadata: false`
- No reflection polyfills required

## Dependency Injection Pattern

```typescript
// Define service interface
interface Logger {
  log(msg: string): void;
  getLogCount(): number;
}

// Create type token
const Logger = Type<Logger>("Logger");

// Implement service
@Injectable()
class ConsoleLogger implements Logger {
  constructor() {
    // Service implementation
  }
}

// Register with container
container.register(Logger, { useClass: ConsoleLogger });

// Inject using type token
constructor(private logger = inject(Logger)) {
  // Type-safe dependency injection
}
```

This pattern provides maximum type safety and clear architectural boundaries.