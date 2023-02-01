// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/components/keyring.js

<% const gcr = dep.find('Gcr') %>

<%_ if(noNamespace){ _%>
    import type * as Gcr from '../../<%= gcr.packageName %>.js';
<%_ } else { _%>
    import type Gcr from '../../<%= gcr.packageName %>.js';
<%_ } _%>

declare class KeyringPrompter extends Gcr.SystemPrompter {
    constructor();
    _init(): void

    enable(): void
    disable(): void
}

export declare const Component: typeof KeyringPrompter