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

    static isFirstCharNumeric(str: string): boolean {
        return Utils.isNumeric(str.substring(0, 1))
    }

    static camelCase(str: string): string {
        return str
            .replace(/\s(.)/g, a => {
                return a.toUpperCase()
            })
            .replace(/(\s|-|_|\.)/g, '')
    }

    static lowerCamelCase(str: string): string {
        str = this.camelCase(str)
        return str.replace(/^(.)/, b => {
            return b.toLowerCase()
        })
    }

    static upperCamelCase(str: string): string {
        str = this.camelCase(str)
        return str.replace(/^(.)/, b => {
            return b.toUpperCase()
        })
    }
}
