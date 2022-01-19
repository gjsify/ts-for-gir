const { require: giRequire } = require('node-gtk');
const <%= name %> = giRequire('<%= name %>', '<%= version %>');
module.exports = <%= name %>;
exports.default = <%= name %>;