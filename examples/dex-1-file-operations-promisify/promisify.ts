#!/usr/bin/env -S gjs -m

import Dex from "gi://Dex";
import type GLib from "gi://GLib";
import type GObject from "gi://GObject";

/**
 * Type definitions for Dex Future return types
 * These types map expectedType strings to their corresponding TypeScript types
 */
export type DexFutureReturnType<T extends string> = T extends "boolean"
	? boolean
	: T extends "int" | "int64" | "uint" | "uint64" | "double" | "float"
		? number
		: T extends "string"
			? string
			: T extends "object"
				? GObject.Object
				: T extends "variant"
					? GLib.Variant
					: T extends "pointer"
						? unknown
						: T extends "enum" | "flags"
							? number
							: T extends "future"
								? Dex.Future
								: T extends "boxed"
									? unknown
									: never;

/**
 * Union type of all valid expectedType values
 */
export type DexFutureExpectedType =
	| "boolean"
	| "boxed"
	| "int"
	| "int64"
	| "uint"
	| "uint64"
	| "double"
	| "float"
	| "string"
	| "object"
	| "variant"
	| "pointer"
	| "enum"
	| "flags"
	| "future";

/**
 * Converts a Dex Future to a JavaScript Promise using Dex.Future.then().
 * This function leverages Dex's built-in callback mechanism instead of polling.
 * Enhanced with proper error handling and cleanup using Dex.Future.catch() and finally().
 *
 * The return type is automatically inferred based on the expectedType parameter.
 * The expectedType parameter is optional and defaults to "future" for convenience.
 *
 * This utility is part of our hybrid approach where we use Dex for some operations
 * and GIO for others. This function bridges the gap between Dex's Future-based API
 * and modern async/await patterns.
 *
 * @param future - The Dex Future to promisify
 * @param expectedType - The expected return type to determine which await method to use (defaults to "future")
 * @returns Promise that resolves with the Future result or rejects with an error
 *
 * @example
 * ```typescript
 * // TypeScript automatically infers the correct return type:
 * const success = await promisify(copyFuture, 'boolean'); // Promise<boolean>
 * const count = await promisify(countFuture, 'int'); // Promise<number>
 * const contents = await promisify(loadFuture, 'boxed'); // Promise<unknown>
 * const future = await promisify(someFuture); // Promise<Dex.Future> (default)
 *
 * // Can be chained for better readability:
 * await promisify(Dex.file_make_directory(dir, priority), 'boolean');
 * ```
 */

// Function overloads for automatic type inference
export function promisify<T extends DexFutureExpectedType>(
	future: Dex.Future,
	expectedType: T,
): Promise<DexFutureReturnType<T>>;

// Overload for default "future" type
export function promisify(future: Dex.Future): Promise<Dex.Future>;

// Implementation
export function promisify(future: Dex.Future, expectedType: DexFutureExpectedType = "future"): Promise<unknown> {
	return new Promise((resolve, reject) => {
		// Use Dex.Future.catch() for proper error handling
		const errorHandledFuture = Dex.Future.catch(future, (errorFuture) => {
			try {
				const errorValue = errorFuture.get_value();
				const errorMessage = errorValue ? String(errorValue) : "Dex operation failed";
				reject(new Error(errorMessage));
			} catch (extractError) {
				reject(new Error(`Failed to extract error: ${extractError}`));
			}
			return errorFuture;
		});

		// Use Dex.Future.then() for success handling
		const successHandledFuture = Dex.Future.then(errorHandledFuture, (resolvedFuture) => {
			try {
				// Extract result using the appropriate method based on expected type
				let result: unknown;

				switch (expectedType) {
					case "boolean":
						result = resolvedFuture.await_boolean();
						break;
					case "boxed":
						result = resolvedFuture.await_boxed();
						break;
					case "int":
						result = resolvedFuture.await_int();
						break;
					case "int64":
						result = resolvedFuture.await_int64();
						break;
					case "uint":
						result = resolvedFuture.await_uint();
						break;
					case "uint64":
						result = resolvedFuture.await_uint64();
						break;
					case "double":
						result = resolvedFuture.await_double();
						break;
					case "float":
						result = resolvedFuture.await_float();
						break;
					case "string":
						result = resolvedFuture.await_string();
						break;
					case "object":
						result = resolvedFuture.await_object();
						break;
					case "variant":
						result = resolvedFuture.await_variant();
						break;
					case "pointer":
						result = resolvedFuture.await_pointer();
						break;
					case "enum":
						result = resolvedFuture.await_enum();
						break;
					case "flags":
						result = resolvedFuture.await_flags();
						break;
					case "future":
						result = resolvedFuture;
						break;
					default:
						throw new Error(`Unknown expected type: ${expectedType}`);
				}

				resolve(result);
			} catch (error) {
				reject(new Error(`Failed to extract Dex Future result: ${error}`));
			}

			// Return the resolved future as required by FutureCallback
			return resolvedFuture;
		});

		// Use Dex.Future.finally() for cleanup (optional, but good practice)
		Dex.Future.finally(successHandledFuture, (finalFuture) => {
			// This will be called regardless of success or failure
			// Useful for logging or cleanup operations
			return finalFuture;
		});
	});
}
