#!/usr/bin/gjs

import Clutter from "gi://Clutter?version=1.0";
import Gio from "gi://Gio";
import GLib from "gi://GLib";
import Gtk from "gi://Gtk?version=3.0";
import GtkClutter from "gi://GtkClutter?version=1.0";
/*
Credits: https://raw.githubusercontent.com/optimisme/gjs-examples/master/egCairo.js
GJS example showing how to build Gtk javascript applications
using Gtk and Cairo, the left example adds one Cairo actor to
Clutter, the example on the right adds one Cairo widget to GTK
using GtkClutter.Embed, Gtk.DrawingArea, Cairo.Context,
Clutter.Canvas

Run it with:
    gjs egCairo.js
*/
import type Cairo from "cairo";

// Get application folder and add it into the imports path
function getAppFileInfo() {
	const stack = new Error().stack;
	const stackLine = stack?.split("\n")[1];
	if (!stackLine) throw new Error("Could not find current file (1)");
	const coincidence = /@(.+):\d+/.exec(stackLine);
	if (!coincidence) throw new Error("Could not find current file (2)");
	const path = coincidence[1];
	const file = Gio.File.new_for_path(path);

	return [file.get_path(), file.get_parent()?.get_path(), file.get_basename()];
}
const [path] = getAppFileInfo();
if (path) imports.searchPath.push(path);

class App {
	title: string;
	application?: Gtk.Application;
	window?: Gtk.ApplicationWindow;
	constructor() {
		this.title = "Gtk3 Clutter";
		GLib.set_prgname(this.title);
	}

	run(_argv: string[] | null | undefined): number {
		this.application = new Gtk.Application();
		this.application.connect("activate", () => {
			this.onActivate();
		});
		this.application.connect("startup", () => {
			this.onStartup();
		});
		return this.application.run([]);
	}

	onActivate() {
		this.window?.show_all();
	}

	onStartup() {
		this.initClutter();
		this.buildUI();
	}

	initClutter() {
		GtkClutter.init(null);
		Clutter.init(null);
	}

	buildUI() {
		this.window = new Gtk.ApplicationWindow({
			application: this.application,
			title: this.title,
			default_height: 300,
			default_width: 500,
			window_position: Gtk.WindowPosition.CENTER,
		});
		try {
			this.window.set_icon_from_file(`${path}/assets/appIcon.png`);
		} catch (_err) {
			this.window.set_icon_name("application-x-executable");
		}

		this.window.add(this.buildBody());
	}

	buildBody() {
		const embed = new GtkClutter.Embed();
		embed.set_size_request(250, 300);

		const area = new Gtk.DrawingArea();
		area.set_size_request(250, 300);
		area.connect("draw", (area, ctx) => {
			return this.drawRed(area as Gtk.DrawingArea, ctx as Cairo.Context);
		});

		const grid = new Gtk.Grid({ column_spacing: 6, margin: 15, row_spacing: 6 });
		grid.attach(embed, 0, 0, 1, 1);
		grid.attach(area, 1, 0, 1, 1);

		const stage = embed.get_stage();
		stage.backgroundColor = new Clutter.Color({ red: 255, green: 255, blue: 255, alpha: 255 });
		stage.add_child(this.getClutterActor());

		return grid;
	}

	getClutterActor() {
		const canvas = new Clutter.Canvas({
			height: 100,
			width: 100,
		});
		canvas.set_size(100, 100);
		canvas.connect("draw", (area, ctx) => {
			return this.drawGreen(area as Clutter.Canvas, ctx as Cairo.Context);
		});
		canvas.invalidate();

		const actor = new Clutter.Actor({
			x: 75,
			y: 100,
			height: 100,
			width: 100,
		});
		actor.set_content(canvas);

		return actor;
	}

	drawRed(area: Gtk.DrawingArea, ctx: Cairo.Context): boolean {
		const height = area.get_allocated_height();
		const width = area.get_allocated_width();

		return this.draw(ctx, height, width, "red");
	}

	drawGreen(canvas: Clutter.Canvas, ctx: Cairo.Context): boolean {
		const height = canvas.height;
		const width = canvas.width;

		return this.draw(ctx, height, width, "green");
	}

	draw(ctx: Cairo.Context, height: number, width: number, color: string) {
		const xc = width / 2;
		const yc = height / 2;

		ctx.save();
		if (color === "red") {
			// Set black background for 'red'
			ctx.setSourceRGBA(0, 0, 0, 1);
		} else {
			// Set grey background
			ctx.setSourceRGBA(0.75, 0.75, 0.75, 1);
		}
		ctx.paint();
		ctx.restore();

		if (color === "red") {
			ctx.setSourceRGBA(1, 0, 0, 1);
		} else {
			ctx.setSourceRGBA(0, 0.5, 0, 1);
		}

		ctx.moveTo(0, 0);
		ctx.lineTo(xc, yc);
		ctx.lineTo(0, height);
		ctx.moveTo(xc, yc);
		ctx.lineTo(width, yc);
		ctx.stroke();

		return false;
	}
}

//Run the application
const app = new App();
app.run(ARGV);
