#!/usr/bin/env gjs
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2021 Evan Welsh <contact@evanwelsh.com>
// Based on https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/timers.js

// This example demonstrates that Promises always execute prior
// to timeouts. It should log "java" then "script".

const promise = new Promise(r => {
    let i = 100;
    while (i--)
        ;

    r(undefined);
});

setTimeout(() => {
    promise.then(() => log('java'));
});

setTimeout(() => {
    log('script');
});
