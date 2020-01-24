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
}
