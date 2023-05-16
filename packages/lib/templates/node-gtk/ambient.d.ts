// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript
declare module 'node-gtk' {
    <%_ const pkg = dep.getNodeGtk() _%>
    <%_ if(package){ _%>
        <% if(moduleType === 'esm'){ %>
            import gi from '<%= pkg.importPath %>';
        <% } else { %>  
            import * as gi from '<%= pkg.importPath %>';
        <% } %>
    <%_ } else { _%>
        <% if(moduleType === 'esm'){ %>
            const gi: typeof import('<%= pkg.importPath %>').default;
        <% } else { %>  
            const gi: typeof import('<%= pkg.importPath %>');
        <% } %>
    <%_ } _%>
    export = gi;
}
