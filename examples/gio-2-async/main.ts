import GLib from 'gi://GLib'
import Gio from 'gi://Gio'

// Example demonstrating promisified async file operations

// Promisify Gio.File.enumerate_children_async and Gio.FileEnumerator.next_files_async
Gio._promisify(Gio.File.prototype, 'enumerate_children_async', 'enumerate_children_finish')
Gio._promisify(Gio.FileEnumerator.prototype, 'next_files_async', 'next_files_finish')

async function main() {
    try {
        const dir = Gio.File.new_for_path('.')

        // List directory contents asynchronously
        const enumerator = await dir.enumerate_children_async(
            'standard::*',
            Gio.FileQueryInfoFlags.NONE,
            GLib.PRIORITY_DEFAULT,
            null,
        )

        while (true) {
            // Get next files asynchronously
            const files = await enumerator.next_files_async(
                10, // Number of files to fetch
                GLib.PRIORITY_DEFAULT,
                null,
            )

            if (!files.length) {
                break
            }

            // Process each file info
            for (const info of files) {
                const name = info.get_name()
                const type = info.get_file_type()
                const size = info.get_size()

                console.log(`${name} (${type === Gio.FileType.DIRECTORY ? 'Directory' : 'File'}, ${size} bytes)`)
            }
        }
    } catch (error) {
        console.error('Error:', error)
    }

    // Required to properly terminate the program
    mainLoop.quit()
}

// Create main loop
const mainLoop = new GLib.MainLoop(null, false)

// Start async operation
main()

// Run main loop
mainLoop.run()
