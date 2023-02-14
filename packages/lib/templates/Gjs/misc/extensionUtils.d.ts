// https://gitlab.gnome.org/GNOME/gnome-shell/blob/main/js/misc/extensionUtils.js

// TODO: untested
export interface Extension {
    type: ExtensionType;
    state: ExtensionState;
    path: string;
    error: string | null;
    hasPrefs: boolean;
    hasUpdate: boolean;
    canChange: boolean;
}

export enum ExtensionType {
    SYSTEM = 1,
    PER_USER = 2,
}

export enum ExtensionState {
    ENABLED = 1,
    DISABLED = 2,
    ERROR = 3,
    OUT_OF_DATE = 4,
    DOWNLOADING = 5,
    INITIALIZED = 6,
    DISABLING = 7,
    ENABLING = 8,
    UNINSTALLED = 99,
}

declare const SERIALIZED_PROPERTIES: string[];

/**
 * Get current extension
 * @param extension the extension object to use in utilities like `initTranslations()`
 */
export function setCurrentExtension(extension: Extension): void;

/**
 * @returns The current extension, or null if not called from an extension.
 */
export function getCurrentExtension(): Extension | null;

/**
 * Init translation
 * @param domain the gettext domain to use
 * 
 * Initialize Gettext to load translations from extensionsdir/locale.
 * If @domain is not provided, it will be taken from metadata['gettext-domain']
 */
export function initTranslations(domain: string): void;

/**
 * gettext:
 * @param str the string to translate
 * 
 * Translate @str using the extension's gettext domain
 *
 * @returns the translated string
 */
export function gettext(str: string): string;

/**
 * ngettext:
 * @param str the string to translate
 * @param strPlural the plural form of the string
 * @param n the quantity for which translation is needed
 * 
 * Translate @str and choose plural form using the extension's gettext domain
 * 
 * @returns the translated string
 */
export function ngettext(str: string, strPlural: string, n: number): string;

/**
 * pgettext:
 * @param context context to disambiguate @str
 * @param str the string to translate
 * 
 * Translate @str in the context of @context using the extension's gettext domain
 * 
 * @returns the translated string
 */
export function pgettext(context: string, str: string): string;

/**
 * openPrefs:
 * 
 * Open the preference dialog of the current extension
 */
export function openPrefs(): void;

export function isOutOfDate(extension: Extension): boolean;

export function installImporter(extension: Extension): void;

export function serializeExtension(extension: Extension): object;

export function deserializeExtension(data: object): Extension;