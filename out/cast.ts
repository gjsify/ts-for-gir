import * as Gtk from './Gtk'
import * as Atk from './Atk'
import * as GObject from './GObject'
import * as Gdk from './Gdk'
import * as GdkPixbuf from './GdkPixbuf'
import * as Gio from './Gio'
import * as Pango from './Pango'
import * as Soup from './Soup'
import * as GtkSource from './GtkSource'
import * as WebKit from './WebKit'
import * as AppIndicator3 from './AppIndicator3'
import * as Notify from './Notify'


/** Casts between derived classes, performing a run-time type-check
 * and raising an exception if the cast fails. Allows casting to implemented
 * interfaces, too.
 */
function c<T>(to_: string, inheritanceTable: string[], from_: GObject.Object): T {
    let desc: string = from_.toString()
    let clsName: string|null = null
    for (let k of desc.split(" ")) {
        if (k.substring(0, 7) == "GIName:") {
            clsName = k.substring(7)
            break
        }
    }
    let toName = to_.replace("_", ".")

    if (toName === clsName)
        return ((from_ as any) as T)

    if (clsName) {
        let parents = inheritanceTable[clsName]
        if (parents) {
            if (parents.indexOf(toName) >= 0)
                return ((from_ as any) as T)
        }
    }

    throw Error("Invalid cast of " + desc + "(" + clsName + ") to " + toName)
}


