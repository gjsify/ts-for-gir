import type Gio from 'gi://Gio?version=2.0';

/*
 * An XML DBus Interface
 */
export const dbusIfaceXml = `
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
export interface DbusIfaceXml {

    // SimpleMethod
    SimpleMethodRemote(callback: (value: '', error: any, fdList: Gio.UnixFDList | null) => void): void;
    SimpleMethodSync(): void;
    SimpleMethodAsync(): Promise<void>;

    // ComplexMethod
    ComplexMethodRemote(input: string, callback: (value: number, error: any, fdList: Gio.UnixFDList | null) => void): void;
    ComplexMethodSync(input: string): number;
    ComplexMethodAsync(input: string): Promise<number>;

    // TestSignal
    connectSignal(name: "TestSignal", callback: (proxy: Gio.DBusProxy, name: string, args: [string, boolean]) => boolean | void): number

    readonly ReadOnlyProperty: string;
    ReadWriteProperty: boolean;
}