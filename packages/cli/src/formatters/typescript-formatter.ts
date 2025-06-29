/**
 * TypeScript formatter using Prettier
 */

import { Formatter, Logger } from "@ts-for-gir/lib";
import prettier from "prettier";

const logger = new Logger(false, "TypeScriptFormatter");

export class TypeScriptFormatter extends Formatter {
	format(input: string): Promise<string> {
		try {
			return prettier.format(input, {
				singleQuote: true,
				parser: "typescript",
				printWidth: 120,
				tabWidth: 4,
			});
		} catch (error) {
			logger.warn("Failed to format with prettier, returning original input", error);
			return Promise.resolve(input);
		}
	}
}
