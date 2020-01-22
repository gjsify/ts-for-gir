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
class Transformation {
    constructor(environment) {
        this.environment = environment;
        this.transformations = {
            function: {
                node: {
                    transformation: 'camelCase',
                },
                gjs: {
                    transformation: 'none',
                },
            },
            enum: {
                node: {
                    transformation: 'upperCase',
                },
                gjs: {
                    transformation: 'upperCase',
                },
            },
            signalName: {
                node: {
                    transformation: 'none',
                },
                gjs: {
                    transformation: 'none',
                },
            },
        };
        //
    }
    transform(construct, transformMe) {
        const transformations = this.transformations[construct][this.environment].transformation;
        if (transformations === 'none') {
            return transformMe;
        }
        if (transformations === 'upperCase') {
            return transformMe.toUpperCase();
        }
        if (transformations === 'lowerCase') {
            return transformMe.toLowerCase();
        }
        return changeCase[transformations](transformMe);
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
        return Transformation.getEnvironmentDir(this.environment, baseDir);
    }
}
exports.Transformation = Transformation;
//# sourceMappingURL=transformation.js.map