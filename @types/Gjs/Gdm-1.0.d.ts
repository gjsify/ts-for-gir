/**
 * Gdm-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum ClientError {
    CLIENT_ERROR_GENERIC,
}
export function chooser_interface_info(): Gio.DBusInterfaceInfo
export function chooser_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function get_session_ids(): string[]
export function get_session_name_and_description(id: string): [ /* returnType */ string, /* description */ string ]
export function goto_login_session_sync(cancellable?: Gio.Cancellable | null): boolean
export function greeter_interface_info(): Gio.DBusInterfaceInfo
export function greeter_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function manager_interface_info(): Gio.DBusInterfaceInfo
export function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function remote_greeter_interface_info(): Gio.DBusInterfaceInfo
export function remote_greeter_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function user_verifier_choice_list_interface_info(): Gio.DBusInterfaceInfo
export function user_verifier_choice_list_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function user_verifier_interface_info(): Gio.DBusInterfaceInfo
export function user_verifier_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function worker_manager_interface_info(): Gio.DBusInterfaceInfo
export function worker_manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export class Chooser {
    /* Methods of Gdm-1.0.Gdm.Chooser */
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    call_select_hostname(arg_hostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_hostname_finish(res: Gio.AsyncResult): boolean
    call_select_hostname_sync(arg_hostname: string, cancellable?: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    complete_select_hostname(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Gdm-1.0.Gdm.Chooser */
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean
    /* Signals of Gdm-1.0.Gdm.Chooser */
    connect(sigName: "handle-disconnect", callback: (($obj: Chooser, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: Chooser, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-hostname", callback: (($obj: Chooser, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-hostname", callback: (($obj: Chooser, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Greeter {
    /* Methods of Gdm-1.0.Gdm.Greeter */
    call_begin_auto_login(arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_begin_auto_login_finish(res: Gio.AsyncResult): boolean
    call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_timed_login_details(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_timed_login_details_finish(out_enabled: boolean, out_username: string, out_delay: number, res: Gio.AsyncResult): boolean
    call_get_timed_login_details_sync(out_enabled: boolean, out_username: string, out_delay: number, cancellable?: Gio.Cancellable | null): boolean
    call_select_session(arg_session: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_session_finish(res: Gio.AsyncResult): boolean
    call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean
    call_select_user(arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_user_finish(res: Gio.AsyncResult): boolean
    call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean
    call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean
    call_start_session_when_ready_sync(arg_service_name: string, arg_should_start_session: boolean, cancellable?: Gio.Cancellable | null): boolean
    complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void
    complete_get_timed_login_details(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    complete_select_session(invocation: Gio.DBusMethodInvocation): void
    complete_select_user(invocation: Gio.DBusMethodInvocation): void
    complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void
    emit_default_language_name_changed(arg_language_name: string): void
    emit_default_session_name_changed(arg_session_name: string): void
    emit_reauthenticated(arg_service_name: string): void
    emit_selected_user_changed(arg_username: string): void
    emit_session_opened(arg_service_name: string): void
    emit_timed_login_requested(arg_username: string, arg_delay: number): void
    /* Virtual methods of Gdm-1.0.Gdm.Greeter */
    vfunc_default_language_name_changed(arg_language_name: string): void
    vfunc_default_session_name_changed(arg_session_name: string): void
    vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean
    vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_start_session_when_ready(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_should_start_session: boolean): boolean
    vfunc_reauthenticated(arg_service_name: string): void
    vfunc_selected_user_changed(arg_username: string): void
    vfunc_session_opened(arg_service_name: string): void
    vfunc_timed_login_requested(arg_username: string, arg_delay: number): void
    /* Signals of Gdm-1.0.Gdm.Greeter */
    connect(sigName: "default-language-name-changed", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "default-language-name-changed", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "default-language-name-changed", object: string): void
    connect(sigName: "default-session-name-changed", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "default-session-name-changed", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "default-session-name-changed", object: string): void
    connect(sigName: "handle-begin-auto-login", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-auto-login", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-get-timed-login-details", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-timed-login-details", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-session", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-session", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-select-user", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-user", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-start-session-when-ready", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    connect_after(sigName: "handle-start-session-when-ready", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean): void
    connect(sigName: "reauthenticated", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "reauthenticated", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "reauthenticated", object: string): void
    connect(sigName: "selected-user-changed", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "selected-user-changed", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "selected-user-changed", object: string): void
    connect(sigName: "session-opened", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "session-opened", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "session-opened", object: string): void
    connect(sigName: "timed-login-requested", callback: (($obj: Greeter, object: string, p0: number) => void)): number
    connect_after(sigName: "timed-login-requested", callback: (($obj: Greeter, object: string, p0: number) => void)): number
    emit(sigName: "timed-login-requested", object: string, p0: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class Manager {
    /* Properties of Gdm-1.0.Gdm.Manager */
    version: string
    /* Methods of Gdm-1.0.Gdm.Manager */
    call_open_reauthentication_channel(arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean
    call_open_reauthentication_channel_sync(arg_username: string, out_address: string, cancellable?: Gio.Cancellable | null): boolean
    call_open_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean
    call_open_session_sync(out_address: string, cancellable?: Gio.Cancellable | null): boolean
    call_register_display(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_display_finish(res: Gio.AsyncResult): boolean
    call_register_display_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_register_session(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_session_finish(res: Gio.AsyncResult): boolean
    call_register_session_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_register_display(invocation: Gio.DBusMethodInvocation): void
    complete_register_session(invocation: Gio.DBusMethodInvocation): void
    dup_version(): string
    get_version(): string
    set_version(value: string): void
    /* Virtual methods of Gdm-1.0.Gdm.Manager */
    vfunc_get_version(): string
    vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean
    vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean
    /* Signals of Gdm-1.0.Gdm.Manager */
    connect(sigName: "handle-open-reauthentication-channel", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-open-reauthentication-channel", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-open-session", callback: (($obj: Manager, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-open-session", callback: (($obj: Manager, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-register-display", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-display", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    connect(sigName: "handle-register-session", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-session", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class RemoteGreeter {
    /* Methods of Gdm-1.0.Gdm.RemoteGreeter */
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Gdm-1.0.Gdm.RemoteGreeter */
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Gdm-1.0.Gdm.RemoteGreeter */
    connect(sigName: "handle-disconnect", callback: (($obj: RemoteGreeter, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: RemoteGreeter, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class UserVerifier {
    /* Methods of Gdm-1.0.Gdm.UserVerifier */
    call_answer_query(arg_service_name: string, arg_answer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_answer_query_finish(res: Gio.AsyncResult): boolean
    call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable?: Gio.Cancellable | null): boolean
    call_begin_verification(arg_service_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_begin_verification_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user_sync(arg_service_name: string, arg_username: string, cancellable?: Gio.Cancellable | null): boolean
    call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean
    call_cancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean
    call_enable_extensions(arg_extensions: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_extensions_finish(res: Gio.AsyncResult): boolean
    call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean
    complete_answer_query(invocation: Gio.DBusMethodInvocation): void
    complete_begin_verification(invocation: Gio.DBusMethodInvocation): void
    complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void
    emit_conversation_started(arg_service_name: string): void
    emit_conversation_stopped(arg_service_name: string): void
    emit_info(arg_service_name: string, arg_info: string): void
    emit_info_query(arg_service_name: string, arg_query: string): void
    emit_problem(arg_service_name: string, arg_problem: string): void
    emit_reauthentication_started(arg_pid_of_caller: number): void
    emit_reset(): void
    emit_secret_info_query(arg_service_name: string, arg_query: string): void
    emit_service_unavailable(arg_service_name: string, arg_message: string): void
    emit_verification_complete(arg_service_name: string): void
    emit_verification_failed(arg_service_name: string): void
    /* Virtual methods of Gdm-1.0.Gdm.UserVerifier */
    vfunc_conversation_started(arg_service_name: string): void
    vfunc_conversation_stopped(arg_service_name: string): void
    vfunc_handle_answer_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_answer: string): boolean
    vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean
    vfunc_handle_begin_verification_for_user(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_username: string): boolean
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean
    vfunc_info(arg_service_name: string, arg_info: string): void
    vfunc_info_query(arg_service_name: string, arg_query: string): void
    vfunc_problem(arg_service_name: string, arg_problem: string): void
    vfunc_reauthentication_started(arg_pid_of_caller: number): void
    vfunc_reset(): void
    vfunc_secret_info_query(arg_service_name: string, arg_query: string): void
    vfunc_service_unavailable(arg_service_name: string, arg_message: string): void
    vfunc_verification_complete(arg_service_name: string): void
    vfunc_verification_failed(arg_service_name: string): void
    /* Signals of Gdm-1.0.Gdm.UserVerifier */
    connect(sigName: "conversation-started", callback: (($obj: UserVerifier, object: string) => void)): number
    connect_after(sigName: "conversation-started", callback: (($obj: UserVerifier, object: string) => void)): number
    emit(sigName: "conversation-started", object: string): void
    connect(sigName: "conversation-stopped", callback: (($obj: UserVerifier, object: string) => void)): number
    connect_after(sigName: "conversation-stopped", callback: (($obj: UserVerifier, object: string) => void)): number
    emit(sigName: "conversation-stopped", object: string): void
    connect(sigName: "handle-answer-query", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-answer-query", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-begin-verification", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-cancel", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-enable-extensions", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    connect_after(sigName: "handle-enable-extensions", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[]): void
    connect(sigName: "info", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "info", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "info", object: string, p0: string): void
    connect(sigName: "info-query", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "info-query", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "info-query", object: string, p0: string): void
    connect(sigName: "problem", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "problem", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "problem", object: string, p0: string): void
    connect(sigName: "reauthentication-started", callback: (($obj: UserVerifier, object: number) => void)): number
    connect_after(sigName: "reauthentication-started", callback: (($obj: UserVerifier, object: number) => void)): number
    emit(sigName: "reauthentication-started", object: number): void
    connect(sigName: "reset", callback: (($obj: UserVerifier) => void)): number
    connect_after(sigName: "reset", callback: (($obj: UserVerifier) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "secret-info-query", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "secret-info-query", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "secret-info-query", object: string, p0: string): void
    connect(sigName: "service-unavailable", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "service-unavailable", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "service-unavailable", object: string, p0: string): void
    connect(sigName: "verification-complete", callback: (($obj: UserVerifier, object: string) => void)): number
    connect_after(sigName: "verification-complete", callback: (($obj: UserVerifier, object: string) => void)): number
    emit(sigName: "verification-complete", object: string): void
    connect(sigName: "verification-failed", callback: (($obj: UserVerifier, object: string) => void)): number
    connect_after(sigName: "verification-failed", callback: (($obj: UserVerifier, object: string) => void)): number
    emit(sigName: "verification-failed", object: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class UserVerifierChoiceList {
    /* Methods of Gdm-1.0.Gdm.UserVerifierChoiceList */
    call_select_choice(arg_service_name: string, arg_choice: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_choice_finish(res: Gio.AsyncResult): boolean
    call_select_choice_sync(arg_service_name: string, arg_choice: string, cancellable?: Gio.Cancellable | null): boolean
    complete_select_choice(invocation: Gio.DBusMethodInvocation): void
    emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void
    /* Virtual methods of Gdm-1.0.Gdm.UserVerifierChoiceList */
    vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void
    vfunc_handle_select_choice(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string): boolean
    /* Signals of Gdm-1.0.Gdm.UserVerifierChoiceList */
    connect(sigName: "choice-query", callback: (($obj: UserVerifierChoiceList, object: string, p0: string, p1: GLib.Variant) => void)): number
    connect_after(sigName: "choice-query", callback: (($obj: UserVerifierChoiceList, object: string, p0: string, p1: GLib.Variant) => void)): number
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant): void
    connect(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceList, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceList, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class WorkerManager {
    /* Methods of Gdm-1.0.Gdm.WorkerManager */
    call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_choice_list_query_sync(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, out_answer: string, cancellable?: Gio.Cancellable | null): boolean
    call_hello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hello_finish(res: Gio.AsyncResult): boolean
    call_hello_sync(cancellable?: Gio.Cancellable | null): boolean
    call_info(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_info_finish(res: Gio.AsyncResult): boolean
    call_info_query(arg_service_name: string, arg_query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable?: Gio.Cancellable | null): boolean
    call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean
    call_problem(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_problem_finish(res: Gio.AsyncResult): boolean
    call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean
    call_secret_info_query(arg_service_name: string, arg_query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_secret_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable?: Gio.Cancellable | null): boolean
    complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    complete_hello(invocation: Gio.DBusMethodInvocation): void
    complete_info(invocation: Gio.DBusMethodInvocation): void
    complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    complete_problem(invocation: Gio.DBusMethodInvocation): void
    complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    /* Virtual methods of Gdm-1.0.Gdm.WorkerManager */
    vfunc_handle_choice_list_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant): boolean
    vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean
    vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean
    vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean
    vfunc_handle_secret_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean
    /* Signals of Gdm-1.0.Gdm.WorkerManager */
    connect(sigName: "handle-choice-list-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-choice-list-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): void
    connect(sigName: "handle-hello", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hello", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-info", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-info-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-problem", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-problem", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-secret-info-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-secret-info-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export interface ChooserProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ChooserProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gdm-1.0.Gdm.Chooser */
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    call_select_hostname(arg_hostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_hostname_finish(res: Gio.AsyncResult): boolean
    call_select_hostname_sync(arg_hostname: string, cancellable?: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    complete_select_hostname(invocation: Gio.DBusMethodInvocation): void
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
    /* Virtual methods of Gdm-1.0.Gdm.ChooserProxy */
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ChooserProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ChooserProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ChooserProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ChooserProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.Chooser */
    connect(sigName: "handle-disconnect", callback: (($obj: ChooserProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: ChooserProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-hostname", callback: (($obj: ChooserProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-hostname", callback: (($obj: ChooserProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChooserProxy_ConstructProps)
    _init (config?: ChooserProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ChooserSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ChooserSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gdm-1.0.Gdm.Chooser */
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    call_select_hostname(arg_hostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_hostname_finish(res: Gio.AsyncResult): boolean
    call_select_hostname_sync(arg_hostname: string, cancellable?: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    complete_select_hostname(invocation: Gio.DBusMethodInvocation): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm-1.0.Gdm.ChooserSkeleton */
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ChooserSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ChooserSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.Chooser */
    connect(sigName: "handle-disconnect", callback: (($obj: ChooserSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: ChooserSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-hostname", callback: (($obj: ChooserSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-hostname", callback: (($obj: ChooserSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChooserSkeleton_ConstructProps)
    _init (config?: ChooserSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdm-1.0.Gdm.Client */
    get_chooser(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_chooser_finish(result: Gio.AsyncResult): Chooser
    get_chooser_sync(cancellable?: Gio.Cancellable | null): Chooser
    get_greeter(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_greeter_finish(result: Gio.AsyncResult): Greeter
    get_greeter_sync(cancellable?: Gio.Cancellable | null): Greeter
    get_remote_greeter(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_remote_greeter_finish(result: Gio.AsyncResult): RemoteGreeter
    get_remote_greeter_sync(cancellable?: Gio.Cancellable | null): RemoteGreeter
    get_user_verifier(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_user_verifier_choice_list(): UserVerifierChoiceList
    get_user_verifier_finish(result: Gio.AsyncResult): UserVerifier
    get_user_verifier_sync(cancellable?: Gio.Cancellable | null): UserVerifier
    open_reauthentication_channel(username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_reauthentication_channel_finish(result: Gio.AsyncResult): UserVerifier
    open_reauthentication_channel_sync(username: string, cancellable?: Gio.Cancellable | null): UserVerifier
    set_enabled_extensions(extensions: string[]): void
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
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static error_quark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface GreeterProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class GreeterProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gdm-1.0.Gdm.Greeter */
    call_begin_auto_login(arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_begin_auto_login_finish(res: Gio.AsyncResult): boolean
    call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_timed_login_details(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_timed_login_details_finish(out_enabled: boolean, out_username: string, out_delay: number, res: Gio.AsyncResult): boolean
    call_get_timed_login_details_sync(out_enabled: boolean, out_username: string, out_delay: number, cancellable?: Gio.Cancellable | null): boolean
    call_select_session(arg_session: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_session_finish(res: Gio.AsyncResult): boolean
    call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean
    call_select_user(arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_user_finish(res: Gio.AsyncResult): boolean
    call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean
    call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean
    call_start_session_when_ready_sync(arg_service_name: string, arg_should_start_session: boolean, cancellable?: Gio.Cancellable | null): boolean
    complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void
    complete_get_timed_login_details(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    complete_select_session(invocation: Gio.DBusMethodInvocation): void
    complete_select_user(invocation: Gio.DBusMethodInvocation): void
    complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void
    emit_default_language_name_changed(arg_language_name: string): void
    emit_default_session_name_changed(arg_session_name: string): void
    emit_reauthenticated(arg_service_name: string): void
    emit_selected_user_changed(arg_username: string): void
    emit_session_opened(arg_service_name: string): void
    emit_timed_login_requested(arg_username: string, arg_delay: number): void
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
    /* Virtual methods of Gdm-1.0.Gdm.GreeterProxy */
    vfunc_default_language_name_changed(arg_language_name: string): void
    vfunc_default_session_name_changed(arg_session_name: string): void
    vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean
    vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_start_session_when_ready(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_should_start_session: boolean): boolean
    vfunc_reauthenticated(arg_service_name: string): void
    vfunc_selected_user_changed(arg_username: string): void
    vfunc_session_opened(arg_service_name: string): void
    vfunc_timed_login_requested(arg_username: string, arg_delay: number): void
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GreeterProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GreeterProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: GreeterProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GreeterProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.Greeter */
    connect(sigName: "default-language-name-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "default-language-name-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "default-language-name-changed", object: string): void
    connect(sigName: "default-session-name-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "default-session-name-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "default-session-name-changed", object: string): void
    connect(sigName: "handle-begin-auto-login", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-auto-login", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-get-timed-login-details", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-timed-login-details", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-session", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-session", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-select-user", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-user", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-start-session-when-ready", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    connect_after(sigName: "handle-start-session-when-ready", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean): void
    connect(sigName: "reauthenticated", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "reauthenticated", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "reauthenticated", object: string): void
    connect(sigName: "selected-user-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "selected-user-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "selected-user-changed", object: string): void
    connect(sigName: "session-opened", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "session-opened", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "session-opened", object: string): void
    connect(sigName: "timed-login-requested", callback: (($obj: GreeterProxy, object: string, p0: number) => void)): number
    connect_after(sigName: "timed-login-requested", callback: (($obj: GreeterProxy, object: string, p0: number) => void)): number
    emit(sigName: "timed-login-requested", object: string, p0: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GreeterProxy_ConstructProps)
    _init (config?: GreeterProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface GreeterSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class GreeterSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gdm-1.0.Gdm.Greeter */
    call_begin_auto_login(arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_begin_auto_login_finish(res: Gio.AsyncResult): boolean
    call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean
    call_get_timed_login_details(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_get_timed_login_details_finish(out_enabled: boolean, out_username: string, out_delay: number, res: Gio.AsyncResult): boolean
    call_get_timed_login_details_sync(out_enabled: boolean, out_username: string, out_delay: number, cancellable?: Gio.Cancellable | null): boolean
    call_select_session(arg_session: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_session_finish(res: Gio.AsyncResult): boolean
    call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean
    call_select_user(arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_user_finish(res: Gio.AsyncResult): boolean
    call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean
    call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean
    call_start_session_when_ready_sync(arg_service_name: string, arg_should_start_session: boolean, cancellable?: Gio.Cancellable | null): boolean
    complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void
    complete_get_timed_login_details(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    complete_select_session(invocation: Gio.DBusMethodInvocation): void
    complete_select_user(invocation: Gio.DBusMethodInvocation): void
    complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void
    emit_default_language_name_changed(arg_language_name: string): void
    emit_default_session_name_changed(arg_session_name: string): void
    emit_reauthenticated(arg_service_name: string): void
    emit_selected_user_changed(arg_username: string): void
    emit_session_opened(arg_service_name: string): void
    emit_timed_login_requested(arg_username: string, arg_delay: number): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm-1.0.Gdm.GreeterSkeleton */
    vfunc_default_language_name_changed(arg_language_name: string): void
    vfunc_default_session_name_changed(arg_session_name: string): void
    vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean
    vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_start_session_when_ready(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_should_start_session: boolean): boolean
    vfunc_reauthenticated(arg_service_name: string): void
    vfunc_selected_user_changed(arg_username: string): void
    vfunc_session_opened(arg_service_name: string): void
    vfunc_timed_login_requested(arg_username: string, arg_delay: number): void
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GreeterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GreeterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.Greeter */
    connect(sigName: "default-language-name-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "default-language-name-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "default-language-name-changed", object: string): void
    connect(sigName: "default-session-name-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "default-session-name-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "default-session-name-changed", object: string): void
    connect(sigName: "handle-begin-auto-login", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-auto-login", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-get-timed-login-details", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-timed-login-details", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-select-session", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-session", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-select-user", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-user", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-start-session-when-ready", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    connect_after(sigName: "handle-start-session-when-ready", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean): void
    connect(sigName: "reauthenticated", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "reauthenticated", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "reauthenticated", object: string): void
    connect(sigName: "selected-user-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "selected-user-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "selected-user-changed", object: string): void
    connect(sigName: "session-opened", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "session-opened", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "session-opened", object: string): void
    connect(sigName: "timed-login-requested", callback: (($obj: GreeterSkeleton, object: string, p0: number) => void)): number
    connect_after(sigName: "timed-login-requested", callback: (($obj: GreeterSkeleton, object: string, p0: number) => void)): number
    emit(sigName: "timed-login-requested", object: string, p0: number): void
    connect(sigName: "notify::g-flags", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GreeterSkeleton_ConstructProps)
    _init (config?: GreeterSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    version?: string
}
export class ManagerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of Gdm-1.0.Gdm.Manager */
    version: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gdm-1.0.Gdm.Manager */
    call_open_reauthentication_channel(arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean
    call_open_reauthentication_channel_sync(arg_username: string, out_address: string, cancellable?: Gio.Cancellable | null): boolean
    call_open_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean
    call_open_session_sync(out_address: string, cancellable?: Gio.Cancellable | null): boolean
    call_register_display(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_display_finish(res: Gio.AsyncResult): boolean
    call_register_display_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_register_session(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_session_finish(res: Gio.AsyncResult): boolean
    call_register_session_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_register_display(invocation: Gio.DBusMethodInvocation): void
    complete_register_session(invocation: Gio.DBusMethodInvocation): void
    dup_version(): string
    get_version(): string
    set_version(value: string): void
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
    /* Virtual methods of Gdm-1.0.Gdm.ManagerProxy */
    vfunc_get_version(): string
    vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean
    vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.Manager */
    connect(sigName: "handle-open-reauthentication-channel", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-open-reauthentication-channel", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-open-session", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-open-session", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-register-display", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-display", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    connect(sigName: "handle-register-session", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-session", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    version?: string
}
export class ManagerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Gdm-1.0.Gdm.Manager */
    version: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gdm-1.0.Gdm.Manager */
    call_open_reauthentication_channel(arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean
    call_open_reauthentication_channel_sync(arg_username: string, out_address: string, cancellable?: Gio.Cancellable | null): boolean
    call_open_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean
    call_open_session_sync(out_address: string, cancellable?: Gio.Cancellable | null): boolean
    call_register_display(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_display_finish(res: Gio.AsyncResult): boolean
    call_register_display_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    call_register_session(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_register_session_finish(res: Gio.AsyncResult): boolean
    call_register_session_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_register_display(invocation: Gio.DBusMethodInvocation): void
    complete_register_session(invocation: Gio.DBusMethodInvocation): void
    dup_version(): string
    get_version(): string
    set_version(value: string): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm-1.0.Gdm.ManagerSkeleton */
    vfunc_get_version(): string
    vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean
    vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.Manager */
    connect(sigName: "handle-open-reauthentication-channel", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-open-reauthentication-channel", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-open-session", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-open-session", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-register-display", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-display", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    connect(sigName: "handle-register-session", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-session", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface RemoteGreeterProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class RemoteGreeterProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gdm-1.0.Gdm.RemoteGreeter */
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
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
    /* Virtual methods of Gdm-1.0.Gdm.RemoteGreeterProxy */
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: RemoteGreeterProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: RemoteGreeterProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: RemoteGreeterProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: RemoteGreeterProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.RemoteGreeter */
    connect(sigName: "handle-disconnect", callback: (($obj: RemoteGreeterProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: RemoteGreeterProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteGreeterProxy_ConstructProps)
    _init (config?: RemoteGreeterProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface RemoteGreeterSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class RemoteGreeterSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gdm-1.0.Gdm.RemoteGreeter */
    call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm-1.0.Gdm.RemoteGreeterSkeleton */
    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: RemoteGreeterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: RemoteGreeterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.RemoteGreeter */
    connect(sigName: "handle-disconnect", callback: (($obj: RemoteGreeterSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: RemoteGreeterSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RemoteGreeterSkeleton_ConstructProps)
    _init (config?: RemoteGreeterSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface UserVerifierChoiceListProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class UserVerifierChoiceListProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gdm-1.0.Gdm.UserVerifierChoiceList */
    call_select_choice(arg_service_name: string, arg_choice: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_choice_finish(res: Gio.AsyncResult): boolean
    call_select_choice_sync(arg_service_name: string, arg_choice: string, cancellable?: Gio.Cancellable | null): boolean
    complete_select_choice(invocation: Gio.DBusMethodInvocation): void
    emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void
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
    /* Virtual methods of Gdm-1.0.Gdm.UserVerifierChoiceListProxy */
    vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void
    vfunc_handle_select_choice(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string): boolean
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: UserVerifierChoiceListProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: UserVerifierChoiceListProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: UserVerifierChoiceListProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: UserVerifierChoiceListProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.UserVerifierChoiceList */
    connect(sigName: "choice-query", callback: (($obj: UserVerifierChoiceListProxy, object: string, p0: string, p1: GLib.Variant) => void)): number
    connect_after(sigName: "choice-query", callback: (($obj: UserVerifierChoiceListProxy, object: string, p0: string, p1: GLib.Variant) => void)): number
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant): void
    connect(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceListProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceListProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserVerifierChoiceListProxy_ConstructProps)
    _init (config?: UserVerifierChoiceListProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface UserVerifierChoiceListSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class UserVerifierChoiceListSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gdm-1.0.Gdm.UserVerifierChoiceList */
    call_select_choice(arg_service_name: string, arg_choice: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_select_choice_finish(res: Gio.AsyncResult): boolean
    call_select_choice_sync(arg_service_name: string, arg_choice: string, cancellable?: Gio.Cancellable | null): boolean
    complete_select_choice(invocation: Gio.DBusMethodInvocation): void
    emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm-1.0.Gdm.UserVerifierChoiceListSkeleton */
    vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void
    vfunc_handle_select_choice(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: UserVerifierChoiceListSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: UserVerifierChoiceListSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.UserVerifierChoiceList */
    connect(sigName: "choice-query", callback: (($obj: UserVerifierChoiceListSkeleton, object: string, p0: string, p1: GLib.Variant) => void)): number
    connect_after(sigName: "choice-query", callback: (($obj: UserVerifierChoiceListSkeleton, object: string, p0: string, p1: GLib.Variant) => void)): number
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant): void
    connect(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceListSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceListSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserVerifierChoiceListSkeleton_ConstructProps)
    _init (config?: UserVerifierChoiceListSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface UserVerifierProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class UserVerifierProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gdm-1.0.Gdm.UserVerifier */
    call_answer_query(arg_service_name: string, arg_answer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_answer_query_finish(res: Gio.AsyncResult): boolean
    call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable?: Gio.Cancellable | null): boolean
    call_begin_verification(arg_service_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_begin_verification_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user_sync(arg_service_name: string, arg_username: string, cancellable?: Gio.Cancellable | null): boolean
    call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean
    call_cancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean
    call_enable_extensions(arg_extensions: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_extensions_finish(res: Gio.AsyncResult): boolean
    call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean
    complete_answer_query(invocation: Gio.DBusMethodInvocation): void
    complete_begin_verification(invocation: Gio.DBusMethodInvocation): void
    complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void
    emit_conversation_started(arg_service_name: string): void
    emit_conversation_stopped(arg_service_name: string): void
    emit_info(arg_service_name: string, arg_info: string): void
    emit_info_query(arg_service_name: string, arg_query: string): void
    emit_problem(arg_service_name: string, arg_problem: string): void
    emit_reauthentication_started(arg_pid_of_caller: number): void
    emit_reset(): void
    emit_secret_info_query(arg_service_name: string, arg_query: string): void
    emit_service_unavailable(arg_service_name: string, arg_message: string): void
    emit_verification_complete(arg_service_name: string): void
    emit_verification_failed(arg_service_name: string): void
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
    /* Virtual methods of Gdm-1.0.Gdm.UserVerifierProxy */
    vfunc_conversation_started(arg_service_name: string): void
    vfunc_conversation_stopped(arg_service_name: string): void
    vfunc_handle_answer_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_answer: string): boolean
    vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean
    vfunc_handle_begin_verification_for_user(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_username: string): boolean
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean
    vfunc_info(arg_service_name: string, arg_info: string): void
    vfunc_info_query(arg_service_name: string, arg_query: string): void
    vfunc_problem(arg_service_name: string, arg_problem: string): void
    vfunc_reauthentication_started(arg_pid_of_caller: number): void
    vfunc_reset(): void
    vfunc_secret_info_query(arg_service_name: string, arg_query: string): void
    vfunc_service_unavailable(arg_service_name: string, arg_message: string): void
    vfunc_verification_complete(arg_service_name: string): void
    vfunc_verification_failed(arg_service_name: string): void
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: UserVerifierProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: UserVerifierProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: UserVerifierProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: UserVerifierProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.UserVerifier */
    connect(sigName: "conversation-started", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    connect_after(sigName: "conversation-started", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    emit(sigName: "conversation-started", object: string): void
    connect(sigName: "conversation-stopped", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    connect_after(sigName: "conversation-stopped", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    emit(sigName: "conversation-stopped", object: string): void
    connect(sigName: "handle-answer-query", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-answer-query", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-begin-verification", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-cancel", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-enable-extensions", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    connect_after(sigName: "handle-enable-extensions", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[]): void
    connect(sigName: "info", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "info", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "info", object: string, p0: string): void
    connect(sigName: "info-query", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "info-query", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "info-query", object: string, p0: string): void
    connect(sigName: "problem", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "problem", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "problem", object: string, p0: string): void
    connect(sigName: "reauthentication-started", callback: (($obj: UserVerifierProxy, object: number) => void)): number
    connect_after(sigName: "reauthentication-started", callback: (($obj: UserVerifierProxy, object: number) => void)): number
    emit(sigName: "reauthentication-started", object: number): void
    connect(sigName: "reset", callback: (($obj: UserVerifierProxy) => void)): number
    connect_after(sigName: "reset", callback: (($obj: UserVerifierProxy) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "secret-info-query", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "secret-info-query", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "secret-info-query", object: string, p0: string): void
    connect(sigName: "service-unavailable", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "service-unavailable", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "service-unavailable", object: string, p0: string): void
    connect(sigName: "verification-complete", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    connect_after(sigName: "verification-complete", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    emit(sigName: "verification-complete", object: string): void
    connect(sigName: "verification-failed", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    connect_after(sigName: "verification-failed", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    emit(sigName: "verification-failed", object: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserVerifierProxy_ConstructProps)
    _init (config?: UserVerifierProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface UserVerifierSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class UserVerifierSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gdm-1.0.Gdm.UserVerifier */
    call_answer_query(arg_service_name: string, arg_answer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_answer_query_finish(res: Gio.AsyncResult): boolean
    call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable?: Gio.Cancellable | null): boolean
    call_begin_verification(arg_service_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_begin_verification_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user_sync(arg_service_name: string, arg_username: string, cancellable?: Gio.Cancellable | null): boolean
    call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean
    call_cancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean
    call_enable_extensions(arg_extensions: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_enable_extensions_finish(res: Gio.AsyncResult): boolean
    call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean
    complete_answer_query(invocation: Gio.DBusMethodInvocation): void
    complete_begin_verification(invocation: Gio.DBusMethodInvocation): void
    complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void
    emit_conversation_started(arg_service_name: string): void
    emit_conversation_stopped(arg_service_name: string): void
    emit_info(arg_service_name: string, arg_info: string): void
    emit_info_query(arg_service_name: string, arg_query: string): void
    emit_problem(arg_service_name: string, arg_problem: string): void
    emit_reauthentication_started(arg_pid_of_caller: number): void
    emit_reset(): void
    emit_secret_info_query(arg_service_name: string, arg_query: string): void
    emit_service_unavailable(arg_service_name: string, arg_message: string): void
    emit_verification_complete(arg_service_name: string): void
    emit_verification_failed(arg_service_name: string): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm-1.0.Gdm.UserVerifierSkeleton */
    vfunc_conversation_started(arg_service_name: string): void
    vfunc_conversation_stopped(arg_service_name: string): void
    vfunc_handle_answer_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_answer: string): boolean
    vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean
    vfunc_handle_begin_verification_for_user(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_username: string): boolean
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean
    vfunc_info(arg_service_name: string, arg_info: string): void
    vfunc_info_query(arg_service_name: string, arg_query: string): void
    vfunc_problem(arg_service_name: string, arg_problem: string): void
    vfunc_reauthentication_started(arg_pid_of_caller: number): void
    vfunc_reset(): void
    vfunc_secret_info_query(arg_service_name: string, arg_query: string): void
    vfunc_service_unavailable(arg_service_name: string, arg_message: string): void
    vfunc_verification_complete(arg_service_name: string): void
    vfunc_verification_failed(arg_service_name: string): void
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: UserVerifierSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: UserVerifierSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.UserVerifier */
    connect(sigName: "conversation-started", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    connect_after(sigName: "conversation-started", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    emit(sigName: "conversation-started", object: string): void
    connect(sigName: "conversation-stopped", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    connect_after(sigName: "conversation-stopped", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    emit(sigName: "conversation-stopped", object: string): void
    connect(sigName: "handle-answer-query", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-answer-query", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-begin-verification", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string): void
    connect(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-cancel", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-enable-extensions", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    connect_after(sigName: "handle-enable-extensions", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[]): void
    connect(sigName: "info", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "info", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "info", object: string, p0: string): void
    connect(sigName: "info-query", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "info-query", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "info-query", object: string, p0: string): void
    connect(sigName: "problem", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "problem", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "problem", object: string, p0: string): void
    connect(sigName: "reauthentication-started", callback: (($obj: UserVerifierSkeleton, object: number) => void)): number
    connect_after(sigName: "reauthentication-started", callback: (($obj: UserVerifierSkeleton, object: number) => void)): number
    emit(sigName: "reauthentication-started", object: number): void
    connect(sigName: "reset", callback: (($obj: UserVerifierSkeleton) => void)): number
    connect_after(sigName: "reset", callback: (($obj: UserVerifierSkeleton) => void)): number
    emit(sigName: "reset"): void
    connect(sigName: "secret-info-query", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "secret-info-query", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "secret-info-query", object: string, p0: string): void
    connect(sigName: "service-unavailable", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "service-unavailable", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "service-unavailable", object: string, p0: string): void
    connect(sigName: "verification-complete", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    connect_after(sigName: "verification-complete", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    emit(sigName: "verification-complete", object: string): void
    connect(sigName: "verification-failed", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    connect_after(sigName: "verification-failed", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    emit(sigName: "verification-failed", object: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserVerifierSkeleton_ConstructProps)
    _init (config?: UserVerifierSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface WorkerManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class WorkerManagerProxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gdm-1.0.Gdm.WorkerManager */
    call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_choice_list_query_sync(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, out_answer: string, cancellable?: Gio.Cancellable | null): boolean
    call_hello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hello_finish(res: Gio.AsyncResult): boolean
    call_hello_sync(cancellable?: Gio.Cancellable | null): boolean
    call_info(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_info_finish(res: Gio.AsyncResult): boolean
    call_info_query(arg_service_name: string, arg_query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable?: Gio.Cancellable | null): boolean
    call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean
    call_problem(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_problem_finish(res: Gio.AsyncResult): boolean
    call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean
    call_secret_info_query(arg_service_name: string, arg_query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_secret_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable?: Gio.Cancellable | null): boolean
    complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    complete_hello(invocation: Gio.DBusMethodInvocation): void
    complete_info(invocation: Gio.DBusMethodInvocation): void
    complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    complete_problem(invocation: Gio.DBusMethodInvocation): void
    complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void
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
    /* Virtual methods of Gdm-1.0.Gdm.WorkerManagerProxy */
    vfunc_handle_choice_list_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant): boolean
    vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean
    vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean
    vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean
    vfunc_handle_secret_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: WorkerManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: WorkerManagerProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: WorkerManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: WorkerManagerProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.WorkerManager */
    connect(sigName: "handle-choice-list-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-choice-list-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): void
    connect(sigName: "handle-hello", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hello", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-info", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-info-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-problem", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-problem", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-secret-info-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-secret-info-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WorkerManagerProxy_ConstructProps)
    _init (config?: WorkerManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface WorkerManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class WorkerManagerSkeleton {
    /* Properties of Gio-2.0.Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection | null
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string | null
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
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
    /* Methods of Gdm-1.0.Gdm.WorkerManager */
    call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_choice_list_query_sync(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, out_answer: string, cancellable?: Gio.Cancellable | null): boolean
    call_hello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_hello_finish(res: Gio.AsyncResult): boolean
    call_hello_sync(cancellable?: Gio.Cancellable | null): boolean
    call_info(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_info_finish(res: Gio.AsyncResult): boolean
    call_info_query(arg_service_name: string, arg_query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable?: Gio.Cancellable | null): boolean
    call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean
    call_problem(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_problem_finish(res: Gio.AsyncResult): boolean
    call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean
    call_secret_info_query(arg_service_name: string, arg_query: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_secret_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable?: Gio.Cancellable | null): boolean
    complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    complete_hello(invocation: Gio.DBusMethodInvocation): void
    complete_info(invocation: Gio.DBusMethodInvocation): void
    complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    complete_problem(invocation: Gio.DBusMethodInvocation): void
    complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    /* Methods of Gio-2.0.Gio.DBusInterface */
    get_object(): Gio.DBusObject | null
    set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm-1.0.Gdm.WorkerManagerSkeleton */
    vfunc_handle_choice_list_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant): boolean
    vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean
    vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean
    vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean
    vfunc_handle_secret_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean
    vfunc_dup_object(): Gio.DBusObject | null
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio-2.0.Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: WorkerManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: WorkerManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gdm-1.0.Gdm.WorkerManager */
    connect(sigName: "handle-choice-list-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-choice-list-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): void
    connect(sigName: "handle-hello", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hello", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-info", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-info-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-problem", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-problem", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "handle-secret-info-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-secret-info-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    connect(sigName: "notify::g-flags", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WorkerManagerSkeleton_ConstructProps)
    _init (config?: WorkerManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export abstract class ChooserIface {
    /* Fields of Gdm-1.0.Gdm.ChooserIface */
    parent_iface: GObject.TypeInterface
    handle_disconnect: (object: Chooser, invocation: Gio.DBusMethodInvocation) => boolean
    handle_select_hostname: (object: Chooser, invocation: Gio.DBusMethodInvocation, arg_hostname: string) => boolean
    static name: string
}
export abstract class ChooserProxyClass {
    /* Fields of Gdm-1.0.Gdm.ChooserProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ChooserProxyPrivate {
    static name: string
}
export abstract class ChooserSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.ChooserSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ChooserSkeletonPrivate {
    static name: string
}
export abstract class ClientClass {
    /* Fields of Gdm-1.0.Gdm.ClientClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class GreeterIface {
    /* Fields of Gdm-1.0.Gdm.GreeterIface */
    parent_iface: GObject.TypeInterface
    handle_begin_auto_login: (object: Greeter, invocation: Gio.DBusMethodInvocation, arg_username: string) => boolean
    handle_get_timed_login_details: (object: Greeter, invocation: Gio.DBusMethodInvocation) => boolean
    handle_select_session: (object: Greeter, invocation: Gio.DBusMethodInvocation, arg_session: string) => boolean
    handle_select_user: (object: Greeter, invocation: Gio.DBusMethodInvocation, arg_username: string) => boolean
    handle_start_session_when_ready: (object: Greeter, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_should_start_session: boolean) => boolean
    default_language_name_changed: (object: Greeter, arg_language_name: string) => void
    default_session_name_changed: (object: Greeter, arg_session_name: string) => void
    reauthenticated: (object: Greeter, arg_service_name: string) => void
    selected_user_changed: (object: Greeter, arg_username: string) => void
    session_opened: (object: Greeter, arg_service_name: string) => void
    timed_login_requested: (object: Greeter, arg_username: string, arg_delay: number) => void
    static name: string
}
export abstract class GreeterProxyClass {
    /* Fields of Gdm-1.0.Gdm.GreeterProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class GreeterProxyPrivate {
    static name: string
}
export abstract class GreeterSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.GreeterSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GreeterSkeletonPrivate {
    static name: string
}
export abstract class ManagerIface {
    /* Fields of Gdm-1.0.Gdm.ManagerIface */
    parent_iface: GObject.TypeInterface
    handle_open_reauthentication_channel: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_username: string) => boolean
    handle_open_session: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handle_register_display: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant) => boolean
    handle_register_session: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant) => boolean
    get_version: (object: Manager) => string
    static name: string
}
export abstract class ManagerProxyClass {
    /* Fields of Gdm-1.0.Gdm.ManagerProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ManagerProxyPrivate {
    static name: string
}
export abstract class ManagerSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.ManagerSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ManagerSkeletonPrivate {
    static name: string
}
export abstract class RemoteGreeterIface {
    /* Fields of Gdm-1.0.Gdm.RemoteGreeterIface */
    parent_iface: GObject.TypeInterface
    handle_disconnect: (object: RemoteGreeter, invocation: Gio.DBusMethodInvocation) => boolean
    static name: string
}
export abstract class RemoteGreeterProxyClass {
    /* Fields of Gdm-1.0.Gdm.RemoteGreeterProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class RemoteGreeterProxyPrivate {
    static name: string
}
export abstract class RemoteGreeterSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.RemoteGreeterSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class RemoteGreeterSkeletonPrivate {
    static name: string
}
export abstract class UserVerifierChoiceListIface {
    /* Fields of Gdm-1.0.Gdm.UserVerifierChoiceListIface */
    parent_iface: GObject.TypeInterface
    handle_select_choice: (object: UserVerifierChoiceList, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string) => boolean
    choice_query: (object: UserVerifierChoiceList, arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant) => void
    static name: string
}
export abstract class UserVerifierChoiceListProxyClass {
    /* Fields of Gdm-1.0.Gdm.UserVerifierChoiceListProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class UserVerifierChoiceListProxyPrivate {
    static name: string
}
export abstract class UserVerifierChoiceListSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.UserVerifierChoiceListSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class UserVerifierChoiceListSkeletonPrivate {
    static name: string
}
export abstract class UserVerifierIface {
    /* Fields of Gdm-1.0.Gdm.UserVerifierIface */
    parent_iface: GObject.TypeInterface
    handle_answer_query: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_answer: string) => boolean
    handle_begin_verification: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, arg_service_name: string) => boolean
    handle_begin_verification_for_user: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_username: string) => boolean
    handle_cancel: (object: UserVerifier, invocation: Gio.DBusMethodInvocation) => boolean
    handle_enable_extensions: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, arg_extensions: string) => boolean
    conversation_started: (object: UserVerifier, arg_service_name: string) => void
    conversation_stopped: (object: UserVerifier, arg_service_name: string) => void
    info: (object: UserVerifier, arg_service_name: string, arg_info: string) => void
    info_query: (object: UserVerifier, arg_service_name: string, arg_query: string) => void
    problem: (object: UserVerifier, arg_service_name: string, arg_problem: string) => void
    reauthentication_started: (object: UserVerifier, arg_pid_of_caller: number) => void
    reset: (object: UserVerifier) => void
    secret_info_query: (object: UserVerifier, arg_service_name: string, arg_query: string) => void
    service_unavailable: (object: UserVerifier, arg_service_name: string, arg_message: string) => void
    verification_complete: (object: UserVerifier, arg_service_name: string) => void
    verification_failed: (object: UserVerifier, arg_service_name: string) => void
    static name: string
}
export abstract class UserVerifierProxyClass {
    /* Fields of Gdm-1.0.Gdm.UserVerifierProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class UserVerifierProxyPrivate {
    static name: string
}
export abstract class UserVerifierSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.UserVerifierSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class UserVerifierSkeletonPrivate {
    static name: string
}
export abstract class WorkerManagerIface {
    /* Fields of Gdm-1.0.Gdm.WorkerManagerIface */
    parent_iface: GObject.TypeInterface
    handle_choice_list_query: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant) => boolean
    handle_hello: (object: WorkerManager, invocation: Gio.DBusMethodInvocation) => boolean
    handle_info: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string) => boolean
    handle_info_query: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string) => boolean
    handle_problem: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string) => boolean
    handle_secret_info_query: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string) => boolean
    static name: string
}
export abstract class WorkerManagerProxyClass {
    /* Fields of Gdm-1.0.Gdm.WorkerManagerProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class WorkerManagerProxyPrivate {
    static name: string
}
export abstract class WorkerManagerSkeletonClass {
    /* Fields of Gdm-1.0.Gdm.WorkerManagerSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class WorkerManagerSkeletonPrivate {
    static name: string
}