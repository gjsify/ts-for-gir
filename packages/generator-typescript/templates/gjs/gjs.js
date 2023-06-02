const imports = globalThis.imports || {};

<%_ if(moduleType === 'esm') { _%>
export { imports }
export default imports;
<%_ } else { _%>  
module.exports = imports;
exports.default = imports;
<%_ } _%>
  