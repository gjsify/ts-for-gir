/**
 * Checking whether a string is numeric
 * @param str The string to check
 * @returns Whether the string is numeric or not
 */
export const isNumeric = (str: string): boolean => {
	return !Number.isNaN(Number(str) - parseFloat(str));
};
