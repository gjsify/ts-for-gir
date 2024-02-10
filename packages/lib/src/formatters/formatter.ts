export abstract class Formatter {
    abstract format(source: string): Promise<string>;
}
