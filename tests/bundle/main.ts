// Compiles ONLY if the emitted exports map resolves: the subpath below is served by the bundle
// package.json, and `gi://Greeter` by the ambient declaration it pulls in.
import "@girs-test/bundle-fixture/greeter-1.0";

import Greeter from "gi://Greeter?version=1.0";

const hello = new Greeter.HelloWorld();

export const greeting: string = hello.say_hello("world");
