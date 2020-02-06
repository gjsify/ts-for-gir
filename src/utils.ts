import lodash from 'lodash'

export class Utils {
    public static splitModuleName(fullName: string): { fullName: string; name: string; version: string } {
        // There are modules that use multiple hyphens like 'GUPnP-DLNA-1.0'
        const splitted = fullName.split('-')
        const version = splitted.splice(-1, 1)[0]
        const name = splitted.join('-')
        return {
            fullName,
            name,
            version,
        }
    }

    /**
     * Checking whether some variable is iterable
     * see https://stackoverflow.com/a/32538867
     * @param obj Variable to check for iterable
     */
    public static isIterable(obj: any): boolean {
        return obj != null && typeof obj[Symbol.iterator] === 'function'
    }

    public static isNumeric(str: any): boolean {
        return !isNaN(str - parseFloat(str))
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
            .replace(/\s(.)|(\s|-|_|\.)(.)/g, a => {
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

    /**
     * Union (a ∪ b): create a set that contains the elements of both set a and set b.
     * See https://2ality.com/2015/01/es6-set-operations.html#union
     * @param target
     * @param source
     */
    public static union<T>(target: Set<T>, source: Set<T> | T[]): Set<T> {
        return (target = new Set<T>([...target, ...source]))
    }

    /**
     * Difference (a \ b): create a set that contains those elements of set a that are not in set b. This operation is also sometimes called minus (-).
     * See https://2ality.com/2015/01/es6-set-operations.html#difference
     * @param sourceA
     * @param sourceB
     */
    public static difference<T>(sourceA: Set<T> | T[], sourceB: Set<T> | T[]): Set<T> {
        if (Array.isArray(sourceB)) {
            return new Set([...sourceA].filter(a => !sourceB.includes(a)))
        }
        return new Set([...sourceA].filter(a => !sourceB.has(a)))
    }

    public static isEqual = lodash.isEqual

    public static map = lodash.map

    public static find = lodash.find

    public static merge = lodash.merge
}
