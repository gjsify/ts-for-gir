/**
 * Checking whether a string is numeric
 * @param str The string to check
 * @returns Whether the string is numeric or not
 */
export const isNumeric = (str: string): boolean => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return !isNaN((str as any) - parseFloat(str))
}
