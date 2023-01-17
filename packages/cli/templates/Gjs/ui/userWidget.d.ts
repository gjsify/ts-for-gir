
<%_ if(useNamespace){ _%>
    import type St from '../St-1.0.js';
<%_ } else { _%>
    import type * as St from '../St-1.0.js';
<%_ } _%>

export class UserWidget extends St.BoxLayout {
    _updateUser(): void
}