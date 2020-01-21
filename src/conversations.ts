import * as changeCase from 'change-case'
import { Conversations } from './types/conversations'
import { Runtime } from './types/runtime'
import { Construct } from './types/construct'
import Path from 'path'

export class Conversation {
    private conversations: Conversations = {
        function: {
            node: {
                transformation: 'camelCase',
            },
            gjs: {
                transformation: 'none',
            },
        },
    }

    constructor(private readonly runtime: Runtime) {
        //
    }

    transform(construct: Construct, transformMe: string): string {
        const conversations = this.conversations[construct][this.runtime].transformation
        if (conversations === 'none') {
            return transformMe
        }
        return changeCase[conversations](transformMe)
    }

    static getRuntimeDir(runtime: Runtime, baseDir: string): string {
        if (runtime == 'gjs') {
            return Path.join(baseDir, 'Gjs')
        }
        if (runtime == 'node') {
            return Path.join(baseDir, 'node-gtk')
        }
        return baseDir
    }

    getRuntimeDir(baseDir: string): string {
        return Conversation.getRuntimeDir(this.runtime, baseDir)
    }
}
