import { GirCallableParamElement, GirInstanceParameter } from './index.js'

// Refer to https://wiki.gnome.org/Projects/GObjectIntrospection/Annotations#Support_for_GObject_closures
export interface GirCallableParams {
    /** parameters element of a callable, that is in general parameters of a function or similar */
    parameter: GirCallableParamElement[]
    /** instance-parameter is a parameter of a C function which is an instance of an existing object. So the callable is surely a method of a class, and this parameter points to the instance of the object. In C++, this would be equivalent to the pointer this which is not passed to the method, in Python it's equivalent to self. */
    'instance-parameter'?: GirInstanceParameter[]
}
