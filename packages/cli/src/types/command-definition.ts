/**
 * Base interface for command definition structure
 */
export interface CommandDefinition<TArgs> {
    /** Command name and parameters */
    command: string
    /** Command description */
    description: string
    /** Builder function for yargs configuration */
    builder: (yargs: any) => any
    /** Handler function for command execution */
    handler: (args: TArgs) => Promise<void>
    /** Example usage array */
    examples: ReadonlyArray<[string, string?]>
}