import type { InjectionClass } from '../../../types/index.js'

import { classesGdkNode } from './Gdk-4.0.js'
import { classesGLibNode } from './GLib-2.0.js'
import { classesGrapheneNode } from './Graphene-1.0.js'

export const classesNode: InjectionClass[] = [...classesGdkNode, ...classesGLibNode, ...classesGrapheneNode]
