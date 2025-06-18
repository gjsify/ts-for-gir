import { NEW_LINE_REG_EXP } from '../constants.js'

/**
 * Transforms GIR documentation text to markdown format
 * @param text The documentation text to transform
 * @returns The transformed markdown text
 */
export function transformGirDocText(text: string): string {
    text = transformGirDocHighlights(text)
    text = transformGirDocCodeBlocks(text)
    return text
}

/**
 * Transforms TSDoc tag text by removing newlines
 * Used for @param and @returns descriptions
 * @param text The tag text to transform
 * @returns The cleaned text
 */
export function transformGirDocTagText(text: string): string {
    return text.replace(NEW_LINE_REG_EXP, ' ')
}

/**
 * Replaces "@any_property" with "`any_property`"
 * @param description E.g. "Creates a binding between @source_property on @source and @target_property on @target."
 * @returns E.g. "Creates a binding between `source_property` on `source` and `target_property` on `target`."
 */
function transformGirDocHighlights(description: string): string {
    const highlights = description.match(/@[A-Za-z_-]*[^\s.]/gm)
    if (highlights) {
        for (const highlight of highlights) {
            description = description.replace(highlight, `\`${highlight.slice(1)}\``)
        }
    }
    return description
}

/**
 * Replaces GIR code blocks with markdown code fences
 * 
 * Replaces:
 * |[<!-- language="C" -->
 *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
 * ]|
 *
 * with:
 * ```c
 *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
 * ```
 * 
 * @param description The description containing code blocks
 * @returns The description with markdown code fences
 */
function transformGirDocCodeBlocks(description: string): string {
    description = description
        .replaceAll(/\|\[<!-- language="C" -->/gm, '\n```c') // C-Code
        .replaceAll(/\|\[/gm, '\n```') // Other code
        .replaceAll(/\]\|/gm, '```\n') // End of code
    return description
} 