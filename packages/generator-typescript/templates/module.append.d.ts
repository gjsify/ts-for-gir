<%_ if(!package){ -%>
}

<%_ if(!onlyVersionPrefix){ -%>
declare module 'gi://<%- girModule.namespace %>' {
    import <%- girModule.importNamespace %> from 'gi://<%- girModule.namespace %>?version=<%- girModule.version %>';
    export default <%- girModule.importNamespace %>;
}
<% } -%>
<% } -%>
// END