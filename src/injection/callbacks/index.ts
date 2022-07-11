import type { InjectionCallback } from '../../types/index.js'

export { callbacksGjs } from './gjs/index.js'
export { callbacksNode } from './node-gtk/index.js'

export const callbacksAll: InjectionCallback[] = []
