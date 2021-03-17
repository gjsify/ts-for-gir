import type * as Gjs from "./Gjs";
// TODO add support for multiple versions
import type * as Accounts10 from "./Accounts-1.0";
import type * as AccountsService10 from "./AccountsService-1.0";
import type * as Adw1 from "./Adw-1";
import type * as Amtk4 from "./Amtk-4";
import type * as Amtk5 from "./Amtk-5";
import type * as Anjuta30 from "./Anjuta-3.0";
import type * as Anthy9000 from "./Anthy-9000";
import type * as AppStream10 from "./AppStream-1.0";
import type * as AppStreamBuilder10 from "./AppStreamBuilder-1.0";
import type * as AppStreamGlib10 from "./AppStreamGlib-1.0";
import type * as Atk10 from "./Atk-1.0";
import type * as Atspi20 from "./Atspi-2.0";
import type * as Babl01 from "./Babl-0.1";
import type * as Bamf3 from "./Bamf-3";
import type * as Builder10 from "./Builder-1.0";
import type * as Cally10 from "./Cally-1.0";
import type * as Camel12 from "./Camel-1.2";
import type * as Caribou10 from "./Caribou-1.0";
import type * as Champlain012 from "./Champlain-0.12";
import type * as Cheese30 from "./Cheese-3.0";
import type * as Clutter10 from "./Clutter-1.0";
import type * as ClutterGdk10 from "./ClutterGdk-1.0";
import type * as ClutterGst10 from "./ClutterGst-1.0";
import type * as ClutterGst20 from "./ClutterGst-2.0";
import type * as ClutterGst30 from "./ClutterGst-3.0";
import type * as ClutterX1110 from "./ClutterX11-1.0";
import type * as Cogl10 from "./Cogl-1.0";
import type * as Cogl20 from "./Cogl-2.0";
import type * as CoglGst20 from "./CoglGst-2.0";
import type * as CoglPango10 from "./CoglPango-1.0";
import type * as CoglPango20 from "./CoglPango-2.0";
import type * as ColorHug10 from "./ColorHug-1.0";
import type * as Colord10 from "./Colord-1.0";
import type * as ColordGtk10 from "./ColordGtk-1.0";
import type * as DBus10 from "./DBus-1.0";
import type * as DBusGLib10 from "./DBusGLib-1.0";
import type * as DMAP30 from "./DMAP-3.0";
import type * as Dazzle10 from "./Dazzle-1.0";
import type * as Dbusmenu04 from "./Dbusmenu-0.4";
import type * as DbusmenuGtk04 from "./DbusmenuGtk-0.4";
import type * as DbusmenuGtk304 from "./DbusmenuGtk3-0.4";
import type * as Dee10 from "./Dee-1.0";
import type * as Devhelp30 from "./Devhelp-3.0";
import type * as EBackend12 from "./EBackend-1.2";
import type * as EBook12 from "./EBook-1.2";
import type * as EBookContacts12 from "./EBookContacts-1.2";
import type * as ECal20 from "./ECal-2.0";
import type * as ECalendar12 from "./ECalendar-1.2";
import type * as EDataBook12 from "./EDataBook-1.2";
import type * as EDataCal20 from "./EDataCal-2.0";
import type * as EDataServer12 from "./EDataServer-1.2";
import type * as EDataServerUI12 from "./EDataServerUI-1.2";
import type * as Egg10 from "./Egg-1.0";
import type * as Eog30 from "./Eog-3.0";
import type * as Epc10 from "./Epc-1.0";
import type * as EpcUi10 from "./EpcUi-1.0";
import type * as EvinceDocument30 from "./EvinceDocument-3.0";
import type * as EvinceView30 from "./EvinceView-3.0";
import type * as Farstream01 from "./Farstream-0.1";
import type * as Farstream02 from "./Farstream-0.2";
import type * as Flatpak10 from "./Flatpak-1.0";
import type * as Folks06 from "./Folks-0.6";
import type * as Folks07 from "./Folks-0.7";
import type * as FolksDummy06 from "./FolksDummy-0.6";
import type * as FolksDummy07 from "./FolksDummy-0.7";
import type * as FolksEds06 from "./FolksEds-0.6";
import type * as FolksEds07 from "./FolksEds-0.7";
import type * as FolksLibsocialweb06 from "./FolksLibsocialweb-0.6";
import type * as FolksTelepathy06 from "./FolksTelepathy-0.6";
import type * as FolksTelepathy07 from "./FolksTelepathy-0.7";
import type * as Fwupd20 from "./Fwupd-2.0";
import type * as GCab10 from "./GCab-1.0";
import type * as GCalc1 from "./GCalc-1";
import type * as GCalc2 from "./GCalc-2";
import type * as GConf20 from "./GConf-2.0";
import type * as GData00 from "./GData-0.0";
import type * as GDesktopEnums30 from "./GDesktopEnums-3.0";
import type * as GES10 from "./GES-1.0";
import type * as GExiv2010 from "./GExiv2-0.10";
import type * as GFBGraph02 from "./GFBGraph-0.2";
import type * as GFBGraph03 from "./GFBGraph-0.3";
import type * as GIRepository20 from "./GIRepository-2.0";
import type * as GL10 from "./GL-1.0";
import type * as GLib20 from "./GLib-2.0";
import type * as GMenu30 from "./GMenu-3.0";
import type * as GMime30 from "./GMime-3.0";
import type * as GModule20 from "./GModule-2.0";
import type * as GObject20 from "./GObject-2.0";
import type * as GSSDP10 from "./GSSDP-1.0";
import type * as GSSDP12 from "./GSSDP-1.2";
import type * as GSignond10 from "./GSignond-1.0";
import type * as GSound10 from "./GSound-1.0";
import type * as GSystem10 from "./GSystem-1.0";
import type * as GTop20 from "./GTop-2.0";
import type * as GUPnP10 from "./GUPnP-1.0";
import type * as GUPnP12 from "./GUPnP-1.2";
import type * as GUPnPAV10 from "./GUPnPAV-1.0";
import type * as GUPnPDLNA10 from "./GUPnPDLNA-1.0";
import type * as GUPnPDLNA20 from "./GUPnPDLNA-2.0";
import type * as GUPnPDLNAGst20 from "./GUPnPDLNAGst-2.0";
import type * as GUPnPIgd10 from "./GUPnPIgd-1.0";
import type * as GUdev10 from "./GUdev-1.0";
import type * as GUsb10 from "./GUsb-1.0";
import type * as GVnc10 from "./GVnc-1.0";
import type * as GVncPulse10 from "./GVncPulse-1.0";
import type * as GWeather30 from "./GWeather-3.0";
import type * as GXPS01 from "./GXPS-0.1";
import type * as GXml010 from "./GXml-0.10";
import type * as GXml014 from "./GXml-0.14";
import type * as GXml016 from "./GXml-0.16";
import type * as GXml018 from "./GXml-0.18";
import type * as GXml020 from "./GXml-0.20";
import type * as GXml04 from "./GXml-0.4";
import type * as Gck1 from "./Gck-1";
import type * as Gcr3 from "./Gcr-3";
import type * as GcrUi3 from "./GcrUi-3";
import type * as Gd10 from "./Gd-1.0";
import type * as Gda50 from "./Gda-5.0";
import type * as Gda60 from "./Gda-6.0";
import type * as Gdaui50 from "./Gdaui-5.0";
import type * as Gdaui60 from "./Gdaui-6.0";
import type * as Gdk20 from "./Gdk-2.0";
import type * as Gdk30 from "./Gdk-3.0";
import type * as Gdk40 from "./Gdk-4.0";
import type * as GdkPixbuf20 from "./GdkPixbuf-2.0";
import type * as GdkPixdata20 from "./GdkPixdata-2.0";
import type * as GdkWayland40 from "./GdkWayland-4.0";
import type * as GdkX1120 from "./GdkX11-2.0";
import type * as GdkX1130 from "./GdkX11-3.0";
import type * as GdkX1140 from "./GdkX11-4.0";
import type * as Gdl3 from "./Gdl-3";
import type * as Gdm10 from "./Gdm-1.0";
import type * as Gedit30 from "./Gedit-3.0";
import type * as Gee08 from "./Gee-0.8";
import type * as Gee10 from "./Gee-1.0";
import type * as Gegl03 from "./Gegl-0.3";
import type * as Gegl04 from "./Gegl-0.4";
import type * as GeglGtk301 from "./GeglGtk3-0.1";
import type * as Geoclue20 from "./Geoclue-2.0";
import type * as GeocodeGlib10 from "./GeocodeGlib-1.0";
import type * as Gepub05 from "./Gepub-0.5";
import type * as Ggit10 from "./Ggit-1.0";
import type * as Gio20 from "./Gio-2.0";
import type * as Gitg10 from "./Gitg-1.0";
import type * as GitgExt10 from "./GitgExt-1.0";
import type * as GjsDBus10 from "./GjsDBus-1.0";
import type * as Gkbd30 from "./Gkbd-3.0";
import type * as Gladeui20 from "./Gladeui-2.0";
import type * as GnomeAutoar01 from "./GnomeAutoar-0.1";
import type * as GnomeAutoarGtk01 from "./GnomeAutoarGtk-0.1";
import type * as GnomeBluetooth10 from "./GnomeBluetooth-1.0";
import type * as GnomeDesktop30 from "./GnomeDesktop-3.0";
import type * as GnomeKeyring10 from "./GnomeKeyring-1.0";
import type * as GnomeMaps10 from "./GnomeMaps-1.0";
import type * as GoVirt10 from "./GoVirt-1.0";
import type * as Goa10 from "./Goa-1.0";
import type * as GooCanvas20 from "./GooCanvas-2.0";
import type * as GooCanvas30 from "./GooCanvas-3.0";
import type * as Gpseq10 from "./Gpseq-1.0";
import type * as Granite10 from "./Granite-1.0";
import type * as Graphene10 from "./Graphene-1.0";
import type * as Grl01 from "./Grl-0.1";
import type * as Grl02 from "./Grl-0.2";
import type * as Grl03 from "./Grl-0.3";
import type * as GrlNet01 from "./GrlNet-0.1";
import type * as GrlNet02 from "./GrlNet-0.2";
import type * as GrlNet03 from "./GrlNet-0.3";
import type * as GrlPls02 from "./GrlPls-0.2";
import type * as GrlPls03 from "./GrlPls-0.3";
import type * as Grss07 from "./Grss-0.7";
import type * as Gsf1 from "./Gsf-1";
import type * as Gsk40 from "./Gsk-4.0";
import type * as Gspell1 from "./Gspell-1";
import type * as Gst10 from "./Gst-1.0";
import type * as GstAllocators10 from "./GstAllocators-1.0";
import type * as GstApp10 from "./GstApp-1.0";
import type * as GstAudio10 from "./GstAudio-1.0";
import type * as GstBadAllocators10 from "./GstBadAllocators-1.0";
import type * as GstBadAudio10 from "./GstBadAudio-1.0";
import type * as GstBase10 from "./GstBase-1.0";
import type * as GstCheck10 from "./GstCheck-1.0";
import type * as GstCodecs10 from "./GstCodecs-1.0";
import type * as GstController10 from "./GstController-1.0";
import type * as GstFft10 from "./GstFft-1.0";
import type * as GstGL10 from "./GstGL-1.0";
import type * as GstGLEGL10 from "./GstGLEGL-1.0";
import type * as GstGLWayland10 from "./GstGLWayland-1.0";
import type * as GstGLX1110 from "./GstGLX11-1.0";
import type * as GstInsertBin10 from "./GstInsertBin-1.0";
import type * as GstMpegts10 from "./GstMpegts-1.0";
import type * as GstNet10 from "./GstNet-1.0";
import type * as GstPbutils10 from "./GstPbutils-1.0";
import type * as GstPlayer10 from "./GstPlayer-1.0";
import type * as GstRiff10 from "./GstRiff-1.0";
import type * as GstRtp10 from "./GstRtp-1.0";
import type * as GstRtsp10 from "./GstRtsp-1.0";
import type * as GstRtspServer10 from "./GstRtspServer-1.0";
import type * as GstSdp10 from "./GstSdp-1.0";
import type * as GstTag10 from "./GstTag-1.0";
import type * as GstTranscoder10 from "./GstTranscoder-1.0";
import type * as GstVideo10 from "./GstVideo-1.0";
import type * as GstVulkan10 from "./GstVulkan-1.0";
import type * as GstWebRTC10 from "./GstWebRTC-1.0";
import type * as Gtef2 from "./Gtef-2";
import type * as Gtk20 from "./Gtk-2.0";
import type * as Gtk30 from "./Gtk-3.0";
import type * as Gtk40 from "./Gtk-4.0";
import type * as GtkChamplain012 from "./GtkChamplain-0.12";
import type * as GtkClutter10 from "./GtkClutter-1.0";
import type * as GtkSource30 from "./GtkSource-3.0";
import type * as GtkSource4 from "./GtkSource-4";
import type * as GtkSource5 from "./GtkSource-5";
import type * as GtkVnc20 from "./GtkVnc-2.0";
import type * as Gucharmap290 from "./Gucharmap-2.90";
import type * as Guestfs10 from "./Guestfs-1.0";
import type * as Gxps10 from "./Gxps-1.0";
import type * as Handy00 from "./Handy-0.0";
import type * as Handy1 from "./Handy-1";
import type * as HarfBuzz00 from "./HarfBuzz-0.0";
import type * as IAnjuta30 from "./IAnjuta-3.0";
import type * as IBus10 from "./IBus-1.0";
import type * as ICal30 from "./ICal-3.0";
import type * as ICalGLib30 from "./ICalGLib-3.0";
import type * as Ide10 from "./Ide-1.0";
import type * as JSCore30 from "./JSCore-3.0";
import type * as JavaScriptCore30 from "./JavaScriptCore-3.0";
import type * as JavaScriptCore40 from "./JavaScriptCore-4.0";
import type * as Json10 from "./Json-1.0";
import type * as Jsonrpc10 from "./Jsonrpc-1.0";
import type * as Libosinfo10 from "./Libosinfo-1.0";
import type * as LibvirtGConfig10 from "./LibvirtGConfig-1.0";
import type * as LibvirtGLib10 from "./LibvirtGLib-1.0";
import type * as LibvirtGObject10 from "./LibvirtGObject-1.0";
import type * as Manette02 from "./Manette-0.2";
import type * as Mash02 from "./Mash-0.2";
import type * as Mbim10 from "./Mbim-1.0";
import type * as MediaArt10 from "./MediaArt-1.0";
import type * as MediaArt20 from "./MediaArt-2.0";
import type * as ModemManager10 from "./ModemManager-1.0";
import type * as Mx10 from "./Mx-1.0";
import type * as Mx20 from "./Mx-2.0";
import type * as MxGtk10 from "./MxGtk-1.0";
import type * as NM10 from "./NM-1.0";
import type * as NMA10 from "./NMA-1.0";
import type * as NMClient10 from "./NMClient-1.0";
import type * as NMGtk10 from "./NMGtk-1.0";
import type * as Nautilus30 from "./Nautilus-3.0";
import type * as NetworkManager10 from "./NetworkManager-1.0";
import type * as Nice01 from "./Nice-0.1";
import type * as Notify07 from "./Notify-0.7";
import type * as OSTree10 from "./OSTree-1.0";
import type * as P11Kit10 from "./P11Kit-1.0";
import type * as PackageKitGlib10 from "./PackageKitGlib-1.0";
import type * as PackageKitPlugin10 from "./PackageKitPlugin-1.0";
import type * as PanelApplet40 from "./PanelApplet-4.0";
import type * as Pango10 from "./Pango-1.0";
import type * as PangoCairo10 from "./PangoCairo-1.0";
import type * as PangoFT210 from "./PangoFT2-1.0";
import type * as PangoFc10 from "./PangoFc-1.0";
import type * as PangoOT10 from "./PangoOT-1.0";
import type * as PangoXft10 from "./PangoXft-1.0";
import type * as Peas10 from "./Peas-1.0";
import type * as PeasGtk10 from "./PeasGtk-1.0";
import type * as Pnl10 from "./Pnl-1.0";
import type * as Polkit10 from "./Polkit-1.0";
import type * as PolkitAgent10 from "./PolkitAgent-1.0";
import type * as Poppler018 from "./Poppler-0.18";
import type * as Qmi10 from "./Qmi-1.0";
import type * as Rest07 from "./Rest-0.7";
import type * as RestExtras07 from "./RestExtras-0.7";
import type * as Retro014 from "./Retro-0.14";
import type * as Retro1 from "./Retro-1";
import type * as Rsvg20 from "./Rsvg-2.0";
import type * as RygelCore24 from "./RygelCore-2.4";
import type * as RygelCore26 from "./RygelCore-2.6";
import type * as RygelRenderer24 from "./RygelRenderer-2.4";
import type * as RygelRenderer26 from "./RygelRenderer-2.6";
import type * as RygelRendererGst26 from "./RygelRendererGst-2.6";
import type * as RygelServer24 from "./RygelServer-2.4";
import type * as RygelServer26 from "./RygelServer-2.6";
import type * as Secret1 from "./Secret-1";
import type * as SecretUnstable0 from "./SecretUnstable-0";
import type * as Shumate00 from "./Shumate-0.0";
import type * as Signon20 from "./Signon-2.0";
import type * as Snapd1 from "./Snapd-1";
import type * as Soup24 from "./Soup-2.4";
import type * as SoupGNOME24 from "./SoupGNOME-2.4";
import type * as SpiceClientGLib20 from "./SpiceClientGLib-2.0";
import type * as SpiceClientGtk30 from "./SpiceClientGtk-3.0";
import type * as Sushi10 from "./Sushi-1.0";
import type * as TelepathyFarstream06 from "./TelepathyFarstream-0.6";
import type * as TelepathyGLib012 from "./TelepathyGLib-0.12";
import type * as TelepathyLogger02 from "./TelepathyLogger-0.2";
import type * as Template10 from "./Template-1.0";
import type * as Tepl4 from "./Tepl-4";
import type * as Tepl5 from "./Tepl-5";
import type * as Tepl6 from "./Tepl-6";
import type * as TimezoneMap10 from "./TimezoneMap-1.0";
import type * as Totem10 from "./Totem-1.0";
import type * as TotemPlParser10 from "./TotemPlParser-1.0";
import type * as Tracker016 from "./Tracker-0.16";
import type * as Tracker10 from "./Tracker-1.0";
import type * as Tracker20 from "./Tracker-2.0";
import type * as Tracker30 from "./Tracker-3.0";
import type * as TrackerControl10 from "./TrackerControl-1.0";
import type * as TrackerControl20 from "./TrackerControl-2.0";
import type * as TrackerExtract016 from "./TrackerExtract-0.16";
import type * as TrackerMiner016 from "./TrackerMiner-0.16";
import type * as TrackerMiner10 from "./TrackerMiner-1.0";
import type * as TrackerMiner20 from "./TrackerMiner-2.0";
import type * as UDisks20 from "./UDisks-2.0";
import type * as UPowerGlib10 from "./UPowerGlib-1.0";
import type * as Uhm00 from "./Uhm-0.0";
import type * as Unique30 from "./Unique-3.0";
import type * as Unity60 from "./Unity-6.0";
import type * as Unity70 from "./Unity-7.0";
import type * as UnityExtras70 from "./UnityExtras-7.0";
import type * as Vda1 from "./Vda-1";
import type * as Vgda1 from "./Vgda-1";
import type * as Vgpg1 from "./Vgpg-1";
import type * as Vgsl1 from "./Vgsl-1";
import type * as Vpg1 from "./Vpg-1";
import type * as Vte291 from "./Vte-2.91";
import type * as Vulkan10 from "./Vulkan-1.0";
import type * as WebKit30 from "./WebKit-3.0";
import type * as WebKit230 from "./WebKit2-3.0";
import type * as WebKit240 from "./WebKit2-4.0";
import type * as WebKit2WebExtension30 from "./WebKit2WebExtension-3.0";
import type * as WebKit2WebExtension40 from "./WebKit2WebExtension-4.0";
import type * as Wnck30 from "./Wnck-3.0";
import type * as Xkl10 from "./Xkl-1.0";
import type * as Zeitgeist20 from "./Zeitgeist-2.0";
import type * as Zpj00 from "./Zpj-0.0";
import type * as Cairo10 from "./cairo-1.0";
import type * as Fontconfig20 from "./fontconfig-2.0";
import type * as Freetype220 from "./freetype2-2.0";
import type * as GSignon10 from "./gSignon-1.0";
import type * as Libxml220 from "./libxml2-2.0";
import type * as Win3210 from "./win32-1.0";
import type * as Xfixes40 from "./xfixes-4.0";
import type * as Xft20 from "./xft-2.0";
import type * as Xlib20 from "./xlib-2.0";
import type * as Xrandr13 from "./xrandr-1.3";
import type * as Gst010 from "./Gst-0.10";
import type * as GstBase010 from "./GstBase-0.10";
import type * as GstInterfaces010 from "./GstInterfaces-0.10";
import type * as GstPbutils010 from "./GstPbutils-0.10";
import type * as GstTag010 from "./GstTag-0.10";
import type * as GstVideo010 from "./GstVideo-0.10";
import type * as SocialWebClient025 from "./SocialWebClient-0.25";


declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]

    const imports: typeof Gjs & {
        gi: {
            Accounts:              typeof Accounts10
            AccountsService:              typeof AccountsService10
            Adw:              typeof Adw1
            Amtk:              typeof Amtk4
                |
              typeof Amtk5
            Anjuta:              typeof Anjuta30
            Anthy:              typeof Anthy9000
            AppStream:              typeof AppStream10
            AppStreamBuilder:              typeof AppStreamBuilder10
            AppStreamGlib:              typeof AppStreamGlib10
            Atk:              typeof Atk10
            Atspi:              typeof Atspi20
            Babl:              typeof Babl01
            Bamf:              typeof Bamf3
            Builder:              typeof Builder10
            Cally:              typeof Cally10
            Camel:              typeof Camel12
            Caribou:              typeof Caribou10
            Champlain:              typeof Champlain012
            Cheese:              typeof Cheese30
            Clutter:              typeof Clutter10
            ClutterGdk:              typeof ClutterGdk10
            ClutterGst:              typeof ClutterGst10
                |
              typeof ClutterGst20
                |
              typeof ClutterGst30
            ClutterX11:              typeof ClutterX1110
            Cogl:              typeof Cogl10
                |
              typeof Cogl20
            CoglGst:              typeof CoglGst20
            CoglPango:              typeof CoglPango10
                |
              typeof CoglPango20
            ColorHug:              typeof ColorHug10
            Colord:              typeof Colord10
            ColordGtk:              typeof ColordGtk10
            DBus:              typeof DBus10
            DBusGLib:              typeof DBusGLib10
            DMAP:              typeof DMAP30
            Dazzle:              typeof Dazzle10
            Dbusmenu:              typeof Dbusmenu04
            DbusmenuGtk:              typeof DbusmenuGtk04
            DbusmenuGtk3:              typeof DbusmenuGtk304
            Dee:              typeof Dee10
            Devhelp:              typeof Devhelp30
            EBackend:              typeof EBackend12
            EBook:              typeof EBook12
            EBookContacts:              typeof EBookContacts12
            ECal:              typeof ECal20
            ECalendar:              typeof ECalendar12
            EDataBook:              typeof EDataBook12
            EDataCal:              typeof EDataCal20
            EDataServer:              typeof EDataServer12
            EDataServerUI:              typeof EDataServerUI12
            Egg:              typeof Egg10
            Eog:              typeof Eog30
            Epc:              typeof Epc10
            EpcUi:              typeof EpcUi10
            EvinceDocument:              typeof EvinceDocument30
            EvinceView:              typeof EvinceView30
            Farstream:              typeof Farstream01
                |
              typeof Farstream02
            Flatpak:              typeof Flatpak10
            Folks:              typeof Folks06
                |
              typeof Folks07
            FolksDummy:              typeof FolksDummy06
                |
              typeof FolksDummy07
            FolksEds:              typeof FolksEds06
                |
              typeof FolksEds07
            FolksLibsocialweb:              typeof FolksLibsocialweb06
            FolksTelepathy:              typeof FolksTelepathy06
                |
              typeof FolksTelepathy07
            Fwupd:              typeof Fwupd20
            GCab:              typeof GCab10
            GCalc:              typeof GCalc1
                |
              typeof GCalc2
            GConf:              typeof GConf20
            GData:              typeof GData00
            GDesktopEnums:              typeof GDesktopEnums30
            GES:              typeof GES10
            GExiv2:              typeof GExiv2010
            GFBGraph:              typeof GFBGraph02
                |
              typeof GFBGraph03
            GIRepository:              typeof GIRepository20
            GL:              typeof GL10
            GLib:              typeof GLib20
            GMenu:              typeof GMenu30
            GMime:              typeof GMime30
            GModule:              typeof GModule20
            GObject:              typeof GObject20
            GSSDP:              typeof GSSDP10
                |
              typeof GSSDP12
            GSignond:              typeof GSignond10
            GSound:              typeof GSound10
            GSystem:              typeof GSystem10
            GTop:              typeof GTop20
            GUPnP:              typeof GUPnP10
                |
              typeof GUPnP12
            GUPnPAV:              typeof GUPnPAV10
            GUPnPDLNA:              typeof GUPnPDLNA10
                |
              typeof GUPnPDLNA20
            GUPnPDLNAGst:              typeof GUPnPDLNAGst20
            GUPnPIgd:              typeof GUPnPIgd10
            GUdev:              typeof GUdev10
            GUsb:              typeof GUsb10
            GVnc:              typeof GVnc10
            GVncPulse:              typeof GVncPulse10
            GWeather:              typeof GWeather30
            GXPS:              typeof GXPS01
                |
              typeof Gxps10
            GXml:              typeof GXml010
                |
              typeof GXml014
                |
              typeof GXml016
                |
              typeof GXml018
                |
              typeof GXml020
                |
              typeof GXml04
            Gck:              typeof Gck1
            Gcr:              typeof Gcr3
            GcrUi:              typeof GcrUi3
            Gd:              typeof Gd10
            Gda:              typeof Gda50
                |
              typeof Gda60
            Gdaui:              typeof Gdaui50
                |
              typeof Gdaui60
            Gdk:              typeof Gdk20
                |
              typeof Gdk30
                |
              typeof Gdk40
            GdkPixbuf:              typeof GdkPixbuf20
            GdkPixdata:              typeof GdkPixdata20
            GdkWayland:              typeof GdkWayland40
            GdkX11:              typeof GdkX1120
                |
              typeof GdkX1130
                |
              typeof GdkX1140
            Gdl:              typeof Gdl3
            Gdm:              typeof Gdm10
            Gedit:              typeof Gedit30
            Gee:              typeof Gee08
                |
              typeof Gee10
            Gegl:              typeof Gegl03
                |
              typeof Gegl04
            GeglGtk3:              typeof GeglGtk301
            Geoclue:              typeof Geoclue20
            GeocodeGlib:              typeof GeocodeGlib10
            Gepub:              typeof Gepub05
            Ggit:              typeof Ggit10
            Gio:              typeof Gio20
            Gitg:              typeof Gitg10
            GitgExt:              typeof GitgExt10
            GjsDBus:              typeof GjsDBus10
            Gkbd:              typeof Gkbd30
            Gladeui:              typeof Gladeui20
            GnomeAutoar:              typeof GnomeAutoar01
            GnomeAutoarGtk:              typeof GnomeAutoarGtk01
            GnomeBluetooth:              typeof GnomeBluetooth10
            GnomeDesktop:              typeof GnomeDesktop30
            GnomeKeyring:              typeof GnomeKeyring10
            GnomeMaps:              typeof GnomeMaps10
            GoVirt:              typeof GoVirt10
            Goa:              typeof Goa10
            GooCanvas:              typeof GooCanvas20
                |
              typeof GooCanvas30
            Gpseq:              typeof Gpseq10
            Granite:              typeof Granite10
            Graphene:              typeof Graphene10
            Grl:              typeof Grl01
                |
              typeof Grl02
                |
              typeof Grl03
            GrlNet:              typeof GrlNet01
                |
              typeof GrlNet02
                |
              typeof GrlNet03
            GrlPls:              typeof GrlPls02
                |
              typeof GrlPls03
            Grss:              typeof Grss07
            Gsf:              typeof Gsf1
            Gsk:              typeof Gsk40
            Gspell:              typeof Gspell1
            Gst:              typeof Gst10
                |
              typeof Gst010
            GstAllocators:              typeof GstAllocators10
            GstApp:              typeof GstApp10
            GstAudio:              typeof GstAudio10
            GstBadAllocators:              typeof GstBadAllocators10
            GstBadAudio:              typeof GstBadAudio10
            GstBase:              typeof GstBase10
                |
              typeof GstBase010
            GstCheck:              typeof GstCheck10
            GstCodecs:              typeof GstCodecs10
            GstController:              typeof GstController10
            GstFft:              typeof GstFft10
            GstGL:              typeof GstGL10
            GstGLEGL:              typeof GstGLEGL10
            GstGLWayland:              typeof GstGLWayland10
            GstGLX11:              typeof GstGLX1110
            GstInsertBin:              typeof GstInsertBin10
            GstMpegts:              typeof GstMpegts10
            GstNet:              typeof GstNet10
            GstPbutils:              typeof GstPbutils10
                |
              typeof GstPbutils010
            GstPlayer:              typeof GstPlayer10
            GstRiff:              typeof GstRiff10
            GstRtp:              typeof GstRtp10
            GstRtsp:              typeof GstRtsp10
            GstRtspServer:              typeof GstRtspServer10
            GstSdp:              typeof GstSdp10
            GstTag:              typeof GstTag10
                |
              typeof GstTag010
            GstTranscoder:              typeof GstTranscoder10
            GstVideo:              typeof GstVideo10
                |
              typeof GstVideo010
            GstVulkan:              typeof GstVulkan10
            GstWebRTC:              typeof GstWebRTC10
            Gtef:              typeof Gtef2
            Gtk:              typeof Gtk20
                |
              typeof Gtk30
                |
              typeof Gtk40
            GtkChamplain:              typeof GtkChamplain012
            GtkClutter:              typeof GtkClutter10
            GtkSource:              typeof GtkSource30
                |
              typeof GtkSource4
                |
              typeof GtkSource5
            GtkVnc:              typeof GtkVnc20
            Gucharmap:              typeof Gucharmap290
            Guestfs:              typeof Guestfs10
            Handy:              typeof Handy00
                |
              typeof Handy1
            HarfBuzz:              typeof HarfBuzz00
            IAnjuta:              typeof IAnjuta30
            IBus:              typeof IBus10
            ICal:              typeof ICal30
            ICalGLib:              typeof ICalGLib30
            Ide:              typeof Ide10
            JSCore:              typeof JSCore30
            JavaScriptCore:              typeof JavaScriptCore30
                |
              typeof JavaScriptCore40
            Json:              typeof Json10
            Jsonrpc:              typeof Jsonrpc10
            Libosinfo:              typeof Libosinfo10
            LibvirtGConfig:              typeof LibvirtGConfig10
            LibvirtGLib:              typeof LibvirtGLib10
            LibvirtGObject:              typeof LibvirtGObject10
            Manette:              typeof Manette02
            Mash:              typeof Mash02
            Mbim:              typeof Mbim10
            MediaArt:              typeof MediaArt10
                |
              typeof MediaArt20
            ModemManager:              typeof ModemManager10
            Mx:              typeof Mx10
                |
              typeof Mx20
            MxGtk:              typeof MxGtk10
            NM:              typeof NM10
            NMA:              typeof NMA10
            NMClient:              typeof NMClient10
            NMGtk:              typeof NMGtk10
            Nautilus:              typeof Nautilus30
            NetworkManager:              typeof NetworkManager10
            Nice:              typeof Nice01
            Notify:              typeof Notify07
            OSTree:              typeof OSTree10
            P11Kit:              typeof P11Kit10
            PackageKitGlib:              typeof PackageKitGlib10
            PackageKitPlugin:              typeof PackageKitPlugin10
            PanelApplet:              typeof PanelApplet40
            Pango:              typeof Pango10
            PangoCairo:              typeof PangoCairo10
            PangoFT2:              typeof PangoFT210
            PangoFc:              typeof PangoFc10
            PangoOT:              typeof PangoOT10
            PangoXft:              typeof PangoXft10
            Peas:              typeof Peas10
            PeasGtk:              typeof PeasGtk10
            Pnl:              typeof Pnl10
            Polkit:              typeof Polkit10
            PolkitAgent:              typeof PolkitAgent10
            Poppler:              typeof Poppler018
            Qmi:              typeof Qmi10
            Rest:              typeof Rest07
            RestExtras:              typeof RestExtras07
            Retro:              typeof Retro014
                |
              typeof Retro1
            Rsvg:              typeof Rsvg20
            RygelCore:              typeof RygelCore24
                |
              typeof RygelCore26
            RygelRenderer:              typeof RygelRenderer24
                |
              typeof RygelRenderer26
            RygelRendererGst:              typeof RygelRendererGst26
            RygelServer:              typeof RygelServer24
                |
              typeof RygelServer26
            Secret:              typeof Secret1
            SecretUnstable:              typeof SecretUnstable0
            Shumate:              typeof Shumate00
            Signon:              typeof Signon20
            Snapd:              typeof Snapd1
            Soup:              typeof Soup24
            SoupGNOME:              typeof SoupGNOME24
            SpiceClientGLib:              typeof SpiceClientGLib20
            SpiceClientGtk:              typeof SpiceClientGtk30
            Sushi:              typeof Sushi10
            TelepathyFarstream:              typeof TelepathyFarstream06
            TelepathyGLib:              typeof TelepathyGLib012
            TelepathyLogger:              typeof TelepathyLogger02
            Template:              typeof Template10
            Tepl:              typeof Tepl4
                |
              typeof Tepl5
                |
              typeof Tepl6
            TimezoneMap:              typeof TimezoneMap10
            Totem:              typeof Totem10
            TotemPlParser:              typeof TotemPlParser10
            Tracker:              typeof Tracker016
                |
              typeof Tracker10
                |
              typeof Tracker20
                |
              typeof Tracker30
            TrackerControl:              typeof TrackerControl10
                |
              typeof TrackerControl20
            TrackerExtract:              typeof TrackerExtract016
            TrackerMiner:              typeof TrackerMiner016
                |
              typeof TrackerMiner10
                |
              typeof TrackerMiner20
            UDisks:              typeof UDisks20
            UPowerGlib:              typeof UPowerGlib10
            Uhm:              typeof Uhm00
            Unique:              typeof Unique30
            Unity:              typeof Unity60
                |
              typeof Unity70
            UnityExtras:              typeof UnityExtras70
            Vda:              typeof Vda1
            Vgda:              typeof Vgda1
            Vgpg:              typeof Vgpg1
            Vgsl:              typeof Vgsl1
            Vpg:              typeof Vpg1
            Vte:              typeof Vte291
            Vulkan:              typeof Vulkan10
            WebKit:              typeof WebKit30
            WebKit2:              typeof WebKit230
                |
              typeof WebKit240
            WebKit2WebExtension:              typeof WebKit2WebExtension30
                |
              typeof WebKit2WebExtension40
            Wnck:              typeof Wnck30
            Xkl:              typeof Xkl10
            Zeitgeist:              typeof Zeitgeist20
            Zpj:              typeof Zpj00
            cairo:              typeof Cairo10
            fontconfig:              typeof Fontconfig20
            freetype2:              typeof Freetype220
            gSignon:              typeof GSignon10
            libxml2:              typeof Libxml220
            win32:              typeof Win3210
            xfixes:              typeof Xfixes40
            xft:              typeof Xft20
            xlib:              typeof Xlib20
            xrandr:              typeof Xrandr13
            GstInterfaces:              typeof GstInterfaces010
            SocialWebClient:              typeof SocialWebClient025
        }
        versions: {
            Accounts:              '1.0'
            AccountsService:              '1.0'
            Adw:              '1'
            Amtk:              '4'
                |
              '5'
            Anjuta:              '3.0'
            Anthy:              '9000'
            AppStream:              '1.0'
            AppStreamBuilder:              '1.0'
            AppStreamGlib:              '1.0'
            Atk:              '1.0'
            Atspi:              '2.0'
            Babl:              '0.1'
            Bamf:              '3'
            Builder:              '1.0'
            Cally:              '1.0'
            Camel:              '1.2'
            Caribou:              '1.0'
            Champlain:              '0.12'
            Cheese:              '3.0'
            Clutter:              '1.0'
            ClutterGdk:              '1.0'
            ClutterGst:              '1.0'
                |
              '2.0'
                |
              '3.0'
            ClutterX11:              '1.0'
            Cogl:              '1.0'
                |
              '2.0'
            CoglGst:              '2.0'
            CoglPango:              '1.0'
                |
              '2.0'
            ColorHug:              '1.0'
            Colord:              '1.0'
            ColordGtk:              '1.0'
            DBus:              '1.0'
            DBusGLib:              '1.0'
            DMAP:              '3.0'
            Dazzle:              '1.0'
            Dbusmenu:              '0.4'
            DbusmenuGtk:              '0.4'
            DbusmenuGtk3:              '0.4'
            Dee:              '1.0'
            Devhelp:              '3.0'
            EBackend:              '1.2'
            EBook:              '1.2'
            EBookContacts:              '1.2'
            ECal:              '2.0'
            ECalendar:              '1.2'
            EDataBook:              '1.2'
            EDataCal:              '2.0'
            EDataServer:              '1.2'
            EDataServerUI:              '1.2'
            Egg:              '1.0'
            Eog:              '3.0'
            Epc:              '1.0'
            EpcUi:              '1.0'
            EvinceDocument:              '3.0'
            EvinceView:              '3.0'
            Farstream:              '0.1'
                |
              '0.2'
            Flatpak:              '1.0'
            Folks:              '0.6'
                |
              '0.7'
            FolksDummy:              '0.6'
                |
              '0.7'
            FolksEds:              '0.6'
                |
              '0.7'
            FolksLibsocialweb:              '0.6'
            FolksTelepathy:              '0.6'
                |
              '0.7'
            Fwupd:              '2.0'
            GCab:              '1.0'
            GCalc:              '1'
                |
              '2'
            GConf:              '2.0'
            GData:              '0.0'
            GDesktopEnums:              '3.0'
            GES:              '1.0'
            GExiv2:              '0.10'
            GFBGraph:              '0.2'
                |
              '0.3'
            GIRepository:              '2.0'
            GL:              '1.0'
            GLib:              '2.0'
            GMenu:              '3.0'
            GMime:              '3.0'
            GModule:              '2.0'
            GObject:              '2.0'
            GSSDP:              '1.0'
                |
              '1.2'
            GSignond:              '1.0'
            GSound:              '1.0'
            GSystem:              '1.0'
            GTop:              '2.0'
            GUPnP:              '1.0'
                |
              '1.2'
            GUPnPAV:              '1.0'
            GUPnPDLNA:              '1.0'
                |
              '2.0'
            GUPnPDLNAGst:              '2.0'
            GUPnPIgd:              '1.0'
            GUdev:              '1.0'
            GUsb:              '1.0'
            GVnc:              '1.0'
            GVncPulse:              '1.0'
            GWeather:              '3.0'
            GXPS:              '0.1'
                |
              '1.0'
            GXml:              '0.10'
                |
              '0.14'
                |
              '0.16'
                |
              '0.18'
                |
              '0.20'
                |
              '0.4'
            Gck:              '1'
            Gcr:              '3'
            GcrUi:              '3'
            Gd:              '1.0'
            Gda:              '5.0'
                |
              '6.0'
            Gdaui:              '5.0'
                |
              '6.0'
            Gdk:              '2.0'
                |
              '3.0'
                |
              '4.0'
            GdkPixbuf:              '2.0'
            GdkPixdata:              '2.0'
            GdkWayland:              '4.0'
            GdkX11:              '2.0'
                |
              '3.0'
                |
              '4.0'
            Gdl:              '3'
            Gdm:              '1.0'
            Gedit:              '3.0'
            Gee:              '0.8'
                |
              '1.0'
            Gegl:              '0.3'
                |
              '0.4'
            GeglGtk3:              '0.1'
            Geoclue:              '2.0'
            GeocodeGlib:              '1.0'
            Gepub:              '0.5'
            Ggit:              '1.0'
            Gio:              '2.0'
            Gitg:              '1.0'
            GitgExt:              '1.0'
            GjsDBus:              '1.0'
            Gkbd:              '3.0'
            Gladeui:              '2.0'
            GnomeAutoar:              '0.1'
            GnomeAutoarGtk:              '0.1'
            GnomeBluetooth:              '1.0'
            GnomeDesktop:              '3.0'
            GnomeKeyring:              '1.0'
            GnomeMaps:              '1.0'
            GoVirt:              '1.0'
            Goa:              '1.0'
            GooCanvas:              '2.0'
                |
              '3.0'
            Gpseq:              '1.0'
            Granite:              '1.0'
            Graphene:              '1.0'
            Grl:              '0.1'
                |
              '0.2'
                |
              '0.3'
            GrlNet:              '0.1'
                |
              '0.2'
                |
              '0.3'
            GrlPls:              '0.2'
                |
              '0.3'
            Grss:              '0.7'
            Gsf:              '1'
            Gsk:              '4.0'
            Gspell:              '1'
            Gst:              '1.0'
                |
              '0.10'
            GstAllocators:              '1.0'
            GstApp:              '1.0'
            GstAudio:              '1.0'
            GstBadAllocators:              '1.0'
            GstBadAudio:              '1.0'
            GstBase:              '1.0'
                |
              '0.10'
            GstCheck:              '1.0'
            GstCodecs:              '1.0'
            GstController:              '1.0'
            GstFft:              '1.0'
            GstGL:              '1.0'
            GstGLEGL:              '1.0'
            GstGLWayland:              '1.0'
            GstGLX11:              '1.0'
            GstInsertBin:              '1.0'
            GstMpegts:              '1.0'
            GstNet:              '1.0'
            GstPbutils:              '1.0'
                |
              '0.10'
            GstPlayer:              '1.0'
            GstRiff:              '1.0'
            GstRtp:              '1.0'
            GstRtsp:              '1.0'
            GstRtspServer:              '1.0'
            GstSdp:              '1.0'
            GstTag:              '1.0'
                |
              '0.10'
            GstTranscoder:              '1.0'
            GstVideo:              '1.0'
                |
              '0.10'
            GstVulkan:              '1.0'
            GstWebRTC:              '1.0'
            Gtef:              '2'
            Gtk:              '2.0'
                |
              '3.0'
                |
              '4.0'
            GtkChamplain:              '0.12'
            GtkClutter:              '1.0'
            GtkSource:              '3.0'
                |
              '4'
                |
              '5'
            GtkVnc:              '2.0'
            Gucharmap:              '2.90'
            Guestfs:              '1.0'
            Handy:              '0.0'
                |
              '1'
            HarfBuzz:              '0.0'
            IAnjuta:              '3.0'
            IBus:              '1.0'
            ICal:              '3.0'
            ICalGLib:              '3.0'
            Ide:              '1.0'
            JSCore:              '3.0'
            JavaScriptCore:              '3.0'
                |
              '4.0'
            Json:              '1.0'
            Jsonrpc:              '1.0'
            Libosinfo:              '1.0'
            LibvirtGConfig:              '1.0'
            LibvirtGLib:              '1.0'
            LibvirtGObject:              '1.0'
            Manette:              '0.2'
            Mash:              '0.2'
            Mbim:              '1.0'
            MediaArt:              '1.0'
                |
              '2.0'
            ModemManager:              '1.0'
            Mx:              '1.0'
                |
              '2.0'
            MxGtk:              '1.0'
            NM:              '1.0'
            NMA:              '1.0'
            NMClient:              '1.0'
            NMGtk:              '1.0'
            Nautilus:              '3.0'
            NetworkManager:              '1.0'
            Nice:              '0.1'
            Notify:              '0.7'
            OSTree:              '1.0'
            P11Kit:              '1.0'
            PackageKitGlib:              '1.0'
            PackageKitPlugin:              '1.0'
            PanelApplet:              '4.0'
            Pango:              '1.0'
            PangoCairo:              '1.0'
            PangoFT2:              '1.0'
            PangoFc:              '1.0'
            PangoOT:              '1.0'
            PangoXft:              '1.0'
            Peas:              '1.0'
            PeasGtk:              '1.0'
            Pnl:              '1.0'
            Polkit:              '1.0'
            PolkitAgent:              '1.0'
            Poppler:              '0.18'
            Qmi:              '1.0'
            Rest:              '0.7'
            RestExtras:              '0.7'
            Retro:              '0.14'
                |
              '1'
            Rsvg:              '2.0'
            RygelCore:              '2.4'
                |
              '2.6'
            RygelRenderer:              '2.4'
                |
              '2.6'
            RygelRendererGst:              '2.6'
            RygelServer:              '2.4'
                |
              '2.6'
            Secret:              '1'
            SecretUnstable:              '0'
            Shumate:              '0.0'
            Signon:              '2.0'
            Snapd:              '1'
            Soup:              '2.4'
            SoupGNOME:              '2.4'
            SpiceClientGLib:              '2.0'
            SpiceClientGtk:              '3.0'
            Sushi:              '1.0'
            TelepathyFarstream:              '0.6'
            TelepathyGLib:              '0.12'
            TelepathyLogger:              '0.2'
            Template:              '1.0'
            Tepl:              '4'
                |
              '5'
                |
              '6'
            TimezoneMap:              '1.0'
            Totem:              '1.0'
            TotemPlParser:              '1.0'
            Tracker:              '0.16'
                |
              '1.0'
                |
              '2.0'
                |
              '3.0'
            TrackerControl:              '1.0'
                |
              '2.0'
            TrackerExtract:              '0.16'
            TrackerMiner:              '0.16'
                |
              '1.0'
                |
              '2.0'
            UDisks:              '2.0'
            UPowerGlib:              '1.0'
            Uhm:              '0.0'
            Unique:              '3.0'
            Unity:              '6.0'
                |
              '7.0'
            UnityExtras:              '7.0'
            Vda:              '1'
            Vgda:              '1'
            Vgpg:              '1'
            Vgsl:              '1'
            Vpg:              '1'
            Vte:              '2.91'
            Vulkan:              '1.0'
            WebKit:              '3.0'
            WebKit2:              '3.0'
                |
              '4.0'
            WebKit2WebExtension:              '3.0'
                |
              '4.0'
            Wnck:              '3.0'
            Xkl:              '1.0'
            Zeitgeist:              '2.0'
            Zpj:              '0.0'
            cairo:              '1.0'
            fontconfig:              '2.0'
            freetype2:              '2.0'
            gSignon:              '1.0'
            libxml2:              '2.0'
            win32:              '1.0'
            xfixes:              '4.0'
            xft:              '2.0'
            xlib:              '2.0'
            xrandr:              '1.3'
            GstInterfaces:              '0.10'
            SocialWebClient:              '0.25'
        }
        searchPath: string[];
    }
}

export { imports }
