/**
 * Type definition for inline style strings
 * @see https://vitejs.dev/guide/assets.html#inline-assets
 */
declare module "*.css?inline" {
	const style: string;
	export default style;
}

/**
 * Type definition for GNOME blueprint files
 * @see https://github.com/gjsify/vite/tree/main/packages/vite-plugin-blueprint
 */
declare module "*.blp" {
	const content: string;
	export default content;
}
