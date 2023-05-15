
<%_ if(!noNamespace){ _%>
declare global {
    export interface GjsGiImports {
        <%= name %>: typeof <%= girModule.namespace %>;
    }
}
<%_ } _%>

// END