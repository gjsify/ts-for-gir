#!/usr/bin/env node
// If we don't catch exceptions, stdout gets truncated
try {
  require('../lib/cli')
} catch (ex) {
  console.log(ex.stack)
}
