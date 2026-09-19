// GOM SQLite ORM example — demonstrates basic CRUD operations using GOM
// Based on: https://salsa.debian.org/gnome-team/libgom/-/blob/debian/latest/examples/gom.js
// Docs: https://gjs-docs.gnome.org/gom10~1.0/

import Gio from "gi://Gio?version=2.0";
import GLib from "gi://GLib?version=2.0";
import GObject from "gi://GObject?version=2.0";
import Gom from "gi://Gom?version=1.0";

const DB_PATH = "/tmp/ts-for-gir-gom-example.db";
const INT32_MAX = 2147483647;

// GJS does not auto-register Promise wrappers for GOM async methods.
// Gio._promisify() registers them once so that await works directly.
Gio._promisify(Gom.Adapter.prototype, "open_async", "open_finish");
Gio._promisify(Gom.Adapter.prototype, "close_async", "close_finish");
Gio._promisify(Gom.Repository.prototype, "automatic_migrate_async", "automatic_migrate_finish");
Gio._promisify(Gom.Repository.prototype, "find_async", "find_finish");
Gio._promisify(Gom.Repository.prototype, "find_one_async", "find_one_finish");
Gio._promisify(Gom.ResourceGroup.prototype, "fetch_async", "fetch_finish");

// save_async and delete_async are not promisified because their Promise
// overloads cause "too much recursion" in GOM 0.5.x. We wrap them manually.
function saveResource(resource: Gom.Resource): Promise<boolean> {
	return new Promise((resolve, reject) =>
		resource.save_async((_obj, result) => {
			try {
				resolve(resource.save_finish(result));
			} catch (e) {
				reject(e);
			}
		}),
	);
}

// Define a Book resource that maps to the "books" SQLite table.
// GOM uses GObject properties to map class fields to database columns.
class BookResource extends Gom.Resource {
	static {
		GObject.registerClass(
			{
				Properties: {
					id: GObject.ParamSpec.int(
						"id",
						"ID",
						"Book ID (primary key)",
						GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
						0,
						INT32_MAX,
						0,
					),
					title: GObject.ParamSpec.string(
						"title",
						"Title",
						"Book title",
						GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
						"",
					),
					author: GObject.ParamSpec.string(
						"author",
						"Author",
						"Book author",
						GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
						"",
					),
					year: GObject.ParamSpec.int(
						"year",
						"Year",
						"Publication year",
						GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT,
						0,
						9999,
						0,
					),
				},
			},
			BookResource,
		);
		// Map this resource to the "books" table and declare "id" as primary key
		Gom.Resource.set_table.call(BookResource, "books");
		Gom.Resource.set_primary_key.call(BookResource, "id");
	}

	declare id: number;
	declare title: string;
	declare author: string;
	declare year: number;
}

async function main(): Promise<void> {
	print("=== GOM SQLite ORM Example ===\n");

	// Open the SQLite database via GOM adapter
	const adapter = new Gom.Adapter();
	await adapter.open_async(DB_PATH);
	print(`Database opened: ${DB_PATH}`);

	const repository = new Gom.Repository({ adapter });

	// Run automatic schema migration — creates/updates the "books" table
	await repository.automatic_migrate_async(1, [BookResource.$gtype]);
	print("Schema migration complete\n");

	// --- INSERT ---
	print("--- INSERT ---");

	const book1 = new BookResource({ repository });
	book1.title = "The Pragmatic Programmer";
	book1.author = "David Thomas";
	book1.year = 1999;
	await saveResource(book1);
	print(`Saved: id=${book1.id}, title="${book1.title}", author="${book1.author}", year=${book1.year}`);

	const book2 = new BookResource({ repository });
	book2.title = "Clean Code";
	book2.author = "Robert C. Martin";
	book2.year = 2008;
	await saveResource(book2);
	print(`Saved: id=${book2.id}, title="${book2.title}", author="${book2.author}", year=${book2.year}`);

	const book3 = new BookResource({ repository });
	book3.title = "The Go Programming Language";
	book3.author = "Alan Donovan";
	book3.year = 2015;
	await saveResource(book3);
	print(`Saved: id=${book3.id}, title="${book3.title}", author="${book3.author}", year=${book3.year}`);

	// --- FIND ONE ---
	print("\n--- FIND ONE (by id) ---");
	const filterById = Gom.Filter.new_eq(BookResource.$gtype, "id", book1.id);
	const found = (await repository.find_one_async(BookResource.$gtype, filterById)) as BookResource;
	print(`Found: id=${found.id}, title="${found.title}", author="${found.author}"`);

	// --- FIND ALL ---
	print("\n--- FIND ALL ---");
	// Use a filter that matches all rows (id > 0)
	const filterAll = Gom.Filter.new_gt(BookResource.$gtype, "id", 0);
	const group = await repository.find_async(BookResource.$gtype, filterAll);
	const count = group.get_count();
	print(`Found ${count} book(s):`);
	// Fetch the resources into memory before accessing them via get_index()
	await group.fetch_async(0, count);
	for (let i = 0; i < count; i++) {
		const b = group.get_index(i) as BookResource;
		print(`  [${i}] id=${b.id}, title="${b.title}", year=${b.year}`);
	}

	// --- UPDATE ---
	print("\n--- UPDATE ---");
	found.year = 2000; // corrected edition year
	await saveResource(found);
	print(`Updated: id=${found.id}, title="${found.title}", year=${found.year}`);

	// Note: Resource.delete_async() has a known bug in GOM 0.5.x that causes
	// "too much recursion" in GJS. For deletion, use the GDA example or
	// execute SQL directly via Gom.Adapter.execute_sql() inside queue_write().

	// Close the database
	await adapter.close_async();
	print("\nDatabase closed.");
}

const loop = GLib.MainLoop.new(null, false);

main()
	.then(() => loop.quit())
	.catch((err: unknown) => {
		logError(err as object);
		loop.quit();
	});

loop.run();
