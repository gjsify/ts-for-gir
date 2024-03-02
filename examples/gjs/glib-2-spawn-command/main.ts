// Example based on https://gist.github.com/buzztaiki/1487781/74ea93d3a30f20c7f094327db9cb263a6286f6d6
import '@girs/gjs';
import '@girs/gjs/dom'

import GLib from '@girs/glib-2.0';
const textDecoder = new TextDecoder();

let [_res, out, _err, _status] = GLib.spawn_command_line_sync('ls -la');
if (out) print(textDecoder.decode(out));

[_res, out] = GLib.spawn_command_line_sync('ls -la');
if (out) print(textDecoder.decode(out));

[_res, out] = GLib.spawn_sync(null, ['/bin/ls', '-la'], null, 0, null);
if (out) print(textDecoder.decode(out));

[_res, out] = GLib.spawn_sync(GLib.getenv('HOME'), ['/bin/ls', '-la'], null, 0, null);
if (out) print(textDecoder.decode(out));

[_res, out] = GLib.spawn_sync(null, ['ls', '-la'], null, GLib.SpawnFlags.SEARCH_PATH, null);
if (out) print(textDecoder.decode(out));