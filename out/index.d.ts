declare global {
    function print(args: string): void
    function printerr(...args: any[])
    function log(message: any)
    function logError(message: any)
    const ARGV: string[]
}

export { }