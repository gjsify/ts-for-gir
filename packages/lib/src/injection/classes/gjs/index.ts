import type { InjectionClass } from '../../../types/index.js'

import { classesGio20Gjs } from './gio-2.0.js'
import { classesGObject20Gjs } from './gobject-2.0.js'
import { classesGLib20Gjs } from './glib-2.0.js'

export const classesGjs: InjectionClass[] = [...classesGio20Gjs, ...classesGObject20Gjs, ...classesGLib20Gjs]
