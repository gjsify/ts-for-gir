/**
 * Type definitions for command structure and exports
 */
import type { 
    GenerateCommandArgs, 
    ListCommandArgs, 
    CopyCommandArgs, 
    DocCommandArgs
} from './command-args.ts'
import type { CommandDefinition } from './command-definition.ts'

/**
 * Generate command definition type
 */
export type GenerateCommand = CommandDefinition<GenerateCommandArgs>

/**
 * List command definition type
 */
export type ListCommand = CommandDefinition<ListCommandArgs>

/**
 * Copy command definition type
 */
export type CopyCommand = CommandDefinition<CopyCommandArgs>

/**
 * Doc command definition type
 */
export type DocCommand = CommandDefinition<DocCommandArgs>

/**
 * Union type for all command types
 */
export type AnyCommand = GenerateCommand | ListCommand | CopyCommand | DocCommand