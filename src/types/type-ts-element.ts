import { TypeTsFunction } from './index.js'

/** Any typescript element type */
export type TypeTsElement =
    | 'class'
    | 'interface'
    | 'enum'
    | 'enum-member'
    | 'constant'
    | 'event-methods'
    | 'type'
    | 'property'
    | 'static-property'
    | TypeTsFunction
