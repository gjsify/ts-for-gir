<% if(moduleType === 'esm') { %>
import System, { programInvocationName, version, programPath, programArgs, exit, addressOfGObject, addressOf, gc, refcount, dumpHeap, dumpMemoryInfo } from 'system';

export { programInvocationName, version, programPath, programArgs, exit, addressOfGObject, addressOf, gc, refcount, dumpHeap, dumpMemoryInfo };
export default System;
<% } else { %>
const System = imports.system;

module.exports = System;
exports.default = System;
<% } %>