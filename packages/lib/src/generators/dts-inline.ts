import { Logger } from '../logger.js'
import { IntrospectedNamespace, promisifyNamespaceFunctions } from "../gir/namespace.js";
import { override as overrideGLib } from "./dts/glib.js";
import { override as overrideGObject } from "./dts/gobject.js";
import { DtsGenerator } from "./dts.js";
import { IntrospectedNamespaceMember } from "../gir/base.js";

import type { OptionsGeneration } from "../types/index.js";

export class DtsInlineGenerator extends DtsGenerator {

    readonly log: Logger

    constructor(namespace: IntrospectedNamespace, options: OptionsGeneration) {
        super(namespace, options);
        this.log = new Logger(options.verbose, DtsInlineGenerator.name);
    }

    generateNamespace(node: IntrospectedNamespace): Promise<string | null> {
        const { namespace, options } = this;

        this.log.debug(`Resolving the types of ${namespace.namespace}...`);

        let suffix = "";

        if (!options.noAdvancedVariants && node.namespace === "GLib") {
            suffix = `\n${overrideGLib(node)}\n`;
        } else if (node.namespace === "GObject") {
            suffix = `\n${overrideGObject(node)}\n`;
        }

        try {
            const { namespace: name, version } = node.dependency;

            const header = `
/**
 * ${name} ${version}
 * 
 * Generated from ${node.package_version.join(".")}
 */
`;
            const base = `

`;

            if (options.promisify) {
                promisifyNamespaceFunctions(node);
            }

            const content = Array.from(node.members.values())
                .map(m => {
                    return `${(Array.isArray(m) ? m : [m])
                        .map(m => (m.emit ? (m as IntrospectedNamespaceMember).asString(this) : ""))
                        .join("\n")}`;
                })
                .join("\n");

            const output = [header, base, content, suffix].join("\n\n");

            this.log.debug(`Printing ${namespace.namespace}...`);

            return Promise.resolve(output);
        } catch (err) {
            this.log.error(`Failed to generate namespace: ${node.namespace}`, err);

            return Promise.resolve(null);
        }
    }

    async stringifyNamespace(node: IntrospectedNamespace): Promise<string | null> {
        return this.generateNamespace(node);
    }
}
