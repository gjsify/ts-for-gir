declare global {
    function print(...args: any[]): void
    function printerr(...args: any[]): void
    function log(exception: any, message?: string)
    function logError(exception: any, message?: string)
    const ARGV: string[]
}

export { }