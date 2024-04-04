import * as parser from '@gi.ts/parser'

/**
 * instance-parameter is a parameter of a C function which is an instance of an existing object.
 * So the callable is surely a method of a class, and this parameter points to the instance of the object.
 * In C++, this would be equivalent to the pointer this which is not passed to the method, in Python it's equivalent to self.
 **/
export interface GirInstanceParameter extends parser.GirInstanceParameter {}
