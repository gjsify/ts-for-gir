/**
 * A convenient helper to create Promise wrappers for asynchronous functions in GJS.
 * 
 * This utility replaces the original function on the class prototype with a Promise-based version,
 * allowing the function to be called on any instance of the class, including subclasses.
 * Simply pass the class prototype, the "async" function name, and the "finish" function name as arguments.
 * 
 * The function can be used like any other Promise, without the need for a custom wrapper, by leaving out the callback argument.
 * The original function will still be available, and can be used by passing the callback.
 * 
 * @param proto - The class prototype that contains the asynchronous function.
 * @param asyncFunc - The name of the asynchronous function.
 * @param finishFunc - The name of the "finish" function that is used to retrieve the result of the asynchronous function.
 * 
 * @version Gjs 1.54
 * @see https://gjs.guide/guides/gjs/asynchronous-programming.html#promisify-helper
 * 
 * @example
 * ```js
 * import Gio from "gi://Gio?version=2.0";
 * 
 * Gio._promisify(Gio.InputStream.prototype, 'read_bytes_async', 'read_bytes_finish');
 * 
 * try {
 *    const inputStream = new Gio.UnixInputStream({fd: 0});
 *    const bytes = await inputStream.read_bytes_async(4096, GLib.PRIORITY_DEFAULT, null);
 * } catch (e) {
 *    logError(e, 'Failed to read bytes');
 * }
 * ```
 * 
 */
export function _promisify(proto: any, asyncFunc: string, finishFunc?: string): void;

/** Temporary Gio.File.prototype fix */
export const _LocalFilePrototype: typeof File.prototype;
