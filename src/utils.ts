export class Utils {
    /**
     * Checking whether some variable is iterable
     * see https://stackoverflow.com/a/32538867
     * @param obj Variable to check for iterable
     */
    static isIterable(obj: any): boolean {
        return obj != null && typeof obj[Symbol.iterator] === 'function'
    }

    static isNumeric(str: any): boolean {
        return !isNaN(str - parseFloat(str))
    }

    static getFirstChar(str: string): string {
        return str.charAt(0)
    }

    static getLastChar(str: string): string {
        return str.charAt(str.length - 1)
    }

    static isFirstCharNumeric(str: string): boolean {
        return Utils.isNumeric(this.getFirstChar(str))
    }

    static camelCase(str: string): string {
        return str
            .replace(/\s(.)|(\s|-|_|\.)(.)/g, a => {
                return a.toUpperCase()
            })
            .replace(/(\s|-|_|\.)/g, '')
    }

    static lowerCamelCase(str: string): string {
        str = this.camelCase(str)
        str = this.getFirstChar(str).toLowerCase() + str.slice(1)
        return str
    }

    static upperCamelCase(str: string): string {
        str = this.camelCase(str)
        str = this.getFirstChar(str).toUpperCase() + str.slice(1)
        return str
    }
}
