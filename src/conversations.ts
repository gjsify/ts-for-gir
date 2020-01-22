import * as changeCase from 'change-case'
import { Conversations } from './types/conversations'
import { Environment } from './types/environment'
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

    constructor(private readonly environment: Environment) {
        //
    }

    transform(construct: Construct, transformMe: string): string {
        const conversations = this.conversations[construct][this.environment].transformation
        if (conversations === 'none') {
            return transformMe
        }
        return changeCase[conversations](transformMe)
    }

    static getEnvironmentDir(environment: Environment, baseDir: string): string {
        if (environment == 'gjs') {
            return Path.join(baseDir, 'Gjs')
        }
        if (environment == 'node') {
            return Path.join(baseDir, 'node-gtk')
        }
        return baseDir
    }

    getEnvironmentDir(baseDir: string): string {
        return Conversation.getEnvironmentDir(this.environment, baseDir)
    }
}
