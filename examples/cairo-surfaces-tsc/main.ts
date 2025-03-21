// This example is based on https://zetcode.com/gui/gtksharp/drawing/

import Cairo from 'cairo'
import Gtk from 'gi://Gtk?version=4.0'
import Gio from 'gi://Gio'
import GObject from 'gi://GObject'
import GLib from 'gi://GLib'
import Gdk from 'gi://Gdk?version=4.0'

class CairoExample extends Gtk.Application {
    static {
        GObject.registerClass(
            {
                GTypeName: 'CairoExample',
            },
            this,
        )
    }
    constructor() {
        super({
            application_id: 'org.example.cairo',
            flags: Gio.ApplicationFlags.FLAGS_NONE,
        })

        this.connect('activate', this.onActivate.bind(this))
    }

    private onActivate() {
        // Create main window
        const window = new Gtk.ApplicationWindow({
            application: this,
            title: 'Cairo Drawing Examples',
            default_width: 600,
            default_height: 400,
        })

        // Create notebook for different examples
        const notebook = new Gtk.Notebook()
        window.set_child(notebook)

        // Add drawing area pages
        notebook.append_page(this.createSimpleDrawing(), new Gtk.Label({ label: 'Simple Drawing' }))
        notebook.append_page(this.createBasicShapes(), new Gtk.Label({ label: 'Basic Shapes' }))
        notebook.append_page(this.createColors(), new Gtk.Label({ label: 'Colors' }))
        notebook.append_page(this.createTransparent(), new Gtk.Label({ label: 'Transparency' }))
        notebook.append_page(this.createText(), new Gtk.Label({ label: 'Text' }))

        window.present()
    }

    // Simple circle drawing example
    private createSimpleDrawing(): Gtk.Widget {
        const drawingArea = new Gtk.DrawingArea()

        drawingArea.set_draw_func((area, cr, width, height) => {
            // Set line properties
            cr.setLineWidth(9)
            cr.setSourceRGB(0.7, 0.2, 0.0)

            // Move to center and draw a circle
            cr.translate(width / 2, height / 2)
            cr.arc(0, 0, Math.min(width, height) / 2 - 10, 0, 2 * Math.PI)
            cr.strokePreserve()

            // Fill with another color
            cr.setSourceRGB(0.3, 0.4, 0.6)
            cr.fill()

            // In GTK 4, Cairo contexts are managed by GTK itself, no need to dispose
        })

        return drawingArea
    }

    // Basic shapes example
    private createBasicShapes(): Gtk.Widget {
        const drawingArea = new Gtk.DrawingArea()

        drawingArea.set_draw_func((area, cr, width, height) => {
            // Draw rectangles
            cr.setSourceRGB(0.2, 0.23, 0.9)
            cr.setLineWidth(1)

            // Rectangle and square
            cr.rectangle(20, 20, 120, 80)
            cr.rectangle(180, 20, 80, 80)
            cr.strokePreserve()
            cr.setSourceRGB(1, 1, 1)
            cr.fill()

            // Circle
            cr.setSourceRGB(0.2, 0.23, 0.9)
            cr.arc(330, 60, 40, 0, 2 * Math.PI)
            cr.strokePreserve()
            cr.setSourceRGB(1, 1, 1)
            cr.fill()

            // Arc
            cr.setSourceRGB(0.2, 0.23, 0.9)
            cr.arc(90, 160, 40, Math.PI / 4, Math.PI)
            cr.closePath()
            cr.strokePreserve()
            cr.setSourceRGB(1, 1, 1)
            cr.fill()

            // Ellipse
            cr.setSourceRGB(0.2, 0.23, 0.9)
            cr.save() // Save state before transformations
            cr.translate(220, 180)
            cr.scale(1, 0.7)
            cr.arc(0, 0, 50, 0, 2 * Math.PI)
            cr.strokePreserve()
            cr.setSourceRGB(1, 1, 1)
            cr.fill()
            cr.restore() // Restore state after transformations
        })

        return drawingArea
    }

    // Color examples
    private createColors(): Gtk.Widget {
        const drawingArea = new Gtk.DrawingArea()

        drawingArea.set_draw_func((area, cr, width, height) => {
            // Blue rectangle
            cr.setSourceRGB(0.2, 0.23, 0.9)
            cr.rectangle(10, 15, 90, 60)
            cr.fill()

            // Red rectangle
            cr.setSourceRGB(0.9, 0.1, 0.1)
            cr.rectangle(130, 15, 90, 60)
            cr.fill()

            // Green rectangle
            cr.setSourceRGB(0.4, 0.9, 0.4)
            cr.rectangle(250, 15, 90, 60)
            cr.fill()
        })

        return drawingArea
    }

    // Transparency example
    private createTransparent(): Gtk.Widget {
        const drawingArea = new Gtk.DrawingArea()

        drawingArea.set_draw_func((area, cr, width, height) => {
            // Draw rectangles with increasing transparency
            for (let i = 1; i <= 10; i++) {
                cr.setSourceRGBA(0, 0, 1, i * 0.1)
                cr.rectangle(50 * i, 20, 40, 40)
                cr.fill()
            }
        })

        return drawingArea
    }

    // Text drawing example
    private createText(): Gtk.Widget {
        const drawingArea = new Gtk.DrawingArea()

        drawingArea.set_draw_func((area, cr, width, height) => {
            cr.setSourceRGB(0.1, 0.1, 0.1)

            // Select font
            cr.selectFontFace('Sans', Cairo.FontSlant.NORMAL, Cairo.FontWeight.BOLD)
            cr.setFontSize(13)

            // Draw some poetry text
            cr.moveTo(20, 30)
            cr.showText('The world is full of wonders to explore')
            cr.moveTo(20, 60)
            cr.showText('Each day brings something new to discover')
            cr.moveTo(20, 120)
            cr.showText('The mountains reach up high into the sky')
            cr.moveTo(20, 150)
            cr.showText('While rivers flow through valleys down below')
            cr.moveTo(20, 180)
            cr.showText("Nature's beauty is here for all to see")
            cr.moveTo(20, 210)
            cr.showText('If only we take time to look around')
        })

        return drawingArea
    }
}

// Create and run the application
const app = new CairoExample()
app.run([])
