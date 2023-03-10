import type { InjectionClass } from '../../types/index.js'

import { classesGLib20All } from './glib-2.0.js'

export { classesGjs } from './gjs/index.js'
export { classesNode } from './node-gtk/index.js'
export const classesAll: InjectionClass[] = [...classesGLib20All]
