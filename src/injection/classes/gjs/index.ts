import type { InjectionClass } from '../../../types/index.js'

import { classesGObject20Gjs } from './GObject-2.0.js'
import { classesGLib20Gjs } from './GLib-2.0.js'

export const classesGjs: InjectionClass[] = [...classesGObject20Gjs, ...classesGLib20Gjs]
