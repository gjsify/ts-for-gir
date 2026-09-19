/**
 * Handles CLI prompts for module version conflicts and ignored modules
 */

import { select } from "@inquirer/prompts";
import type { AnswerVersion, GirModuleResolvedBy, GirModulesGrouped } from "@ts-for-gir/lib";
import { Logger } from "@ts-for-gir/lib";
import { bold } from "colorette";
import { addToConfig, configFilePath } from "../config.ts";

export class PromptHandler {
	private readonly log: Logger;

	constructor(verbose: boolean) {
		this.log = new Logger(verbose, "PromptHandler");
	}

	/**
	 * Ask if user wants to ignore dependencies
	 */
	async askIgnoreDepsPrompt(deps: GirModuleResolvedBy[] | Set<GirModuleResolvedBy>): Promise<"Yes" | "No" | "Go back"> {
		const size = (deps as GirModuleResolvedBy[]).length || (deps as Set<GirModuleResolvedBy>).size || 0;

		if (size > 0) {
			// Show dependencies that would be ignored
			this.log.log(bold("\nThe following modules have the ignored modules as dependencies:"));
			for (const dep of deps) {
				this.log.log(`- ${dep.packageName}`);
			}
			this.log.log(bold("\n"));

			// Ask if user wants to ignore these dependencies
			return select<"Yes" | "No" | "Go back">({
				message: "Do you want to ignore them too?",
				choices: [
					{ value: "Yes", name: "Yes" },
					{ value: "No", name: "No" },
					{ value: "Go back", name: "Go back" },
				],
			});
		}

		// No dependencies found
		this.log.log(bold("\nNo dependencies found on the ignored modules"));
		return select<"Yes" | "Go back">({
			message: "Do you want to continue?",
			choices: [
				{ value: "Yes", name: "Yes" },
				{ value: "Go back", name: "Go back" },
			],
		});
	}

	/**
	 * Ask for module version selection
	 */
	async askForVersionsPrompt(girModulesGrouped: GirModulesGrouped): Promise<AnswerVersion> {
		const choices = ["All", ...girModulesGrouped.modules.map((module) => module.packageName)];

		const selected = await select<string>({
			message: `Multiple versions of '${girModulesGrouped.namespace}' found, which one do you want to use?`,
			choices: choices.map((choice) => ({
				value: choice,
				name: choice,
			})),
		});

		if (selected === "All") {
			return {
				selected: choices.filter((choice) => choice !== "All"),
				unselected: [],
			};
		}

		return {
			selected: [selected],
			unselected: choices.filter((choice) => choice !== selected && choice !== "All"),
		};
	}

	/**
	 * Ask if user wants to add ignored modules to config
	 */
	async askAddToIgnoreToConfigPrompt(ignoredModules: string[] | Set<string>): Promise<void> {
		const shouldAdd = await select<"Yes" | "No">({
			message: `Do you want to add the ignored modules to your config so that you don't need to select them again next time?\n  Config path: '${configFilePath}'`,
			choices: [
				{ value: "No", name: "No" },
				{ value: "Yes", name: "Yes" },
			],
		});

		if (shouldAdd === "Yes") {
			await addToConfig({
				ignore: Array.from(ignoredModules),
			});
			this.log.log(`Add ignored modules to '${configFilePath}'`);
		}
	}

	/**
	 * Show ignored modules
	 */
	showIgnoredModules(ignore: string[]): void {
		if (ignore && ignore.length > 0) {
			const ignoreLogList = `- ${ignore.join("\n- ")}`;
			this.log.log(bold("\n The following modules will be ignored:"));
			this.log.log(`\n${ignoreLogList}\n`);
		}
	}
}
