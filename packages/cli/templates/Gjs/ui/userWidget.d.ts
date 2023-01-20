// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/userWidget.js

<% const st = dep.find('St') %>

<%_ if(useNamespace){ _%>
    import type St from '../<%= st.packageName %>.js';
<%_ } else { _%>
    import type * as St from '../<%= st.packageName %>.js';
<%_ } _%>

export class UserWidget extends St.BoxLayout {

}