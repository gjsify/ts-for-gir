import type { InjectionClass } from '../../../types/index.js'

import { classesGObjectGjs } from './GObject-2.0.js'
import { classesGLibGjs } from './GLib-2.0.js'

export const classesGjs: InjectionClass[] = [...classesGObjectGjs, ...classesGLibGjs]
