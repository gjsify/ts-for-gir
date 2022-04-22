import { PartOfClass, GirTransferOwnership, GirDocElement, GirAnyType, GirUnparsedNumber, GirBoolean } from './index.js'

export interface GirCallableReturn extends PartOfClass, GirAnyType, GirDocElement {
    /** return value of a callable */
    $: {
        name?: string
        /** Binary attribute which is BinaryOption(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
        introspectable?: GirBoolean
        /** Binary attribute, true if the parameter can have a null value */
        nullable?: GirBoolean
        /** the parameter is a user_data for callbacks. The value points to a different parameter that is the actual callback */
        closure?: GirUnparsedNumber /** integer */
        /** the parameter is a callback, the value indicates the lifetime of the call. For language bindings which want to know when the resources required to do the call can be freed. "notified" valid until a GDestroyNotify argument is called, "async" only valid for the duration of the first callback invocationi (can only be called once), "call" only valid for the duration of the call, can be called multiple times during the call.  */
        scope?: 'notified' | 'async' | 'call'
        /** the parameter is a destroy_data for callbacks. The value points to a different parameter that is the actual callback */
        destroy?: GirUnparsedNumber /** integer */
        /**  Binary attribute, true if the parameter can be omitted from the introspected output */
        skip?: GirBoolean
        /** @deprecated Replaced by nullable and optional */
        'allow-none'?: GirBoolean
    } & Partial<GirTransferOwnership>

    // CUSTOM
    girTypeName?: 'callable-return'
}
