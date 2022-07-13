/**
 * A model that represents a single tsDoc comment tag.
 *
 * Tags are stored in the {@link TsDoc.tags} interface.
 *
 * Inspirited from https://github.com/TypeStrong/typedoc/blob/master/src/lib/models/comments/tag.ts
 */
export interface TsDocTag {
    /**
     * The name of this tag.
     */
    tagName: string

    /**
     * The name of the related parameter when this is a ```@param``` tag.
     */
    paramName: string

    /**
     * The actual body text of this tag.
     */
    text: string
}
