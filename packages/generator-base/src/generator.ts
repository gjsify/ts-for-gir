import type { GirModule } from "@ts-for-gir/lib";

export interface Generator {
	start(): Promise<void>;
	generate(module: GirModule): Promise<void>;
	finish(girModules: GirModule[]): Promise<void>;
}
