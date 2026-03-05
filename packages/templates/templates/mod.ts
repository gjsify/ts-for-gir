<%_
// This template is used to generate a mod.ts entry point for JSR packages.
// It re-exports the main type definitions and provides a runtime stub via globalThis.imports.gi.
let entryPointName = importName
if (packageName === 'Gjs') {
  entryPointName = 'gjs'
}
_%>
<%_ if (packageName === 'Gjs') { _%>
import type GjsType from './<%- entryPointName %>.d.ts';

const imports = (globalThis as any).imports || {};

export { imports };
export default imports as typeof GjsType;
<%_ } else { _%>
import type <%- name %>Type from './<%- entryPointName %>.d.ts';

const gi = (globalThis as any).imports?.gi || { <%- name %>: {} as typeof <%- name %>Type };

export const <%- name %>: typeof <%- name %>Type = gi.<%- name %>;
export default <%- name %>;
<%_ } _%>
