// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/components/polkitAgent.js

<% const Shell = dep.find('Shell', '../..') %>
<%- Shell ? Shell.importDef : '' %>

declare class AuthenticationAgent extends Shell.PolkitAuthenticationAgent {
    constructor()
    _init(): void

    enable(): void
    disable(): void
}

export declare const Component: typeof AuthenticationAgent