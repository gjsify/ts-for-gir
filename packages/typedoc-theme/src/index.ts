import type { Application } from "typedoc";
import { GiDocgenTheme } from "./theme.ts";

export function load(app: Application): void {
	app.renderer.defineTheme("gi-docgen", GiDocgenTheme);
}
