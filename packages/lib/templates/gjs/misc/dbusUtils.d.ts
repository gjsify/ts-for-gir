// https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/misc/dbusUtils.js

/**
 * Load an interface xml file
 * @param iface iface the interface name
 * @returns the interface XML or null if not found
 */
export function loadInterfaceXML(iface: string): string | null

/**
 * Load an subinterface xml file
 * @param iface the interface name
 * @param ifaceFile the interface XML string or null if it is not found
 */
export function loadSubInterfaceXML(iface: string, ifaceFile: string): string | null