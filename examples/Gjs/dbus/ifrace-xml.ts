import type Gio from './@types/Gjs/Gio-2.0.js';

/*
 * An XML DBus Interface
 */
export const ifaceXml = `
<node>
  <interface name="org.gnome.gjs.Test">
    <method name="SimpleMethod"/>
    <method name="ComplexMethod">
      <arg type="s" direction="in" name="input"/>
      <arg type="u" direction="out" name="length"/>
    </method>
    <signal name="TestSignal">
      <arg name="type" type="s"/>
      <arg name="value" type="b"/>
    </signal>
    <property name="ReadOnlyProperty" type="s" access="read"/>
    <property name="ReadWriteProperty" type="b" access="readwrite"/>
  </interface>
</node>`;

/*
 * The handwritten interface for `ifaceXml`
 */
export interface IfaceXml {

    // SimpleMethod
    SimpleMethodRemote(): void;
    SimpleMethodSync(): void;
    SimpleMethodAsync(): void;

    // ComplexMethod
    ComplexMethodRemote(input: string, callback: (value: number, error: any, fdList: Gio.UnixFDList | null) => void): void;
    ComplexMethodSync(input: string): number;
    ComplexMethodAsync(input: string): number;

    // TestSignal
    connectSignal(name: "TestSignal", callback: (proxy: Gio.DBusProxy, name: string, args: [string, boolean]) => boolean | void): number

    readonly ReadOnlyProperty: string;
    ReadWriteProperty: boolean;
}