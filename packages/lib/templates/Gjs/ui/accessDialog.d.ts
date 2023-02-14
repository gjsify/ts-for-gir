// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/accessDialog.js

export namespace AccessDialogDBus {
    export interface AccessDialogAsyncParams {
        handle: string;
        appId: string;
        parentWindow_: any;
        title: string;
        description: string;
        body: any;
        options: any;
    }
}

export class AccessDialogDBus {
    constructor();

    AccessDialogAsync(params: AccessDialogDBus.AccessDialogAsyncParams, invocation: any): void;
}