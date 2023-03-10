import type { InjectionClass } from '../../../types/index.js'

import { classesGdk40Node } from './gdk-4.0.js'
import { classesGio20Node } from './gio-2.0.js'
import { classesGLib20Node } from './glib-2.0.js'
import { classesGObject20Node } from './gobject-2.0.js'
import { classesGraphene10Node } from './graphene-1.0.js'
import { classesGtk30Node } from './gtk-3.0.js'
import { classesGtk40Node } from './gtk-4.0.js'
import { classesPango10Node } from './pango-1.0.js'

export const classesNode: InjectionClass[] = [
    ...classesGdk40Node,
    ...classesGio20Node,
    ...classesGLib20Node,
    ...classesGObject20Node,
    ...classesGraphene10Node,
    ...classesGtk30Node,
    ...classesGtk40Node,
    ...classesPango10Node,
]
