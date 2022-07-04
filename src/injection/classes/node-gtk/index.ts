import type { InjectionClass } from '../../../types/index.js'

import { classesGdk40Node } from './Gdk-4.0.js'
import { classesGLib20Node } from './GLib-2.0.js'
import { classesGObject20Node } from './GObject-2.0.js'
import { classesGraphene10Node } from './Graphene-1.0.js'
import { classesGtk30Node } from './Gtk-3.0.js'
import { classesGtk40Node } from './Gtk-4.0.js'
import { classesPango10Node } from './Pango-1.0.js'

export const classesNode: InjectionClass[] = [
    ...classesGdk40Node,
    ...classesGLib20Node,
    ...classesGObject20Node,
    ...classesGraphene10Node,
    ...classesGtk30Node,
    ...classesGtk40Node,
    ...classesPango10Node,
]
