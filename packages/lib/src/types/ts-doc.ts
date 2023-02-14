import type { TsDocTag } from './ts-doc-tag.js'

/**
 * A model that represents a comment.
 *
 * Inspirited from https://github.com/TypeStrong/typedoc/blob/master/src/lib/models/comments/comment.ts
 */
export interface TsDoc {
    /**
     * The full body text of the comment..
     */
    text: string

    /**
     * All associated tags.
     */
    tags: TsDocTag[]
}
