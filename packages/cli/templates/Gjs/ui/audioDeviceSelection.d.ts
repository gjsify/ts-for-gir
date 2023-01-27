// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/audioDeviceSelection.js

<% const Gio = dep.find('Gio') %>
<% const St = dep.find('St') %>

<%_ if(useNamespace){ _%>
    import type Gio from '../<%= Gio.packageName %>.js';
    import type St from '../<%= St.packageName %>.js';
<%_ } else { _%>
    import type * as Gio from '../<%= Gio.packageName %>.js';
    import type * as St from '../<%= St.packageName %>.js';
<%_ } _%>

import type { ModalDialog } from './modalDialog.js';

export enum AudioDevice {
    HEADPHONES = 1 << 0,
    HEADSET =    1 << 1,
    MICROPHONE = 1 << 2,
}

declare class AudioDeviceSelectionDialog extends ModalDialog {

    constructor(devices: number);

    /** @hidden */
    public _init(params?: St.Widget.ConstructorProperties): void;
    /** @hidden */
    public _init(props?: ModalDialog.ConstructorProperties): void;
    public _init(devices: number): void;


    protected _buildLayout(): void;
    protected _getDeviceLabel(device: AudioDevice): string | null;
    protected _getDeviceIcon(device: AudioDevice): string | null;
    protected _addDevice(device: AudioDevice): void;
    protected _openSettings(): void;
}

export class AudioDeviceSelectionDBus {
    protected _audioSelectionDialog: AudioDeviceSelectionDialog | null;
    protected _dbusImpl: Gio.DBusExportedObject;

    constructor();

    protected _onDialogClosed(): void;
    protected _onDeviceSelected(dialog: AudioDeviceSelectionDialog, device: AudioDevice): void;

    OpenAsync(params: string[], invocation: Gio.DBusMethodInvocation): void;
    CloseAsync(params: any, invocation: Gio.DBusMethodInvocation): void;
}