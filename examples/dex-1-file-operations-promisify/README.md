# DexFileManager

A small experiment with Dex (libdex) in GJS/TypeScript. We played around with Dex a bit to see what works and what doesn't.

## What is this?

A simple command-line tool that shows how to use Dex and GIO together. We use Dex for a few operations that work, and GIO for the rest.

## What does it do?

The tool:
- Creates a working directory
- Creates a few test files
- Copies a file
- Lists all files
- Shows file contents
- Cleans everything up

## The promisify Method

This is the interesting part! Dex uses "Futures" instead of Promises, but we wanted to use async/await. So we wrote a helper function:

```typescript
export function promisify<T>(
    future: Dex.Future,
    expectedType: "boolean" | "boxed" | "int" | "string" | /* ... */ = "future"
): Promise<T>
```

**How does it work?**
1. We get a Dex Future (e.g., from `Dex.file_copy()`)
2. We use Dex's built-in `Future.then()` and `Future.catch()` methods
3. When the Future is done, we extract the result based on the expected type
4. We return a normal Promise with automatic type inference

**Why do we need this?**
- Dex.await only works in Dex Fibers
- But we want to write normal async/await code
- So we turn Dex Futures into normal Promises

**Key improvements:**
- **Shorter name**: `promisify` instead of `promisifyDexFuture`
- **Better parameter order**: `future` first, then `expectedType`
- **Default parameter**: `expectedType` defaults to `"future"` if not specified
- **Automatic type inference**: TypeScript automatically infers the return type

## Usage Examples

```typescript
// Basic usage with automatic type inference:
const success = await promisify(copyFuture, 'boolean');     // Promise<boolean>
const count = await promisify(countFuture, 'int');          // Promise<number>
const future = await promisify(someFuture);                 // Promise<Dex.Future> (default)

// Single-line operations:
await promisify(Dex.file_make_directory(dir, priority), 'boolean');
await promisify(Dex.file_copy(source, dest, flags, priority), 'boolean');
```

## What works with Dex?

- `Dex.file_make_directory()` - Creating directories
- `Dex.file_copy()` - Copying files

## What works better with GIO?

- Listing directories
- Reading/writing file contents
- Deleting files

## Installation & Start

```bash
gjsify install
gjsify run build    # Build the TypeScript files
gjsify run start    # Run the example
```

## Code Structure

```
├── main.ts          # Main application logic
├── promisify.ts     # Core API: promisify() + Type Definitions
├── utils.ts         # GIO utilities: replaceFileContents()
└── package.json
```

## Conclusion

Dex is interesting, but not everything works as expected. With our `promisify` function, we can experiment with Dex operations and use modern async/await patterns. The hybrid approach lets us use the best tool for each operation.

That's it! A simple experiment to see what's possible with Dex and how to bridge the gap between different async patterns.