export function Gtk_AboutDialog(from_: GObject.Object) { return c<Gtk.AboutDialog>('Gtk.AboutDialog', [ 'Gtk.Dialog', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Window', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_AccelGroup(from_: GObject.Object) { return c<Gtk.AccelGroup>('Gtk.AccelGroup', [ 'GObject.Object' ], from_) }
export function Gtk_AccelLabel(from_: GObject.Object) { return c<Gtk.AccelLabel>('Gtk.AccelLabel', [ 'Gtk.Label', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Misc', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_AccelMap(from_: GObject.Object) { return c<Gtk.AccelMap>('Gtk.AccelMap', [ 'GObject.Object' ], from_) }
export function Gtk_Accessible(from_: GObject.Object) { return c<Gtk.Accessible>('Gtk.Accessible', [ 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Action(from_: GObject.Object) { return c<Gtk.Action>('Gtk.Action', [ 'GObject.Object', 'Gtk.Buildable' ], from_) }
export function Gtk_ActionBar(from_: GObject.Object) { return c<Gtk.ActionBar>('Gtk.ActionBar', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ActionGroup(from_: GObject.Object) { return c<Gtk.ActionGroup>('Gtk.ActionGroup', [ 'GObject.Object', 'Gtk.Buildable' ], from_) }
export function Gtk_Adjustment(from_: GObject.Object) { return c<Gtk.Adjustment>('Gtk.Adjustment', [ 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Alignment(from_: GObject.Object) { return c<Gtk.Alignment>('Gtk.Alignment', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_AppChooserButton(from_: GObject.Object) { return c<Gtk.AppChooserButton>('Gtk.AppChooserButton', [ 'Gtk.ComboBox', 'Atk.ImplementorIface', 'Gtk.AppChooser', 'Gtk.Buildable', 'Gtk.CellEditable', 'Gtk.CellLayout', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_AppChooserDialog(from_: GObject.Object) { return c<Gtk.AppChooserDialog>('Gtk.AppChooserDialog', [ 'Gtk.Dialog', 'Atk.ImplementorIface', 'Gtk.AppChooser', 'Gtk.Buildable', 'Gtk.Window', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_AppChooserWidget(from_: GObject.Object) { return c<Gtk.AppChooserWidget>('Gtk.AppChooserWidget', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.AppChooser', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Application(from_: GObject.Object) { return c<Gtk.Application>('Gtk.Application', [ 'Gio.Application', 'Gio.ActionGroup', 'Gio.ActionMap', 'GObject.Object' ], from_) }
export function Gtk_ApplicationWindow(from_: GObject.Object) { return c<Gtk.ApplicationWindow>('Gtk.ApplicationWindow', [ 'Gtk.Window', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Arrow(from_: GObject.Object) { return c<Gtk.Arrow>('Gtk.Arrow', [ 'Gtk.Misc', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ArrowAccessible(from_: GObject.Object) { return c<Gtk.ArrowAccessible>('Gtk.ArrowAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Component', 'Atk.Image', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_AspectFrame(from_: GObject.Object) { return c<Gtk.AspectFrame>('Gtk.AspectFrame', [ 'Gtk.Frame', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Assistant(from_: GObject.Object) { return c<Gtk.Assistant>('Gtk.Assistant', [ 'Gtk.Window', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Bin(from_: GObject.Object) { return c<Gtk.Bin>('Gtk.Bin', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_BooleanCellAccessible(from_: GObject.Object) { return c<Gtk.BooleanCellAccessible>('Gtk.BooleanCellAccessible', [ 'Gtk.RendererCellAccessible', 'Atk.Action', 'Atk.Component', 'Gtk.CellAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Box(from_: GObject.Object) { return c<Gtk.Box>('Gtk.Box', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Builder(from_: GObject.Object) { return c<Gtk.Builder>('Gtk.Builder', [ 'GObject.Object' ], from_) }
export function Gtk_Button(from_: GObject.Object) { return c<Gtk.Button>('Gtk.Button', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ButtonAccessible(from_: GObject.Object) { return c<Gtk.ButtonAccessible>('Gtk.ButtonAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Image', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ButtonBox(from_: GObject.Object) { return c<Gtk.ButtonBox>('Gtk.ButtonBox', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Calendar(from_: GObject.Object) { return c<Gtk.Calendar>('Gtk.Calendar', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellAccessible(from_: GObject.Object) { return c<Gtk.CellAccessible>('Gtk.CellAccessible', [ 'Gtk.Accessible', 'Atk.Action', 'Atk.Component', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_CellArea(from_: GObject.Object) { return c<Gtk.CellArea>('Gtk.CellArea', [ 'GObject.InitiallyUnowned', 'Gtk.Buildable', 'Gtk.CellLayout', 'GObject.Object' ], from_) }
export function Gtk_CellAreaBox(from_: GObject.Object) { return c<Gtk.CellAreaBox>('Gtk.CellAreaBox', [ 'Gtk.CellArea', 'Gtk.Buildable', 'Gtk.CellLayout', 'Gtk.Orientable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellAreaContext(from_: GObject.Object) { return c<Gtk.CellAreaContext>('Gtk.CellAreaContext', [ 'GObject.Object' ], from_) }
export function Gtk_CellRenderer(from_: GObject.Object) { return c<Gtk.CellRenderer>('Gtk.CellRenderer', [ 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellRendererAccel(from_: GObject.Object) { return c<Gtk.CellRendererAccel>('Gtk.CellRendererAccel', [ 'Gtk.CellRendererText', 'Gtk.CellRenderer', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellRendererCombo(from_: GObject.Object) { return c<Gtk.CellRendererCombo>('Gtk.CellRendererCombo', [ 'Gtk.CellRendererText', 'Gtk.CellRenderer', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellRendererPixbuf(from_: GObject.Object) { return c<Gtk.CellRendererPixbuf>('Gtk.CellRendererPixbuf', [ 'Gtk.CellRenderer', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellRendererProgress(from_: GObject.Object) { return c<Gtk.CellRendererProgress>('Gtk.CellRendererProgress', [ 'Gtk.CellRenderer', 'Gtk.Orientable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellRendererSpin(from_: GObject.Object) { return c<Gtk.CellRendererSpin>('Gtk.CellRendererSpin', [ 'Gtk.CellRendererText', 'Gtk.CellRenderer', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellRendererSpinner(from_: GObject.Object) { return c<Gtk.CellRendererSpinner>('Gtk.CellRendererSpinner', [ 'Gtk.CellRenderer', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellRendererText(from_: GObject.Object) { return c<Gtk.CellRendererText>('Gtk.CellRendererText', [ 'Gtk.CellRenderer', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellRendererToggle(from_: GObject.Object) { return c<Gtk.CellRendererToggle>('Gtk.CellRendererToggle', [ 'Gtk.CellRenderer', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CellView(from_: GObject.Object) { return c<Gtk.CellView>('Gtk.CellView', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.CellLayout', 'Gtk.Orientable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CheckButton(from_: GObject.Object) { return c<Gtk.CheckButton>('Gtk.CheckButton', [ 'Gtk.ToggleButton', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Button', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CheckMenuItem(from_: GObject.Object) { return c<Gtk.CheckMenuItem>('Gtk.CheckMenuItem', [ 'Gtk.MenuItem', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_CheckMenuItemAccessible(from_: GObject.Object) { return c<Gtk.CheckMenuItemAccessible>('Gtk.CheckMenuItemAccessible', [ 'Gtk.MenuItemAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Selection', 'Gtk.ContainerAccessible', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Clipboard(from_: GObject.Object) { return c<Gtk.Clipboard>('Gtk.Clipboard', [ 'GObject.Object' ], from_) }
export function Gtk_ColorButton(from_: GObject.Object) { return c<Gtk.ColorButton>('Gtk.ColorButton', [ 'Gtk.Button', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.ColorChooser', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ColorChooserDialog(from_: GObject.Object) { return c<Gtk.ColorChooserDialog>('Gtk.ColorChooserDialog', [ 'Gtk.Dialog', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.ColorChooser', 'Gtk.Window', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ColorChooserWidget(from_: GObject.Object) { return c<Gtk.ColorChooserWidget>('Gtk.ColorChooserWidget', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.ColorChooser', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ColorSelection(from_: GObject.Object) { return c<Gtk.ColorSelection>('Gtk.ColorSelection', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ColorSelectionDialog(from_: GObject.Object) { return c<Gtk.ColorSelectionDialog>('Gtk.ColorSelectionDialog', [ 'Gtk.Dialog', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Window', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ComboBox(from_: GObject.Object) { return c<Gtk.ComboBox>('Gtk.ComboBox', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.CellEditable', 'Gtk.CellLayout', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ComboBoxAccessible(from_: GObject.Object) { return c<Gtk.ComboBoxAccessible>('Gtk.ComboBoxAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Selection', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ComboBoxText(from_: GObject.Object) { return c<Gtk.ComboBoxText>('Gtk.ComboBoxText', [ 'Gtk.ComboBox', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.CellEditable', 'Gtk.CellLayout', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Container(from_: GObject.Object) { return c<Gtk.Container>('Gtk.Container', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ContainerAccessible(from_: GObject.Object) { return c<Gtk.ContainerAccessible>('Gtk.ContainerAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Component', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ContainerCellAccessible(from_: GObject.Object) { return c<Gtk.ContainerCellAccessible>('Gtk.ContainerCellAccessible', [ 'Gtk.CellAccessible', 'Atk.Action', 'Atk.Component', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_CssProvider(from_: GObject.Object) { return c<Gtk.CssProvider>('Gtk.CssProvider', [ 'GObject.Object', 'Gtk.StyleProvider' ], from_) }
export function Gtk_Dialog(from_: GObject.Object) { return c<Gtk.Dialog>('Gtk.Dialog', [ 'Gtk.Window', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_DrawingArea(from_: GObject.Object) { return c<Gtk.DrawingArea>('Gtk.DrawingArea', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Entry(from_: GObject.Object) { return c<Gtk.Entry>('Gtk.Entry', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.CellEditable', 'Gtk.Editable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_EntryAccessible(from_: GObject.Object) { return c<Gtk.EntryAccessible>('Gtk.EntryAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Action', 'Atk.Component', 'Atk.EditableText', 'Atk.Text', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_EntryBuffer(from_: GObject.Object) { return c<Gtk.EntryBuffer>('Gtk.EntryBuffer', [ 'GObject.Object' ], from_) }
export function Gtk_EntryCompletion(from_: GObject.Object) { return c<Gtk.EntryCompletion>('Gtk.EntryCompletion', [ 'GObject.Object', 'Gtk.Buildable', 'Gtk.CellLayout' ], from_) }
export function Gtk_EntryIconAccessible(from_: GObject.Object) { return c<Gtk.EntryIconAccessible>('Gtk.EntryIconAccessible', [ 'Atk.Object', 'Atk.Action', 'Atk.Component', 'GObject.Object' ], from_) }
export function Gtk_EventBox(from_: GObject.Object) { return c<Gtk.EventBox>('Gtk.EventBox', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_EventController(from_: GObject.Object) { return c<Gtk.EventController>('Gtk.EventController', [ 'GObject.Object' ], from_) }
export function Gtk_Expander(from_: GObject.Object) { return c<Gtk.Expander>('Gtk.Expander', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ExpanderAccessible(from_: GObject.Object) { return c<Gtk.ExpanderAccessible>('Gtk.ExpanderAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Action', 'Atk.Component', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_FileChooserButton(from_: GObject.Object) { return c<Gtk.FileChooserButton>('Gtk.FileChooserButton', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.FileChooser', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FileChooserDialog(from_: GObject.Object) { return c<Gtk.FileChooserDialog>('Gtk.FileChooserDialog', [ 'Gtk.Dialog', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.FileChooser', 'Gtk.Window', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FileChooserNative(from_: GObject.Object) { return c<Gtk.FileChooserNative>('Gtk.FileChooserNative', [ 'Gtk.NativeDialog', 'Gtk.FileChooser', 'GObject.Object' ], from_) }
export function Gtk_FileChooserWidget(from_: GObject.Object) { return c<Gtk.FileChooserWidget>('Gtk.FileChooserWidget', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.FileChooser', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FileFilter(from_: GObject.Object) { return c<Gtk.FileFilter>('Gtk.FileFilter', [ 'GObject.InitiallyUnowned', 'Gtk.Buildable', 'GObject.Object' ], from_) }
export function Gtk_Fixed(from_: GObject.Object) { return c<Gtk.Fixed>('Gtk.Fixed', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FlowBox(from_: GObject.Object) { return c<Gtk.FlowBox>('Gtk.FlowBox', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FlowBoxAccessible(from_: GObject.Object) { return c<Gtk.FlowBoxAccessible>('Gtk.FlowBoxAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Atk.Selection', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_FlowBoxChild(from_: GObject.Object) { return c<Gtk.FlowBoxChild>('Gtk.FlowBoxChild', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FlowBoxChildAccessible(from_: GObject.Object) { return c<Gtk.FlowBoxChildAccessible>('Gtk.FlowBoxChildAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_FontButton(from_: GObject.Object) { return c<Gtk.FontButton>('Gtk.FontButton', [ 'Gtk.Button', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.FontChooser', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FontChooserDialog(from_: GObject.Object) { return c<Gtk.FontChooserDialog>('Gtk.FontChooserDialog', [ 'Gtk.Dialog', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.FontChooser', 'Gtk.Window', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FontChooserWidget(from_: GObject.Object) { return c<Gtk.FontChooserWidget>('Gtk.FontChooserWidget', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.FontChooser', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FontSelection(from_: GObject.Object) { return c<Gtk.FontSelection>('Gtk.FontSelection', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FontSelectionDialog(from_: GObject.Object) { return c<Gtk.FontSelectionDialog>('Gtk.FontSelectionDialog', [ 'Gtk.Dialog', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Window', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Frame(from_: GObject.Object) { return c<Gtk.Frame>('Gtk.Frame', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_FrameAccessible(from_: GObject.Object) { return c<Gtk.FrameAccessible>('Gtk.FrameAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_GLArea(from_: GObject.Object) { return c<Gtk.GLArea>('Gtk.GLArea', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Gesture(from_: GObject.Object) { return c<Gtk.Gesture>('Gtk.Gesture', [ 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_GestureDrag(from_: GObject.Object) { return c<Gtk.GestureDrag>('Gtk.GestureDrag', [ 'Gtk.GestureSingle', 'Gtk.Gesture', 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_GestureLongPress(from_: GObject.Object) { return c<Gtk.GestureLongPress>('Gtk.GestureLongPress', [ 'Gtk.GestureSingle', 'Gtk.Gesture', 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_GestureMultiPress(from_: GObject.Object) { return c<Gtk.GestureMultiPress>('Gtk.GestureMultiPress', [ 'Gtk.GestureSingle', 'Gtk.Gesture', 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_GesturePan(from_: GObject.Object) { return c<Gtk.GesturePan>('Gtk.GesturePan', [ 'Gtk.GestureDrag', 'Gtk.GestureSingle', 'Gtk.Gesture', 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_GestureRotate(from_: GObject.Object) { return c<Gtk.GestureRotate>('Gtk.GestureRotate', [ 'Gtk.Gesture', 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_GestureSingle(from_: GObject.Object) { return c<Gtk.GestureSingle>('Gtk.GestureSingle', [ 'Gtk.Gesture', 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_GestureSwipe(from_: GObject.Object) { return c<Gtk.GestureSwipe>('Gtk.GestureSwipe', [ 'Gtk.GestureSingle', 'Gtk.Gesture', 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_GestureZoom(from_: GObject.Object) { return c<Gtk.GestureZoom>('Gtk.GestureZoom', [ 'Gtk.Gesture', 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_Grid(from_: GObject.Object) { return c<Gtk.Grid>('Gtk.Grid', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_HBox(from_: GObject.Object) { return c<Gtk.HBox>('Gtk.HBox', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_HButtonBox(from_: GObject.Object) { return c<Gtk.HButtonBox>('Gtk.HButtonBox', [ 'Gtk.ButtonBox', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Box', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_HPaned(from_: GObject.Object) { return c<Gtk.HPaned>('Gtk.HPaned', [ 'Gtk.Paned', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_HSV(from_: GObject.Object) { return c<Gtk.HSV>('Gtk.HSV', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_HScale(from_: GObject.Object) { return c<Gtk.HScale>('Gtk.HScale', [ 'Gtk.Scale', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Range', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_HScrollbar(from_: GObject.Object) { return c<Gtk.HScrollbar>('Gtk.HScrollbar', [ 'Gtk.Scrollbar', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Range', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_HSeparator(from_: GObject.Object) { return c<Gtk.HSeparator>('Gtk.HSeparator', [ 'Gtk.Separator', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_HandleBox(from_: GObject.Object) { return c<Gtk.HandleBox>('Gtk.HandleBox', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_HeaderBar(from_: GObject.Object) { return c<Gtk.HeaderBar>('Gtk.HeaderBar', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_IMContext(from_: GObject.Object) { return c<Gtk.IMContext>('Gtk.IMContext', [ 'GObject.Object' ], from_) }
export function Gtk_IMContextSimple(from_: GObject.Object) { return c<Gtk.IMContextSimple>('Gtk.IMContextSimple', [ 'Gtk.IMContext', 'GObject.Object' ], from_) }
export function Gtk_IMMulticontext(from_: GObject.Object) { return c<Gtk.IMMulticontext>('Gtk.IMMulticontext', [ 'Gtk.IMContext', 'GObject.Object' ], from_) }
export function Gtk_IconFactory(from_: GObject.Object) { return c<Gtk.IconFactory>('Gtk.IconFactory', [ 'GObject.Object', 'Gtk.Buildable' ], from_) }
export function Gtk_IconInfo(from_: GObject.Object) { return c<Gtk.IconInfo>('Gtk.IconInfo', [ 'GObject.Object' ], from_) }
export function Gtk_IconTheme(from_: GObject.Object) { return c<Gtk.IconTheme>('Gtk.IconTheme', [ 'GObject.Object' ], from_) }
export function Gtk_IconView(from_: GObject.Object) { return c<Gtk.IconView>('Gtk.IconView', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.CellLayout', 'Gtk.Scrollable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_IconViewAccessible(from_: GObject.Object) { return c<Gtk.IconViewAccessible>('Gtk.IconViewAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Atk.Selection', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Image(from_: GObject.Object) { return c<Gtk.Image>('Gtk.Image', [ 'Gtk.Misc', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ImageAccessible(from_: GObject.Object) { return c<Gtk.ImageAccessible>('Gtk.ImageAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Component', 'Atk.Image', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ImageCellAccessible(from_: GObject.Object) { return c<Gtk.ImageCellAccessible>('Gtk.ImageCellAccessible', [ 'Gtk.RendererCellAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Image', 'Gtk.CellAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ImageMenuItem(from_: GObject.Object) { return c<Gtk.ImageMenuItem>('Gtk.ImageMenuItem', [ 'Gtk.MenuItem', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_InfoBar(from_: GObject.Object) { return c<Gtk.InfoBar>('Gtk.InfoBar', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Invisible(from_: GObject.Object) { return c<Gtk.Invisible>('Gtk.Invisible', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Label(from_: GObject.Object) { return c<Gtk.Label>('Gtk.Label', [ 'Gtk.Misc', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_LabelAccessible(from_: GObject.Object) { return c<Gtk.LabelAccessible>('Gtk.LabelAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Component', 'Atk.Hypertext', 'Atk.Text', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Layout(from_: GObject.Object) { return c<Gtk.Layout>('Gtk.Layout', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Scrollable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_LevelBar(from_: GObject.Object) { return c<Gtk.LevelBar>('Gtk.LevelBar', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_LevelBarAccessible(from_: GObject.Object) { return c<Gtk.LevelBarAccessible>('Gtk.LevelBarAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Component', 'Atk.Value', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_LinkButton(from_: GObject.Object) { return c<Gtk.LinkButton>('Gtk.LinkButton', [ 'Gtk.Button', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_LinkButtonAccessible(from_: GObject.Object) { return c<Gtk.LinkButtonAccessible>('Gtk.LinkButtonAccessible', [ 'Gtk.ButtonAccessible', 'Atk.Action', 'Atk.Component', 'Atk.HyperlinkImpl', 'Atk.Image', 'Gtk.ContainerAccessible', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ListBox(from_: GObject.Object) { return c<Gtk.ListBox>('Gtk.ListBox', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ListBoxAccessible(from_: GObject.Object) { return c<Gtk.ListBoxAccessible>('Gtk.ListBoxAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Atk.Selection', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ListBoxRow(from_: GObject.Object) { return c<Gtk.ListBoxRow>('Gtk.ListBoxRow', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ListBoxRowAccessible(from_: GObject.Object) { return c<Gtk.ListBoxRowAccessible>('Gtk.ListBoxRowAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ListStore(from_: GObject.Object) { return c<Gtk.ListStore>('Gtk.ListStore', [ 'GObject.Object', 'Gtk.Buildable', 'Gtk.TreeDragDest', 'Gtk.TreeDragSource', 'Gtk.TreeModel', 'Gtk.TreeSortable' ], from_) }
export function Gtk_LockButton(from_: GObject.Object) { return c<Gtk.LockButton>('Gtk.LockButton', [ 'Gtk.Button', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_LockButtonAccessible(from_: GObject.Object) { return c<Gtk.LockButtonAccessible>('Gtk.LockButtonAccessible', [ 'Gtk.ButtonAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Image', 'Gtk.ContainerAccessible', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Menu(from_: GObject.Object) { return c<Gtk.Menu>('Gtk.Menu', [ 'Gtk.MenuShell', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_MenuAccessible(from_: GObject.Object) { return c<Gtk.MenuAccessible>('Gtk.MenuAccessible', [ 'Gtk.MenuShellAccessible', 'Atk.Component', 'Atk.Selection', 'Gtk.ContainerAccessible', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_MenuBar(from_: GObject.Object) { return c<Gtk.MenuBar>('Gtk.MenuBar', [ 'Gtk.MenuShell', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_MenuButton(from_: GObject.Object) { return c<Gtk.MenuButton>('Gtk.MenuButton', [ 'Gtk.ToggleButton', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Button', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_MenuButtonAccessible(from_: GObject.Object) { return c<Gtk.MenuButtonAccessible>('Gtk.MenuButtonAccessible', [ 'Gtk.ToggleButtonAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Image', 'Gtk.ButtonAccessible', 'Gtk.ContainerAccessible', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_MenuItem(from_: GObject.Object) { return c<Gtk.MenuItem>('Gtk.MenuItem', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_MenuItemAccessible(from_: GObject.Object) { return c<Gtk.MenuItemAccessible>('Gtk.MenuItemAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Selection', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_MenuShell(from_: GObject.Object) { return c<Gtk.MenuShell>('Gtk.MenuShell', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_MenuShellAccessible(from_: GObject.Object) { return c<Gtk.MenuShellAccessible>('Gtk.MenuShellAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Atk.Selection', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_MenuToolButton(from_: GObject.Object) { return c<Gtk.MenuToolButton>('Gtk.MenuToolButton', [ 'Gtk.ToolButton', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.ToolItem', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_MessageDialog(from_: GObject.Object) { return c<Gtk.MessageDialog>('Gtk.MessageDialog', [ 'Gtk.Dialog', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Window', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Misc(from_: GObject.Object) { return c<Gtk.Misc>('Gtk.Misc', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ModelButton(from_: GObject.Object) { return c<Gtk.ModelButton>('Gtk.ModelButton', [ 'Gtk.Button', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_MountOperation(from_: GObject.Object) { return c<Gtk.MountOperation>('Gtk.MountOperation', [ 'Gio.MountOperation', 'GObject.Object' ], from_) }
export function Gtk_NativeDialog(from_: GObject.Object) { return c<Gtk.NativeDialog>('Gtk.NativeDialog', [ 'GObject.Object' ], from_) }
export function Gtk_Notebook(from_: GObject.Object) { return c<Gtk.Notebook>('Gtk.Notebook', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_NotebookAccessible(from_: GObject.Object) { return c<Gtk.NotebookAccessible>('Gtk.NotebookAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Atk.Selection', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_NotebookPageAccessible(from_: GObject.Object) { return c<Gtk.NotebookPageAccessible>('Gtk.NotebookPageAccessible', [ 'Atk.Object', 'Atk.Component', 'GObject.Object' ], from_) }
export function Gtk_NumerableIcon(from_: GObject.Object) { return c<Gtk.NumerableIcon>('Gtk.NumerableIcon', [ 'Gio.EmblemedIcon', 'Gio.Icon', 'GObject.Object' ], from_) }
export function Gtk_OffscreenWindow(from_: GObject.Object) { return c<Gtk.OffscreenWindow>('Gtk.OffscreenWindow', [ 'Gtk.Window', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Overlay(from_: GObject.Object) { return c<Gtk.Overlay>('Gtk.Overlay', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_PadController(from_: GObject.Object) { return c<Gtk.PadController>('Gtk.PadController', [ 'Gtk.EventController', 'GObject.Object' ], from_) }
export function Gtk_PageSetup(from_: GObject.Object) { return c<Gtk.PageSetup>('Gtk.PageSetup', [ 'GObject.Object' ], from_) }
export function Gtk_Paned(from_: GObject.Object) { return c<Gtk.Paned>('Gtk.Paned', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_PanedAccessible(from_: GObject.Object) { return c<Gtk.PanedAccessible>('Gtk.PanedAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Atk.Value', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_PlacesSidebar(from_: GObject.Object) { return c<Gtk.PlacesSidebar>('Gtk.PlacesSidebar', [ 'Gtk.ScrolledWindow', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Plug(from_: GObject.Object) { return c<Gtk.Plug>('Gtk.Plug', [ 'Gtk.Window', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Popover(from_: GObject.Object) { return c<Gtk.Popover>('Gtk.Popover', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_PopoverAccessible(from_: GObject.Object) { return c<Gtk.PopoverAccessible>('Gtk.PopoverAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_PopoverMenu(from_: GObject.Object) { return c<Gtk.PopoverMenu>('Gtk.PopoverMenu', [ 'Gtk.Popover', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_PrintContext(from_: GObject.Object) { return c<Gtk.PrintContext>('Gtk.PrintContext', [ 'GObject.Object' ], from_) }
export function Gtk_PrintOperation(from_: GObject.Object) { return c<Gtk.PrintOperation>('Gtk.PrintOperation', [ 'GObject.Object', 'Gtk.PrintOperationPreview' ], from_) }
export function Gtk_PrintSettings(from_: GObject.Object) { return c<Gtk.PrintSettings>('Gtk.PrintSettings', [ 'GObject.Object' ], from_) }
export function Gtk_ProgressBar(from_: GObject.Object) { return c<Gtk.ProgressBar>('Gtk.ProgressBar', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ProgressBarAccessible(from_: GObject.Object) { return c<Gtk.ProgressBarAccessible>('Gtk.ProgressBarAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Component', 'Atk.Value', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_RadioAction(from_: GObject.Object) { return c<Gtk.RadioAction>('Gtk.RadioAction', [ 'Gtk.ToggleAction', 'Gtk.Buildable', 'Gtk.Action', 'GObject.Object' ], from_) }
export function Gtk_RadioButton(from_: GObject.Object) { return c<Gtk.RadioButton>('Gtk.RadioButton', [ 'Gtk.CheckButton', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.ToggleButton', 'Gtk.Button', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_RadioButtonAccessible(from_: GObject.Object) { return c<Gtk.RadioButtonAccessible>('Gtk.RadioButtonAccessible', [ 'Gtk.ToggleButtonAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Image', 'Gtk.ButtonAccessible', 'Gtk.ContainerAccessible', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_RadioMenuItem(from_: GObject.Object) { return c<Gtk.RadioMenuItem>('Gtk.RadioMenuItem', [ 'Gtk.CheckMenuItem', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.MenuItem', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_RadioMenuItemAccessible(from_: GObject.Object) { return c<Gtk.RadioMenuItemAccessible>('Gtk.RadioMenuItemAccessible', [ 'Gtk.CheckMenuItemAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Selection', 'Gtk.MenuItemAccessible', 'Gtk.ContainerAccessible', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_RadioToolButton(from_: GObject.Object) { return c<Gtk.RadioToolButton>('Gtk.RadioToolButton', [ 'Gtk.ToggleToolButton', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.ToolButton', 'Gtk.ToolItem', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Range(from_: GObject.Object) { return c<Gtk.Range>('Gtk.Range', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_RangeAccessible(from_: GObject.Object) { return c<Gtk.RangeAccessible>('Gtk.RangeAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Component', 'Atk.Value', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_RcStyle(from_: GObject.Object) { return c<Gtk.RcStyle>('Gtk.RcStyle', [ 'GObject.Object' ], from_) }
export function Gtk_RecentAction(from_: GObject.Object) { return c<Gtk.RecentAction>('Gtk.RecentAction', [ 'Gtk.Action', 'Gtk.Buildable', 'Gtk.RecentChooser', 'GObject.Object' ], from_) }
export function Gtk_RecentChooserDialog(from_: GObject.Object) { return c<Gtk.RecentChooserDialog>('Gtk.RecentChooserDialog', [ 'Gtk.Dialog', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.RecentChooser', 'Gtk.Window', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_RecentChooserMenu(from_: GObject.Object) { return c<Gtk.RecentChooserMenu>('Gtk.RecentChooserMenu', [ 'Gtk.Menu', 'Atk.ImplementorIface', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.RecentChooser', 'Gtk.MenuShell', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_RecentChooserWidget(from_: GObject.Object) { return c<Gtk.RecentChooserWidget>('Gtk.RecentChooserWidget', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.RecentChooser', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_RecentFilter(from_: GObject.Object) { return c<Gtk.RecentFilter>('Gtk.RecentFilter', [ 'GObject.InitiallyUnowned', 'Gtk.Buildable', 'GObject.Object' ], from_) }
export function Gtk_RecentManager(from_: GObject.Object) { return c<Gtk.RecentManager>('Gtk.RecentManager', [ 'GObject.Object' ], from_) }
export function Gtk_RendererCellAccessible(from_: GObject.Object) { return c<Gtk.RendererCellAccessible>('Gtk.RendererCellAccessible', [ 'Gtk.CellAccessible', 'Atk.Action', 'Atk.Component', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Revealer(from_: GObject.Object) { return c<Gtk.Revealer>('Gtk.Revealer', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Scale(from_: GObject.Object) { return c<Gtk.Scale>('Gtk.Scale', [ 'Gtk.Range', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ScaleAccessible(from_: GObject.Object) { return c<Gtk.ScaleAccessible>('Gtk.ScaleAccessible', [ 'Gtk.RangeAccessible', 'Atk.Component', 'Atk.Value', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ScaleButton(from_: GObject.Object) { return c<Gtk.ScaleButton>('Gtk.ScaleButton', [ 'Gtk.Button', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ScaleButtonAccessible(from_: GObject.Object) { return c<Gtk.ScaleButtonAccessible>('Gtk.ScaleButtonAccessible', [ 'Gtk.ButtonAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Image', 'Atk.Value', 'Gtk.ContainerAccessible', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Scrollbar(from_: GObject.Object) { return c<Gtk.Scrollbar>('Gtk.Scrollbar', [ 'Gtk.Range', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ScrolledWindow(from_: GObject.Object) { return c<Gtk.ScrolledWindow>('Gtk.ScrolledWindow', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ScrolledWindowAccessible(from_: GObject.Object) { return c<Gtk.ScrolledWindowAccessible>('Gtk.ScrolledWindowAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_SearchBar(from_: GObject.Object) { return c<Gtk.SearchBar>('Gtk.SearchBar', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_SearchEntry(from_: GObject.Object) { return c<Gtk.SearchEntry>('Gtk.SearchEntry', [ 'Gtk.Entry', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.CellEditable', 'Gtk.Editable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Separator(from_: GObject.Object) { return c<Gtk.Separator>('Gtk.Separator', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_SeparatorMenuItem(from_: GObject.Object) { return c<Gtk.SeparatorMenuItem>('Gtk.SeparatorMenuItem', [ 'Gtk.MenuItem', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_SeparatorToolItem(from_: GObject.Object) { return c<Gtk.SeparatorToolItem>('Gtk.SeparatorToolItem', [ 'Gtk.ToolItem', 'Atk.ImplementorIface', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Settings(from_: GObject.Object) { return c<Gtk.Settings>('Gtk.Settings', [ 'GObject.Object', 'Gtk.StyleProvider' ], from_) }
export function Gtk_ShortcutLabel(from_: GObject.Object) { return c<Gtk.ShortcutLabel>('Gtk.ShortcutLabel', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ShortcutsGroup(from_: GObject.Object) { return c<Gtk.ShortcutsGroup>('Gtk.ShortcutsGroup', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ShortcutsSection(from_: GObject.Object) { return c<Gtk.ShortcutsSection>('Gtk.ShortcutsSection', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ShortcutsShortcut(from_: GObject.Object) { return c<Gtk.ShortcutsShortcut>('Gtk.ShortcutsShortcut', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ShortcutsWindow(from_: GObject.Object) { return c<Gtk.ShortcutsWindow>('Gtk.ShortcutsWindow', [ 'Gtk.Window', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_SizeGroup(from_: GObject.Object) { return c<Gtk.SizeGroup>('Gtk.SizeGroup', [ 'GObject.Object', 'Gtk.Buildable' ], from_) }
export function Gtk_Socket(from_: GObject.Object) { return c<Gtk.Socket>('Gtk.Socket', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_SpinButton(from_: GObject.Object) { return c<Gtk.SpinButton>('Gtk.SpinButton', [ 'Gtk.Entry', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.CellEditable', 'Gtk.Editable', 'Gtk.Orientable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_SpinButtonAccessible(from_: GObject.Object) { return c<Gtk.SpinButtonAccessible>('Gtk.SpinButtonAccessible', [ 'Gtk.EntryAccessible', 'Atk.Action', 'Atk.Component', 'Atk.EditableText', 'Atk.Text', 'Atk.Value', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Spinner(from_: GObject.Object) { return c<Gtk.Spinner>('Gtk.Spinner', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_SpinnerAccessible(from_: GObject.Object) { return c<Gtk.SpinnerAccessible>('Gtk.SpinnerAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Component', 'Atk.Image', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Stack(from_: GObject.Object) { return c<Gtk.Stack>('Gtk.Stack', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_StackAccessible(from_: GObject.Object) { return c<Gtk.StackAccessible>('Gtk.StackAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_StackSidebar(from_: GObject.Object) { return c<Gtk.StackSidebar>('Gtk.StackSidebar', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_StackSwitcher(from_: GObject.Object) { return c<Gtk.StackSwitcher>('Gtk.StackSwitcher', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_StatusIcon(from_: GObject.Object) { return c<Gtk.StatusIcon>('Gtk.StatusIcon', [ 'GObject.Object' ], from_) }
export function Gtk_Statusbar(from_: GObject.Object) { return c<Gtk.Statusbar>('Gtk.Statusbar', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_StatusbarAccessible(from_: GObject.Object) { return c<Gtk.StatusbarAccessible>('Gtk.StatusbarAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Style(from_: GObject.Object) { return c<Gtk.Style>('Gtk.Style', [ 'GObject.Object' ], from_) }
export function Gtk_StyleContext(from_: GObject.Object) { return c<Gtk.StyleContext>('Gtk.StyleContext', [ 'GObject.Object' ], from_) }
export function Gtk_StyleProperties(from_: GObject.Object) { return c<Gtk.StyleProperties>('Gtk.StyleProperties', [ 'GObject.Object', 'Gtk.StyleProvider' ], from_) }
export function Gtk_Switch(from_: GObject.Object) { return c<Gtk.Switch>('Gtk.Switch', [ 'Gtk.Widget', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_SwitchAccessible(from_: GObject.Object) { return c<Gtk.SwitchAccessible>('Gtk.SwitchAccessible', [ 'Gtk.WidgetAccessible', 'Atk.Action', 'Atk.Component', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Table(from_: GObject.Object) { return c<Gtk.Table>('Gtk.Table', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_TearoffMenuItem(from_: GObject.Object) { return c<Gtk.TearoffMenuItem>('Gtk.TearoffMenuItem', [ 'Gtk.MenuItem', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_TextBuffer(from_: GObject.Object) { return c<Gtk.TextBuffer>('Gtk.TextBuffer', [ 'GObject.Object' ], from_) }
export function Gtk_TextCellAccessible(from_: GObject.Object) { return c<Gtk.TextCellAccessible>('Gtk.TextCellAccessible', [ 'Gtk.RendererCellAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Text', 'Gtk.CellAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_TextChildAnchor(from_: GObject.Object) { return c<Gtk.TextChildAnchor>('Gtk.TextChildAnchor', [ 'GObject.Object' ], from_) }
export function Gtk_TextMark(from_: GObject.Object) { return c<Gtk.TextMark>('Gtk.TextMark', [ 'GObject.Object' ], from_) }
export function Gtk_TextTag(from_: GObject.Object) { return c<Gtk.TextTag>('Gtk.TextTag', [ 'GObject.Object' ], from_) }
export function Gtk_TextTagTable(from_: GObject.Object) { return c<Gtk.TextTagTable>('Gtk.TextTagTable', [ 'GObject.Object', 'Gtk.Buildable' ], from_) }
export function Gtk_TextView(from_: GObject.Object) { return c<Gtk.TextView>('Gtk.TextView', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Scrollable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_TextViewAccessible(from_: GObject.Object) { return c<Gtk.TextViewAccessible>('Gtk.TextViewAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Atk.EditableText', 'Atk.StreamableContent', 'Atk.Text', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ThemingEngine(from_: GObject.Object) { return c<Gtk.ThemingEngine>('Gtk.ThemingEngine', [ 'GObject.Object' ], from_) }
export function Gtk_ToggleAction(from_: GObject.Object) { return c<Gtk.ToggleAction>('Gtk.ToggleAction', [ 'Gtk.Action', 'Gtk.Buildable', 'GObject.Object' ], from_) }
export function Gtk_ToggleButton(from_: GObject.Object) { return c<Gtk.ToggleButton>('Gtk.ToggleButton', [ 'Gtk.Button', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ToggleButtonAccessible(from_: GObject.Object) { return c<Gtk.ToggleButtonAccessible>('Gtk.ToggleButtonAccessible', [ 'Gtk.ButtonAccessible', 'Atk.Action', 'Atk.Component', 'Atk.Image', 'Gtk.ContainerAccessible', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_ToggleToolButton(from_: GObject.Object) { return c<Gtk.ToggleToolButton>('Gtk.ToggleToolButton', [ 'Gtk.ToolButton', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.ToolItem', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ToolButton(from_: GObject.Object) { return c<Gtk.ToolButton>('Gtk.ToolButton', [ 'Gtk.ToolItem', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ToolItem(from_: GObject.Object) { return c<Gtk.ToolItem>('Gtk.ToolItem', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ToolItemGroup(from_: GObject.Object) { return c<Gtk.ToolItemGroup>('Gtk.ToolItemGroup', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.ToolShell', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_ToolPalette(from_: GObject.Object) { return c<Gtk.ToolPalette>('Gtk.ToolPalette', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Scrollable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Toolbar(from_: GObject.Object) { return c<Gtk.Toolbar>('Gtk.Toolbar', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.ToolShell', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Tooltip(from_: GObject.Object) { return c<Gtk.Tooltip>('Gtk.Tooltip', [ 'GObject.Object' ], from_) }
export function Gtk_ToplevelAccessible(from_: GObject.Object) { return c<Gtk.ToplevelAccessible>('Gtk.ToplevelAccessible', [ 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_TreeModelFilter(from_: GObject.Object) { return c<Gtk.TreeModelFilter>('Gtk.TreeModelFilter', [ 'GObject.Object', 'Gtk.TreeDragSource', 'Gtk.TreeModel' ], from_) }
export function Gtk_TreeModelSort(from_: GObject.Object) { return c<Gtk.TreeModelSort>('Gtk.TreeModelSort', [ 'GObject.Object', 'Gtk.TreeDragSource', 'Gtk.TreeModel', 'Gtk.TreeSortable' ], from_) }
export function Gtk_TreeSelection(from_: GObject.Object) { return c<Gtk.TreeSelection>('Gtk.TreeSelection', [ 'GObject.Object' ], from_) }
export function Gtk_TreeStore(from_: GObject.Object) { return c<Gtk.TreeStore>('Gtk.TreeStore', [ 'GObject.Object', 'Gtk.Buildable', 'Gtk.TreeDragDest', 'Gtk.TreeDragSource', 'Gtk.TreeModel', 'Gtk.TreeSortable' ], from_) }
export function Gtk_TreeView(from_: GObject.Object) { return c<Gtk.TreeView>('Gtk.TreeView', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Scrollable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_TreeViewAccessible(from_: GObject.Object) { return c<Gtk.TreeViewAccessible>('Gtk.TreeViewAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Atk.Selection', 'Atk.Table', 'Gtk.CellAccessibleParent', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_TreeViewColumn(from_: GObject.Object) { return c<Gtk.TreeViewColumn>('Gtk.TreeViewColumn', [ 'GObject.InitiallyUnowned', 'Gtk.Buildable', 'Gtk.CellLayout', 'GObject.Object' ], from_) }
export function Gtk_UIManager(from_: GObject.Object) { return c<Gtk.UIManager>('Gtk.UIManager', [ 'GObject.Object', 'Gtk.Buildable' ], from_) }
export function Gtk_VBox(from_: GObject.Object) { return c<Gtk.VBox>('Gtk.VBox', [ 'Gtk.Box', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_VButtonBox(from_: GObject.Object) { return c<Gtk.VButtonBox>('Gtk.VButtonBox', [ 'Gtk.ButtonBox', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Box', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_VPaned(from_: GObject.Object) { return c<Gtk.VPaned>('Gtk.VPaned', [ 'Gtk.Paned', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_VScale(from_: GObject.Object) { return c<Gtk.VScale>('Gtk.VScale', [ 'Gtk.Scale', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Range', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_VScrollbar(from_: GObject.Object) { return c<Gtk.VScrollbar>('Gtk.VScrollbar', [ 'Gtk.Scrollbar', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Range', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_VSeparator(from_: GObject.Object) { return c<Gtk.VSeparator>('Gtk.VSeparator', [ 'Gtk.Separator', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Viewport(from_: GObject.Object) { return c<Gtk.Viewport>('Gtk.Viewport', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Scrollable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_VolumeButton(from_: GObject.Object) { return c<Gtk.VolumeButton>('Gtk.VolumeButton', [ 'Gtk.ScaleButton', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'Gtk.Orientable', 'Gtk.Button', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_Widget(from_: GObject.Object) { return c<Gtk.Widget>('Gtk.Widget', [ 'GObject.InitiallyUnowned', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GObject.Object' ], from_) }
export function Gtk_WidgetAccessible(from_: GObject.Object) { return c<Gtk.WidgetAccessible>('Gtk.WidgetAccessible', [ 'Gtk.Accessible', 'Atk.Component', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_Window(from_: GObject.Object) { return c<Gtk.Window>('Gtk.Window', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function Gtk_WindowAccessible(from_: GObject.Object) { return c<Gtk.WindowAccessible>('Gtk.WindowAccessible', [ 'Gtk.ContainerAccessible', 'Atk.Component', 'Atk.Window', 'Gtk.WidgetAccessible', 'Gtk.Accessible', 'Atk.Object', 'GObject.Object' ], from_) }
export function Gtk_WindowGroup(from_: GObject.Object) { return c<Gtk.WindowGroup>('Gtk.WindowGroup', [ 'GObject.Object' ], from_) }
export function Atk_GObjectAccessible(from_: GObject.Object) { return c<Atk.GObjectAccessible>('Atk.GObjectAccessible', [ 'Atk.Object', 'GObject.Object' ], from_) }
export function Atk_Hyperlink(from_: GObject.Object) { return c<Atk.Hyperlink>('Atk.Hyperlink', [ 'GObject.Object', 'Atk.Action' ], from_) }
export function Atk_Misc(from_: GObject.Object) { return c<Atk.Misc>('Atk.Misc', [ 'GObject.Object' ], from_) }
export function Atk_NoOpObject(from_: GObject.Object) { return c<Atk.NoOpObject>('Atk.NoOpObject', [ 'Atk.Object', 'Atk.Action', 'Atk.Component', 'Atk.Document', 'Atk.EditableText', 'Atk.Hypertext', 'Atk.Image', 'Atk.Selection', 'Atk.Table', 'Atk.TableCell', 'Atk.Text', 'Atk.Value', 'Atk.Window', 'GObject.Object' ], from_) }
export function Atk_NoOpObjectFactory(from_: GObject.Object) { return c<Atk.NoOpObjectFactory>('Atk.NoOpObjectFactory', [ 'Atk.ObjectFactory', 'GObject.Object' ], from_) }
export function Atk_Object(from_: GObject.Object) { return c<Atk.Object>('Atk.Object', [ 'GObject.Object' ], from_) }
export function Atk_ObjectFactory(from_: GObject.Object) { return c<Atk.ObjectFactory>('Atk.ObjectFactory', [ 'GObject.Object' ], from_) }
export function Atk_Plug(from_: GObject.Object) { return c<Atk.Plug>('Atk.Plug', [ 'Atk.Object', 'Atk.Component', 'GObject.Object' ], from_) }
export function Atk_Registry(from_: GObject.Object) { return c<Atk.Registry>('Atk.Registry', [ 'GObject.Object' ], from_) }
export function Atk_Relation(from_: GObject.Object) { return c<Atk.Relation>('Atk.Relation', [ 'GObject.Object' ], from_) }
export function Atk_RelationSet(from_: GObject.Object) { return c<Atk.RelationSet>('Atk.RelationSet', [ 'GObject.Object' ], from_) }
export function Atk_Socket(from_: GObject.Object) { return c<Atk.Socket>('Atk.Socket', [ 'Atk.Object', 'Atk.Component', 'GObject.Object' ], from_) }
export function Atk_StateSet(from_: GObject.Object) { return c<Atk.StateSet>('Atk.StateSet', [ 'GObject.Object' ], from_) }
export function Atk_Util(from_: GObject.Object) { return c<Atk.Util>('Atk.Util', [ 'GObject.Object' ], from_) }
export function GObject_Binding(from_: GObject.Object) { return c<GObject.Binding>('GObject.Binding', [ 'GObject.Object' ], from_) }
export function GObject_InitiallyUnowned(from_: GObject.Object) { return c<GObject.InitiallyUnowned>('GObject.InitiallyUnowned', [ 'GObject.Object' ], from_) }
export function GObject_ParamSpecBoolean(from_: GObject.Object) { return c<GObject.ParamSpecBoolean>('GObject.ParamSpecBoolean', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecBoxed(from_: GObject.Object) { return c<GObject.ParamSpecBoxed>('GObject.ParamSpecBoxed', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecChar(from_: GObject.Object) { return c<GObject.ParamSpecChar>('GObject.ParamSpecChar', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecDouble(from_: GObject.Object) { return c<GObject.ParamSpecDouble>('GObject.ParamSpecDouble', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecEnum(from_: GObject.Object) { return c<GObject.ParamSpecEnum>('GObject.ParamSpecEnum', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecFlags(from_: GObject.Object) { return c<GObject.ParamSpecFlags>('GObject.ParamSpecFlags', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecFloat(from_: GObject.Object) { return c<GObject.ParamSpecFloat>('GObject.ParamSpecFloat', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecGType(from_: GObject.Object) { return c<GObject.ParamSpecGType>('GObject.ParamSpecGType', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecInt(from_: GObject.Object) { return c<GObject.ParamSpecInt>('GObject.ParamSpecInt', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecInt64(from_: GObject.Object) { return c<GObject.ParamSpecInt64>('GObject.ParamSpecInt64', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecLong(from_: GObject.Object) { return c<GObject.ParamSpecLong>('GObject.ParamSpecLong', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecObject(from_: GObject.Object) { return c<GObject.ParamSpecObject>('GObject.ParamSpecObject', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecOverride(from_: GObject.Object) { return c<GObject.ParamSpecOverride>('GObject.ParamSpecOverride', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecParam(from_: GObject.Object) { return c<GObject.ParamSpecParam>('GObject.ParamSpecParam', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecPointer(from_: GObject.Object) { return c<GObject.ParamSpecPointer>('GObject.ParamSpecPointer', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecString(from_: GObject.Object) { return c<GObject.ParamSpecString>('GObject.ParamSpecString', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecUChar(from_: GObject.Object) { return c<GObject.ParamSpecUChar>('GObject.ParamSpecUChar', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecUInt(from_: GObject.Object) { return c<GObject.ParamSpecUInt>('GObject.ParamSpecUInt', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecUInt64(from_: GObject.Object) { return c<GObject.ParamSpecUInt64>('GObject.ParamSpecUInt64', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecULong(from_: GObject.Object) { return c<GObject.ParamSpecULong>('GObject.ParamSpecULong', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecUnichar(from_: GObject.Object) { return c<GObject.ParamSpecUnichar>('GObject.ParamSpecUnichar', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecValueArray(from_: GObject.Object) { return c<GObject.ParamSpecValueArray>('GObject.ParamSpecValueArray', [ 'GObject.ParamSpec' ], from_) }
export function GObject_ParamSpecVariant(from_: GObject.Object) { return c<GObject.ParamSpecVariant>('GObject.ParamSpecVariant', [ 'GObject.ParamSpec' ], from_) }
export function GObject_TypeModule(from_: GObject.Object) { return c<GObject.TypeModule>('GObject.TypeModule', [ 'GObject.Object', 'GObject.TypePlugin' ], from_) }
export function Gdk_AppLaunchContext(from_: GObject.Object) { return c<Gdk.AppLaunchContext>('Gdk.AppLaunchContext', [ 'Gio.AppLaunchContext', 'GObject.Object' ], from_) }
export function Gdk_Cursor(from_: GObject.Object) { return c<Gdk.Cursor>('Gdk.Cursor', [ 'GObject.Object' ], from_) }
export function Gdk_Device(from_: GObject.Object) { return c<Gdk.Device>('Gdk.Device', [ 'GObject.Object' ], from_) }
export function Gdk_DeviceManager(from_: GObject.Object) { return c<Gdk.DeviceManager>('Gdk.DeviceManager', [ 'GObject.Object' ], from_) }
export function Gdk_DeviceTool(from_: GObject.Object) { return c<Gdk.DeviceTool>('Gdk.DeviceTool', [ 'GObject.Object' ], from_) }
export function Gdk_Display(from_: GObject.Object) { return c<Gdk.Display>('Gdk.Display', [ 'GObject.Object' ], from_) }
export function Gdk_DisplayManager(from_: GObject.Object) { return c<Gdk.DisplayManager>('Gdk.DisplayManager', [ 'GObject.Object' ], from_) }
export function Gdk_DragContext(from_: GObject.Object) { return c<Gdk.DragContext>('Gdk.DragContext', [ 'GObject.Object' ], from_) }
export function Gdk_DrawingContext(from_: GObject.Object) { return c<Gdk.DrawingContext>('Gdk.DrawingContext', [ 'GObject.Object' ], from_) }
export function Gdk_FrameClock(from_: GObject.Object) { return c<Gdk.FrameClock>('Gdk.FrameClock', [ 'GObject.Object' ], from_) }
export function Gdk_GLContext(from_: GObject.Object) { return c<Gdk.GLContext>('Gdk.GLContext', [ 'GObject.Object' ], from_) }
export function Gdk_Keymap(from_: GObject.Object) { return c<Gdk.Keymap>('Gdk.Keymap', [ 'GObject.Object' ], from_) }
export function Gdk_Monitor(from_: GObject.Object) { return c<Gdk.Monitor>('Gdk.Monitor', [ 'GObject.Object' ], from_) }
export function Gdk_Screen(from_: GObject.Object) { return c<Gdk.Screen>('Gdk.Screen', [ 'GObject.Object' ], from_) }
export function Gdk_Seat(from_: GObject.Object) { return c<Gdk.Seat>('Gdk.Seat', [ 'GObject.Object' ], from_) }
export function Gdk_Visual(from_: GObject.Object) { return c<Gdk.Visual>('Gdk.Visual', [ 'GObject.Object' ], from_) }
export function Gdk_Window(from_: GObject.Object) { return c<Gdk.Window>('Gdk.Window', [ 'GObject.Object' ], from_) }
export function GdkPixbuf_Pixbuf(from_: GObject.Object) { return c<GdkPixbuf.Pixbuf>('GdkPixbuf.Pixbuf', [ 'GObject.Object', 'Gio.Icon', 'Gio.LoadableIcon' ], from_) }
export function GdkPixbuf_PixbufAnimation(from_: GObject.Object) { return c<GdkPixbuf.PixbufAnimation>('GdkPixbuf.PixbufAnimation', [ 'GObject.Object' ], from_) }
export function GdkPixbuf_PixbufAnimationIter(from_: GObject.Object) { return c<GdkPixbuf.PixbufAnimationIter>('GdkPixbuf.PixbufAnimationIter', [ 'GObject.Object' ], from_) }
export function GdkPixbuf_PixbufLoader(from_: GObject.Object) { return c<GdkPixbuf.PixbufLoader>('GdkPixbuf.PixbufLoader', [ 'GObject.Object' ], from_) }
export function GdkPixbuf_PixbufSimpleAnim(from_: GObject.Object) { return c<GdkPixbuf.PixbufSimpleAnim>('GdkPixbuf.PixbufSimpleAnim', [ 'GdkPixbuf.PixbufAnimation', 'GObject.Object' ], from_) }
export function GdkPixbuf_PixbufSimpleAnimIter(from_: GObject.Object) { return c<GdkPixbuf.PixbufSimpleAnimIter>('GdkPixbuf.PixbufSimpleAnimIter', [ 'GdkPixbuf.PixbufAnimationIter', 'GObject.Object' ], from_) }
export function Gio_AppInfoMonitor(from_: GObject.Object) { return c<Gio.AppInfoMonitor>('Gio.AppInfoMonitor', [ 'GObject.Object' ], from_) }
export function Gio_AppLaunchContext(from_: GObject.Object) { return c<Gio.AppLaunchContext>('Gio.AppLaunchContext', [ 'GObject.Object' ], from_) }
export function Gio_Application(from_: GObject.Object) { return c<Gio.Application>('Gio.Application', [ 'GObject.Object', 'Gio.ActionGroup', 'Gio.ActionMap' ], from_) }
export function Gio_ApplicationCommandLine(from_: GObject.Object) { return c<Gio.ApplicationCommandLine>('Gio.ApplicationCommandLine', [ 'GObject.Object' ], from_) }
export function Gio_BufferedInputStream(from_: GObject.Object) { return c<Gio.BufferedInputStream>('Gio.BufferedInputStream', [ 'Gio.FilterInputStream', 'Gio.Seekable', 'Gio.InputStream', 'GObject.Object' ], from_) }
export function Gio_BufferedOutputStream(from_: GObject.Object) { return c<Gio.BufferedOutputStream>('Gio.BufferedOutputStream', [ 'Gio.FilterOutputStream', 'Gio.Seekable', 'Gio.OutputStream', 'GObject.Object' ], from_) }
export function Gio_BytesIcon(from_: GObject.Object) { return c<Gio.BytesIcon>('Gio.BytesIcon', [ 'GObject.Object', 'Gio.Icon', 'Gio.LoadableIcon' ], from_) }
export function Gio_Cancellable(from_: GObject.Object) { return c<Gio.Cancellable>('Gio.Cancellable', [ 'GObject.Object' ], from_) }
export function Gio_CharsetConverter(from_: GObject.Object) { return c<Gio.CharsetConverter>('Gio.CharsetConverter', [ 'GObject.Object', 'Gio.Converter', 'Gio.Initable' ], from_) }
export function Gio_ConverterInputStream(from_: GObject.Object) { return c<Gio.ConverterInputStream>('Gio.ConverterInputStream', [ 'Gio.FilterInputStream', 'Gio.PollableInputStream', 'Gio.InputStream', 'GObject.Object' ], from_) }
export function Gio_ConverterOutputStream(from_: GObject.Object) { return c<Gio.ConverterOutputStream>('Gio.ConverterOutputStream', [ 'Gio.FilterOutputStream', 'Gio.PollableOutputStream', 'Gio.OutputStream', 'GObject.Object' ], from_) }
export function Gio_Credentials(from_: GObject.Object) { return c<Gio.Credentials>('Gio.Credentials', [ 'GObject.Object' ], from_) }
export function Gio_DBusActionGroup(from_: GObject.Object) { return c<Gio.DBusActionGroup>('Gio.DBusActionGroup', [ 'GObject.Object', 'Gio.ActionGroup', 'Gio.RemoteActionGroup' ], from_) }
export function Gio_DBusAuthObserver(from_: GObject.Object) { return c<Gio.DBusAuthObserver>('Gio.DBusAuthObserver', [ 'GObject.Object' ], from_) }
export function Gio_DBusConnection(from_: GObject.Object) { return c<Gio.DBusConnection>('Gio.DBusConnection', [ 'GObject.Object', 'Gio.AsyncInitable', 'Gio.Initable' ], from_) }
export function Gio_DBusInterfaceSkeleton(from_: GObject.Object) { return c<Gio.DBusInterfaceSkeleton>('Gio.DBusInterfaceSkeleton', [ 'GObject.Object', 'Gio.DBusInterface' ], from_) }
export function Gio_DBusMenuModel(from_: GObject.Object) { return c<Gio.DBusMenuModel>('Gio.DBusMenuModel', [ 'Gio.MenuModel', 'GObject.Object' ], from_) }
export function Gio_DBusMessage(from_: GObject.Object) { return c<Gio.DBusMessage>('Gio.DBusMessage', [ 'GObject.Object' ], from_) }
export function Gio_DBusMethodInvocation(from_: GObject.Object) { return c<Gio.DBusMethodInvocation>('Gio.DBusMethodInvocation', [ 'GObject.Object' ], from_) }
export function Gio_DBusObjectManagerClient(from_: GObject.Object) { return c<Gio.DBusObjectManagerClient>('Gio.DBusObjectManagerClient', [ 'GObject.Object', 'Gio.AsyncInitable', 'Gio.DBusObjectManager', 'Gio.Initable' ], from_) }
export function Gio_DBusObjectManagerServer(from_: GObject.Object) { return c<Gio.DBusObjectManagerServer>('Gio.DBusObjectManagerServer', [ 'GObject.Object', 'Gio.DBusObjectManager' ], from_) }
export function Gio_DBusObjectProxy(from_: GObject.Object) { return c<Gio.DBusObjectProxy>('Gio.DBusObjectProxy', [ 'GObject.Object', 'Gio.DBusObject' ], from_) }
export function Gio_DBusObjectSkeleton(from_: GObject.Object) { return c<Gio.DBusObjectSkeleton>('Gio.DBusObjectSkeleton', [ 'GObject.Object', 'Gio.DBusObject' ], from_) }
export function Gio_DBusProxy(from_: GObject.Object) { return c<Gio.DBusProxy>('Gio.DBusProxy', [ 'GObject.Object', 'Gio.AsyncInitable', 'Gio.DBusInterface', 'Gio.Initable' ], from_) }
export function Gio_DBusServer(from_: GObject.Object) { return c<Gio.DBusServer>('Gio.DBusServer', [ 'GObject.Object', 'Gio.Initable' ], from_) }
export function Gio_DataInputStream(from_: GObject.Object) { return c<Gio.DataInputStream>('Gio.DataInputStream', [ 'Gio.BufferedInputStream', 'Gio.Seekable', 'Gio.FilterInputStream', 'Gio.InputStream', 'GObject.Object' ], from_) }
export function Gio_DataOutputStream(from_: GObject.Object) { return c<Gio.DataOutputStream>('Gio.DataOutputStream', [ 'Gio.FilterOutputStream', 'Gio.Seekable', 'Gio.OutputStream', 'GObject.Object' ], from_) }
export function Gio_DesktopAppInfo(from_: GObject.Object) { return c<Gio.DesktopAppInfo>('Gio.DesktopAppInfo', [ 'GObject.Object', 'Gio.AppInfo' ], from_) }
export function Gio_Emblem(from_: GObject.Object) { return c<Gio.Emblem>('Gio.Emblem', [ 'GObject.Object', 'Gio.Icon' ], from_) }
export function Gio_EmblemedIcon(from_: GObject.Object) { return c<Gio.EmblemedIcon>('Gio.EmblemedIcon', [ 'GObject.Object', 'Gio.Icon' ], from_) }
export function Gio_FileEnumerator(from_: GObject.Object) { return c<Gio.FileEnumerator>('Gio.FileEnumerator', [ 'GObject.Object' ], from_) }
export function Gio_FileIOStream(from_: GObject.Object) { return c<Gio.FileIOStream>('Gio.FileIOStream', [ 'Gio.IOStream', 'Gio.Seekable', 'GObject.Object' ], from_) }
export function Gio_FileIcon(from_: GObject.Object) { return c<Gio.FileIcon>('Gio.FileIcon', [ 'GObject.Object', 'Gio.Icon', 'Gio.LoadableIcon' ], from_) }
export function Gio_FileInfo(from_: GObject.Object) { return c<Gio.FileInfo>('Gio.FileInfo', [ 'GObject.Object' ], from_) }
export function Gio_FileInputStream(from_: GObject.Object) { return c<Gio.FileInputStream>('Gio.FileInputStream', [ 'Gio.InputStream', 'Gio.Seekable', 'GObject.Object' ], from_) }
export function Gio_FileMonitor(from_: GObject.Object) { return c<Gio.FileMonitor>('Gio.FileMonitor', [ 'GObject.Object' ], from_) }
export function Gio_FileOutputStream(from_: GObject.Object) { return c<Gio.FileOutputStream>('Gio.FileOutputStream', [ 'Gio.OutputStream', 'Gio.Seekable', 'GObject.Object' ], from_) }
export function Gio_FilenameCompleter(from_: GObject.Object) { return c<Gio.FilenameCompleter>('Gio.FilenameCompleter', [ 'GObject.Object' ], from_) }
export function Gio_FilterInputStream(from_: GObject.Object) { return c<Gio.FilterInputStream>('Gio.FilterInputStream', [ 'Gio.InputStream', 'GObject.Object' ], from_) }
export function Gio_FilterOutputStream(from_: GObject.Object) { return c<Gio.FilterOutputStream>('Gio.FilterOutputStream', [ 'Gio.OutputStream', 'GObject.Object' ], from_) }
export function Gio_IOModule(from_: GObject.Object) { return c<Gio.IOModule>('Gio.IOModule', [ 'GObject.TypeModule', 'GObject.TypePlugin', 'GObject.Object' ], from_) }
export function Gio_IOStream(from_: GObject.Object) { return c<Gio.IOStream>('Gio.IOStream', [ 'GObject.Object' ], from_) }
export function Gio_InetAddress(from_: GObject.Object) { return c<Gio.InetAddress>('Gio.InetAddress', [ 'GObject.Object' ], from_) }
export function Gio_InetAddressMask(from_: GObject.Object) { return c<Gio.InetAddressMask>('Gio.InetAddressMask', [ 'GObject.Object', 'Gio.Initable' ], from_) }
export function Gio_InetSocketAddress(from_: GObject.Object) { return c<Gio.InetSocketAddress>('Gio.InetSocketAddress', [ 'Gio.SocketAddress', 'Gio.SocketConnectable', 'GObject.Object' ], from_) }
export function Gio_InputStream(from_: GObject.Object) { return c<Gio.InputStream>('Gio.InputStream', [ 'GObject.Object' ], from_) }
export function Gio_ListStore(from_: GObject.Object) { return c<Gio.ListStore>('Gio.ListStore', [ 'GObject.Object', 'Gio.ListModel' ], from_) }
export function Gio_MemoryInputStream(from_: GObject.Object) { return c<Gio.MemoryInputStream>('Gio.MemoryInputStream', [ 'Gio.InputStream', 'Gio.PollableInputStream', 'Gio.Seekable', 'GObject.Object' ], from_) }
export function Gio_MemoryOutputStream(from_: GObject.Object) { return c<Gio.MemoryOutputStream>('Gio.MemoryOutputStream', [ 'Gio.OutputStream', 'Gio.PollableOutputStream', 'Gio.Seekable', 'GObject.Object' ], from_) }
export function Gio_Menu(from_: GObject.Object) { return c<Gio.Menu>('Gio.Menu', [ 'Gio.MenuModel', 'GObject.Object' ], from_) }
export function Gio_MenuAttributeIter(from_: GObject.Object) { return c<Gio.MenuAttributeIter>('Gio.MenuAttributeIter', [ 'GObject.Object' ], from_) }
export function Gio_MenuItem(from_: GObject.Object) { return c<Gio.MenuItem>('Gio.MenuItem', [ 'GObject.Object' ], from_) }
export function Gio_MenuLinkIter(from_: GObject.Object) { return c<Gio.MenuLinkIter>('Gio.MenuLinkIter', [ 'GObject.Object' ], from_) }
export function Gio_MenuModel(from_: GObject.Object) { return c<Gio.MenuModel>('Gio.MenuModel', [ 'GObject.Object' ], from_) }
export function Gio_MountOperation(from_: GObject.Object) { return c<Gio.MountOperation>('Gio.MountOperation', [ 'GObject.Object' ], from_) }
export function Gio_NativeVolumeMonitor(from_: GObject.Object) { return c<Gio.NativeVolumeMonitor>('Gio.NativeVolumeMonitor', [ 'Gio.VolumeMonitor', 'GObject.Object' ], from_) }
export function Gio_NetworkAddress(from_: GObject.Object) { return c<Gio.NetworkAddress>('Gio.NetworkAddress', [ 'GObject.Object', 'Gio.SocketConnectable' ], from_) }
export function Gio_NetworkService(from_: GObject.Object) { return c<Gio.NetworkService>('Gio.NetworkService', [ 'GObject.Object', 'Gio.SocketConnectable' ], from_) }
export function Gio_Notification(from_: GObject.Object) { return c<Gio.Notification>('Gio.Notification', [ 'GObject.Object' ], from_) }
export function Gio_OutputStream(from_: GObject.Object) { return c<Gio.OutputStream>('Gio.OutputStream', [ 'GObject.Object' ], from_) }
export function Gio_Permission(from_: GObject.Object) { return c<Gio.Permission>('Gio.Permission', [ 'GObject.Object' ], from_) }
export function Gio_PropertyAction(from_: GObject.Object) { return c<Gio.PropertyAction>('Gio.PropertyAction', [ 'GObject.Object', 'Gio.Action' ], from_) }
export function Gio_ProxyAddress(from_: GObject.Object) { return c<Gio.ProxyAddress>('Gio.ProxyAddress', [ 'Gio.InetSocketAddress', 'Gio.SocketConnectable', 'Gio.SocketAddress', 'GObject.Object' ], from_) }
export function Gio_ProxyAddressEnumerator(from_: GObject.Object) { return c<Gio.ProxyAddressEnumerator>('Gio.ProxyAddressEnumerator', [ 'Gio.SocketAddressEnumerator', 'GObject.Object' ], from_) }
export function Gio_Resolver(from_: GObject.Object) { return c<Gio.Resolver>('Gio.Resolver', [ 'GObject.Object' ], from_) }
export function Gio_Settings(from_: GObject.Object) { return c<Gio.Settings>('Gio.Settings', [ 'GObject.Object' ], from_) }
export function Gio_SettingsBackend(from_: GObject.Object) { return c<Gio.SettingsBackend>('Gio.SettingsBackend', [ 'GObject.Object' ], from_) }
export function Gio_SimpleAction(from_: GObject.Object) { return c<Gio.SimpleAction>('Gio.SimpleAction', [ 'GObject.Object', 'Gio.Action' ], from_) }
export function Gio_SimpleActionGroup(from_: GObject.Object) { return c<Gio.SimpleActionGroup>('Gio.SimpleActionGroup', [ 'GObject.Object', 'Gio.ActionGroup', 'Gio.ActionMap' ], from_) }
export function Gio_SimpleAsyncResult(from_: GObject.Object) { return c<Gio.SimpleAsyncResult>('Gio.SimpleAsyncResult', [ 'GObject.Object', 'Gio.AsyncResult' ], from_) }
export function Gio_SimpleIOStream(from_: GObject.Object) { return c<Gio.SimpleIOStream>('Gio.SimpleIOStream', [ 'Gio.IOStream', 'GObject.Object' ], from_) }
export function Gio_SimplePermission(from_: GObject.Object) { return c<Gio.SimplePermission>('Gio.SimplePermission', [ 'Gio.Permission', 'GObject.Object' ], from_) }
export function Gio_SimpleProxyResolver(from_: GObject.Object) { return c<Gio.SimpleProxyResolver>('Gio.SimpleProxyResolver', [ 'GObject.Object', 'Gio.ProxyResolver' ], from_) }
export function Gio_Socket(from_: GObject.Object) { return c<Gio.Socket>('Gio.Socket', [ 'GObject.Object', 'Gio.DatagramBased', 'Gio.Initable' ], from_) }
export function Gio_SocketAddress(from_: GObject.Object) { return c<Gio.SocketAddress>('Gio.SocketAddress', [ 'GObject.Object', 'Gio.SocketConnectable' ], from_) }
export function Gio_SocketAddressEnumerator(from_: GObject.Object) { return c<Gio.SocketAddressEnumerator>('Gio.SocketAddressEnumerator', [ 'GObject.Object' ], from_) }
export function Gio_SocketClient(from_: GObject.Object) { return c<Gio.SocketClient>('Gio.SocketClient', [ 'GObject.Object' ], from_) }
export function Gio_SocketConnection(from_: GObject.Object) { return c<Gio.SocketConnection>('Gio.SocketConnection', [ 'Gio.IOStream', 'GObject.Object' ], from_) }
export function Gio_SocketControlMessage(from_: GObject.Object) { return c<Gio.SocketControlMessage>('Gio.SocketControlMessage', [ 'GObject.Object' ], from_) }
export function Gio_SocketListener(from_: GObject.Object) { return c<Gio.SocketListener>('Gio.SocketListener', [ 'GObject.Object' ], from_) }
export function Gio_SocketService(from_: GObject.Object) { return c<Gio.SocketService>('Gio.SocketService', [ 'Gio.SocketListener', 'GObject.Object' ], from_) }
export function Gio_Subprocess(from_: GObject.Object) { return c<Gio.Subprocess>('Gio.Subprocess', [ 'GObject.Object', 'Gio.Initable' ], from_) }
export function Gio_SubprocessLauncher(from_: GObject.Object) { return c<Gio.SubprocessLauncher>('Gio.SubprocessLauncher', [ 'GObject.Object' ], from_) }
export function Gio_Task(from_: GObject.Object) { return c<Gio.Task>('Gio.Task', [ 'GObject.Object', 'Gio.AsyncResult' ], from_) }
export function Gio_TcpConnection(from_: GObject.Object) { return c<Gio.TcpConnection>('Gio.TcpConnection', [ 'Gio.SocketConnection', 'Gio.IOStream', 'GObject.Object' ], from_) }
export function Gio_TcpWrapperConnection(from_: GObject.Object) { return c<Gio.TcpWrapperConnection>('Gio.TcpWrapperConnection', [ 'Gio.TcpConnection', 'Gio.SocketConnection', 'Gio.IOStream', 'GObject.Object' ], from_) }
export function Gio_TestDBus(from_: GObject.Object) { return c<Gio.TestDBus>('Gio.TestDBus', [ 'GObject.Object' ], from_) }
export function Gio_ThemedIcon(from_: GObject.Object) { return c<Gio.ThemedIcon>('Gio.ThemedIcon', [ 'GObject.Object', 'Gio.Icon' ], from_) }
export function Gio_ThreadedSocketService(from_: GObject.Object) { return c<Gio.ThreadedSocketService>('Gio.ThreadedSocketService', [ 'Gio.SocketService', 'Gio.SocketListener', 'GObject.Object' ], from_) }
export function Gio_TlsCertificate(from_: GObject.Object) { return c<Gio.TlsCertificate>('Gio.TlsCertificate', [ 'GObject.Object' ], from_) }
export function Gio_TlsConnection(from_: GObject.Object) { return c<Gio.TlsConnection>('Gio.TlsConnection', [ 'Gio.IOStream', 'GObject.Object' ], from_) }
export function Gio_TlsDatabase(from_: GObject.Object) { return c<Gio.TlsDatabase>('Gio.TlsDatabase', [ 'GObject.Object' ], from_) }
export function Gio_TlsInteraction(from_: GObject.Object) { return c<Gio.TlsInteraction>('Gio.TlsInteraction', [ 'GObject.Object' ], from_) }
export function Gio_TlsPassword(from_: GObject.Object) { return c<Gio.TlsPassword>('Gio.TlsPassword', [ 'GObject.Object' ], from_) }
export function Gio_UnixConnection(from_: GObject.Object) { return c<Gio.UnixConnection>('Gio.UnixConnection', [ 'Gio.SocketConnection', 'Gio.IOStream', 'GObject.Object' ], from_) }
export function Gio_UnixCredentialsMessage(from_: GObject.Object) { return c<Gio.UnixCredentialsMessage>('Gio.UnixCredentialsMessage', [ 'Gio.SocketControlMessage', 'GObject.Object' ], from_) }
export function Gio_UnixFDList(from_: GObject.Object) { return c<Gio.UnixFDList>('Gio.UnixFDList', [ 'GObject.Object' ], from_) }
export function Gio_UnixFDMessage(from_: GObject.Object) { return c<Gio.UnixFDMessage>('Gio.UnixFDMessage', [ 'Gio.SocketControlMessage', 'GObject.Object' ], from_) }
export function Gio_UnixInputStream(from_: GObject.Object) { return c<Gio.UnixInputStream>('Gio.UnixInputStream', [ 'Gio.InputStream', 'Gio.FileDescriptorBased', 'Gio.PollableInputStream', 'GObject.Object' ], from_) }
export function Gio_UnixMountMonitor(from_: GObject.Object) { return c<Gio.UnixMountMonitor>('Gio.UnixMountMonitor', [ 'GObject.Object' ], from_) }
export function Gio_UnixOutputStream(from_: GObject.Object) { return c<Gio.UnixOutputStream>('Gio.UnixOutputStream', [ 'Gio.OutputStream', 'Gio.FileDescriptorBased', 'Gio.PollableOutputStream', 'GObject.Object' ], from_) }
export function Gio_UnixSocketAddress(from_: GObject.Object) { return c<Gio.UnixSocketAddress>('Gio.UnixSocketAddress', [ 'Gio.SocketAddress', 'Gio.SocketConnectable', 'GObject.Object' ], from_) }
export function Gio_Vfs(from_: GObject.Object) { return c<Gio.Vfs>('Gio.Vfs', [ 'GObject.Object' ], from_) }
export function Gio_VolumeMonitor(from_: GObject.Object) { return c<Gio.VolumeMonitor>('Gio.VolumeMonitor', [ 'GObject.Object' ], from_) }
export function Gio_ZlibCompressor(from_: GObject.Object) { return c<Gio.ZlibCompressor>('Gio.ZlibCompressor', [ 'GObject.Object', 'Gio.Converter' ], from_) }
export function Gio_ZlibDecompressor(from_: GObject.Object) { return c<Gio.ZlibDecompressor>('Gio.ZlibDecompressor', [ 'GObject.Object', 'Gio.Converter' ], from_) }
export function Pango_Context(from_: GObject.Object) { return c<Pango.Context>('Pango.Context', [ 'GObject.Object' ], from_) }
export function Pango_Engine(from_: GObject.Object) { return c<Pango.Engine>('Pango.Engine', [ 'GObject.Object' ], from_) }
export function Pango_EngineLang(from_: GObject.Object) { return c<Pango.EngineLang>('Pango.EngineLang', [ 'Pango.Engine', 'GObject.Object' ], from_) }
export function Pango_EngineShape(from_: GObject.Object) { return c<Pango.EngineShape>('Pango.EngineShape', [ 'Pango.Engine', 'GObject.Object' ], from_) }
export function Pango_Font(from_: GObject.Object) { return c<Pango.Font>('Pango.Font', [ 'GObject.Object' ], from_) }
export function Pango_FontFace(from_: GObject.Object) { return c<Pango.FontFace>('Pango.FontFace', [ 'GObject.Object' ], from_) }
export function Pango_FontFamily(from_: GObject.Object) { return c<Pango.FontFamily>('Pango.FontFamily', [ 'GObject.Object' ], from_) }
export function Pango_FontMap(from_: GObject.Object) { return c<Pango.FontMap>('Pango.FontMap', [ 'GObject.Object' ], from_) }
export function Pango_Fontset(from_: GObject.Object) { return c<Pango.Fontset>('Pango.Fontset', [ 'GObject.Object' ], from_) }
export function Pango_FontsetSimple(from_: GObject.Object) { return c<Pango.FontsetSimple>('Pango.FontsetSimple', [ 'Pango.Fontset', 'GObject.Object' ], from_) }
export function Pango_Layout(from_: GObject.Object) { return c<Pango.Layout>('Pango.Layout', [ 'GObject.Object' ], from_) }
export function Pango_Renderer(from_: GObject.Object) { return c<Pango.Renderer>('Pango.Renderer', [ 'GObject.Object' ], from_) }
export function Soup_Address(from_: GObject.Object) { return c<Soup.Address>('Soup.Address', [ 'GObject.Object', 'Gio.SocketConnectable' ], from_) }
export function Soup_Auth(from_: GObject.Object) { return c<Soup.Auth>('Soup.Auth', [ 'GObject.Object' ], from_) }
export function Soup_AuthBasic(from_: GObject.Object) { return c<Soup.AuthBasic>('Soup.AuthBasic', [ 'Soup.Auth', 'GObject.Object' ], from_) }
export function Soup_AuthDigest(from_: GObject.Object) { return c<Soup.AuthDigest>('Soup.AuthDigest', [ 'Soup.Auth', 'GObject.Object' ], from_) }
export function Soup_AuthDomain(from_: GObject.Object) { return c<Soup.AuthDomain>('Soup.AuthDomain', [ 'GObject.Object' ], from_) }
export function Soup_AuthDomainBasic(from_: GObject.Object) { return c<Soup.AuthDomainBasic>('Soup.AuthDomainBasic', [ 'Soup.AuthDomain', 'GObject.Object' ], from_) }
export function Soup_AuthDomainDigest(from_: GObject.Object) { return c<Soup.AuthDomainDigest>('Soup.AuthDomainDigest', [ 'Soup.AuthDomain', 'GObject.Object' ], from_) }
export function Soup_AuthManager(from_: GObject.Object) { return c<Soup.AuthManager>('Soup.AuthManager', [ 'GObject.Object', 'Soup.SessionFeature' ], from_) }
export function Soup_AuthNTLM(from_: GObject.Object) { return c<Soup.AuthNTLM>('Soup.AuthNTLM', [ 'Soup.Auth', 'GObject.Object' ], from_) }
export function Soup_AuthNegotiate(from_: GObject.Object) { return c<Soup.AuthNegotiate>('Soup.AuthNegotiate', [ 'Soup.Auth', 'GObject.Object' ], from_) }
export function Soup_Cache(from_: GObject.Object) { return c<Soup.Cache>('Soup.Cache', [ 'GObject.Object', 'Soup.SessionFeature' ], from_) }
export function Soup_ContentDecoder(from_: GObject.Object) { return c<Soup.ContentDecoder>('Soup.ContentDecoder', [ 'GObject.Object', 'Soup.SessionFeature' ], from_) }
export function Soup_ContentSniffer(from_: GObject.Object) { return c<Soup.ContentSniffer>('Soup.ContentSniffer', [ 'GObject.Object', 'Soup.SessionFeature' ], from_) }
export function Soup_CookieJar(from_: GObject.Object) { return c<Soup.CookieJar>('Soup.CookieJar', [ 'GObject.Object', 'Soup.SessionFeature' ], from_) }
export function Soup_CookieJarDB(from_: GObject.Object) { return c<Soup.CookieJarDB>('Soup.CookieJarDB', [ 'Soup.CookieJar', 'Soup.SessionFeature', 'GObject.Object' ], from_) }
export function Soup_CookieJarText(from_: GObject.Object) { return c<Soup.CookieJarText>('Soup.CookieJarText', [ 'Soup.CookieJar', 'Soup.SessionFeature', 'GObject.Object' ], from_) }
export function Soup_Logger(from_: GObject.Object) { return c<Soup.Logger>('Soup.Logger', [ 'GObject.Object', 'Soup.SessionFeature' ], from_) }
export function Soup_Message(from_: GObject.Object) { return c<Soup.Message>('Soup.Message', [ 'GObject.Object' ], from_) }
export function Soup_MultipartInputStream(from_: GObject.Object) { return c<Soup.MultipartInputStream>('Soup.MultipartInputStream', [ 'Gio.FilterInputStream', 'Gio.PollableInputStream', 'Gio.InputStream', 'GObject.Object' ], from_) }
export function Soup_ProxyResolverDefault(from_: GObject.Object) { return c<Soup.ProxyResolverDefault>('Soup.ProxyResolverDefault', [ 'GObject.Object', 'Soup.ProxyURIResolver', 'Soup.SessionFeature' ], from_) }
export function Soup_Request(from_: GObject.Object) { return c<Soup.Request>('Soup.Request', [ 'GObject.Object', 'Gio.Initable' ], from_) }
export function Soup_RequestData(from_: GObject.Object) { return c<Soup.RequestData>('Soup.RequestData', [ 'Soup.Request', 'Gio.Initable', 'GObject.Object' ], from_) }
export function Soup_RequestFile(from_: GObject.Object) { return c<Soup.RequestFile>('Soup.RequestFile', [ 'Soup.Request', 'Gio.Initable', 'GObject.Object' ], from_) }
export function Soup_RequestHTTP(from_: GObject.Object) { return c<Soup.RequestHTTP>('Soup.RequestHTTP', [ 'Soup.Request', 'Gio.Initable', 'GObject.Object' ], from_) }
export function Soup_Requester(from_: GObject.Object) { return c<Soup.Requester>('Soup.Requester', [ 'GObject.Object', 'Soup.SessionFeature' ], from_) }
export function Soup_Server(from_: GObject.Object) { return c<Soup.Server>('Soup.Server', [ 'GObject.Object' ], from_) }
export function Soup_Session(from_: GObject.Object) { return c<Soup.Session>('Soup.Session', [ 'GObject.Object' ], from_) }
export function Soup_SessionAsync(from_: GObject.Object) { return c<Soup.SessionAsync>('Soup.SessionAsync', [ 'Soup.Session', 'GObject.Object' ], from_) }
export function Soup_SessionSync(from_: GObject.Object) { return c<Soup.SessionSync>('Soup.SessionSync', [ 'Soup.Session', 'GObject.Object' ], from_) }
export function Soup_Socket(from_: GObject.Object) { return c<Soup.Socket>('Soup.Socket', [ 'GObject.Object', 'Gio.Initable' ], from_) }
export function Soup_WebsocketConnection(from_: GObject.Object) { return c<Soup.WebsocketConnection>('Soup.WebsocketConnection', [ 'GObject.Object' ], from_) }
export function GtkSource_Buffer(from_: GObject.Object) { return c<GtkSource.Buffer>('GtkSource.Buffer', [ 'Gtk.TextBuffer', 'GObject.Object' ], from_) }
export function GtkSource_Completion(from_: GObject.Object) { return c<GtkSource.Completion>('GtkSource.Completion', [ 'GObject.Object', 'Gtk.Buildable' ], from_) }
export function GtkSource_CompletionContext(from_: GObject.Object) { return c<GtkSource.CompletionContext>('GtkSource.CompletionContext', [ 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function GtkSource_CompletionInfo(from_: GObject.Object) { return c<GtkSource.CompletionInfo>('GtkSource.CompletionInfo', [ 'Gtk.Window', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function GtkSource_CompletionItem(from_: GObject.Object) { return c<GtkSource.CompletionItem>('GtkSource.CompletionItem', [ 'GObject.Object', 'GtkSource.CompletionProposal' ], from_) }
export function GtkSource_CompletionWords(from_: GObject.Object) { return c<GtkSource.CompletionWords>('GtkSource.CompletionWords', [ 'GObject.Object', 'GtkSource.CompletionProvider' ], from_) }
export function GtkSource_File(from_: GObject.Object) { return c<GtkSource.File>('GtkSource.File', [ 'GObject.Object' ], from_) }
export function GtkSource_FileLoader(from_: GObject.Object) { return c<GtkSource.FileLoader>('GtkSource.FileLoader', [ 'GObject.Object' ], from_) }
export function GtkSource_FileSaver(from_: GObject.Object) { return c<GtkSource.FileSaver>('GtkSource.FileSaver', [ 'GObject.Object' ], from_) }
export function GtkSource_Gutter(from_: GObject.Object) { return c<GtkSource.Gutter>('GtkSource.Gutter', [ 'GObject.Object' ], from_) }
export function GtkSource_GutterRenderer(from_: GObject.Object) { return c<GtkSource.GutterRenderer>('GtkSource.GutterRenderer', [ 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function GtkSource_GutterRendererPixbuf(from_: GObject.Object) { return c<GtkSource.GutterRendererPixbuf>('GtkSource.GutterRendererPixbuf', [ 'GtkSource.GutterRenderer', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function GtkSource_GutterRendererText(from_: GObject.Object) { return c<GtkSource.GutterRendererText>('GtkSource.GutterRendererText', [ 'GtkSource.GutterRenderer', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function GtkSource_Language(from_: GObject.Object) { return c<GtkSource.Language>('GtkSource.Language', [ 'GObject.Object' ], from_) }
export function GtkSource_LanguageManager(from_: GObject.Object) { return c<GtkSource.LanguageManager>('GtkSource.LanguageManager', [ 'GObject.Object' ], from_) }
export function GtkSource_Map(from_: GObject.Object) { return c<GtkSource.Map>('GtkSource.Map', [ 'GtkSource.View', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Scrollable', 'Gtk.TextView', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function GtkSource_Mark(from_: GObject.Object) { return c<GtkSource.Mark>('GtkSource.Mark', [ 'Gtk.TextMark', 'GObject.Object' ], from_) }
export function GtkSource_MarkAttributes(from_: GObject.Object) { return c<GtkSource.MarkAttributes>('GtkSource.MarkAttributes', [ 'GObject.Object' ], from_) }
export function GtkSource_PrintCompositor(from_: GObject.Object) { return c<GtkSource.PrintCompositor>('GtkSource.PrintCompositor', [ 'GObject.Object' ], from_) }
export function GtkSource_Region(from_: GObject.Object) { return c<GtkSource.Region>('GtkSource.Region', [ 'GObject.Object' ], from_) }
export function GtkSource_SearchContext(from_: GObject.Object) { return c<GtkSource.SearchContext>('GtkSource.SearchContext', [ 'GObject.Object' ], from_) }
export function GtkSource_SearchSettings(from_: GObject.Object) { return c<GtkSource.SearchSettings>('GtkSource.SearchSettings', [ 'GObject.Object' ], from_) }
export function GtkSource_SpaceDrawer(from_: GObject.Object) { return c<GtkSource.SpaceDrawer>('GtkSource.SpaceDrawer', [ 'GObject.Object' ], from_) }
export function GtkSource_Style(from_: GObject.Object) { return c<GtkSource.Style>('GtkSource.Style', [ 'GObject.Object' ], from_) }
export function GtkSource_StyleScheme(from_: GObject.Object) { return c<GtkSource.StyleScheme>('GtkSource.StyleScheme', [ 'GObject.Object' ], from_) }
export function GtkSource_StyleSchemeChooserButton(from_: GObject.Object) { return c<GtkSource.StyleSchemeChooserButton>('GtkSource.StyleSchemeChooserButton', [ 'Gtk.Button', 'Atk.ImplementorIface', 'Gtk.Actionable', 'Gtk.Activatable', 'Gtk.Buildable', 'GtkSource.StyleSchemeChooser', 'Gtk.Bin', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function GtkSource_StyleSchemeChooserWidget(from_: GObject.Object) { return c<GtkSource.StyleSchemeChooserWidget>('GtkSource.StyleSchemeChooserWidget', [ 'Gtk.Bin', 'Atk.ImplementorIface', 'Gtk.Buildable', 'GtkSource.StyleSchemeChooser', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function GtkSource_StyleSchemeManager(from_: GObject.Object) { return c<GtkSource.StyleSchemeManager>('GtkSource.StyleSchemeManager', [ 'GObject.Object' ], from_) }
export function GtkSource_Tag(from_: GObject.Object) { return c<GtkSource.Tag>('GtkSource.Tag', [ 'Gtk.TextTag', 'GObject.Object' ], from_) }
export function GtkSource_View(from_: GObject.Object) { return c<GtkSource.View>('GtkSource.View', [ 'Gtk.TextView', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Scrollable', 'Gtk.Container', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function WebKit_DOMAttr(from_: GObject.Object) { return c<WebKit.DOMAttr>('WebKit.DOMAttr', [ 'WebKit.DOMNode', 'WebKit.DOMEventTarget', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMAudioTrack(from_: GObject.Object) { return c<WebKit.DOMAudioTrack>('WebKit.DOMAudioTrack', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMAudioTrackList(from_: GObject.Object) { return c<WebKit.DOMAudioTrackList>('WebKit.DOMAudioTrackList', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMBarInfo(from_: GObject.Object) { return c<WebKit.DOMBarInfo>('WebKit.DOMBarInfo', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMBarProp(from_: GObject.Object) { return c<WebKit.DOMBarProp>('WebKit.DOMBarProp', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMBatteryManager(from_: GObject.Object) { return c<WebKit.DOMBatteryManager>('WebKit.DOMBatteryManager', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMBlob(from_: GObject.Object) { return c<WebKit.DOMBlob>('WebKit.DOMBlob', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMCDATASection(from_: GObject.Object) { return c<WebKit.DOMCDATASection>('WebKit.DOMCDATASection', [ 'WebKit.DOMText', 'WebKit.DOMEventTarget', 'WebKit.DOMCharacterData', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMCSSRule(from_: GObject.Object) { return c<WebKit.DOMCSSRule>('WebKit.DOMCSSRule', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMCSSRuleList(from_: GObject.Object) { return c<WebKit.DOMCSSRuleList>('WebKit.DOMCSSRuleList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMCSSStyleDeclaration(from_: GObject.Object) { return c<WebKit.DOMCSSStyleDeclaration>('WebKit.DOMCSSStyleDeclaration', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMCSSStyleSheet(from_: GObject.Object) { return c<WebKit.DOMCSSStyleSheet>('WebKit.DOMCSSStyleSheet', [ 'WebKit.DOMStyleSheet', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMCSSValue(from_: GObject.Object) { return c<WebKit.DOMCSSValue>('WebKit.DOMCSSValue', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMCharacterData(from_: GObject.Object) { return c<WebKit.DOMCharacterData>('WebKit.DOMCharacterData', [ 'WebKit.DOMNode', 'WebKit.DOMEventTarget', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMComment(from_: GObject.Object) { return c<WebKit.DOMComment>('WebKit.DOMComment', [ 'WebKit.DOMCharacterData', 'WebKit.DOMEventTarget', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMConsole(from_: GObject.Object) { return c<WebKit.DOMConsole>('WebKit.DOMConsole', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMApplicationCache(from_: GObject.Object) { return c<WebKit.DOMDOMApplicationCache>('WebKit.DOMDOMApplicationCache', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMImplementation(from_: GObject.Object) { return c<WebKit.DOMDOMImplementation>('WebKit.DOMDOMImplementation', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMMimeType(from_: GObject.Object) { return c<WebKit.DOMDOMMimeType>('WebKit.DOMDOMMimeType', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMMimeTypeArray(from_: GObject.Object) { return c<WebKit.DOMDOMMimeTypeArray>('WebKit.DOMDOMMimeTypeArray', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMNamedFlowCollection(from_: GObject.Object) { return c<WebKit.DOMDOMNamedFlowCollection>('WebKit.DOMDOMNamedFlowCollection', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMPlugin(from_: GObject.Object) { return c<WebKit.DOMDOMPlugin>('WebKit.DOMDOMPlugin', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMPluginArray(from_: GObject.Object) { return c<WebKit.DOMDOMPluginArray>('WebKit.DOMDOMPluginArray', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMSecurityPolicy(from_: GObject.Object) { return c<WebKit.DOMDOMSecurityPolicy>('WebKit.DOMDOMSecurityPolicy', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMSelection(from_: GObject.Object) { return c<WebKit.DOMDOMSelection>('WebKit.DOMDOMSelection', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMSettableTokenList(from_: GObject.Object) { return c<WebKit.DOMDOMSettableTokenList>('WebKit.DOMDOMSettableTokenList', [ 'WebKit.DOMDOMTokenList', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMStringList(from_: GObject.Object) { return c<WebKit.DOMDOMStringList>('WebKit.DOMDOMStringList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMStringMap(from_: GObject.Object) { return c<WebKit.DOMDOMStringMap>('WebKit.DOMDOMStringMap', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMTokenList(from_: GObject.Object) { return c<WebKit.DOMDOMTokenList>('WebKit.DOMDOMTokenList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMWindow(from_: GObject.Object) { return c<WebKit.DOMDOMWindow>('WebKit.DOMDOMWindow', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMDOMWindowCSS(from_: GObject.Object) { return c<WebKit.DOMDOMWindowCSS>('WebKit.DOMDOMWindowCSS', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDatabase(from_: GObject.Object) { return c<WebKit.DOMDatabase>('WebKit.DOMDatabase', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDocument(from_: GObject.Object) { return c<WebKit.DOMDocument>('WebKit.DOMDocument', [ 'WebKit.DOMNode', 'WebKit.DOMEventTarget', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDocumentFragment(from_: GObject.Object) { return c<WebKit.DOMDocumentFragment>('WebKit.DOMDocumentFragment', [ 'WebKit.DOMNode', 'WebKit.DOMEventTarget', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMDocumentType(from_: GObject.Object) { return c<WebKit.DOMDocumentType>('WebKit.DOMDocumentType', [ 'WebKit.DOMNode', 'WebKit.DOMEventTarget', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMElement(from_: GObject.Object) { return c<WebKit.DOMElement>('WebKit.DOMElement', [ 'WebKit.DOMNode', 'WebKit.DOMEventTarget', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMEntityReference(from_: GObject.Object) { return c<WebKit.DOMEntityReference>('WebKit.DOMEntityReference', [ 'WebKit.DOMNode', 'WebKit.DOMEventTarget', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMEvent(from_: GObject.Object) { return c<WebKit.DOMEvent>('WebKit.DOMEvent', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMFile(from_: GObject.Object) { return c<WebKit.DOMFile>('WebKit.DOMFile', [ 'WebKit.DOMBlob', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMFileList(from_: GObject.Object) { return c<WebKit.DOMFileList>('WebKit.DOMFileList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMGamepad(from_: GObject.Object) { return c<WebKit.DOMGamepad>('WebKit.DOMGamepad', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMGamepadList(from_: GObject.Object) { return c<WebKit.DOMGamepadList>('WebKit.DOMGamepadList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMGeolocation(from_: GObject.Object) { return c<WebKit.DOMGeolocation>('WebKit.DOMGeolocation', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLAnchorElement(from_: GObject.Object) { return c<WebKit.DOMHTMLAnchorElement>('WebKit.DOMHTMLAnchorElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLAppletElement(from_: GObject.Object) { return c<WebKit.DOMHTMLAppletElement>('WebKit.DOMHTMLAppletElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLAreaElement(from_: GObject.Object) { return c<WebKit.DOMHTMLAreaElement>('WebKit.DOMHTMLAreaElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLAudioElement(from_: GObject.Object) { return c<WebKit.DOMHTMLAudioElement>('WebKit.DOMHTMLAudioElement', [ 'WebKit.DOMHTMLMediaElement', 'WebKit.DOMEventTarget', 'WebKit.DOMHTMLElement', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLBRElement(from_: GObject.Object) { return c<WebKit.DOMHTMLBRElement>('WebKit.DOMHTMLBRElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLBaseElement(from_: GObject.Object) { return c<WebKit.DOMHTMLBaseElement>('WebKit.DOMHTMLBaseElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLBaseFontElement(from_: GObject.Object) { return c<WebKit.DOMHTMLBaseFontElement>('WebKit.DOMHTMLBaseFontElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLBodyElement(from_: GObject.Object) { return c<WebKit.DOMHTMLBodyElement>('WebKit.DOMHTMLBodyElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLButtonElement(from_: GObject.Object) { return c<WebKit.DOMHTMLButtonElement>('WebKit.DOMHTMLButtonElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLCanvasElement(from_: GObject.Object) { return c<WebKit.DOMHTMLCanvasElement>('WebKit.DOMHTMLCanvasElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLCollection(from_: GObject.Object) { return c<WebKit.DOMHTMLCollection>('WebKit.DOMHTMLCollection', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLDListElement(from_: GObject.Object) { return c<WebKit.DOMHTMLDListElement>('WebKit.DOMHTMLDListElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLDetailsElement(from_: GObject.Object) { return c<WebKit.DOMHTMLDetailsElement>('WebKit.DOMHTMLDetailsElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLDirectoryElement(from_: GObject.Object) { return c<WebKit.DOMHTMLDirectoryElement>('WebKit.DOMHTMLDirectoryElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLDivElement(from_: GObject.Object) { return c<WebKit.DOMHTMLDivElement>('WebKit.DOMHTMLDivElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLDocument(from_: GObject.Object) { return c<WebKit.DOMHTMLDocument>('WebKit.DOMHTMLDocument', [ 'WebKit.DOMDocument', 'WebKit.DOMEventTarget', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLElement(from_: GObject.Object) { return c<WebKit.DOMHTMLElement>('WebKit.DOMHTMLElement', [ 'WebKit.DOMElement', 'WebKit.DOMEventTarget', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLEmbedElement(from_: GObject.Object) { return c<WebKit.DOMHTMLEmbedElement>('WebKit.DOMHTMLEmbedElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLFieldSetElement(from_: GObject.Object) { return c<WebKit.DOMHTMLFieldSetElement>('WebKit.DOMHTMLFieldSetElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLFontElement(from_: GObject.Object) { return c<WebKit.DOMHTMLFontElement>('WebKit.DOMHTMLFontElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLFormElement(from_: GObject.Object) { return c<WebKit.DOMHTMLFormElement>('WebKit.DOMHTMLFormElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLFrameElement(from_: GObject.Object) { return c<WebKit.DOMHTMLFrameElement>('WebKit.DOMHTMLFrameElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLFrameSetElement(from_: GObject.Object) { return c<WebKit.DOMHTMLFrameSetElement>('WebKit.DOMHTMLFrameSetElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLHRElement(from_: GObject.Object) { return c<WebKit.DOMHTMLHRElement>('WebKit.DOMHTMLHRElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLHeadElement(from_: GObject.Object) { return c<WebKit.DOMHTMLHeadElement>('WebKit.DOMHTMLHeadElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLHeadingElement(from_: GObject.Object) { return c<WebKit.DOMHTMLHeadingElement>('WebKit.DOMHTMLHeadingElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLHtmlElement(from_: GObject.Object) { return c<WebKit.DOMHTMLHtmlElement>('WebKit.DOMHTMLHtmlElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLIFrameElement(from_: GObject.Object) { return c<WebKit.DOMHTMLIFrameElement>('WebKit.DOMHTMLIFrameElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLImageElement(from_: GObject.Object) { return c<WebKit.DOMHTMLImageElement>('WebKit.DOMHTMLImageElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLInputElement(from_: GObject.Object) { return c<WebKit.DOMHTMLInputElement>('WebKit.DOMHTMLInputElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLKeygenElement(from_: GObject.Object) { return c<WebKit.DOMHTMLKeygenElement>('WebKit.DOMHTMLKeygenElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLLIElement(from_: GObject.Object) { return c<WebKit.DOMHTMLLIElement>('WebKit.DOMHTMLLIElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLLabelElement(from_: GObject.Object) { return c<WebKit.DOMHTMLLabelElement>('WebKit.DOMHTMLLabelElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLLegendElement(from_: GObject.Object) { return c<WebKit.DOMHTMLLegendElement>('WebKit.DOMHTMLLegendElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLLinkElement(from_: GObject.Object) { return c<WebKit.DOMHTMLLinkElement>('WebKit.DOMHTMLLinkElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLMapElement(from_: GObject.Object) { return c<WebKit.DOMHTMLMapElement>('WebKit.DOMHTMLMapElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLMarqueeElement(from_: GObject.Object) { return c<WebKit.DOMHTMLMarqueeElement>('WebKit.DOMHTMLMarqueeElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLMediaElement(from_: GObject.Object) { return c<WebKit.DOMHTMLMediaElement>('WebKit.DOMHTMLMediaElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLMenuElement(from_: GObject.Object) { return c<WebKit.DOMHTMLMenuElement>('WebKit.DOMHTMLMenuElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLMetaElement(from_: GObject.Object) { return c<WebKit.DOMHTMLMetaElement>('WebKit.DOMHTMLMetaElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLModElement(from_: GObject.Object) { return c<WebKit.DOMHTMLModElement>('WebKit.DOMHTMLModElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLOListElement(from_: GObject.Object) { return c<WebKit.DOMHTMLOListElement>('WebKit.DOMHTMLOListElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLObjectElement(from_: GObject.Object) { return c<WebKit.DOMHTMLObjectElement>('WebKit.DOMHTMLObjectElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLOptGroupElement(from_: GObject.Object) { return c<WebKit.DOMHTMLOptGroupElement>('WebKit.DOMHTMLOptGroupElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLOptionElement(from_: GObject.Object) { return c<WebKit.DOMHTMLOptionElement>('WebKit.DOMHTMLOptionElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLOptionsCollection(from_: GObject.Object) { return c<WebKit.DOMHTMLOptionsCollection>('WebKit.DOMHTMLOptionsCollection', [ 'WebKit.DOMHTMLCollection', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLParagraphElement(from_: GObject.Object) { return c<WebKit.DOMHTMLParagraphElement>('WebKit.DOMHTMLParagraphElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLParamElement(from_: GObject.Object) { return c<WebKit.DOMHTMLParamElement>('WebKit.DOMHTMLParamElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLPreElement(from_: GObject.Object) { return c<WebKit.DOMHTMLPreElement>('WebKit.DOMHTMLPreElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLPropertiesCollection(from_: GObject.Object) { return c<WebKit.DOMHTMLPropertiesCollection>('WebKit.DOMHTMLPropertiesCollection', [ 'WebKit.DOMHTMLCollection', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLQuoteElement(from_: GObject.Object) { return c<WebKit.DOMHTMLQuoteElement>('WebKit.DOMHTMLQuoteElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLScriptElement(from_: GObject.Object) { return c<WebKit.DOMHTMLScriptElement>('WebKit.DOMHTMLScriptElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLSelectElement(from_: GObject.Object) { return c<WebKit.DOMHTMLSelectElement>('WebKit.DOMHTMLSelectElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLStyleElement(from_: GObject.Object) { return c<WebKit.DOMHTMLStyleElement>('WebKit.DOMHTMLStyleElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLTableCaptionElement(from_: GObject.Object) { return c<WebKit.DOMHTMLTableCaptionElement>('WebKit.DOMHTMLTableCaptionElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLTableCellElement(from_: GObject.Object) { return c<WebKit.DOMHTMLTableCellElement>('WebKit.DOMHTMLTableCellElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLTableColElement(from_: GObject.Object) { return c<WebKit.DOMHTMLTableColElement>('WebKit.DOMHTMLTableColElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLTableElement(from_: GObject.Object) { return c<WebKit.DOMHTMLTableElement>('WebKit.DOMHTMLTableElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLTableRowElement(from_: GObject.Object) { return c<WebKit.DOMHTMLTableRowElement>('WebKit.DOMHTMLTableRowElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLTableSectionElement(from_: GObject.Object) { return c<WebKit.DOMHTMLTableSectionElement>('WebKit.DOMHTMLTableSectionElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLTextAreaElement(from_: GObject.Object) { return c<WebKit.DOMHTMLTextAreaElement>('WebKit.DOMHTMLTextAreaElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLTitleElement(from_: GObject.Object) { return c<WebKit.DOMHTMLTitleElement>('WebKit.DOMHTMLTitleElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLUListElement(from_: GObject.Object) { return c<WebKit.DOMHTMLUListElement>('WebKit.DOMHTMLUListElement', [ 'WebKit.DOMHTMLElement', 'WebKit.DOMEventTarget', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHTMLVideoElement(from_: GObject.Object) { return c<WebKit.DOMHTMLVideoElement>('WebKit.DOMHTMLVideoElement', [ 'WebKit.DOMHTMLMediaElement', 'WebKit.DOMEventTarget', 'WebKit.DOMHTMLElement', 'WebKit.DOMElement', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMHistory(from_: GObject.Object) { return c<WebKit.DOMHistory>('WebKit.DOMHistory', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMKeyboardEvent(from_: GObject.Object) { return c<WebKit.DOMKeyboardEvent>('WebKit.DOMKeyboardEvent', [ 'WebKit.DOMUIEvent', 'WebKit.DOMEvent', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMLocation(from_: GObject.Object) { return c<WebKit.DOMLocation>('WebKit.DOMLocation', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMMediaController(from_: GObject.Object) { return c<WebKit.DOMMediaController>('WebKit.DOMMediaController', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMMediaError(from_: GObject.Object) { return c<WebKit.DOMMediaError>('WebKit.DOMMediaError', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMMediaList(from_: GObject.Object) { return c<WebKit.DOMMediaList>('WebKit.DOMMediaList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMMediaQueryList(from_: GObject.Object) { return c<WebKit.DOMMediaQueryList>('WebKit.DOMMediaQueryList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMMemoryInfo(from_: GObject.Object) { return c<WebKit.DOMMemoryInfo>('WebKit.DOMMemoryInfo', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMMessagePort(from_: GObject.Object) { return c<WebKit.DOMMessagePort>('WebKit.DOMMessagePort', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMMicroDataItemValue(from_: GObject.Object) { return c<WebKit.DOMMicroDataItemValue>('WebKit.DOMMicroDataItemValue', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMMouseEvent(from_: GObject.Object) { return c<WebKit.DOMMouseEvent>('WebKit.DOMMouseEvent', [ 'WebKit.DOMUIEvent', 'WebKit.DOMEvent', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMNamedNodeMap(from_: GObject.Object) { return c<WebKit.DOMNamedNodeMap>('WebKit.DOMNamedNodeMap', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMNavigator(from_: GObject.Object) { return c<WebKit.DOMNavigator>('WebKit.DOMNavigator', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMNode(from_: GObject.Object) { return c<WebKit.DOMNode>('WebKit.DOMNode', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMNodeFilter(from_: GObject.Object) { return c<WebKit.DOMNodeFilter>('WebKit.DOMNodeFilter', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMNodeIterator(from_: GObject.Object) { return c<WebKit.DOMNodeIterator>('WebKit.DOMNodeIterator', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMNodeList(from_: GObject.Object) { return c<WebKit.DOMNodeList>('WebKit.DOMNodeList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMObject(from_: GObject.Object) { return c<WebKit.DOMObject>('WebKit.DOMObject', [ 'GObject.Object' ], from_) }
export function WebKit_DOMPerformance(from_: GObject.Object) { return c<WebKit.DOMPerformance>('WebKit.DOMPerformance', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMPerformanceEntry(from_: GObject.Object) { return c<WebKit.DOMPerformanceEntry>('WebKit.DOMPerformanceEntry', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMPerformanceEntryList(from_: GObject.Object) { return c<WebKit.DOMPerformanceEntryList>('WebKit.DOMPerformanceEntryList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMPerformanceNavigation(from_: GObject.Object) { return c<WebKit.DOMPerformanceNavigation>('WebKit.DOMPerformanceNavigation', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMPerformanceTiming(from_: GObject.Object) { return c<WebKit.DOMPerformanceTiming>('WebKit.DOMPerformanceTiming', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMProcessingInstruction(from_: GObject.Object) { return c<WebKit.DOMProcessingInstruction>('WebKit.DOMProcessingInstruction', [ 'WebKit.DOMCharacterData', 'WebKit.DOMEventTarget', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMPropertyNodeList(from_: GObject.Object) { return c<WebKit.DOMPropertyNodeList>('WebKit.DOMPropertyNodeList', [ 'WebKit.DOMNodeList', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMRange(from_: GObject.Object) { return c<WebKit.DOMRange>('WebKit.DOMRange', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMScreen(from_: GObject.Object) { return c<WebKit.DOMScreen>('WebKit.DOMScreen', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMShadowRoot(from_: GObject.Object) { return c<WebKit.DOMShadowRoot>('WebKit.DOMShadowRoot', [ 'WebKit.DOMDocumentFragment', 'WebKit.DOMEventTarget', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMStorage(from_: GObject.Object) { return c<WebKit.DOMStorage>('WebKit.DOMStorage', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMStorageInfo(from_: GObject.Object) { return c<WebKit.DOMStorageInfo>('WebKit.DOMStorageInfo', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMStorageQuota(from_: GObject.Object) { return c<WebKit.DOMStorageQuota>('WebKit.DOMStorageQuota', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMStyleMedia(from_: GObject.Object) { return c<WebKit.DOMStyleMedia>('WebKit.DOMStyleMedia', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMStyleSheet(from_: GObject.Object) { return c<WebKit.DOMStyleSheet>('WebKit.DOMStyleSheet', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMStyleSheetList(from_: GObject.Object) { return c<WebKit.DOMStyleSheetList>('WebKit.DOMStyleSheetList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMText(from_: GObject.Object) { return c<WebKit.DOMText>('WebKit.DOMText', [ 'WebKit.DOMCharacterData', 'WebKit.DOMEventTarget', 'WebKit.DOMNode', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMTextTrack(from_: GObject.Object) { return c<WebKit.DOMTextTrack>('WebKit.DOMTextTrack', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMTextTrackCue(from_: GObject.Object) { return c<WebKit.DOMTextTrackCue>('WebKit.DOMTextTrackCue', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMTextTrackCueList(from_: GObject.Object) { return c<WebKit.DOMTextTrackCueList>('WebKit.DOMTextTrackCueList', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMTextTrackList(from_: GObject.Object) { return c<WebKit.DOMTextTrackList>('WebKit.DOMTextTrackList', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMTimeRanges(from_: GObject.Object) { return c<WebKit.DOMTimeRanges>('WebKit.DOMTimeRanges', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMTouch(from_: GObject.Object) { return c<WebKit.DOMTouch>('WebKit.DOMTouch', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMTrackEvent(from_: GObject.Object) { return c<WebKit.DOMTrackEvent>('WebKit.DOMTrackEvent', [ 'WebKit.DOMEvent', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMTreeWalker(from_: GObject.Object) { return c<WebKit.DOMTreeWalker>('WebKit.DOMTreeWalker', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMUIEvent(from_: GObject.Object) { return c<WebKit.DOMUIEvent>('WebKit.DOMUIEvent', [ 'WebKit.DOMEvent', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMValidityState(from_: GObject.Object) { return c<WebKit.DOMValidityState>('WebKit.DOMValidityState', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMVideoPlaybackQuality(from_: GObject.Object) { return c<WebKit.DOMVideoPlaybackQuality>('WebKit.DOMVideoPlaybackQuality', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMVideoTrack(from_: GObject.Object) { return c<WebKit.DOMVideoTrack>('WebKit.DOMVideoTrack', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMVideoTrackList(from_: GObject.Object) { return c<WebKit.DOMVideoTrackList>('WebKit.DOMVideoTrackList', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMWebKitNamedFlow(from_: GObject.Object) { return c<WebKit.DOMWebKitNamedFlow>('WebKit.DOMWebKitNamedFlow', [ 'WebKit.DOMObject', 'WebKit.DOMEventTarget', 'GObject.Object' ], from_) }
export function WebKit_DOMWebKitPoint(from_: GObject.Object) { return c<WebKit.DOMWebKitPoint>('WebKit.DOMWebKitPoint', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMWheelEvent(from_: GObject.Object) { return c<WebKit.DOMWheelEvent>('WebKit.DOMWheelEvent', [ 'WebKit.DOMMouseEvent', 'WebKit.DOMUIEvent', 'WebKit.DOMEvent', 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMXPathExpression(from_: GObject.Object) { return c<WebKit.DOMXPathExpression>('WebKit.DOMXPathExpression', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMXPathNSResolver(from_: GObject.Object) { return c<WebKit.DOMXPathNSResolver>('WebKit.DOMXPathNSResolver', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_DOMXPathResult(from_: GObject.Object) { return c<WebKit.DOMXPathResult>('WebKit.DOMXPathResult', [ 'WebKit.DOMObject', 'GObject.Object' ], from_) }
export function WebKit_Download(from_: GObject.Object) { return c<WebKit.Download>('WebKit.Download', [ 'GObject.Object' ], from_) }
export function WebKit_FaviconDatabase(from_: GObject.Object) { return c<WebKit.FaviconDatabase>('WebKit.FaviconDatabase', [ 'GObject.Object' ], from_) }
export function WebKit_FileChooserRequest(from_: GObject.Object) { return c<WebKit.FileChooserRequest>('WebKit.FileChooserRequest', [ 'GObject.Object' ], from_) }
export function WebKit_GeolocationPolicyDecision(from_: GObject.Object) { return c<WebKit.GeolocationPolicyDecision>('WebKit.GeolocationPolicyDecision', [ 'GObject.Object' ], from_) }
export function WebKit_HitTestResult(from_: GObject.Object) { return c<WebKit.HitTestResult>('WebKit.HitTestResult', [ 'GObject.Object' ], from_) }
export function WebKit_IconDatabase(from_: GObject.Object) { return c<WebKit.IconDatabase>('WebKit.IconDatabase', [ 'GObject.Object' ], from_) }
export function WebKit_NetworkRequest(from_: GObject.Object) { return c<WebKit.NetworkRequest>('WebKit.NetworkRequest', [ 'GObject.Object' ], from_) }
export function WebKit_NetworkResponse(from_: GObject.Object) { return c<WebKit.NetworkResponse>('WebKit.NetworkResponse', [ 'GObject.Object' ], from_) }
export function WebKit_SecurityOrigin(from_: GObject.Object) { return c<WebKit.SecurityOrigin>('WebKit.SecurityOrigin', [ 'GObject.Object' ], from_) }
export function WebKit_SoupAuthDialog(from_: GObject.Object) { return c<WebKit.SoupAuthDialog>('WebKit.SoupAuthDialog', [ 'GObject.Object', 'Soup.SessionFeature' ], from_) }
export function WebKit_ViewportAttributes(from_: GObject.Object) { return c<WebKit.ViewportAttributes>('WebKit.ViewportAttributes', [ 'GObject.Object' ], from_) }
export function WebKit_WebBackForwardList(from_: GObject.Object) { return c<WebKit.WebBackForwardList>('WebKit.WebBackForwardList', [ 'GObject.Object' ], from_) }
export function WebKit_WebDataSource(from_: GObject.Object) { return c<WebKit.WebDataSource>('WebKit.WebDataSource', [ 'GObject.Object' ], from_) }
export function WebKit_WebDatabase(from_: GObject.Object) { return c<WebKit.WebDatabase>('WebKit.WebDatabase', [ 'GObject.Object' ], from_) }
export function WebKit_WebFrame(from_: GObject.Object) { return c<WebKit.WebFrame>('WebKit.WebFrame', [ 'GObject.Object' ], from_) }
export function WebKit_WebHistoryItem(from_: GObject.Object) { return c<WebKit.WebHistoryItem>('WebKit.WebHistoryItem', [ 'GObject.Object' ], from_) }
export function WebKit_WebInspector(from_: GObject.Object) { return c<WebKit.WebInspector>('WebKit.WebInspector', [ 'GObject.Object' ], from_) }
export function WebKit_WebNavigationAction(from_: GObject.Object) { return c<WebKit.WebNavigationAction>('WebKit.WebNavigationAction', [ 'GObject.Object' ], from_) }
export function WebKit_WebPlugin(from_: GObject.Object) { return c<WebKit.WebPlugin>('WebKit.WebPlugin', [ 'GObject.Object' ], from_) }
export function WebKit_WebPluginDatabase(from_: GObject.Object) { return c<WebKit.WebPluginDatabase>('WebKit.WebPluginDatabase', [ 'GObject.Object' ], from_) }
export function WebKit_WebPolicyDecision(from_: GObject.Object) { return c<WebKit.WebPolicyDecision>('WebKit.WebPolicyDecision', [ 'GObject.Object' ], from_) }
export function WebKit_WebResource(from_: GObject.Object) { return c<WebKit.WebResource>('WebKit.WebResource', [ 'GObject.Object' ], from_) }
export function WebKit_WebSettings(from_: GObject.Object) { return c<WebKit.WebSettings>('WebKit.WebSettings', [ 'GObject.Object' ], from_) }
export function WebKit_WebView(from_: GObject.Object) { return c<WebKit.WebView>('WebKit.WebView', [ 'Gtk.Container', 'Atk.ImplementorIface', 'Gtk.Buildable', 'Gtk.Scrollable', 'Gtk.Widget', 'GObject.InitiallyUnowned', 'GObject.Object' ], from_) }
export function WebKit_WebWindowFeatures(from_: GObject.Object) { return c<WebKit.WebWindowFeatures>('WebKit.WebWindowFeatures', [ 'GObject.Object' ], from_) }
export function AppIndicator3_Indicator(from_: GObject.Object) { return c<AppIndicator3.Indicator>('AppIndicator3.Indicator', [ 'GObject.Object' ], from_) }
export function Notify_Notification(from_: GObject.Object) { return c<Notify.Notification>('Notify.Notification', [ 'GObject.Object' ], from_) }