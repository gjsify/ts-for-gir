import { TypeTsFunction, TypeTsProperty } from './index.js'

/** Any typescript element type */
export type TypeTsElement =
    | 'class'
    | 'interface'
    | 'enum'
    | 'enum-member'
    | 'constant'
    | 'event-methods'
    | 'type'
    | TypeTsFunction
    | TypeTsProperty
