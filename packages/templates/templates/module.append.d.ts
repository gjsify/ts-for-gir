<%_ if (!noNamespace) { _%>
}

export default <%- girModule.namespace %>;
<%_ } _%>

<%_ if (!package) { _%>
}

<%_ if (!onlyVersionPrefix) { _%>
declare module 'gi://<%- girModule.namespace %>' {
    import <%- girModule.importNamespace %> from 'gi://<%- girModule.namespace %>?version=<%- girModule.version %>';
    export default <%- girModule.importNamespace %>;
}
<%_ } _%>
<%_ } _%>
// END
