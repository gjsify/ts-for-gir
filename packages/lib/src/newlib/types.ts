export type PropertyCase = "both" | "camel" | "underscore";
export type Format = "dts" | "json";

export interface Options {
    verbose: boolean;
}

export interface LoadOptions extends Options {
    loadDocs: boolean;
    propertyCase: PropertyCase;
}

export interface TransformOptions extends Options {
    inferGenerics: boolean;
}

export type OutputFormat = "file" | "folder";

export interface GenerationOptions extends Options {
    [key: string]: boolean | string | number | undefined;
    outputFormat?: string;
    outputPath?: string;
    promisify: boolean;
    withDocs: boolean;
    format: string;
    versionedOutput: boolean;
    versionedImports: boolean;
    /**
     * A format for versioned imports
     *
     * @example
     * "{namespace}{version}{version-slug}"
     */
    versionFormat?: string;
    importPrefix: string;
    emitMetadata: boolean;
    noAdvancedVariants: boolean;
    noPrettyPrint: boolean;
    noInitTypes: boolean;
}

export interface Metadata {
    name: string;
    package_version: string;
    api_version: string;
    imports: { [lib: string]: string };
}
