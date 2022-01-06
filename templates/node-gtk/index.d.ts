/* eslint-disable @typescript-eslint/triple-slash-reference */
<%_ for (const girModule of girModules) { _%>
    <%_ if (buildType === 'lib') { _%>
import * as <%= girModule.importName %> from './<%= girModule.packageName %>';
    <%_ } _%>
    <%_ if (buildType === 'types') { _%>
import type { <%= girModule.namespace %> as <%= girModule.importName %> } from "./<%= girModule.packageName %>";
    <%_ } _%>
<%_ } _%>

<%_ if (buildType === 'types') { _%>
declare module 'node-gtk' {
<%_ } _%>
    export function require(ns: string, ver?: string): any;
    <%_ for (const girModule of girModules) { _%>
<<<<<<< HEAD
        export function require(ns: '<%= girModule.namespace %>', ver: '<%= girModule.version %>'): typeof <%= girModule.importName %>;
=======
        export function require(ns: '<%= girModule.importName %>', ver?: '<%= girModule.version %>'): typeof <%= girModule.importName %>;
>>>>>>> a7f7b0a (Small fixes)
    <%_ } _%>
    export function startLoop(): void;
<%_ if (buildType === 'types') { _%>
}
<%_ } _%>
