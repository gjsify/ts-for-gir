/**
 * Gdk-2.0
 */

import * as Gjs from './Gjs';
import * as cairo from './cairo-1.0';
import * as Pango from './Pango-1.0';
import * as HarfBuzz from './HarfBuzz-0.0';
import * as GObject from './GObject-2.0';
import * as GLib from './GLib-2.0';
import * as Gio from './Gio-2.0';
import * as GdkPixbuf from './GdkPixbuf-2.0';
import * as GModule from './GModule-2.0';

export enum AxisUse {
    IGNORE,
    X,
    Y,
    PRESSURE,
    XTILT,
    YTILT,
    WHEEL,
    LAST,
}
export enum ByteOrder {
    LSB_FIRST,
    MSB_FIRST,
}
export enum CapStyle {
    NOT_LAST,
    BUTT,
    ROUND,
    PROJECTING,
}
export enum CrossingMode {
    NORMAL,
    GRAB,
    UNGRAB,
    GTK_GRAB,
    GTK_UNGRAB,
    STATE_CHANGED,
}
export enum CursorType {
    X_CURSOR,
    ARROW,
    BASED_ARROW_DOWN,
    BASED_ARROW_UP,
    BOAT,
    BOGOSITY,
    BOTTOM_LEFT_CORNER,
    BOTTOM_RIGHT_CORNER,
    BOTTOM_SIDE,
    BOTTOM_TEE,
    BOX_SPIRAL,
    CENTER_PTR,
    CIRCLE,
    CLOCK,
    COFFEE_MUG,
    CROSS,
    CROSS_REVERSE,
    CROSSHAIR,
    DIAMOND_CROSS,
    DOT,
    DOTBOX,
    DOUBLE_ARROW,
    DRAFT_LARGE,
    DRAFT_SMALL,
    DRAPED_BOX,
    EXCHANGE,
    FLEUR,
    GOBBLER,
    GUMBY,
    HAND1,
    HAND2,
    HEART,
    ICON,
    IRON_CROSS,
    LEFT_PTR,
    LEFT_SIDE,
    LEFT_TEE,
    LEFTBUTTON,
    LL_ANGLE,
    LR_ANGLE,
    MAN,
    MIDDLEBUTTON,
    MOUSE,
    PENCIL,
    PIRATE,
    PLUS,
    QUESTION_ARROW,
    RIGHT_PTR,
    RIGHT_SIDE,
    RIGHT_TEE,
    RIGHTBUTTON,
    RTL_LOGO,
    SAILBOAT,
    SB_DOWN_ARROW,
    SB_H_DOUBLE_ARROW,
    SB_LEFT_ARROW,
    SB_RIGHT_ARROW,
    SB_UP_ARROW,
    SB_V_DOUBLE_ARROW,
    SHUTTLE,
    SIZING,
    SPIDER,
    SPRAYCAN,
    STAR,
    TARGET,
    TCROSS,
    TOP_LEFT_ARROW,
    TOP_LEFT_CORNER,
    TOP_RIGHT_CORNER,
    TOP_SIDE,
    TOP_TEE,
    TREK,
    UL_ANGLE,
    UMBRELLA,
    UR_ANGLE,
    WATCH,
    XTERM,
    LAST_CURSOR,
    BLANK_CURSOR,
    CURSOR_IS_PIXMAP,
}
export enum DragProtocol {
    MOTIF,
    XDND,
    ROOTWIN,
    NONE,
    WIN32_DROPFILES,
    OLE2,
    LOCAL,
}
export enum EventType {
    NOTHING,
    DELETE,
    DESTROY,
    EXPOSE,
    MOTION_NOTIFY,
    BUTTON_PRESS,
    /* 2BUTTON_PRESS (invalid, starts with a number) */
    /* 3BUTTON_PRESS (invalid, starts with a number) */
    BUTTON_RELEASE,
    KEY_PRESS,
    KEY_RELEASE,
    ENTER_NOTIFY,
    LEAVE_NOTIFY,
    FOCUS_CHANGE,
    CONFIGURE,
    MAP,
    UNMAP,
    PROPERTY_NOTIFY,
    SELECTION_CLEAR,
    SELECTION_REQUEST,
    SELECTION_NOTIFY,
    PROXIMITY_IN,
    PROXIMITY_OUT,
    DRAG_ENTER,
    DRAG_LEAVE,
    DRAG_MOTION,
    DRAG_STATUS,
    DROP_START,
    DROP_FINISHED,
    CLIENT_EVENT,
    VISIBILITY_NOTIFY,
    NO_EXPOSE,
    SCROLL,
    WINDOW_STATE,
    SETTING,
    OWNER_CHANGE,
    GRAB_BROKEN,
    DAMAGE,
    EVENT_LAST,
}
export enum ExtensionMode {
    NONE,
    ALL,
    CURSOR,
}
export enum Fill {
    SOLID,
    TILED,
    STIPPLED,
    OPAQUE_STIPPLED,
}
export enum FillRule {
    EVEN_ODD_RULE,
    WINDING_RULE,
}
export enum FilterReturn {
    CONTINUE,
    TRANSLATE,
    REMOVE,
}
export enum FontType {
    FONT,
    FONTSET,
}
export enum Function {
    COPY,
    INVERT,
    XOR,
    CLEAR,
    AND,
    AND_REVERSE,
    AND_INVERT,
    NOOP,
    OR,
    EQUIV,
    OR_REVERSE,
    COPY_INVERT,
    OR_INVERT,
    NAND,
    NOR,
    SET,
}
export enum GrabStatus {
    SUCCESS,
    ALREADY_GRABBED,
    INVALID_TIME,
    NOT_VIEWABLE,
    FROZEN,
}
export enum Gravity {
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    CENTER,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
    STATIC,
}
export enum ImageType {
    NORMAL,
    SHARED,
    FASTEST,
}
export enum InputMode {
    DISABLED,
    SCREEN,
    WINDOW,
}
export enum InputSource {
    MOUSE,
    PEN,
    ERASER,
    CURSOR,
}
export enum JoinStyle {
    MITER,
    ROUND,
    BEVEL,
}
export enum LineStyle {
    SOLID,
    ON_OFF_DASH,
    DOUBLE_DASH,
}
export enum NotifyType {
    ANCESTOR,
    VIRTUAL,
    INFERIOR,
    NONLINEAR,
    NONLINEAR_VIRTUAL,
    UNKNOWN,
}
export enum OverlapType {
    IN,
    OUT,
    PART,
}
export enum OwnerChange {
    NEW_OWNER,
    DESTROY,
    CLOSE,
}
export enum PropMode {
    REPLACE,
    PREPEND,
    APPEND,
}
export enum PropertyState {
    NEW_VALUE,
    DELETE,
}
export enum RgbDither {
    NONE,
    NORMAL,
    MAX,
}
export enum ScrollDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
export enum SettingAction {
    NEW,
    CHANGED,
    DELETED,
}
export enum Status {
    OK,
    ERROR,
    ERROR_PARAM,
    ERROR_FILE,
    ERROR_MEM,
}
export enum SubwindowMode {
    CLIP_BY_CHILDREN,
    INCLUDE_INFERIORS,
}
export enum VisibilityState {
    UNOBSCURED,
    PARTIAL,
    FULLY_OBSCURED,
}
export enum VisualType {
    STATIC_GRAY,
    GRAYSCALE,
    STATIC_COLOR,
    PSEUDO_COLOR,
    TRUE_COLOR,
    DIRECT_COLOR,
}
export enum WindowClass {
    OUTPUT,
    ONLY,
}
export enum WindowEdge {
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
}
export enum WindowType {
    ROOT,
    TOPLEVEL,
    CHILD,
    DIALOG,
    TEMP,
    FOREIGN,
    OFFSCREEN,
}
export enum WindowTypeHint {
    NORMAL,
    DIALOG,
    MENU,
    TOOLBAR,
    SPLASHSCREEN,
    UTILITY,
    DOCK,
    DESKTOP,
    DROPDOWN_MENU,
    POPUP_MENU,
    TOOLTIP,
    NOTIFICATION,
    COMBO,
    DND,
}
export enum DragAction {
    DEFAULT,
    COPY,
    MOVE,
    LINK,
    PRIVATE,
    ASK,
}
export enum EventMask {
    EXPOSURE_MASK,
    POINTER_MOTION_MASK,
    POINTER_MOTION_HINT_MASK,
    BUTTON_MOTION_MASK,
    BUTTON1_MOTION_MASK,
    BUTTON2_MOTION_MASK,
    BUTTON3_MOTION_MASK,
    BUTTON_PRESS_MASK,
    BUTTON_RELEASE_MASK,
    KEY_PRESS_MASK,
    KEY_RELEASE_MASK,
    ENTER_NOTIFY_MASK,
    LEAVE_NOTIFY_MASK,
    FOCUS_CHANGE_MASK,
    STRUCTURE_MASK,
    PROPERTY_CHANGE_MASK,
    VISIBILITY_NOTIFY_MASK,
    PROXIMITY_IN_MASK,
    PROXIMITY_OUT_MASK,
    SUBSTRUCTURE_MASK,
    SCROLL_MASK,
    ALL_EVENTS_MASK,
}
export enum GCValuesMask {
    FOREGROUND,
    BACKGROUND,
    FONT,
    FUNCTION,
    FILL,
    TILE,
    STIPPLE,
    CLIP_MASK,
    SUBWINDOW,
    TS_X_ORIGIN,
    TS_Y_ORIGIN,
    CLIP_X_ORIGIN,
    CLIP_Y_ORIGIN,
    EXPOSURES,
    LINE_WIDTH,
    LINE_STYLE,
    CAP_STYLE,
    JOIN_STYLE,
}
export enum InputCondition {
    READ,
    WRITE,
    EXCEPTION,
}
export enum ModifierType {
    SHIFT_MASK,
    LOCK_MASK,
    CONTROL_MASK,
    MOD1_MASK,
    MOD2_MASK,
    MOD3_MASK,
    MOD4_MASK,
    MOD5_MASK,
    BUTTON1_MASK,
    BUTTON2_MASK,
    BUTTON3_MASK,
    BUTTON4_MASK,
    BUTTON5_MASK,
    SUPER_MASK,
    HYPER_MASK,
    META_MASK,
    RELEASE_MASK,
    MODIFIER_MASK,
}
export enum WMDecoration {
    ALL,
    BORDER,
    RESIZEH,
    TITLE,
    MENU,
    MINIMIZE,
    MAXIMIZE,
}
export enum WMFunction {
    ALL,
    RESIZE,
    MOVE,
    MINIMIZE,
    MAXIMIZE,
    CLOSE,
}
export enum WindowAttributesType {
    TITLE,
    X,
    Y,
    CURSOR,
    COLORMAP,
    VISUAL,
    WMCLASS,
    NOREDIR,
    TYPE_HINT,
}
export enum WindowHints {
    POS,
    MIN_SIZE,
    MAX_SIZE,
    BASE_SIZE,
    ASPECT,
    RESIZE_INC,
    WIN_GRAVITY,
    USER_POS,
    USER_SIZE,
}
export enum WindowState {
    WITHDRAWN,
    ICONIFIED,
    MAXIMIZED,
    STICKY,
    FULLSCREEN,
    ABOVE,
    BELOW,
}
export const CURRENT_TIME: number
export const KEY_0: number
export const KEY_1: number
export const KEY_2: number
export const KEY_3: number
export const KEY_3270_AltCursor: number
export const KEY_3270_Attn: number
export const KEY_3270_BackTab: number
export const KEY_3270_ChangeScreen: number
export const KEY_3270_Copy: number
export const KEY_3270_CursorBlink: number
export const KEY_3270_CursorSelect: number
export const KEY_3270_DeleteWord: number
export const KEY_3270_Duplicate: number
export const KEY_3270_Enter: number
export const KEY_3270_EraseEOF: number
export const KEY_3270_EraseInput: number
export const KEY_3270_ExSelect: number
export const KEY_3270_FieldMark: number
export const KEY_3270_Ident: number
export const KEY_3270_Jump: number
export const KEY_3270_KeyClick: number
export const KEY_3270_Left2: number
export const KEY_3270_PA1: number
export const KEY_3270_PA2: number
export const KEY_3270_PA3: number
export const KEY_3270_Play: number
export const KEY_3270_PrintScreen: number
export const KEY_3270_Quit: number
export const KEY_3270_Record: number
export const KEY_3270_Reset: number
export const KEY_3270_Right2: number
export const KEY_3270_Rule: number
export const KEY_3270_Setup: number
export const KEY_3270_Test: number
export const KEY_4: number
export const KEY_5: number
export const KEY_6: number
export const KEY_7: number
export const KEY_8: number
export const KEY_9: number
export const KEY_A: number
export const KEY_AE: number
export const KEY_Aacute: number
export const KEY_Abelowdot: number
export const KEY_Abreve: number
export const KEY_Abreveacute: number
export const KEY_Abrevebelowdot: number
export const KEY_Abrevegrave: number
export const KEY_Abrevehook: number
export const KEY_Abrevetilde: number
export const KEY_AccessX_Enable: number
export const KEY_AccessX_Feedback_Enable: number
export const KEY_Acircumflex: number
export const KEY_Acircumflexacute: number
export const KEY_Acircumflexbelowdot: number
export const KEY_Acircumflexgrave: number
export const KEY_Acircumflexhook: number
export const KEY_Acircumflextilde: number
export const KEY_AddFavorite: number
export const KEY_Adiaeresis: number
export const KEY_Agrave: number
export const KEY_Ahook: number
export const KEY_Alt_L: number
export const KEY_Alt_R: number
export const KEY_Amacron: number
export const KEY_Aogonek: number
export const KEY_ApplicationLeft: number
export const KEY_ApplicationRight: number
export const KEY_Arabic_0: number
export const KEY_Arabic_1: number
export const KEY_Arabic_2: number
export const KEY_Arabic_3: number
export const KEY_Arabic_4: number
export const KEY_Arabic_5: number
export const KEY_Arabic_6: number
export const KEY_Arabic_7: number
export const KEY_Arabic_8: number
export const KEY_Arabic_9: number
export const KEY_Arabic_ain: number
export const KEY_Arabic_alef: number
export const KEY_Arabic_alefmaksura: number
export const KEY_Arabic_beh: number
export const KEY_Arabic_comma: number
export const KEY_Arabic_dad: number
export const KEY_Arabic_dal: number
export const KEY_Arabic_damma: number
export const KEY_Arabic_dammatan: number
export const KEY_Arabic_ddal: number
export const KEY_Arabic_farsi_yeh: number
export const KEY_Arabic_fatha: number
export const KEY_Arabic_fathatan: number
export const KEY_Arabic_feh: number
export const KEY_Arabic_fullstop: number
export const KEY_Arabic_gaf: number
export const KEY_Arabic_ghain: number
export const KEY_Arabic_ha: number
export const KEY_Arabic_hah: number
export const KEY_Arabic_hamza: number
export const KEY_Arabic_hamza_above: number
export const KEY_Arabic_hamza_below: number
export const KEY_Arabic_hamzaonalef: number
export const KEY_Arabic_hamzaonwaw: number
export const KEY_Arabic_hamzaonyeh: number
export const KEY_Arabic_hamzaunderalef: number
export const KEY_Arabic_heh: number
export const KEY_Arabic_heh_doachashmee: number
export const KEY_Arabic_heh_goal: number
export const KEY_Arabic_jeem: number
export const KEY_Arabic_jeh: number
export const KEY_Arabic_kaf: number
export const KEY_Arabic_kasra: number
export const KEY_Arabic_kasratan: number
export const KEY_Arabic_keheh: number
export const KEY_Arabic_khah: number
export const KEY_Arabic_lam: number
export const KEY_Arabic_madda_above: number
export const KEY_Arabic_maddaonalef: number
export const KEY_Arabic_meem: number
export const KEY_Arabic_noon: number
export const KEY_Arabic_noon_ghunna: number
export const KEY_Arabic_peh: number
export const KEY_Arabic_percent: number
export const KEY_Arabic_qaf: number
export const KEY_Arabic_question_mark: number
export const KEY_Arabic_ra: number
export const KEY_Arabic_rreh: number
export const KEY_Arabic_sad: number
export const KEY_Arabic_seen: number
export const KEY_Arabic_semicolon: number
export const KEY_Arabic_shadda: number
export const KEY_Arabic_sheen: number
export const KEY_Arabic_sukun: number
export const KEY_Arabic_superscript_alef: number
export const KEY_Arabic_switch: number
export const KEY_Arabic_tah: number
export const KEY_Arabic_tatweel: number
export const KEY_Arabic_tcheh: number
export const KEY_Arabic_teh: number
export const KEY_Arabic_tehmarbuta: number
export const KEY_Arabic_thal: number
export const KEY_Arabic_theh: number
export const KEY_Arabic_tteh: number
export const KEY_Arabic_veh: number
export const KEY_Arabic_waw: number
export const KEY_Arabic_yeh: number
export const KEY_Arabic_yeh_baree: number
export const KEY_Arabic_zah: number
export const KEY_Arabic_zain: number
export const KEY_Aring: number
export const KEY_Armenian_AT: number
export const KEY_Armenian_AYB: number
export const KEY_Armenian_BEN: number
export const KEY_Armenian_CHA: number
export const KEY_Armenian_DA: number
export const KEY_Armenian_DZA: number
export const KEY_Armenian_E: number
export const KEY_Armenian_FE: number
export const KEY_Armenian_GHAT: number
export const KEY_Armenian_GIM: number
export const KEY_Armenian_HI: number
export const KEY_Armenian_HO: number
export const KEY_Armenian_INI: number
export const KEY_Armenian_JE: number
export const KEY_Armenian_KE: number
export const KEY_Armenian_KEN: number
export const KEY_Armenian_KHE: number
export const KEY_Armenian_LYUN: number
export const KEY_Armenian_MEN: number
export const KEY_Armenian_NU: number
export const KEY_Armenian_O: number
export const KEY_Armenian_PE: number
export const KEY_Armenian_PYUR: number
export const KEY_Armenian_RA: number
export const KEY_Armenian_RE: number
export const KEY_Armenian_SE: number
export const KEY_Armenian_SHA: number
export const KEY_Armenian_TCHE: number
export const KEY_Armenian_TO: number
export const KEY_Armenian_TSA: number
export const KEY_Armenian_TSO: number
export const KEY_Armenian_TYUN: number
export const KEY_Armenian_VEV: number
export const KEY_Armenian_VO: number
export const KEY_Armenian_VYUN: number
export const KEY_Armenian_YECH: number
export const KEY_Armenian_ZA: number
export const KEY_Armenian_ZHE: number
export const KEY_Armenian_accent: number
export const KEY_Armenian_amanak: number
export const KEY_Armenian_apostrophe: number
export const KEY_Armenian_at: number
export const KEY_Armenian_ayb: number
export const KEY_Armenian_ben: number
export const KEY_Armenian_but: number
export const KEY_Armenian_cha: number
export const KEY_Armenian_da: number
export const KEY_Armenian_dza: number
export const KEY_Armenian_e: number
export const KEY_Armenian_exclam: number
export const KEY_Armenian_fe: number
export const KEY_Armenian_full_stop: number
export const KEY_Armenian_ghat: number
export const KEY_Armenian_gim: number
export const KEY_Armenian_hi: number
export const KEY_Armenian_ho: number
export const KEY_Armenian_hyphen: number
export const KEY_Armenian_ini: number
export const KEY_Armenian_je: number
export const KEY_Armenian_ke: number
export const KEY_Armenian_ken: number
export const KEY_Armenian_khe: number
export const KEY_Armenian_ligature_ew: number
export const KEY_Armenian_lyun: number
export const KEY_Armenian_men: number
export const KEY_Armenian_nu: number
export const KEY_Armenian_o: number
export const KEY_Armenian_paruyk: number
export const KEY_Armenian_pe: number
export const KEY_Armenian_pyur: number
export const KEY_Armenian_question: number
export const KEY_Armenian_ra: number
export const KEY_Armenian_re: number
export const KEY_Armenian_se: number
export const KEY_Armenian_separation_mark: number
export const KEY_Armenian_sha: number
export const KEY_Armenian_shesht: number
export const KEY_Armenian_tche: number
export const KEY_Armenian_to: number
export const KEY_Armenian_tsa: number
export const KEY_Armenian_tso: number
export const KEY_Armenian_tyun: number
export const KEY_Armenian_verjaket: number
export const KEY_Armenian_vev: number
export const KEY_Armenian_vo: number
export const KEY_Armenian_vyun: number
export const KEY_Armenian_yech: number
export const KEY_Armenian_yentamna: number
export const KEY_Armenian_za: number
export const KEY_Armenian_zhe: number
export const KEY_Atilde: number
export const KEY_AudibleBell_Enable: number
export const KEY_AudioCycleTrack: number
export const KEY_AudioForward: number
export const KEY_AudioLowerVolume: number
export const KEY_AudioMedia: number
export const KEY_AudioMute: number
export const KEY_AudioNext: number
export const KEY_AudioPause: number
export const KEY_AudioPlay: number
export const KEY_AudioPrev: number
export const KEY_AudioRaiseVolume: number
export const KEY_AudioRandomPlay: number
export const KEY_AudioRecord: number
export const KEY_AudioRepeat: number
export const KEY_AudioRewind: number
export const KEY_AudioStop: number
export const KEY_Away: number
export const KEY_B: number
export const KEY_Babovedot: number
export const KEY_Back: number
export const KEY_BackForward: number
export const KEY_BackSpace: number
export const KEY_Battery: number
export const KEY_Begin: number
export const KEY_Blue: number
export const KEY_Bluetooth: number
export const KEY_Book: number
export const KEY_BounceKeys_Enable: number
export const KEY_Break: number
export const KEY_BrightnessAdjust: number
export const KEY_Byelorussian_SHORTU: number
export const KEY_Byelorussian_shortu: number
export const KEY_C: number
export const KEY_CD: number
export const KEY_Cabovedot: number
export const KEY_Cacute: number
export const KEY_Calculator: number
export const KEY_Calendar: number
export const KEY_Cancel: number
export const KEY_Caps_Lock: number
export const KEY_Ccaron: number
export const KEY_Ccedilla: number
export const KEY_Ccircumflex: number
export const KEY_Clear: number
export const KEY_ClearGrab: number
export const KEY_Close: number
export const KEY_Codeinput: number
export const KEY_ColonSign: number
export const KEY_Community: number
export const KEY_ContrastAdjust: number
export const KEY_Control_L: number
export const KEY_Control_R: number
export const KEY_Copy: number
export const KEY_CruzeiroSign: number
export const KEY_Cut: number
export const KEY_CycleAngle: number
export const KEY_Cyrillic_A: number
export const KEY_Cyrillic_BE: number
export const KEY_Cyrillic_CHE: number
export const KEY_Cyrillic_CHE_descender: number
export const KEY_Cyrillic_CHE_vertstroke: number
export const KEY_Cyrillic_DE: number
export const KEY_Cyrillic_DZHE: number
export const KEY_Cyrillic_E: number
export const KEY_Cyrillic_EF: number
export const KEY_Cyrillic_EL: number
export const KEY_Cyrillic_EM: number
export const KEY_Cyrillic_EN: number
export const KEY_Cyrillic_EN_descender: number
export const KEY_Cyrillic_ER: number
export const KEY_Cyrillic_ES: number
export const KEY_Cyrillic_GHE: number
export const KEY_Cyrillic_GHE_bar: number
export const KEY_Cyrillic_HA: number
export const KEY_Cyrillic_HARDSIGN: number
export const KEY_Cyrillic_HA_descender: number
export const KEY_Cyrillic_I: number
export const KEY_Cyrillic_IE: number
export const KEY_Cyrillic_IO: number
export const KEY_Cyrillic_I_macron: number
export const KEY_Cyrillic_JE: number
export const KEY_Cyrillic_KA: number
export const KEY_Cyrillic_KA_descender: number
export const KEY_Cyrillic_KA_vertstroke: number
export const KEY_Cyrillic_LJE: number
export const KEY_Cyrillic_NJE: number
export const KEY_Cyrillic_O: number
export const KEY_Cyrillic_O_bar: number
export const KEY_Cyrillic_PE: number
export const KEY_Cyrillic_SCHWA: number
export const KEY_Cyrillic_SHA: number
export const KEY_Cyrillic_SHCHA: number
export const KEY_Cyrillic_SHHA: number
export const KEY_Cyrillic_SHORTI: number
export const KEY_Cyrillic_SOFTSIGN: number
export const KEY_Cyrillic_TE: number
export const KEY_Cyrillic_TSE: number
export const KEY_Cyrillic_U: number
export const KEY_Cyrillic_U_macron: number
export const KEY_Cyrillic_U_straight: number
export const KEY_Cyrillic_U_straight_bar: number
export const KEY_Cyrillic_VE: number
export const KEY_Cyrillic_YA: number
export const KEY_Cyrillic_YERU: number
export const KEY_Cyrillic_YU: number
export const KEY_Cyrillic_ZE: number
export const KEY_Cyrillic_ZHE: number
export const KEY_Cyrillic_ZHE_descender: number
export const KEY_Cyrillic_a: number
export const KEY_Cyrillic_be: number
export const KEY_Cyrillic_che: number
export const KEY_Cyrillic_che_descender: number
export const KEY_Cyrillic_che_vertstroke: number
export const KEY_Cyrillic_de: number
export const KEY_Cyrillic_dzhe: number
export const KEY_Cyrillic_e: number
export const KEY_Cyrillic_ef: number
export const KEY_Cyrillic_el: number
export const KEY_Cyrillic_em: number
export const KEY_Cyrillic_en: number
export const KEY_Cyrillic_en_descender: number
export const KEY_Cyrillic_er: number
export const KEY_Cyrillic_es: number
export const KEY_Cyrillic_ghe: number
export const KEY_Cyrillic_ghe_bar: number
export const KEY_Cyrillic_ha: number
export const KEY_Cyrillic_ha_descender: number
export const KEY_Cyrillic_hardsign: number
export const KEY_Cyrillic_i: number
export const KEY_Cyrillic_i_macron: number
export const KEY_Cyrillic_ie: number
export const KEY_Cyrillic_io: number
export const KEY_Cyrillic_je: number
export const KEY_Cyrillic_ka: number
export const KEY_Cyrillic_ka_descender: number
export const KEY_Cyrillic_ka_vertstroke: number
export const KEY_Cyrillic_lje: number
export const KEY_Cyrillic_nje: number
export const KEY_Cyrillic_o: number
export const KEY_Cyrillic_o_bar: number
export const KEY_Cyrillic_pe: number
export const KEY_Cyrillic_schwa: number
export const KEY_Cyrillic_sha: number
export const KEY_Cyrillic_shcha: number
export const KEY_Cyrillic_shha: number
export const KEY_Cyrillic_shorti: number
export const KEY_Cyrillic_softsign: number
export const KEY_Cyrillic_te: number
export const KEY_Cyrillic_tse: number
export const KEY_Cyrillic_u: number
export const KEY_Cyrillic_u_macron: number
export const KEY_Cyrillic_u_straight: number
export const KEY_Cyrillic_u_straight_bar: number
export const KEY_Cyrillic_ve: number
export const KEY_Cyrillic_ya: number
export const KEY_Cyrillic_yeru: number
export const KEY_Cyrillic_yu: number
export const KEY_Cyrillic_ze: number
export const KEY_Cyrillic_zhe: number
export const KEY_Cyrillic_zhe_descender: number
export const KEY_D: number
export const KEY_DOS: number
export const KEY_Dabovedot: number
export const KEY_Dcaron: number
export const KEY_Delete: number
export const KEY_Display: number
export const KEY_Documents: number
export const KEY_DongSign: number
export const KEY_Down: number
export const KEY_Dstroke: number
export const KEY_E: number
export const KEY_ENG: number
export const KEY_ETH: number
export const KEY_Eabovedot: number
export const KEY_Eacute: number
export const KEY_Ebelowdot: number
export const KEY_Ecaron: number
export const KEY_Ecircumflex: number
export const KEY_Ecircumflexacute: number
export const KEY_Ecircumflexbelowdot: number
export const KEY_Ecircumflexgrave: number
export const KEY_Ecircumflexhook: number
export const KEY_Ecircumflextilde: number
export const KEY_EcuSign: number
export const KEY_Ediaeresis: number
export const KEY_Egrave: number
export const KEY_Ehook: number
export const KEY_Eisu_Shift: number
export const KEY_Eisu_toggle: number
export const KEY_Eject: number
export const KEY_Emacron: number
export const KEY_End: number
export const KEY_Eogonek: number
export const KEY_Escape: number
export const KEY_Eth: number
export const KEY_Etilde: number
export const KEY_EuroSign: number
export const KEY_Excel: number
export const KEY_Execute: number
export const KEY_Explorer: number
export const KEY_F: number
export const KEY_F1: number
export const KEY_F10: number
export const KEY_F11: number
export const KEY_F12: number
export const KEY_F13: number
export const KEY_F14: number
export const KEY_F15: number
export const KEY_F16: number
export const KEY_F17: number
export const KEY_F18: number
export const KEY_F19: number
export const KEY_F2: number
export const KEY_F20: number
export const KEY_F21: number
export const KEY_F22: number
export const KEY_F23: number
export const KEY_F24: number
export const KEY_F25: number
export const KEY_F26: number
export const KEY_F27: number
export const KEY_F28: number
export const KEY_F29: number
export const KEY_F3: number
export const KEY_F30: number
export const KEY_F31: number
export const KEY_F32: number
export const KEY_F33: number
export const KEY_F34: number
export const KEY_F35: number
export const KEY_F4: number
export const KEY_F5: number
export const KEY_F6: number
export const KEY_F7: number
export const KEY_F8: number
export const KEY_F9: number
export const KEY_FFrancSign: number
export const KEY_Fabovedot: number
export const KEY_Farsi_0: number
export const KEY_Farsi_1: number
export const KEY_Farsi_2: number
export const KEY_Farsi_3: number
export const KEY_Farsi_4: number
export const KEY_Farsi_5: number
export const KEY_Farsi_6: number
export const KEY_Farsi_7: number
export const KEY_Farsi_8: number
export const KEY_Farsi_9: number
export const KEY_Farsi_yeh: number
export const KEY_Favorites: number
export const KEY_Finance: number
export const KEY_Find: number
export const KEY_First_Virtual_Screen: number
export const KEY_Forward: number
export const KEY_FrameBack: number
export const KEY_FrameForward: number
export const KEY_G: number
export const KEY_Gabovedot: number
export const KEY_Game: number
export const KEY_Gbreve: number
export const KEY_Gcaron: number
export const KEY_Gcedilla: number
export const KEY_Gcircumflex: number
export const KEY_Georgian_an: number
export const KEY_Georgian_ban: number
export const KEY_Georgian_can: number
export const KEY_Georgian_char: number
export const KEY_Georgian_chin: number
export const KEY_Georgian_cil: number
export const KEY_Georgian_don: number
export const KEY_Georgian_en: number
export const KEY_Georgian_fi: number
export const KEY_Georgian_gan: number
export const KEY_Georgian_ghan: number
export const KEY_Georgian_hae: number
export const KEY_Georgian_har: number
export const KEY_Georgian_he: number
export const KEY_Georgian_hie: number
export const KEY_Georgian_hoe: number
export const KEY_Georgian_in: number
export const KEY_Georgian_jhan: number
export const KEY_Georgian_jil: number
export const KEY_Georgian_kan: number
export const KEY_Georgian_khar: number
export const KEY_Georgian_las: number
export const KEY_Georgian_man: number
export const KEY_Georgian_nar: number
export const KEY_Georgian_on: number
export const KEY_Georgian_par: number
export const KEY_Georgian_phar: number
export const KEY_Georgian_qar: number
export const KEY_Georgian_rae: number
export const KEY_Georgian_san: number
export const KEY_Georgian_shin: number
export const KEY_Georgian_tan: number
export const KEY_Georgian_tar: number
export const KEY_Georgian_un: number
export const KEY_Georgian_vin: number
export const KEY_Georgian_we: number
export const KEY_Georgian_xan: number
export const KEY_Georgian_zen: number
export const KEY_Georgian_zhar: number
export const KEY_Go: number
export const KEY_Greek_ALPHA: number
export const KEY_Greek_ALPHAaccent: number
export const KEY_Greek_BETA: number
export const KEY_Greek_CHI: number
export const KEY_Greek_DELTA: number
export const KEY_Greek_EPSILON: number
export const KEY_Greek_EPSILONaccent: number
export const KEY_Greek_ETA: number
export const KEY_Greek_ETAaccent: number
export const KEY_Greek_GAMMA: number
export const KEY_Greek_IOTA: number
export const KEY_Greek_IOTAaccent: number
export const KEY_Greek_IOTAdiaeresis: number
export const KEY_Greek_IOTAdieresis: number
export const KEY_Greek_KAPPA: number
export const KEY_Greek_LAMBDA: number
export const KEY_Greek_LAMDA: number
export const KEY_Greek_MU: number
export const KEY_Greek_NU: number
export const KEY_Greek_OMEGA: number
export const KEY_Greek_OMEGAaccent: number
export const KEY_Greek_OMICRON: number
export const KEY_Greek_OMICRONaccent: number
export const KEY_Greek_PHI: number
export const KEY_Greek_PI: number
export const KEY_Greek_PSI: number
export const KEY_Greek_RHO: number
export const KEY_Greek_SIGMA: number
export const KEY_Greek_TAU: number
export const KEY_Greek_THETA: number
export const KEY_Greek_UPSILON: number
export const KEY_Greek_UPSILONaccent: number
export const KEY_Greek_UPSILONdieresis: number
export const KEY_Greek_XI: number
export const KEY_Greek_ZETA: number
export const KEY_Greek_accentdieresis: number
export const KEY_Greek_alpha: number
export const KEY_Greek_alphaaccent: number
export const KEY_Greek_beta: number
export const KEY_Greek_chi: number
export const KEY_Greek_delta: number
export const KEY_Greek_epsilon: number
export const KEY_Greek_epsilonaccent: number
export const KEY_Greek_eta: number
export const KEY_Greek_etaaccent: number
export const KEY_Greek_finalsmallsigma: number
export const KEY_Greek_gamma: number
export const KEY_Greek_horizbar: number
export const KEY_Greek_iota: number
export const KEY_Greek_iotaaccent: number
export const KEY_Greek_iotaaccentdieresis: number
export const KEY_Greek_iotadieresis: number
export const KEY_Greek_kappa: number
export const KEY_Greek_lambda: number
export const KEY_Greek_lamda: number
export const KEY_Greek_mu: number
export const KEY_Greek_nu: number
export const KEY_Greek_omega: number
export const KEY_Greek_omegaaccent: number
export const KEY_Greek_omicron: number
export const KEY_Greek_omicronaccent: number
export const KEY_Greek_phi: number
export const KEY_Greek_pi: number
export const KEY_Greek_psi: number
export const KEY_Greek_rho: number
export const KEY_Greek_sigma: number
export const KEY_Greek_switch: number
export const KEY_Greek_tau: number
export const KEY_Greek_theta: number
export const KEY_Greek_upsilon: number
export const KEY_Greek_upsilonaccent: number
export const KEY_Greek_upsilonaccentdieresis: number
export const KEY_Greek_upsilondieresis: number
export const KEY_Greek_xi: number
export const KEY_Greek_zeta: number
export const KEY_Green: number
export const KEY_H: number
export const KEY_Hangul: number
export const KEY_Hangul_A: number
export const KEY_Hangul_AE: number
export const KEY_Hangul_AraeA: number
export const KEY_Hangul_AraeAE: number
export const KEY_Hangul_Banja: number
export const KEY_Hangul_Cieuc: number
export const KEY_Hangul_Codeinput: number
export const KEY_Hangul_Dikeud: number
export const KEY_Hangul_E: number
export const KEY_Hangul_EO: number
export const KEY_Hangul_EU: number
export const KEY_Hangul_End: number
export const KEY_Hangul_Hanja: number
export const KEY_Hangul_Hieuh: number
export const KEY_Hangul_I: number
export const KEY_Hangul_Ieung: number
export const KEY_Hangul_J_Cieuc: number
export const KEY_Hangul_J_Dikeud: number
export const KEY_Hangul_J_Hieuh: number
export const KEY_Hangul_J_Ieung: number
export const KEY_Hangul_J_Jieuj: number
export const KEY_Hangul_J_Khieuq: number
export const KEY_Hangul_J_Kiyeog: number
export const KEY_Hangul_J_KiyeogSios: number
export const KEY_Hangul_J_KkogjiDalrinIeung: number
export const KEY_Hangul_J_Mieum: number
export const KEY_Hangul_J_Nieun: number
export const KEY_Hangul_J_NieunHieuh: number
export const KEY_Hangul_J_NieunJieuj: number
export const KEY_Hangul_J_PanSios: number
export const KEY_Hangul_J_Phieuf: number
export const KEY_Hangul_J_Pieub: number
export const KEY_Hangul_J_PieubSios: number
export const KEY_Hangul_J_Rieul: number
export const KEY_Hangul_J_RieulHieuh: number
export const KEY_Hangul_J_RieulKiyeog: number
export const KEY_Hangul_J_RieulMieum: number
export const KEY_Hangul_J_RieulPhieuf: number
export const KEY_Hangul_J_RieulPieub: number
export const KEY_Hangul_J_RieulSios: number
export const KEY_Hangul_J_RieulTieut: number
export const KEY_Hangul_J_Sios: number
export const KEY_Hangul_J_SsangKiyeog: number
export const KEY_Hangul_J_SsangSios: number
export const KEY_Hangul_J_Tieut: number
export const KEY_Hangul_J_YeorinHieuh: number
export const KEY_Hangul_Jamo: number
export const KEY_Hangul_Jeonja: number
export const KEY_Hangul_Jieuj: number
export const KEY_Hangul_Khieuq: number
export const KEY_Hangul_Kiyeog: number
export const KEY_Hangul_KiyeogSios: number
export const KEY_Hangul_KkogjiDalrinIeung: number
export const KEY_Hangul_Mieum: number
export const KEY_Hangul_MultipleCandidate: number
export const KEY_Hangul_Nieun: number
export const KEY_Hangul_NieunHieuh: number
export const KEY_Hangul_NieunJieuj: number
export const KEY_Hangul_O: number
export const KEY_Hangul_OE: number
export const KEY_Hangul_PanSios: number
export const KEY_Hangul_Phieuf: number
export const KEY_Hangul_Pieub: number
export const KEY_Hangul_PieubSios: number
export const KEY_Hangul_PostHanja: number
export const KEY_Hangul_PreHanja: number
export const KEY_Hangul_PreviousCandidate: number
export const KEY_Hangul_Rieul: number
export const KEY_Hangul_RieulHieuh: number
export const KEY_Hangul_RieulKiyeog: number
export const KEY_Hangul_RieulMieum: number
export const KEY_Hangul_RieulPhieuf: number
export const KEY_Hangul_RieulPieub: number
export const KEY_Hangul_RieulSios: number
export const KEY_Hangul_RieulTieut: number
export const KEY_Hangul_RieulYeorinHieuh: number
export const KEY_Hangul_Romaja: number
export const KEY_Hangul_SingleCandidate: number
export const KEY_Hangul_Sios: number
export const KEY_Hangul_Special: number
export const KEY_Hangul_SsangDikeud: number
export const KEY_Hangul_SsangJieuj: number
export const KEY_Hangul_SsangKiyeog: number
export const KEY_Hangul_SsangPieub: number
export const KEY_Hangul_SsangSios: number
export const KEY_Hangul_Start: number
export const KEY_Hangul_SunkyeongeumMieum: number
export const KEY_Hangul_SunkyeongeumPhieuf: number
export const KEY_Hangul_SunkyeongeumPieub: number
export const KEY_Hangul_Tieut: number
export const KEY_Hangul_U: number
export const KEY_Hangul_WA: number
export const KEY_Hangul_WAE: number
export const KEY_Hangul_WE: number
export const KEY_Hangul_WEO: number
export const KEY_Hangul_WI: number
export const KEY_Hangul_YA: number
export const KEY_Hangul_YAE: number
export const KEY_Hangul_YE: number
export const KEY_Hangul_YEO: number
export const KEY_Hangul_YI: number
export const KEY_Hangul_YO: number
export const KEY_Hangul_YU: number
export const KEY_Hangul_YeorinHieuh: number
export const KEY_Hangul_switch: number
export const KEY_Hankaku: number
export const KEY_Hcircumflex: number
export const KEY_Hebrew_switch: number
export const KEY_Help: number
export const KEY_Henkan: number
export const KEY_Henkan_Mode: number
export const KEY_Hibernate: number
export const KEY_Hiragana: number
export const KEY_Hiragana_Katakana: number
export const KEY_History: number
export const KEY_Home: number
export const KEY_HomePage: number
export const KEY_HotLinks: number
export const KEY_Hstroke: number
export const KEY_Hyper_L: number
export const KEY_Hyper_R: number
export const KEY_I: number
export const KEY_ISO_Center_Object: number
export const KEY_ISO_Continuous_Underline: number
export const KEY_ISO_Discontinuous_Underline: number
export const KEY_ISO_Emphasize: number
export const KEY_ISO_Enter: number
export const KEY_ISO_Fast_Cursor_Down: number
export const KEY_ISO_Fast_Cursor_Left: number
export const KEY_ISO_Fast_Cursor_Right: number
export const KEY_ISO_Fast_Cursor_Up: number
export const KEY_ISO_First_Group: number
export const KEY_ISO_First_Group_Lock: number
export const KEY_ISO_Group_Latch: number
export const KEY_ISO_Group_Lock: number
export const KEY_ISO_Group_Shift: number
export const KEY_ISO_Last_Group: number
export const KEY_ISO_Last_Group_Lock: number
export const KEY_ISO_Left_Tab: number
export const KEY_ISO_Level2_Latch: number
export const KEY_ISO_Level3_Latch: number
export const KEY_ISO_Level3_Lock: number
export const KEY_ISO_Level3_Shift: number
export const KEY_ISO_Level5_Latch: number
export const KEY_ISO_Level5_Lock: number
export const KEY_ISO_Level5_Shift: number
export const KEY_ISO_Lock: number
export const KEY_ISO_Move_Line_Down: number
export const KEY_ISO_Move_Line_Up: number
export const KEY_ISO_Next_Group: number
export const KEY_ISO_Next_Group_Lock: number
export const KEY_ISO_Partial_Line_Down: number
export const KEY_ISO_Partial_Line_Up: number
export const KEY_ISO_Partial_Space_Left: number
export const KEY_ISO_Partial_Space_Right: number
export const KEY_ISO_Prev_Group: number
export const KEY_ISO_Prev_Group_Lock: number
export const KEY_ISO_Release_Both_Margins: number
export const KEY_ISO_Release_Margin_Left: number
export const KEY_ISO_Release_Margin_Right: number
export const KEY_ISO_Set_Margin_Left: number
export const KEY_ISO_Set_Margin_Right: number
export const KEY_Iabovedot: number
export const KEY_Iacute: number
export const KEY_Ibelowdot: number
export const KEY_Ibreve: number
export const KEY_Icircumflex: number
export const KEY_Idiaeresis: number
export const KEY_Igrave: number
export const KEY_Ihook: number
export const KEY_Imacron: number
export const KEY_Insert: number
export const KEY_Iogonek: number
export const KEY_Itilde: number
export const KEY_J: number
export const KEY_Jcircumflex: number
export const KEY_K: number
export const KEY_KP_0: number
export const KEY_KP_1: number
export const KEY_KP_2: number
export const KEY_KP_3: number
export const KEY_KP_4: number
export const KEY_KP_5: number
export const KEY_KP_6: number
export const KEY_KP_7: number
export const KEY_KP_8: number
export const KEY_KP_9: number
export const KEY_KP_Add: number
export const KEY_KP_Begin: number
export const KEY_KP_Decimal: number
export const KEY_KP_Delete: number
export const KEY_KP_Divide: number
export const KEY_KP_Down: number
export const KEY_KP_End: number
export const KEY_KP_Enter: number
export const KEY_KP_Equal: number
export const KEY_KP_F1: number
export const KEY_KP_F2: number
export const KEY_KP_F3: number
export const KEY_KP_F4: number
export const KEY_KP_Home: number
export const KEY_KP_Insert: number
export const KEY_KP_Left: number
export const KEY_KP_Multiply: number
export const KEY_KP_Next: number
export const KEY_KP_Page_Down: number
export const KEY_KP_Page_Up: number
export const KEY_KP_Prior: number
export const KEY_KP_Right: number
export const KEY_KP_Separator: number
export const KEY_KP_Space: number
export const KEY_KP_Subtract: number
export const KEY_KP_Tab: number
export const KEY_KP_Up: number
export const KEY_Kana_Lock: number
export const KEY_Kana_Shift: number
export const KEY_Kanji: number
export const KEY_Kanji_Bangou: number
export const KEY_Katakana: number
export const KEY_KbdBrightnessDown: number
export const KEY_KbdBrightnessUp: number
export const KEY_KbdLightOnOff: number
export const KEY_Kcedilla: number
export const KEY_Korean_Won: number
export const KEY_L: number
export const KEY_L1: number
export const KEY_L10: number
export const KEY_L2: number
export const KEY_L3: number
export const KEY_L4: number
export const KEY_L5: number
export const KEY_L6: number
export const KEY_L7: number
export const KEY_L8: number
export const KEY_L9: number
export const KEY_Lacute: number
export const KEY_Last_Virtual_Screen: number
export const KEY_Launch0: number
export const KEY_Launch1: number
export const KEY_Launch2: number
export const KEY_Launch3: number
export const KEY_Launch4: number
export const KEY_Launch5: number
export const KEY_Launch6: number
export const KEY_Launch7: number
export const KEY_Launch8: number
export const KEY_Launch9: number
export const KEY_LaunchA: number
export const KEY_LaunchB: number
export const KEY_LaunchC: number
export const KEY_LaunchD: number
export const KEY_LaunchE: number
export const KEY_LaunchF: number
export const KEY_Lbelowdot: number
export const KEY_Lcaron: number
export const KEY_Lcedilla: number
export const KEY_Left: number
export const KEY_LightBulb: number
export const KEY_Linefeed: number
export const KEY_LiraSign: number
export const KEY_LogOff: number
export const KEY_Lstroke: number
export const KEY_M: number
export const KEY_Mabovedot: number
export const KEY_Macedonia_DSE: number
export const KEY_Macedonia_GJE: number
export const KEY_Macedonia_KJE: number
export const KEY_Macedonia_dse: number
export const KEY_Macedonia_gje: number
export const KEY_Macedonia_kje: number
export const KEY_Mae_Koho: number
export const KEY_Mail: number
export const KEY_MailForward: number
export const KEY_Market: number
export const KEY_Massyo: number
export const KEY_Meeting: number
export const KEY_Memo: number
export const KEY_Menu: number
export const KEY_MenuKB: number
export const KEY_MenuPB: number
export const KEY_Messenger: number
export const KEY_Meta_L: number
export const KEY_Meta_R: number
export const KEY_MillSign: number
export const KEY_ModeLock: number
export const KEY_Mode_switch: number
export const KEY_MonBrightnessDown: number
export const KEY_MonBrightnessUp: number
export const KEY_MouseKeys_Accel_Enable: number
export const KEY_MouseKeys_Enable: number
export const KEY_Muhenkan: number
export const KEY_Multi_key: number
export const KEY_MultipleCandidate: number
export const KEY_Music: number
export const KEY_MyComputer: number
export const KEY_MySites: number
export const KEY_N: number
export const KEY_Nacute: number
export const KEY_NairaSign: number
export const KEY_Ncaron: number
export const KEY_Ncedilla: number
export const KEY_New: number
export const KEY_NewSheqelSign: number
export const KEY_News: number
export const KEY_Next: number
export const KEY_Next_VMode: number
export const KEY_Next_Virtual_Screen: number
export const KEY_Ntilde: number
export const KEY_Num_Lock: number
export const KEY_O: number
export const KEY_OE: number
export const KEY_Oacute: number
export const KEY_Obarred: number
export const KEY_Obelowdot: number
export const KEY_Ocaron: number
export const KEY_Ocircumflex: number
export const KEY_Ocircumflexacute: number
export const KEY_Ocircumflexbelowdot: number
export const KEY_Ocircumflexgrave: number
export const KEY_Ocircumflexhook: number
export const KEY_Ocircumflextilde: number
export const KEY_Odiaeresis: number
export const KEY_Odoubleacute: number
export const KEY_OfficeHome: number
export const KEY_Ograve: number
export const KEY_Ohook: number
export const KEY_Ohorn: number
export const KEY_Ohornacute: number
export const KEY_Ohornbelowdot: number
export const KEY_Ohorngrave: number
export const KEY_Ohornhook: number
export const KEY_Ohorntilde: number
export const KEY_Omacron: number
export const KEY_Ooblique: number
export const KEY_Open: number
export const KEY_OpenURL: number
export const KEY_Option: number
export const KEY_Oslash: number
export const KEY_Otilde: number
export const KEY_Overlay1_Enable: number
export const KEY_Overlay2_Enable: number
export const KEY_P: number
export const KEY_Pabovedot: number
export const KEY_Page_Down: number
export const KEY_Page_Up: number
export const KEY_Paste: number
export const KEY_Pause: number
export const KEY_PesetaSign: number
export const KEY_Phone: number
export const KEY_Pictures: number
export const KEY_Pointer_Accelerate: number
export const KEY_Pointer_Button1: number
export const KEY_Pointer_Button2: number
export const KEY_Pointer_Button3: number
export const KEY_Pointer_Button4: number
export const KEY_Pointer_Button5: number
export const KEY_Pointer_Button_Dflt: number
export const KEY_Pointer_DblClick1: number
export const KEY_Pointer_DblClick2: number
export const KEY_Pointer_DblClick3: number
export const KEY_Pointer_DblClick4: number
export const KEY_Pointer_DblClick5: number
export const KEY_Pointer_DblClick_Dflt: number
export const KEY_Pointer_DfltBtnNext: number
export const KEY_Pointer_DfltBtnPrev: number
export const KEY_Pointer_Down: number
export const KEY_Pointer_DownLeft: number
export const KEY_Pointer_DownRight: number
export const KEY_Pointer_Drag1: number
export const KEY_Pointer_Drag2: number
export const KEY_Pointer_Drag3: number
export const KEY_Pointer_Drag4: number
export const KEY_Pointer_Drag5: number
export const KEY_Pointer_Drag_Dflt: number
export const KEY_Pointer_EnableKeys: number
export const KEY_Pointer_Left: number
export const KEY_Pointer_Right: number
export const KEY_Pointer_Up: number
export const KEY_Pointer_UpLeft: number
export const KEY_Pointer_UpRight: number
export const KEY_PowerDown: number
export const KEY_PowerOff: number
export const KEY_Prev_VMode: number
export const KEY_Prev_Virtual_Screen: number
export const KEY_PreviousCandidate: number
export const KEY_Print: number
export const KEY_Prior: number
export const KEY_Q: number
export const KEY_R: number
export const KEY_R1: number
export const KEY_R10: number
export const KEY_R11: number
export const KEY_R12: number
export const KEY_R13: number
export const KEY_R14: number
export const KEY_R15: number
export const KEY_R2: number
export const KEY_R3: number
export const KEY_R4: number
export const KEY_R5: number
export const KEY_R6: number
export const KEY_R7: number
export const KEY_R8: number
export const KEY_R9: number
export const KEY_Racute: number
export const KEY_Rcaron: number
export const KEY_Rcedilla: number
export const KEY_Red: number
export const KEY_Redo: number
export const KEY_Refresh: number
export const KEY_Reload: number
export const KEY_RepeatKeys_Enable: number
export const KEY_Reply: number
export const KEY_Return: number
export const KEY_Right: number
export const KEY_RockerDown: number
export const KEY_RockerEnter: number
export const KEY_RockerUp: number
export const KEY_Romaji: number
export const KEY_RotateWindows: number
export const KEY_RotationKB: number
export const KEY_RotationPB: number
export const KEY_RupeeSign: number
export const KEY_S: number
export const KEY_SCHWA: number
export const KEY_Sabovedot: number
export const KEY_Sacute: number
export const KEY_Save: number
export const KEY_Scaron: number
export const KEY_Scedilla: number
export const KEY_Scircumflex: number
export const KEY_ScreenSaver: number
export const KEY_ScrollClick: number
export const KEY_ScrollDown: number
export const KEY_ScrollUp: number
export const KEY_Scroll_Lock: number
export const KEY_Search: number
export const KEY_Select: number
export const KEY_SelectButton: number
export const KEY_Send: number
export const KEY_Serbian_DJE: number
export const KEY_Serbian_DZE: number
export const KEY_Serbian_JE: number
export const KEY_Serbian_LJE: number
export const KEY_Serbian_NJE: number
export const KEY_Serbian_TSHE: number
export const KEY_Serbian_dje: number
export const KEY_Serbian_dze: number
export const KEY_Serbian_je: number
export const KEY_Serbian_lje: number
export const KEY_Serbian_nje: number
export const KEY_Serbian_tshe: number
export const KEY_Shift_L: number
export const KEY_Shift_Lock: number
export const KEY_Shift_R: number
export const KEY_Shop: number
export const KEY_SingleCandidate: number
export const KEY_Sleep: number
export const KEY_SlowKeys_Enable: number
export const KEY_Spell: number
export const KEY_SplitScreen: number
export const KEY_Standby: number
export const KEY_Start: number
export const KEY_StickyKeys_Enable: number
export const KEY_Stop: number
export const KEY_Subtitle: number
export const KEY_Super_L: number
export const KEY_Super_R: number
export const KEY_Support: number
export const KEY_Suspend: number
export const KEY_Switch_VT_1: number
export const KEY_Switch_VT_10: number
export const KEY_Switch_VT_11: number
export const KEY_Switch_VT_12: number
export const KEY_Switch_VT_2: number
export const KEY_Switch_VT_3: number
export const KEY_Switch_VT_4: number
export const KEY_Switch_VT_5: number
export const KEY_Switch_VT_6: number
export const KEY_Switch_VT_7: number
export const KEY_Switch_VT_8: number
export const KEY_Switch_VT_9: number
export const KEY_Sys_Req: number
export const KEY_T: number
export const KEY_THORN: number
export const KEY_Tab: number
export const KEY_Tabovedot: number
export const KEY_TaskPane: number
export const KEY_Tcaron: number
export const KEY_Tcedilla: number
export const KEY_Terminal: number
export const KEY_Terminate_Server: number
export const KEY_Thai_baht: number
export const KEY_Thai_bobaimai: number
export const KEY_Thai_chochan: number
export const KEY_Thai_chochang: number
export const KEY_Thai_choching: number
export const KEY_Thai_chochoe: number
export const KEY_Thai_dochada: number
export const KEY_Thai_dodek: number
export const KEY_Thai_fofa: number
export const KEY_Thai_fofan: number
export const KEY_Thai_hohip: number
export const KEY_Thai_honokhuk: number
export const KEY_Thai_khokhai: number
export const KEY_Thai_khokhon: number
export const KEY_Thai_khokhuat: number
export const KEY_Thai_khokhwai: number
export const KEY_Thai_khorakhang: number
export const KEY_Thai_kokai: number
export const KEY_Thai_lakkhangyao: number
export const KEY_Thai_lekchet: number
export const KEY_Thai_lekha: number
export const KEY_Thai_lekhok: number
export const KEY_Thai_lekkao: number
export const KEY_Thai_leknung: number
export const KEY_Thai_lekpaet: number
export const KEY_Thai_leksam: number
export const KEY_Thai_leksi: number
export const KEY_Thai_leksong: number
export const KEY_Thai_leksun: number
export const KEY_Thai_lochula: number
export const KEY_Thai_loling: number
export const KEY_Thai_lu: number
export const KEY_Thai_maichattawa: number
export const KEY_Thai_maiek: number
export const KEY_Thai_maihanakat: number
export const KEY_Thai_maihanakat_maitho: number
export const KEY_Thai_maitaikhu: number
export const KEY_Thai_maitho: number
export const KEY_Thai_maitri: number
export const KEY_Thai_maiyamok: number
export const KEY_Thai_moma: number
export const KEY_Thai_ngongu: number
export const KEY_Thai_nikhahit: number
export const KEY_Thai_nonen: number
export const KEY_Thai_nonu: number
export const KEY_Thai_oang: number
export const KEY_Thai_paiyannoi: number
export const KEY_Thai_phinthu: number
export const KEY_Thai_phophan: number
export const KEY_Thai_phophung: number
export const KEY_Thai_phosamphao: number
export const KEY_Thai_popla: number
export const KEY_Thai_rorua: number
export const KEY_Thai_ru: number
export const KEY_Thai_saraa: number
export const KEY_Thai_saraaa: number
export const KEY_Thai_saraae: number
export const KEY_Thai_saraaimaimalai: number
export const KEY_Thai_saraaimaimuan: number
export const KEY_Thai_saraam: number
export const KEY_Thai_sarae: number
export const KEY_Thai_sarai: number
export const KEY_Thai_saraii: number
export const KEY_Thai_sarao: number
export const KEY_Thai_sarau: number
export const KEY_Thai_saraue: number
export const KEY_Thai_sarauee: number
export const KEY_Thai_sarauu: number
export const KEY_Thai_sorusi: number
export const KEY_Thai_sosala: number
export const KEY_Thai_soso: number
export const KEY_Thai_sosua: number
export const KEY_Thai_thanthakhat: number
export const KEY_Thai_thonangmontho: number
export const KEY_Thai_thophuthao: number
export const KEY_Thai_thothahan: number
export const KEY_Thai_thothan: number
export const KEY_Thai_thothong: number
export const KEY_Thai_thothung: number
export const KEY_Thai_topatak: number
export const KEY_Thai_totao: number
export const KEY_Thai_wowaen: number
export const KEY_Thai_yoyak: number
export const KEY_Thai_yoying: number
export const KEY_Thorn: number
export const KEY_Time: number
export const KEY_ToDoList: number
export const KEY_Tools: number
export const KEY_TopMenu: number
export const KEY_TouchpadToggle: number
export const KEY_Touroku: number
export const KEY_Travel: number
export const KEY_Tslash: number
export const KEY_U: number
export const KEY_UWB: number
export const KEY_Uacute: number
export const KEY_Ubelowdot: number
export const KEY_Ubreve: number
export const KEY_Ucircumflex: number
export const KEY_Udiaeresis: number
export const KEY_Udoubleacute: number
export const KEY_Ugrave: number
export const KEY_Uhook: number
export const KEY_Uhorn: number
export const KEY_Uhornacute: number
export const KEY_Uhornbelowdot: number
export const KEY_Uhorngrave: number
export const KEY_Uhornhook: number
export const KEY_Uhorntilde: number
export const KEY_Ukrainian_GHE_WITH_UPTURN: number
export const KEY_Ukrainian_I: number
export const KEY_Ukrainian_IE: number
export const KEY_Ukrainian_YI: number
export const KEY_Ukrainian_ghe_with_upturn: number
export const KEY_Ukrainian_i: number
export const KEY_Ukrainian_ie: number
export const KEY_Ukrainian_yi: number
export const KEY_Ukranian_I: number
export const KEY_Ukranian_JE: number
export const KEY_Ukranian_YI: number
export const KEY_Ukranian_i: number
export const KEY_Ukranian_je: number
export const KEY_Ukranian_yi: number
export const KEY_Umacron: number
export const KEY_Undo: number
export const KEY_Ungrab: number
export const KEY_Uogonek: number
export const KEY_Up: number
export const KEY_Uring: number
export const KEY_User1KB: number
export const KEY_User2KB: number
export const KEY_UserPB: number
export const KEY_Utilde: number
export const KEY_V: number
export const KEY_VendorHome: number
export const KEY_Video: number
export const KEY_View: number
export const KEY_VoidSymbol: number
export const KEY_W: number
export const KEY_WLAN: number
export const KEY_WWW: number
export const KEY_Wacute: number
export const KEY_WakeUp: number
export const KEY_Wcircumflex: number
export const KEY_Wdiaeresis: number
export const KEY_WebCam: number
export const KEY_Wgrave: number
export const KEY_WheelButton: number
export const KEY_WindowClear: number
export const KEY_WonSign: number
export const KEY_Word: number
export const KEY_X: number
export const KEY_Xabovedot: number
export const KEY_Xfer: number
export const KEY_Y: number
export const KEY_Yacute: number
export const KEY_Ybelowdot: number
export const KEY_Ycircumflex: number
export const KEY_Ydiaeresis: number
export const KEY_Yellow: number
export const KEY_Ygrave: number
export const KEY_Yhook: number
export const KEY_Ytilde: number
export const KEY_Z: number
export const KEY_Zabovedot: number
export const KEY_Zacute: number
export const KEY_Zcaron: number
export const KEY_Zen_Koho: number
export const KEY_Zenkaku: number
export const KEY_Zenkaku_Hankaku: number
export const KEY_ZoomIn: number
export const KEY_ZoomOut: number
export const KEY_Zstroke: number
export const KEY_a: number
export const KEY_aacute: number
export const KEY_abelowdot: number
export const KEY_abovedot: number
export const KEY_abreve: number
export const KEY_abreveacute: number
export const KEY_abrevebelowdot: number
export const KEY_abrevegrave: number
export const KEY_abrevehook: number
export const KEY_abrevetilde: number
export const KEY_acircumflex: number
export const KEY_acircumflexacute: number
export const KEY_acircumflexbelowdot: number
export const KEY_acircumflexgrave: number
export const KEY_acircumflexhook: number
export const KEY_acircumflextilde: number
export const KEY_acute: number
export const KEY_adiaeresis: number
export const KEY_ae: number
export const KEY_agrave: number
export const KEY_ahook: number
export const KEY_amacron: number
export const KEY_ampersand: number
export const KEY_aogonek: number
export const KEY_apostrophe: number
export const KEY_approxeq: number
export const KEY_approximate: number
export const KEY_aring: number
export const KEY_asciicircum: number
export const KEY_asciitilde: number
export const KEY_asterisk: number
export const KEY_at: number
export const KEY_atilde: number
export const KEY_b: number
export const KEY_babovedot: number
export const KEY_backslash: number
export const KEY_ballotcross: number
export const KEY_bar: number
export const KEY_because: number
export const KEY_blank: number
export const KEY_botintegral: number
export const KEY_botleftparens: number
export const KEY_botleftsqbracket: number
export const KEY_botleftsummation: number
export const KEY_botrightparens: number
export const KEY_botrightsqbracket: number
export const KEY_botrightsummation: number
export const KEY_bott: number
export const KEY_botvertsummationconnector: number
export const KEY_braceleft: number
export const KEY_braceright: number
export const KEY_bracketleft: number
export const KEY_bracketright: number
export const KEY_braille_blank: number
export const KEY_braille_dot_1: number
export const KEY_braille_dot_10: number
export const KEY_braille_dot_2: number
export const KEY_braille_dot_3: number
export const KEY_braille_dot_4: number
export const KEY_braille_dot_5: number
export const KEY_braille_dot_6: number
export const KEY_braille_dot_7: number
export const KEY_braille_dot_8: number
export const KEY_braille_dot_9: number
export const KEY_braille_dots_1: number
export const KEY_braille_dots_12: number
export const KEY_braille_dots_123: number
export const KEY_braille_dots_1234: number
export const KEY_braille_dots_12345: number
export const KEY_braille_dots_123456: number
export const KEY_braille_dots_1234567: number
export const KEY_braille_dots_12345678: number
export const KEY_braille_dots_1234568: number
export const KEY_braille_dots_123457: number
export const KEY_braille_dots_1234578: number
export const KEY_braille_dots_123458: number
export const KEY_braille_dots_12346: number
export const KEY_braille_dots_123467: number
export const KEY_braille_dots_1234678: number
export const KEY_braille_dots_123468: number
export const KEY_braille_dots_12347: number
export const KEY_braille_dots_123478: number
export const KEY_braille_dots_12348: number
export const KEY_braille_dots_1235: number
export const KEY_braille_dots_12356: number
export const KEY_braille_dots_123567: number
export const KEY_braille_dots_1235678: number
export const KEY_braille_dots_123568: number
export const KEY_braille_dots_12357: number
export const KEY_braille_dots_123578: number
export const KEY_braille_dots_12358: number
export const KEY_braille_dots_1236: number
export const KEY_braille_dots_12367: number
export const KEY_braille_dots_123678: number
export const KEY_braille_dots_12368: number
export const KEY_braille_dots_1237: number
export const KEY_braille_dots_12378: number
export const KEY_braille_dots_1238: number
export const KEY_braille_dots_124: number
export const KEY_braille_dots_1245: number
export const KEY_braille_dots_12456: number
export const KEY_braille_dots_124567: number
export const KEY_braille_dots_1245678: number
export const KEY_braille_dots_124568: number
export const KEY_braille_dots_12457: number
export const KEY_braille_dots_124578: number
export const KEY_braille_dots_12458: number
export const KEY_braille_dots_1246: number
export const KEY_braille_dots_12467: number
export const KEY_braille_dots_124678: number
export const KEY_braille_dots_12468: number
export const KEY_braille_dots_1247: number
export const KEY_braille_dots_12478: number
export const KEY_braille_dots_1248: number
export const KEY_braille_dots_125: number
export const KEY_braille_dots_1256: number
export const KEY_braille_dots_12567: number
export const KEY_braille_dots_125678: number
export const KEY_braille_dots_12568: number
export const KEY_braille_dots_1257: number
export const KEY_braille_dots_12578: number
export const KEY_braille_dots_1258: number
export const KEY_braille_dots_126: number
export const KEY_braille_dots_1267: number
export const KEY_braille_dots_12678: number
export const KEY_braille_dots_1268: number
export const KEY_braille_dots_127: number
export const KEY_braille_dots_1278: number
export const KEY_braille_dots_128: number
export const KEY_braille_dots_13: number
export const KEY_braille_dots_134: number
export const KEY_braille_dots_1345: number
export const KEY_braille_dots_13456: number
export const KEY_braille_dots_134567: number
export const KEY_braille_dots_1345678: number
export const KEY_braille_dots_134568: number
export const KEY_braille_dots_13457: number
export const KEY_braille_dots_134578: number
export const KEY_braille_dots_13458: number
export const KEY_braille_dots_1346: number
export const KEY_braille_dots_13467: number
export const KEY_braille_dots_134678: number
export const KEY_braille_dots_13468: number
export const KEY_braille_dots_1347: number
export const KEY_braille_dots_13478: number
export const KEY_braille_dots_1348: number
export const KEY_braille_dots_135: number
export const KEY_braille_dots_1356: number
export const KEY_braille_dots_13567: number
export const KEY_braille_dots_135678: number
export const KEY_braille_dots_13568: number
export const KEY_braille_dots_1357: number
export const KEY_braille_dots_13578: number
export const KEY_braille_dots_1358: number
export const KEY_braille_dots_136: number
export const KEY_braille_dots_1367: number
export const KEY_braille_dots_13678: number
export const KEY_braille_dots_1368: number
export const KEY_braille_dots_137: number
export const KEY_braille_dots_1378: number
export const KEY_braille_dots_138: number
export const KEY_braille_dots_14: number
export const KEY_braille_dots_145: number
export const KEY_braille_dots_1456: number
export const KEY_braille_dots_14567: number
export const KEY_braille_dots_145678: number
export const KEY_braille_dots_14568: number
export const KEY_braille_dots_1457: number
export const KEY_braille_dots_14578: number
export const KEY_braille_dots_1458: number
export const KEY_braille_dots_146: number
export const KEY_braille_dots_1467: number
export const KEY_braille_dots_14678: number
export const KEY_braille_dots_1468: number
export const KEY_braille_dots_147: number
export const KEY_braille_dots_1478: number
export const KEY_braille_dots_148: number
export const KEY_braille_dots_15: number
export const KEY_braille_dots_156: number
export const KEY_braille_dots_1567: number
export const KEY_braille_dots_15678: number
export const KEY_braille_dots_1568: number
export const KEY_braille_dots_157: number
export const KEY_braille_dots_1578: number
export const KEY_braille_dots_158: number
export const KEY_braille_dots_16: number
export const KEY_braille_dots_167: number
export const KEY_braille_dots_1678: number
export const KEY_braille_dots_168: number
export const KEY_braille_dots_17: number
export const KEY_braille_dots_178: number
export const KEY_braille_dots_18: number
export const KEY_braille_dots_2: number
export const KEY_braille_dots_23: number
export const KEY_braille_dots_234: number
export const KEY_braille_dots_2345: number
export const KEY_braille_dots_23456: number
export const KEY_braille_dots_234567: number
export const KEY_braille_dots_2345678: number
export const KEY_braille_dots_234568: number
export const KEY_braille_dots_23457: number
export const KEY_braille_dots_234578: number
export const KEY_braille_dots_23458: number
export const KEY_braille_dots_2346: number
export const KEY_braille_dots_23467: number
export const KEY_braille_dots_234678: number
export const KEY_braille_dots_23468: number
export const KEY_braille_dots_2347: number
export const KEY_braille_dots_23478: number
export const KEY_braille_dots_2348: number
export const KEY_braille_dots_235: number
export const KEY_braille_dots_2356: number
export const KEY_braille_dots_23567: number
export const KEY_braille_dots_235678: number
export const KEY_braille_dots_23568: number
export const KEY_braille_dots_2357: number
export const KEY_braille_dots_23578: number
export const KEY_braille_dots_2358: number
export const KEY_braille_dots_236: number
export const KEY_braille_dots_2367: number
export const KEY_braille_dots_23678: number
export const KEY_braille_dots_2368: number
export const KEY_braille_dots_237: number
export const KEY_braille_dots_2378: number
export const KEY_braille_dots_238: number
export const KEY_braille_dots_24: number
export const KEY_braille_dots_245: number
export const KEY_braille_dots_2456: number
export const KEY_braille_dots_24567: number
export const KEY_braille_dots_245678: number
export const KEY_braille_dots_24568: number
export const KEY_braille_dots_2457: number
export const KEY_braille_dots_24578: number
export const KEY_braille_dots_2458: number
export const KEY_braille_dots_246: number
export const KEY_braille_dots_2467: number
export const KEY_braille_dots_24678: number
export const KEY_braille_dots_2468: number
export const KEY_braille_dots_247: number
export const KEY_braille_dots_2478: number
export const KEY_braille_dots_248: number
export const KEY_braille_dots_25: number
export const KEY_braille_dots_256: number
export const KEY_braille_dots_2567: number
export const KEY_braille_dots_25678: number
export const KEY_braille_dots_2568: number
export const KEY_braille_dots_257: number
export const KEY_braille_dots_2578: number
export const KEY_braille_dots_258: number
export const KEY_braille_dots_26: number
export const KEY_braille_dots_267: number
export const KEY_braille_dots_2678: number
export const KEY_braille_dots_268: number
export const KEY_braille_dots_27: number
export const KEY_braille_dots_278: number
export const KEY_braille_dots_28: number
export const KEY_braille_dots_3: number
export const KEY_braille_dots_34: number
export const KEY_braille_dots_345: number
export const KEY_braille_dots_3456: number
export const KEY_braille_dots_34567: number
export const KEY_braille_dots_345678: number
export const KEY_braille_dots_34568: number
export const KEY_braille_dots_3457: number
export const KEY_braille_dots_34578: number
export const KEY_braille_dots_3458: number
export const KEY_braille_dots_346: number
export const KEY_braille_dots_3467: number
export const KEY_braille_dots_34678: number
export const KEY_braille_dots_3468: number
export const KEY_braille_dots_347: number
export const KEY_braille_dots_3478: number
export const KEY_braille_dots_348: number
export const KEY_braille_dots_35: number
export const KEY_braille_dots_356: number
export const KEY_braille_dots_3567: number
export const KEY_braille_dots_35678: number
export const KEY_braille_dots_3568: number
export const KEY_braille_dots_357: number
export const KEY_braille_dots_3578: number
export const KEY_braille_dots_358: number
export const KEY_braille_dots_36: number
export const KEY_braille_dots_367: number
export const KEY_braille_dots_3678: number
export const KEY_braille_dots_368: number
export const KEY_braille_dots_37: number
export const KEY_braille_dots_378: number
export const KEY_braille_dots_38: number
export const KEY_braille_dots_4: number
export const KEY_braille_dots_45: number
export const KEY_braille_dots_456: number
export const KEY_braille_dots_4567: number
export const KEY_braille_dots_45678: number
export const KEY_braille_dots_4568: number
export const KEY_braille_dots_457: number
export const KEY_braille_dots_4578: number
export const KEY_braille_dots_458: number
export const KEY_braille_dots_46: number
export const KEY_braille_dots_467: number
export const KEY_braille_dots_4678: number
export const KEY_braille_dots_468: number
export const KEY_braille_dots_47: number
export const KEY_braille_dots_478: number
export const KEY_braille_dots_48: number
export const KEY_braille_dots_5: number
export const KEY_braille_dots_56: number
export const KEY_braille_dots_567: number
export const KEY_braille_dots_5678: number
export const KEY_braille_dots_568: number
export const KEY_braille_dots_57: number
export const KEY_braille_dots_578: number
export const KEY_braille_dots_58: number
export const KEY_braille_dots_6: number
export const KEY_braille_dots_67: number
export const KEY_braille_dots_678: number
export const KEY_braille_dots_68: number
export const KEY_braille_dots_7: number
export const KEY_braille_dots_78: number
export const KEY_braille_dots_8: number
export const KEY_breve: number
export const KEY_brokenbar: number
export const KEY_c: number
export const KEY_cabovedot: number
export const KEY_cacute: number
export const KEY_careof: number
export const KEY_caret: number
export const KEY_caron: number
export const KEY_ccaron: number
export const KEY_ccedilla: number
export const KEY_ccircumflex: number
export const KEY_cedilla: number
export const KEY_cent: number
export const KEY_checkerboard: number
export const KEY_checkmark: number
export const KEY_circle: number
export const KEY_club: number
export const KEY_colon: number
export const KEY_comma: number
export const KEY_containsas: number
export const KEY_copyright: number
export const KEY_cr: number
export const KEY_crossinglines: number
export const KEY_cuberoot: number
export const KEY_currency: number
export const KEY_cursor: number
export const KEY_d: number
export const KEY_dabovedot: number
export const KEY_dagger: number
export const KEY_dcaron: number
export const KEY_dead_A: number
export const KEY_dead_E: number
export const KEY_dead_I: number
export const KEY_dead_O: number
export const KEY_dead_U: number
export const KEY_dead_a: number
export const KEY_dead_abovecomma: number
export const KEY_dead_abovedot: number
export const KEY_dead_abovereversedcomma: number
export const KEY_dead_abovering: number
export const KEY_dead_acute: number
export const KEY_dead_belowbreve: number
export const KEY_dead_belowcircumflex: number
export const KEY_dead_belowcomma: number
export const KEY_dead_belowdiaeresis: number
export const KEY_dead_belowdot: number
export const KEY_dead_belowmacron: number
export const KEY_dead_belowring: number
export const KEY_dead_belowtilde: number
export const KEY_dead_breve: number
export const KEY_dead_capital_schwa: number
export const KEY_dead_caron: number
export const KEY_dead_cedilla: number
export const KEY_dead_circumflex: number
export const KEY_dead_currency: number
export const KEY_dead_dasia: number
export const KEY_dead_diaeresis: number
export const KEY_dead_doubleacute: number
export const KEY_dead_doublegrave: number
export const KEY_dead_e: number
export const KEY_dead_grave: number
export const KEY_dead_hook: number
export const KEY_dead_horn: number
export const KEY_dead_i: number
export const KEY_dead_invertedbreve: number
export const KEY_dead_iota: number
export const KEY_dead_macron: number
export const KEY_dead_o: number
export const KEY_dead_ogonek: number
export const KEY_dead_perispomeni: number
export const KEY_dead_psili: number
export const KEY_dead_semivoiced_sound: number
export const KEY_dead_small_schwa: number
export const KEY_dead_stroke: number
export const KEY_dead_tilde: number
export const KEY_dead_u: number
export const KEY_dead_voiced_sound: number
export const KEY_decimalpoint: number
export const KEY_degree: number
export const KEY_diaeresis: number
export const KEY_diamond: number
export const KEY_digitspace: number
export const KEY_dintegral: number
export const KEY_division: number
export const KEY_dollar: number
export const KEY_doubbaselinedot: number
export const KEY_doubleacute: number
export const KEY_doubledagger: number
export const KEY_doublelowquotemark: number
export const KEY_downarrow: number
export const KEY_downcaret: number
export const KEY_downshoe: number
export const KEY_downstile: number
export const KEY_downtack: number
export const KEY_dstroke: number
export const KEY_e: number
export const KEY_eabovedot: number
export const KEY_eacute: number
export const KEY_ebelowdot: number
export const KEY_ecaron: number
export const KEY_ecircumflex: number
export const KEY_ecircumflexacute: number
export const KEY_ecircumflexbelowdot: number
export const KEY_ecircumflexgrave: number
export const KEY_ecircumflexhook: number
export const KEY_ecircumflextilde: number
export const KEY_ediaeresis: number
export const KEY_egrave: number
export const KEY_ehook: number
export const KEY_eightsubscript: number
export const KEY_eightsuperior: number
export const KEY_elementof: number
export const KEY_ellipsis: number
export const KEY_em3space: number
export const KEY_em4space: number
export const KEY_emacron: number
export const KEY_emdash: number
export const KEY_emfilledcircle: number
export const KEY_emfilledrect: number
export const KEY_emopencircle: number
export const KEY_emopenrectangle: number
export const KEY_emptyset: number
export const KEY_emspace: number
export const KEY_endash: number
export const KEY_enfilledcircbullet: number
export const KEY_enfilledsqbullet: number
export const KEY_eng: number
export const KEY_enopencircbullet: number
export const KEY_enopensquarebullet: number
export const KEY_enspace: number
export const KEY_eogonek: number
export const KEY_equal: number
export const KEY_eth: number
export const KEY_etilde: number
export const KEY_exclam: number
export const KEY_exclamdown: number
export const KEY_f: number
export const KEY_fabovedot: number
export const KEY_femalesymbol: number
export const KEY_ff: number
export const KEY_figdash: number
export const KEY_filledlefttribullet: number
export const KEY_filledrectbullet: number
export const KEY_filledrighttribullet: number
export const KEY_filledtribulletdown: number
export const KEY_filledtribulletup: number
export const KEY_fiveeighths: number
export const KEY_fivesixths: number
export const KEY_fivesubscript: number
export const KEY_fivesuperior: number
export const KEY_fourfifths: number
export const KEY_foursubscript: number
export const KEY_foursuperior: number
export const KEY_fourthroot: number
export const KEY_function: number
export const KEY_g: number
export const KEY_gabovedot: number
export const KEY_gbreve: number
export const KEY_gcaron: number
export const KEY_gcedilla: number
export const KEY_gcircumflex: number
export const KEY_grave: number
export const KEY_greater: number
export const KEY_greaterthanequal: number
export const KEY_guillemotleft: number
export const KEY_guillemotright: number
export const KEY_h: number
export const KEY_hairspace: number
export const KEY_hcircumflex: number
export const KEY_heart: number
export const KEY_hebrew_aleph: number
export const KEY_hebrew_ayin: number
export const KEY_hebrew_bet: number
export const KEY_hebrew_beth: number
export const KEY_hebrew_chet: number
export const KEY_hebrew_dalet: number
export const KEY_hebrew_daleth: number
export const KEY_hebrew_doublelowline: number
export const KEY_hebrew_finalkaph: number
export const KEY_hebrew_finalmem: number
export const KEY_hebrew_finalnun: number
export const KEY_hebrew_finalpe: number
export const KEY_hebrew_finalzade: number
export const KEY_hebrew_finalzadi: number
export const KEY_hebrew_gimel: number
export const KEY_hebrew_gimmel: number
export const KEY_hebrew_he: number
export const KEY_hebrew_het: number
export const KEY_hebrew_kaph: number
export const KEY_hebrew_kuf: number
export const KEY_hebrew_lamed: number
export const KEY_hebrew_mem: number
export const KEY_hebrew_nun: number
export const KEY_hebrew_pe: number
export const KEY_hebrew_qoph: number
export const KEY_hebrew_resh: number
export const KEY_hebrew_samech: number
export const KEY_hebrew_samekh: number
export const KEY_hebrew_shin: number
export const KEY_hebrew_taf: number
export const KEY_hebrew_taw: number
export const KEY_hebrew_tet: number
export const KEY_hebrew_teth: number
export const KEY_hebrew_waw: number
export const KEY_hebrew_yod: number
export const KEY_hebrew_zade: number
export const KEY_hebrew_zadi: number
export const KEY_hebrew_zain: number
export const KEY_hebrew_zayin: number
export const KEY_hexagram: number
export const KEY_horizconnector: number
export const KEY_horizlinescan1: number
export const KEY_horizlinescan3: number
export const KEY_horizlinescan5: number
export const KEY_horizlinescan7: number
export const KEY_horizlinescan9: number
export const KEY_hstroke: number
export const KEY_ht: number
export const KEY_hyphen: number
export const KEY_i: number
export const KEY_iTouch: number
export const KEY_iacute: number
export const KEY_ibelowdot: number
export const KEY_ibreve: number
export const KEY_icircumflex: number
export const KEY_identical: number
export const KEY_idiaeresis: number
export const KEY_idotless: number
export const KEY_ifonlyif: number
export const KEY_igrave: number
export const KEY_ihook: number
export const KEY_imacron: number
export const KEY_implies: number
export const KEY_includedin: number
export const KEY_includes: number
export const KEY_infinity: number
export const KEY_integral: number
export const KEY_intersection: number
export const KEY_iogonek: number
export const KEY_itilde: number
export const KEY_j: number
export const KEY_jcircumflex: number
export const KEY_jot: number
export const KEY_k: number
export const KEY_kana_A: number
export const KEY_kana_CHI: number
export const KEY_kana_E: number
export const KEY_kana_FU: number
export const KEY_kana_HA: number
export const KEY_kana_HE: number
export const KEY_kana_HI: number
export const KEY_kana_HO: number
export const KEY_kana_HU: number
export const KEY_kana_I: number
export const KEY_kana_KA: number
export const KEY_kana_KE: number
export const KEY_kana_KI: number
export const KEY_kana_KO: number
export const KEY_kana_KU: number
export const KEY_kana_MA: number
export const KEY_kana_ME: number
export const KEY_kana_MI: number
export const KEY_kana_MO: number
export const KEY_kana_MU: number
export const KEY_kana_N: number
export const KEY_kana_NA: number
export const KEY_kana_NE: number
export const KEY_kana_NI: number
export const KEY_kana_NO: number
export const KEY_kana_NU: number
export const KEY_kana_O: number
export const KEY_kana_RA: number
export const KEY_kana_RE: number
export const KEY_kana_RI: number
export const KEY_kana_RO: number
export const KEY_kana_RU: number
export const KEY_kana_SA: number
export const KEY_kana_SE: number
export const KEY_kana_SHI: number
export const KEY_kana_SO: number
export const KEY_kana_SU: number
export const KEY_kana_TA: number
export const KEY_kana_TE: number
export const KEY_kana_TI: number
export const KEY_kana_TO: number
export const KEY_kana_TSU: number
export const KEY_kana_TU: number
export const KEY_kana_U: number
export const KEY_kana_WA: number
export const KEY_kana_WO: number
export const KEY_kana_YA: number
export const KEY_kana_YO: number
export const KEY_kana_YU: number
export const KEY_kana_a: number
export const KEY_kana_closingbracket: number
export const KEY_kana_comma: number
export const KEY_kana_conjunctive: number
export const KEY_kana_e: number
export const KEY_kana_fullstop: number
export const KEY_kana_i: number
export const KEY_kana_middledot: number
export const KEY_kana_o: number
export const KEY_kana_openingbracket: number
export const KEY_kana_switch: number
export const KEY_kana_tsu: number
export const KEY_kana_tu: number
export const KEY_kana_u: number
export const KEY_kana_ya: number
export const KEY_kana_yo: number
export const KEY_kana_yu: number
export const KEY_kappa: number
export const KEY_kcedilla: number
export const KEY_kra: number
export const KEY_l: number
export const KEY_lacute: number
export const KEY_latincross: number
export const KEY_lbelowdot: number
export const KEY_lcaron: number
export const KEY_lcedilla: number
export const KEY_leftanglebracket: number
export const KEY_leftarrow: number
export const KEY_leftcaret: number
export const KEY_leftdoublequotemark: number
export const KEY_leftmiddlecurlybrace: number
export const KEY_leftopentriangle: number
export const KEY_leftpointer: number
export const KEY_leftradical: number
export const KEY_leftshoe: number
export const KEY_leftsinglequotemark: number
export const KEY_leftt: number
export const KEY_lefttack: number
export const KEY_less: number
export const KEY_lessthanequal: number
export const KEY_lf: number
export const KEY_logicaland: number
export const KEY_logicalor: number
export const KEY_lowleftcorner: number
export const KEY_lowrightcorner: number
export const KEY_lstroke: number
export const KEY_m: number
export const KEY_mabovedot: number
export const KEY_macron: number
export const KEY_malesymbol: number
export const KEY_maltesecross: number
export const KEY_marker: number
export const KEY_masculine: number
export const KEY_minus: number
export const KEY_minutes: number
export const KEY_mu: number
export const KEY_multiply: number
export const KEY_musicalflat: number
export const KEY_musicalsharp: number
export const KEY_n: number
export const KEY_nabla: number
export const KEY_nacute: number
export const KEY_ncaron: number
export const KEY_ncedilla: number
export const KEY_ninesubscript: number
export const KEY_ninesuperior: number
export const KEY_nl: number
export const KEY_nobreakspace: number
export const KEY_notapproxeq: number
export const KEY_notelementof: number
export const KEY_notequal: number
export const KEY_notidentical: number
export const KEY_notsign: number
export const KEY_ntilde: number
export const KEY_numbersign: number
export const KEY_numerosign: number
export const KEY_o: number
export const KEY_oacute: number
export const KEY_obarred: number
export const KEY_obelowdot: number
export const KEY_ocaron: number
export const KEY_ocircumflex: number
export const KEY_ocircumflexacute: number
export const KEY_ocircumflexbelowdot: number
export const KEY_ocircumflexgrave: number
export const KEY_ocircumflexhook: number
export const KEY_ocircumflextilde: number
export const KEY_odiaeresis: number
export const KEY_odoubleacute: number
export const KEY_oe: number
export const KEY_ogonek: number
export const KEY_ograve: number
export const KEY_ohook: number
export const KEY_ohorn: number
export const KEY_ohornacute: number
export const KEY_ohornbelowdot: number
export const KEY_ohorngrave: number
export const KEY_ohornhook: number
export const KEY_ohorntilde: number
export const KEY_omacron: number
export const KEY_oneeighth: number
export const KEY_onefifth: number
export const KEY_onehalf: number
export const KEY_onequarter: number
export const KEY_onesixth: number
export const KEY_onesubscript: number
export const KEY_onesuperior: number
export const KEY_onethird: number
export const KEY_ooblique: number
export const KEY_openrectbullet: number
export const KEY_openstar: number
export const KEY_opentribulletdown: number
export const KEY_opentribulletup: number
export const KEY_ordfeminine: number
export const KEY_oslash: number
export const KEY_otilde: number
export const KEY_overbar: number
export const KEY_overline: number
export const KEY_p: number
export const KEY_pabovedot: number
export const KEY_paragraph: number
export const KEY_parenleft: number
export const KEY_parenright: number
export const KEY_partdifferential: number
export const KEY_partialderivative: number
export const KEY_percent: number
export const KEY_period: number
export const KEY_periodcentered: number
export const KEY_phonographcopyright: number
export const KEY_plus: number
export const KEY_plusminus: number
export const KEY_prescription: number
export const KEY_prolongedsound: number
export const KEY_punctspace: number
export const KEY_q: number
export const KEY_quad: number
export const KEY_question: number
export const KEY_questiondown: number
export const KEY_quotedbl: number
export const KEY_quoteleft: number
export const KEY_quoteright: number
export const KEY_r: number
export const KEY_racute: number
export const KEY_radical: number
export const KEY_rcaron: number
export const KEY_rcedilla: number
export const KEY_registered: number
export const KEY_rightanglebracket: number
export const KEY_rightarrow: number
export const KEY_rightcaret: number
export const KEY_rightdoublequotemark: number
export const KEY_rightmiddlecurlybrace: number
export const KEY_rightmiddlesummation: number
export const KEY_rightopentriangle: number
export const KEY_rightpointer: number
export const KEY_rightshoe: number
export const KEY_rightsinglequotemark: number
export const KEY_rightt: number
export const KEY_righttack: number
export const KEY_s: number
export const KEY_sabovedot: number
export const KEY_sacute: number
export const KEY_scaron: number
export const KEY_scedilla: number
export const KEY_schwa: number
export const KEY_scircumflex: number
export const KEY_script_switch: number
export const KEY_seconds: number
export const KEY_section: number
export const KEY_semicolon: number
export const KEY_semivoicedsound: number
export const KEY_seveneighths: number
export const KEY_sevensubscript: number
export const KEY_sevensuperior: number
export const KEY_signaturemark: number
export const KEY_signifblank: number
export const KEY_similarequal: number
export const KEY_singlelowquotemark: number
export const KEY_sixsubscript: number
export const KEY_sixsuperior: number
export const KEY_slash: number
export const KEY_soliddiamond: number
export const KEY_space: number
export const KEY_squareroot: number
export const KEY_ssharp: number
export const KEY_sterling: number
export const KEY_stricteq: number
export const KEY_t: number
export const KEY_tabovedot: number
export const KEY_tcaron: number
export const KEY_tcedilla: number
export const KEY_telephone: number
export const KEY_telephonerecorder: number
export const KEY_therefore: number
export const KEY_thinspace: number
export const KEY_thorn: number
export const KEY_threeeighths: number
export const KEY_threefifths: number
export const KEY_threequarters: number
export const KEY_threesubscript: number
export const KEY_threesuperior: number
export const KEY_tintegral: number
export const KEY_topintegral: number
export const KEY_topleftparens: number
export const KEY_topleftradical: number
export const KEY_topleftsqbracket: number
export const KEY_topleftsummation: number
export const KEY_toprightparens: number
export const KEY_toprightsqbracket: number
export const KEY_toprightsummation: number
export const KEY_topt: number
export const KEY_topvertsummationconnector: number
export const KEY_trademark: number
export const KEY_trademarkincircle: number
export const KEY_tslash: number
export const KEY_twofifths: number
export const KEY_twosubscript: number
export const KEY_twosuperior: number
export const KEY_twothirds: number
export const KEY_u: number
export const KEY_uacute: number
export const KEY_ubelowdot: number
export const KEY_ubreve: number
export const KEY_ucircumflex: number
export const KEY_udiaeresis: number
export const KEY_udoubleacute: number
export const KEY_ugrave: number
export const KEY_uhook: number
export const KEY_uhorn: number
export const KEY_uhornacute: number
export const KEY_uhornbelowdot: number
export const KEY_uhorngrave: number
export const KEY_uhornhook: number
export const KEY_uhorntilde: number
export const KEY_umacron: number
export const KEY_underbar: number
export const KEY_underscore: number
export const KEY_union: number
export const KEY_uogonek: number
export const KEY_uparrow: number
export const KEY_upcaret: number
export const KEY_upleftcorner: number
export const KEY_uprightcorner: number
export const KEY_upshoe: number
export const KEY_upstile: number
export const KEY_uptack: number
export const KEY_uring: number
export const KEY_utilde: number
export const KEY_v: number
export const KEY_variation: number
export const KEY_vertbar: number
export const KEY_vertconnector: number
export const KEY_voicedsound: number
export const KEY_vt: number
export const KEY_w: number
export const KEY_wacute: number
export const KEY_wcircumflex: number
export const KEY_wdiaeresis: number
export const KEY_wgrave: number
export const KEY_x: number
export const KEY_xabovedot: number
export const KEY_y: number
export const KEY_yacute: number
export const KEY_ybelowdot: number
export const KEY_ycircumflex: number
export const KEY_ydiaeresis: number
export const KEY_yen: number
export const KEY_ygrave: number
export const KEY_yhook: number
export const KEY_ytilde: number
export const KEY_z: number
export const KEY_zabovedot: number
export const KEY_zacute: number
export const KEY_zcaron: number
export const KEY_zerosubscript: number
export const KEY_zerosuperior: number
export const KEY_zstroke: number
export const MAX_TIMECOORD_AXES: number
export const NO_BG: Pixmap
export const PARENT_RELATIVE: number
export const PARENT_RELATIVE_BG: Pixmap
export const PRIORITY_REDRAW: number
export function add_option_entries_libgtk_only(group: GLib.OptionGroup): void
export function beep(): void
export function cairo_create(drawable: Drawable): cairo.Context
export function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void
export function cairo_region(cr: cairo.Context, region: Region): void
export function cairo_reset_clip(cr: cairo.Context, drawable: Drawable): void
export function cairo_set_source_color(cr: cairo.Context, color: Color): void
export function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void
export function cairo_set_source_pixmap(cr: cairo.Context, pixmap: Pixmap, pixmap_x: number, pixmap_y: number): void
export function cairo_set_source_window(cr: cairo.Context, window: Window, x: number, y: number): void
export function char_height(font: Font, character: number): number
export function char_measure(font: Font, character: number): number
export function char_width(font: Font, character: number): number
export function char_width_wc(font: Font, character: WChar): number
export function color_alloc(colormap: Colormap, color: Color): number
export function color_black(colormap: Colormap, color: Color): number
export function color_change(colormap: Colormap, color: Color): number
export function color_parse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
export function color_white(colormap: Colormap, color: Color): number
export function colors_alloc(colormap: Colormap, contiguous: boolean, planes: number, nplanes: number, pixels: number, npixels: number): number
export function colors_free(colormap: Colormap, pixels: number, npixels: number, planes: number): void
export function colors_store(colormap: Colormap, colors: Color, ncolors: number): void
export function devices_list(): Device[]
export function drag_abort(context: DragContext, time_: number): void
export function drag_drop(context: DragContext, time_: number): void
export function drag_drop_succeeded(context: DragContext): boolean
export function drag_find_window(context: DragContext, drag_window: Window, x_root: number, y_root: number): [ /* dest_window */ Window, /* protocol */ DragProtocol ]
export function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number): [ /* dest_window */ Window, /* protocol */ DragProtocol ]
export function drag_get_protocol(xid: NativeWindow, protocol: DragProtocol): NativeWindow
export function drag_get_protocol_for_display(display: Display, xid: NativeWindow, protocol: DragProtocol): NativeWindow
export function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: number): boolean
export function drag_status(context: DragContext, action: DragAction, time_: number): void
export function draw_arc(drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
export function draw_drawable(drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
export function draw_glyphs(drawable: Drawable, gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
export function draw_glyphs_transformed(drawable: Drawable, gc: GC, matrix: Pango.Matrix | null, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
export function draw_gray_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number): void
export function draw_image(drawable: Drawable, gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
export function draw_indexed_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number, cmap: RgbCmap): void
export function draw_layout(drawable: Drawable, gc: GC, x: number, y: number, layout: Pango.Layout): void
export function draw_layout_line(drawable: Drawable, gc: GC, x: number, y: number, line: Pango.LayoutLine): void
export function draw_layout_line_with_colors(drawable: Drawable, gc: GC, x: number, y: number, line: Pango.LayoutLine, foreground?: Color | null, background?: Color | null): void
export function draw_layout_with_colors(drawable: Drawable, gc: GC, x: number, y: number, layout: Pango.Layout, foreground?: Color | null, background?: Color | null): void
export function draw_line(drawable: Drawable, gc: GC, x1_: number, y1_: number, x2_: number, y2_: number): void
export function draw_lines(drawable: Drawable, gc: GC, points: Point, n_points: number): void
export function draw_pixbuf(drawable: Drawable, gc: GC | null, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
export function draw_point(drawable: Drawable, gc: GC, x: number, y: number): void
export function draw_points(drawable: Drawable, gc: GC, points: Point, n_points: number): void
export function draw_polygon(drawable: Drawable, gc: GC, filled: boolean, points: Point, n_points: number): void
export function draw_rectangle(drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
export function draw_rgb_32_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number): void
export function draw_rgb_32_image_dithalign(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number, xdith: number, ydith: number): void
export function draw_rgb_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, rgb_buf: number, rowstride: number): void
export function draw_rgb_image_dithalign(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, rgb_buf: number, rowstride: number, xdith: number, ydith: number): void
export function draw_segments(drawable: Drawable, gc: GC, segs: Segment, n_segs: number): void
export function draw_string(drawable: Drawable, font: Font, gc: GC, x: number, y: number, string: string): void
export function draw_text(drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void
export function draw_text_wc(drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
export function draw_trapezoids(drawable: Drawable, gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
export function drop_finish(context: DragContext, success: boolean, time_: number): void
export function drop_reply(context: DragContext, ok: boolean, time_: number): void
export function error_trap_pop(): number
export function error_trap_push(): void
export function event_get(): Event
export function event_get_graphics_expose(window: Window): Event
export function event_handler_set(func: EventFunc): void
export function event_peek(): Event
export function event_request_motions(event: EventMotion): void
export function event_send_client_message_for_display(display: Display, event: Event, winid: NativeWindow): boolean
export function events_pending(): boolean
export function exit(error_code: number): void
export function flush(): void
export function font_from_description(font_desc: Pango.FontDescription): Font
export function font_from_description_for_display(display: Display, font_desc: Pango.FontDescription): Font
export function font_load(font_name: string): Font
export function font_load_for_display(display: Display, font_name: string): Font
export function fontset_load(fontset_name: string): Font
export function fontset_load_for_display(display: Display, fontset_name: string): Font
export function free_compound_text(ctext: number): void
export function free_text_list(list: string): void
export function get_display(): string
export function get_display_arg_name(): string
export function get_program_class(): string
export function get_show_events(): boolean
export function get_use_xshm(): boolean
export function init(argv: string[]): /* argv */ string[]
export function init_check(argv: string[]): [ /* returnType */ boolean, /* argv */ string[] ]
export function input_add_full(source: number, condition: InputCondition, function_: InputFunction): number
export function input_remove(tag: number): void
export function input_set_extension_events(window: Window, mask: number, mode: ExtensionMode): void
export function keyboard_grab(window: Window, owner_events: boolean, time_: number): GrabStatus
export function keyboard_grab_info_libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean
export function keyboard_ungrab(time_: number): void
export function keyval_convert_case(symbol: number): [ /* lower */ number, /* upper */ number ]
export function keyval_from_name(keyval_name: string): number
export function keyval_is_lower(keyval: number): boolean
export function keyval_is_upper(keyval: number): boolean
export function keyval_name(keyval: number): string
export function keyval_to_lower(keyval: number): number
export function keyval_to_unicode(keyval: number): number
export function keyval_to_upper(keyval: number): number
export function list_visuals(): Visual[]
export function mbstowcs(dest: WChar, src: string, dest_max: number): number
export function notify_startup_complete(): void
export function notify_startup_complete_with_id(startup_id: string): void
export function offscreen_window_set_embedder(window: Window, embedder: Window): void
export function pango_attr_emboss_color_new(color: Color): Pango.Attribute
export function pango_attr_embossed_new(embossed: boolean): Pango.Attribute
export function pango_attr_stipple_new(stipple: Bitmap): Pango.Attribute
export function pango_context_set_colormap(context: Pango.Context, colormap: Colormap): void
export function parse_args(argv: string[]): /* argv */ string[]
export function pixbuf_render_pixmap_and_mask(pixbuf: GdkPixbuf.Pixbuf, pixmap_return: Pixmap, mask_return: Bitmap, alpha_threshold: number): void
export function pixbuf_render_pixmap_and_mask_for_colormap(pixbuf: GdkPixbuf.Pixbuf, colormap: Colormap, pixmap_return: Pixmap, mask_return: Bitmap, alpha_threshold: number): void
export function pixbuf_render_threshold_alpha(pixbuf: GdkPixbuf.Pixbuf, bitmap: Bitmap, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, alpha_threshold: number): void
export function pixbuf_render_to_drawable(pixbuf: GdkPixbuf.Pixbuf, drawable: Drawable, gc: GC, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
export function pixbuf_render_to_drawable_alpha(pixbuf: GdkPixbuf.Pixbuf, drawable: Drawable, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, alpha_mode: GdkPixbuf.PixbufAlphaMode, alpha_threshold: number, dither: RgbDither, x_dither: number, y_dither: number): void
export function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window, cursor: Cursor, time_: number): GrabStatus
export function pointer_grab_info_libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean
export function pointer_is_grabbed(): boolean
export function pointer_ungrab(time_: number): void
export function pre_parse_libgtk_only(): void
export function property_change(window: Window, property: Atom, type: Atom, format: number, mode: PropMode, data: number, nelements: number): void
export function property_delete(window: Window, property: Atom): void
export function property_get(window: Window, property: Atom, type: Atom, offset: number, length: number, pdelete: number, actual_property_type: Atom, actual_format: number, actual_length: number, data: number): boolean
export function query_depths(): [ /* depths */ number[], /* count */ number ]
export function query_visual_types(visual_types: VisualType, count: number): void
export function rgb_colormap_ditherable(cmap: Colormap): boolean
export function rgb_ditherable(): boolean
export function rgb_find_color(colormap: Colormap, color: Color): void
export function rgb_gc_set_background(gc: GC, rgb: number): void
export function rgb_gc_set_foreground(gc: GC, rgb: number): void
export function rgb_get_colormap(): Colormap
export function rgb_get_visual(): Visual
export function rgb_init(): void
export function rgb_set_install(install: boolean): void
export function rgb_set_min_colors(min_colors: number): void
export function rgb_set_verbose(verbose: boolean): void
export function rgb_xpixel_from_rgb(rgb: number): number
export function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: number): void
export function selection_owner_set(owner: Window, selection: Atom, time_: number, send_event: boolean): boolean
export function selection_owner_set_for_display(display: Display, owner: Window, selection: Atom, time_: number, send_event: boolean): boolean
export function selection_property_get(requestor: Window, data: number, prop_type: Atom, prop_format: number): number
export function selection_send_notify(requestor: NativeWindow, selection: Atom, target: Atom, property: Atom, time_: number): void
export function selection_send_notify_for_display(display: Display, requestor: NativeWindow, selection: Atom, target: Atom, property: Atom, time_: number): void
export function set_double_click_time(msec: number): void
export function set_locale(): string
export function set_program_class(program_class: string): void
export function set_show_events(show_events: boolean): void
export function set_sm_client_id(sm_client_id: string): void
export function set_use_xshm(use_xshm: boolean): void
export function setting_get(name: string, value: any): boolean
export function spawn_command_line_on_screen(screen: Screen, command_line: string): boolean
export function string_extents(font: Font, string: string, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void
export function string_height(font: Font, string: string): number
export function string_measure(font: Font, string: string): number
export function string_to_compound_text(str: string, encoding: Atom, format: number, ctext: number, length: number): number
export function string_to_compound_text_for_display(display: Display, str: string, encoding: Atom, format: number, ctext: number, length: number): number
export function string_width(font: Font, string: string): number
export function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState): void
export function test_render_sync(window: Window): void
export function test_simulate_button(window: Window, x: number, y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType): boolean
export function test_simulate_key(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType): boolean
export function text_extents(font: Font, text: string, text_length: number, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void
export function text_extents_wc(font: Font, text: WChar, text_length: number, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void
export function text_height(font: Font, text: string, text_length: number): number
export function text_measure(font: Font, text: string, text_length: number): number
export function text_property_to_text_list(encoding: Atom, format: number, text: number, length: number, list: string): number
export function text_property_to_text_list_for_display(display: Display, encoding: Atom, format: number, text: number, length: number, list: string): number
export function text_property_to_utf8_list(encoding: Atom, format: number, text: number, length: number, list?: string | null): number
export function text_property_to_utf8_list_for_display(display: Display, encoding: Atom, format: number, text: number, length: number, list: string): number
export function text_width(font: Font, text: string, text_length: number): number
export function text_width_wc(font: Font, text: WChar, text_length: number): number
export function threads_add_idle_full(priority: number, function_: GLib.SourceFunc): number
export function threads_add_timeout_full(priority: number, interval: number, function_: GLib.SourceFunc): number
export function threads_add_timeout_seconds_full(priority: number, interval: number, function_: GLib.SourceFunc): number
export function threads_enter(): void
export function threads_init(): void
export function threads_leave(): void
export function unicode_to_keyval(wc: number): number
export function utf8_to_compound_text(str: string, encoding: Atom, format: number, ctext: number, length: number): boolean
export function utf8_to_compound_text_for_display(display: Display, str: string, encoding: Atom, format: number, ctext: number, length: number): boolean
export function utf8_to_string_target(str: string): string
export function wcstombs(src: WChar): string
export function window_at_pointer(): [ /* returnType */ Window, /* win_x */ number | null, /* win_y */ number | null ]
export function window_constrain_size(geometry: Geometry, flags: number, width: number, height: number): [ /* new_width */ number, /* new_height */ number ]
export function window_process_all_updates(): void
export function window_set_debug_updates(setting: boolean): void
export interface DestroyNotify {
    (data?: object | null): void
}
export interface EventFunc {
    (event: Event, data?: object | null): void
}
export interface FilterFunc {
    (xevent: XEvent, event: Event, data?: object | null): FilterReturn
}
export interface InputFunction {
    (data: object | null, source: number, condition: InputCondition): void
}
export interface SpanFunc {
    (span: Span, data?: object | null): void
}
export interface AppLaunchContext_ConstructProps extends Gio.AppLaunchContext_ConstructProps {
}
export class AppLaunchContext {
    /* Fields of Gdk.AppLaunchContext */
    parent_instance: Gio.AppLaunchContext
    priv: AppLaunchContextPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.AppLaunchContext */
    set_desktop(desktop: number): void
    set_display(display: Display): void
    set_icon(icon?: Gio.Icon | null): void
    set_icon_name(icon_name?: string | null): void
    set_screen(screen: Screen): void
    set_timestamp(timestamp: number): void
    /* Methods of Gio.AppLaunchContext */
    get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    get_environment(): string[]
    get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    launch_failed(startup_notify_id: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gio.AppLaunchContext */
    vfunc_get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfunc_get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    vfunc_launch_failed(startup_notify_id: string): void
    vfunc_launched(info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startup_notify_id: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startup_notify_id: string) => void)): number
    emit(sigName: "launch-failed", startup_notify_id: string): void
    connect(sigName: "launched", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    emit(sigName: "launched", info: Gio.AppInfo, platform_data: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppLaunchContext_ConstructProps)
    _init (config?: AppLaunchContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AppLaunchContext
    static $gtype: GObject.Type
}
export interface Colormap_ConstructProps extends GObject.Object_ConstructProps {
}
export class Colormap {
    /* Fields of Gdk.Colormap */
    size: number
    colors: Color
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Colormap */
    alloc_color(color: Color, writeable: boolean, best_match: boolean): boolean
    alloc_colors(colors: Color, n_colors: number, writeable: boolean, best_match: boolean, success: boolean): number
    change(ncolors: number): void
    free_colors(colors: Color, n_colors: number): void
    query_color(pixel: number, result: Color): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Colormap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Colormap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Colormap_ConstructProps)
    _init (config?: Colormap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(visual: Visual, allocate: boolean): Colormap
    static get_system_size(): number
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
export class Device {
    /* Fields of Gdk.Device */
    parent_instance: GObject.Object
    name: string
    source: InputSource
    mode: InputMode
    has_cursor: boolean
    num_axes: number
    axes: DeviceAxis
    num_keys: number
    keys: DeviceKey
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Device */
    get_axis(axes: number, use: AxisUse, value: number): boolean
    get_axis_use(index: number): AxisUse
    get_has_cursor(): boolean
    get_history(window: Window, start: number, stop: number): [ /* returnType */ boolean, /* events */ TimeCoord[] ]
    get_key(index: number, keyval: number, modifiers: ModifierType): void
    get_mode(): InputMode
    get_n_axes(): number
    get_n_keys(): number
    get_name(): string
    get_source(): InputSource
    get_state(window: Window, axes: number, mask: ModifierType): void
    set_axis_use(index_: number, use: AxisUse): void
    set_key(index_: number, keyval: number, modifiers: ModifierType): void
    set_mode(mode: InputMode): boolean
    set_source(source: InputSource): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static free_history(events: TimeCoord, n_events: number): /* events */ TimeCoord
    static $gtype: GObject.Type
}
export interface Display_ConstructProps extends GObject.Object_ConstructProps {
}
export class Display {
    /* Fields of Gdk.Display */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Display */
    beep(): void
    close(): void
    flush(): void
    get_default_cursor_size(): number
    get_event(): Event
    get_maximal_cursor_size(): [ /* width */ number, /* height */ number ]
    get_n_screens(): number
    get_name(): string
    get_pointer(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    get_window_at_pointer(): [ /* returnType */ Window, /* win_x */ number | null, /* win_y */ number | null ]
    is_closed(): boolean
    keyboard_ungrab(time_: number): void
    peek_event(): Event
    pointer_is_grabbed(): boolean
    pointer_ungrab(time_: number): void
    put_event(event: Event): void
    request_selection_notification(selection: Atom): boolean
    set_double_click_distance(distance: number): void
    set_double_click_time(msec: number): void
    store_clipboard(clipboard_window: Window, time_: number, targets: Atom, n_targets: number): void
    supports_clipboard_persistence(): boolean
    supports_composite(): boolean
    supports_cursor_alpha(): boolean
    supports_cursor_color(): boolean
    supports_input_shapes(): boolean
    supports_selection_notification(): boolean
    supports_shapes(): boolean
    sync(): void
    warp_pointer(screen: Screen, x: number, y: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gdk.Display */
    vfunc_closed(is_error: boolean): void
    vfunc_get_display_name(): string
    vfunc_get_n_screens(): number
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Display */
    connect(sigName: "closed", callback: (($obj: Display, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Display, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Display
    static $gtype: GObject.Type
}
export interface DisplayManager_ConstructProps extends GObject.Object_ConstructProps {
    default_display?: Display
}
export class DisplayManager {
    /* Properties of Gdk.DisplayManager */
    default_display: Display
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.DisplayManager */
    get_default_display(): Display
    list_displays(): Display[]
    set_default_display(display: Display): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gdk.DisplayManager */
    vfunc_display_opened(display: Display): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.DisplayManager */
    connect(sigName: "display-opened", callback: (($obj: DisplayManager, display: Display) => void)): number
    connect_after(sigName: "display-opened", callback: (($obj: DisplayManager, display: Display) => void)): number
    emit(sigName: "display-opened", display: Display): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-display", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-display", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DisplayManager_ConstructProps)
    _init (config?: DisplayManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): DisplayManager
    static $gtype: GObject.Type
}
export interface DragContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class DragContext {
    /* Fields of Gdk.DragContext */
    parent_instance: GObject.Object
    protocol: DragProtocol
    is_source: boolean
    source_window: Window
    dest_window: Window
    targets: object[]
    actions: DragAction
    suggested_action: DragAction
    action: DragAction
    start_time: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.DragContext */
    get_actions(): DragAction
    get_dest_window(): Window
    get_protocol(): DragProtocol
    get_selected_action(): DragAction
    get_source_window(): Window
    get_suggested_action(): DragAction
    list_targets(): Atom[]
    ref(): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DragContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DragContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DragContext_ConstructProps)
    _init (config?: DragContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DragContext
    static $gtype: GObject.Type
}
export interface Drawable_ConstructProps extends GObject.Object_ConstructProps {
}
export class Drawable {
    /* Fields of Gdk.Drawable */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Drawable */
    get_data(key: string): object | null
    get_depth(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    set_colormap(colormap: Colormap): void
    set_data(key: string, data?: object | null, destroy_func?: GLib.DestroyNotify | null): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gdk.Drawable */
    vfunc_create_cairo_surface(width: number, height: number): cairo.Surface
    vfunc_draw_arc(gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
    vfunc_draw_drawable(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_drawable_with_src(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable): void
    vfunc_draw_glyphs(gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_glyphs_transformed(gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_image(gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_lines(gc: GC, points: Point, npoints: number): void
    vfunc_draw_pixbuf(gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
    vfunc_draw_points(gc: GC, points: Point, npoints: number): void
    vfunc_draw_polygon(gc: GC, filled: boolean, points: Point, npoints: number): void
    vfunc_draw_rectangle(gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
    vfunc_draw_segments(gc: GC, segs: Segment, nsegs: number): void
    vfunc_draw_text(font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void
    vfunc_draw_text_wc(font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
    vfunc_draw_trapezoids(gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
    vfunc_get_depth(): number
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_ref_cairo_surface(): cairo.Surface
    vfunc_set_cairo_clip(cr: cairo.Context): void
    vfunc_set_colormap(cmap: Colormap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Drawable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Drawable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Drawable_ConstructProps)
    _init (config?: Drawable_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GC_ConstructProps extends GObject.Object_ConstructProps {
}
export class GC {
    /* Fields of Gdk.GC */
    parent_instance: GObject.Object
    clip_x_origin: number
    clip_y_origin: number
    ts_x_origin: number
    ts_y_origin: number
    colormap: Colormap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.GC */
    copy(src_gc: GC): void
    get_values(values: GCValues): void
    offset(x_offset: number, y_offset: number): void
    set_background(color: Color): void
    set_clip_mask(mask: Bitmap): void
    set_clip_origin(x: number, y: number): void
    set_clip_rectangle(rectangle: Rectangle): void
    set_clip_region(region: Region): void
    set_colormap(colormap: Colormap): void
    set_dashes(dash_offset: number, dash_list: number, n: number): void
    set_exposures(exposures: boolean): void
    set_fill(fill: Fill): void
    set_font(font: Font): void
    set_foreground(color: Color): void
    set_function(function_: Function): void
    set_line_attributes(line_width: number, line_style: LineStyle, cap_style: CapStyle, join_style: JoinStyle): void
    set_rgb_bg_color(color: Color): void
    set_rgb_fg_color(color: Color): void
    set_stipple(stipple: Pixmap): void
    set_subwindow(mode: SubwindowMode): void
    set_tile(tile: Pixmap): void
    set_ts_origin(x: number, y: number): void
    set_values(values: GCValues, values_mask: GCValuesMask): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gdk.GC */
    vfunc_get_values(values: GCValues): void
    vfunc_set_dashes(dash_offset: number, dash_list: number, n: number): void
    vfunc_set_values(values: GCValues, mask: GCValuesMask): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GC, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GC, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GC_ConstructProps)
    _init (config?: GC_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(drawable: Drawable): GC
    static new_with_values(drawable: Drawable, values: GCValues, values_mask: GCValuesMask): GC
    static $gtype: GObject.Type
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
export class Image {
    /* Fields of Gdk.Image */
    parent_instance: GObject.Object
    type: ImageType
    visual: Visual
    byte_order: ByteOrder
    width: number
    height: number
    depth: number
    bpp: number
    bpl: number
    bits_per_pixel: number
    mem: object
    colormap: Colormap
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Image */
    get_bits_per_pixel(): number
    get_byte_order(): ByteOrder
    get_bytes_per_line(): number
    get_bytes_per_pixel(): number
    get_depth(): number
    get_height(): number
    get_image_type(): ImageType
    get_pixel(x: number, y: number): number
    get_pixels(): object | null
    get_width(): number
    put_pixel(x: number, y: number, pixel: number): void
    set_colormap(colormap: Colormap): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: ImageType, visual: Visual, width: number, height: number): Image
    static $gtype: GObject.Type
}
export interface Keymap_ConstructProps extends GObject.Object_ConstructProps {
}
export class Keymap {
    /* Fields of Gdk.Keymap */
    parent_instance: GObject.Object
    display: Display
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Keymap */
    add_virtual_modifiers(state: ModifierType): void
    get_caps_lock_state(): boolean
    get_direction(): Pango.Direction
    get_entries_for_keycode(hardware_keycode: number, n_entries: number): [ /* returnType */ boolean, /* keys */ KeymapKey, /* keyvals */ number ]
    get_entries_for_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ KeymapKey, /* n_keys */ number ]
    have_bidi_layouts(): boolean
    lookup_key(key: KeymapKey): number
    map_virtual_modifiers(state: ModifierType): boolean
    translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effective_group */ number | null, /* level */ number | null, /* consumed_modifiers */ ModifierType | null ]
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gdk.Keymap */
    vfunc_direction_changed(): void
    vfunc_keys_changed(): void
    vfunc_state_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Keymap */
    connect(sigName: "direction-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "direction-changed"): void
    connect(sigName: "keys-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "keys-changed"): void
    connect(sigName: "state-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "state-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Keymap_ConstructProps)
    _init (config?: Keymap_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PangoRenderer_ConstructProps extends Pango.Renderer_ConstructProps {
    screen?: Screen
}
export class PangoRenderer {
    /* Fields of Pango.Renderer */
    matrix: Pango.Matrix
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.PangoRenderer */
    set_drawable(drawable?: Drawable | null): void
    set_gc(gc?: GC | null): void
    set_override_color(part: Pango.RenderPart, color?: Color | null): void
    set_stipple(part: Pango.RenderPart, stipple: Bitmap): void
    /* Methods of Pango.Renderer */
    activate(): void
    deactivate(): void
    draw_error_underline(x: number, y: number, width: number, height: number): void
    draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    draw_layout(layout: Pango.Layout, x: number, y: number): void
    draw_layout_line(line: Pango.LayoutLine, x: number, y: number): void
    draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    get_alpha(part: Pango.RenderPart): number
    get_color(part: Pango.RenderPart): Pango.Color | null
    get_layout(): Pango.Layout | null
    get_layout_line(): Pango.LayoutLine | null
    get_matrix(): Pango.Matrix | null
    part_changed(part: Pango.RenderPart): void
    set_alpha(part: Pango.RenderPart, alpha: number): void
    set_color(part: Pango.RenderPart, color?: Pango.Color | null): void
    set_matrix(matrix?: Pango.Matrix | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Pango.Renderer */
    vfunc_begin(): void
    vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void
    vfunc_draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    vfunc_draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    vfunc_draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    vfunc_draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    vfunc_draw_shape(attr: Pango.AttrShape, x: number, y: number): void
    vfunc_draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfunc_end(): void
    vfunc_part_changed(part: Pango.RenderPart): void
    vfunc_prepare_run(run: Pango.LayoutRun): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PangoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PangoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PangoRenderer_ConstructProps)
    _init (config?: PangoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(screen: Screen): PangoRenderer
    static $gtype: GObject.Type
}
export interface Pixmap_ConstructProps extends Drawable_ConstructProps {
}
export class Pixmap {
    /* Fields of Gdk.Pixmap */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Pixmap */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /* Methods of Gdk.Drawable */
    get_data(key: string): object | null
    get_depth(): number
    set_colormap(colormap: Colormap): void
    set_data(key: string, data?: object | null, destroy_func?: GLib.DestroyNotify | null): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gdk.Drawable */
    vfunc_create_cairo_surface(width: number, height: number): cairo.Surface
    vfunc_draw_arc(gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
    vfunc_draw_drawable(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_drawable_with_src(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable): void
    vfunc_draw_glyphs(gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_glyphs_transformed(gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_image(gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_lines(gc: GC, points: Point, npoints: number): void
    vfunc_draw_pixbuf(gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
    vfunc_draw_points(gc: GC, points: Point, npoints: number): void
    vfunc_draw_polygon(gc: GC, filled: boolean, points: Point, npoints: number): void
    vfunc_draw_rectangle(gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
    vfunc_draw_segments(gc: GC, segs: Segment, nsegs: number): void
    vfunc_draw_text(font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void
    vfunc_draw_text_wc(font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
    vfunc_draw_trapezoids(gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
    vfunc_get_depth(): number
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_ref_cairo_surface(): cairo.Surface
    vfunc_set_cairo_clip(cr: cairo.Context): void
    vfunc_set_colormap(cmap: Colormap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pixmap_ConstructProps)
    _init (config?: Pixmap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static foreign_new(anid: NativeWindow): Pixmap
    static foreign_new_for_display(display: Display, anid: NativeWindow): Pixmap
    static foreign_new_for_screen(screen: Screen, anid: NativeWindow, width: number, height: number, depth: number): Pixmap
    static new(drawable: Drawable, width: number, height: number, depth: number): Pixmap
    static colormap_create_from_xpm(drawable: Drawable, colormap: Colormap, mask: Bitmap, transparent_color: Color, filename: string): Pixmap
    static colormap_create_from_xpm_d(drawable: Drawable, colormap: Colormap, mask: Bitmap, transparent_color: Color, data: string): Pixmap
    static create_from_xpm(drawable: Drawable, transparent_color: Color, filename: string): [ /* returnType */ Pixmap, /* mask */ Bitmap ]
    static create_from_xpm_d(drawable: Drawable, transparent_color: Color, data: string): [ /* returnType */ Pixmap, /* mask */ Bitmap ]
    static $gtype: GObject.Type
}
export interface Screen_ConstructProps extends GObject.Object_ConstructProps {
    font_options?: object
    resolution?: number
}
export class Screen {
    /* Properties of Gdk.Screen */
    font_options: object
    resolution: number
    /* Fields of Gdk.Screen */
    parent_instance: GObject.Object
    closed: number
    normal_gcs: GC[]
    exposure_gcs: GC[]
    subwindow_gcs: GC[]
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Screen */
    broadcast_client_message(event: Event): void
    get_default_colormap(): Colormap
    get_font_options(): cairo.FontOptions
    get_height(): number
    get_height_mm(): number
    get_monitor_at_point(x: number, y: number): number
    get_monitor_at_window(window: Window): number
    get_monitor_geometry(monitor_num: number, dest: Rectangle): void
    get_monitor_height_mm(monitor_num: number): number
    get_monitor_plug_name(monitor_num: number): string
    get_monitor_width_mm(monitor_num: number): number
    get_n_monitors(): number
    get_number(): number
    get_primary_monitor(): number
    get_resolution(): number
    get_rgb_colormap(): Colormap
    get_rgb_visual(): Visual
    get_rgba_colormap(): Colormap
    get_rgba_visual(): Visual
    get_root_window(): Window
    get_setting(name: string, value: any): boolean
    get_system_colormap(): Colormap
    get_system_visual(): Visual
    get_toplevel_windows(): Window[]
    get_width(): number
    get_width_mm(): number
    get_window_stack(): Window[]
    is_composited(): boolean
    list_visuals(): Visual[]
    make_display_name(): string
    set_default_colormap(colormap: Colormap): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_resolution(dpi: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gdk.Screen */
    vfunc_composited_changed(): void
    vfunc_monitors_changed(): void
    vfunc_size_changed(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Screen */
    connect(sigName: "composited-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "composited-changed"): void
    connect(sigName: "monitors-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "monitors-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "monitors-changed"): void
    connect(sigName: "size-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "size-changed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::font-options", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-options", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screen_ConstructProps)
    _init (config?: Screen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Screen
    static height(): number
    static height_mm(): number
    static width(): number
    static width_mm(): number
    static $gtype: GObject.Type
}
export interface Visual_ConstructProps extends GObject.Object_ConstructProps {
}
export class Visual {
    /* Fields of Gdk.Visual */
    parent_instance: GObject.Object
    type: VisualType
    depth: number
    byte_order: ByteOrder
    colormap_size: number
    bits_per_rgb: number
    red_mask: number
    red_shift: number
    red_prec: number
    green_mask: number
    green_shift: number
    green_prec: number
    blue_mask: number
    blue_shift: number
    blue_prec: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Visual */
    get_bits_per_rgb(): number
    get_blue_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    get_byte_order(): ByteOrder
    get_colormap_size(): number
    get_depth(): number
    get_green_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    get_red_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    get_screen(): Screen
    get_visual_type(): VisualType
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Visual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Visual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Visual_ConstructProps)
    _init (config?: Visual_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_best(): Visual
    static get_best_depth(): number
    static get_best_type(): VisualType
    static get_best_with_both(depth: number, visual_type: VisualType): Visual
    static get_best_with_depth(depth: number): Visual
    static get_best_with_type(visual_type: VisualType): Visual
    static get_system(): Visual
    static $gtype: GObject.Type
}
export interface Window_ConstructProps extends Drawable_ConstructProps {
    cursor?: Cursor
}
export class Window {
    /* Properties of Gdk.Window */
    cursor: Cursor
    /* Fields of Gdk.Window */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk.Window */
    beep(): void
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    begin_paint_rect(rectangle: Rectangle): void
    begin_paint_region(region: Region): void
    begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    clear(): void
    clear_area(x: number, y: number, width: number, height: number): void
    clear_area_e(x: number, y: number, width: number, height: number): void
    configure_finished(): void
    coords_from_parent(parent_x: number, parent_y: number): [ /* x */ number | null, /* y */ number | null ]
    coords_to_parent(x: number, y: number): [ /* parent_x */ number | null, /* parent_y */ number | null ]
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    deiconify(): void
    destroy(): void
    destroy_notify(): void
    enable_synchronized_configure(): void
    end_paint(): void
    ensure_native(): boolean
    flush(): void
    focus(timestamp: number): void
    freeze_toplevel_updates_libgtk_only(): void
    freeze_updates(): void
    fullscreen(): void
    geometry_changed(): void
    get_accept_focus(): boolean
    get_background_pattern(): cairo.Pattern
    get_children(): Window[]
    get_composited(): boolean
    get_cursor(): Cursor
    get_decorations(decorations: WMDecoration): boolean
    get_deskrelative_origin(x: number, y: number): boolean
    get_events(): EventMask
    get_focus_on_map(): boolean
    get_frame_extents(rect: Rectangle): void
    get_geometry(x: number, y: number, width: number, height: number, depth: number): void
    get_height(): number
    get_internal_paint_info(): [ /* real_drawable */ Drawable, /* x_offset */ number, /* y_offset */ number ]
    get_modal_hint(): boolean
    get_origin(x: number, y: number): number
    get_pointer(): [ /* returnType */ Window, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    get_root_coords(x: number, y: number): [ /* root_x */ number, /* root_y */ number ]
    get_root_origin(x: number, y: number): void
    get_state(): WindowState
    get_type_hint(): WindowTypeHint
    get_user_data(): /* data */ object | null
    get_width(): number
    get_window_type(): WindowType
    has_native(): boolean
    hide(): void
    iconify(): void
    input_shape_combine_mask(mask: Bitmap | null, x: number, y: number): void
    input_shape_combine_region(shape_region: Region, offset_x: number, offset_y: number): void
    invalidate_maybe_recurse(region: Region, child_func?: object | null, user_data?: object | null): void
    invalidate_rect(rect: Rectangle | null, invalidate_children: boolean): void
    invalidate_region(region: Region, invalidate_children: boolean): void
    is_destroyed(): boolean
    is_input_only(): boolean
    is_shaped(): boolean
    is_viewable(): boolean
    is_visible(): boolean
    lower(): void
    maximize(): void
    merge_child_input_shapes(): void
    merge_child_shapes(): void
    move(x: number, y: number): void
    move_region(region: Region, dx: number, dy: number): void
    move_resize(x: number, y: number, width: number, height: number): void
    new(attributes: WindowAttr, attributes_mask: number): Window
    peek_children(): Window[]
    process_updates(update_children: boolean): void
    raise(): void
    redirect_to_drawable(drawable: Drawable, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number): void
    register_dnd(): void
    remove_redirection(): void
    reparent(new_parent: Window, x: number, y: number): void
    resize(width: number, height: number): void
    restack(sibling: Window | null, above: boolean): void
    scroll(dx: number, dy: number): void
    set_accept_focus(accept_focus: boolean): void
    set_back_pixmap(pixmap: Pixmap | null, parent_relative: boolean): void
    set_background(color: Color): void
    set_child_input_shapes(): void
    set_child_shapes(): void
    set_composited(composited: boolean): void
    set_cursor(cursor?: Cursor | null): void
    set_decorations(decorations: WMDecoration): void
    set_events(event_mask: EventMask): void
    set_focus_on_map(focus_on_map: boolean): void
    set_functions(functions: WMFunction): void
    set_geometry_hints(geometry: Geometry, geom_mask: WindowHints): void
    set_group(leader: Window): void
    set_hints(x: number, y: number, min_width: number, min_height: number, max_width: number, max_height: number, flags: number): void
    set_icon(icon_window: Window, pixmap: Pixmap, mask: Bitmap): void
    set_icon_list(pixbufs: GdkPixbuf.Pixbuf[]): void
    set_icon_name(name: string): void
    set_keep_above(setting: boolean): void
    set_keep_below(setting: boolean): void
    set_modal_hint(modal: boolean): void
    set_opacity(opacity: number): void
    set_override_redirect(override_redirect: boolean): void
    set_role(role: string): void
    set_skip_pager_hint(skips_pager: boolean): void
    set_skip_taskbar_hint(skips_taskbar: boolean): void
    set_startup_id(startup_id: string): void
    set_static_gravities(use_static: boolean): boolean
    set_title(title: string): void
    set_transient_for(parent: Window): void
    set_type_hint(hint: WindowTypeHint): void
    set_urgency_hint(urgent: boolean): void
    set_user_data(user_data?: object | null): void
    shape_combine_mask(mask: Bitmap, x: number, y: number): void
    shape_combine_region(shape_region: Region, offset_x: number, offset_y: number): void
    show(): void
    show_unraised(): void
    stick(): void
    thaw_toplevel_updates_libgtk_only(): void
    thaw_updates(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    withdraw(): void
    /* Methods of Gdk.Drawable */
    get_data(key: string): object | null
    get_depth(): number
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    set_colormap(colormap: Colormap): void
    set_data(key: string, data?: object | null, destroy_func?: GLib.DestroyNotify | null): void
    unref(): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of Gdk.Drawable */
    vfunc_create_cairo_surface(width: number, height: number): cairo.Surface
    vfunc_draw_arc(gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
    vfunc_draw_drawable(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_drawable_with_src(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable): void
    vfunc_draw_glyphs(gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_glyphs_transformed(gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_image(gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_lines(gc: GC, points: Point, npoints: number): void
    vfunc_draw_pixbuf(gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
    vfunc_draw_points(gc: GC, points: Point, npoints: number): void
    vfunc_draw_polygon(gc: GC, filled: boolean, points: Point, npoints: number): void
    vfunc_draw_rectangle(gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
    vfunc_draw_segments(gc: GC, segs: Segment, nsegs: number): void
    vfunc_draw_text(font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void
    vfunc_draw_text_wc(font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
    vfunc_draw_trapezoids(gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
    vfunc_get_depth(): number
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_ref_cairo_surface(): cairo.Surface
    vfunc_set_cairo_clip(cr: cairo.Context): void
    vfunc_set_colormap(cmap: Colormap): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gdk.Window */
    connect(sigName: "from-embedder", callback: (($obj: Window, embedder_x: number, embedder_y: number) => void)): number
    connect_after(sigName: "from-embedder", callback: (($obj: Window, embedder_x: number, embedder_y: number) => void)): number
    emit(sigName: "from-embedder", embedder_x: number, embedder_y: number): void
    connect(sigName: "pick-embedded-child", callback: (($obj: Window, x: number, y: number) => Window)): number
    connect_after(sigName: "pick-embedded-child", callback: (($obj: Window, x: number, y: number) => Window)): number
    emit(sigName: "pick-embedded-child", x: number, y: number): void
    connect(sigName: "to-embedder", callback: (($obj: Window, offscreen_x: number, offscreen_y: number) => void)): number
    connect_after(sigName: "to-embedder", callback: (($obj: Window, offscreen_x: number, offscreen_y: number) => void)): number
    emit(sigName: "to-embedder", offscreen_x: number, offscreen_y: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
export abstract class AppLaunchContextClass {
    /* Fields of Gdk.AppLaunchContextClass */
    parent_class: Gio.AppLaunchContextClass
    static name: string
}
export class AppLaunchContextPrivate {
    static name: string
}
export class Atom {
    /* Methods of Gdk.Atom */
    name(): string
    static name: string
}
export class Bitmap {
    /* Fields of Gdk.Bitmap */
    parent_instance: GObject.Object
    static name: string
}
export class Color {
    /* Fields of Gdk.Color */
    pixel: number
    red: number
    green: number
    blue: number
    /* Methods of Gdk.Color */
    copy(): Color
    equal(colorb: Color): boolean
    free(): void
    hash(): number
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static alloc(colormap: Colormap, color: Color): number
    static black(colormap: Colormap, color: Color): number
    static change(colormap: Colormap, color: Color): number
    static parse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
    static white(colormap: Colormap, color: Color): number
}
export abstract class ColormapClass {
    /* Fields of Gdk.ColormapClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Cursor {
    /* Fields of Gdk.Cursor */
    type: CursorType
    /* Methods of Gdk.Cursor */
    get_cursor_type(): CursorType
    ref(): Cursor
    unref(): void
    static name: string
    static new(cursor_type: CursorType): Cursor
    constructor(cursor_type: CursorType)
    /* Static methods and pseudo-constructors */
    static new(cursor_type: CursorType): Cursor
    static new_for_display(display: Display, cursor_type: CursorType): Cursor
    static new_from_name(display: Display, name: string): Cursor
    static new_from_pixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): Cursor
    static new_from_pixmap(source: Pixmap, mask: Pixmap, fg: Color, bg: Color, x: number, y: number): Cursor
}
export class DeviceAxis {
    /* Fields of Gdk.DeviceAxis */
    use: AxisUse
    min: number
    max: number
    static name: string
}
export abstract class DeviceClass {
    static name: string
}
export class DeviceKey {
    /* Fields of Gdk.DeviceKey */
    keyval: number
    modifiers: ModifierType
    static name: string
}
export abstract class DisplayClass {
    /* Fields of Gdk.DisplayClass */
    parent_class: GObject.ObjectClass
    get_display_name: (display: Display) => string
    get_n_screens: (display: Display) => number
    closed: (display: Display, is_error: boolean) => void
    static name: string
}
export abstract class DisplayManagerClass {
    /* Fields of Gdk.DisplayManagerClass */
    parent_class: GObject.ObjectClass
    display_opened: (display_manager: DisplayManager, display: Display) => void
    static name: string
}
export class DisplayPointerHooks {
    /* Fields of Gdk.DisplayPointerHooks */
    get_pointer: (display: Display, screen: Screen, x: number, y: number, mask: ModifierType) => void
    static name: string
}
export abstract class DragContextClass {
    /* Fields of Gdk.DragContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DrawableClass {
    /* Fields of Gdk.DrawableClass */
    parent_class: GObject.ObjectClass
    draw_rectangle: (drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number) => void
    draw_arc: (drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number) => void
    draw_polygon: (drawable: Drawable, gc: GC, filled: boolean, points: Point, npoints: number) => void
    draw_text: (drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: string, text_length: number) => void
    draw_text_wc: (drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number) => void
    draw_drawable: (drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number) => void
    draw_points: (drawable: Drawable, gc: GC, points: Point, npoints: number) => void
    draw_segments: (drawable: Drawable, gc: GC, segs: Segment, nsegs: number) => void
    draw_lines: (drawable: Drawable, gc: GC, points: Point, npoints: number) => void
    draw_glyphs: (drawable: Drawable, gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString) => void
    draw_image: (drawable: Drawable, gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number) => void
    get_depth: (drawable: Drawable) => number
    get_size: (drawable: Drawable) => [ /* width */ number | null, /* height */ number | null ]
    set_colormap: (drawable: Drawable, cmap: Colormap) => void
    draw_pixbuf: (drawable: Drawable, gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number) => void
    draw_glyphs_transformed: (drawable: Drawable, gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString) => void
    draw_trapezoids: (drawable: Drawable, gc: GC, trapezoids: Trapezoid, n_trapezoids: number) => void
    ref_cairo_surface: (drawable: Drawable) => cairo.Surface
    set_cairo_clip: (drawable: Drawable, cr: cairo.Context) => void
    create_cairo_surface: (drawable: Drawable, width: number, height: number) => cairo.Surface
    draw_drawable_with_src: (drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable) => void
    static name: string
}
export class EventAny {
    /* Fields of Gdk.EventAny */
    type: EventType
    window: Window
    send_event: number
    static name: string
}
export class EventButton {
    /* Fields of Gdk.EventButton */
    type: EventType
    window: Window
    send_event: number
    time: number
    x: number
    y: number
    axes: number
    state: number
    button: number
    device: Device
    x_root: number
    y_root: number
    static name: string
}
export class EventClient {
    /* Fields of Gdk.EventClient */
    type: EventType
    window: Window
    send_event: number
    message_type: Atom
    data_format: number
    static name: string
}
export class EventConfigure {
    /* Fields of Gdk.EventConfigure */
    type: EventType
    window: Window
    send_event: number
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export class EventCrossing {
    /* Fields of Gdk.EventCrossing */
    type: EventType
    window: Window
    send_event: number
    subwindow: Window
    time: number
    x: number
    y: number
    x_root: number
    y_root: number
    mode: CrossingMode
    detail: NotifyType
    focus: boolean
    state: number
    static name: string
}
export class EventDND {
    /* Fields of Gdk.EventDND */
    type: EventType
    window: Window
    send_event: number
    context: DragContext
    time: number
    x_root: number
    y_root: number
    static name: string
}
export class EventExpose {
    /* Fields of Gdk.EventExpose */
    type: EventType
    window: Window
    send_event: number
    area: Rectangle
    region: Region
    count: number
    static name: string
}
export class EventFocus {
    /* Fields of Gdk.EventFocus */
    type: EventType
    window: Window
    send_event: number
    in_: number
    static name: string
}
export class EventGrabBroken {
    /* Fields of Gdk.EventGrabBroken */
    type: EventType
    window: Window
    send_event: number
    keyboard: boolean
    implicit: boolean
    grab_window: Window
    static name: string
}
export class EventKey {
    /* Fields of Gdk.EventKey */
    type: EventType
    window: Window
    send_event: number
    time: number
    state: number
    keyval: number
    length: number
    string: string
    hardware_keycode: number
    group: number
    is_modifier: number
    static name: string
}
export class EventMotion {
    /* Fields of Gdk.EventMotion */
    type: EventType
    window: Window
    send_event: number
    time: number
    x: number
    y: number
    axes: number
    state: number
    is_hint: number
    device: Device
    x_root: number
    y_root: number
    static name: string
}
export class EventNoExpose {
    /* Fields of Gdk.EventNoExpose */
    type: EventType
    window: Window
    send_event: number
    static name: string
}
export class EventOwnerChange {
    /* Fields of Gdk.EventOwnerChange */
    type: EventType
    window: Window
    send_event: number
    owner: NativeWindow
    reason: OwnerChange
    selection: Atom
    time: number
    selection_time: number
    static name: string
}
export class EventProperty {
    /* Fields of Gdk.EventProperty */
    type: EventType
    window: Window
    send_event: number
    atom: Atom
    time: number
    state: number
    static name: string
}
export class EventProximity {
    /* Fields of Gdk.EventProximity */
    type: EventType
    window: Window
    send_event: number
    time: number
    device: Device
    static name: string
}
export class EventScroll {
    /* Fields of Gdk.EventScroll */
    type: EventType
    window: Window
    send_event: number
    time: number
    x: number
    y: number
    state: number
    direction: ScrollDirection
    device: Device
    x_root: number
    y_root: number
    static name: string
}
export class EventSelection {
    /* Fields of Gdk.EventSelection */
    type: EventType
    window: Window
    send_event: number
    selection: Atom
    target: Atom
    property: Atom
    time: number
    requestor: NativeWindow
    static name: string
}
export class EventSetting {
    /* Fields of Gdk.EventSetting */
    type: EventType
    window: Window
    send_event: number
    action: SettingAction
    name: string
    static name: string
}
export class EventVisibility {
    /* Fields of Gdk.EventVisibility */
    type: EventType
    window: Window
    send_event: number
    state: VisibilityState
    static name: string
}
export class EventWindowState {
    /* Fields of Gdk.EventWindowState */
    type: EventType
    window: Window
    send_event: number
    changed_mask: WindowState
    new_window_state: WindowState
    static name: string
}
export class Font {
    /* Fields of Gdk.Font */
    type: FontType
    ascent: number
    descent: number
    /* Methods of Gdk.Font */
    equal(fontb: Font): boolean
    id(): number
    ref(): Font
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static from_description(font_desc: Pango.FontDescription): Font
    static from_description_for_display(display: Display, font_desc: Pango.FontDescription): Font
    static load(font_name: string): Font
    static load_for_display(display: Display, font_name: string): Font
}
export abstract class GCClass {
    /* Fields of Gdk.GCClass */
    parent_class: GObject.ObjectClass
    get_values: (gc: GC, values: GCValues) => void
    set_values: (gc: GC, values: GCValues, mask: GCValuesMask) => void
    set_dashes: (gc: GC, dash_offset: number, dash_list: number, n: number) => void
    static name: string
}
export class GCValues {
    /* Fields of Gdk.GCValues */
    foreground: Color
    background: Color
    font: Font
    function_: Function
    fill: Fill
    tile: Pixmap
    stipple: Pixmap
    clip_mask: Pixmap
    subwindow_mode: SubwindowMode
    ts_x_origin: number
    ts_y_origin: number
    clip_x_origin: number
    clip_y_origin: number
    graphics_exposures: number
    line_width: number
    line_style: LineStyle
    cap_style: CapStyle
    join_style: JoinStyle
    static name: string
}
export class Geometry {
    /* Fields of Gdk.Geometry */
    min_width: number
    min_height: number
    max_width: number
    max_height: number
    base_width: number
    base_height: number
    width_inc: number
    height_inc: number
    min_aspect: number
    max_aspect: number
    win_gravity: Gravity
    static name: string
}
export abstract class ImageClass {
    /* Fields of Gdk.ImageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class KeyboardGrabInfo {
    /* Fields of Gdk.KeyboardGrabInfo */
    window: Window
    native_window: Window
    serial: number
    owner_events: boolean
    time: number
    static name: string
    /* Static methods and pseudo-constructors */
    static libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean
}
export abstract class KeymapClass {
    /* Fields of Gdk.KeymapClass */
    parent_class: GObject.ObjectClass
    direction_changed: (keymap: Keymap) => void
    keys_changed: (keymap: Keymap) => void
    state_changed: (keymap: Keymap) => void
    static name: string
}
export class KeymapKey {
    /* Fields of Gdk.KeymapKey */
    keycode: number
    group: number
    level: number
    static name: string
}
export class PangoAttrEmbossColor {
    /* Fields of Gdk.PangoAttrEmbossColor */
    attr: Pango.Attribute
    color: Pango.Color
    static name: string
}
export class PangoAttrEmbossed {
    /* Fields of Gdk.PangoAttrEmbossed */
    attr: Pango.Attribute
    embossed: boolean
    static name: string
}
export class PangoAttrStipple {
    /* Fields of Gdk.PangoAttrStipple */
    attr: Pango.Attribute
    stipple: Bitmap
    static name: string
}
export abstract class PangoRendererClass {
    static name: string
}
export class PangoRendererPrivate {
    static name: string
}
export class PixmapObject {
    /* Fields of Gdk.PixmapObject */
    parent_instance: Drawable
    impl: Drawable
    depth: number
    static name: string
}
export class PixmapObjectClass {
    /* Fields of Gdk.PixmapObjectClass */
    parent_class: DrawableClass
    static name: string
}
export class Point {
    /* Fields of Gdk.Point */
    x: number
    y: number
    static name: string
}
export class PointerHooks {
    static name: string
}
export class PointerWindowInfo {
    /* Fields of Gdk.PointerWindowInfo */
    toplevel_under_pointer: Window
    window_under_pointer: Window
    toplevel_x: number
    toplevel_y: number
    state: number
    button: number
    motion_hint_serial: number
    static name: string
}
export class Rectangle {
    /* Fields of Gdk.Rectangle */
    x: number
    y: number
    width: number
    height: number
    /* Methods of Gdk.Rectangle */
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle | null ]
    union(src2: Rectangle): /* dest */ Rectangle
    static name: string
}
export class Region {
    /* Methods of Gdk.Region */
    destroy(): void
    empty(): boolean
    equal(region2: Region): boolean
    get_clipbox(rectangle: Rectangle): void
    get_rectangles(rectangles: Rectangle[]): void
    intersect(source2: Region): void
    offset(dx: number, dy: number): void
    point_in(x: number, y: number): boolean
    rect_equal(rectangle: Rectangle): boolean
    rect_in(rectangle: Rectangle): OverlapType
    shrink(dx: number, dy: number): void
    subtract(source2: Region): void
    union(source2: Region): void
    union_with_rect(rect: Rectangle): void
    xor(source2: Region): void
    static name: string
}
export class RgbCmap {
    /* Fields of Gdk.RgbCmap */
    colors: number[]
    n_colors: number
    /* Methods of Gdk.RgbCmap */
    free(): void
    static name: string
}
export abstract class ScreenClass {
    /* Fields of Gdk.ScreenClass */
    parent_class: GObject.ObjectClass
    size_changed: (screen: Screen) => void
    composited_changed: (screen: Screen) => void
    monitors_changed: (screen: Screen) => void
    static name: string
}
export class Segment {
    /* Fields of Gdk.Segment */
    x1: number
    y1: number
    x2: number
    y2: number
    static name: string
}
export class Span {
    /* Fields of Gdk.Span */
    x: number
    y: number
    width: number
    static name: string
}
export class TimeCoord {
    /* Fields of Gdk.TimeCoord */
    time: number
    axes: number[]
    static name: string
}
export class Trapezoid {
    /* Fields of Gdk.Trapezoid */
    y1: number
    x11: number
    x21: number
    y2: number
    x12: number
    x22: number
    static name: string
}
export abstract class VisualClass {
    static name: string
}
export class WindowAttr {
    /* Fields of Gdk.WindowAttr */
    title: string
    event_mask: number
    x: number
    y: number
    width: number
    height: number
    wclass: WindowClass
    visual: Visual
    colormap: Colormap
    window_type: WindowType
    cursor: Cursor
    wmclass_name: string
    wmclass_class: string
    override_redirect: boolean
    type_hint: WindowTypeHint
    static name: string
}
export class WindowObject {
    static name: string
}
export class WindowObjectClass {
    /* Fields of Gdk.WindowObjectClass */
    parent_class: DrawableClass
    static name: string
}
export class WindowRedirect {
    static name: string
}
export class Event {
    /* Fields of Gdk.Event */
    type: EventType
    any: EventAny
    expose: EventExpose
    no_expose: EventNoExpose
    visibility: EventVisibility
    motion: EventMotion
    button: EventButton
    scroll: EventScroll
    key: EventKey
    crossing: EventCrossing
    focus_change: EventFocus
    configure: EventConfigure
    property: EventProperty
    selection: EventSelection
    owner_change: EventOwnerChange
    proximity: EventProximity
    client: EventClient
    dnd: EventDND
    window_state: EventWindowState
    setting: EventSetting
    grab_broken: EventGrabBroken
    /* Methods of Gdk.Event */
    copy(): Event
    free(): void
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    get_coords(): [ /* returnType */ boolean, /* x_win */ number, /* y_win */ number ]
    get_root_coords(): [ /* returnType */ boolean, /* x_root */ number, /* y_root */ number ]
    get_state(): [ /* returnType */ boolean, /* state */ ModifierType ]
    get_time(): number
    put(): void
    send_client_message(winid: NativeWindow): boolean
    send_clientmessage_toall(): void
    set_screen(screen: Screen): void
    static name: string
    static new(type: EventType): Event
    constructor(type: EventType)
    /* Static methods and pseudo-constructors */
    static new(type: EventType): Event
    static get(): Event
    static get_graphics_expose(window: Window): Event
    static handler_set(func: EventFunc): void
    static peek(): Event
    static request_motions(event: EventMotion): void
    static send_client_message_for_display(display: Display, event: Event, winid: NativeWindow): boolean
}
type NativeWindow = number
type Selection = Atom
type SelectionType = Atom
type Target = Atom
type WChar = number
type XEvent = void