<% if(moduleType === 'esm') { %>
import Gettext, { setlocale, textdomain, bindtextdomain, gettext, dgettext, dcgettext, ngettext, dngettext, pgettext, dpgettext, domain } from 'gettext';

export { setlocale, textdomain, bindtextdomain, gettext, dgettext, dcgettext, ngettext, dngettext, pgettext, dpgettext, domain }
export default Gettext;
<% } else { %>
const Gettext = imports.gettext;

module.exports = Gettext;
exports.default = Gettext;
<% } %>
