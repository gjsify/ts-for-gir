import type * as Gjs from "./Gjs";
// TODO add support for multiple versions
//// import type * as Accounts10 from "./Accounts-1.0";
//// import type * as AccountsService10 from "./AccountsService-1.0";
//// import type * as Adw1 from "./Adw-1";
//// import type * as Amtk4 from "./Amtk-4";
//// import type * as Amtk5 from "./Amtk-5";
//// import type * as Anjuta30 from "./Anjuta-3.0";
//// import type * as Anthy9000 from "./Anthy-9000";
//// import type * as AppStream10 from "./AppStream-1.0";
//// import type * as AppStreamBuilder10 from "./AppStreamBuilder-1.0";
//// import type * as AppStreamGlib10 from "./AppStreamGlib-1.0";
//// import type * as Atk10 from "./Atk-1.0";
//// import type * as Atspi20 from "./Atspi-2.0";
//// import type * as Babl01 from "./Babl-0.1";
//// import type * as Bamf3 from "./Bamf-3";
//// import type * as Builder10 from "./Builder-1.0";
//// import type * as Cally10 from "./Cally-1.0";
//// import type * as Camel12 from "./Camel-1.2";
//// import type * as Caribou10 from "./Caribou-1.0";
//// import type * as Champlain012 from "./Champlain-0.12";
//// import type * as Cheese30 from "./Cheese-3.0";
//// import type * as Clutter10 from "./Clutter-1.0";
//// import type * as ClutterGdk10 from "./ClutterGdk-1.0";
//// import type * as ClutterGst10 from "./ClutterGst-1.0";
//// import type * as ClutterGst20 from "./ClutterGst-2.0";
//// import type * as ClutterGst30 from "./ClutterGst-3.0";
//// import type * as ClutterX1110 from "./ClutterX11-1.0";
//// import type * as Cogl10 from "./Cogl-1.0";
//// import type * as Cogl20 from "./Cogl-2.0";
//// import type * as CoglGst20 from "./CoglGst-2.0";
//// import type * as CoglPango10 from "./CoglPango-1.0";
//// import type * as CoglPango20 from "./CoglPango-2.0";
//// import type * as ColorHug10 from "./ColorHug-1.0";
//// import type * as Colord10 from "./Colord-1.0";
//// import type * as ColordGtk10 from "./ColordGtk-1.0";
//// import type * as DBus10 from "./DBus-1.0";
//// import type * as DBusGLib10 from "./DBusGLib-1.0";
//// import type * as DMAP30 from "./DMAP-3.0";
//// import type * as Dazzle10 from "./Dazzle-1.0";
//// import type * as Dbusmenu04 from "./Dbusmenu-0.4";
//// import type * as DbusmenuGtk04 from "./DbusmenuGtk-0.4";
//// import type * as DbusmenuGtk304 from "./DbusmenuGtk3-0.4";
//// import type * as Dee10 from "./Dee-1.0";
//// import type * as Devhelp30 from "./Devhelp-3.0";
//// import type * as EBackend12 from "./EBackend-1.2";
//// import type * as EBook12 from "./EBook-1.2";
//// import type * as EBookContacts12 from "./EBookContacts-1.2";
//// import type * as ECal20 from "./ECal-2.0";
//// import type * as ECalendar12 from "./ECalendar-1.2";
//// import type * as EDataBook12 from "./EDataBook-1.2";
//// import type * as EDataCal20 from "./EDataCal-2.0";
//// import type * as EDataServer12 from "./EDataServer-1.2";
//// import type * as EDataServerUI12 from "./EDataServerUI-1.2";
//// import type * as Egg10 from "./Egg-1.0";
//// import type * as Eog30 from "./Eog-3.0";
//// import type * as Epc10 from "./Epc-1.0";
//// import type * as EpcUi10 from "./EpcUi-1.0";
//// import type * as EvinceDocument30 from "./EvinceDocument-3.0";
//// import type * as EvinceView30 from "./EvinceView-3.0";
//// import type * as Farstream01 from "./Farstream-0.1";
//// import type * as Farstream02 from "./Farstream-0.2";
//// import type * as Flatpak10 from "./Flatpak-1.0";
//// import type * as Folks06 from "./Folks-0.6";
//// import type * as Folks07 from "./Folks-0.7";
//// import type * as FolksDummy06 from "./FolksDummy-0.6";
//// import type * as FolksDummy07 from "./FolksDummy-0.7";
//// import type * as FolksEds06 from "./FolksEds-0.6";
//// import type * as FolksEds07 from "./FolksEds-0.7";
//// import type * as FolksLibsocialweb06 from "./FolksLibsocialweb-0.6";
//// import type * as FolksTelepathy06 from "./FolksTelepathy-0.6";
//// import type * as FolksTelepathy07 from "./FolksTelepathy-0.7";
//// import type * as Fwupd20 from "./Fwupd-2.0";
//// import type * as GCab10 from "./GCab-1.0";
//// import type * as GCalc1 from "./GCalc-1";
//// import type * as GCalc2 from "./GCalc-2";
//// import type * as GConf20 from "./GConf-2.0";
//// import type * as GData00 from "./GData-0.0";
//// import type * as GDesktopEnums30 from "./GDesktopEnums-3.0";
//// import type * as GES10 from "./GES-1.0";
//// import type * as GExiv2010 from "./GExiv2-0.10";
//// import type * as GFBGraph02 from "./GFBGraph-0.2";
//// import type * as GFBGraph03 from "./GFBGraph-0.3";
//// import type * as GIRepository20 from "./GIRepository-2.0";
//// import type * as GL10 from "./GL-1.0";
//// import type * as GLib20 from "./GLib-2.0";
//// import type * as GMenu30 from "./GMenu-3.0";
//// import type * as GMime30 from "./GMime-3.0";
//// import type * as GModule20 from "./GModule-2.0";
//// import type * as GObject20 from "./GObject-2.0";
//// import type * as GSSDP10 from "./GSSDP-1.0";
//// import type * as GSSDP12 from "./GSSDP-1.2";
//// import type * as GSignond10 from "./GSignond-1.0";
//// import type * as GSound10 from "./GSound-1.0";
//// import type * as GSystem10 from "./GSystem-1.0";
//// import type * as GTop20 from "./GTop-2.0";
//// import type * as GUPnP10 from "./GUPnP-1.0";
//// import type * as GUPnP12 from "./GUPnP-1.2";
//// import type * as GUPnP10 from "./GUPnP-1.0";
//// import type * as GUPnPAV10 from "./GUPnPAV-1.0";
//// import type * as GUPnPDLNA10 from "./GUPnPDLNA-1.0";
//// import type * as GUPnPDLNA20 from "./GUPnPDLNA-2.0";
//// import type * as GUPnPDLNAGst20 from "./GUPnPDLNAGst-2.0";
//// import type * as GUPnPIgd10 from "./GUPnPIgd-1.0";
//// import type * as GUdev10 from "./GUdev-1.0";
//// import type * as GUsb10 from "./GUsb-1.0";
//// import type * as GVnc10 from "./GVnc-1.0";
//// import type * as GVncPulse10 from "./GVncPulse-1.0";
//// import type * as GWeather30 from "./GWeather-3.0";
//// import type * as GXPS01 from "./GXPS-0.1";
//// import type * as GXml010 from "./GXml-0.10";
//// import type * as GXml014 from "./GXml-0.14";
//// import type * as GXml016 from "./GXml-0.16";
//// import type * as GXml018 from "./GXml-0.18";
//// import type * as GXml020 from "./GXml-0.20";
//// import type * as GXml04 from "./GXml-0.4";
//// import type * as Gck1 from "./Gck-1";
//// import type * as Gcr3 from "./Gcr-3";
//// import type * as GcrUi3 from "./GcrUi-3";
//// import type * as Gd10 from "./Gd-1.0";
//// import type * as Gda50 from "./Gda-5.0";
//// import type * as Gda60 from "./Gda-6.0";
//// import type * as Gdaui50 from "./Gdaui-5.0";
//// import type * as Gdaui60 from "./Gdaui-6.0";
//// import type * as Gdk20 from "./Gdk-2.0";
//// import type * as Gdk30 from "./Gdk-3.0";
//// import type * as Gdk40 from "./Gdk-4.0";
//// import type * as GdkPixbuf20 from "./GdkPixbuf-2.0";
//// import type * as GdkPixdata20 from "./GdkPixdata-2.0";
//// import type * as GdkWayland40 from "./GdkWayland-4.0";
//// import type * as GdkX1120 from "./GdkX11-2.0";
//// import type * as GdkX1130 from "./GdkX11-3.0";
//// import type * as GdkX1140 from "./GdkX11-4.0";
//// import type * as Gdl3 from "./Gdl-3";
//// import type * as Gdm10 from "./Gdm-1.0";
//// import type * as Gedit30 from "./Gedit-3.0";
//// import type * as Gee08 from "./Gee-0.8";
//// import type * as Gee10 from "./Gee-1.0";
//// import type * as Gegl03 from "./Gegl-0.3";
//// import type * as Gegl04 from "./Gegl-0.4";
//// import type * as GeglGtk301 from "./GeglGtk3-0.1";
//// import type * as Geoclue20 from "./Geoclue-2.0";
//// import type * as GeocodeGlib10 from "./GeocodeGlib-1.0";
//// import type * as Gepub05 from "./Gepub-0.5";
//// import type * as Ggit10 from "./Ggit-1.0";
//// import type * as Gio20 from "./Gio-2.0";
//// import type * as Gitg10 from "./Gitg-1.0";
//// import type * as GitgExt10 from "./GitgExt-1.0";
//// import type * as GjsDBus10 from "./GjsDBus-1.0";
//// import type * as Gkbd30 from "./Gkbd-3.0";
//// import type * as Gladeui20 from "./Gladeui-2.0";
//// import type * as GnomeAutoar01 from "./GnomeAutoar-0.1";
//// import type * as GnomeAutoarGtk01 from "./GnomeAutoarGtk-0.1";
//// import type * as GnomeBluetooth10 from "./GnomeBluetooth-1.0";
//// import type * as GnomeDesktop30 from "./GnomeDesktop-3.0";
//// import type * as GnomeKeyring10 from "./GnomeKeyring-1.0";
//// import type * as GnomeMaps10 from "./GnomeMaps-1.0";
//// import type * as GoVirt10 from "./GoVirt-1.0";
//// import type * as Goa10 from "./Goa-1.0";
//// import type * as GooCanvas20 from "./GooCanvas-2.0";
//// import type * as GooCanvas30 from "./GooCanvas-3.0";
//// import type * as Gpseq10 from "./Gpseq-1.0";
//// import type * as Granite10 from "./Granite-1.0";
//// import type * as Graphene10 from "./Graphene-1.0";
//// import type * as Grl01 from "./Grl-0.1";
//// import type * as Grl02 from "./Grl-0.2";
//// import type * as Grl03 from "./Grl-0.3";
//// import type * as GrlNet01 from "./GrlNet-0.1";
//// import type * as GrlNet02 from "./GrlNet-0.2";
//// import type * as GrlNet03 from "./GrlNet-0.3";
//// import type * as GrlPls02 from "./GrlPls-0.2";
//// import type * as GrlPls03 from "./GrlPls-0.3";
//// import type * as Grss07 from "./Grss-0.7";
//// import type * as Gsf1 from "./Gsf-1";
//// import type * as Gsk40 from "./Gsk-4.0";
//// import type * as Gspell1 from "./Gspell-1";
//// import type * as Gst10 from "./Gst-1.0";
//// import type * as GstAllocators10 from "./GstAllocators-1.0";
//// import type * as GstApp10 from "./GstApp-1.0";
//// import type * as GstAudio10 from "./GstAudio-1.0";
//// import type * as GstBadAllocators10 from "./GstBadAllocators-1.0";
//// import type * as GstBadAudio10 from "./GstBadAudio-1.0";
//// import type * as GstBase10 from "./GstBase-1.0";
//// import type * as GstCheck10 from "./GstCheck-1.0";
//// import type * as GstCodecs10 from "./GstCodecs-1.0";
//// import type * as GstController10 from "./GstController-1.0";
//// import type * as GstFft10 from "./GstFft-1.0";
//// import type * as GstGL10 from "./GstGL-1.0";
//// import type * as GstGLEGL10 from "./GstGLEGL-1.0";
//// import type * as GstGLWayland10 from "./GstGLWayland-1.0";
//// import type * as GstGLX1110 from "./GstGLX11-1.0";
//// import type * as GstInsertBin10 from "./GstInsertBin-1.0";
//// import type * as GstMpegts10 from "./GstMpegts-1.0";
//// import type * as GstNet10 from "./GstNet-1.0";
//// import type * as GstPbutils10 from "./GstPbutils-1.0";
//// import type * as GstPlayer10 from "./GstPlayer-1.0";
//// import type * as GstRiff10 from "./GstRiff-1.0";
//// import type * as GstRtp10 from "./GstRtp-1.0";
//// import type * as GstRtsp10 from "./GstRtsp-1.0";
//// import type * as GstRtspServer10 from "./GstRtspServer-1.0";
//// import type * as GstSdp10 from "./GstSdp-1.0";
//// import type * as GstTag10 from "./GstTag-1.0";
//// import type * as GstTranscoder10 from "./GstTranscoder-1.0";
//// import type * as GstVideo10 from "./GstVideo-1.0";
//// import type * as GstVulkan10 from "./GstVulkan-1.0";
//// import type * as GstWebRTC10 from "./GstWebRTC-1.0";
//// import type * as Gtef2 from "./Gtef-2";
//// import type * as Gtk20 from "./Gtk-2.0";
//// import type * as Gtk30 from "./Gtk-3.0";
//// import type * as Gtk40 from "./Gtk-4.0";
//// import type * as GtkChamplain012 from "./GtkChamplain-0.12";
//// import type * as GtkClutter10 from "./GtkClutter-1.0";
//// import type * as GtkSource30 from "./GtkSource-3.0";
//// import type * as GtkSource4 from "./GtkSource-4";
//// import type * as GtkSource5 from "./GtkSource-5";
//// import type * as GtkVnc20 from "./GtkVnc-2.0";
//// import type * as Gucharmap290 from "./Gucharmap-2.90";
//// import type * as Guestfs10 from "./Guestfs-1.0";
//// import type * as Gxps10 from "./Gxps-1.0";
//// import type * as Handy00 from "./Handy-0.0";
//// import type * as Handy1 from "./Handy-1";
//// import type * as HarfBuzz00 from "./HarfBuzz-0.0";
//// import type * as IAnjuta30 from "./IAnjuta-3.0";
//// import type * as IBus10 from "./IBus-1.0";
//// import type * as ICal30 from "./ICal-3.0";
//// import type * as ICalGLib30 from "./ICalGLib-3.0";
//// import type * as Ide10 from "./Ide-1.0";
//// import type * as JSCore30 from "./JSCore-3.0";
//// import type * as JavaScriptCore30 from "./JavaScriptCore-3.0";
//// import type * as JavaScriptCore40 from "./JavaScriptCore-4.0";
//// import type * as Json10 from "./Json-1.0";
//// import type * as Jsonrpc10 from "./Jsonrpc-1.0";
//// import type * as Libosinfo10 from "./Libosinfo-1.0";
//// import type * as LibvirtGConfig10 from "./LibvirtGConfig-1.0";
//// import type * as LibvirtGLib10 from "./LibvirtGLib-1.0";
//// import type * as LibvirtGObject10 from "./LibvirtGObject-1.0";
//// import type * as Manette02 from "./Manette-0.2";
//// import type * as Mash02 from "./Mash-0.2";
//// import type * as Mbim10 from "./Mbim-1.0";
//// import type * as MediaArt10 from "./MediaArt-1.0";
//// import type * as MediaArt20 from "./MediaArt-2.0";
//// import type * as ModemManager10 from "./ModemManager-1.0";
//// import type * as Mx10 from "./Mx-1.0";
//// import type * as Mx20 from "./Mx-2.0";
//// import type * as MxGtk10 from "./MxGtk-1.0";
//// import type * as NM10 from "./NM-1.0";
//// import type * as NMA10 from "./NMA-1.0";
//// import type * as NMClient10 from "./NMClient-1.0";
//// import type * as NMGtk10 from "./NMGtk-1.0";
//// import type * as Nautilus30 from "./Nautilus-3.0";
//// import type * as NetworkManager10 from "./NetworkManager-1.0";
//// import type * as Nice01 from "./Nice-0.1";
//// import type * as Notify07 from "./Notify-0.7";
//// import type * as OSTree10 from "./OSTree-1.0";
//// import type * as P11Kit10 from "./P11Kit-1.0";
//// import type * as PackageKitGlib10 from "./PackageKitGlib-1.0";
//// import type * as PackageKitPlugin10 from "./PackageKitPlugin-1.0";
//// import type * as PanelApplet40 from "./PanelApplet-4.0";
//// import type * as Pango10 from "./Pango-1.0";
//// import type * as PangoCairo10 from "./PangoCairo-1.0";
//// import type * as PangoFT210 from "./PangoFT2-1.0";
//// import type * as PangoFc10 from "./PangoFc-1.0";
//// import type * as PangoOT10 from "./PangoOT-1.0";
//// import type * as PangoXft10 from "./PangoXft-1.0";
//// import type * as Peas10 from "./Peas-1.0";
//// import type * as PeasGtk10 from "./PeasGtk-1.0";
//// import type * as Pnl10 from "./Pnl-1.0";
//// import type * as Polkit10 from "./Polkit-1.0";
//// import type * as PolkitAgent10 from "./PolkitAgent-1.0";
//// import type * as Poppler018 from "./Poppler-0.18";
//// import type * as Qmi10 from "./Qmi-1.0";
//// import type * as Rest07 from "./Rest-0.7";
//// import type * as RestExtras07 from "./RestExtras-0.7";
//// import type * as Retro014 from "./Retro-0.14";
//// import type * as Retro1 from "./Retro-1";
//// import type * as Rsvg20 from "./Rsvg-2.0";
//// import type * as RygelCore24 from "./RygelCore-2.4";
//// import type * as RygelCore26 from "./RygelCore-2.6";
//// import type * as RygelRenderer24 from "./RygelRenderer-2.4";
//// import type * as RygelRenderer26 from "./RygelRenderer-2.6";
//// import type * as RygelRendererGst26 from "./RygelRendererGst-2.6";
//// import type * as RygelServer24 from "./RygelServer-2.4";
//// import type * as RygelServer26 from "./RygelServer-2.6";
//// import type * as Secret1 from "./Secret-1";
//// import type * as SecretUnstable0 from "./SecretUnstable-0";
//// import type * as Shumate00 from "./Shumate-0.0";
//// import type * as Signon20 from "./Signon-2.0";
//// import type * as Snapd1 from "./Snapd-1";
//// import type * as Soup24 from "./Soup-2.4";
//// import type * as SoupGNOME24 from "./SoupGNOME-2.4";
//// import type * as SpiceClientGLib20 from "./SpiceClientGLib-2.0";
//// import type * as SpiceClientGtk30 from "./SpiceClientGtk-3.0";
//// import type * as Sushi10 from "./Sushi-1.0";
//// import type * as TelepathyFarstream06 from "./TelepathyFarstream-0.6";
//// import type * as TelepathyGLib012 from "./TelepathyGLib-0.12";
//// import type * as TelepathyLogger02 from "./TelepathyLogger-0.2";
//// import type * as Template10 from "./Template-1.0";
//// import type * as Tepl4 from "./Tepl-4";
//// import type * as Tepl5 from "./Tepl-5";
//// import type * as Tepl6 from "./Tepl-6";
//// import type * as TimezoneMap10 from "./TimezoneMap-1.0";
//// import type * as Totem10 from "./Totem-1.0";
//// import type * as TotemPlParser10 from "./TotemPlParser-1.0";
//// import type * as Tracker016 from "./Tracker-0.16";
//// import type * as Tracker10 from "./Tracker-1.0";
//// import type * as Tracker20 from "./Tracker-2.0";
//// import type * as Tracker30 from "./Tracker-3.0";
//// import type * as TrackerControl10 from "./TrackerControl-1.0";
//// import type * as TrackerControl20 from "./TrackerControl-2.0";
//// import type * as TrackerExtract016 from "./TrackerExtract-0.16";
//// import type * as TrackerMiner016 from "./TrackerMiner-0.16";
//// import type * as TrackerMiner10 from "./TrackerMiner-1.0";
//// import type * as TrackerMiner20 from "./TrackerMiner-2.0";
//// import type * as UDisks20 from "./UDisks-2.0";
//// import type * as UPowerGlib10 from "./UPowerGlib-1.0";
//// import type * as Uhm00 from "./Uhm-0.0";
//// import type * as Unique30 from "./Unique-3.0";
//// import type * as Unity60 from "./Unity-6.0";
//// import type * as Unity70 from "./Unity-7.0";
//// import type * as UnityExtras70 from "./UnityExtras-7.0";
//// import type * as Vda1 from "./Vda-1";
//// import type * as Vgda1 from "./Vgda-1";
//// import type * as Vgpg1 from "./Vgpg-1";
//// import type * as Vgsl1 from "./Vgsl-1";
//// import type * as Vpg1 from "./Vpg-1";
//// import type * as Vte291 from "./Vte-2.91";
//// import type * as Vulkan10 from "./Vulkan-1.0";
//// import type * as WebKit30 from "./WebKit-3.0";
//// import type * as WebKit230 from "./WebKit2-3.0";
//// import type * as WebKit240 from "./WebKit2-4.0";
//// import type * as WebKit2WebExtension30 from "./WebKit2WebExtension-3.0";
//// import type * as WebKit2WebExtension40 from "./WebKit2WebExtension-4.0";
//// import type * as Wnck30 from "./Wnck-3.0";
//// import type * as Xkl10 from "./Xkl-1.0";
//// import type * as Zeitgeist20 from "./Zeitgeist-2.0";
//// import type * as Zpj00 from "./Zpj-0.0";
//// import type * as Cairo10 from "./cairo-1.0";
//// import type * as Fontconfig20 from "./fontconfig-2.0";
//// import type * as Freetype220 from "./freetype2-2.0";
//// import type * as GSignon10 from "./gSignon-1.0";
//// import type * as Libxml220 from "./libxml2-2.0";
//// import type * as Win3210 from "./win32-1.0";
//// import type * as Xfixes40 from "./xfixes-4.0";
//// import type * as Xft20 from "./xft-2.0";
//// import type * as Xlib20 from "./xlib-2.0";
//// import type * as Xrandr13 from "./xrandr-1.3";
//

declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]
    const imports: typeof Gjs & {
      [key: string]: any;
      gi: {
        [key: string]: any;
      }
      versions: {
        [key: string]: any;
      }
      searchPath: string[];
    }
    // TODO add support for multiple versions
    // const imports: typeof Gjs & {
    //     [key: string]: any
    //     gi: {
    //    //       : typeof Accounts10
    //    //       : typeof AccountsService10
    //    //       : typeof Adw1
    //    //       : typeof Amtk4
    //    //       : typeof Amtk5
    //    //       : typeof Anjuta30
    //    //       : typeof Anthy9000
    //    //       : typeof AppStream10
    //    //       : typeof AppStreamBuilder10
    //    //       : typeof AppStreamGlib10
    //    //       : typeof Atk10
    //    //       : typeof Atspi20
    //    //       : typeof Babl01
    //    //       : typeof Bamf3
    //    //       : typeof Builder10
    //    //       : typeof Cally10
    //    //       : typeof Camel12
    //    //       : typeof Caribou10
    //    //       : typeof Champlain012
    //    //       : typeof Cheese30
    //    //       : typeof Clutter10
    //    //       : typeof ClutterGdk10
    //    //       : typeof ClutterGst10
    //    //       : typeof ClutterGst20
    //    //       : typeof ClutterGst30
    //    //       : typeof ClutterX1110
    //    //       : typeof Cogl10
    //    //       : typeof Cogl20
    //    //       : typeof CoglGst20
    //    //       : typeof CoglPango10
    //    //       : typeof CoglPango20
    //    //       : typeof ColorHug10
    //    //       : typeof Colord10
    //    //       : typeof ColordGtk10
    //    //       : typeof DBus10
    //    //       : typeof DBusGLib10
    //    //       : typeof DMAP30
    //    //       : typeof Dazzle10
    //    //       : typeof Dbusmenu04
    //    //       : typeof DbusmenuGtk04
    //    //       : typeof DbusmenuGtk304
    //    //       : typeof Dee10
    //    //       : typeof Devhelp30
    //    //       : typeof EBackend12
    //    //       : typeof EBook12
    //    //       : typeof EBookContacts12
    //    //       : typeof ECal20
    //    //       : typeof ECalendar12
    //    //       : typeof EDataBook12
    //    //       : typeof EDataCal20
    //    //       : typeof EDataServer12
    //    //       : typeof EDataServerUI12
    //    //       : typeof Egg10
    //    //       : typeof Eog30
    //    //       : typeof Epc10
    //    //       : typeof EpcUi10
    //    //       : typeof EvinceDocument30
    //    //       : typeof EvinceView30
    //    //       : typeof Farstream01
    //    //       : typeof Farstream02
    //    //       : typeof Flatpak10
    //    //       : typeof Folks06
    //    //       : typeof Folks07
    //    //       : typeof FolksDummy06
    //    //       : typeof FolksDummy07
    //    //       : typeof FolksEds06
    //    //       : typeof FolksEds07
    //    //       : typeof FolksLibsocialweb06
    //    //       : typeof FolksTelepathy06
    //    //       : typeof FolksTelepathy07
    //    //       : typeof Fwupd20
    //    //       : typeof GCab10
    //    //       : typeof GCalc1
    //    //       : typeof GCalc2
    //    //       : typeof GConf20
    //    //       : typeof GData00
    //    //       : typeof GDesktopEnums30
    //    //       : typeof GES10
    //    //       : typeof GExiv2010
    //    //       : typeof GFBGraph02
    //    //       : typeof GFBGraph03
    //    //       : typeof GIRepository20
    //    //       : typeof GL10
    //    //       : typeof GLib20
    //    //       : typeof GMenu30
    //    //       : typeof GMime30
    //    //       : typeof GModule20
    //    //       : typeof GObject20
    //    //       : typeof GSSDP10
    //    //       : typeof GSSDP12
    //    //       : typeof GSignond10
    //    //       : typeof GSound10
    //    //       : typeof GSystem10
    //    //       : typeof GTop20
    //    //       : typeof GUPnP10
    //    //       : typeof GUPnP12
    //    //       : typeof GUPnP10
    //    //       : typeof GUPnPAV10
    //    //       : typeof GUPnPDLNA10
    //    //       : typeof GUPnPDLNA20
    //    //       : typeof GUPnPDLNAGst20
    //    //       : typeof GUPnPIgd10
    //    //       : typeof GUdev10
    //    //       : typeof GUsb10
    //    //       : typeof GVnc10
    //    //       : typeof GVncPulse10
    //    //       : typeof GWeather30
    //    //       : typeof GXPS01
    //    //       : typeof GXml010
    //    //       : typeof GXml014
    //    //       : typeof GXml016
    //    //       : typeof GXml018
    //    //       : typeof GXml020
    //    //       : typeof GXml04
    //    //       : typeof Gck1
    //    //       : typeof Gcr3
    //    //       : typeof GcrUi3
    //    //       : typeof Gd10
    //    //       : typeof Gda50
    //    //       : typeof Gda60
    //    //       : typeof Gdaui50
    //    //       : typeof Gdaui60
    //    //       : typeof Gdk20
    //    //       : typeof Gdk30
    //    //       : typeof Gdk40
    //    //       : typeof GdkPixbuf20
    //    //       : typeof GdkPixdata20
    //    //       : typeof GdkWayland40
    //    //       : typeof GdkX1120
    //    //       : typeof GdkX1130
    //    //       : typeof GdkX1140
    //    //       : typeof Gdl3
    //    //       : typeof Gdm10
    //    //       : typeof Gedit30
    //    //       : typeof Gee08
    //    //       : typeof Gee10
    //    //       : typeof Gegl03
    //    //       : typeof Gegl04
    //    //       : typeof GeglGtk301
    //    //       : typeof Geoclue20
    //    //       : typeof GeocodeGlib10
    //    //       : typeof Gepub05
    //    //       : typeof Ggit10
    //    //       : typeof Gio20
    //    //       : typeof Gitg10
    //    //       : typeof GitgExt10
    //    //       : typeof GjsDBus10
    //    //       : typeof Gkbd30
    //    //       : typeof Gladeui20
    //    //       : typeof GnomeAutoar01
    //    //       : typeof GnomeAutoarGtk01
    //    //       : typeof GnomeBluetooth10
    //    //       : typeof GnomeDesktop30
    //    //       : typeof GnomeKeyring10
    //    //       : typeof GnomeMaps10
    //    //       : typeof GoVirt10
    //    //       : typeof Goa10
    //    //       : typeof GooCanvas20
    //    //       : typeof GooCanvas30
    //    //       : typeof Gpseq10
    //    //       : typeof Granite10
    //    //       : typeof Graphene10
    //    //       : typeof Grl01
    //    //       : typeof Grl02
    //    //       : typeof Grl03
    //    //       : typeof GrlNet01
    //    //       : typeof GrlNet02
    //    //       : typeof GrlNet03
    //    //       : typeof GrlPls02
    //    //       : typeof GrlPls03
    //    //       : typeof Grss07
    //    //       : typeof Gsf1
    //    //       : typeof Gsk40
    //    //       : typeof Gspell1
    //    //       : typeof Gst10
    //    //       : typeof GstAllocators10
    //    //       : typeof GstApp10
    //    //       : typeof GstAudio10
    //    //       : typeof GstBadAllocators10
    //    //       : typeof GstBadAudio10
    //    //       : typeof GstBase10
    //    //       : typeof GstCheck10
    //    //       : typeof GstCodecs10
    //    //       : typeof GstController10
    //    //       : typeof GstFft10
    //    //       : typeof GstGL10
    //    //       : typeof GstGLEGL10
    //    //       : typeof GstGLWayland10
    //    //       : typeof GstGLX1110
    //    //       : typeof GstInsertBin10
    //    //       : typeof GstMpegts10
    //    //       : typeof GstNet10
    //    //       : typeof GstPbutils10
    //    //       : typeof GstPlayer10
    //    //       : typeof GstRiff10
    //    //       : typeof GstRtp10
    //    //       : typeof GstRtsp10
    //    //       : typeof GstRtspServer10
    //    //       : typeof GstSdp10
    //    //       : typeof GstTag10
    //    //       : typeof GstTranscoder10
    //    //       : typeof GstVideo10
    //    //       : typeof GstVulkan10
    //    //       : typeof GstWebRTC10
    //    //       : typeof Gtef2
    //    //       : typeof Gtk20
    //    //       : typeof Gtk30
    //    //       : typeof Gtk40
    //    //       : typeof GtkChamplain012
    //    //       : typeof GtkClutter10
    //    //       : typeof GtkSource30
    //    //       : typeof GtkSource4
    //    //       : typeof GtkSource5
    //    //       : typeof GtkVnc20
    //    //       : typeof Gucharmap290
    //    //       : typeof Guestfs10
    //    //       : typeof Gxps10
    //    //       : typeof Handy00
    //    //       : typeof Handy1
    //    //       : typeof HarfBuzz00
    //    //       : typeof IAnjuta30
    //    //       : typeof IBus10
    //    //       : typeof ICal30
    //    //       : typeof ICalGLib30
    //    //       : typeof Ide10
    //    //       : typeof JSCore30
    //    //       : typeof JavaScriptCore30
    //    //       : typeof JavaScriptCore40
    //    //       : typeof Json10
    //    //       : typeof Jsonrpc10
    //    //       : typeof Libosinfo10
    //    //       : typeof LibvirtGConfig10
    //    //       : typeof LibvirtGLib10
    //    //       : typeof LibvirtGObject10
    //    //       : typeof Manette02
    //    //       : typeof Mash02
    //    //       : typeof Mbim10
    //    //       : typeof MediaArt10
    //    //       : typeof MediaArt20
    //    //       : typeof ModemManager10
    //    //       : typeof Mx10
    //    //       : typeof Mx20
    //    //       : typeof MxGtk10
    //    //       : typeof NM10
    //    //       : typeof NMA10
    //    //       : typeof NMClient10
    //    //       : typeof NMGtk10
    //    //       : typeof Nautilus30
    //    //       : typeof NetworkManager10
    //    //       : typeof Nice01
    //    //       : typeof Notify07
    //    //       : typeof OSTree10
    //    //       : typeof P11Kit10
    //    //       : typeof PackageKitGlib10
    //    //       : typeof PackageKitPlugin10
    //    //       : typeof PanelApplet40
    //    //       : typeof Pango10
    //    //       : typeof PangoCairo10
    //    //       : typeof PangoFT210
    //    //       : typeof PangoFc10
    //    //       : typeof PangoOT10
    //    //       : typeof PangoXft10
    //    //       : typeof Peas10
    //    //       : typeof PeasGtk10
    //    //       : typeof Pnl10
    //    //       : typeof Polkit10
    //    //       : typeof PolkitAgent10
    //    //       : typeof Poppler018
    //    //       : typeof Qmi10
    //    //       : typeof Rest07
    //    //       : typeof RestExtras07
    //    //       : typeof Retro014
    //    //       : typeof Retro1
    //    //       : typeof Rsvg20
    //    //       : typeof RygelCore24
    //    //       : typeof RygelCore26
    //    //       : typeof RygelRenderer24
    //    //       : typeof RygelRenderer26
    //    //       : typeof RygelRendererGst26
    //    //       : typeof RygelServer24
    //    //       : typeof RygelServer26
    //    //       : typeof Secret1
    //    //       : typeof SecretUnstable0
    //    //       : typeof Shumate00
    //    //       : typeof Signon20
    //    //       : typeof Snapd1
    //    //       : typeof Soup24
    //    //       : typeof SoupGNOME24
    //    //       : typeof SpiceClientGLib20
    //    //       : typeof SpiceClientGtk30
    //    //       : typeof Sushi10
    //    //       : typeof TelepathyFarstream06
    //    //       : typeof TelepathyGLib012
    //    //       : typeof TelepathyLogger02
    //    //       : typeof Template10
    //    //       : typeof Tepl4
    //    //       : typeof Tepl5
    //    //       : typeof Tepl6
    //    //       : typeof TimezoneMap10
    //    //       : typeof Totem10
    //    //       : typeof TotemPlParser10
    //    //       : typeof Tracker016
    //    //       : typeof Tracker10
    //    //       : typeof Tracker20
    //    //       : typeof Tracker30
    //    //       : typeof TrackerControl10
    //    //       : typeof TrackerControl20
    //    //       : typeof TrackerExtract016
    //    //       : typeof TrackerMiner016
    //    //       : typeof TrackerMiner10
    //    //       : typeof TrackerMiner20
    //    //       : typeof UDisks20
    //    //       : typeof UPowerGlib10
    //    //       : typeof Uhm00
    //    //       : typeof Unique30
    //    //       : typeof Unity60
    //    //       : typeof Unity70
    //    //       : typeof UnityExtras70
    //    //       : typeof Vda1
    //    //       : typeof Vgda1
    //    //       : typeof Vgpg1
    //    //       : typeof Vgsl1
    //    //       : typeof Vpg1
    //    //       : typeof Vte291
    //    //       : typeof Vulkan10
    //    //       : typeof WebKit30
    //    //       : typeof WebKit230
    //    //       : typeof WebKit240
    //    //       : typeof WebKit2WebExtension30
    //    //       : typeof WebKit2WebExtension40
    //    //       : typeof Wnck30
    //    //       : typeof Xkl10
    //    //       : typeof Zeitgeist20
    //    //       : typeof Zpj00
    //    //       : typeof Cairo10
    //    //       : typeof Fontconfig20
    //    //       : typeof Freetype220
    //    //       : typeof GSignon10
    //    //       : typeof Libxml220
    //    //       : typeof Win3210
    //    //       : typeof Xfixes40
    //    //       : typeof Xft20
    //    //       : typeof Xlib20
    //    //       : typeof Xrandr13
    //    //     }
    //     versions: {
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //         : string
    //    //     }
    //     searchPath: string[];
    // }
}

export { imports }
