/**
 * fontconfig-2.0
 */

import "node"
import type { GObject } from './GObject-2.0';

declare namespace fontconfig {

function init(): void
class Pattern {
    static name: string
}
class CharSet {
    static name: string
}
}
export default fontconfig