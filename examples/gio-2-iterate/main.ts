import GLib from 'gi://GLib'
import Gio from 'gi://Gio'

Gio._promisify(Gio.File.prototype, 'enumerate_children_async', 'enumerate_children_finish')

const textDecoder = new TextDecoder('utf-8')

function readFileInChunksSync() {
    // Open a file
    const file = Gio.File.new_for_path('/etc/os-release')
    const inputStream = file.read(null)

    // Read file in chunks of 4 bytes using SyncIterator
    console.log('\nReading file in chunks using SyncIterator:')
    for (const bytes of inputStream.createSyncIterator(4)) {
        const text = textDecoder.decode(bytes.toArray())
        console.log('Chunk:', text)
    }
}

async function readFileInChunksAsync() {
    // Open a file
    const file = Gio.File.new_for_path('/etc/os-release')
    const inputStream = file.read(null)

    // Read file in chunks of 4 bytes using AsyncIterator
    console.log('Reading file in chunks using AsyncIterator:')
    for await (const bytes of inputStream.createAsyncIterator(4)) {
        const text = textDecoder.decode(bytes.toArray())
        console.log('Chunk:', text)
    }
}

function listDirectoryContentsSync() {
    // List root directory contents synchronously
    console.log('\nListing . directory contents (sync):')
    const dir = Gio.File.new_for_path('.')
    const enumerator = dir.enumerate_children('standard::name', Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS, null)

    for (const fileInfo of enumerator) {
        console.log(fileInfo.get_name())
    }
}

async function listDirectoryContentsAsync() {
    // List root directory contents asynchronously
    console.log('\nListing . directory contents (async):')
    const dir = Gio.File.new_for_path('.')
    const enumerator = await dir.enumerate_children_async(
        'standard::name',
        Gio.FileQueryInfoFlags.NOFOLLOW_SYMLINKS,
        GLib.PRIORITY_DEFAULT,
        null,
    )

    for await (const file_info of enumerator) {
        console.log(file_info.get_name())
    }
}

// Run all examples
const loop = new GLib.MainLoop(null, false)

const start = async () => {
    readFileInChunksSync()
    listDirectoryContentsSync()
    await readFileInChunksAsync()
    await listDirectoryContentsAsync()
}

start().then(() => {
    loop.quit()
})

loop.run()
