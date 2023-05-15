// https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
// https://stackoverflow.com/questions/45099605/ambient-declaration-with-an-imported-type-in-typescript
declare module 'node-gtk' {
    const gi: NodeGtkGi;
    export default gi;
}
