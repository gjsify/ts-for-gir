import { GirBoolean, GirCallableParamElement, GirAnyType, GirTransferOwnership, GirDirection, GirType } from '.'

// Refer to https://wiki.gnome.org/Projects/GObjectIntrospection/Annotations#Support_for_GObject_closures
export interface GirCallableParams {
    /** parameters element of a callable, that is in general parameters of a function or similar */
    parameter: GirCallableParamElement[]
    /** instance-parameter is a parameter of a C function which is an instance of an existing object. So the callable is surely a method of a class, and this parameter points to the instance of the object. In C++, this would be equivalent to the pointer this which is not passed to the method, in Python it's equivalent to self. */
    'instance-parameter'?: GirAnyType &
        {
            $: Partial<{
                /** name of the instance-parameter */ name: string
                /** Binary attribute, true if the parameter can have a null value */
                nullable?: GirBoolean
                /** Deprecated. Replaced by nullable and optional */
                'allow-none'?: GirBoolean
                /** direction of the parameter. "in" goes into the callable, "out" for output parameters from the callable (reference in C++, var in Pascal, etc...), "inout" for both (like a pre-allocated structure which will be filled-in by the callable) */
                direction?: GirDirection
                /** Binary attribute, true if the caller should allocate the parameter before calling the callable */
                'caller-allocates'?: GirBoolean
            }> &
                Partial<GirTransferOwnership>
            type?: GirType
        }[]
}
