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

    public static isEqual = lodash.isEqual

    public static map = lodash.map

    public static find = lodash.find

    public static merge = lodash.merge
}
