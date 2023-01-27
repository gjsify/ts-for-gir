<% const Gio = dep.find('Gio') %>

<%_ if(useNamespace){ _%>
    import type Gio from '../<%= Gio.packageName %>.js';
<%_ } else { _%>
    import type * as Gio from '../<%= Gio.packageName %>.js';
<%_ } _%>

import { ComponentManager } from './components/__init__.js';
// const AccessDialog = imports.ui.accessDialog;
// const AudioDeviceSelection = imports.ui.audioDeviceSelection;
// const Components = imports.ui.components;
// const CtrlAltTab = imports.ui.ctrlAltTab;
// const EndSessionDialog = imports.ui.endSessionDialog;
// const ExtensionSystem = imports.ui.extensionSystem;
// const ExtensionDownloader = imports.ui.extensionDownloader;
// const InputMethod = imports.misc.inputMethod;
// const Introspect = imports.misc.introspect;
// const Keyboard = imports.ui.keyboard;
// const MessageTray = imports.ui.messageTray;
// const ModalDialog = imports.ui.modalDialog;
// const OsdWindow = imports.ui.osdWindow;
// const OsdMonitorLabeler = imports.ui.osdMonitorLabeler;
// const Overview = imports.ui.overview;
// const PadOsd = imports.ui.padOsd;
import { Panel } from './panel.js';
// const Params = imports.misc.params;
// const RunDialog = imports.ui.runDialog;
// const WelcomeDialog = imports.ui.welcomeDialog;
import { LayoutManager } from './layout.js';
// const LoginManager = imports.misc.loginManager;
// const LookingGlass = imports.ui.lookingGlass;
import { NotificationDaemon } from './notificationDaemon.js';
// const WindowAttentionHandler = imports.ui.windowAttentionHandler;
// const Screenshot = imports.ui.screenshot;
// const ScreenShield = imports.ui.screenShield;
// const Scripting = imports.ui.scripting;
// const SessionMode = imports.ui.sessionMode;
// const ShellDBus = imports.ui.shellDBus;
// const ShellMountOperation = imports.ui.shellMountOperation;
// const WindowManager = imports.ui.windowManager;
// const Magnifier = imports.ui.magnifier;
// const XdndHandler = imports.ui.xdndHandler;
// const KbdA11yDialog = imports.ui.kbdA11yDialog;
// const LocatePointer = imports.ui.locatePointer;
// const PointerA11yTimeout = imports.ui.pointerA11yTimeout;
// const ParentalControlsManager = imports.misc.parentalControlsManager;
// const Config = imports.misc.config;
// const Util = imports.misc.util;

export declare const componentManager: ComponentManager;

export declare const panel: Panel;

export declare const notificationDaemon: NotificationDaemon;

export declare const windowAttentionHandler: any;

export declare const ctrlAltTabManager: any;

export declare const padOsdService: any;

export declare const osdWindowManager: any;

export declare const osdMonitorLabeler: any;

export declare const shellMountOpDBusService: any;

export declare const shellDBusService: any;

export declare const shellAccessDialogDBusService: any;

export declare const shellAudioSelectionDBusService: any;

export declare const screenSaverDBus: any;

export declare const uiGroup: any;

export declare const magnifier: any;

export declare const xdndHandler: any;

export declare const keyboard: any;

export declare const layoutManager: LayoutManager;

export declare const kbdA11yDialog: any;

export declare const inputMethod: any;

export declare const introspectService: any;

export declare const locatePointer: any;

/**
 * pushModal:
 * @param actor: actor which will be given keyboard focus
 * @param params: optional parameters
 *
 * Ensure we are in a mode where all keyboard and mouse input goes to
 * the stage, and focus @actor. Multiple calls to this function act in
 * a stacking fashion; the effect will be undone when an equal number
 * of popModal() invocations have been made.
 *
 * Next, record the current Clutter keyboard focus on a stack. If the
 * modal stack returns to this actor, reset the focus to the actor
 * which was focused at the time pushModal() was invoked.
 *
 * @params may be used to provide the following parameters:
 *  - timestamp: used to associate the call with a specific user initiated
 *               event. If not provided then the value of
 *               global.get_current_time() is assumed.
 *
 *  - options: Meta.ModalOptions flags to indicate that the pointer is
 *             already grabbed
 *
 *  - actionMode: used to set the current Shell.ActionMode to filter
 *                global keybindings; the default of NONE will filter
 *                out all keybindings
 *
 * @returns The grab handle created
 */
export function pushModal(actor: any /* Clutter.Actor */, params?: any): any /* Clutter.Grab */;

/**
 * popModal:
 * @param grab - the grab given by pushModal()
 * @param timestamp - optional timestamp
 *
 * Reverse the effect of pushModal(). If this invocation is undoing
 * the topmost invocation, then the focus will be restored to the
 * previous focus at the time when pushModal() was invoked.
 *
 * @timestamp is optionally used to associate the call with a specific user
 * initiated event. If not provided then the value of
 * global.get_current_time() is assumed.
 */

export function popModal(grab: any /* Clutter.Grab */, timestamp?: number): void;

/**
 * activateWindow:
 * @param {Meta.Window} window: the window to activate
 * @param {number=} time: current event time
 * @param {number=} workspaceNum:  window's workspace number
 *
 * Activates @window, switching to its workspace first if necessary,
 * and switching out of the overview if it's currently active
 */
export function activateWindow(window: any /* Meta.Window */, time?: number, workspaceNum?: number): void;

/**
 * Move @window to the specified monitor and workspace.
 *
 * @param window - the window to move
 * @param monitorIndex - the requested monitor
 * @param workspaceIndex - the requested workspace
 * @param append - create workspace if it doesn't exist
 */
export function moveWindowToMonitorAndWorkspace(window: any /* Meta.Window */, monitorIndex: number, workspaceIndex: number, append: boolean): void;

export declare const createLookingGlass: any;

export declare const initializeDeferredWork: any;

/**
 * loadTheme:
 *
 * Reloads the theme CSS file
 */

export function loadTheme(): void;

/**
 * notify:
 * @param msg: A message
 * @param details: Additional information
 */

export function notify(msg: string, details?: string): void;

/**
 * notifyError:
 * @param msg: An error message
 * @param details: Additional information
 *
 * See shell_global_notify_problem().
 */

export function notifyError(msg: string, details?: string): void;

export function start(): void;

/**
 * getThemeStylesheet:
 *
 * Get the theme CSS file that the shell will load
 *
 * @returns A #GFile that contains the theme CSS,
 *          null if using the default
 */

export function getThemeStylesheet(): Gio.File | null;

/**
 * setThemeStylesheet:
 * @param {string=} cssStylesheet: A file path that contains the theme CSS,
 *     set it to null to use the default
 *
 * Set the theme CSS file that the shell will load
 */

export function setThemeStylesheet(cssStylesheet: string): void;

export declare const screenshotUI: any;
