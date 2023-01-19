// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/userWidget.js
<%_ if(useNamespace){ _%>
    import type St from '../St-1.0.js';
<%_ } else { _%>
    import type * as St from '../St-1.0.js';
<%_ } _%>

export class UserWidget extends St.BoxLayout {

}