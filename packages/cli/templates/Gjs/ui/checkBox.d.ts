<% const St = dep.find('St') %>

<%_ if(noNamespace){ _%>
    import type * as St from '../<%= St.packageName %>.js';
<%_ } else { _%>
    import type St from '../<%= St.packageName %>.js';
<%_ } _%>

export class CheckBox extends St.Button {

    protected _box: St.Bin;
    protected _label: St.Label;

    constructor(label?: string);
    /** @hidden */
    public _init(params?: St.Button.ConstructorProperties): void;
    public _init(label?: string): void;

    public setLabel(label: string): void;
    public getLabelActor(): St.Label;

}