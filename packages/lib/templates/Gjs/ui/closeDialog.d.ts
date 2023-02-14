<% const GObject = dep.find('GObject') %>
<% const Meta = dep.find('Meta') %>

<%_ if(noNamespace){ _%>
    import type * as GObject from '../<%= GObject.packageName %>.js';
    import type * as Meta from '../<%= Meta.packageName %>.js';
<%_ } else { _%>
    import type GObject from '../<%= GObject.packageName %>.js';
    import type Meta from '../<%= Meta.packageName %>.js';
<%_ } _%>

import { Dialog, MessageDialogContent } from './dialog.js'

export class CloseDialog extends GObject.Object {

    protected _window: Meta.Window;
    protected _dialog: Dialog | null;
    protected _tracked: boolean;
    protected _timeoutId: number;

    public window: Meta.Window;


    public constructor(window: Meta.Window);
    public _init(window: Meta.Window): void;

    protected _createDialogContent(): MessageDialogContent;
    protected _updateScale(): void;
    protected _initDialog(): void;
    protected _addWindowEffect(): void;
    protected _removeWindowEffect(): void;
    protected _onWait(): void;
    protected _onClose(): void;
    protected _onFocusChanged(): void;

    public vfunc_show(): void;
    public vfunc_hide(): void;
    public vfunc_focus(): void;

}