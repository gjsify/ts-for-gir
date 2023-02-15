/**
 * READ THIS FIRST
 * Background handling is a maze of objects, both objects in this file, and
 * also objects inside Mutter. They all have a role.
 *
 * BackgroundManager
 *   The only object that other parts of GNOME Shell deal with; a
 *   BackgroundManager creates background actors and adds them to
 *   the specified container. When the background is changed by the
 *   user it will fade out the old actor and fade in the new actor.
 *   (This is separate from the fading for an animated background,
 *   since using two actors is quite inefficient.)
 *
 * MetaBackgroundImage
 *   An object represented an image file that will be used for drawing
 *   the background. MetaBackgroundImage objects asynchronously load,
 *   so they are first created in an unloaded state, then later emit
 *   a ::loaded signal when the Cogl object becomes available.
 *
 * MetaBackgroundImageCache
 *   A cache from filename to MetaBackgroundImage.
 *
 * BackgroundSource
 *   An object that is created for each GSettings schema (separate
 *   settings schemas are used for the lock screen and main background),
 *   and holds a reference to shared Background objects.
 *
 * MetaBackground
 *   Holds the specification of a background - a background color
 *   or gradient and one or two images blended together.
 *
 * Background
 *   JS delegate object that Connects a MetaBackground to the GSettings
 *   schema for the background.
 *
 * Animation
 *   A helper object that handles loading a XML-based animation; it is a
 *   wrapper for GnomeDesktop.BGSlideShow
 *
 * MetaBackgroundActor
 *   An actor that draws the background for a single monitor
 *
 * BackgroundCache
 *   A cache of Settings schema => BackgroundSource and of a single Animation.
 *   Also used to share file monitors.
 *
 * A static image, background color or gradient is relatively straightforward. The
 * calling code creates a separate BackgroundManager for each monitor. Since they
 * are created for the same GSettings schema, they will use the same BackgroundSource
 * object, which provides a single Background and correspondingly a single
 * MetaBackground object.
 *
 * BackgroundManager               BackgroundManager
 *        |        \               /        |
 *        |         BackgroundSource        |        looked up in BackgroundCache
 *        |                |                |
 *        |            Background           |
 *        |                |                |
 *   MetaBackgroundActor   |    MetaBackgroundActor
 *         \               |               /
 *          `------- MetaBackground ------'
 *                         |
 *                MetaBackgroundImage            looked up in MetaBackgroundImageCache
 *
 * The animated case is tricker because the animation XML file can specify different
 * files for different monitor resolutions and aspect ratios. For this reason,
 * the BackgroundSource provides different Background share a single Animation object,
 * which tracks the animation, but use different MetaBackground objects. In the
 * common case, the different MetaBackground objects will be created for the
 * same filename and look up the *same* MetaBackgroundImage object, so there is
 * little wasted memory:
 *
 * BackgroundManager               BackgroundManager
 *        |        \               /        |
 *        |         BackgroundSource        |        looked up in BackgroundCache
 *        |             /      \            |
 *        |     Background   Background     |
 *        |       |     \      /   |        |
 *        |       |    Animation   |        |        looked up in BackgroundCache
 * MetaBackgroundA|tor           Me|aBackgroundActor
 *         \      |                |       /
 *      MetaBackground           MetaBackground
 *                 \                 /
 *                MetaBackgroundImage            looked up in MetaBackgroundImageCache
 *                MetaBackgroundImage
 *
 * But the case of different filenames and different background images
 * is possible as well:
 *                        ....
 *      MetaBackground              MetaBackground
 *             |                          |
 *     MetaBackgroundImage         MetaBackgroundImage
 *     MetaBackgroundImage         MetaBackgroundImage
 * @see https://gitlab.gnome.org/GNOME/gnome-shell/-/blob/main/js/ui/background.js
 */

<%_ const Gio = dep.find('Gio', '..') _%>
<%_ const Clutter = dep.find('Clutter', '..') _%>
<%_ const Meta = dep.find('Meta', '..') _%>
<%_ const GnomeDesktop = dep.find('GnomeDesktop', '..') _%>
<%- Gio ? Gio.importDef : '' %>
<%- Clutter ? Clutter.importDef : '' %>
<%- Meta ? Meta.importDef : '' %>
<%- GnomeDesktop ? GnomeDesktop.importDef : '' %>

import { EventEmitter } from '../misc/signals.js';

import type { LayoutManager, Monitor } from './layout.js';

/**
 * A cache of Settings schema => BackgroundSource and of a single Animation.
 * Also used to share file monitors.
 */
declare class BackgroundCache extends EventEmitter {

    protected _backgroundSources: Map<string, BackgroundSource>;
    protected _fileMonitors: Map<string, Gio.FileMonitor>;
    protected _animations: Map<string, Animation>;

