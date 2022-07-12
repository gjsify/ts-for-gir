

    import GObject from './GObject-2.0.js';
  

const inheritanceTable: { [key: string]: string[] } = {
    'Gio.AppInfoMonitor': [
    'GObject.Object',
],
    'Gio.AppLaunchContext': [
    'GObject.Object',
],
    'Gio.Application': [
    'GObject.Object',
    'Gio.ActionGroup',
    'Gio.ActionMap',
],
    'Gio.ApplicationCommandLine': [
    'GObject.Object',
],
    'Gio.BufferedInputStream': [
    'Gio.FilterInputStream',
    'Gio.Seekable',
    'Gio.InputStream',
    'GObject.Object',
],
    'Gio.BufferedOutputStream': [
    'Gio.FilterOutputStream',
    'Gio.Seekable',
    'Gio.OutputStream',
    'GObject.Object',
],
    'Gio.BytesIcon': [
    'GObject.Object',
    'Gio.Icon',
    'Gio.LoadableIcon',
],
    'Gio.Cancellable': [
    'GObject.Object',
],
    'Gio.CharsetConverter': [
    'GObject.Object',
    'Gio.Converter',
    'Gio.Initable',
],
    'Gio.ConverterInputStream': [
    'Gio.FilterInputStream',
    'Gio.PollableInputStream',
    'Gio.InputStream',
    'GObject.Object',
],
    'Gio.ConverterOutputStream': [
    'Gio.FilterOutputStream',
    'Gio.PollableOutputStream',
    'Gio.OutputStream',
    'GObject.Object',
],
    'Gio.Credentials': [
    'GObject.Object',
],
    'Gio.DBusActionGroup': [
    'GObject.Object',
    'Gio.ActionGroup',
    'Gio.RemoteActionGroup',
],
    'Gio.DBusAuthObserver': [
    'GObject.Object',
],
    'Gio.DBusConnection': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.Initable',
],
    'Gio.DBusInterfaceSkeleton': [
    'GObject.Object',
    'Gio.DBusInterface',
],
    'Gio.DBusMenuModel': [
    'Gio.MenuModel',
    'GObject.Object',
],
    'Gio.DBusMessage': [
    'GObject.Object',
],
    'Gio.DBusMethodInvocation': [
    'GObject.Object',
],
    'Gio.DBusObjectManagerClient': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.DBusObjectManager',
    'Gio.Initable',
],
    'Gio.DBusObjectManagerServer': [
    'GObject.Object',
    'Gio.DBusObjectManager',
],
    'Gio.DBusObjectProxy': [
    'GObject.Object',
    'Gio.DBusObject',
],
    'Gio.DBusObjectSkeleton': [
    'GObject.Object',
    'Gio.DBusObject',
],
    'Gio.DBusProxy': [
    'GObject.Object',
    'Gio.AsyncInitable',
    'Gio.DBusInterface',
    'Gio.Initable',
],
    'Gio.DBusServer': [
    'GObject.Object',
    'Gio.Initable',
],
    'Gio.DataInputStream': [
    'Gio.BufferedInputStream',
    'Gio.Seekable',
    'Gio.FilterInputStream',
    'Gio.InputStream',
    'GObject.Object',
],
    'Gio.DataOutputStream': [
    'Gio.FilterOutputStream',
    'Gio.Seekable',
    'Gio.OutputStream',
    'GObject.Object',
],
    'Gio.DebugControllerDBus': [
    'GObject.Object',
    'Gio.DebugController',
    'Gio.Initable',
],
    'Gio.DesktopAppInfo': [
    'GObject.Object',
    'Gio.AppInfo',
],
    'Gio.Emblem': [
    'GObject.Object',
    'Gio.Icon',
],
    'Gio.EmblemedIcon': [
    'GObject.Object',
    'Gio.Icon',
],
    'Gio.FileEnumerator': [
    'GObject.Object',
],
    'Gio.FileIOStream': [
    'Gio.IOStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.FileIcon': [
    'GObject.Object',
    'Gio.Icon',
    'Gio.LoadableIcon',
],
    'Gio.FileInfo': [
    'GObject.Object',
],
    'Gio.FileInputStream': [
    'Gio.InputStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.FileMonitor': [
    'GObject.Object',
],
    'Gio.FileOutputStream': [
    'Gio.OutputStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.FilenameCompleter': [
    'GObject.Object',
],
    'Gio.FilterInputStream': [
    'Gio.InputStream',
    'GObject.Object',
],
    'Gio.FilterOutputStream': [
    'Gio.OutputStream',
    'GObject.Object',
],
    'Gio.IOModule': [
    'GObject.TypeModule',
    'GObject.TypePlugin',
    'GObject.Object',
],
    'Gio.IOStream': [
    'GObject.Object',
],
    'Gio.InetAddress': [
    'GObject.Object',
],
    'Gio.InetAddressMask': [
    'GObject.Object',
    'Gio.Initable',
],
    'Gio.InetSocketAddress': [
    'Gio.SocketAddress',
    'Gio.SocketConnectable',
    'GObject.Object',
],
    'Gio.InputStream': [
    'GObject.Object',
],
    'Gio.ListStore': [
    'GObject.Object',
    'Gio.ListModel',
],
    'Gio.MemoryInputStream': [
    'Gio.InputStream',
    'Gio.PollableInputStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.MemoryOutputStream': [
    'Gio.OutputStream',
    'Gio.PollableOutputStream',
    'Gio.Seekable',
    'GObject.Object',
],
    'Gio.Menu': [
    'Gio.MenuModel',
    'GObject.Object',
],
    'Gio.MenuAttributeIter': [
    'GObject.Object',
],
    'Gio.MenuItem': [
    'GObject.Object',
],
    'Gio.MenuLinkIter': [
    'GObject.Object',
],
    'Gio.MenuModel': [
    'GObject.Object',
],
    'Gio.MountOperation': [
    'GObject.Object',
],
    'Gio.NativeSocketAddress': [
    'Gio.SocketAddress',
    'Gio.SocketConnectable',
    'GObject.Object',
],
    'Gio.NativeVolumeMonitor': [
    'Gio.VolumeMonitor',
    'GObject.Object',
],
    'Gio.NetworkAddress': [
    'GObject.Object',
    'Gio.SocketConnectable',
],
    'Gio.NetworkService': [
    'GObject.Object',
    'Gio.SocketConnectable',
],
    'Gio.Notification': [
    'GObject.Object',
],
    'Gio.OutputStream': [
    'GObject.Object',
],
    'Gio.Permission': [
    'GObject.Object',
],
    'Gio.PropertyAction': [
    'GObject.Object',
    'Gio.Action',
],
    'Gio.ProxyAddress': [
    'Gio.InetSocketAddress',
    'Gio.SocketConnectable',
    'Gio.SocketAddress',
    'GObject.Object',
],
    'Gio.ProxyAddressEnumerator': [
    'Gio.SocketAddressEnumerator',
    'GObject.Object',
],
    'Gio.Resolver': [
    'GObject.Object',
],
    'Gio.Settings': [
    'GObject.Object',
],
    'Gio.SettingsBackend': [
    'GObject.Object',
],
    'Gio.SimpleAction': [
    'GObject.Object',
    'Gio.Action',
],
    'Gio.SimpleActionGroup': [
    'GObject.Object',
    'Gio.ActionGroup',
    'Gio.ActionMap',
],
    'Gio.SimpleAsyncResult': [
    'GObject.Object',
    'Gio.AsyncResult',
],
    'Gio.SimpleIOStream': [
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.SimplePermission': [
    'Gio.Permission',
    'GObject.Object',
],
    'Gio.SimpleProxyResolver': [
    'GObject.Object',
    'Gio.ProxyResolver',
],
    'Gio.Socket': [
    'GObject.Object',
    'Gio.DatagramBased',
    'Gio.Initable',
],
    'Gio.SocketAddress': [
    'GObject.Object',
    'Gio.SocketConnectable',
],
    'Gio.SocketAddressEnumerator': [
    'GObject.Object',
],
    'Gio.SocketClient': [
    'GObject.Object',
],
    'Gio.SocketConnection': [
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.SocketControlMessage': [
    'GObject.Object',
],
    'Gio.SocketListener': [
    'GObject.Object',
],
    'Gio.SocketService': [
    'Gio.SocketListener',
    'GObject.Object',
],
    'Gio.Subprocess': [
    'GObject.Object',
    'Gio.Initable',
],
    'Gio.SubprocessLauncher': [
    'GObject.Object',
],
    'Gio.Task': [
    'GObject.Object',
    'Gio.AsyncResult',
],
    'Gio.TcpConnection': [
    'Gio.SocketConnection',
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.TcpWrapperConnection': [
    'Gio.TcpConnection',
    'Gio.SocketConnection',
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.TestDBus': [
    'GObject.Object',
],
    'Gio.ThemedIcon': [
    'GObject.Object',
    'Gio.Icon',
],
    'Gio.ThreadedSocketService': [
    'Gio.SocketService',
    'Gio.SocketListener',
    'GObject.Object',
],
    'Gio.TlsCertificate': [
    'GObject.Object',
],
    'Gio.TlsConnection': [
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.TlsDatabase': [
    'GObject.Object',
],
    'Gio.TlsInteraction': [
    'GObject.Object',
],
    'Gio.TlsPassword': [
    'GObject.Object',
],
    'Gio.UnixConnection': [
    'Gio.SocketConnection',
    'Gio.IOStream',
    'GObject.Object',
],
    'Gio.UnixCredentialsMessage': [
    'Gio.SocketControlMessage',
    'GObject.Object',
],
    'Gio.UnixFDList': [
    'GObject.Object',
],
    'Gio.UnixFDMessage': [
    'Gio.SocketControlMessage',
    'GObject.Object',
],
    'Gio.UnixInputStream': [
    'Gio.InputStream',
    'Gio.FileDescriptorBased',
    'Gio.PollableInputStream',
    'GObject.Object',
],
    'Gio.UnixMountMonitor': [
    'GObject.Object',
],
    'Gio.UnixOutputStream': [
    'Gio.OutputStream',
    'Gio.FileDescriptorBased',
    'Gio.PollableOutputStream',
    'GObject.Object',
],
    'Gio.UnixSocketAddress': [
    'Gio.SocketAddress',
    'Gio.SocketConnectable',
    'GObject.Object',
],
    'Gio.Vfs': [
    'GObject.Object',
],
    'Gio.VolumeMonitor': [
    'GObject.Object',
],
    'Gio.ZlibCompressor': [
    'GObject.Object',
    'Gio.Converter',
],
    'Gio.ZlibDecompressor': [
    'GObject.Object',
    'Gio.Converter',
],
    'GObject.Binding': [
    'GObject.Object',
],
    'GObject.BindingGroup': [
    'GObject.Object',
],
    'GObject.InitiallyUnowned': [
    'GObject.Object',
],
    'GObject.ParamSpecBoolean': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecBoxed': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecChar': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecDouble': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecEnum': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecFlags': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecFloat': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecGType': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecInt': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecInt64': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecLong': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecObject': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecOverride': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecParam': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecPointer': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecString': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUChar': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUInt': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUInt64': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecULong': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecUnichar': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecValueArray': [
    'GObject.ParamSpec',
],
    'GObject.ParamSpecVariant': [
    'GObject.ParamSpec',
],
    'GObject.SignalGroup': [
    'GObject.Object',
],
    'GObject.TypeModule': [
    'GObject.Object',
    'GObject.TypePlugin',
],
}


interface StaticNamedClass<T> {
    new (...args: any[]): T
    name: string
}

/**
 * Casts between derived classes, performing a run-time type-check
 * and raising an exception if the cast fails. Allows casting to implemented
 * interfaces, too.
 */
export function giCast<T>(from_: GObject.Object, to_: StaticNamedClass<T>): T {
    const desc: string = from_.toString()
    let clsName: string|null = null
    for (const k of desc.split(" ")) {
        if (k.substring(0, 7) == "GIName:") {
            clsName = k.substring(7)
            break
        }
    }
    const toName = to_.name.replace("_", ".")

    if (toName === clsName)
        return ((from_ as any) as T)

    if (clsName) {
        const parents = inheritanceTable[clsName]
        if (parents) {
            if (parents.indexOf(toName) >= 0)
                return ((from_ as any) as T)
        }
    }

    throw Error("Invalid cast of " + desc + "(" + clsName + ") to " + toName)
}    
