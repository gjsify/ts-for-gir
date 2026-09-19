// Gda SQLite example — demonstrates SQL operations using the GNOME Data Access library
// Based on: https://gitlab.gnome.org/GNOME/libgda/-/tree/master/examples/SimpleExample
// Docs: https://gjs-docs.gnome.org/gda60~6.0/

import Gda from "gi://Gda?version=6.0";
import type GObject from "gi://GObject?version=2.0";

// GJS auto-boxes plain JS values to GObject.Value at runtime when calling GDA
// methods, but the type definitions require an explicit GObject.Value instance.
// This helper makes the intent clear while keeping type-checking happy.
function gval(v: string | number | boolean | null): GObject.Value {
	return v as unknown as GObject.Value;
}

const DB_DIR = "/tmp";
const DB_NAME = "ts-for-gir-gda-example"; // GDA SQLite appends .db automatically

function displayDataModel(dm: Gda.DataModel): void {
	const nCols = dm.get_n_columns();
	const nRows = dm.get_n_rows();

	// Print column headers
	const headers: string[] = [];
	for (let col = 0; col < nCols; col++) {
		headers.push(dm.get_column_name(col).padEnd(20));
	}
	print(`  ${headers.join(" | ")}`);
	print(`  ${"-".repeat(headers.join(" | ").length)}`);

	// Print rows
	for (let row = 0; row < nRows; row++) {
		const cells: string[] = [];
		for (let col = 0; col < nCols; col++) {
			const val = dm.get_value_at(col, row);
			const str = val !== null ? Gda.value_stringify(val) : "NULL";
			cells.push(str.padEnd(20));
		}
		print(`  ${cells.join(" | ")}`);
	}
	if (nRows === 0) {
		print("  (no rows)");
	}
}

function main(): void {
	print("=== Gda SQLite Example ===\n");

	// Open (or create) a SQLite database via the GDA SQLite provider.
	// The provider appends ".db" to DB_NAME automatically.
	const cnc = Gda.Connection.open_from_string(
		"SQLite",
		`DB_DIR=${DB_DIR};DB_NAME=${DB_NAME}`,
		null,
		Gda.ConnectionOptions.NONE,
	);
	print(`Database opened: ${DB_DIR}/${DB_NAME}.db`);

	// --- CREATE TABLE ---
	print("\n--- CREATE TABLE ---");
	cnc.execute_non_select_command(
		"CREATE TABLE IF NOT EXISTS products (" +
			"ref TEXT NOT NULL PRIMARY KEY, " +
			"name TEXT NOT NULL, " +
			"price REAL NOT NULL" +
			")",
	);
	print("Table 'products' ready");

	// Clear any existing data so the example is reproducible
	cnc.execute_non_select_command("DELETE FROM products");

	// --- INSERT via raw SQL ---
	print("\n--- INSERT (raw SQL) ---");
	cnc.execute_non_select_command("INSERT INTO products VALUES ('REF001', 'Keyboard', 49.99)");
	cnc.execute_non_select_command("INSERT INTO products VALUES ('REF002', 'Mouse', 29.99)");
	print("Inserted 2 rows via raw SQL");

	// --- INSERT via SqlBuilder ---
	print("\n--- INSERT (SqlBuilder) ---");
	const insertBuilder = new Gda.SqlBuilder({ stmt_type: Gda.SqlStatementType.INSERT });
	insertBuilder.set_table("products");
	insertBuilder.add_field_value_as_gvalue("ref", gval("REF003"));
	insertBuilder.add_field_value_as_gvalue("name", gval("Monitor"));
	insertBuilder.add_field_value_as_gvalue("price", gval(299.99));
	const insertStmt = insertBuilder.get_statement();
	const [affectedRows] = cnc.statement_execute_non_select(insertStmt, null);
	print(`Inserted 1 row via SqlBuilder (affected rows: ${affectedRows})`);

	// --- SELECT ---
	print("\n--- SELECT ---");
	const dm = cnc.execute_select_command("SELECT * FROM products ORDER BY ref");
	print(`Result (${dm.get_n_rows()} row(s)):`);
	displayDataModel(dm);

	// --- UPDATE via SqlBuilder ---
	print("\n--- UPDATE (SqlBuilder) ---");
	const updateBuilder = new Gda.SqlBuilder({ stmt_type: Gda.SqlStatementType.UPDATE });
	updateBuilder.set_table("products");
	updateBuilder.add_field_value_as_gvalue("price", gval(39.99));
	// Build WHERE clause: ref = 'REF002'
	const refId = updateBuilder.add_id("ref");
	const valId = updateBuilder.add_expr_value(gval("REF002"));
	const condId = updateBuilder.add_cond(Gda.SqlOperatorType.EQ, refId, valId, 0);
	updateBuilder.set_where(condId);
	const updateStmt = updateBuilder.get_statement();
	cnc.statement_execute_non_select(updateStmt, null);
	print("Updated price of REF002 to 39.99");

	// Verify update
	const dmAfterUpdate = cnc.execute_select_command("SELECT * FROM products ORDER BY ref");
	displayDataModel(dmAfterUpdate);

	// --- DELETE via SqlBuilder ---
	print("\n--- DELETE (SqlBuilder) ---");
	const deleteBuilder = new Gda.SqlBuilder({ stmt_type: Gda.SqlStatementType.DELETE });
	deleteBuilder.set_table("products");
	const delRefId = deleteBuilder.add_id("ref");
	const delValId = deleteBuilder.add_expr_value(gval("REF003"));
	const delCondId = deleteBuilder.add_cond(Gda.SqlOperatorType.EQ, delRefId, delValId, 0);
	deleteBuilder.set_where(delCondId);
	const deleteStmt = deleteBuilder.get_statement();
	cnc.statement_execute_non_select(deleteStmt, null);
	print("Deleted row with ref=REF003");

	// Final SELECT
	print("\n--- FINAL SELECT ---");
	const dmFinal = cnc.execute_select_command("SELECT * FROM products ORDER BY ref");
	print(`Result (${dmFinal.get_n_rows()} row(s)):`);
	displayDataModel(dmFinal);

	// Close the connection
	cnc.close();
	print("\nConnection closed.");
}

main();
