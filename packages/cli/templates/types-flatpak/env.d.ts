// The app id from the Flatpak manifest. esbuild replaces it at build time,
// see `define` in esbuild.ts.
declare const __APP_ID__: string;

// esbuild imports `.ui` and `.css` files as strings (see `loader` in
// esbuild.ts). These two blocks tell TypeScript the same thing.

declare module "*.ui" {
	const content: string;
	export default content;
}

declare module "*.css" {
	const content: string;
	export default content;
}