    constructor();

    public monitorFile(file: Gio.File): Gio.FileMonitor
    public getAnimation(params?: { file?: Gio.File | null; settingsSchema?: Gio.SettingsSchema | null; onLoaded: (animation: Animation) => void; }): void
    public getBackgroundSource(layoutManager: LayoutManager, settingsSchema: Gio.SettingsSchema): BackgroundSource
    public releaseBackgroundSource(settingsSchema: Gio.SettingsSchema): void
}

/**
 * JS delegate object that Connects a MetaBackground to the GSettings
 * schema for the background.
 */
declare class Background extends Meta.Background {

    protected _settings: Gio.Settings | null;
    protected _file: Gio.File | null;
    protected _style: string | null;
    protected _monitorIndex: number;
    protected _layoutManager: LayoutManager;
    protected _fileWatches: Map<string, Gio.FileMonitor>;
    protected _cancellable: Gio.Cancellable;
    protected _interfaceSettings: Gio.Settings;
    protected _clock: GnomeDesktop.WallClock;

    public isLoaded: boolean;

    constructor(params?: { monitorIndex?: number; layoutManager: LayoutManager; settings?: Gio.Settings | null; file: Gio.File | null; style: string | null; })

    /** @hidden */
    public _init(params?: Meta.Background.ConstructorProperties): void
    public _init(params?: { monitorIndex?: number; layoutManager: LayoutManager; settings?: Gio.Settings | null; file: Gio.File | null; style: string | null; }): void

    public destroy(): void
    public updateResolution(): void

    protected _emitChangedSignal(): void
    protected _refreshAnimation(): void
    protected _setLoaded(): void
    protected _loadPattern(): void
    protected _watchFile(file: Gio.File): void
    protected _removeAnimationTimeout(): void
    protected _updateAnimation(): void
    protected _queueUpdateAnimation(): void
    protected _loadAnimation(file: Gio.File): void
    protected _loadImage(file: Gio.File): void
    protected _loadFile(file: Gio.File): Promise<void>
    protected _load(): void
}

export class SystemBackground extends Meta.BackgroundActor {

    constructor();

    /** @hidden */
    public _init(params?: Meta.BackgroundActor.ConstructorProperties): void
    public _init(): void
}

/**
 * An object that is created for each GSettings schema (separate
 * settings schemas are used for the lock screen and main background),
 * and holds a reference to shared Background objects.
 */
declare class BackgroundSource {

    protected _layoutManager: LayoutManager;
    protected _overrideImage: string | null;
    protected _settings: Gio.Settings;
    protected _backgrounds: Background[];
    protected _monitorsChangedId: number;
    protected _interfaceSettings: Gio.Settings;

    constructor(layoutManager: LayoutManager, settingsSchema: Gio.SettingsSchema);

    public getBackground(monitorIndex: number): Background
    public destroy(): void

    protected _onMonitorsChanged(): void
}

/**
 * A helper object that handles loading a XML-based animation; it is a
 * wrapper for GnomeDesktop.BGSlideShow
 */
declare class Animation extends GnomeDesktop.BGSlideShow {

    public _init(params?: GnomeDesktop.BGSlideShow.ConstructorProperties): void

    /** @hidden */
    load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Tries to load the slide show asynchronously.
     * @param cancellable a #GCancellable
     * @param callback the callback
     */
    load_async(cancellable: Gio.Cancellable | null, callback?: () => void): void
    update(monitor: Monitor): void
}

/**
 * The only object that other parts of GNOME Shell deal with; a
 * BackgroundManager creates background actors and adds them to
 * the specified container. When the background is changed by the
 * user it will fade out the old actor and fade in the new actor.
 * (This is separate from the fading for an animated background,
 * since using two actors is quite inefficient.)
 */
export class BackgroundManager extends EventEmitter {
    protected _settingsSchema: Gio.SettingsSchema;
    protected _backgroundSource: BackgroundSource;
    protected _container: Clutter.Actor | null;
    protected _layoutManager: LayoutManager;
    protected _vignette: boolean;
    protected _monitorIndex: number | null;
    protected _controlPosition: boolean;
    protected _useContentSize: boolean;
    protected _newBackgroundActor: Meta.BackgroundActor;

    public backgroundActor: Meta.BackgroundActor;

    constructor(params: { container?: Clutter.Actor | null; layoutManager?: LayoutManager; monitorIndex?: number | null; vignette?: boolean; controlPosition?: boolean; settingsSchema?: Gio.SettingsSchema; useContentSize?: boolean; });

    public destroy(): void

    protected _swapBackgroundActor(): void
    protected _updateBackgroundActor(): void
    protected _createBackgroundActor(): Meta.BackgroundActor
}