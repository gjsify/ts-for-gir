// Example from issue, see https://github.com/gjsify/ts-for-gir/issues/164

import { setConsoleLogDomain, getConsoleLogDomain, DEFAULT_LOG_DOMAIN } from 'console';

// Setting the log domain
setConsoleLogDomain('my.app.id');

// expected output: my.app.id-Message: 12:21:17.899: cool
console.log('cool');

// Checking and resetting the log domain
if (getConsoleLogDomain() !== DEFAULT_LOG_DOMAIN)
    setConsoleLogDomain(DEFAULT_LOG_DOMAIN);

// expected output: Gjs-Console-Message: 12:21:17.899: cool
console.log('cool');