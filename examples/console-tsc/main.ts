// Example from issue, see https://github.com/gjsify/ts-for-gir/issues/164

// This is GJS's `console` module, not Node's — keep the bare specifier so it
// resolves to the @girs/gjs `declare module 'console'` augmentation, and stop
// oxlint from rewriting it to `node:console` (which @girs/gjs does not declare).
// oxlint-disable-next-line unicorn/prefer-node-protocol
import { DEFAULT_LOG_DOMAIN, getConsoleLogDomain, setConsoleLogDomain } from "console";

// Setting the log domain
setConsoleLogDomain("my.app.id");

// expected output: my.app.id-Message: 12:21:17.899: cool
console.log("cool");

// Checking and resetting the log domain
if (getConsoleLogDomain() !== DEFAULT_LOG_DOMAIN) setConsoleLogDomain(DEFAULT_LOG_DOMAIN);

// expected output: Gjs-Console-Message: 12:21:17.899: cool
console.log("cool");
