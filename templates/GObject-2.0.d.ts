// Extra interfaces used to help define GObject classes in js; these
// aren't part of gi.
export interface SignalDefinition {
    flags?: SignalFlags;
    accumulator: number;
    return_type?: Type;
    param_types?: Type[];
}

export interface MetaInfo {
    GTypeName: string;
    GTypeFlags?: TypeFlags;
    Implements?: Function[];
    Properties?: {[K: string]: ParamSpec};
    Signals?: {[K: string]: SignalDefinition};
    Requires?: Function[];
    CssName?: string;
    Template?: string;
    Children?: string[];
    InternalChildren?: string[];
}

export const GTypeName: symbol;
export const requires: symbol;
export const interfaces: symbol;
export const properties: symbol;
export const signals: symbol;
export function registerClass(metaInfo: MetaInfo, klass: Function): Function;
export function registerClass(klass: Function): Function;
export function registerClass<T extends MetaInfo | Function>(a: T, b?: Function): Function;
