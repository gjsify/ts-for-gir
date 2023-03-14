import type {
    GirBoolean,
    GirUnparsedNumber,
    GirInfoAttrs,
    GirDocElement,
    GirAnyType,
    GirTransferOwnership,
    GirDirection,
    GirVarArgs,
    PartOfClass,
    TsParameter,
} from './index.js'

export interface GirCallableParamElement extends PartOfClass, GirDocElement, GirAnyType {
    /** parameter element of a list of parameters */
    $: GirInfoAttrs &
        Partial<GirTransferOwnership> & {
            /** name of the parameter */
            name?: string
            /** Binary attribute, `true` if the parameter can have a null value */
            nullable?: GirBoolean
            /** @deprecated Replaced by {@link allow-none} */
            'null-ok'?: GirBoolean
            /** @deprecated Replaced by {@link nullable} and {@link optional} */
            'allow-none'?: GirBoolean
            /** Binary attribute which is GirBoolean(false) if the element is not introspectable. It doesn't exist in the bindings, due in general to missing information in the annotations in the original C code */
            introspectable?: GirBoolean
            /** the parameter is a user_data for callbacks. The value points to a different parameter that is the actual callback */
            closure?: GirUnparsedNumber /** integer */
            /** the parameter is a destroy_data for callbacks. The value points to a different parameter that is the actual callback */
            destroy?: GirUnparsedNumber /** integer */
            /** the parameter is a callback, the value indicates the lifetime of the call. For language bindings which want to know when the resources required to do the call can be freed. "notified" valid until a GDestroyNotify argument is called, "async" only valid for the duration of the first callback invocation (can only be called once), "call" only valid for the duration of the call, can be called multiple times during the call.  */
            scope?: 'notified' | 'async' | 'call'
            /** direction of the parameter. "in" goes into the callable, "out" for output parameters from the callable (reference in C++, var in Pascal, etc...), "inout" for both (like a pre-allocated structure which will be filled-in by the callable) */
            direction?: GirDirection
            /** Binary attribute, `true` if the caller should allocate the parameter before calling the callable */
            'caller-allocates'?: GirBoolean
            /** Binary attribute, `true` if the parameter is optional */
            optional?: GirBoolean
            /** Binary attribute, `true` if the parameter can be omitted from the introspected output */
            skip?: GirBoolean
        }

    varargs?: GirVarArgs[]

    _tsData?: TsParameter
}
