import type { InjectionClass } from '../../types/index.js'

import { classesGLib20All } from './GLib-2-0.js'
import { classesGooCanvas20All } from './GooCanvas-2.0.js'
import { classesGooCanvas30All } from './GooCanvas-3.0.js'

export { classesGjs } from './gjs/index.js'
export { classesNode } from './node-gtk/index.js'
export const classesAll: InjectionClass[] = [...classesGLib20All, ...classesGooCanvas20All, ...classesGooCanvas30All]
