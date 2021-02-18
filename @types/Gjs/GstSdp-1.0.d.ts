/**
 * GstSdp-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum MIKEYCacheType {
    NONE,
    ALWAYS,
    FOR_CSB,
}
export enum MIKEYEncAlg {
    NULL,
    AES_CM_128,
    AES_KW_128,
    AES_GCM_128,
}
export enum MIKEYKVType {
    NULL,
    SPI,
    INTERVAL,
}
export enum MIKEYKeyDataType {
    TGK,
    TEK,
}
export enum MIKEYMacAlg {
    NULL,
    HMAC_SHA_1_160,
}
export enum MIKEYMapType {
    MIKEY_MAP_TYPE_SRTP,
}
export enum MIKEYPRFFunc {
    MIKEY_PRF_MIKEY_1,
}
export enum MIKEYPayloadType {
    LAST,
    KEMAC,
    PKE,
    DH,
    SIGN,
    T,
    ID,
    CERT,
    CHASH,
    V,
    SP,
    RAND,
    ERR,
    KEY_DATA,
    GEN_EXT,
}
export enum MIKEYSecProto {
    MIKEY_SEC_PROTO_SRTP,
}
export enum MIKEYSecSRTP {
    ENC_ALG,
    ENC_KEY_LEN,
    AUTH_ALG,
    AUTH_KEY_LEN,
    SALT_KEY_LEN,
    PRF,
    KEY_DERIV_RATE,
    SRTP_ENC,
    SRTCP_ENC,
    FEC_ORDER,
    SRTP_AUTH,
    AUTH_TAG_LEN,
    SRTP_PREFIX_LEN,
    AEAD_AUTH_TAG_LEN,
}
export enum MIKEYTSType {
    NTP_UTC,
    NTP,
    COUNTER,
}
export enum MIKEYType {
    INVALID,
    PSK_INIT,
    PSK_VERIFY,
    PK_INIT,
    PK_VERIFY,
    DH_INIT,
    DH_RESP,
    ERROR,
}
export enum SDPResult {
    OK,
    EINVAL,
}
export const MIKEY_VERSION: number
export const SDP_BWTYPE_AS: string
export const SDP_BWTYPE_CT: string
export const SDP_BWTYPE_EXT_PREFIX: string
export const SDP_BWTYPE_RR: string
export const SDP_BWTYPE_RS: string
export const SDP_BWTYPE_TIAS: string
export function sdp_address_is_multicast(nettype: string, addrtype: string, addr: string): boolean
export function sdp_make_keymgmt(uri: string, base64: string): string
export function sdp_media_new(): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
export function sdp_media_set_media_from_caps(caps: Gst.Caps, media: SDPMedia): SDPResult
export function sdp_message_as_uri(scheme: string, msg: SDPMessage): string
export function sdp_message_new(): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
export function sdp_message_new_from_text(text: string): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
export function sdp_message_parse_buffer(data: Uint8Array[], msg: SDPMessage): SDPResult
export function sdp_message_parse_uri(uri: string, msg: SDPMessage): SDPResult
export class MIKEYDecryptInfo {
    static name: string
}
export class MIKEYEncryptInfo {
    static name: string
}
export class MIKEYMapSRTP {
    /* Fields of GstSdp.MIKEYMapSRTP */
    policy: number
    ssrc: number
    roc: number
    static name: string
}
export class MIKEYMessage {
    /* Fields of GstSdp.MIKEYMessage */
    version: number
    type: MIKEYType
    V: boolean
    prf_func: MIKEYPRFFunc
    CSB_id: number
    map_type: MIKEYMapType
    map_info: object[]
    payloads: object[]
    /* Methods of GstSdp.MIKEYMessage */
    add_cs_srtp(policy: number, ssrc: number, roc: number): boolean
    add_payload(payload: MIKEYPayload): boolean
    add_pke(C: MIKEYCacheType, data: Uint8Array[]): boolean
    add_rand(rand: Uint8Array[]): boolean
    add_rand_len(len: number): boolean
    add_t(type: MIKEYTSType, ts_value: Uint8Array[]): boolean
    add_t_now_ntp_utc(): boolean
    base64_encode(): string
    find_payload(type: MIKEYPayloadType, nth: number): MIKEYPayload
    get_cs_srtp(idx: number): MIKEYMapSRTP
    get_n_cs(): number
    get_n_payloads(): number
    get_payload(idx: number): MIKEYPayload
    insert_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean
    insert_payload(idx: number, payload: MIKEYPayload): boolean
    remove_cs_srtp(idx: number): boolean
    remove_payload(idx: number): boolean
    replace_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean
    replace_payload(idx: number, payload: MIKEYPayload): boolean
    set_info(version: number, type: MIKEYType, V: boolean, prf_func: MIKEYPRFFunc, CSB_id: number, map_type: MIKEYMapType): boolean
    to_bytes(info: MIKEYEncryptInfo): GLib.Bytes
    to_caps(caps: Gst.Caps): boolean
    static name: string
    static new(): MIKEYMessage
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MIKEYMessage
    static new_from_bytes(bytes: GLib.Bytes, info: MIKEYDecryptInfo): MIKEYMessage
    static new_from_caps(caps: Gst.Caps): MIKEYMessage
    static new_from_data(data: Uint8Array[], info: MIKEYDecryptInfo): MIKEYMessage
}
export class MIKEYPayload {
    /* Fields of GstSdp.MIKEYPayload */
    type: MIKEYPayloadType
    len: number
    /* Methods of GstSdp.MIKEYPayload */
    kemac_add_sub(newpay: MIKEYPayload): boolean
    kemac_get_n_sub(): number
    kemac_get_sub(idx: number): MIKEYPayload
    kemac_remove_sub(idx: number): boolean
    kemac_set(enc_alg: MIKEYEncAlg, mac_alg: MIKEYMacAlg): boolean
    key_data_set_interval(vf_len: number, vt_data: Uint8Array[]): boolean
    key_data_set_key(key_type: MIKEYKeyDataType, key_data: Uint8Array[]): boolean
    key_data_set_salt(salt_data?: Uint8Array[] | null): boolean
    key_data_set_spi(spi_data: Uint8Array[]): boolean
    pke_set(C: MIKEYCacheType, data: Uint8Array[]): boolean
    rand_set(rand: Uint8Array[]): boolean
    sp_add_param(type: number, val: Uint8Array[]): boolean
    sp_get_n_params(): number
    sp_get_param(idx: number): MIKEYPayloadSPParam
    sp_remove_param(idx: number): boolean
    sp_set(policy: number, proto: MIKEYSecProto): boolean
    t_set(type: MIKEYTSType, ts_value: Uint8Array[]): boolean
    static name: string
    static new(type: MIKEYPayloadType): MIKEYPayload
    constructor(type: MIKEYPayloadType)
    /* Static methods and pseudo-constructors */
    static new(type: MIKEYPayloadType): MIKEYPayload
}
export class MIKEYPayloadKEMAC {
    /* Fields of GstSdp.MIKEYPayloadKEMAC */
    pt: MIKEYPayload
    enc_alg: MIKEYEncAlg
    mac_alg: MIKEYMacAlg
    subpayloads: object[]
    static name: string
}
export class MIKEYPayloadKeyData {
    /* Fields of GstSdp.MIKEYPayloadKeyData */
    pt: MIKEYPayload
    key_type: MIKEYKeyDataType
    key_len: number
    key_data: number
    salt_len: number
    salt_data: number
    kv_type: MIKEYKVType
    kv_len: Uint8Array[]
    kv_data: Uint8Array[]
    static name: string
}
export class MIKEYPayloadPKE {
    /* Fields of GstSdp.MIKEYPayloadPKE */
    pt: MIKEYPayload
    C: MIKEYCacheType
    data_len: number
    data: number
    static name: string
}
export class MIKEYPayloadRAND {
    /* Fields of GstSdp.MIKEYPayloadRAND */
    pt: MIKEYPayload
    len: number
    rand: number
    static name: string
}
export class MIKEYPayloadSP {
    /* Fields of GstSdp.MIKEYPayloadSP */
    pt: MIKEYPayload
    policy: number
    proto: MIKEYSecProto
    params: object[]
    static name: string
}
export class MIKEYPayloadSPParam {
    /* Fields of GstSdp.MIKEYPayloadSPParam */
    type: number
    len: number
    val: number
    static name: string
}
export class MIKEYPayloadT {
    /* Fields of GstSdp.MIKEYPayloadT */
    pt: MIKEYPayload
    type: MIKEYTSType
    ts_value: number
    static name: string
}
export class SDPAttribute {
    /* Fields of GstSdp.SDPAttribute */
    key: string
    value: string
    /* Methods of GstSdp.SDPAttribute */
    clear(): SDPResult
    set(key: string, value?: string | null): SDPResult
    static name: string
}
export class SDPBandwidth {
    /* Fields of GstSdp.SDPBandwidth */
    bwtype: string
    bandwidth: number
    /* Methods of GstSdp.SDPBandwidth */
    clear(): SDPResult
    set(bwtype: string, bandwidth: number): SDPResult
    static name: string
}
export class SDPConnection {
    /* Fields of GstSdp.SDPConnection */
    nettype: string
    addrtype: string
    address: string
    ttl: number
    addr_number: number
    /* Methods of GstSdp.SDPConnection */
    clear(): SDPResult
    set(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult
    static name: string
}
export class SDPKey {
    /* Fields of GstSdp.SDPKey */
    type: string
    data: string
    static name: string
}
export class SDPMedia {
    /* Fields of GstSdp.SDPMedia */
    media: string
    port: number
    num_ports: number
    proto: string
    fmts: object[]
    information: string
    connections: object[]
    bandwidths: object[]
    key: SDPKey
    attributes: object[]
    /* Methods of GstSdp.SDPMedia */
    add_attribute(key: string, value?: string | null): SDPResult
    add_bandwidth(bwtype: string, bandwidth: number): SDPResult
    add_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult
    add_format(format: string): SDPResult
    as_text(): string
    attributes_len(): number
    attributes_to_caps(caps: Gst.Caps): SDPResult
    bandwidths_len(): number
    connections_len(): number
    copy(): [ /* returnType */ SDPResult, /* copy */ SDPMedia ]
    formats_len(): number
    free(): SDPResult
    get_attribute(idx: number): SDPAttribute
    get_attribute_val(key: string): string
    get_attribute_val_n(key: string, nth: number): string
    get_bandwidth(idx: number): SDPBandwidth
    get_caps_from_media(pt: number): Gst.Caps
    get_connection(idx: number): SDPConnection
    get_format(idx: number): string
    get_information(): string
    get_key(): SDPKey
    get_media(): string
    get_num_ports(): number
    get_port(): number
    get_proto(): string
    init(): SDPResult
    insert_attribute(idx: number, attr: SDPAttribute): SDPResult
    insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult
    insert_connection(idx: number, conn: SDPConnection): SDPResult
    insert_format(idx: number, format: string): SDPResult
    parse_keymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    remove_attribute(idx: number): SDPResult
    remove_bandwidth(idx: number): SDPResult
    remove_connection(idx: number): SDPResult
    remove_format(idx: number): SDPResult
    replace_attribute(idx: number, attr: SDPAttribute): SDPResult
    replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult
    replace_connection(idx: number, conn: SDPConnection): SDPResult
    replace_format(idx: number, format: string): SDPResult
    set_information(information: string): SDPResult
    set_key(type: string, data: string): SDPResult
    set_media(med: string): SDPResult
    set_port_info(port: number, num_ports: number): SDPResult
    set_proto(proto: string): SDPResult
    uninit(): SDPResult
    static name: string
    /* Static methods and pseudo-constructors */
    static set_media_from_caps(caps: Gst.Caps, media: SDPMedia): SDPResult
}
export class SDPMessage {
    /* Fields of GstSdp.SDPMessage */
    version: string
    origin: SDPOrigin
    session_name: string
    information: string
    uri: string
    emails: object[]
    phones: object[]
    connection: SDPConnection
    bandwidths: object[]
    times: object[]
    zones: object[]
    key: SDPKey
    attributes: object[]
    medias: object[]
    /* Methods of GstSdp.SDPMessage */
    add_attribute(key: string, value?: string | null): SDPResult
    add_bandwidth(bwtype: string, bandwidth: number): SDPResult
    add_email(email: string): SDPResult
    add_media(media: SDPMedia): SDPResult
    add_phone(phone: string): SDPResult
    add_time(start: string, stop: string, repeat: string[]): SDPResult
    add_zone(adj_time: string, typed_time: string): SDPResult
    as_text(): string
    attributes_len(): number
    attributes_to_caps(caps: Gst.Caps): SDPResult
    bandwidths_len(): number
    copy(): [ /* returnType */ SDPResult, /* copy */ SDPMessage ]
    dump(): SDPResult
    emails_len(): number
    free(): SDPResult
    get_attribute(idx: number): SDPAttribute
    get_attribute_val(key: string): string
    get_attribute_val_n(key: string, nth: number): string
    get_bandwidth(idx: number): SDPBandwidth
    get_connection(): SDPConnection
    get_email(idx: number): string
    get_information(): string
    get_key(): SDPKey
    get_media(idx: number): SDPMedia
    get_origin(): SDPOrigin
    get_phone(idx: number): string
    get_session_name(): string
    get_time(idx: number): SDPTime
    get_uri(): string
    get_version(): string
    get_zone(idx: number): SDPZone
    init(): SDPResult
    insert_attribute(idx: number, attr: SDPAttribute): SDPResult
    insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult
    insert_email(idx: number, email: string): SDPResult
    insert_phone(idx: number, phone: string): SDPResult
    insert_time(idx: number, t: SDPTime): SDPResult
    insert_zone(idx: number, zone: SDPZone): SDPResult
    medias_len(): number
    parse_keymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    phones_len(): number
    remove_attribute(idx: number): SDPResult
    remove_bandwidth(idx: number): SDPResult
    remove_email(idx: number): SDPResult
    remove_phone(idx: number): SDPResult
    remove_time(idx: number): SDPResult
    remove_zone(idx: number): SDPResult
    replace_attribute(idx: number, attr: SDPAttribute): SDPResult
    replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult
    replace_email(idx: number, email: string): SDPResult
    replace_phone(idx: number, phone: string): SDPResult
    replace_time(idx: number, t: SDPTime): SDPResult
    replace_zone(idx: number, zone: SDPZone): SDPResult
    set_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult
    set_information(information: string): SDPResult
    set_key(type: string, data: string): SDPResult
    set_origin(username: string, sess_id: string, sess_version: string, nettype: string, addrtype: string, addr: string): SDPResult
    set_session_name(session_name: string): SDPResult
    set_uri(uri: string): SDPResult
    set_version(version: string): SDPResult
    times_len(): number
    uninit(): SDPResult
    zones_len(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static as_uri(scheme: string, msg: SDPMessage): string
    static new_from_text(text: string): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
    static parse_buffer(data: Uint8Array[], msg: SDPMessage): SDPResult
    static parse_uri(uri: string, msg: SDPMessage): SDPResult
}
export class SDPOrigin {
    /* Fields of GstSdp.SDPOrigin */
    username: string
    sess_id: string
    sess_version: string
    nettype: string
    addrtype: string
    addr: string
    static name: string
}
export class SDPTime {
    /* Fields of GstSdp.SDPTime */
    start: string
    stop: string
    repeat: object[]
    /* Methods of GstSdp.SDPTime */
    clear(): SDPResult
    set(start: string, stop: string, repeat: string[]): SDPResult
    static name: string
}
export class SDPZone {
    /* Fields of GstSdp.SDPZone */
    time: string
    typed_time: string
    /* Methods of GstSdp.SDPZone */
    clear(): SDPResult
    set(adj_time: string, typed_time: string): SDPResult
    static name: string
}