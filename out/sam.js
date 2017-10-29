"use strict";
exports.__esModule = true;
var Gtk = require("./Gtk");
var WebKit = require("./WebKit2");
var cast_1 = require("./cast");
Gtk.init(null);
var w = WebKit.WebView["new"]();
w.vfunc_map();
w.connect("notify::composite-child", function (obj, pspec) {
});
var s = cast_1.giCast(w, Gtk.Widget);
