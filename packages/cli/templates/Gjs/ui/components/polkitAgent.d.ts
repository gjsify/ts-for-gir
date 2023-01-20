// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/components/polkitAgent.js

<% const shell = dep.find('Shell') %>

<%_ if(useNamespace){ _%>
    import type Shell from '../../<%= shell.packageName %>.js';
<%_ } else { _%>
    import type * as Shell from '../../<%= shell.packageName %>.js';
<%_ } _%>

declare class AuthenticationAgent extends Shell.PolkitAuthenticationAgent {
    constructor()
    _init(): void

    enable(): void
    disable(): void
}

export declare const Component: typeof AuthenticationAgent