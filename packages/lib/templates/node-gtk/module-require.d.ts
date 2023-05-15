<%_ const pkg = dep.get(girModule.namespace, girModule.version) _%>
<%_ if(package){ _%>
    <%_ if(noNamespace){ _%>
import * as <%= girModule.importNamespace %> from '.';
    <%_ } else { _%>
import <%= girModule.importNamespace %> from '.';
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
        require(ns: '<%= girModule.namespace %>', ver?: '<%= girModule.version %>'): typeof <%= girModule.importNamespace %>;
    }
}
