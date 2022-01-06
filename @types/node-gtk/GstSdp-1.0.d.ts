/**
 * GstSdp-1.0
 */

import "node"
import type { Gst } from './Gst-1.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';
import type { GModule } from './GModule-2.0';

declare namespace GstSdp {

enum MIKEYCacheType {
    NONE,
    ALWAYS,
    FOR_CSB,
}
enum MIKEYEncAlg {
    NULL,
    AES_CM_128,
    AES_KW_128,
    AES_GCM_128,
}
enum MIKEYKVType {
    NULL,
    SPI,
    INTERVAL,
}
enum MIKEYKeyDataType {
    TGK,
    TEK,
}
enum MIKEYMacAlg {
    NULL,
    HMAC_SHA_1_160,
}
enum MIKEYMapType {
    MIKEY_MAP_TYPE_SRTP,
}
enum MIKEYPRFFunc {
    MIKEY_PRF_MIKEY_1,
}
enum MIKEYPayloadType {
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
enum MIKEYSecProto {
    MIKEY_SEC_PROTO_SRTP,
}
enum MIKEYSecSRTP {
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
enum MIKEYTSType {
    NTP_UTC,
    NTP,
    COUNTER,
}
enum MIKEYType {
    INVALID,
    PSK_INIT,
    PSK_VERIFY,
    PK_INIT,
    PK_VERIFY,
    DH_INIT,
    DH_RESP,
    ERROR,
}
enum SDPResult {
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
function sdpAddressIsMulticast(nettype: string, addrtype: string, addr: string): boolean
function sdpMakeKeymgmt(uri: string, base64: string): string
function sdpMediaNew(): { returnType: SDPResult, media: SDPMedia }
function sdpMediaSetMediaFromCaps(caps: Gst.Caps, media: SDPMedia): SDPResult
function sdpMessageAsUri(scheme: string, msg: SDPMessage): string
function sdpMessageNew(): { returnType: SDPResult, msg: SDPMessage }
function sdpMessageNewFromText(text: string): { returnType: SDPResult, msg: SDPMessage }
function sdpMessageParseBuffer(data: any[], msg: SDPMessage): SDPResult
function sdpMessageParseUri(uri: string, msg: SDPMessage): SDPResult
class MIKEYDecryptInfo {
    static name: string
}
class MIKEYEncryptInfo {
    static name: string
}
class MIKEYMapSRTP {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYMapSRTP */
    policy: number
    ssrc: number
    roc: number
    static name: string
}
class MIKEYMessage {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYMessage */
    version: number
    type: MIKEYType
    v: boolean
    prfFunc: MIKEYPRFFunc
    cSBId: number
    mapType: MIKEYMapType
    mapInfo: object[]
    payloads: object[]
    /* Methods of GstSdp-1.0.GstSdp.MIKEYMessage */
    addCsSrtp(policy: number, ssrc: number, roc: number): boolean
    addPayload(payload: MIKEYPayload): boolean
    addPke(c: MIKEYCacheType, data: any[]): boolean
    addRand(rand: any[]): boolean
    addRandLen(len: number): boolean
    addT(type: MIKEYTSType, tsValue: any[]): boolean
    addTNowNtpUtc(): boolean
    base64Encode(): string
    findPayload(type: MIKEYPayloadType, nth: number): MIKEYPayload
    getCsSrtp(idx: number): MIKEYMapSRTP
    getNCs(): number
    getNPayloads(): number
    getPayload(idx: number): MIKEYPayload
    insertCsSrtp(idx: number, map: MIKEYMapSRTP): boolean
    insertPayload(idx: number, payload: MIKEYPayload): boolean
    removeCsSrtp(idx: number): boolean
    removePayload(idx: number): boolean
    replaceCsSrtp(idx: number, map: MIKEYMapSRTP): boolean
    replacePayload(idx: number, payload: MIKEYPayload): boolean
    setInfo(version: number, type: MIKEYType, v: boolean, prfFunc: MIKEYPRFFunc, cSBId: number, mapType: MIKEYMapType): boolean
    toBytes(info: MIKEYEncryptInfo): any
    toCaps(caps: Gst.Caps): boolean
    static name: string
    static new(): MIKEYMessage
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MIKEYMessage
    static newFromBytes(bytes: any, info: MIKEYDecryptInfo): MIKEYMessage
    static newFromCaps(caps: Gst.Caps): MIKEYMessage
    static newFromData(data: any[], info: MIKEYDecryptInfo): MIKEYMessage
}
class MIKEYPayload {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayload */
    type: MIKEYPayloadType
    len: number
    /* Methods of GstSdp-1.0.GstSdp.MIKEYPayload */
    kemacAddSub(newpay: MIKEYPayload): boolean
    kemacGetNSub(): number
    kemacGetSub(idx: number): MIKEYPayload
    kemacRemoveSub(idx: number): boolean
    kemacSet(encAlg: MIKEYEncAlg, macAlg: MIKEYMacAlg): boolean
    keyDataSetInterval(vfLen: number, vtData: any[]): boolean
    keyDataSetKey(keyType: MIKEYKeyDataType, keyData: any[]): boolean
    keyDataSetSalt(saltData?: any[] | null): boolean
    keyDataSetSpi(spiData: any[]): boolean
    pkeSet(c: MIKEYCacheType, data: any[]): boolean
    randSet(rand: any[]): boolean
    spAddParam(type: number, val: any[]): boolean
    spGetNParams(): number
    spGetParam(idx: number): MIKEYPayloadSPParam
    spRemoveParam(idx: number): boolean
    spSet(policy: number, proto: MIKEYSecProto): boolean
    tSet(type: MIKEYTSType, tsValue: any[]): boolean
    static name: string
    static new(type: MIKEYPayloadType): MIKEYPayload
    constructor(type: MIKEYPayloadType)
    /* Static methods and pseudo-constructors */
    static new(type: MIKEYPayloadType): MIKEYPayload
}
class MIKEYPayloadKEMAC {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadKEMAC */
    pt: MIKEYPayload
    encAlg: MIKEYEncAlg
    macAlg: MIKEYMacAlg
    subpayloads: object[]
    static name: string
}
class MIKEYPayloadKeyData {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadKeyData */
    pt: MIKEYPayload
    keyType: MIKEYKeyDataType
    keyLen: number
    keyData: number
    saltLen: number
    saltData: number
    kvType: MIKEYKVType
    kvLen: any[]
    kvData: any[]
    static name: string
}
class MIKEYPayloadPKE {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadPKE */
    pt: MIKEYPayload
    c: MIKEYCacheType
    dataLen: number
    data: number
    static name: string
}
class MIKEYPayloadRAND {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadRAND */
    pt: MIKEYPayload
    len: number
    rand: number
    static name: string
}
class MIKEYPayloadSP {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadSP */
    pt: MIKEYPayload
    policy: number
    proto: MIKEYSecProto
    params: object[]
    static name: string
}
class MIKEYPayloadSPParam {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadSPParam */
    type: number
    len: number
    val: number
    static name: string
}
class MIKEYPayloadT {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadT */
    pt: MIKEYPayload
    type: MIKEYTSType
    tsValue: number
    static name: string
}
class SDPAttribute {
    /* Fields of GstSdp-1.0.GstSdp.SDPAttribute */
    key: string
    value: string
    /* Methods of GstSdp-1.0.GstSdp.SDPAttribute */
    clear(): SDPResult
    set(key: string, value?: string | null): SDPResult
    static name: string
}
class SDPBandwidth {
    /* Fields of GstSdp-1.0.GstSdp.SDPBandwidth */
    bwtype: string
    bandwidth: number
    /* Methods of GstSdp-1.0.GstSdp.SDPBandwidth */
    clear(): SDPResult
    set(bwtype: string, bandwidth: number): SDPResult
    static name: string
}
class SDPConnection {
    /* Fields of GstSdp-1.0.GstSdp.SDPConnection */
    nettype: string
    addrtype: string
    address: string
    ttl: number
    addrNumber: number
    /* Methods of GstSdp-1.0.GstSdp.SDPConnection */
    clear(): SDPResult
    set(nettype: string, addrtype: string, address: string, ttl: number, addrNumber: number): SDPResult
    static name: string
}
class SDPKey {
    /* Fields of GstSdp-1.0.GstSdp.SDPKey */
    type: string
    data: string
    static name: string
}
class SDPMedia {
    /* Fields of GstSdp-1.0.GstSdp.SDPMedia */
    media: string
    port: number
    numPorts: number
    proto: string
    fmts: object[]
    information: string
    connections: object[]
    bandwidths: object[]
    key: SDPKey
    attributes: object[]
    /* Methods of GstSdp-1.0.GstSdp.SDPMedia */
    addAttribute(key: string, value?: string | null): SDPResult
    addBandwidth(bwtype: string, bandwidth: number): SDPResult
    addConnection(nettype: string, addrtype: string, address: string, ttl: number, addrNumber: number): SDPResult
    addFormat(format: string): SDPResult
    asText(): string
    attributesLen(): number
    attributesToCaps(caps: Gst.Caps): SDPResult
    bandwidthsLen(): number
    connectionsLen(): number
    copy(): { returnType: SDPResult, copy: SDPMedia }
    formatsLen(): number
    free(): SDPResult
    getAttribute(idx: number): SDPAttribute
    getAttributeVal(key: string): string
    getAttributeValN(key: string, nth: number): string
    getBandwidth(idx: number): SDPBandwidth
    getCapsFromMedia(pt: number): Gst.Caps
    getConnection(idx: number): SDPConnection
    getFormat(idx: number): string
    getInformation(): string
    getKey(): SDPKey
    getMedia(): string
    getNumPorts(): number
    getPort(): number
    getProto(): string
    init(): SDPResult
    insertAttribute(idx: number, attr: SDPAttribute): SDPResult
    insertBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    insertConnection(idx: number, conn: SDPConnection): SDPResult
    insertFormat(idx: number, format: string): SDPResult
    parseKeymgmt(): { returnType: SDPResult, mikey: MIKEYMessage }
    removeAttribute(idx: number): SDPResult
    removeBandwidth(idx: number): SDPResult
    removeConnection(idx: number): SDPResult
    removeFormat(idx: number): SDPResult
    replaceAttribute(idx: number, attr: SDPAttribute): SDPResult
    replaceBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    replaceConnection(idx: number, conn: SDPConnection): SDPResult
    replaceFormat(idx: number, format: string): SDPResult
    setInformation(information: string): SDPResult
    setKey(type: string, data: string): SDPResult
    setMedia(med: string): SDPResult
    setPortInfo(port: number, numPorts: number): SDPResult
    setProto(proto: string): SDPResult
    uninit(): SDPResult
    static name: string
    /* Static methods and pseudo-constructors */
    static setMediaFromCaps(caps: Gst.Caps, media: SDPMedia): SDPResult
}
class SDPMessage {
    /* Fields of GstSdp-1.0.GstSdp.SDPMessage */
    version: string
    origin: SDPOrigin
    sessionName: string
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
    /* Methods of GstSdp-1.0.GstSdp.SDPMessage */
    addAttribute(key: string, value?: string | null): SDPResult
    addBandwidth(bwtype: string, bandwidth: number): SDPResult
    addEmail(email: string): SDPResult
    addMedia(media: SDPMedia): SDPResult
    addPhone(phone: string): SDPResult
    addTime(start: string, stop: string, repeat: string[]): SDPResult
    addZone(adjTime: string, typedTime: string): SDPResult
    asText(): string
    attributesLen(): number
    attributesToCaps(caps: Gst.Caps): SDPResult
    bandwidthsLen(): number
    copy(): { returnType: SDPResult, copy: SDPMessage }
    dump(): SDPResult
    emailsLen(): number
    free(): SDPResult
    getAttribute(idx: number): SDPAttribute
    getAttributeVal(key: string): string
    getAttributeValN(key: string, nth: number): string
    getBandwidth(idx: number): SDPBandwidth
    getConnection(): SDPConnection
    getEmail(idx: number): string
    getInformation(): string
    getKey(): SDPKey
    getMedia(idx: number): SDPMedia
    getOrigin(): SDPOrigin
    getPhone(idx: number): string
    getSessionName(): string
    getTime(idx: number): SDPTime
    getUri(): string
    getVersion(): string
    getZone(idx: number): SDPZone
    init(): SDPResult
    insertAttribute(idx: number, attr: SDPAttribute): SDPResult
    insertBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    insertEmail(idx: number, email: string): SDPResult
    insertPhone(idx: number, phone: string): SDPResult
    insertTime(idx: number, t: SDPTime): SDPResult
    insertZone(idx: number, zone: SDPZone): SDPResult
    mediasLen(): number
    parseKeymgmt(): { returnType: SDPResult, mikey: MIKEYMessage }
    phonesLen(): number
    removeAttribute(idx: number): SDPResult
    removeBandwidth(idx: number): SDPResult
    removeEmail(idx: number): SDPResult
    removePhone(idx: number): SDPResult
    removeTime(idx: number): SDPResult
    removeZone(idx: number): SDPResult
    replaceAttribute(idx: number, attr: SDPAttribute): SDPResult
    replaceBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    replaceEmail(idx: number, email: string): SDPResult
    replacePhone(idx: number, phone: string): SDPResult
    replaceTime(idx: number, t: SDPTime): SDPResult
    replaceZone(idx: number, zone: SDPZone): SDPResult
    setConnection(nettype: string, addrtype: string, address: string, ttl: number, addrNumber: number): SDPResult
    setInformation(information: string): SDPResult
    setKey(type: string, data: string): SDPResult
    setOrigin(username: string, sessId: string, sessVersion: string, nettype: string, addrtype: string, addr: string): SDPResult
    setSessionName(sessionName: string): SDPResult
    setUri(uri: string): SDPResult
    setVersion(version: string): SDPResult
    timesLen(): number
    uninit(): SDPResult
    zonesLen(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static asUri(scheme: string, msg: SDPMessage): string
    static newFromText(text: string): { returnType: SDPResult, msg: SDPMessage }
    static parseBuffer(data: any[], msg: SDPMessage): SDPResult
    static parseUri(uri: string, msg: SDPMessage): SDPResult
}
class SDPOrigin {
    /* Fields of GstSdp-1.0.GstSdp.SDPOrigin */
    username: string
    sessId: string
    sessVersion: string
    nettype: string
    addrtype: string
    addr: string
    static name: string
}
class SDPTime {
    /* Fields of GstSdp-1.0.GstSdp.SDPTime */
    start: string
    stop: string
    repeat: object[]
    /* Methods of GstSdp-1.0.GstSdp.SDPTime */
    clear(): SDPResult
    set(start: string, stop: string, repeat: string[]): SDPResult
    static name: string
}
class SDPZone {
    /* Fields of GstSdp-1.0.GstSdp.SDPZone */
    time: string
    typedTime: string
    /* Methods of GstSdp-1.0.GstSdp.SDPZone */
    clear(): SDPResult
    set(adjTime: string, typedTime: string): SDPResult
    static name: string
}
}
export default GstSdp