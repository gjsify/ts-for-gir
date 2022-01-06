/**
 * IBus-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum AttrType {
    UNDERLINE,
    FOREGROUND,
    BACKGROUND,
}
export enum AttrUnderline {
    NONE,
    SINGLE,
    DOUBLE,
    LOW,
    ERROR,
}
export enum BusRequestNameReply {
    PRIMARY_OWNER,
    IN_QUEUE,
    EXISTS,
    ALREADY_OWNER,
}
export enum BusStartServiceByNameReply {
    SUCCESS,
    ALREADY_RUNNING,
}
export enum Error {
    NO_ENGINE,
    NO_CONFIG,
    FAILED,
}
export enum InputPurpose {
    FREE_FORM,
    ALPHA,
    DIGITS,
    NUMBER,
    PHONE,
    URL,
    EMAIL,
    NAME,
    PASSWORD,
    PIN,
}
export enum Orientation {
    HORIZONTAL,
    VERTICAL,
    SYSTEM,
}
export enum PreeditFocusMode {
    CLEAR,
    COMMIT,
}
export enum PropState {
    UNCHECKED,
    CHECKED,
    INCONSISTENT,
}
export enum PropType {
    NORMAL,
    TOGGLE,
    RADIO,
    MENU,
    SEPARATOR,
}
export enum BusNameFlag {
    ALLOW_REPLACEMENT,
    REPLACE_EXISTING,
    DO_NOT_QUEUE,
}
export enum Capabilite {
    PREEDIT_TEXT,
    AUXILIARY_TEXT,
    LOOKUP_TABLE,
    FOCUS,
    PROPERTY,
    SURROUNDING_TEXT,
}
export enum InputHints {
    NONE,
    SPELLCHECK,
    NO_SPELLCHECK,
    WORD_COMPLETION,
    LOWERCASE,
    UPPERCASE_CHARS,
    UPPERCASE_WORDS,
    UPPERCASE_SENTENCES,
    INHIBIT_OSK,
    VERTICAL_WRITING,
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
    HANDLED_MASK,
    FORWARD_MASK,
    IGNORED_MASK,
    SUPER_MASK,
    HYPER_MASK,
    META_MASK,
    RELEASE_MASK,
    MODIFIER_MASK,
}
export enum ObjectFlags {
    IN_DESTRUCTION,
    DESTROYED,
    RESERVED_1,
    RESERVED_2,
}
export const TODO_0: number
export const TODO_1: number
export const TODO_2: number
export const TODO_3: number
export const TODO_3270_AltCursor: number
export const TODO_3270_Attn: number
export const TODO_3270_BackTab: number
export const TODO_3270_ChangeScreen: number
export const TODO_3270_Copy: number
export const TODO_3270_CursorBlink: number
export const TODO_3270_CursorSelect: number
export const TODO_3270_DeleteWord: number
export const TODO_3270_Duplicate: number
export const TODO_3270_Enter: number
export const TODO_3270_EraseEOF: number
export const TODO_3270_EraseInput: number
export const TODO_3270_ExSelect: number
export const TODO_3270_FieldMark: number
export const TODO_3270_Ident: number
export const TODO_3270_Jump: number
export const TODO_3270_KeyClick: number
export const TODO_3270_Left2: number
export const TODO_3270_PA1: number
export const TODO_3270_PA2: number
export const TODO_3270_PA3: number
export const TODO_3270_Play: number
export const TODO_3270_PrintScreen: number
export const TODO_3270_Quit: number
export const TODO_3270_Record: number
export const TODO_3270_Reset: number
export const TODO_3270_Right2: number
export const TODO_3270_Rule: number
export const TODO_3270_Setup: number
export const TODO_3270_Test: number
export const TODO_4: number
export const TODO_5: number
export const TODO_6: number
export const TODO_7: number
export const TODO_8: number
export const TODO_9: number
export const A: number
export const AE: number
export const Aacute: number
export const Abelowdot: number
export const Abreve: number
export const Abreveacute: number
export const Abrevebelowdot: number
export const Abrevegrave: number
export const Abrevehook: number
export const Abrevetilde: number
export const AccessX_Enable: number
export const AccessX_Feedback_Enable: number
export const Acircumflex: number
export const Acircumflexacute: number
export const Acircumflexbelowdot: number
export const Acircumflexgrave: number
export const Acircumflexhook: number
export const Acircumflextilde: number
export const Adiaeresis: number
export const Agrave: number
export const Ahook: number
export const Alt_L: number
export const Alt_R: number
export const Amacron: number
export const Aogonek: number
export const Arabic_0: number
export const Arabic_1: number
export const Arabic_2: number
export const Arabic_3: number
export const Arabic_4: number
export const Arabic_5: number
export const Arabic_6: number
export const Arabic_7: number
export const Arabic_8: number
export const Arabic_9: number
export const Arabic_ain: number
export const Arabic_alef: number
export const Arabic_alefmaksura: number
export const Arabic_beh: number
export const Arabic_comma: number
export const Arabic_dad: number
export const Arabic_dal: number
export const Arabic_damma: number
export const Arabic_dammatan: number
export const Arabic_ddal: number
export const Arabic_farsi_yeh: number
export const Arabic_fatha: number
export const Arabic_fathatan: number
export const Arabic_feh: number
export const Arabic_fullstop: number
export const Arabic_gaf: number
export const Arabic_ghain: number
export const Arabic_ha: number
export const Arabic_hah: number
export const Arabic_hamza: number
export const Arabic_hamza_above: number
export const Arabic_hamza_below: number
export const Arabic_hamzaonalef: number
export const Arabic_hamzaonwaw: number
export const Arabic_hamzaonyeh: number
export const Arabic_hamzaunderalef: number
export const Arabic_heh: number
export const Arabic_heh_doachashmee: number
export const Arabic_heh_goal: number
export const Arabic_jeem: number
export const Arabic_jeh: number
export const Arabic_kaf: number
export const Arabic_kasra: number
export const Arabic_kasratan: number
export const Arabic_keheh: number
export const Arabic_khah: number
export const Arabic_lam: number
export const Arabic_madda_above: number
export const Arabic_maddaonalef: number
export const Arabic_meem: number
export const Arabic_noon: number
export const Arabic_noon_ghunna: number
export const Arabic_peh: number
export const Arabic_percent: number
export const Arabic_qaf: number
export const Arabic_question_mark: number
export const Arabic_ra: number
export const Arabic_rreh: number
export const Arabic_sad: number
export const Arabic_seen: number
export const Arabic_semicolon: number
export const Arabic_shadda: number
export const Arabic_sheen: number
export const Arabic_sukun: number
export const Arabic_superscript_alef: number
export const Arabic_switch: number
export const Arabic_tah: number
export const Arabic_tatweel: number
export const Arabic_tcheh: number
export const Arabic_teh: number
export const Arabic_tehmarbuta: number
export const Arabic_thal: number
export const Arabic_theh: number
export const Arabic_tteh: number
export const Arabic_veh: number
export const Arabic_waw: number
export const Arabic_yeh: number
export const Arabic_yeh_baree: number
export const Arabic_zah: number
export const Arabic_zain: number
export const Aring: number
export const Armenian_AT: number
export const Armenian_AYB: number
export const Armenian_BEN: number
export const Armenian_CHA: number
export const Armenian_DA: number
export const Armenian_DZA: number
export const Armenian_E: number
export const Armenian_FE: number
export const Armenian_GHAT: number
export const Armenian_GIM: number
export const Armenian_HI: number
export const Armenian_HO: number
export const Armenian_INI: number
export const Armenian_JE: number
export const Armenian_KE: number
export const Armenian_KEN: number
export const Armenian_KHE: number
export const Armenian_LYUN: number
export const Armenian_MEN: number
export const Armenian_NU: number
export const Armenian_O: number
export const Armenian_PE: number
export const Armenian_PYUR: number
export const Armenian_RA: number
export const Armenian_RE: number
export const Armenian_SE: number
export const Armenian_SHA: number
export const Armenian_TCHE: number
export const Armenian_TO: number
export const Armenian_TSA: number
export const Armenian_TSO: number
export const Armenian_TYUN: number
export const Armenian_VEV: number
export const Armenian_VO: number
export const Armenian_VYUN: number
export const Armenian_YECH: number
export const Armenian_ZA: number
export const Armenian_ZHE: number
export const Armenian_accent: number
export const Armenian_amanak: number
export const Armenian_apostrophe: number
export const Armenian_at: number
export const Armenian_ayb: number
export const Armenian_ben: number
export const Armenian_but: number
export const Armenian_cha: number
export const Armenian_da: number
export const Armenian_dza: number
export const Armenian_e: number
export const Armenian_exclam: number
export const Armenian_fe: number
export const Armenian_full_stop: number
export const Armenian_ghat: number
export const Armenian_gim: number
export const Armenian_hi: number
export const Armenian_ho: number
export const Armenian_hyphen: number
export const Armenian_ini: number
export const Armenian_je: number
export const Armenian_ke: number
export const Armenian_ken: number
export const Armenian_khe: number
export const Armenian_ligature_ew: number
export const Armenian_lyun: number
export const Armenian_men: number
export const Armenian_nu: number
export const Armenian_o: number
export const Armenian_paruyk: number
export const Armenian_pe: number
export const Armenian_pyur: number
export const Armenian_question: number
export const Armenian_ra: number
export const Armenian_re: number
export const Armenian_se: number
export const Armenian_separation_mark: number
export const Armenian_sha: number
export const Armenian_shesht: number
export const Armenian_tche: number
export const Armenian_to: number
export const Armenian_tsa: number
export const Armenian_tso: number
export const Armenian_tyun: number
export const Armenian_verjaket: number
export const Armenian_vev: number
export const Armenian_vo: number
export const Armenian_vyun: number
export const Armenian_yech: number
export const Armenian_yentamna: number
export const Armenian_za: number
export const Armenian_zhe: number
export const Atilde: number
export const AudibleBell_Enable: number
export const B: number
export const Babovedot: number
export const BackSpace: number
export const Begin: number
export const BounceKeys_Enable: number
export const Break: number
export const Byelorussian_SHORTU: number
export const Byelorussian_shortu: number
export const C: number
export const Cabovedot: number
export const Cacute: number
export const Cancel: number
export const Caps_Lock: number
export const Ccaron: number
export const Ccedilla: number
export const Ccircumflex: number
export const Clear: number
export const Codeinput: number
export const ColonSign: number
export const Control_L: number
export const Control_R: number
export const CruzeiroSign: number
export const Cyrillic_A: number
export const Cyrillic_BE: number
export const Cyrillic_CHE: number
export const Cyrillic_CHE_descender: number
export const Cyrillic_CHE_vertstroke: number
export const Cyrillic_DE: number
export const Cyrillic_DZHE: number
export const Cyrillic_E: number
export const Cyrillic_EF: number
export const Cyrillic_EL: number
export const Cyrillic_EM: number
export const Cyrillic_EN: number
export const Cyrillic_EN_descender: number
export const Cyrillic_ER: number
export const Cyrillic_ES: number
export const Cyrillic_GHE: number
export const Cyrillic_GHE_bar: number
export const Cyrillic_HA: number
export const Cyrillic_HARDSIGN: number
export const Cyrillic_HA_descender: number
export const Cyrillic_I: number
export const Cyrillic_IE: number
export const Cyrillic_IO: number
export const Cyrillic_I_macron: number
export const Cyrillic_JE: number
export const Cyrillic_KA: number
export const Cyrillic_KA_descender: number
export const Cyrillic_KA_vertstroke: number
export const Cyrillic_LJE: number
export const Cyrillic_NJE: number
export const Cyrillic_O: number
export const Cyrillic_O_bar: number
export const Cyrillic_PE: number
export const Cyrillic_SCHWA: number
export const Cyrillic_SHA: number
export const Cyrillic_SHCHA: number
export const Cyrillic_SHHA: number
export const Cyrillic_SHORTI: number
export const Cyrillic_SOFTSIGN: number
export const Cyrillic_TE: number
export const Cyrillic_TSE: number
export const Cyrillic_U: number
export const Cyrillic_U_macron: number
export const Cyrillic_U_straight: number
export const Cyrillic_U_straight_bar: number
export const Cyrillic_VE: number
export const Cyrillic_YA: number
export const Cyrillic_YERU: number
export const Cyrillic_YU: number
export const Cyrillic_ZE: number
export const Cyrillic_ZHE: number
export const Cyrillic_ZHE_descender: number
export const Cyrillic_a: number
export const Cyrillic_be: number
export const Cyrillic_che: number
export const Cyrillic_che_descender: number
export const Cyrillic_che_vertstroke: number
export const Cyrillic_de: number
export const Cyrillic_dzhe: number
export const Cyrillic_e: number
export const Cyrillic_ef: number
export const Cyrillic_el: number
export const Cyrillic_em: number
export const Cyrillic_en: number
export const Cyrillic_en_descender: number
export const Cyrillic_er: number
export const Cyrillic_es: number
export const Cyrillic_ghe: number
export const Cyrillic_ghe_bar: number
export const Cyrillic_ha: number
export const Cyrillic_ha_descender: number
export const Cyrillic_hardsign: number
export const Cyrillic_i: number
export const Cyrillic_i_macron: number
export const Cyrillic_ie: number
export const Cyrillic_io: number
export const Cyrillic_je: number
export const Cyrillic_ka: number
export const Cyrillic_ka_descender: number
export const Cyrillic_ka_vertstroke: number
export const Cyrillic_lje: number
export const Cyrillic_nje: number
export const Cyrillic_o: number
export const Cyrillic_o_bar: number
export const Cyrillic_pe: number
export const Cyrillic_schwa: number
export const Cyrillic_sha: number
export const Cyrillic_shcha: number
export const Cyrillic_shha: number
export const Cyrillic_shorti: number
export const Cyrillic_softsign: number
export const Cyrillic_te: number
export const Cyrillic_tse: number
export const Cyrillic_u: number
export const Cyrillic_u_macron: number
export const Cyrillic_u_straight: number
export const Cyrillic_u_straight_bar: number
export const Cyrillic_ve: number
export const Cyrillic_ya: number
export const Cyrillic_yeru: number
export const Cyrillic_yu: number
export const Cyrillic_ze: number
export const Cyrillic_zhe: number
export const Cyrillic_zhe_descender: number
export const D: number
export const Dabovedot: number
export const Dcaron: number
export const Delete: number
export const DongSign: number
export const Down: number
export const Dstroke: number
export const E: number
export const ENG: number
export const ETH: number
export const Eabovedot: number
export const Eacute: number
export const Ebelowdot: number
export const Ecaron: number
export const Ecircumflex: number
export const Ecircumflexacute: number
export const Ecircumflexbelowdot: number
export const Ecircumflexgrave: number
export const Ecircumflexhook: number
export const Ecircumflextilde: number
export const EcuSign: number
export const Ediaeresis: number
export const Egrave: number
export const Ehook: number
export const Eisu_Shift: number
export const Eisu_toggle: number
export const Emacron: number
export const End: number
export const Eogonek: number
export const Escape: number
export const Eth: number
export const Etilde: number
export const EuroSign: number
export const Execute: number
export const F: number
export const F1: number
export const F10: number
export const F11: number
export const F12: number
export const F13: number
export const F14: number
export const F15: number
export const F16: number
export const F17: number
export const F18: number
export const F19: number
export const F2: number
export const F20: number
export const F21: number
export const F22: number
export const F23: number
export const F24: number
export const F25: number
export const F26: number
export const F27: number
export const F28: number
export const F29: number
export const F3: number
export const F30: number
export const F31: number
export const F32: number
export const F33: number
export const F34: number
export const F35: number
export const F4: number
export const F5: number
export const F6: number
export const F7: number
export const F8: number
export const F9: number
export const FFrancSign: number
export const Fabovedot: number
export const Farsi_0: number
export const Farsi_1: number
export const Farsi_2: number
export const Farsi_3: number
export const Farsi_4: number
export const Farsi_5: number
export const Farsi_6: number
export const Farsi_7: number
export const Farsi_8: number
export const Farsi_9: number
export const Farsi_yeh: number
export const Find: number
export const First_Virtual_Screen: number
export const G: number
export const Gabovedot: number
export const Gbreve: number
export const Gcaron: number
export const Gcedilla: number
export const Gcircumflex: number
export const Georgian_an: number
export const Georgian_ban: number
export const Georgian_can: number
export const Georgian_char: number
export const Georgian_chin: number
export const Georgian_cil: number
export const Georgian_don: number
export const Georgian_en: number
export const Georgian_fi: number
export const Georgian_gan: number
export const Georgian_ghan: number
export const Georgian_hae: number
export const Georgian_har: number
export const Georgian_he: number
export const Georgian_hie: number
export const Georgian_hoe: number
export const Georgian_in: number
export const Georgian_jhan: number
export const Georgian_jil: number
export const Georgian_kan: number
export const Georgian_khar: number
export const Georgian_las: number
export const Georgian_man: number
export const Georgian_nar: number
export const Georgian_on: number
export const Georgian_par: number
export const Georgian_phar: number
export const Georgian_qar: number
export const Georgian_rae: number
export const Georgian_san: number
export const Georgian_shin: number
export const Georgian_tan: number
export const Georgian_tar: number
export const Georgian_un: number
export const Georgian_vin: number
export const Georgian_we: number
export const Georgian_xan: number
export const Georgian_zen: number
export const Georgian_zhar: number
export const Greek_ALPHA: number
export const Greek_ALPHAaccent: number
export const Greek_BETA: number
export const Greek_CHI: number
export const Greek_DELTA: number
export const Greek_EPSILON: number
export const Greek_EPSILONaccent: number
export const Greek_ETA: number
export const Greek_ETAaccent: number
export const Greek_GAMMA: number
export const Greek_IOTA: number
export const Greek_IOTAaccent: number
export const Greek_IOTAdiaeresis: number
export const Greek_IOTAdieresis: number
export const Greek_KAPPA: number
export const Greek_LAMBDA: number
export const Greek_LAMDA: number
export const Greek_MU: number
export const Greek_NU: number
export const Greek_OMEGA: number
export const Greek_OMEGAaccent: number
export const Greek_OMICRON: number
export const Greek_OMICRONaccent: number
export const Greek_PHI: number
export const Greek_PI: number
export const Greek_PSI: number
export const Greek_RHO: number
export const Greek_SIGMA: number
export const Greek_TAU: number
export const Greek_THETA: number
export const Greek_UPSILON: number
export const Greek_UPSILONaccent: number
export const Greek_UPSILONdieresis: number
export const Greek_XI: number
export const Greek_ZETA: number
export const Greek_accentdieresis: number
export const Greek_alpha: number
export const Greek_alphaaccent: number
export const Greek_beta: number
export const Greek_chi: number
export const Greek_delta: number
export const Greek_epsilon: number
export const Greek_epsilonaccent: number
export const Greek_eta: number
export const Greek_etaaccent: number
export const Greek_finalsmallsigma: number
export const Greek_gamma: number
export const Greek_horizbar: number
export const Greek_iota: number
export const Greek_iotaaccent: number
export const Greek_iotaaccentdieresis: number
export const Greek_iotadieresis: number
export const Greek_kappa: number
export const Greek_lambda: number
export const Greek_lamda: number
export const Greek_mu: number
export const Greek_nu: number
export const Greek_omega: number
export const Greek_omegaaccent: number
export const Greek_omicron: number
export const Greek_omicronaccent: number
export const Greek_phi: number
export const Greek_pi: number
export const Greek_psi: number
export const Greek_rho: number
export const Greek_sigma: number
export const Greek_switch: number
export const Greek_tau: number
export const Greek_theta: number
export const Greek_upsilon: number
export const Greek_upsilonaccent: number
export const Greek_upsilonaccentdieresis: number
export const Greek_upsilondieresis: number
export const Greek_xi: number
export const Greek_zeta: number
export const H: number
export const Hangul: number
export const Hangul_A: number
export const Hangul_AE: number
export const Hangul_AraeA: number
export const Hangul_AraeAE: number
export const Hangul_Banja: number
export const Hangul_Cieuc: number
export const Hangul_Codeinput: number
export const Hangul_Dikeud: number
export const Hangul_E: number
export const Hangul_EO: number
export const Hangul_EU: number
export const Hangul_End: number
export const Hangul_Hanja: number
export const Hangul_Hieuh: number
export const Hangul_I: number
export const Hangul_Ieung: number
export const Hangul_J_Cieuc: number
export const Hangul_J_Dikeud: number
export const Hangul_J_Hieuh: number
export const Hangul_J_Ieung: number
export const Hangul_J_Jieuj: number
export const Hangul_J_Khieuq: number
export const Hangul_J_Kiyeog: number
export const Hangul_J_KiyeogSios: number
export const Hangul_J_KkogjiDalrinIeung: number
export const Hangul_J_Mieum: number
export const Hangul_J_Nieun: number
export const Hangul_J_NieunHieuh: number
export const Hangul_J_NieunJieuj: number
export const Hangul_J_PanSios: number
export const Hangul_J_Phieuf: number
export const Hangul_J_Pieub: number
export const Hangul_J_PieubSios: number
export const Hangul_J_Rieul: number
export const Hangul_J_RieulHieuh: number
export const Hangul_J_RieulKiyeog: number
export const Hangul_J_RieulMieum: number
export const Hangul_J_RieulPhieuf: number
export const Hangul_J_RieulPieub: number
export const Hangul_J_RieulSios: number
export const Hangul_J_RieulTieut: number
export const Hangul_J_Sios: number
export const Hangul_J_SsangKiyeog: number
export const Hangul_J_SsangSios: number
export const Hangul_J_Tieut: number
export const Hangul_J_YeorinHieuh: number
export const Hangul_Jamo: number
export const Hangul_Jeonja: number
export const Hangul_Jieuj: number
export const Hangul_Khieuq: number
export const Hangul_Kiyeog: number
export const Hangul_KiyeogSios: number
export const Hangul_KkogjiDalrinIeung: number
export const Hangul_Mieum: number
export const Hangul_MultipleCandidate: number
export const Hangul_Nieun: number
export const Hangul_NieunHieuh: number
export const Hangul_NieunJieuj: number
export const Hangul_O: number
export const Hangul_OE: number
export const Hangul_PanSios: number
export const Hangul_Phieuf: number
export const Hangul_Pieub: number
export const Hangul_PieubSios: number
export const Hangul_PostHanja: number
export const Hangul_PreHanja: number
export const Hangul_PreviousCandidate: number
export const Hangul_Rieul: number
export const Hangul_RieulHieuh: number
export const Hangul_RieulKiyeog: number
export const Hangul_RieulMieum: number
export const Hangul_RieulPhieuf: number
export const Hangul_RieulPieub: number
export const Hangul_RieulSios: number
export const Hangul_RieulTieut: number
export const Hangul_RieulYeorinHieuh: number
export const Hangul_Romaja: number
export const Hangul_SingleCandidate: number
export const Hangul_Sios: number
export const Hangul_Special: number
export const Hangul_SsangDikeud: number
export const Hangul_SsangJieuj: number
export const Hangul_SsangKiyeog: number
export const Hangul_SsangPieub: number
export const Hangul_SsangSios: number
export const Hangul_Start: number
export const Hangul_SunkyeongeumMieum: number
export const Hangul_SunkyeongeumPhieuf: number
export const Hangul_SunkyeongeumPieub: number
export const Hangul_Tieut: number
export const Hangul_U: number
export const Hangul_WA: number
export const Hangul_WAE: number
export const Hangul_WE: number
export const Hangul_WEO: number
export const Hangul_WI: number
export const Hangul_YA: number
export const Hangul_YAE: number
export const Hangul_YE: number
export const Hangul_YEO: number
export const Hangul_YI: number
export const Hangul_YO: number
export const Hangul_YU: number
export const Hangul_YeorinHieuh: number
export const Hangul_switch: number
export const Hankaku: number
export const Hcircumflex: number
export const Hebrew_switch: number
export const Help: number
export const Henkan: number
export const Henkan_Mode: number
export const Hiragana: number
export const Hiragana_Katakana: number
export const Home: number
export const Hstroke: number
export const Hyper_L: number
export const Hyper_R: number
export const I: number
export const INTERFACE_CONFIG: string
export const INTERFACE_ENGINE: string
export const INTERFACE_FACTORY: string
export const INTERFACE_IBUS: string
export const INTERFACE_INPUT_CONTEXT: string
export const INTERFACE_NOTIFICATIONS: string
export const INTERFACE_PANEL: string
export const ISO_Center_Object: number
export const ISO_Continuous_Underline: number
export const ISO_Discontinuous_Underline: number
export const ISO_Emphasize: number
export const ISO_Enter: number
export const ISO_Fast_Cursor_Down: number
export const ISO_Fast_Cursor_Left: number
export const ISO_Fast_Cursor_Right: number
export const ISO_Fast_Cursor_Up: number
export const ISO_First_Group: number
export const ISO_First_Group_Lock: number
export const ISO_Group_Latch: number
export const ISO_Group_Lock: number
export const ISO_Group_Shift: number
export const ISO_Last_Group: number
export const ISO_Last_Group_Lock: number
export const ISO_Left_Tab: number
export const ISO_Level2_Latch: number
export const ISO_Level3_Latch: number
export const ISO_Level3_Lock: number
export const ISO_Level3_Shift: number
export const ISO_Level5_Latch: number
export const ISO_Level5_Lock: number
export const ISO_Level5_Shift: number
export const ISO_Lock: number
export const ISO_Move_Line_Down: number
export const ISO_Move_Line_Up: number
export const ISO_Next_Group: number
export const ISO_Next_Group_Lock: number
export const ISO_Partial_Line_Down: number
export const ISO_Partial_Line_Up: number
export const ISO_Partial_Space_Left: number
export const ISO_Partial_Space_Right: number
export const ISO_Prev_Group: number
export const ISO_Prev_Group_Lock: number
export const ISO_Release_Both_Margins: number
export const ISO_Release_Margin_Left: number
export const ISO_Release_Margin_Right: number
export const ISO_Set_Margin_Left: number
export const ISO_Set_Margin_Right: number
export const Iabovedot: number
export const Iacute: number
export const Ibelowdot: number
export const Ibreve: number
export const Icircumflex: number
export const Idiaeresis: number
export const Igrave: number
export const Ihook: number
export const Imacron: number
export const Insert: number
export const Iogonek: number
export const Itilde: number
export const J: number
export const Jcircumflex: number
export const K: number
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
export const KEY_Adiaeresis: number
export const KEY_Agrave: number
export const KEY_Ahook: number
export const KEY_Alt_L: number
export const KEY_Alt_R: number
export const KEY_Amacron: number
export const KEY_Aogonek: number
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
export const KEY_B: number
export const KEY_Babovedot: number
export const KEY_BackSpace: number
export const KEY_Begin: number
export const KEY_BounceKeys_Enable: number
export const KEY_Break: number
export const KEY_Byelorussian_SHORTU: number
export const KEY_Byelorussian_shortu: number
export const KEY_C: number
export const KEY_CH: number
export const KEY_C_H: number
export const KEY_C_h: number
export const KEY_Cabovedot: number
export const KEY_Cacute: number
export const KEY_Cancel: number
export const KEY_Caps_Lock: number
export const KEY_Ccaron: number
export const KEY_Ccedilla: number
export const KEY_Ccircumflex: number
export const KEY_Ch: number
export const KEY_Clear: number
export const KEY_Codeinput: number
export const KEY_ColonSign: number
export const KEY_Control_L: number
export const KEY_Control_R: number
export const KEY_CruzeiroSign: number
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
export const KEY_Dabovedot: number
export const KEY_Dcaron: number
export const KEY_Delete: number
export const KEY_DongSign: number
export const KEY_Down: number
export const KEY_Dstroke: number
export const KEY_E: number
export const KEY_ENG: number
export const KEY_ETH: number
export const KEY_EZH: number
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
export const KEY_Emacron: number
export const KEY_End: number
export const KEY_Eogonek: number
export const KEY_Escape: number
export const KEY_Eth: number
export const KEY_Etilde: number
export const KEY_EuroSign: number
export const KEY_Execute: number
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
export const KEY_Find: number
export const KEY_First_Virtual_Screen: number
export const KEY_G: number
export const KEY_Gabovedot: number
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
export const KEY_Hiragana: number
export const KEY_Hiragana_Katakana: number
export const KEY_Home: number
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
export const KEY_Lbelowdot: number
export const KEY_Lcaron: number
export const KEY_Lcedilla: number
export const KEY_Left: number
export const KEY_Linefeed: number
export const KEY_LiraSign: number
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
export const KEY_Massyo: number
export const KEY_Menu: number
export const KEY_Meta_L: number
export const KEY_Meta_R: number
export const KEY_MillSign: number
export const KEY_Mode_switch: number
export const KEY_MouseKeys_Accel_Enable: number
export const KEY_MouseKeys_Enable: number
export const KEY_Muhenkan: number
export const KEY_Multi_key: number
export const KEY_MultipleCandidate: number
export const KEY_N: number
export const KEY_Nacute: number
export const KEY_NairaSign: number
export const KEY_Ncaron: number
export const KEY_Ncedilla: number
export const KEY_NewSheqelSign: number
export const KEY_Next: number
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
export const KEY_Oslash: number
export const KEY_Otilde: number
export const KEY_Overlay1_Enable: number
export const KEY_Overlay2_Enable: number
export const KEY_P: number
export const KEY_Pabovedot: number
export const KEY_Page_Down: number
export const KEY_Page_Up: number
export const KEY_Pause: number
export const KEY_PesetaSign: number
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
export const KEY_Redo: number
export const KEY_RepeatKeys_Enable: number
export const KEY_Return: number
export const KEY_Right: number
export const KEY_Romaji: number
export const KEY_RupeeSign: number
export const KEY_S: number
export const KEY_SCHWA: number
export const KEY_Sabovedot: number
export const KEY_Sacute: number
export const KEY_Scaron: number
export const KEY_Scedilla: number
export const KEY_Scircumflex: number
export const KEY_Scroll_Lock: number
export const KEY_Select: number
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
export const KEY_SingleCandidate: number
export const KEY_Sinh_a: number
export const KEY_Sinh_aa: number
export const KEY_Sinh_aa2: number
export const KEY_Sinh_ae: number
export const KEY_Sinh_ae2: number
export const KEY_Sinh_aee: number
export const KEY_Sinh_aee2: number
export const KEY_Sinh_ai: number
export const KEY_Sinh_ai2: number
export const KEY_Sinh_al: number
export const KEY_Sinh_au: number
export const KEY_Sinh_au2: number
export const KEY_Sinh_ba: number
export const KEY_Sinh_bha: number
export const KEY_Sinh_ca: number
export const KEY_Sinh_cha: number
export const KEY_Sinh_dda: number
export const KEY_Sinh_ddha: number
export const KEY_Sinh_dha: number
export const KEY_Sinh_dhha: number
export const KEY_Sinh_e: number
export const KEY_Sinh_e2: number
export const KEY_Sinh_ee: number
export const KEY_Sinh_ee2: number
export const KEY_Sinh_fa: number
export const KEY_Sinh_ga: number
export const KEY_Sinh_gha: number
export const KEY_Sinh_h2: number
export const KEY_Sinh_ha: number
export const KEY_Sinh_i: number
export const KEY_Sinh_i2: number
export const KEY_Sinh_ii: number
export const KEY_Sinh_ii2: number
export const KEY_Sinh_ja: number
export const KEY_Sinh_jha: number
export const KEY_Sinh_jnya: number
export const KEY_Sinh_ka: number
export const KEY_Sinh_kha: number
export const KEY_Sinh_kunddaliya: number
export const KEY_Sinh_la: number
export const KEY_Sinh_lla: number
export const KEY_Sinh_lu: number
export const KEY_Sinh_lu2: number
export const KEY_Sinh_luu: number
export const KEY_Sinh_luu2: number
export const KEY_Sinh_ma: number
export const KEY_Sinh_mba: number
export const KEY_Sinh_na: number
export const KEY_Sinh_ndda: number
export const KEY_Sinh_ndha: number
export const KEY_Sinh_ng: number
export const KEY_Sinh_ng2: number
export const KEY_Sinh_nga: number
export const KEY_Sinh_nja: number
export const KEY_Sinh_nna: number
export const KEY_Sinh_nya: number
export const KEY_Sinh_o: number
export const KEY_Sinh_o2: number
export const KEY_Sinh_oo: number
export const KEY_Sinh_oo2: number
export const KEY_Sinh_pa: number
export const KEY_Sinh_pha: number
export const KEY_Sinh_ra: number
export const KEY_Sinh_ri: number
export const KEY_Sinh_rii: number
export const KEY_Sinh_ru2: number
export const KEY_Sinh_ruu2: number
export const KEY_Sinh_sa: number
export const KEY_Sinh_sha: number
export const KEY_Sinh_ssha: number
export const KEY_Sinh_tha: number
export const KEY_Sinh_thha: number
export const KEY_Sinh_tta: number
export const KEY_Sinh_ttha: number
export const KEY_Sinh_u: number
export const KEY_Sinh_u2: number
export const KEY_Sinh_uu: number
export const KEY_Sinh_uu2: number
export const KEY_Sinh_va: number
export const KEY_Sinh_ya: number
export const KEY_SlowKeys_Enable: number
export const KEY_StickyKeys_Enable: number
export const KEY_Super_L: number
export const KEY_Super_R: number
export const KEY_Sys_Req: number
export const KEY_T: number
export const KEY_THORN: number
export const KEY_Tab: number
export const KEY_Tabovedot: number
export const KEY_Tcaron: number
export const KEY_Tcedilla: number
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
export const KEY_Touroku: number
export const KEY_Tslash: number
export const KEY_U: number
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
export const KEY_Uogonek: number
export const KEY_Up: number
export const KEY_Uring: number
export const KEY_Utilde: number
export const KEY_V: number
export const KEY_VoidSymbol: number
export const KEY_W: number
export const KEY_Wacute: number
export const KEY_Wcircumflex: number
export const KEY_Wdiaeresis: number
export const KEY_Wgrave: number
export const KEY_WonSign: number
export const KEY_X: number
export const KEY_Xabovedot: number
export const KEY_Y: number
export const KEY_Yacute: number
export const KEY_Ybelowdot: number
export const KEY_Ycircumflex: number
export const KEY_Ydiaeresis: number
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
export const KEY_c_h: number
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
export const KEY_ch: number
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
export const KEY_dead_greek: number
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
export const KEY_ezh: number
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
export const KP_0: number
export const KP_1: number
export const KP_2: number
export const KP_3: number
export const KP_4: number
export const KP_5: number
export const KP_6: number
export const KP_7: number
export const KP_8: number
export const KP_9: number
export const KP_Add: number
export const KP_Begin: number
export const KP_Decimal: number
export const KP_Delete: number
export const KP_Divide: number
export const KP_Down: number
export const KP_End: number
export const KP_Enter: number
export const KP_Equal: number
export const KP_F1: number
export const KP_F2: number
export const KP_F3: number
export const KP_F4: number
export const KP_Home: number
export const KP_Insert: number
export const KP_Left: number
export const KP_Multiply: number
export const KP_Next: number
export const KP_Page_Down: number
export const KP_Page_Up: number
export const KP_Prior: number
export const KP_Right: number
export const KP_Separator: number
export const KP_Space: number
export const KP_Subtract: number
export const KP_Tab: number
export const KP_Up: number
export const Kana_Lock: number
export const Kana_Shift: number
export const Kanji: number
export const Kanji_Bangou: number
export const Katakana: number
export const Kcedilla: number
export const Korean_Won: number
export const L: number
export const L1: number
export const L10: number
export const L2: number
export const L3: number
export const L4: number
export const L5: number
export const L6: number
export const L7: number
export const L8: number
export const L9: number
export const Lacute: number
export const Last_Virtual_Screen: number
export const Lbelowdot: number
export const Lcaron: number
export const Lcedilla: number
export const Left: number
export const Linefeed: number
export const LiraSign: number
export const Lstroke: number
export const M: number
export const MAJOR_VERSION: number
export const MAX_COMPOSE_LEN: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const Mabovedot: number
export const Macedonia_DSE: number
export const Macedonia_GJE: number
export const Macedonia_KJE: number
export const Macedonia_dse: number
export const Macedonia_gje: number
export const Macedonia_kje: number
export const Mae_Koho: number
export const Massyo: number
export const Menu: number
export const Meta_L: number
export const Meta_R: number
export const MillSign: number
export const Mode_switch: number
export const MouseKeys_Accel_Enable: number
export const MouseKeys_Enable: number
export const Muhenkan: number
export const Multi_key: number
export const MultipleCandidate: number
export const N: number
export const Nacute: number
export const NairaSign: number
export const Ncaron: number
export const Ncedilla: number
export const NewSheqelSign: number
export const Next: number
export const Next_Virtual_Screen: number
export const Ntilde: number
export const Num_Lock: number
export const O: number
export const OE: number
export const Oacute: number
export const Obarred: number
export const Obelowdot: number
export const Ocaron: number
export const Ocircumflex: number
export const Ocircumflexacute: number
export const Ocircumflexbelowdot: number
export const Ocircumflexgrave: number
export const Ocircumflexhook: number
export const Ocircumflextilde: number
export const Odiaeresis: number
export const Odoubleacute: number
export const Ograve: number
export const Ohook: number
export const Ohorn: number
export const Ohornacute: number
export const Ohornbelowdot: number
export const Ohorngrave: number
export const Ohornhook: number
export const Ohorntilde: number
export const Omacron: number
export const Ooblique: number
export const Oslash: number
export const Otilde: number
export const Overlay1_Enable: number
export const Overlay2_Enable: number
export const P: number
export const PATH_CONFIG: string
export const PATH_FACTORY: string
export const PATH_IBUS: string
export const PATH_INPUT_CONTEXT: string
export const PATH_NOTIFICATIONS: string
export const PATH_PANEL: string
export const Pabovedot: number
export const Page_Down: number
export const Page_Up: number
export const Pause: number
export const PesetaSign: number
export const Pointer_Accelerate: number
export const Pointer_Button1: number
export const Pointer_Button2: number
export const Pointer_Button3: number
export const Pointer_Button4: number
export const Pointer_Button5: number
export const Pointer_Button_Dflt: number
export const Pointer_DblClick1: number
export const Pointer_DblClick2: number
export const Pointer_DblClick3: number
export const Pointer_DblClick4: number
export const Pointer_DblClick5: number
export const Pointer_DblClick_Dflt: number
export const Pointer_DfltBtnNext: number
export const Pointer_DfltBtnPrev: number
export const Pointer_Down: number
export const Pointer_DownLeft: number
export const Pointer_DownRight: number
export const Pointer_Drag1: number
export const Pointer_Drag2: number
export const Pointer_Drag3: number
export const Pointer_Drag4: number
export const Pointer_Drag5: number
export const Pointer_Drag_Dflt: number
export const Pointer_EnableKeys: number
export const Pointer_Left: number
export const Pointer_Right: number
export const Pointer_Up: number
export const Pointer_UpLeft: number
export const Pointer_UpRight: number
export const Prev_Virtual_Screen: number
export const PreviousCandidate: number
export const Print: number
export const Prior: number
export const Q: number
export const R: number
export const R1: number
export const R10: number
export const R11: number
export const R12: number
export const R13: number
export const R14: number
export const R15: number
export const R2: number
export const R3: number
export const R4: number
export const R5: number
export const R6: number
export const R7: number
export const R8: number
export const R9: number
export const Racute: number
export const Rcaron: number
export const Rcedilla: number
export const Redo: number
export const RepeatKeys_Enable: number
export const Return: number
export const Right: number
export const Romaji: number
export const RupeeSign: number
export const S: number
export const SCHWA: number
export const SERVICE_CONFIG: string
export const SERVICE_IBUS: string
export const SERVICE_NOTIFICATIONS: string
export const SERVICE_PANEL: string
export const Sabovedot: number
export const Sacute: number
export const Scaron: number
export const Scedilla: number
export const Scircumflex: number
export const Scroll_Lock: number
export const Select: number
export const Serbian_DJE: number
export const Serbian_DZE: number
export const Serbian_JE: number
export const Serbian_LJE: number
export const Serbian_NJE: number
export const Serbian_TSHE: number
export const Serbian_dje: number
export const Serbian_dze: number
export const Serbian_je: number
export const Serbian_lje: number
export const Serbian_nje: number
export const Serbian_tshe: number
export const Shift_L: number
export const Shift_Lock: number
export const Shift_R: number
export const SingleCandidate: number
export const SlowKeys_Enable: number
export const StickyKeys_Enable: number
export const Super_L: number
export const Super_R: number
export const Sys_Req: number
export const T: number
export const THORN: number
export const Tab: number
export const Tabovedot: number
export const Tcaron: number
export const Tcedilla: number
export const Terminate_Server: number
export const Thai_baht: number
export const Thai_bobaimai: number
export const Thai_chochan: number
export const Thai_chochang: number
export const Thai_choching: number
export const Thai_chochoe: number
export const Thai_dochada: number
export const Thai_dodek: number
export const Thai_fofa: number
export const Thai_fofan: number
export const Thai_hohip: number
export const Thai_honokhuk: number
export const Thai_khokhai: number
export const Thai_khokhon: number
export const Thai_khokhuat: number
export const Thai_khokhwai: number
export const Thai_khorakhang: number
export const Thai_kokai: number
export const Thai_lakkhangyao: number
export const Thai_lekchet: number
export const Thai_lekha: number
export const Thai_lekhok: number
export const Thai_lekkao: number
export const Thai_leknung: number
export const Thai_lekpaet: number
export const Thai_leksam: number
export const Thai_leksi: number
export const Thai_leksong: number
export const Thai_leksun: number
export const Thai_lochula: number
export const Thai_loling: number
export const Thai_lu: number
export const Thai_maichattawa: number
export const Thai_maiek: number
export const Thai_maihanakat: number
export const Thai_maihanakat_maitho: number
export const Thai_maitaikhu: number
export const Thai_maitho: number
export const Thai_maitri: number
export const Thai_maiyamok: number
export const Thai_moma: number
export const Thai_ngongu: number
export const Thai_nikhahit: number
export const Thai_nonen: number
export const Thai_nonu: number
export const Thai_oang: number
export const Thai_paiyannoi: number
export const Thai_phinthu: number
export const Thai_phophan: number
export const Thai_phophung: number
export const Thai_phosamphao: number
export const Thai_popla: number
export const Thai_rorua: number
export const Thai_ru: number
export const Thai_saraa: number
export const Thai_saraaa: number
export const Thai_saraae: number
export const Thai_saraaimaimalai: number
export const Thai_saraaimaimuan: number
export const Thai_saraam: number
export const Thai_sarae: number
export const Thai_sarai: number
export const Thai_saraii: number
export const Thai_sarao: number
export const Thai_sarau: number
export const Thai_saraue: number
export const Thai_sarauee: number
export const Thai_sarauu: number
export const Thai_sorusi: number
export const Thai_sosala: number
export const Thai_soso: number
export const Thai_sosua: number
export const Thai_thanthakhat: number
export const Thai_thonangmontho: number
export const Thai_thophuthao: number
export const Thai_thothahan: number
export const Thai_thothan: number
export const Thai_thothong: number
export const Thai_thothung: number
export const Thai_topatak: number
export const Thai_totao: number
export const Thai_wowaen: number
export const Thai_yoyak: number
export const Thai_yoying: number
export const Thorn: number
export const Touroku: number
export const Tslash: number
export const U: number
export const Uacute: number
export const Ubelowdot: number
export const Ubreve: number
export const Ucircumflex: number
export const Udiaeresis: number
export const Udoubleacute: number
export const Ugrave: number
export const Uhook: number
export const Uhorn: number
export const Uhornacute: number
export const Uhornbelowdot: number
export const Uhorngrave: number
export const Uhornhook: number
export const Uhorntilde: number
export const Ukrainian_GHE_WITH_UPTURN: number
export const Ukrainian_I: number
export const Ukrainian_IE: number
export const Ukrainian_YI: number
export const Ukrainian_ghe_with_upturn: number
export const Ukrainian_i: number
export const Ukrainian_ie: number
export const Ukrainian_yi: number
export const Ukranian_I: number
export const Ukranian_JE: number
export const Ukranian_YI: number
export const Ukranian_i: number
export const Ukranian_je: number
export const Ukranian_yi: number
export const Umacron: number
export const Undo: number
export const Uogonek: number
export const Up: number
export const Uring: number
export const Utilde: number
export const V: number
export const VoidSymbol: number
export const W: number
export const Wacute: number
export const Wcircumflex: number
export const Wdiaeresis: number
export const Wgrave: number
export const WonSign: number
export const X: number
export const Xabovedot: number
export const Y: number
export const Yacute: number
export const Ybelowdot: number
export const Ycircumflex: number
export const Ydiaeresis: number
export const Ygrave: number
export const Yhook: number
export const Ytilde: number
export const Z: number
export const Zabovedot: number
export const Zacute: number
export const Zcaron: number
export const Zen_Koho: number
export const Zenkaku: number
export const Zenkaku_Hankaku: number
export const Zstroke: number
export const a: number
export const aacute: number
export const abelowdot: number
export const abovedot: number
export const abreve: number
export const abreveacute: number
export const abrevebelowdot: number
export const abrevegrave: number
export const abrevehook: number
export const abrevetilde: number
export const acircumflex: number
export const acircumflexacute: number
export const acircumflexbelowdot: number
export const acircumflexgrave: number
export const acircumflexhook: number
export const acircumflextilde: number
export const acute: number
export const adiaeresis: number
export const ae: number
export const agrave: number
export const ahook: number
export const amacron: number
export const ampersand: number
export const aogonek: number
export const apostrophe: number
export const approxeq: number
export const approximate: number
export const aring: number
export const asciicircum: number
export const asciitilde: number
export const asterisk: number
export const at: number
export const atilde: number
export const b: number
export const babovedot: number
export const backslash: number
export const ballotcross: number
export const bar: number
export const because: number
export const blank: number
export const botintegral: number
export const botleftparens: number
export const botleftsqbracket: number
export const botleftsummation: number
export const botrightparens: number
export const botrightsqbracket: number
export const botrightsummation: number
export const bott: number
export const botvertsummationconnector: number
export const braceleft: number
export const braceright: number
export const bracketleft: number
export const bracketright: number
export const braille_blank: number
export const braille_dot_1: number
export const braille_dot_10: number
export const braille_dot_2: number
export const braille_dot_3: number
export const braille_dot_4: number
export const braille_dot_5: number
export const braille_dot_6: number
export const braille_dot_7: number
export const braille_dot_8: number
export const braille_dot_9: number
export const braille_dots_1: number
export const braille_dots_12: number
export const braille_dots_123: number
export const braille_dots_1234: number
export const braille_dots_12345: number
export const braille_dots_123456: number
export const braille_dots_1234567: number
export const braille_dots_12345678: number
export const braille_dots_1234568: number
export const braille_dots_123457: number
export const braille_dots_1234578: number
export const braille_dots_123458: number
export const braille_dots_12346: number
export const braille_dots_123467: number
export const braille_dots_1234678: number
export const braille_dots_123468: number
export const braille_dots_12347: number
export const braille_dots_123478: number
export const braille_dots_12348: number
export const braille_dots_1235: number
export const braille_dots_12356: number
export const braille_dots_123567: number
export const braille_dots_1235678: number
export const braille_dots_123568: number
export const braille_dots_12357: number
export const braille_dots_123578: number
export const braille_dots_12358: number
export const braille_dots_1236: number
export const braille_dots_12367: number
export const braille_dots_123678: number
export const braille_dots_12368: number
export const braille_dots_1237: number
export const braille_dots_12378: number
export const braille_dots_1238: number
export const braille_dots_124: number
export const braille_dots_1245: number
export const braille_dots_12456: number
export const braille_dots_124567: number
export const braille_dots_1245678: number
export const braille_dots_124568: number
export const braille_dots_12457: number
export const braille_dots_124578: number
export const braille_dots_12458: number
export const braille_dots_1246: number
export const braille_dots_12467: number
export const braille_dots_124678: number
export const braille_dots_12468: number
export const braille_dots_1247: number
export const braille_dots_12478: number
export const braille_dots_1248: number
export const braille_dots_125: number
export const braille_dots_1256: number
export const braille_dots_12567: number
export const braille_dots_125678: number
export const braille_dots_12568: number
export const braille_dots_1257: number
export const braille_dots_12578: number
export const braille_dots_1258: number
export const braille_dots_126: number
export const braille_dots_1267: number
export const braille_dots_12678: number
export const braille_dots_1268: number
export const braille_dots_127: number
export const braille_dots_1278: number
export const braille_dots_128: number
export const braille_dots_13: number
export const braille_dots_134: number
export const braille_dots_1345: number
export const braille_dots_13456: number
export const braille_dots_134567: number
export const braille_dots_1345678: number
export const braille_dots_134568: number
export const braille_dots_13457: number
export const braille_dots_134578: number
export const braille_dots_13458: number
export const braille_dots_1346: number
export const braille_dots_13467: number
export const braille_dots_134678: number
export const braille_dots_13468: number
export const braille_dots_1347: number
export const braille_dots_13478: number
export const braille_dots_1348: number
export const braille_dots_135: number
export const braille_dots_1356: number
export const braille_dots_13567: number
export const braille_dots_135678: number
export const braille_dots_13568: number
export const braille_dots_1357: number
export const braille_dots_13578: number
export const braille_dots_1358: number
export const braille_dots_136: number
export const braille_dots_1367: number
export const braille_dots_13678: number
export const braille_dots_1368: number
export const braille_dots_137: number
export const braille_dots_1378: number
export const braille_dots_138: number
export const braille_dots_14: number
export const braille_dots_145: number
export const braille_dots_1456: number
export const braille_dots_14567: number
export const braille_dots_145678: number
export const braille_dots_14568: number
export const braille_dots_1457: number
export const braille_dots_14578: number
export const braille_dots_1458: number
export const braille_dots_146: number
export const braille_dots_1467: number
export const braille_dots_14678: number
export const braille_dots_1468: number
export const braille_dots_147: number
export const braille_dots_1478: number
export const braille_dots_148: number
export const braille_dots_15: number
export const braille_dots_156: number
export const braille_dots_1567: number
export const braille_dots_15678: number
export const braille_dots_1568: number
export const braille_dots_157: number
export const braille_dots_1578: number
export const braille_dots_158: number
export const braille_dots_16: number
export const braille_dots_167: number
export const braille_dots_1678: number
export const braille_dots_168: number
export const braille_dots_17: number
export const braille_dots_178: number
export const braille_dots_18: number
export const braille_dots_2: number
export const braille_dots_23: number
export const braille_dots_234: number
export const braille_dots_2345: number
export const braille_dots_23456: number
export const braille_dots_234567: number
export const braille_dots_2345678: number
export const braille_dots_234568: number
export const braille_dots_23457: number
export const braille_dots_234578: number
export const braille_dots_23458: number
export const braille_dots_2346: number
export const braille_dots_23467: number
export const braille_dots_234678: number
export const braille_dots_23468: number
export const braille_dots_2347: number
export const braille_dots_23478: number
export const braille_dots_2348: number
export const braille_dots_235: number
export const braille_dots_2356: number
export const braille_dots_23567: number
export const braille_dots_235678: number
export const braille_dots_23568: number
export const braille_dots_2357: number
export const braille_dots_23578: number
export const braille_dots_2358: number
export const braille_dots_236: number
export const braille_dots_2367: number
export const braille_dots_23678: number
export const braille_dots_2368: number
export const braille_dots_237: number
export const braille_dots_2378: number
export const braille_dots_238: number
export const braille_dots_24: number
export const braille_dots_245: number
export const braille_dots_2456: number
export const braille_dots_24567: number
export const braille_dots_245678: number
export const braille_dots_24568: number
export const braille_dots_2457: number
export const braille_dots_24578: number
export const braille_dots_2458: number
export const braille_dots_246: number
export const braille_dots_2467: number
export const braille_dots_24678: number
export const braille_dots_2468: number
export const braille_dots_247: number
export const braille_dots_2478: number
export const braille_dots_248: number
export const braille_dots_25: number
export const braille_dots_256: number
export const braille_dots_2567: number
export const braille_dots_25678: number
export const braille_dots_2568: number
export const braille_dots_257: number
export const braille_dots_2578: number
export const braille_dots_258: number
export const braille_dots_26: number
export const braille_dots_267: number
export const braille_dots_2678: number
export const braille_dots_268: number
export const braille_dots_27: number
export const braille_dots_278: number
export const braille_dots_28: number
export const braille_dots_3: number
export const braille_dots_34: number
export const braille_dots_345: number
export const braille_dots_3456: number
export const braille_dots_34567: number
export const braille_dots_345678: number
export const braille_dots_34568: number
export const braille_dots_3457: number
export const braille_dots_34578: number
export const braille_dots_3458: number
export const braille_dots_346: number
export const braille_dots_3467: number
export const braille_dots_34678: number
export const braille_dots_3468: number
export const braille_dots_347: number
export const braille_dots_3478: number
export const braille_dots_348: number
export const braille_dots_35: number
export const braille_dots_356: number
export const braille_dots_3567: number
export const braille_dots_35678: number
export const braille_dots_3568: number
export const braille_dots_357: number
export const braille_dots_3578: number
export const braille_dots_358: number
export const braille_dots_36: number
export const braille_dots_367: number
export const braille_dots_3678: number
export const braille_dots_368: number
export const braille_dots_37: number
export const braille_dots_378: number
export const braille_dots_38: number
export const braille_dots_4: number
export const braille_dots_45: number
export const braille_dots_456: number
export const braille_dots_4567: number
export const braille_dots_45678: number
export const braille_dots_4568: number
export const braille_dots_457: number
export const braille_dots_4578: number
export const braille_dots_458: number
export const braille_dots_46: number
export const braille_dots_467: number
export const braille_dots_4678: number
export const braille_dots_468: number
export const braille_dots_47: number
export const braille_dots_478: number
export const braille_dots_48: number
export const braille_dots_5: number
export const braille_dots_56: number
export const braille_dots_567: number
export const braille_dots_5678: number
export const braille_dots_568: number
export const braille_dots_57: number
export const braille_dots_578: number
export const braille_dots_58: number
export const braille_dots_6: number
export const braille_dots_67: number
export const braille_dots_678: number
export const braille_dots_68: number
export const braille_dots_7: number
export const braille_dots_78: number
export const braille_dots_8: number
export const breve: number
export const brokenbar: number
export const c: number
export const cabovedot: number
export const cacute: number
export const careof: number
export const caret: number
export const caron: number
export const ccaron: number
export const ccedilla: number
export const ccircumflex: number
export const cedilla: number
export const cent: number
export const checkerboard: number
export const checkmark: number
export const circle: number
export const club: number
export const colon: number
export const comma: number
export const containsas: number
export const copyright: number
export const cr: number
export const crossinglines: number
export const cuberoot: number
export const currency: number
export const cursor: number
export const d: number
export const dabovedot: number
export const dagger: number
export const dcaron: number
export const dead_abovecomma: number
export const dead_abovedot: number
export const dead_abovereversedcomma: number
export const dead_abovering: number
export const dead_acute: number
export const dead_belowbreve: number
export const dead_belowcircumflex: number
export const dead_belowdiaeresis: number
export const dead_belowdot: number
export const dead_belowmacron: number
export const dead_belowring: number
export const dead_belowtilde: number
export const dead_breve: number
export const dead_caron: number
export const dead_cedilla: number
export const dead_circumflex: number
export const dead_dasia: number
export const dead_diaeresis: number
export const dead_doubleacute: number
export const dead_grave: number
export const dead_hook: number
export const dead_horn: number
export const dead_iota: number
export const dead_macron: number
export const dead_ogonek: number
export const dead_perispomeni: number
export const dead_psili: number
export const dead_semivoiced_sound: number
export const dead_stroke: number
export const dead_tilde: number
export const dead_voiced_sound: number
export const decimalpoint: number
export const degree: number
export const diaeresis: number
export const diamond: number
export const digitspace: number
export const dintegral: number
export const division: number
export const dollar: number
export const doubbaselinedot: number
export const doubleacute: number
export const doubledagger: number
export const doublelowquotemark: number
export const downarrow: number
export const downcaret: number
export const downshoe: number
export const downstile: number
export const downtack: number
export const dstroke: number
export const e: number
export const eabovedot: number
export const eacute: number
export const ebelowdot: number
export const ecaron: number
export const ecircumflex: number
export const ecircumflexacute: number
export const ecircumflexbelowdot: number
export const ecircumflexgrave: number
export const ecircumflexhook: number
export const ecircumflextilde: number
export const ediaeresis: number
export const egrave: number
export const ehook: number
export const eightsubscript: number
export const eightsuperior: number
export const elementof: number
export const ellipsis: number
export const em3space: number
export const em4space: number
export const emacron: number
export const emdash: number
export const emfilledcircle: number
export const emfilledrect: number
export const emopencircle: number
export const emopenrectangle: number
export const emptyset: number
export const emspace: number
export const endash: number
export const enfilledcircbullet: number
export const enfilledsqbullet: number
export const eng: number
export const enopencircbullet: number
export const enopensquarebullet: number
export const enspace: number
export const eogonek: number
export const equal: number
export const eth: number
export const etilde: number
export const exclam: number
export const exclamdown: number
export const f: number
export const fabovedot: number
export const femalesymbol: number
export const ff: number
export const figdash: number
export const filledlefttribullet: number
export const filledrectbullet: number
export const filledrighttribullet: number
export const filledtribulletdown: number
export const filledtribulletup: number
export const fiveeighths: number
export const fivesixths: number
export const fivesubscript: number
export const fivesuperior: number
export const fourfifths: number
export const foursubscript: number
export const foursuperior: number
export const fourthroot: number
export const function_: number
export const g: number
export const gabovedot: number
export const gbreve: number
export const gcaron: number
export const gcedilla: number
export const gcircumflex: number
export const grave: number
export const greater: number
export const greaterthanequal: number
export const guillemotleft: number
export const guillemotright: number
export const h: number
export const hairspace: number
export const hcircumflex: number
export const heart: number
export const hebrew_aleph: number
export const hebrew_ayin: number
export const hebrew_bet: number
export const hebrew_beth: number
export const hebrew_chet: number
export const hebrew_dalet: number
export const hebrew_daleth: number
export const hebrew_doublelowline: number
export const hebrew_finalkaph: number
export const hebrew_finalmem: number
export const hebrew_finalnun: number
export const hebrew_finalpe: number
export const hebrew_finalzade: number
export const hebrew_finalzadi: number
export const hebrew_gimel: number
export const hebrew_gimmel: number
export const hebrew_he: number
export const hebrew_het: number
export const hebrew_kaph: number
export const hebrew_kuf: number
export const hebrew_lamed: number
export const hebrew_mem: number
export const hebrew_nun: number
export const hebrew_pe: number
export const hebrew_qoph: number
export const hebrew_resh: number
export const hebrew_samech: number
export const hebrew_samekh: number
export const hebrew_shin: number
export const hebrew_taf: number
export const hebrew_taw: number
export const hebrew_tet: number
export const hebrew_teth: number
export const hebrew_waw: number
export const hebrew_yod: number
export const hebrew_zade: number
export const hebrew_zadi: number
export const hebrew_zain: number
export const hebrew_zayin: number
export const hexagram: number
export const horizconnector: number
export const horizlinescan1: number
export const horizlinescan3: number
export const horizlinescan5: number
export const horizlinescan7: number
export const horizlinescan9: number
export const hstroke: number
export const ht: number
export const hyphen: number
export const i: number
export const iacute: number
export const ibelowdot: number
export const ibreve: number
export const icircumflex: number
export const identical: number
export const idiaeresis: number
export const idotless: number
export const ifonlyif: number
export const igrave: number
export const ihook: number
export const imacron: number
export const implies: number
export const includedin: number
export const includes: number
export const infinity: number
export const integral: number
export const intersection: number
export const iogonek: number
export const itilde: number
export const j: number
export const jcircumflex: number
export const jot: number
export const k: number
export const kana_A: number
export const kana_CHI: number
export const kana_E: number
export const kana_FU: number
export const kana_HA: number
export const kana_HE: number
export const kana_HI: number
export const kana_HO: number
export const kana_HU: number
export const kana_I: number
export const kana_KA: number
export const kana_KE: number
export const kana_KI: number
export const kana_KO: number
export const kana_KU: number
export const kana_MA: number
export const kana_ME: number
export const kana_MI: number
export const kana_MO: number
export const kana_MU: number
export const kana_N: number
export const kana_NA: number
export const kana_NE: number
export const kana_NI: number
export const kana_NO: number
export const kana_NU: number
export const kana_O: number
export const kana_RA: number
export const kana_RE: number
export const kana_RI: number
export const kana_RO: number
export const kana_RU: number
export const kana_SA: number
export const kana_SE: number
export const kana_SHI: number
export const kana_SO: number
export const kana_SU: number
export const kana_TA: number
export const kana_TE: number
export const kana_TI: number
export const kana_TO: number
export const kana_TSU: number
export const kana_TU: number
export const kana_U: number
export const kana_WA: number
export const kana_WO: number
export const kana_YA: number
export const kana_YO: number
export const kana_YU: number
export const kana_a: number
export const kana_closingbracket: number
export const kana_comma: number
export const kana_conjunctive: number
export const kana_e: number
export const kana_fullstop: number
export const kana_i: number
export const kana_middledot: number
export const kana_o: number
export const kana_openingbracket: number
export const kana_switch: number
export const kana_tsu: number
export const kana_tu: number
export const kana_u: number
export const kana_ya: number
export const kana_yo: number
export const kana_yu: number
export const kappa: number
export const kcedilla: number
export const kra: number
export const l: number
export const lacute: number
export const latincross: number
export const lbelowdot: number
export const lcaron: number
export const lcedilla: number
export const leftanglebracket: number
export const leftarrow: number
export const leftcaret: number
export const leftdoublequotemark: number
export const leftmiddlecurlybrace: number
export const leftopentriangle: number
export const leftpointer: number
export const leftradical: number
export const leftshoe: number
export const leftsinglequotemark: number
export const leftt: number
export const lefttack: number
export const less: number
export const lessthanequal: number
export const lf: number
export const logicaland: number
export const logicalor: number
export const lowleftcorner: number
export const lowrightcorner: number
export const lstroke: number
export const m: number
export const mabovedot: number
export const macron: number
export const malesymbol: number
export const maltesecross: number
export const marker: number
export const masculine: number
export const minus: number
export const minutes: number
export const mu: number
export const multiply: number
export const musicalflat: number
export const musicalsharp: number
export const n: number
export const nabla: number
export const nacute: number
export const ncaron: number
export const ncedilla: number
export const ninesubscript: number
export const ninesuperior: number
export const nl: number
export const nobreakspace: number
export const notapproxeq: number
export const notelementof: number
export const notequal: number
export const notidentical: number
export const notsign: number
export const ntilde: number
export const numbersign: number
export const numerosign: number
export const o: number
export const oacute: number
export const obarred: number
export const obelowdot: number
export const ocaron: number
export const ocircumflex: number
export const ocircumflexacute: number
export const ocircumflexbelowdot: number
export const ocircumflexgrave: number
export const ocircumflexhook: number
export const ocircumflextilde: number
export const odiaeresis: number
export const odoubleacute: number
export const oe: number
export const ogonek: number
export const ograve: number
export const ohook: number
export const ohorn: number
export const ohornacute: number
export const ohornbelowdot: number
export const ohorngrave: number
export const ohornhook: number
export const ohorntilde: number
export const omacron: number
export const oneeighth: number
export const onefifth: number
export const onehalf: number
export const onequarter: number
export const onesixth: number
export const onesubscript: number
export const onesuperior: number
export const onethird: number
export const ooblique: number
export const openrectbullet: number
export const openstar: number
export const opentribulletdown: number
export const opentribulletup: number
export const ordfeminine: number
export const oslash: number
export const otilde: number
export const overbar: number
export const overline: number
export const p: number
export const pabovedot: number
export const paragraph: number
export const parenleft: number
export const parenright: number
export const partdifferential: number
export const partialderivative: number
export const percent: number
export const period: number
export const periodcentered: number
export const phonographcopyright: number
export const plus: number
export const plusminus: number
export const prescription: number
export const prolongedsound: number
export const punctspace: number
export const q: number
export const quad: number
export const question: number
export const questiondown: number
export const quotedbl: number
export const quoteleft: number
export const quoteright: number
export const r: number
export const racute: number
export const radical: number
export const rcaron: number
export const rcedilla: number
export const registered: number
export const rightanglebracket: number
export const rightarrow: number
export const rightcaret: number
export const rightdoublequotemark: number
export const rightmiddlecurlybrace: number
export const rightmiddlesummation: number
export const rightopentriangle: number
export const rightpointer: number
export const rightshoe: number
export const rightsinglequotemark: number
export const rightt: number
export const righttack: number
export const s: number
export const sabovedot: number
export const sacute: number
export const scaron: number
export const scedilla: number
export const schwa: number
export const scircumflex: number
export const script_switch: number
export const seconds: number
export const section: number
export const semicolon: number
export const semivoicedsound: number
export const seveneighths: number
export const sevensubscript: number
export const sevensuperior: number
export const signaturemark: number
export const signifblank: number
export const similarequal: number
export const singlelowquotemark: number
export const sixsubscript: number
export const sixsuperior: number
export const slash: number
export const soliddiamond: number
export const space: number
export const squareroot: number
export const ssharp: number
export const sterling: number
export const stricteq: number
export const t: number
export const tabovedot: number
export const tcaron: number
export const tcedilla: number
export const telephone: number
export const telephonerecorder: number
export const therefore: number
export const thinspace: number
export const thorn: number
export const threeeighths: number
export const threefifths: number
export const threequarters: number
export const threesubscript: number
export const threesuperior: number
export const tintegral: number
export const topintegral: number
export const topleftparens: number
export const topleftradical: number
export const topleftsqbracket: number
export const topleftsummation: number
export const toprightparens: number
export const toprightsqbracket: number
export const toprightsummation: number
export const topt: number
export const topvertsummationconnector: number
export const trademark: number
export const trademarkincircle: number
export const tslash: number
export const twofifths: number
export const twosubscript: number
export const twosuperior: number
export const twothirds: number
export const u: number
export const uacute: number
export const ubelowdot: number
export const ubreve: number
export const ucircumflex: number
export const udiaeresis: number
export const udoubleacute: number
export const ugrave: number
export const uhook: number
export const uhorn: number
export const uhornacute: number
export const uhornbelowdot: number
export const uhorngrave: number
export const uhornhook: number
export const uhorntilde: number
export const umacron: number
export const underbar: number
export const underscore: number
export const union: number
export const uogonek: number
export const uparrow: number
export const upcaret: number
export const upleftcorner: number
export const uprightcorner: number
export const upshoe: number
export const upstile: number
export const uptack: number
export const uring: number
export const utilde: number
export const v: number
export const variation: number
export const vertbar: number
export const vertconnector: number
export const voicedsound: number
export const vt: number
export const w: number
export const wacute: number
export const wcircumflex: number
export const wdiaeresis: number
export const wgrave: number
export const x: number
export const xabovedot: number
export const y: number
export const yacute: number
export const ybelowdot: number
export const ycircumflex: number
export const ydiaeresis: number
export const yen: number
export const ygrave: number
export const yhook: number
export const ytilde: number
export const z: number
export const zabovedot: number
export const zacute: number
export const zcaron: number
export const zerosubscript: number
export const zerosuperior: number
export const zstroke: number
export function attr_background_new(color: number, start_index: number, end_index: number): Attribute
export function attr_foreground_new(color: number, start_index: number, end_index: number): Attribute
export function attr_underline_new(underline_type: number, start_index: number, end_index: number): Attribute
export function error_quark(): GLib.Quark
export function free_strv(strv: string): void
export function get_address(): string
export function get_daemon_uid(): number
export function get_language_name(_locale: string): string
export function get_local_machine_id(): string
export function get_socket_path(): string
export function get_timeout(): number
export function get_untranslated_language_name(_locale: string): string
export function get_user_name(): string
export function init(): void
export function key_event_from_string(string: string, keyval: number, modifiers: number): boolean
export function key_event_to_string(keyval: number, modifiers: number): string
export function keyval_convert_case(symbol: number): [ /* lower */ number, /* upper */ number ]
export function keyval_from_name(keyval_name: string): number
export function keyval_name(keyval: number): string
export function keyval_to_lower(keyval: number): number
export function keyval_to_unicode(keyval: number): number
export function keyval_to_upper(keyval: number): number
export function main(): void
export function quit(): void
export function set_display(display: string): void
export function set_log_handler(verbose: boolean): void
export function unicode_to_keyval(wc: number): number
export function unset_log_handler(): void
export function write_address(address: string): void
export function xml_parse_buffer(buffer: string): XML
export function xml_parse_file(name: string): XML
export interface FreeFunc {
    (object: object): void
}
export interface ObjectDestroyFunc {
    (object: Object): void
}
export interface SerializableCopyFunc {
    (dest: Serializable, src: Serializable): boolean
}
export interface SerializableDeserializeFunc {
    (serializable: Serializable, variant: GLib.Variant): number
}
export interface SerializableSerializeFunc {
    (serializable: Serializable, builder: GLib.VariantBuilder): boolean
}
export interface AttrList_ConstructProps extends Serializable_ConstructProps {
}
export class AttrList {
    /* Fields of IBus-1.0.IBus.AttrList */
    parent: Serializable
    attributes: object[]
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.AttrList */
    append(attr: Attribute): void
    get(index: number): Attribute
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: AttrList) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: AttrList) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AttrList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AttrList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AttrList_ConstructProps)
    _init (config?: AttrList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AttrList
    static $gtype: GObject.Type
}
export interface Attribute_ConstructProps extends Serializable_ConstructProps {
}
export class Attribute {
    /* Fields of IBus-1.0.IBus.Attribute */
    parent: Serializable
    type: number
    value: number
    start_index: number
    end_index: number
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Attribute */
    get_attr_type(): number
    get_end_index(): number
    get_start_index(): number
    get_value(): number
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Attribute) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Attribute) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Attribute, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Attribute_ConstructProps)
    _init (config?: Attribute_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: number, value: number, start_index: number, end_index: number): Attribute
    static new(): Attribute
    static $gtype: GObject.Type
}
export interface Bus_ConstructProps extends Object_ConstructProps {
    connect_async?: boolean
}
export class Bus {
    /* Fields of IBus-1.0.IBus.Bus */
    parent: Object
    priv: BusPrivate
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Bus */
    add_match(rule: string): boolean
    add_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    add_match_async_finish(res: Gio.AsyncResult): boolean
    create_input_context(client_name: string): InputContext
    create_input_context_async(client_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    create_input_context_async_finish(res: Gio.AsyncResult): InputContext
    current_input_context(): string
    current_input_context_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    current_input_context_async_finish(res: Gio.AsyncResult): string
    exit(restart: boolean): boolean
    exit_async(restart: boolean, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    exit_async_finish(res: Gio.AsyncResult): boolean
    get_config(): Config
    get_connection(): Gio.DBusConnection
    get_engines_by_names(names: string[]): EngineDesc[]
    get_global_engine(): EngineDesc
    get_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_global_engine_async_finish(res: Gio.AsyncResult): EngineDesc
    get_ibus_property(property_name: string): GLib.Variant
    get_ibus_property_async(property_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_ibus_property_async_finish(res: Gio.AsyncResult): GLib.Variant
    get_name_owner(name: string): string
    get_name_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_name_owner_async_finish(res: Gio.AsyncResult): string
    get_use_global_engine(): boolean
    get_use_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_use_global_engine_async_finish(res: Gio.AsyncResult): boolean
    get_use_sys_layout(): boolean
    get_use_sys_layout_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_use_sys_layout_async_finish(res: Gio.AsyncResult): boolean
    hello(): string
    is_connected(): boolean
    is_global_engine_enabled(): boolean
    is_global_engine_enabled_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    is_global_engine_enabled_async_finish(res: Gio.AsyncResult): boolean
    list_active_engines(): EngineDesc[]
    list_active_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    list_active_engines_async_finish(res: Gio.AsyncResult): EngineDesc[]
    list_engines(): EngineDesc[]
    list_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    list_engines_async_finish(res: Gio.AsyncResult): EngineDesc[]
    list_names(): string[]
    list_queued_owners(name: string): string[]
    name_has_owner(name: string): boolean
    name_has_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    name_has_owner_async_finish(res: Gio.AsyncResult): boolean
    preload_engines(names: string[]): boolean
    preload_engines_async(names: string[], timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    preload_engines_async_finish(res: Gio.AsyncResult): boolean
    register_component(component: Component): boolean
    register_component_async(component: Component, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    register_component_async_finish(res: Gio.AsyncResult): boolean
    release_name(name: string): number
    release_name_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    release_name_async_finish(res: Gio.AsyncResult): number
    remove_match(rule: string): boolean
    remove_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    remove_match_async_finish(res: Gio.AsyncResult): boolean
    request_name(name: string, flags: number): number
    request_name_async(name: string, flags: number, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    request_name_async_finish(res: Gio.AsyncResult): number
    set_global_engine(global_engine: string): boolean
    set_global_engine_async(global_engine: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    set_global_engine_async_finish(res: Gio.AsyncResult): boolean
    set_ibus_property(property_name: string, value: GLib.Variant): void
    set_ibus_property_async(property_name: string, value: GLib.Variant, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    set_ibus_property_async_finish(res: Gio.AsyncResult): boolean
    set_watch_dbus_signal(watch: boolean): void
    set_watch_ibus_signal(watch: boolean): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Bus */
    connect(sigName: "connected", callback: (($obj: Bus) => void)): number
    connect_after(sigName: "connected", callback: (($obj: Bus) => void)): number
    emit(sigName: "connected"): void
    connect(sigName: "disconnected", callback: (($obj: Bus) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Bus) => void)): number
    emit(sigName: "disconnected"): void
    connect(sigName: "global-engine-changed", callback: (($obj: Bus, name: string) => void)): number
    connect_after(sigName: "global-engine-changed", callback: (($obj: Bus, name: string) => void)): number
    emit(sigName: "global-engine-changed", name: string): void
    connect(sigName: "name-owner-changed", callback: (($obj: Bus, name: string, old_owner: string, new_owner: string) => void)): number
    connect_after(sigName: "name-owner-changed", callback: (($obj: Bus, name: string, old_owner: string, new_owner: string) => void)): number
    emit(sigName: "name-owner-changed", name: string, old_owner: string, new_owner: string): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Bus) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Bus) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Bus_ConstructProps)
    _init (config?: Bus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Bus
    static new_async(): Bus
    static $gtype: GObject.Type
}
export interface Component_ConstructProps extends Serializable_ConstructProps {
    author?: string
    command_line?: string
    description?: string
    homepage?: string
    license?: string
    name?: string
    textdomain?: string
    version?: string
}
export class Component {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Component */
    add_engine(engine: EngineDesc): void
    add_observed_path(path: string, access_fs: boolean): void
    check_modification(): boolean
    get_author(): string
    get_description(): string
    get_engines(): EngineDesc[]
    get_exec(): string
    get_homepage(): string
    get_license(): string
    get_name(): string
    get_observed_paths(): ObservedPath[]
    get_textdomain(): string
    get_version(): string
    output(output: GLib.String, indent: number): void
    output_engines(output: GLib.String, indent: number): void
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Component) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Component) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, description: string, version: string, license: string, author: string, homepage: string, command_line: string, textdomain: string): Component
    static new(): Component
    static new_from_file(filename: string): Component
    static new_from_xml_node(node: XML): Component
    static $gtype: GObject.Type
}
export interface Config_ConstructProps extends Proxy_ConstructProps {
}
export class Config {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of IBus-1.0.IBus.Proxy */
    parent: Gio.DBusProxy
    flags: number
    own: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Config */
    get_value(section: string, name: string): GLib.Variant
    get_value_async(section: string, name: string, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_value_async_finish(result: Gio.AsyncResult): GLib.Variant
    get_values(section: string): GLib.Variant
    get_values_async(section: string, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_values_async_finish(result: Gio.AsyncResult): GLib.Variant
    set_value(section: string, name: string, value: GLib.Variant): boolean
    set_value_async(section: string, name: string, value: GLib.Variant, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    set_value_async_finish(result: Gio.AsyncResult): boolean
    unset(section: string, name: string): boolean
    unwatch(section?: string | null, name?: string | null): boolean
    watch(section?: string | null, name?: string | null): boolean
    /* Methods of IBus-1.0.IBus.Proxy */
    destroy(): void
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of IBus-1.0.IBus.Proxy */
    vfunc_destroy(): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Config */
    connect(sigName: "value-changed", callback: (($obj: Config, section: string, name: string, value: GLib.Variant) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: Config, section: string, name: string, value: GLib.Variant) => void)): number
    emit(sigName: "value-changed", section: string, name: string, value: GLib.Variant): void
    /* Signals of IBus-1.0.IBus.Proxy */
    connect(sigName: "destroy", callback: (($obj: Config) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Config) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Config, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Config, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Config, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Config, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): Config
    static new_async_finish(res: Gio.AsyncResult): Config
    static new_async(connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface ConfigService_ConstructProps extends Service_ConstructProps {
}
export class ConfigService {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.ConfigService */
    value_changed(section: string, name: string, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Service */
    emit_signal(dest_bus_name: string, interface_name: string, signal_name: string, parameters: GLib.Variant): boolean
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    register(connection: Gio.DBusConnection): boolean
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.ConfigService */
    vfunc_get_value(section: string, name: string): GLib.Variant
    vfunc_get_values(section: string): GLib.Variant
    vfunc_set_value(section: string, name: string, value: GLib.Variant): boolean
    vfunc_unset_value(section: string, name: string): boolean
    /* Virtual methods of IBus-1.0.IBus.Service */
    vfunc_service_get_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string): GLib.Variant | null
    vfunc_service_method_call(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation): void
    vfunc_service_set_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: ConfigService) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ConfigService) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConfigService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConfigService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConfigService_ConstructProps)
    _init (config?: ConfigService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection): ConfigService
    static new(connection: Gio.DBusConnection, path: string): ConfigService
    static new(): ConfigService
    static $gtype: GObject.Type
}
export interface Engine_ConstructProps extends Service_ConstructProps {
    engine_name?: string
}
export class Engine {
    /* Fields of IBus-1.0.IBus.Engine */
    enabled: boolean
    has_focus: boolean
    cursor_area: Rectangle
    client_capabilities: number
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Engine */
    commit_text(text: Text): void
    delete_surrounding_text(offset: number, nchars: number): void
    forward_key_event(keyval: number, keycode: number, state: number): void
    get_content_type(): [ /* purpose */ number | null, /* hints */ number | null ]
    get_name(): string
    get_surrounding_text(): [ /* text */ Text | null, /* cursor_pos */ number | null, /* anchor_pos */ number | null ]
    hide_auxiliary_text(): void
    hide_lookup_table(): void
    hide_preedit_text(): void
    register_properties(prop_list: PropList): void
    show_auxiliary_text(): void
    show_lookup_table(): void
    show_preedit_text(): void
    update_auxiliary_text(text: Text, visible: boolean): void
    update_lookup_table(lookup_table: LookupTable, visible: boolean): void
    update_lookup_table_fast(lookup_table: LookupTable, visible: boolean): void
    update_preedit_text(text: Text, cursor_pos: number, visible: boolean): void
    update_preedit_text_with_mode(text: Text, cursor_pos: number, visible: boolean, mode: PreeditFocusMode): void
    update_property(prop: Property): void
    /* Methods of IBus-1.0.IBus.Service */
    emit_signal(dest_bus_name: string, interface_name: string, signal_name: string, parameters: GLib.Variant): boolean
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    register(connection: Gio.DBusConnection): boolean
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Engine */
    vfunc_cancel_hand_writing(n_strokes: number): void
    vfunc_candidate_clicked(index: number, button: number, state: number): void
    vfunc_cursor_down(): void
    vfunc_cursor_up(): void
    vfunc_disable(): void
    vfunc_enable(): void
    vfunc_focus_in(): void
    vfunc_focus_out(): void
    vfunc_page_down(): void
    vfunc_page_up(): void
    vfunc_process_hand_writing_event(coordinates: number, coordinates_len: number): void
    vfunc_process_key_event(keyval: number, keycode: number, state: number): boolean
    vfunc_property_activate(prop_name: string, prop_state: number): void
    vfunc_property_hide(prop_name: string): void
    vfunc_property_show(prop_name: string): void
    vfunc_reset(): void
    vfunc_set_capabilities(caps: number): void
    vfunc_set_content_type(purpose: number, hints: number): void
    vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void
    vfunc_set_surrounding_text(text: Text, cursor_index: number, anchor_pos: number): void
    /* Virtual methods of IBus-1.0.IBus.Service */
    vfunc_service_get_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string): GLib.Variant | null
    vfunc_service_method_call(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation): void
    vfunc_service_set_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Engine */
    connect(sigName: "cancel-hand-writing", callback: (($obj: Engine, n_strokes: number) => void)): number
    connect_after(sigName: "cancel-hand-writing", callback: (($obj: Engine, n_strokes: number) => void)): number
    emit(sigName: "cancel-hand-writing", n_strokes: number): void
    connect(sigName: "candidate-clicked", callback: (($obj: Engine, index: number, button: number, state: number) => void)): number
    connect_after(sigName: "candidate-clicked", callback: (($obj: Engine, index: number, button: number, state: number) => void)): number
    emit(sigName: "candidate-clicked", index: number, button: number, state: number): void
    connect(sigName: "cursor-down", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "cursor-down", callback: (($obj: Engine) => void)): number
    emit(sigName: "cursor-down"): void
    connect(sigName: "cursor-up", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "cursor-up", callback: (($obj: Engine) => void)): number
    emit(sigName: "cursor-up"): void
    connect(sigName: "disable", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "disable", callback: (($obj: Engine) => void)): number
    emit(sigName: "disable"): void
    connect(sigName: "enable", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "enable", callback: (($obj: Engine) => void)): number
    emit(sigName: "enable"): void
    connect(sigName: "focus-in", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "focus-in", callback: (($obj: Engine) => void)): number
    emit(sigName: "focus-in"): void
    connect(sigName: "focus-out", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "focus-out", callback: (($obj: Engine) => void)): number
    emit(sigName: "focus-out"): void
    connect(sigName: "page-down", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "page-down", callback: (($obj: Engine) => void)): number
    emit(sigName: "page-down"): void
    connect(sigName: "page-up", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "page-up", callback: (($obj: Engine) => void)): number
    emit(sigName: "page-up"): void
    connect(sigName: "process-hand-writing-event", callback: (($obj: Engine, coordinates: object, coordinates_len: number) => void)): number
    connect_after(sigName: "process-hand-writing-event", callback: (($obj: Engine, coordinates: object, coordinates_len: number) => void)): number
    emit(sigName: "process-hand-writing-event", coordinates: object, coordinates_len: number): void
    connect(sigName: "process-key-event", callback: (($obj: Engine, keyval: number, keycode: number, state: number) => boolean)): number
    connect_after(sigName: "process-key-event", callback: (($obj: Engine, keyval: number, keycode: number, state: number) => boolean)): number
    emit(sigName: "process-key-event", keyval: number, keycode: number, state: number): void
    connect(sigName: "property-activate", callback: (($obj: Engine, name: string, state: number) => void)): number
    connect_after(sigName: "property-activate", callback: (($obj: Engine, name: string, state: number) => void)): number
    emit(sigName: "property-activate", name: string, state: number): void
    connect(sigName: "property-hide", callback: (($obj: Engine, name: string) => void)): number
    connect_after(sigName: "property-hide", callback: (($obj: Engine, name: string) => void)): number
    emit(sigName: "property-hide", name: string): void
    connect(sigName: "property-show", callback: (($obj: Engine, name: string) => void)): number
    connect_after(sigName: "property-show", callback: (($obj: Engine, name: string) => void)): number
    emit(sigName: "property-show", name: string): void
    connect(sigName: "reset", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "reset", callback: (($obj: Engine) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "set-capabilities", callback: (($obj: Engine, caps: number) => void)): number
    connect_after(sigName: "set-capabilities", callback: (($obj: Engine, caps: number) => void)): number
    emit(sigName: "set-capabilities", caps: number): void
    connect(sigName: "set-content-type", callback: (($obj: Engine, purpose: number, hints: number) => void)): number
    connect_after(sigName: "set-content-type", callback: (($obj: Engine, purpose: number, hints: number) => void)): number
    emit(sigName: "set-content-type", purpose: number, hints: number): void
    connect(sigName: "set-cursor-location", callback: (($obj: Engine, x: number, y: number, w: number, h: number) => void)): number
    connect_after(sigName: "set-cursor-location", callback: (($obj: Engine, x: number, y: number, w: number, h: number) => void)): number
    emit(sigName: "set-cursor-location", x: number, y: number, w: number, h: number): void
    connect(sigName: "set-surrounding-text", callback: (($obj: Engine, text: GObject.Object, cursor_pos: number, anchor_pos: number) => void)): number
    connect_after(sigName: "set-surrounding-text", callback: (($obj: Engine, text: GObject.Object, cursor_pos: number, anchor_pos: number) => void)): number
    emit(sigName: "set-surrounding-text", text: GObject.Object, cursor_pos: number, anchor_pos: number): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Engine) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Engine) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Engine_ConstructProps)
    _init (config?: Engine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(engine_name: string, object_path: string, connection: Gio.DBusConnection): Engine
    static new(connection: Gio.DBusConnection, path: string): Engine
    static new(): Engine
    static new_with_type(engine_type: GObject.Type, engine_name: string, object_path: string, connection: Gio.DBusConnection): Engine
    static $gtype: GObject.Type
}
export interface EngineDesc_ConstructProps extends Serializable_ConstructProps {
    author?: string
    description?: string
    hotkeys?: string
    icon?: string
    icon_prop_key?: string
    language?: string
    layout?: string
    layout_option?: string
    layout_variant?: string
    license?: string
    longname?: string
    name?: string
    rank?: number
    setup?: string
    symbol?: string
    textdomain?: string
    version?: string
}
export class EngineDesc {
    /* Fields of IBus-1.0.IBus.EngineDesc */
    parent: Serializable
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.EngineDesc */
    get_author(): string
    get_description(): string
    get_hotkeys(): string
    get_icon(): string
    get_icon_prop_key(): string
    get_language(): string
    get_layout(): string
    get_layout_option(): string
    get_layout_variant(): string
    get_license(): string
    get_longname(): string
    get_name(): string
    get_rank(): number
    get_setup(): string
    get_symbol(): string
    get_textdomain(): string
    get_version(): string
    output(output: GLib.String, indent: number): void
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: EngineDesc) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: EngineDesc) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EngineDesc_ConstructProps)
    _init (config?: EngineDesc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, longname: string, description: string, language: string, license: string, author: string, icon: string, layout: string): EngineDesc
    static new(): EngineDesc
    static new_from_xml_node(node: XML): EngineDesc
    static $gtype: GObject.Type
}
export interface EngineSimple_ConstructProps extends Engine_ConstructProps {
}
export class EngineSimple {
    /* Fields of IBus-1.0.IBus.Engine */
    enabled: boolean
    has_focus: boolean
    cursor_area: Rectangle
    client_capabilities: number
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.EngineSimple */
    add_compose_file(file: string): boolean
    add_table(data: number[], max_seq_len: number, n_seqs: number): void
    add_table_by_locale(locale?: string | null): boolean
    /* Methods of IBus-1.0.IBus.Engine */
    commit_text(text: Text): void
    delete_surrounding_text(offset: number, nchars: number): void
    forward_key_event(keyval: number, keycode: number, state: number): void
    get_content_type(): [ /* purpose */ number | null, /* hints */ number | null ]
    get_name(): string
    get_surrounding_text(): [ /* text */ Text | null, /* cursor_pos */ number | null, /* anchor_pos */ number | null ]
    hide_auxiliary_text(): void
    hide_lookup_table(): void
    hide_preedit_text(): void
    register_properties(prop_list: PropList): void
    show_auxiliary_text(): void
    show_lookup_table(): void
    show_preedit_text(): void
    update_auxiliary_text(text: Text, visible: boolean): void
    update_lookup_table(lookup_table: LookupTable, visible: boolean): void
    update_lookup_table_fast(lookup_table: LookupTable, visible: boolean): void
    update_preedit_text(text: Text, cursor_pos: number, visible: boolean): void
    update_preedit_text_with_mode(text: Text, cursor_pos: number, visible: boolean, mode: PreeditFocusMode): void
    update_property(prop: Property): void
    /* Methods of IBus-1.0.IBus.Service */
    emit_signal(dest_bus_name: string, interface_name: string, signal_name: string, parameters: GLib.Variant): boolean
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    register(connection: Gio.DBusConnection): boolean
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Engine */
    vfunc_cancel_hand_writing(n_strokes: number): void
    vfunc_candidate_clicked(index: number, button: number, state: number): void
    vfunc_cursor_down(): void
    vfunc_cursor_up(): void
    vfunc_disable(): void
    vfunc_enable(): void
    vfunc_focus_in(): void
    vfunc_focus_out(): void
    vfunc_page_down(): void
    vfunc_page_up(): void
    vfunc_process_hand_writing_event(coordinates: number, coordinates_len: number): void
    vfunc_process_key_event(keyval: number, keycode: number, state: number): boolean
    vfunc_property_activate(prop_name: string, prop_state: number): void
    vfunc_property_hide(prop_name: string): void
    vfunc_property_show(prop_name: string): void
    vfunc_reset(): void
    vfunc_set_capabilities(caps: number): void
    vfunc_set_content_type(purpose: number, hints: number): void
    vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void
    vfunc_set_surrounding_text(text: Text, cursor_index: number, anchor_pos: number): void
    /* Virtual methods of IBus-1.0.IBus.Service */
    vfunc_service_get_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string): GLib.Variant | null
    vfunc_service_method_call(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation): void
    vfunc_service_set_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Engine */
    connect(sigName: "cancel-hand-writing", callback: (($obj: EngineSimple, n_strokes: number) => void)): number
    connect_after(sigName: "cancel-hand-writing", callback: (($obj: EngineSimple, n_strokes: number) => void)): number
    emit(sigName: "cancel-hand-writing", n_strokes: number): void
    connect(sigName: "candidate-clicked", callback: (($obj: EngineSimple, index: number, button: number, state: number) => void)): number
    connect_after(sigName: "candidate-clicked", callback: (($obj: EngineSimple, index: number, button: number, state: number) => void)): number
    emit(sigName: "candidate-clicked", index: number, button: number, state: number): void
    connect(sigName: "cursor-down", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "cursor-down", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "cursor-down"): void
    connect(sigName: "cursor-up", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "cursor-up", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "cursor-up"): void
    connect(sigName: "disable", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "disable", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "disable"): void
    connect(sigName: "enable", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "enable", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "enable"): void
    connect(sigName: "focus-in", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "focus-in", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "focus-in"): void
    connect(sigName: "focus-out", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "focus-out", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "focus-out"): void
    connect(sigName: "page-down", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "page-down", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "page-down"): void
    connect(sigName: "page-up", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "page-up", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "page-up"): void
    connect(sigName: "process-hand-writing-event", callback: (($obj: EngineSimple, coordinates: object, coordinates_len: number) => void)): number
    connect_after(sigName: "process-hand-writing-event", callback: (($obj: EngineSimple, coordinates: object, coordinates_len: number) => void)): number
    emit(sigName: "process-hand-writing-event", coordinates: object, coordinates_len: number): void
    connect(sigName: "process-key-event", callback: (($obj: EngineSimple, keyval: number, keycode: number, state: number) => boolean)): number
    connect_after(sigName: "process-key-event", callback: (($obj: EngineSimple, keyval: number, keycode: number, state: number) => boolean)): number
    emit(sigName: "process-key-event", keyval: number, keycode: number, state: number): void
    connect(sigName: "property-activate", callback: (($obj: EngineSimple, name: string, state: number) => void)): number
    connect_after(sigName: "property-activate", callback: (($obj: EngineSimple, name: string, state: number) => void)): number
    emit(sigName: "property-activate", name: string, state: number): void
    connect(sigName: "property-hide", callback: (($obj: EngineSimple, name: string) => void)): number
    connect_after(sigName: "property-hide", callback: (($obj: EngineSimple, name: string) => void)): number
    emit(sigName: "property-hide", name: string): void
    connect(sigName: "property-show", callback: (($obj: EngineSimple, name: string) => void)): number
    connect_after(sigName: "property-show", callback: (($obj: EngineSimple, name: string) => void)): number
    emit(sigName: "property-show", name: string): void
    connect(sigName: "reset", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "reset", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "set-capabilities", callback: (($obj: EngineSimple, caps: number) => void)): number
    connect_after(sigName: "set-capabilities", callback: (($obj: EngineSimple, caps: number) => void)): number
    emit(sigName: "set-capabilities", caps: number): void
    connect(sigName: "set-content-type", callback: (($obj: EngineSimple, purpose: number, hints: number) => void)): number
    connect_after(sigName: "set-content-type", callback: (($obj: EngineSimple, purpose: number, hints: number) => void)): number
    emit(sigName: "set-content-type", purpose: number, hints: number): void
    connect(sigName: "set-cursor-location", callback: (($obj: EngineSimple, x: number, y: number, w: number, h: number) => void)): number
    connect_after(sigName: "set-cursor-location", callback: (($obj: EngineSimple, x: number, y: number, w: number, h: number) => void)): number
    emit(sigName: "set-cursor-location", x: number, y: number, w: number, h: number): void
    connect(sigName: "set-surrounding-text", callback: (($obj: EngineSimple, text: GObject.Object, cursor_pos: number, anchor_pos: number) => void)): number
    connect_after(sigName: "set-surrounding-text", callback: (($obj: EngineSimple, text: GObject.Object, cursor_pos: number, anchor_pos: number) => void)): number
    emit(sigName: "set-surrounding-text", text: GObject.Object, cursor_pos: number, anchor_pos: number): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: EngineSimple) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: EngineSimple) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EngineSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EngineSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EngineSimple_ConstructProps)
    _init (config?: EngineSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(engine_name: string, object_path: string, connection: Gio.DBusConnection): EngineSimple
    static new(connection: Gio.DBusConnection, path: string): EngineSimple
    static new(): EngineSimple
    static $gtype: GObject.Type
}
export interface Factory_ConstructProps extends Service_ConstructProps {
}
export class Factory {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Factory */
    add_engine(engine_name: string, engine_type: GObject.Type): void
    create_engine(engine_name: string): Engine
    /* Methods of IBus-1.0.IBus.Service */
    emit_signal(dest_bus_name: string, interface_name: string, signal_name: string, parameters: GLib.Variant): boolean
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    register(connection: Gio.DBusConnection): boolean
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Factory */
    vfunc_create_engine(engine_name: string): Engine
    /* Virtual methods of IBus-1.0.IBus.Service */
    vfunc_service_get_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string): GLib.Variant | null
    vfunc_service_method_call(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation): void
    vfunc_service_set_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Factory */
    connect(sigName: "create-engine", callback: (($obj: Factory, engine_name: string) => Engine | null)): number
    connect_after(sigName: "create-engine", callback: (($obj: Factory, engine_name: string) => Engine | null)): number
    emit(sigName: "create-engine", engine_name: string): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Factory) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Factory) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Factory_ConstructProps)
    _init (config?: Factory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection): Factory
    static new(connection: Gio.DBusConnection, path: string): Factory
    static new(): Factory
    static $gtype: GObject.Type
}
export interface HotkeyProfile_ConstructProps extends Serializable_ConstructProps {
}
export class HotkeyProfile {
    /* Fields of IBus-1.0.IBus.HotkeyProfile */
    parent: Serializable
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.HotkeyProfile */
    add_hotkey(keyval: number, modifiers: number, event: GLib.Quark): boolean
    add_hotkey_from_string(str: string, event: GLib.Quark): boolean
    filter_key_event(keyval: number, modifiers: number, prev_keyval: number, prev_modifiers: number, user_data: object): GLib.Quark
    lookup_hotkey(keyval: number, modifiers: number): GLib.Quark
    remove_hotkey(keyval: number, modifiers: number): boolean
    remove_hotkey_by_event(event: GLib.Quark): boolean
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.HotkeyProfile */
    vfunc_trigger(event: GLib.Quark): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.HotkeyProfile */
    connect(sigName: "trigger", callback: (($obj: HotkeyProfile, event: number, user_data: object) => void)): number
    connect_after(sigName: "trigger", callback: (($obj: HotkeyProfile, event: number, user_data: object) => void)): number
    emit(sigName: "trigger", event: number, user_data: object): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: HotkeyProfile) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: HotkeyProfile) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HotkeyProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HotkeyProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HotkeyProfile_ConstructProps)
    _init (config?: HotkeyProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HotkeyProfile
    static $gtype: GObject.Type
}
export interface InputContext_ConstructProps extends Proxy_ConstructProps {
}
export class InputContext {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of IBus-1.0.IBus.InputContext */
    parent: Proxy
    /* Fields of IBus-1.0.IBus.Proxy */
    flags: number
    own: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.InputContext */
    cancel_hand_writing(n_strokes: number): void
    focus_in(): void
    focus_out(): void
    get_engine(): EngineDesc
    get_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_engine_async_finish(res: Gio.AsyncResult): EngineDesc
    needs_surrounding_text(): boolean
    process_hand_writing_event(coordinates: number, coordinates_len: number): void
    process_key_event(keyval: number, keycode: number, state: number): boolean
    process_key_event_async(keyval: number, keycode: number, state: number, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    process_key_event_async_finish(res: Gio.AsyncResult): boolean
    property_activate(prop_name: string, state: number): void
    reset(): void
    set_capabilities(capabilities: number): void
    set_content_type(purpose: number, hints: number): void
    set_cursor_location(x: number, y: number, w: number, h: number): void
    set_engine(name: string): void
    set_surrounding_text(text: Text, cursor_pos: number, anchor_pos: number): void
    /* Methods of IBus-1.0.IBus.Proxy */
    destroy(): void
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of IBus-1.0.IBus.Proxy */
    vfunc_destroy(): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.InputContext */
    connect(sigName: "commit-text", callback: (($obj: InputContext, text: Text) => void)): number
    connect_after(sigName: "commit-text", callback: (($obj: InputContext, text: Text) => void)): number
    emit(sigName: "commit-text", text: Text): void
    connect(sigName: "cursor-down-lookup-table", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "cursor-down-lookup-table", callback: (($obj: InputContext) => void)): number
    emit(sigName: "cursor-down-lookup-table"): void
    connect(sigName: "cursor-up-lookup-table", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "cursor-up-lookup-table", callback: (($obj: InputContext) => void)): number
    emit(sigName: "cursor-up-lookup-table"): void
    connect(sigName: "delete-surrounding-text", callback: (($obj: InputContext, offset: number, n_chars: number) => void)): number
    connect_after(sigName: "delete-surrounding-text", callback: (($obj: InputContext, offset: number, n_chars: number) => void)): number
    emit(sigName: "delete-surrounding-text", offset: number, n_chars: number): void
    connect(sigName: "disabled", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "disabled", callback: (($obj: InputContext) => void)): number
    emit(sigName: "disabled"): void
    connect(sigName: "enabled", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "enabled", callback: (($obj: InputContext) => void)): number
    emit(sigName: "enabled"): void
    connect(sigName: "forward-key-event", callback: (($obj: InputContext, keyval: number, keycode: number, modifiers: number) => void)): number
    connect_after(sigName: "forward-key-event", callback: (($obj: InputContext, keyval: number, keycode: number, modifiers: number) => void)): number
    emit(sigName: "forward-key-event", keyval: number, keycode: number, modifiers: number): void
    connect(sigName: "hide-auxiliary-text", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "hide-auxiliary-text", callback: (($obj: InputContext) => void)): number
    emit(sigName: "hide-auxiliary-text"): void
    connect(sigName: "hide-lookup-table", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "hide-lookup-table", callback: (($obj: InputContext) => void)): number
    emit(sigName: "hide-lookup-table"): void
    connect(sigName: "hide-preedit-text", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "hide-preedit-text", callback: (($obj: InputContext) => void)): number
    emit(sigName: "hide-preedit-text"): void
    connect(sigName: "page-down-lookup-table", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "page-down-lookup-table", callback: (($obj: InputContext) => void)): number
    emit(sigName: "page-down-lookup-table"): void
    connect(sigName: "page-up-lookup-table", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "page-up-lookup-table", callback: (($obj: InputContext) => void)): number
    emit(sigName: "page-up-lookup-table"): void
    connect(sigName: "register-properties", callback: (($obj: InputContext, props: PropList) => void)): number
    connect_after(sigName: "register-properties", callback: (($obj: InputContext, props: PropList) => void)): number
    emit(sigName: "register-properties", props: PropList): void
    connect(sigName: "show-auxiliary-text", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "show-auxiliary-text", callback: (($obj: InputContext) => void)): number
    emit(sigName: "show-auxiliary-text"): void
    connect(sigName: "show-lookup-table", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "show-lookup-table", callback: (($obj: InputContext) => void)): number
    emit(sigName: "show-lookup-table"): void
    connect(sigName: "show-preedit-text", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "show-preedit-text", callback: (($obj: InputContext) => void)): number
    emit(sigName: "show-preedit-text"): void
    connect(sigName: "update-auxiliary-text", callback: (($obj: InputContext, text: Text, visible: boolean) => void)): number
    connect_after(sigName: "update-auxiliary-text", callback: (($obj: InputContext, text: Text, visible: boolean) => void)): number
    emit(sigName: "update-auxiliary-text", text: Text, visible: boolean): void
    connect(sigName: "update-lookup-table", callback: (($obj: InputContext, table: LookupTable, visible: boolean) => void)): number
    connect_after(sigName: "update-lookup-table", callback: (($obj: InputContext, table: LookupTable, visible: boolean) => void)): number
    emit(sigName: "update-lookup-table", table: LookupTable, visible: boolean): void
    connect(sigName: "update-preedit-text", callback: (($obj: InputContext, text: Text, cursor_pos: number, visible: boolean) => void)): number
    connect_after(sigName: "update-preedit-text", callback: (($obj: InputContext, text: Text, cursor_pos: number, visible: boolean) => void)): number
    emit(sigName: "update-preedit-text", text: Text, cursor_pos: number, visible: boolean): void
    connect(sigName: "update-property", callback: (($obj: InputContext, prop: Property) => void)): number
    connect_after(sigName: "update-property", callback: (($obj: InputContext, prop: Property) => void)): number
    emit(sigName: "update-property", prop: Property): void
    /* Signals of IBus-1.0.IBus.Proxy */
    connect(sigName: "destroy", callback: (($obj: InputContext) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: InputContext) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: InputContext, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: InputContext, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: InputContext, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: InputContext, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputContext_ConstructProps)
    _init (config?: InputContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): InputContext
    static new_async_finish(res: Gio.AsyncResult): InputContext
    static get_input_context(path: string, connection: Gio.DBusConnection): InputContext
    static get_input_context_async(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static get_input_context_async_finish(res: Gio.AsyncResult): InputContext
    static new_async(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface Keymap_ConstructProps extends Object_ConstructProps {
}
export class Keymap {
    /* Fields of IBus-1.0.IBus.Keymap */
    name: string
    keymap: number[]
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Keymap */
    lookup_keysym(keycode: number, state: number): number
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Keymap) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
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
    /* Static methods and pseudo-constructors */
    static new(name: string): Keymap
    static new(): Keymap
    static get(name: string): Keymap
    static $gtype: GObject.Type
}
export interface LookupTable_ConstructProps extends Serializable_ConstructProps {
}
export class LookupTable {
    /* Fields of IBus-1.0.IBus.LookupTable */
    parent: Serializable
    page_size: number
    cursor_pos: number
    cursor_visible: boolean
    round: boolean
    orientation: number
    candidates: object[]
    labels: object[]
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.LookupTable */
    append_candidate(text: Text): void
    append_label(text: Text): void
    clear(): void
    cursor_down(): boolean
    cursor_up(): boolean
    get_candidate(index: number): Text
    get_cursor_in_page(): number
    get_cursor_pos(): number
    get_label(index: number): Text
    get_number_of_candidates(): number
    get_orientation(): number
    get_page_size(): number
    is_cursor_visible(): boolean
    is_round(): boolean
    page_down(): boolean
    page_up(): boolean
    set_cursor_pos(cursor_pos: number): void
    set_cursor_visible(visible: boolean): void
    set_label(index: number, text: Text): void
    set_orientation(orientation: number): void
    set_page_size(page_size: number): void
    set_round(round: boolean): void
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: LookupTable) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: LookupTable) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LookupTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LookupTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LookupTable_ConstructProps)
    _init (config?: LookupTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(page_size: number, cursor_pos: number, cursor_visible: boolean, round: boolean): LookupTable
    static new(): LookupTable
    static $gtype: GObject.Type
}
export interface Object_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class Object {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Object) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Object) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Object
    static $gtype: GObject.Type
}
export interface ObservedPath_ConstructProps extends Serializable_ConstructProps {
}
export class ObservedPath {
    /* Fields of IBus-1.0.IBus.ObservedPath */
    parent: Serializable
    path: string
    mtime: number
    is_dir: boolean
    is_exist: boolean
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.ObservedPath */
    check_modification(): boolean
    output(output: GLib.String, indent: number): void
    traverse(dir_only: boolean): ObservedPath[]
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: ObservedPath) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: ObservedPath) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObservedPath, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObservedPath, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObservedPath_ConstructProps)
    _init (config?: ObservedPath_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, fill_stat: boolean): ObservedPath
    static new(): ObservedPath
    static new_from_xml_node(node: XML, fill_stat: boolean): ObservedPath
    static $gtype: GObject.Type
}
export interface PanelService_ConstructProps extends Service_ConstructProps {
}
export class PanelService {
    /* Fields of IBus-1.0.IBus.PanelService */
    parent: Service
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.PanelService */
    candidate_clicked(index: number, button: number, state: number): void
    cursor_down(): void
    cursor_up(): void
    page_down(): void
    page_up(): void
    property_activate(prop_name: string, prop_state: number): void
    property_hide(prop_name: string): void
    property_show(prop_name: string): void
    /* Methods of IBus-1.0.IBus.Service */
    emit_signal(dest_bus_name: string, interface_name: string, signal_name: string, parameters: GLib.Variant): boolean
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    register(connection: Gio.DBusConnection): boolean
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.PanelService */
    vfunc_cursor_down_lookup_table(): void
    vfunc_cursor_up_lookup_table(): void
    vfunc_destroy_context(input_context_path: string): void
    vfunc_focus_in(input_context_path: string): void
    vfunc_focus_out(input_context_path: string): void
    vfunc_hide_auxiliary_text(): void
    vfunc_hide_language_bar(): void
    vfunc_hide_lookup_table(): void
    vfunc_hide_preedit_text(): void
    vfunc_page_down_lookup_table(): void
    vfunc_page_up_lookup_table(): void
    vfunc_register_properties(prop_list: PropList): void
    vfunc_reset(): void
    vfunc_set_content_type(purpose: number, hints: number): void
    vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void
    vfunc_show_auxiliary_text(): void
    vfunc_show_language_bar(): void
    vfunc_show_lookup_table(): void
    vfunc_show_preedit_text(): void
    vfunc_start_setup(): void
    vfunc_state_changed(): void
    vfunc_update_auxiliary_text(text: Text, visible: boolean): void
    vfunc_update_lookup_table(lookup_table: LookupTable, visible: boolean): void
    vfunc_update_preedit_text(text: Text, cursor_pos: number, visible: boolean): void
    vfunc_update_property(prop: Property): void
    /* Virtual methods of IBus-1.0.IBus.Service */
    vfunc_service_get_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string): GLib.Variant | null
    vfunc_service_method_call(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation): void
    vfunc_service_set_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.PanelService */
    connect(sigName: "cursor-down-lookup-table", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "cursor-down-lookup-table", callback: (($obj: PanelService) => void)): number
    emit(sigName: "cursor-down-lookup-table"): void
    connect(sigName: "cursor-up-lookup-table", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "cursor-up-lookup-table", callback: (($obj: PanelService) => void)): number
    emit(sigName: "cursor-up-lookup-table"): void
    connect(sigName: "destroy-context", callback: (($obj: PanelService, input_context_path: string) => void)): number
    connect_after(sigName: "destroy-context", callback: (($obj: PanelService, input_context_path: string) => void)): number
    emit(sigName: "destroy-context", input_context_path: string): void
    connect(sigName: "focus-in", callback: (($obj: PanelService, input_context_path: string) => void)): number
    connect_after(sigName: "focus-in", callback: (($obj: PanelService, input_context_path: string) => void)): number
    emit(sigName: "focus-in", input_context_path: string): void
    connect(sigName: "focus-out", callback: (($obj: PanelService, input_context_path: string) => void)): number
    connect_after(sigName: "focus-out", callback: (($obj: PanelService, input_context_path: string) => void)): number
    emit(sigName: "focus-out", input_context_path: string): void
    connect(sigName: "hide-auxiliary-text", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "hide-auxiliary-text", callback: (($obj: PanelService) => void)): number
    emit(sigName: "hide-auxiliary-text"): void
    connect(sigName: "hide-language-bar", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "hide-language-bar", callback: (($obj: PanelService) => void)): number
    emit(sigName: "hide-language-bar"): void
    connect(sigName: "hide-lookup-table", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "hide-lookup-table", callback: (($obj: PanelService) => void)): number
    emit(sigName: "hide-lookup-table"): void
    connect(sigName: "hide-preedit-text", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "hide-preedit-text", callback: (($obj: PanelService) => void)): number
    emit(sigName: "hide-preedit-text"): void
    connect(sigName: "page-down-lookup-table", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "page-down-lookup-table", callback: (($obj: PanelService) => void)): number
    emit(sigName: "page-down-lookup-table"): void
    connect(sigName: "page-up-lookup-table", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "page-up-lookup-table", callback: (($obj: PanelService) => void)): number
    emit(sigName: "page-up-lookup-table"): void
    connect(sigName: "register-properties", callback: (($obj: PanelService, prop_list: PropList) => void)): number
    connect_after(sigName: "register-properties", callback: (($obj: PanelService, prop_list: PropList) => void)): number
    emit(sigName: "register-properties", prop_list: PropList): void
    connect(sigName: "reset", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "reset", callback: (($obj: PanelService) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "set-content-type", callback: (($obj: PanelService, purpose: number, hints: number) => void)): number
    connect_after(sigName: "set-content-type", callback: (($obj: PanelService, purpose: number, hints: number) => void)): number
    emit(sigName: "set-content-type", purpose: number, hints: number): void
    connect(sigName: "set-cursor-location", callback: (($obj: PanelService, x: number, y: number, w: number, h: number) => void)): number
    connect_after(sigName: "set-cursor-location", callback: (($obj: PanelService, x: number, y: number, w: number, h: number) => void)): number
    emit(sigName: "set-cursor-location", x: number, y: number, w: number, h: number): void
    connect(sigName: "show-auxiliary-text", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "show-auxiliary-text", callback: (($obj: PanelService) => void)): number
    emit(sigName: "show-auxiliary-text"): void
    connect(sigName: "show-language-bar", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "show-language-bar", callback: (($obj: PanelService) => void)): number
    emit(sigName: "show-language-bar"): void
    connect(sigName: "show-lookup-table", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "show-lookup-table", callback: (($obj: PanelService) => void)): number
    emit(sigName: "show-lookup-table"): void
    connect(sigName: "show-preedit-text", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "show-preedit-text", callback: (($obj: PanelService) => void)): number
    emit(sigName: "show-preedit-text"): void
    connect(sigName: "start-setup", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "start-setup", callback: (($obj: PanelService) => void)): number
    emit(sigName: "start-setup"): void
    connect(sigName: "state-changed", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: PanelService) => void)): number
    emit(sigName: "state-changed"): void
    connect(sigName: "update-auxiliary-text", callback: (($obj: PanelService, text: Text, visible: boolean) => void)): number
    connect_after(sigName: "update-auxiliary-text", callback: (($obj: PanelService, text: Text, visible: boolean) => void)): number
    emit(sigName: "update-auxiliary-text", text: Text, visible: boolean): void
    connect(sigName: "update-lookup-table", callback: (($obj: PanelService, lookup_table: LookupTable, visible: boolean) => void)): number
    connect_after(sigName: "update-lookup-table", callback: (($obj: PanelService, lookup_table: LookupTable, visible: boolean) => void)): number
    emit(sigName: "update-lookup-table", lookup_table: LookupTable, visible: boolean): void
    connect(sigName: "update-preedit-text", callback: (($obj: PanelService, text: Text, cursor_pos: number, visible: boolean) => void)): number
    connect_after(sigName: "update-preedit-text", callback: (($obj: PanelService, text: Text, cursor_pos: number, visible: boolean) => void)): number
    emit(sigName: "update-preedit-text", text: Text, cursor_pos: number, visible: boolean): void
    connect(sigName: "update-property", callback: (($obj: PanelService, prop: Property) => void)): number
    connect_after(sigName: "update-property", callback: (($obj: PanelService, prop: Property) => void)): number
    emit(sigName: "update-property", prop: Property): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: PanelService) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PanelService) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PanelService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PanelService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PanelService_ConstructProps)
    _init (config?: PanelService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection): PanelService
    static new(connection: Gio.DBusConnection, path: string): PanelService
    static new(): PanelService
    static $gtype: GObject.Type
}
export interface PropList_ConstructProps extends Serializable_ConstructProps {
}
export class PropList {
    /* Fields of IBus-1.0.IBus.PropList */
    parent: Serializable
    properties: object[]
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.PropList */
    append(prop: Property): void
    get(index: number): Property
    update_property(prop: Property): boolean
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: PropList) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: PropList) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PropList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PropList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PropList_ConstructProps)
    _init (config?: PropList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PropList
    static $gtype: GObject.Type
}
export interface Property_ConstructProps extends Serializable_ConstructProps {
    icon?: string
    key?: string
    label?: Text
    prop_type?: PropType
    sensitive?: boolean
    state?: PropState
    sub_props?: PropList
    symbol?: Text
    tooltip?: Text
    visible?: boolean
}
export class Property {
    /* Properties of IBus-1.0.IBus.Property */
    icon: string
    label: Text
    sensitive: boolean
    state: PropState
    sub_props: PropList
    symbol: Text
    tooltip: Text
    visible: boolean
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Property */
    get_icon(): string
    get_key(): string
    get_label(): Text
    get_prop_type(): PropType
    get_sensitive(): boolean
    get_state(): PropState
    get_sub_props(): PropList
    get_symbol(): Text
    get_tooltip(): Text
    get_visible(): boolean
    set_icon(icon: string): void
    set_label(label: Text): void
    set_sensitive(sensitive: boolean): void
    set_state(state: PropState): void
    set_sub_props(prop_list: PropList): void
    set_symbol(symbol: Text): void
    set_tooltip(tooltip: Text): void
    set_visible(visible: boolean): void
    update(prop_update: Property): boolean
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Property) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Property) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sub-props", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sub-props", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::symbol", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbol", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Property_ConstructProps)
    _init (config?: Property_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(key: string, type: PropType, label: Text, icon: string | null, tooltip: Text, sensitive: boolean, visible: boolean, state: PropState, prop_list?: PropList | null): Property
    static new(): Property
    static $gtype: GObject.Type
}
export interface Proxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class Proxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of IBus-1.0.IBus.Proxy */
    parent: Gio.DBusProxy
    flags: number
    own: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Proxy */
    destroy(): void
    /* Methods of Gio-2.0.Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string | null
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of IBus-1.0.IBus.Proxy */
    vfunc_destroy(): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Proxy */
    connect(sigName: "destroy", callback: (($obj: Proxy) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Proxy) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: Proxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Proxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: Proxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Proxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Registry_ConstructProps extends Serializable_ConstructProps {
}
export class Registry {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Registry */
    check_modification(): boolean
    get_components(): Component[]
    get_observed_paths(): ObservedPath[]
    load(): void
    load_cache(is_user: boolean): boolean
    load_cache_file(filename: string): boolean
    load_in_dir(dirname: string): void
    output(output: GLib.String, indent: number): void
    save_cache(is_user: boolean): boolean
    save_cache_file(filename: string): boolean
    start_monitor_changes(): void
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Registry */
    connect(sigName: "changed", callback: (($obj: Registry) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Registry) => void)): number
    emit(sigName: "changed"): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Registry) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Registry) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Registry
    static $gtype: GObject.Type
}
export interface Serializable_ConstructProps extends Object_ConstructProps {
}
export class Serializable {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Serializable) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Serializable) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Serializable_ConstructProps)
    _init (config?: Serializable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Serializable
    static deserialize(variant: GLib.Variant): Serializable
    static $gtype: GObject.Type
}
export interface Service_ConstructProps extends Object_ConstructProps {
    connection?: Gio.DBusConnection
    object_path?: string
}
export class Service {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Service */
    emit_signal(dest_bus_name: string, interface_name: string, signal_name: string, parameters: GLib.Variant): boolean
    get_connection(): Gio.DBusConnection
    get_object_path(): string
    register(connection: Gio.DBusConnection): boolean
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Service */
    vfunc_service_get_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string): GLib.Variant | null
    vfunc_service_method_call(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation): void
    vfunc_service_set_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Service) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Service) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, path: string): Service
    static new(): Service
    static add_interfaces(klass: Service | Function | GObject.Type, xml_data: string): boolean
    static $gtype: GObject.Type
}
export interface Text_ConstructProps extends Serializable_ConstructProps {
}
export class Text {
    /* Fields of IBus-1.0.IBus.Text */
    parent: Serializable
    is_static: boolean
    text: string
    attrs: AttrList
    /* Fields of IBus-1.0.IBus.Object */
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Text */
    append_attribute(type: number, value: number, start_index: number, end_index: number): void
    get_attributes(): AttrList
    get_length(): number
    get_text(): string
    set_attributes(attrs: AttrList): void
    /* Methods of IBus-1.0.IBus.Serializable */
    copy(): Serializable
    get_qattachment(key: GLib.Quark): GLib.Variant
    remove_qattachment(key: GLib.Quark): void
    serialize(): GLib.Variant
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of IBus-1.0.IBus.Serializable */
    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean
    /* Virtual methods of IBus-1.0.IBus.Object */
    vfunc_destroy(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of IBus-1.0.IBus.Object */
    connect(sigName: "destroy", callback: (($obj: Text) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Text) => void)): number
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_string(str: string): Text
    static new_from_ucs4(str: number): Text
    static new_from_unichar(c: number): Text
    static $gtype: GObject.Type
}
export abstract class AttrListClass {
    /* Fields of IBus-1.0.IBus.AttrListClass */
    parent: SerializableClass
    static name: string
}
export abstract class AttributeClass {
    /* Fields of IBus-1.0.IBus.AttributeClass */
    parent: SerializableClass
    static name: string
}
export abstract class BusClass {
    /* Fields of IBus-1.0.IBus.BusClass */
    parent: ObjectClass
    static name: string
}
export class BusPrivate {
    static name: string
}
export abstract class ComponentClass {
    /* Fields of IBus-1.0.IBus.ComponentClass */
    parent: SerializableClass
    static name: string
}
export class ComponentPrivate {
    static name: string
}
export abstract class ConfigClass {
    static name: string
}
export class ConfigPrivate {
    static name: string
}
export abstract class ConfigServiceClass {
    /* Fields of IBus-1.0.IBus.ConfigServiceClass */
    set_value: (config: ConfigService, section: string, name: string, value: GLib.Variant) => boolean
    get_value: (config: ConfigService, section: string, name: string) => GLib.Variant
    unset_value: (config: ConfigService, section: string, name: string) => boolean
    get_values: (config: ConfigService, section: string) => GLib.Variant
    static name: string
}
export abstract class EngineClass {
    /* Fields of IBus-1.0.IBus.EngineClass */
    process_key_event: (engine: Engine, keyval: number, keycode: number, state: number) => boolean
    focus_in: (engine: Engine) => void
    focus_out: (engine: Engine) => void
    reset: (engine: Engine) => void
    enable: (engine: Engine) => void
    disable: (engine: Engine) => void
    set_cursor_location: (engine: Engine, x: number, y: number, w: number, h: number) => void
    set_capabilities: (engine: Engine, caps: number) => void
    page_up: (engine: Engine) => void
    page_down: (engine: Engine) => void
    cursor_up: (engine: Engine) => void
    cursor_down: (engine: Engine) => void
    property_activate: (engine: Engine, prop_name: string, prop_state: number) => void
    property_show: (engine: Engine, prop_name: string) => void
    property_hide: (engine: Engine, prop_name: string) => void
    candidate_clicked: (engine: Engine, index: number, button: number, state: number) => void
    set_surrounding_text: (engine: Engine, text: Text, cursor_index: number, anchor_pos: number) => void
    process_hand_writing_event: (engine: Engine, coordinates: number, coordinates_len: number) => void
    cancel_hand_writing: (engine: Engine, n_strokes: number) => void
    set_content_type: (engine: Engine, purpose: number, hints: number) => void
    static name: string
}
export abstract class EngineDescClass {
    /* Fields of IBus-1.0.IBus.EngineDescClass */
    parent: SerializableClass
    static name: string
}
export class EngineDescPrivate {
    static name: string
}
export class EnginePrivate {
    static name: string
}
export abstract class EngineSimpleClass {
    static name: string
}
export class EngineSimplePrivate {
    static name: string
}
export abstract class FactoryClass {
    /* Fields of IBus-1.0.IBus.FactoryClass */
    create_engine: (factory: Factory, engine_name: string) => Engine
    static name: string
}
export class FactoryPrivate {
    static name: string
}
export abstract class HotkeyProfileClass {
    /* Fields of IBus-1.0.IBus.HotkeyProfileClass */
    parent: SerializableClass
    trigger: (profile: HotkeyProfile, event: GLib.Quark) => void
    static name: string
}
export abstract class InputContextClass {
    /* Fields of IBus-1.0.IBus.InputContextClass */
    parent: ProxyClass
    static name: string
}
export abstract class KeymapClass {
    /* Fields of IBus-1.0.IBus.KeymapClass */
    parent: ObjectClass
    static name: string
}
export abstract class LookupTableClass {
    /* Fields of IBus-1.0.IBus.LookupTableClass */
    parent: SerializableClass
    static name: string
}
export abstract class ObjectClass {
    /* Fields of IBus-1.0.IBus.ObjectClass */
    parent: GObject.InitiallyUnownedClass
    destroy: (object: Object) => void
    static name: string
}
export class ObjectPrivate {
    static name: string
}
export abstract class ObservedPathClass {
    /* Fields of IBus-1.0.IBus.ObservedPathClass */
    parent: SerializableClass
    static name: string
}
export abstract class PanelServiceClass {
    /* Fields of IBus-1.0.IBus.PanelServiceClass */
    parent: ServiceClass
    focus_in: (panel: PanelService, input_context_path: string) => void
    focus_out: (panel: PanelService, input_context_path: string) => void
    register_properties: (panel: PanelService, prop_list: PropList) => void
    set_cursor_location: (panel: PanelService, x: number, y: number, w: number, h: number) => void
    update_auxiliary_text: (panel: PanelService, text: Text, visible: boolean) => void
    update_lookup_table: (panel: PanelService, lookup_table: LookupTable, visible: boolean) => void
    update_preedit_text: (panel: PanelService, text: Text, cursor_pos: number, visible: boolean) => void
    update_property: (panel: PanelService, prop: Property) => void
    cursor_down_lookup_table: (panel: PanelService) => void
    cursor_up_lookup_table: (panel: PanelService) => void
    hide_auxiliary_text: (panel: PanelService) => void
    hide_language_bar: (panel: PanelService) => void
    hide_lookup_table: (panel: PanelService) => void
    hide_preedit_text: (panel: PanelService) => void
    page_down_lookup_table: (panel: PanelService) => void
    page_up_lookup_table: (panel: PanelService) => void
    reset: (panel: PanelService) => void
    show_auxiliary_text: (panel: PanelService) => void
    show_language_bar: (panel: PanelService) => void
    show_lookup_table: (panel: PanelService) => void
    show_preedit_text: (panel: PanelService) => void
    start_setup: (panel: PanelService) => void
    state_changed: (panel: PanelService) => void
    destroy_context: (panel: PanelService, input_context_path: string) => void
    set_content_type: (panel: PanelService, purpose: number, hints: number) => void
    static name: string
}
export abstract class PropListClass {
    /* Fields of IBus-1.0.IBus.PropListClass */
    parent: SerializableClass
    static name: string
}
export abstract class PropertyClass {
    /* Fields of IBus-1.0.IBus.PropertyClass */
    parent: SerializableClass
    static name: string
}
export class PropertyPrivate {
    static name: string
}
export abstract class ProxyClass {
    /* Fields of IBus-1.0.IBus.ProxyClass */
    parent: Gio.DBusProxyClass
    destroy: (proxy: Proxy) => void
    static name: string
}
export class Rectangle {
    /* Fields of IBus-1.0.IBus.Rectangle */
    x: number
    y: number
    width: number
    height: number
    static name: string
}
export abstract class RegistryClass {
    static name: string
}
export class RegistryPrivate {
    static name: string
}
export abstract class SerializableClass {
    /* Fields of IBus-1.0.IBus.SerializableClass */
    serialize: (object: Serializable, builder: GLib.VariantBuilder) => boolean
    deserialize: (object: Serializable, variant: GLib.Variant) => number
    copy: (dest: Serializable, src: Serializable) => boolean
    static name: string
}
export class SerializablePrivate {
    static name: string
}
export abstract class ServiceClass {
    /* Fields of IBus-1.0.IBus.ServiceClass */
    service_method_call: (service: Service, connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation) => void
    service_get_property: (service: Service, connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string) => GLib.Variant | null
    service_set_property: (service: Service, connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant) => boolean
    /* Methods of IBus-1.0.IBus.ServiceClass */
    add_interfaces(klass: Service | Function | GObject.Type, xml_data: string): boolean
    static name: string
}
export class ServicePrivate {
    static name: string
}
export abstract class TextClass {
    /* Fields of IBus-1.0.IBus.TextClass */
    parent: SerializableClass
    static name: string
}
export class XML {
    /* Fields of IBus-1.0.IBus.XML */
    name: string
    text: string
    attributes: string
    sub_nodes: object[]
    /* Methods of IBus-1.0.IBus.XML */
    copy(): XML
    free(): void
    output(output: GLib.String): void
    static name: string
    /* Static methods and pseudo-constructors */
    static parse_buffer(buffer: string): XML
    static parse_file(name: string): XML
}