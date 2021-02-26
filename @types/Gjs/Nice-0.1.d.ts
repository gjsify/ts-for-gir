/**
 * Nice-0.1
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum CandidateTransport {
    UDP,
    TCP_ACTIVE,
    TCP_PASSIVE,
    TCP_SO,
}
export enum CandidateType {
    HOST,
    SERVER_REFLEXIVE,
    PEER_REFLEXIVE,
    RELAYED,
}
export enum Compatibility {
    RFC5245,
    DRAFT19,
    GOOGLE,
    MSN,
    WLM2009,
    OC2007,
    OC2007R2,
    LAST,
}
export enum ComponentState {
    DISCONNECTED,
    GATHERING,
    CONNECTING,
    CONNECTED,
    READY,
    FAILED,
    LAST,
}
export enum ComponentType {
    RTP,
    RTCP,
}
export enum NominationMode {
    REGULAR,
    AGGRESSIVE,
}
export enum ProxyType {
    NONE,
    SOCKS5,
    HTTP,
    LAST,
}
export enum PseudoTcpDebugLevel {
    NONE,
    NORMAL,
    VERBOSE,
}
export enum PseudoTcpShutdown {
    RD,
    WR,
    RDWR,
}
export enum PseudoTcpState {
    LISTEN,
    SYN_SENT,
    SYN_RECEIVED,
    ESTABLISHED,
    CLOSED,
    FIN_WAIT_1,
    FIN_WAIT_2,
    CLOSING,
    TIME_WAIT,
    CLOSE_WAIT,
    LAST_ACK,
}
export enum PseudoTcpWriteResult {
    SUCCESS,
    TOO_LARGE,
    FAIL,
}
export enum RelayType {
    UDP,
    TCP,
    TLS,
}
export enum AgentOption {
    REGULAR_NOMINATION,
    RELIABLE,
    LITE_MODE,
    ICE_TRICKLE,
    SUPPORT_RENOMINATION,
}
export const AGENT_MAX_REMOTE_CANDIDATES: number
export const CANDIDATE_MAX_FOUNDATION: number
export const CANDIDATE_MAX_LOCAL_ADDRESSES: number
export const CANDIDATE_MAX_TURN_SERVERS: number
export function candidate_transport_to_string(transport: CandidateTransport): string
export function candidate_type_to_string(type: CandidateType): string
export function component_state_to_string(state: ComponentState): string
export function debug_disable(with_stun: boolean): void
export function debug_enable(with_stun: boolean): void
export function interfaces_get_ip_for_interface(interface_name: string): string | null
export function interfaces_get_local_interfaces(): string[]
export function interfaces_get_local_ips(include_loopback: boolean): string[]
export function pseudo_tcp_set_debug_level(level: PseudoTcpDebugLevel): void
export interface AgentRecvFunc {
    (agent: Agent, stream_id: number, component_id: number, len: number, buf: string): void
}
export interface Agent_ConstructProps extends GObject.Object_ConstructProps {
    compatibility?: number
    controlling_mode?: boolean
    force_relay?: boolean
    full_mode?: boolean
    ice_tcp?: boolean
    ice_trickle?: boolean
    ice_udp?: boolean
    idle_timeout?: number
    keepalive_conncheck?: boolean
    main_context?: object
    max_connectivity_checks?: number
    proxy_ip?: string
    proxy_password?: string
    proxy_port?: number
    proxy_type?: number
    proxy_username?: string
    reliable?: boolean
    stun_initial_timeout?: number
    stun_max_retransmissions?: number
    stun_pacing_timer?: number
    stun_reliable_timeout?: number
    stun_server?: string
    stun_server_port?: number
    support_renomination?: boolean
    upnp?: boolean
    upnp_timeout?: number
}
export class Agent {
    /* Properties of Nice-0.1.Nice.Agent */
    readonly bytestream_tcp: boolean
    controlling_mode: boolean
    force_relay: boolean
    ice_tcp: boolean
    ice_trickle: boolean
    ice_udp: boolean
    idle_timeout: number
    keepalive_conncheck: boolean
    max_connectivity_checks: number
    proxy_ip: string
    proxy_password: string
    proxy_port: number
    proxy_type: number
    proxy_username: string
    stun_initial_timeout: number
    stun_max_retransmissions: number
    stun_pacing_timer: number
    stun_reliable_timeout: number
    stun_server: string
    stun_server_port: number
    support_renomination: boolean
    upnp: boolean
    upnp_timeout: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Nice-0.1.Nice.Agent */
    add_local_address(addr: Address): boolean
    add_stream(n_components: number): number
    close_async(callback?: Gio.AsyncReadyCallback | null): void
    forget_relays(stream_id: number, component_id: number): boolean
    gather_candidates(stream_id: number): boolean
    generate_local_candidate_sdp(candidate: Candidate): string
    generate_local_sdp(): string
    generate_local_stream_sdp(stream_id: number, include_non_ice: boolean): string
    get_component_state(stream_id: number, component_id: number): ComponentState
    get_default_local_candidate(stream_id: number, component_id: number): Candidate
    get_io_stream(stream_id: number, component_id: number): Gio.IOStream
    get_local_candidates(stream_id: number, component_id: number): Candidate[]
    get_local_credentials(stream_id: number): [ /* returnType */ boolean, /* ufrag */ string, /* pwd */ string ]
    get_remote_candidates(stream_id: number, component_id: number): Candidate[]
    get_selected_pair(stream_id: number, component_id: number, local: Candidate, remote: Candidate): boolean
    get_selected_socket(stream_id: number, component_id: number): Gio.Socket | null
    get_sockets(stream_id: number, component_id: number): Gio.Socket[]
    get_stream_name(stream_id: number): string
    parse_remote_candidate_sdp(stream_id: number, sdp: string): Candidate
    parse_remote_sdp(sdp: string): number
    parse_remote_stream_sdp(stream_id: number, sdp: string, ufrag: string, pwd: string): Candidate[]
    peer_candidate_gathering_done(stream_id: number): boolean
    recv(stream_id: number, component_id: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buf */ Uint8Array[] ]
    recv_messages(stream_id: number, component_id: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* messages */ InputMessage[] ]
    recv_messages_nonblocking(stream_id: number, component_id: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* messages */ InputMessage[] ]
    recv_nonblocking(stream_id: number, component_id: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buf */ Uint8Array[] ]
    remove_stream(stream_id: number): void
    restart(): boolean
    restart_stream(stream_id: number): boolean
    send(stream_id: number, component_id: number, len: number, buf: string): number
    send_messages_nonblocking(stream_id: number, component_id: number, messages: OutputMessage[], cancellable?: Gio.Cancellable | null): number
    set_local_credentials(stream_id: number, ufrag: string, pwd: string): boolean
    set_port_range(stream_id: number, component_id: number, min_port: number, max_port: number): void
    set_relay_info(stream_id: number, component_id: number, server_ip: string, server_port: number, username: string, password: string, type: RelayType): boolean
    set_remote_candidates(stream_id: number, component_id: number, candidates: Candidate[]): number
    set_remote_credentials(stream_id: number, ufrag: string, pwd: string): boolean
    set_selected_pair(stream_id: number, component_id: number, lfoundation: string, rfoundation: string): boolean
    set_selected_remote_candidate(stream_id: number, component_id: number, candidate: Candidate): boolean
    set_software(software: string): void
    set_stream_name(stream_id: number, name: string): boolean
    set_stream_tos(stream_id: number, tos: number): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Nice-0.1.Nice.Agent */
    connect(sigName: "candidate-gathering-done", callback: (($obj: Agent, stream_id: number) => void)): number
    connect_after(sigName: "candidate-gathering-done", callback: (($obj: Agent, stream_id: number) => void)): number
    emit(sigName: "candidate-gathering-done", stream_id: number): void
    connect(sigName: "component-state-changed", callback: (($obj: Agent, stream_id: number, component_id: number, state: number) => void)): number
    connect_after(sigName: "component-state-changed", callback: (($obj: Agent, stream_id: number, component_id: number, state: number) => void)): number
    emit(sigName: "component-state-changed", stream_id: number, component_id: number, state: number): void
    connect(sigName: "initial-binding-request-received", callback: (($obj: Agent, stream_id: number) => void)): number
    connect_after(sigName: "initial-binding-request-received", callback: (($obj: Agent, stream_id: number) => void)): number
    emit(sigName: "initial-binding-request-received", stream_id: number): void
    connect(sigName: "new-candidate", callback: (($obj: Agent, stream_id: number, component_id: number, foundation: string) => void)): number
    connect_after(sigName: "new-candidate", callback: (($obj: Agent, stream_id: number, component_id: number, foundation: string) => void)): number
    emit(sigName: "new-candidate", stream_id: number, component_id: number, foundation: string): void
    connect(sigName: "new-candidate-full", callback: (($obj: Agent, candidate: Candidate) => void)): number
    connect_after(sigName: "new-candidate-full", callback: (($obj: Agent, candidate: Candidate) => void)): number
    emit(sigName: "new-candidate-full", candidate: Candidate): void
    connect(sigName: "new-remote-candidate", callback: (($obj: Agent, stream_id: number, component_id: number, foundation: string) => void)): number
    connect_after(sigName: "new-remote-candidate", callback: (($obj: Agent, stream_id: number, component_id: number, foundation: string) => void)): number
    emit(sigName: "new-remote-candidate", stream_id: number, component_id: number, foundation: string): void
    connect(sigName: "new-remote-candidate-full", callback: (($obj: Agent, candidate: Candidate) => void)): number
    connect_after(sigName: "new-remote-candidate-full", callback: (($obj: Agent, candidate: Candidate) => void)): number
    emit(sigName: "new-remote-candidate-full", candidate: Candidate): void
    connect(sigName: "new-selected-pair", callback: (($obj: Agent, stream_id: number, component_id: number, lfoundation: string, rfoundation: string) => void)): number
    connect_after(sigName: "new-selected-pair", callback: (($obj: Agent, stream_id: number, component_id: number, lfoundation: string, rfoundation: string) => void)): number
    emit(sigName: "new-selected-pair", stream_id: number, component_id: number, lfoundation: string, rfoundation: string): void
    connect(sigName: "new-selected-pair-full", callback: (($obj: Agent, stream_id: number, component_id: number, lcandidate: Candidate, rcandidate: Candidate) => void)): number
    connect_after(sigName: "new-selected-pair-full", callback: (($obj: Agent, stream_id: number, component_id: number, lcandidate: Candidate, rcandidate: Candidate) => void)): number
    emit(sigName: "new-selected-pair-full", stream_id: number, component_id: number, lcandidate: Candidate, rcandidate: Candidate): void
    connect(sigName: "reliable-transport-writable", callback: (($obj: Agent, stream_id: number, component_id: number) => void)): number
    connect_after(sigName: "reliable-transport-writable", callback: (($obj: Agent, stream_id: number, component_id: number) => void)): number
    emit(sigName: "reliable-transport-writable", stream_id: number, component_id: number): void
    connect(sigName: "streams-removed", callback: (($obj: Agent, stream_ids: number[]) => void)): number
    connect_after(sigName: "streams-removed", callback: (($obj: Agent, stream_ids: number[]) => void)): number
    emit(sigName: "streams-removed", stream_ids: number[]): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bytestream-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytestream-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::controlling-mode", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::controlling-mode", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::force-relay", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-relay", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ice-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ice-trickle", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-trickle", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ice-udp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-udp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::keepalive-conncheck", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive-conncheck", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-connectivity-checks", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-connectivity-checks", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-ip", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-ip", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-password", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-password", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-type", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-type", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-username", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-username", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stun-initial-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-initial-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stun-max-retransmissions", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-max-retransmissions", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stun-pacing-timer", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-pacing-timer", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stun-reliable-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-reliable-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stun-server", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-server", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stun-server-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-server-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::support-renomination", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-renomination", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::upnp-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Agent_ConstructProps)
    _init (config?: Agent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ctx: GLib.MainContext, compat: Compatibility): Agent
    static new_full(ctx: GLib.MainContext, compat: Compatibility, flags: AgentOption): Agent
    static new_reliable(ctx: GLib.MainContext, compat: Compatibility): Agent
    static $gtype: GObject.Type
}
export interface PseudoTcpSocket_ConstructProps extends GObject.Object_ConstructProps {
    ack_delay?: number
    callbacks?: object
    conversation?: number
    no_delay?: boolean
    rcv_buf?: number
    snd_buf?: number
    support_fin_ack?: boolean
}
export class PseudoTcpSocket {
    /* Properties of Nice-0.1.Nice.PseudoTcpSocket */
    ack_delay: number
    callbacks: object
    no_delay: boolean
    rcv_buf: number
    snd_buf: number
    readonly state: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Nice-0.1.Nice.PseudoTcpSocket */
    can_send(): boolean
    close(force: boolean): void
    connect(): boolean
    get_available_bytes(): number
    get_available_send_space(): number
    get_error(): number
    get_next_clock(timeout: number): boolean
    is_closed(): boolean
    is_closed_remotely(): boolean
    notify_clock(): void
    notify_message(message: InputMessage): boolean
    notify_mtu(mtu: number): void
    notify_packet(buffer: string, len: number): boolean
    recv(buffer: string, len: number): number
    send(buffer: string, len: number): number
    set_time(current_time: number): void
    shutdown(how: PseudoTcpShutdown): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ack-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ack-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::callbacks", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callbacks", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rcv-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rcv-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::snd-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snd-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PseudoTcpSocket_ConstructProps)
    _init (config?: PseudoTcpSocket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(conversation: number, callbacks: PseudoTcpCallbacks): PseudoTcpSocket
    static $gtype: GObject.Type
}
export class Address {
    /* Methods of Nice-0.1.Nice.Address */
    copy_to_sockaddr(sin?: object | null): void
    equal(b: Address): boolean
    equal_no_port(b: Address): boolean
    free(): void
    get_port(): number
    init(): void
    ip_version(): number
    is_private(): boolean
    is_valid(): boolean
    set_from_sockaddr(sin?: object | null): void
    set_from_string(str: string): boolean
    set_ipv4(addr_ipv4: number): void
    set_ipv6(addr_ipv6: number): void
    set_port(port: number): void
    to_string(dst: string): void
    static name: string
}
export abstract class AgentClass {
    /* Fields of Nice-0.1.Nice.AgentClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Candidate {
    /* Fields of Nice-0.1.Nice.Candidate */
    type: CandidateType
    transport: CandidateTransport
    addr: Address
    base_addr: Address
    priority: number
    stream_id: number
    component_id: number
    foundation: number[]
    username: string
    password: string
    /* Methods of Nice-0.1.Nice.Candidate */
    copy(): Candidate
    equal_target(candidate2: Candidate): boolean
    free(): void
    static name: string
    static new(type: CandidateType): Candidate
    constructor(type: CandidateType)
    /* Static methods and pseudo-constructors */
    static new(type: CandidateType): Candidate
    static transport_to_string(transport: CandidateTransport): string
    static type_to_string(type: CandidateType): string
}
export class InputMessage {
    /* Fields of Nice-0.1.Nice.InputMessage */
    buffers: Gio.InputVector[]
    n_buffers: number
    from: Address
    length: number
    static name: string
}
export class OutputMessage {
    /* Fields of Nice-0.1.Nice.OutputMessage */
    buffers: Gio.OutputVector[]
    n_buffers: number
    static name: string
}
export class PseudoTcpCallbacks {
    /* Fields of Nice-0.1.Nice.PseudoTcpCallbacks */
    user_data: object
    PseudoTcpOpened: (tcp: PseudoTcpSocket, data: object) => void
    PseudoTcpReadable: (tcp: PseudoTcpSocket, data: object) => void
    PseudoTcpWritable: (tcp: PseudoTcpSocket, data: object) => void
    PseudoTcpClosed: (tcp: PseudoTcpSocket, error: number, data: object) => void
    WritePacket: (tcp: PseudoTcpSocket, buffer: string, len: number, data: object) => PseudoTcpWriteResult
    static name: string
}
export abstract class PseudoTcpSocketClass {
    static name: string
}