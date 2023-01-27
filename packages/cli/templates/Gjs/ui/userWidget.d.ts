// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/userWidget.js

<% const St = dep.find('St') %>

<%_ if(useNamespace){ _%>
    import type St from '../<%= St.packageName %>.js';
<%_ } else { _%>
    import type * as St from '../<%= St.packageName %>.js';
<%_ } _%>

export class UserWidget extends St.BoxLayout {

}