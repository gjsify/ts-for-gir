export interface TsGenericParameter {
    /** E.g. `T` */
    name?: string
    /** The default type if the generic. E.g. `T = GObject.Object`, `T = any` or `T = unknown` */
    value?: string
    /** E.g. `GObject.Object` */
    extends?: string
}
