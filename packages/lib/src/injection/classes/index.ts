import type { InjectionClass } from '../../types/index.js'

import { classesGLib20All } from './glib-2.0.js'
import { classesGooCanvas20All } from './goocanvas-2.0.js'
import { classesGooCanvas30All } from './goocanvas-3.0.js'

export { classesGjs } from './gjs/index.js'
export { classesNode } from './node-gtk/index.js'
export const classesAll: InjectionClass[] = [...classesGLib20All, ...classesGooCanvas20All, ...classesGooCanvas30All]
