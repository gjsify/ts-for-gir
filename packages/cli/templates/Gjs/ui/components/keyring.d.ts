// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/components/keyring.js
<%_ if(useNamespace){ _%>
    // TODO: on Ubuntu 22.04 this is Gcr-3
    // import type Gcr from '../Gcr-4.js';
<%_ } else { _%>
    // TODO: on Ubuntu 22.04 this is Gcr-3
    // import type * as Gcr from '../Gcr-4.js';
<%_ } _%>

declare class KeyringPrompter /*extends Gcr.SystemPrompter */{
    constructor();
    _init(): void

    enable(): void
    disable(): void
}

export declare const Component: typeof KeyringPrompter