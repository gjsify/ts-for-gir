// A `.ui` or `.css` import is TEXT that GJS parses at runtime, not a module.
// esbuild is told to treat them as text in `esbuild.ts`; this tells TypeScript
// what the import evaluates to, which is a string.
//
// Drop both blocks if your app imports neither — but any app that loads a
// `Gtk.Template` or a stylesheet needs them, and the error without them is a
// bare TS2307 that does not mention loaders.
declare module "*.ui" {
	const content: string;
	export default content;
}

declare module "*.css" {
	const content: string;
	export default content;
}
