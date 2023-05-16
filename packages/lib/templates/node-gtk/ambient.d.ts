// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript
declare module 'node-gtk' {
    <%_ const pkg = dep.getNodeGtk() _%>
    <%_ if(package){ _%>
        <% if(moduleType === 'esm'){ %>
            import gi from '<%= pkg.importPath %>';
        <% } else { %>  
            export * as gi from '<%= pkg.importPath %>';
        <% } %>
    <%_ } else { _%>
        <% if(moduleType === 'esm'){ %>
            type gi = typeof import('<%= pkg.importPath %>');
        <% } else { %>  
            type gi = typeof import('<%= pkg.importPath %>').default;
        <% } %>
    <%_ } _%>
    export = gi;
}
