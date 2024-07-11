import resolve from '@rollup/plugin-node-resolve';

const externalImports = ['gettext', 'system', 'cairo'];
const externalProtocols = ['gi://', 'resource://'];

export default {
	input: 'main.ts',
	output: {
		file: 'dist/main.js',
		format: 'esm', 
	},
    external: (id) => {
        console.log(id);
        if(externalImports.includes(id)) {
            return true;
        }
        if(externalProtocols.some(protocol => id.startsWith(protocol))) {
            return true;
        }
        return false;
    },
	plugins: [
		resolve(), // tells Rollup how to find @girs/* in node_modules
	]
};