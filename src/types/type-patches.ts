import { TypePatchesEnv } from './index.js'

export interface TypePatches {
    /** Patches for all environments */
    all: TypePatchesEnv
    /** Patches only for node.js */
    node: TypePatchesEnv
    /** Patches only for gjs */
    gjs: TypePatchesEnv
}
