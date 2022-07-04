import type { InjectionClass } from '../../../types/index.js'

import { classesGio20Gjs } from './Gio-2.0.js'
import { classesGObject20Gjs } from './GObject-2.0.js'
import { classesGLib20Gjs } from './GLib-2.0.js'

export const classesGjs: InjectionClass[] = [...classesGio20Gjs, ...classesGObject20Gjs, ...classesGLib20Gjs]
