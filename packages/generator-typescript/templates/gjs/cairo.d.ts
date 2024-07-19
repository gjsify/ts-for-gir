<%_ if(!package){ -%>
declare module 'cairo' {
<% } -%>

// TODO: See ./cairo-1.0.d.ts
<%- package ? 'declare' : '' %> const Cairo: any;

export default Cairo;

<%_ if(!package){ -%>
}
<% } -%>