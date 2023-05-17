<%#
    This EJS template is used to extend the global NodeGtkGi interface with the GIR module, for `gi.require(namespace) node-gtk GIR types`
%>
<%_ const pkg = dep.get(girModule.namespace, girModule.version) _%>
<%_ if(package){ _%>
    <%_ if(noNamespace){ _%>
import * as <%= girModule.importNamespace %> from '<%= pkg.importPath %>';
    <%_ } else { _%>
import <%= girModule.importNamespace %> from '<%= pkg.importPath %>';
    <%_ } _%>
<%_ } else { _%>
    <%_ if(noNamespace){ _%>
type <%= girModule.importNamespace %> = typeof import('<%= pkg.importPath %>');
    <%_ } else { _%>
type <%= girModule.importNamespace %> = typeof import('<%= pkg.importPath %>').default;
    <%_ } _%>
<%_ } _%>

declare global {
    interface NodeGtkGi {
        <%_ if(package){ _%>
        require(ns: '<%= girModule.namespace %>', ver?: '<%= girModule.version %>'): typeof <%= girModule.importNamespace %>;
        <%_ } else { _%>
        require(ns: '<%= girModule.namespace %>', ver?: '<%= girModule.version %>'): <%= girModule.importNamespace %>;
        <%_ } _%>
    }
}

export default NodeGtkGi;