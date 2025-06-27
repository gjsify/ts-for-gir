export * from './answer-version.ts'
export * from './any-introspected-type.ts'
export * from './class-member.ts'
export * from './class-parent.ts'
export * from './class.ts'
export * from './config-flags.ts'
export * from './construct-name.ts'
export * from './dependency-map.ts'
export * from './dependency.ts'
export * from './file-info.ts'
export * from './format.ts'
export * from './generator-constructor.ts'
export * from './generics-config.ts'
// Re-export GIR types from parser (consolidated types)
export type {
    GirAliasElement,
    GirAnnotation,
    GirBitfieldElement,
    GirCallableParamElement,
    GirCallableParams,
    GirCallableReturn,
    GirCallbackElement,
    GirClassElement,
    GirConstantElement,
    GirConstructorElement,
    GirEnumElement,
    GirFieldElement,
    GirFunctionElement,
    GirInterfaceElement,
    GirMemberElement,
    GirMethodElement,
    GirModuleResolvedBy,
    GirModulesGrouped,
    GirModulesGroupedMap,
    GirNamespace,
    GirPropertyElement,
    GirRecordElement,
    GirRepository,
    GirSignalElement,
    GirUnionElement,
    GirVirtualMethodElement,
    PartOfClass,
    PartOfModule,
    // Re-export base XML types that are still needed
    GirUnparsedNumber,
    GirInstanceParameter,
} from '@gi.ts/parser'

// Export the actual GirModule class
export { GirModule } from '../gir-module.ts'

export * from './gir-any-element.ts'
export * from './inheritance-table.ts'
export * from './introspected.ts'
export * from './local-name-check.ts'
export * from './local-name-type.ts'
export * from './local-name.ts'
export * from './local-names.ts'
export * from './metadata.ts'
export * from './ns-loader.ts'
export * from './options-base.ts'
export * from './options-generation.ts'
export * from './options-load.ts'
export * from './options-transform.ts'
export * from './output-format.ts'
export * from './package-data-parsed.ts'
export * from './package-data.ts'
export * from './package-section-parsed.ts'
export * from './parsed-gir.ts'
export * from './parsed-package-data.ts'
export * from './property-case.ts'
export * from './resolve-type.ts'
export * from './template-data.ts'
export * from './transformation-case.ts'
export * from './transformations.ts'
export * from './ts-doc-tag.ts'
export * from './ts-doc.ts'
export * from './type-gir-alias.ts'
export * from './type-gir-class.ts'
export * from './type-gir-element.ts'
export * from './type-gir-enumeration.ts'
export * from './type-gir-enumeration-member.ts'
export * from './type-gir-function.ts'
export * from './type-gir-interface.ts'
export * from './type-gir-method.ts'
export * from './type-gir-parameter.ts'
export * from './type-gir-property.ts'
export * from './type-gir-variable.ts'
export * from './type-ts-element.ts'
export * from './type-ts-enumeration-member.ts'
export * from './type-ts-function.ts'
export * from './type-ts-property.ts'
export * from './user-config-load-result.ts'
export * from './user-config.ts'
