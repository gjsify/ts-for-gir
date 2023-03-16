// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript
<%_ const NodeGtk = dep.getNodeGtk() _%>

declare module 'node-gtk' {
    type NodeGtk = typeof import('<%- NodeGtk.importPath %>');
    export const registerClass: NodeGtk["registerClass"];
    export const require: NodeGtk["require"];
    export const startLoop: NodeGtk["startLoop"];
    const gi: NodeGtk;
    export default gi;
}