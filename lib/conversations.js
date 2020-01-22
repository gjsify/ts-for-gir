"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const changeCase = __importStar(require("change-case"));
const path_1 = __importDefault(require("path"));
class Conversation {
    constructor(environment) {
        this.environment = environment;
        this.conversations = {
            function: {
                node: {
                    transformation: 'camelCase',
                },
                gjs: {
                    transformation: 'none',
                },
            },
        };
        //
    }
    transform(construct, transformMe) {
        const conversations = this.conversations[construct][this.environment].transformation;
        if (conversations === 'none') {
            return transformMe;
        }
        return changeCase[conversations](transformMe);
    }
    static getEnvironmentDir(environment, baseDir) {
        if (environment == 'gjs') {
            return path_1.default.join(baseDir, 'Gjs');
        }
        if (environment == 'node') {
            return path_1.default.join(baseDir, 'node-gtk');
        }
        return baseDir;
    }
    getEnvironmentDir(baseDir) {
        return Conversation.getEnvironmentDir(this.environment, baseDir);
    }
}
exports.Conversation = Conversation;
//# sourceMappingURL=conversations.js.map