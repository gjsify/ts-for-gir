export interface IntrospectedMetadata {
    deprecated?: boolean;
    deprecatedVersion?: string;
    deprecatedDoc?: string;
    introducedVersion?: string;
}

export interface IntrospectedBaseOptions {
    isPrivate?: boolean;
    isIntrospectable?: boolean;
    doc?: string | null;
}

export type IntrospectedOptions<T> = IntrospectedBaseOptions & T;

// Aliases for backward compatibility
export type BaseOptions = IntrospectedBaseOptions;
export type Options<T> = IntrospectedOptions<T>;