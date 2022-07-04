import type { InjectionClass } from '../../types/index.js'

import { classesGLibAll } from './GLib-2-0.js'
import { classesGioAll } from './Gio-2.0.js'

export { classesGjs } from './gjs/index.js'
export { classesNode } from './node-gtk/index.js'
export const classesAll: InjectionClass[] = [...classesGLibAll, ...classesGioAll]
