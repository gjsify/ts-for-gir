import lodash from 'lodash'
import Path from 'path'
import fs from 'fs'

export class Utils {
    public static splitModuleName(packageName: string): { packageName: string; name: string; version: string } {
        // There are modules that use multiple hyphens like 'GUPnP-DLNA-1.0'
        const splitted = packageName.split('-')
        const version = splitted.splice(-1, 1)[0]
        const name = splitted.join('-')
        return {
            packageName,
            name,
            version,
        }
    }

    /**
     * Checking whether some variable is iterable
     * see https://stackoverflow.com/a/32538867
     * @param obj Variable to check for iterable
     */
    public static isIterable(obj: unknown[]): boolean {
        return obj != null && typeof obj[Symbol.iterator] === 'function'
    }

    public static isNumeric(str: string): boolean {
        return !isNaN((str as any) - parseFloat(str))
    }

    public static getFirstChar(str: string): string {
        return str.charAt(0)
    }

    public static getLastChar(str: string): string {
        return str.charAt(str.length - 1)
    }

    public static isFirstCharNumeric(str: string): boolean {
        return Utils.isNumeric(this.getFirstChar(str))
    }

    public static camelCase(str: string): string {
        return str
            .replace(/\s(.)|(\s|-|_|\.)(.)/g, (a) => {
                return a.toUpperCase()
            })
            .replace(/(\s|-|_|\.)/g, '')
    }

    public static lowerCamelCase(str: string): string {
        str = this.camelCase(str)
        str = this.getFirstChar(str).toLowerCase() + str.slice(1)
        return str
    }

    public static upperCamelCase(str: string): string {
        str = this.camelCase(str)
        str = this.getFirstChar(str).toUpperCase() + str.slice(1)
        return str
    }

    public static findFileInDirs(dirs: string[], filename: string): { path: string | null; exists: boolean } {
        let exists = false
        for (const dir of dirs) {
            const filePath = Path.join(dir, filename)
            exists = fs.existsSync(filePath)
            if (exists) {
                return {
                    path: filePath,
                    exists,
                }
            }
        }
        return {
            path: null,
            exists,
        }
    }

    /**
     * Union (a ∪ b): create a set that contains the elements of both set a and set b.
     * See https://2ality.com/2015/01/es6-set-operations.html#union
     * @param target
     * @param source
     */
    public static union<T>(target: Set<T> | T[], source: Set<T> | T[]): Set<T> {
        return (target = new Set<T>([...target, ...source]))
    }

    public static isEqual = lodash.isEqual

    public static map = lodash.map

    public static find = lodash.find

    public static merge = lodash.merge
}
