// Example based on https://gist.github.com/buzztaiki/1487781/74ea93d3a30f20c7f094327db9cb263a6286f6d6
import * as GLib from './@types/node-glib-2.0'

let [res, out, err, status] = GLib.spawnCommandLineSync('ls -la');
console.log(Buffer.from(out).toString());

[res, out] = GLib.spawnCommandLineSync('ls -la');
console.log(Buffer.from(out).toString());

[res, out] = GLib.spawnSync(null, ['/bin/ls', '-la'], null, 0, null);
console.log(Buffer.from(out).toString());

[res, out] = GLib.spawnSync(GLib.getenv('HOME'), ['/bin/ls', '-la'], null, 0, null);
console.log(Buffer.from(out).toString());

[res, out] = GLib.spawnSync(null, ['ls', '-la'], null, GLib.SpawnFlags.SEARCH_PATH, null);
console.log(Buffer.from(out).toString());