<% if(moduleType === 'esm') { %>
import Cairo from 'cairo';

// cairo doesn't have named exports, see https://gitlab.gnome.org/GNOME/gjs/-/blob/c2a714f348d6848037f072063e0a914fd537c4f4/installed-tests/js/testCairoModule.js#L14
export default Cairo;
<% } else { %>
const Cairo = imports.cairo;

module.exports = Cairo;
exports.default = Cairo;
<% } %>
