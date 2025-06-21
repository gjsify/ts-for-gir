import type { TypeExpression, Generic } from "../gir.ts";
import type { IntrospectedFunctionParameter } from "../gir/parameter.ts";
import type { GirVisitor } from "../visitor.ts";

export interface ClassFunctionCopyOptions<Parent> {
  parent?: Parent;
  name?: string;
  interfaceParent?: any; // Using any to avoid circular deps
  parameters?: IntrospectedFunctionParameter[];
  outputParameters?: IntrospectedFunctionParameter[];
  returnType?: TypeExpression;
}

export interface ClassFunctionOptions<Parent> {
  name: string;
  parameters?: IntrospectedFunctionParameter[];
  output_parameters?: IntrospectedFunctionParameter[];
  return_type?: TypeExpression;
  parent: Parent;
  originalParent?: Parent | null;
  doc?: string | null;
}

// Type discriminators for function types
export const FunctionTypeKind = {
  CLASS_FUNCTION: 'CLASS_FUNCTION',
  VIRTUAL_CLASS_FUNCTION: 'VIRTUAL_CLASS_FUNCTION',
  STATIC_CLASS_FUNCTION: 'STATIC_CLASS_FUNCTION',
  CONSTRUCTOR: 'CONSTRUCTOR'
} as const;

export type FunctionTypeKind = typeof FunctionTypeKind[keyof typeof FunctionTypeKind];

// Base interface for all class functions to enable type checking
export interface ClassFunctionLike {
  readonly __functionTypeKind: FunctionTypeKind;
  readonly parameters: IntrospectedFunctionParameter[];
  readonly output_parameters: IntrospectedFunctionParameter[];
  readonly generics: Generic[];
  returnTypeDoc?: string | null;
  interfaceParent?: any;
  
  anyify(): any;
  shouldAnyify(): boolean;
  return(): TypeExpression;
  getCallbackParameters(): any;
  copy(options?: any): any;
  accept(visitor: GirVisitor): any;
} 