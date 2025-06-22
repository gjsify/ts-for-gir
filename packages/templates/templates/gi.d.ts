// @ts-nocheck
/**
 * This file exports all GIR module type definitions.
 */

<%_ for (const girModule of girModules) { -%>
import './<%= girModule.importName %>.d.ts';
<%_ } -%>