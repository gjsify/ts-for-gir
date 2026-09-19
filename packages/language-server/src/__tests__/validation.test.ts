/**
 * Basic validation tests for language-server utilities
 * Tests the core functionality of TypeScript validation and hover features
 */

import { describe, expect, it } from "vitest";
import { expectIdentifierType, getIdentifierType, validateTypeScript } from "../index.ts";

describe("Language Server Validation", () => {
	describe("validateTypeScript", () => {
		it("should validate correct TypeScript code", () => {
			const code = `
        interface User {
          name: string;
          age: number;
        }
        
        const user: User = {
          name: "John",
          age: 30
        };
      `;

			const result = validateTypeScript(code);
			expect(result.success).toBe(true);
			expect(result.errors).toHaveLength(0);
		});

		it("should detect type errors", () => {
			const code = `
        const num: number = "not a number";
      `;

			const result = validateTypeScript(code);
			expect(result.success).toBe(false);
			expect(result.errors.length).toBeGreaterThan(0);
			expect(result.errors[0]).toContain("Type 'string' is not assignable to type 'number'");
		});

		it("should detect missing properties", () => {
			const code = `
        interface Config {
          host: string;
          port: number;
        }
        
        const config: Config = {
          host: "localhost"
          // missing port
        };
      `;

			const result = validateTypeScript(code);
			expect(result.success).toBe(false);
			expect(result.errors.length).toBeGreaterThan(0);
		});
	});

	describe("getIdentifierType", () => {
		it("should return type for simple variables", () => {
			const code = `
        const message: string = "Hello World";
        const count: number = 42;
        const isActive: boolean = true;
      `;

			const messageType = getIdentifierType(code, "message");
			expect(messageType.success).toBe(true);
			expect(messageType.type).toContain("string");

			const countType = getIdentifierType(code, "count");
			expect(countType.success).toBe(true);
			expect(countType.type).toContain("number");

			const activeType = getIdentifierType(code, "isActive");
			expect(activeType.success).toBe(true);
			expect(activeType.type).toContain("boolean");
		});

		it("should return type for interface instances", () => {
			const code = `
        interface Product {
          id: string;
          name: string;
          price: number;
        }
        
        const product: Product = {
          id: "123",
          name: "Laptop",
          price: 999.99
        };
      `;

			const result = getIdentifierType(code, "product");
			expect(result.success).toBe(true);
			expect(result.type).toContain("Product");
		});

		it("should return type for function signatures", () => {
			const code = `
        function add(a: number, b: number): number {
          return a + b;
        }
        
        const multiply = (x: number, y: number): number => x * y;
      `;

			const addType = getIdentifierType(code, "add");
			expect(addType.success).toBe(true);
			expect(addType.type).toMatch(/function|=>/);
			expect(addType.type).toContain("number");

			const multiplyType = getIdentifierType(code, "multiply");
			expect(multiplyType.success).toBe(true);
			expect(multiplyType.type).toMatch(/=>/);
			expect(multiplyType.type).toContain("number");
		});

		it("should handle non-existent identifiers", () => {
			const code = `
        const existing = "value";
      `;

			const result = getIdentifierType(code, "nonExistent");
			expect(result.success).toBe(false);
			expect(result.error).toContain("not found");
		});
	});

	describe("expectIdentifierType", () => {
		it("should match exact types", () => {
			const code = `
        const text: string = "Hello";
        const num: number = 42;
      `;

			const textResult = expectIdentifierType(code, "text", "string");
			expect(textResult.success).toBe(true);
			expect(textResult.matches).toBe(true);

			const numResult = expectIdentifierType(code, "num", "number");
			expect(numResult.success).toBe(true);
			expect(numResult.matches).toBe(true);
		});

		it("should match with regex patterns", () => {
			const code = `
        const arr: string[] = ["one", "two"];
        const tuple: [string, number] = ["hello", 42];
      `;

			const arrResult = expectIdentifierType(code, "arr", /string.*\[\]/);
			expect(arrResult.success).toBe(true);
			expect(arrResult.matches).toBe(true);

			const tupleResult = expectIdentifierType(code, "tuple", /\[string,\s*number\]/);
			expect(tupleResult.success).toBe(true);
			expect(tupleResult.matches).toBe(true);
		});

		it("should detect type mismatches", () => {
			const code = `
        const value: string = "text";
      `;

			const result = expectIdentifierType(code, "value", "number");
			expect(result.success).toBe(true);
			expect(result.matches).toBe(false);
			expect(result.actualType).toContain("string");
		});

		it("should handle complex types", () => {
			const code = `
        type Status = 'pending' | 'success' | 'error';
        interface Response<T> {
          data: T;
          status: Status;
        }
        
        const response: Response<string> = {
          data: "result",
          status: 'success'
        };
      `;

			const result = expectIdentifierType(code, "response", /Response<string>/);
			expect(result.success).toBe(true);
			expect(result.matches).toBe(true);
		});
	});
});
