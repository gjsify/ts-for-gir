import type { TsProperty, InjectionType } from './index.js'

export interface InjectionProperty
    extends Pick<TsProperty, 'name' | 'girTypeName'>,
        Partial<Pick<TsProperty, 'readonly' | 'isStatic' | 'isInjected' | 'doc'>> {
    type?: InjectionType[]
}
