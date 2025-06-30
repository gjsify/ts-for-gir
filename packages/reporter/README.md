# @ts-for-gir/reporter

<p align="center">
<img src="https://img.shields.io/npm/v/@ts-for-gir/reporter" />
<img src="https://img.shields.io/npm/dw/@ts-for-gir/reporter" />
</p>

Comprehensive reporting system for the ts-for-gir project that provides structured problem tracking, statistics generation, and flexible output formatting with dependency injection pattern.

## Features

- **🔧 Dependency Injection**: Abstract base class with configurable reporter implementations
- **📊 Problem Tracking**: Structured tracking of type resolution issues, conflicts, and generation problems
- **📈 Statistics**: Comprehensive statistics collection and reporting
- **🎨 Flexible Output**: Multiple output formats (console, files) with colorized output
- **🔍 Categorization**: Problems are categorized by severity and type for better analysis
- **💾 Export Capabilities**: Export reports to JSON, text, or custom formats

## Installation

```bash
npm install @ts-for-gir/reporter
```

## Usage

### Basic Console Reporting

```typescript
import { ConsoleReporter } from '@ts-for-gir/reporter';

// Create a console reporter with basic configuration
const reporter = new ConsoleReporter(
  true,           // verbose mode
  "MyModule",     // module name
  true,           // enable reporting
  "./reports"     // output directory (optional)
);

// Report a problem
reporter.reportProblem({
  severity: ProblemSeverity.WARNING,
  category: ProblemCategory.TYPE_RESOLUTION,
  message: "Unable to resolve type 'SomeType'",
  context: {
    file: "MyModule.gir",
    line: 123,
    element: "SomeType"
  }
});

// Generate final report
const report = reporter.generateReport();
console.log(`Total problems: ${report.statistics.totalProblems}`);
```

### Advanced Usage with Custom Configuration

```typescript
import { ConsoleReporter, ReporterConfig } from '@ts-for-gir/reporter';

const config: ReporterConfig = {
  enableConsoleOutput: true,
  enableFileOutput: true,
  outputDirectory: "./custom-reports",
  colorizeOutput: true,
  includeStackTrace: false,
  maxProblemsPerCategory: 100
};

const reporter = new ConsoleReporter(
  true,
  "AdvancedModule", 
  true,
  "./reports",
  config
);
```

### Using ReporterService for Multiple Reporters

```typescript
import { ReporterService, ConsoleReporter } from '@ts-for-gir/reporter';

const service = new ReporterService();

// Register multiple reporters
service.registerReporter('console', new ConsoleReporter(true, "Main", true));
service.registerReporter('file', new FileReporter(true, "Main", true, "./logs"));

// Report to all registered reporters
service.reportToAll({
  severity: ProblemSeverity.ERROR,
  category: ProblemCategory.TYPE_CONFLICT,
  message: "Type conflict detected",
  context: { file: "test.gir" }
});

// Generate consolidated report
const consolidatedReport = service.generateConsolidatedReport();
```

## Problem Categories

The reporter system categorizes problems into the following types:

- **TYPE_RESOLUTION**: Issues with resolving types from GIR data
- **TYPE_CONFLICT**: Conflicts between different type definitions
- **GENERATION_ERROR**: Errors during TypeScript generation
- **VALIDATION_WARNING**: Validation warnings for generated code
- **DEPENDENCY_ISSUE**: Problems with dependency resolution
- **DOCUMENTATION_MISSING**: Missing or incomplete documentation

## Problem Severities

- **ERROR**: Critical issues that prevent successful generation
- **WARNING**: Issues that may affect quality but don't block generation
- **INFO**: Informational messages for debugging and analysis

## API Reference

### ConsoleReporter

The main reporter implementation with console and file output capabilities.

#### Constructor

```typescript
constructor(
  verbose: boolean,
  buildType: string,
  reporter: boolean,
  reporterOutput?: string,
  config?: ReporterConfig
)
```

#### Methods

- `reportProblem(problem: ProblemEntry): void` - Report a single problem
- `reportProblems(problems: ProblemEntry[]): void` - Report multiple problems
- `generateReport(): GenerationReport` - Generate comprehensive report
- `exportToFile(filename: string): Promise<void>` - Export report to file

### ReporterBase

Abstract base class for implementing custom reporters.

```typescript
abstract class ReporterBase {
  abstract reportProblem(problem: ProblemEntry): void;
  abstract generateReport(): GenerationReport;
  // ... other abstract methods
}
```

### ReporterService

Service for managing multiple reporter instances.

- `registerReporter(name: string, reporter: ReporterBase): void`
- `reportToAll(problem: ProblemEntry): void`
- `generateConsolidatedReport(): GenerationReport`

## Integration with ts-for-gir

This package is designed to integrate seamlessly with the ts-for-gir generator system:

```typescript
import { ConsoleReporter } from '@ts-for-gir/reporter';
import { GirModule } from '@ts-for-gir/lib';

const reporter = new ConsoleReporter(true, "Gtk-4.0", true);
const girModule = new GirModule(options, reporter);
```

## Development

This package is part of the ts-for-gir monorepo and follows the same development patterns:

```bash
# Type checking
yarn check

# Run tests
yarn test

# Format code
yarn format
```

## License

Apache-2.0 - see the [LICENSE](../../LICENSE) file for details. 