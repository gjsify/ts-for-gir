import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",
		include: ["src/**/*.test.ts", "src/**/*.spec.ts"],
		testTimeout: 10000,
		hookTimeout: 10000,
		globals: true,
	},
});
