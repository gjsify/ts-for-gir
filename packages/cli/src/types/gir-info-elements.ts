import { GirAnnotation } from './gir-annotation'
import { GirDocElement } from './gir-doc-element'

// Information about elements can be a documentation of annotations
// https://gitlab.gnome.org/ewlsh/gi.ts/-/blob/master/packages/parser/src/xml.ts
export interface GirInfoElements extends GirDocElement {
    annotation: GirAnnotation[]
}
