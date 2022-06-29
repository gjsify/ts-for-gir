export interface TsGenericParameter {
    /** E.g. `T` */
    name?: string
    /** E.g. `GObject.Object`, `any` or `unknown` */
    value?: string
    /** E.g. `GObject.Object` */
    extends?: string
}
