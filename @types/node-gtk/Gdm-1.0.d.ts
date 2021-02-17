/**
 * Gdm-1.0
 */

import "node"
import type { Gio } from './Gio-2.0';
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace Gdm {

export enum ClientError {
    CLIENT_ERROR_GENERIC,
}
export function chooserInterfaceInfo(): Gio.DBusInterfaceInfo
export function chooserOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function getSessionIds(): string[]
export function getSessionNameAndDescription(id: string): [ /* returnType */ string, /* description */ string ]
export function gotoLoginSessionSync(cancellable?: Gio.Cancellable | null): boolean
export function greeterInterfaceInfo(): Gio.DBusInterfaceInfo
export function greeterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function managerInterfaceInfo(): Gio.DBusInterfaceInfo
export function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function remoteGreeterInterfaceInfo(): Gio.DBusInterfaceInfo
export function remoteGreeterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function userVerifierChoiceListInterfaceInfo(): Gio.DBusInterfaceInfo
export function userVerifierChoiceListOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function userVerifierInterfaceInfo(): Gio.DBusInterfaceInfo
export function userVerifierOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function workerManagerInterfaceInfo(): Gio.DBusInterfaceInfo
export function workerManagerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export class Chooser {
    /* Methods of Gdm.Chooser */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    callSelectHostname(argHostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectHostnameFinish(res: Gio.AsyncResult): boolean
    callSelectHostnameSync(argHostname: string, cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    completeSelectHostname(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Gdm.Chooser */
    vfuncHandleDisconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleSelectHostname(invocation: Gio.DBusMethodInvocation, argHostname: string): boolean
    /* Signals of Gdm.Chooser */
    connect(sigName: "handle-disconnect", callback: (($obj: Chooser, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: Chooser, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-hostname", callback: (($obj: Chooser, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-hostname", callback: (($obj: Chooser, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-select-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Greeter {
    /* Methods of Gdm.Greeter */
    callBeginAutoLogin(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginAutoLoginFinish(res: Gio.AsyncResult): boolean
    callBeginAutoLoginSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callGetTimedLoginDetails(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTimedLoginDetailsFinish(outEnabled: boolean, outUsername: string, outDelay: number, res: Gio.AsyncResult): boolean
    callGetTimedLoginDetailsSync(outEnabled: boolean, outUsername: string, outDelay: number, cancellable?: Gio.Cancellable | null): boolean
    callSelectSession(argSession: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectSessionFinish(res: Gio.AsyncResult): boolean
    callSelectSessionSync(argSession: string, cancellable?: Gio.Cancellable | null): boolean
    callSelectUser(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectUserFinish(res: Gio.AsyncResult): boolean
    callSelectUserSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callStartSessionWhenReady(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartSessionWhenReadyFinish(res: Gio.AsyncResult): boolean
    callStartSessionWhenReadySync(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null): boolean
    completeBeginAutoLogin(invocation: Gio.DBusMethodInvocation): void
    completeGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    completeSelectSession(invocation: Gio.DBusMethodInvocation): void
    completeSelectUser(invocation: Gio.DBusMethodInvocation): void
    completeStartSessionWhenReady(invocation: Gio.DBusMethodInvocation): void
    emitDefaultLanguageNameChanged(argLanguageName: string): void
    emitDefaultSessionNameChanged(argSessionName: string): void
    emitReauthenticated(argServiceName: string): void
    emitSelectedUserChanged(argUsername: string): void
    emitSessionOpened(argServiceName: string): void
    emitTimedLoginRequested(argUsername: string, argDelay: number): void
    /* Virtual methods of Gdm.Greeter */
    vfuncDefaultLanguageNameChanged(argLanguageName: string): void
    vfuncDefaultSessionNameChanged(argSessionName: string): void
    vfuncHandleBeginAutoLogin(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    vfuncHandleGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleSelectSession(invocation: Gio.DBusMethodInvocation, argSession: string): boolean
    vfuncHandleSelectUser(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    vfuncHandleStartSessionWhenReady(invocation: Gio.DBusMethodInvocation, argServiceName: string, argShouldStartSession: boolean): boolean
    vfuncReauthenticated(argServiceName: string): void
    vfuncSelectedUserChanged(argUsername: string): void
    vfuncSessionOpened(argServiceName: string): void
    vfuncTimedLoginRequested(argUsername: string, argDelay: number): void
    /* Signals of Gdm.Greeter */
    connect(sigName: "default-language-name-changed", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "default-language-name-changed", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "default-language-name-changed", object: string): void
    on(sigName: "default-language-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "default-language-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "default-language-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "default-session-name-changed", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "default-session-name-changed", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "default-session-name-changed", object: string): void
    on(sigName: "default-session-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "default-session-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "default-session-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-begin-auto-login", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-auto-login", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-begin-auto-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-begin-auto-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-begin-auto-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-timed-login-details", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-timed-login-details", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-timed-login-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-timed-login-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-timed-login-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-session", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-session", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-select-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-user", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-user", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-select-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-start-session-when-ready", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    connect_after(sigName: "handle-start-session-when-ready", callback: (($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean): void
    on(sigName: "handle-start-session-when-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start-session-when-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start-session-when-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reauthenticated", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "reauthenticated", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "reauthenticated", object: string): void
    on(sigName: "reauthenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reauthenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reauthenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selected-user-changed", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "selected-user-changed", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "selected-user-changed", object: string): void
    on(sigName: "selected-user-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selected-user-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selected-user-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "session-opened", callback: (($obj: Greeter, object: string) => void)): number
    connect_after(sigName: "session-opened", callback: (($obj: Greeter, object: string) => void)): number
    emit(sigName: "session-opened", object: string): void
    on(sigName: "session-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "session-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "session-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "timed-login-requested", callback: (($obj: Greeter, object: string, p0: number) => void)): number
    connect_after(sigName: "timed-login-requested", callback: (($obj: Greeter, object: string, p0: number) => void)): number
    emit(sigName: "timed-login-requested", object: string, p0: number): void
    on(sigName: "timed-login-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "timed-login-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "timed-login-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class Manager {
    /* Properties of Gdm.Manager */
    version: string
    /* Methods of Gdm.Manager */
    callOpenReauthenticationChannel(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenReauthenticationChannelFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenReauthenticationChannelSync(argUsername: string, outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callOpenSession(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenSessionFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenSessionSync(outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callRegisterDisplay(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterDisplayFinish(res: Gio.AsyncResult): boolean
    callRegisterDisplaySync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRegisterSession(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterSessionFinish(res: Gio.AsyncResult): boolean
    callRegisterSessionSync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, address: string): void
    completeOpenSession(invocation: Gio.DBusMethodInvocation, address: string): void
    completeRegisterDisplay(invocation: Gio.DBusMethodInvocation): void
    completeRegisterSession(invocation: Gio.DBusMethodInvocation): void
    dupVersion(): string
    getVersion(): string
    setVersion(value: string): void
    /* Virtual methods of Gdm.Manager */
    vfuncGetVersion(): string
    vfuncHandleOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    vfuncHandleOpenSession(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleRegisterDisplay(invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant): boolean
    vfuncHandleRegisterSession(invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant): boolean
    /* Signals of Gdm.Manager */
    connect(sigName: "handle-open-reauthentication-channel", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-open-reauthentication-channel", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-open-reauthentication-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-reauthentication-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-reauthentication-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-session", callback: (($obj: Manager, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-open-session", callback: (($obj: Manager, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-open-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-register-display", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-display", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    on(sigName: "handle-register-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-register-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-register-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-register-session", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-session", callback: (($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    on(sigName: "handle-register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class RemoteGreeter {
    /* Methods of Gdm.RemoteGreeter */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of Gdm.RemoteGreeter */
    vfuncHandleDisconnect(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of Gdm.RemoteGreeter */
    connect(sigName: "handle-disconnect", callback: (($obj: RemoteGreeter, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: RemoteGreeter, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class UserVerifier {
    /* Methods of Gdm.UserVerifier */
    callAnswerQuery(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAnswerQueryFinish(res: Gio.AsyncResult): boolean
    callAnswerQuerySync(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerification(argServiceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUser(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationForUserFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUserSync(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerificationSync(argServiceName: string, cancellable?: Gio.Cancellable | null): boolean
    callCancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(cancellable?: Gio.Cancellable | null): boolean
    callEnableExtensions(argExtensions: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnableExtensionsFinish(res: Gio.AsyncResult): boolean
    callEnableExtensionsSync(argExtensions: string, cancellable?: Gio.Cancellable | null): boolean
    completeAnswerQuery(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerification(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerificationForUser(invocation: Gio.DBusMethodInvocation): void
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    completeEnableExtensions(invocation: Gio.DBusMethodInvocation): void
    emitConversationStarted(argServiceName: string): void
    emitConversationStopped(argServiceName: string): void
    emitInfo(argServiceName: string, argInfo: string): void
    emitInfoQuery(argServiceName: string, argQuery: string): void
    emitProblem(argServiceName: string, argProblem: string): void
    emitReauthenticationStarted(argPidOfCaller: number): void
    emitReset(): void
    emitSecretInfoQuery(argServiceName: string, argQuery: string): void
    emitServiceUnavailable(argServiceName: string, argMessage: string): void
    emitVerificationComplete(argServiceName: string): void
    emitVerificationFailed(argServiceName: string): void
    /* Virtual methods of Gdm.UserVerifier */
    vfuncConversationStarted(argServiceName: string): void
    vfuncConversationStopped(argServiceName: string): void
    vfuncHandleAnswerQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argAnswer: string): boolean
    vfuncHandleBeginVerification(invocation: Gio.DBusMethodInvocation, argServiceName: string): boolean
    vfuncHandleBeginVerificationForUser(invocation: Gio.DBusMethodInvocation, argServiceName: string, argUsername: string): boolean
    vfuncHandleCancel(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleEnableExtensions(invocation: Gio.DBusMethodInvocation, argExtensions: string): boolean
    vfuncInfo(argServiceName: string, argInfo: string): void
    vfuncInfoQuery(argServiceName: string, argQuery: string): void
    vfuncProblem(argServiceName: string, argProblem: string): void
    vfuncReauthenticationStarted(argPidOfCaller: number): void
    vfuncReset(): void
    vfuncSecretInfoQuery(argServiceName: string, argQuery: string): void
    vfuncServiceUnavailable(argServiceName: string, argMessage: string): void
    vfuncVerificationComplete(argServiceName: string): void
    vfuncVerificationFailed(argServiceName: string): void
    /* Signals of Gdm.UserVerifier */
    connect(sigName: "conversation-started", callback: (($obj: UserVerifier, object: string) => void)): number
    connect_after(sigName: "conversation-started", callback: (($obj: UserVerifier, object: string) => void)): number
    emit(sigName: "conversation-started", object: string): void
    on(sigName: "conversation-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "conversation-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "conversation-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "conversation-stopped", callback: (($obj: UserVerifier, object: string) => void)): number
    connect_after(sigName: "conversation-stopped", callback: (($obj: UserVerifier, object: string) => void)): number
    emit(sigName: "conversation-stopped", object: string): void
    on(sigName: "conversation-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "conversation-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "conversation-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-answer-query", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-answer-query", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-answer-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-answer-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-answer-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-begin-verification", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-begin-verification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-begin-verification-for-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification-for-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification-for-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-cancel", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-enable-extensions", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    connect_after(sigName: "handle-enable-extensions", callback: (($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[]): void
    on(sigName: "handle-enable-extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-enable-extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-enable-extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "info", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "info", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "info", object: string, p0: string): void
    on(sigName: "info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "info-query", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "info-query", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "info-query", object: string, p0: string): void
    on(sigName: "info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "problem", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "problem", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "problem", object: string, p0: string): void
    on(sigName: "problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reauthentication-started", callback: (($obj: UserVerifier, object: number) => void)): number
    connect_after(sigName: "reauthentication-started", callback: (($obj: UserVerifier, object: number) => void)): number
    emit(sigName: "reauthentication-started", object: number): void
    on(sigName: "reauthentication-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reauthentication-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reauthentication-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reset", callback: (($obj: UserVerifier) => void)): number
    connect_after(sigName: "reset", callback: (($obj: UserVerifier) => void)): number
    emit(sigName: "reset"): void
    on(sigName: "reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "secret-info-query", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "secret-info-query", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "secret-info-query", object: string, p0: string): void
    on(sigName: "secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "service-unavailable", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    connect_after(sigName: "service-unavailable", callback: (($obj: UserVerifier, object: string, p0: string) => void)): number
    emit(sigName: "service-unavailable", object: string, p0: string): void
    on(sigName: "service-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "service-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "service-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "verification-complete", callback: (($obj: UserVerifier, object: string) => void)): number
    connect_after(sigName: "verification-complete", callback: (($obj: UserVerifier, object: string) => void)): number
    emit(sigName: "verification-complete", object: string): void
    on(sigName: "verification-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "verification-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "verification-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "verification-failed", callback: (($obj: UserVerifier, object: string) => void)): number
    connect_after(sigName: "verification-failed", callback: (($obj: UserVerifier, object: string) => void)): number
    emit(sigName: "verification-failed", object: string): void
    on(sigName: "verification-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "verification-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "verification-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class UserVerifierChoiceList {
    /* Methods of Gdm.UserVerifierChoiceList */
    callSelectChoice(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectChoiceFinish(res: Gio.AsyncResult): boolean
    callSelectChoiceSync(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null): boolean
    completeSelectChoice(invocation: Gio.DBusMethodInvocation): void
    emitChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
    /* Virtual methods of Gdm.UserVerifierChoiceList */
    vfuncChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
    vfuncHandleSelectChoice(invocation: Gio.DBusMethodInvocation, argServiceName: string, argChoice: string): boolean
    /* Signals of Gdm.UserVerifierChoiceList */
    connect(sigName: "choice-query", callback: (($obj: UserVerifierChoiceList, object: string, p0: string, p1: GLib.Variant) => void)): number
    connect_after(sigName: "choice-query", callback: (($obj: UserVerifierChoiceList, object: string, p0: string, p1: GLib.Variant) => void)): number
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant): void
    on(sigName: "choice-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "choice-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "choice-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceList, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceList, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-select-choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export class WorkerManager {
    /* Methods of Gdm.WorkerManager */
    callChoiceListQuery(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callChoiceListQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callChoiceListQuerySync(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callHello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callHelloFinish(res: Gio.AsyncResult): boolean
    callHelloSync(cancellable?: Gio.Cancellable | null): boolean
    callInfo(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoFinish(res: Gio.AsyncResult): boolean
    callInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callInfoSync(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null): boolean
    callProblem(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callProblemFinish(res: Gio.AsyncResult): boolean
    callProblemSync(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null): boolean
    callSecretInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSecretInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callSecretInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    completeChoiceListQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeHello(invocation: Gio.DBusMethodInvocation): void
    completeInfo(invocation: Gio.DBusMethodInvocation): void
    completeInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeProblem(invocation: Gio.DBusMethodInvocation): void
    completeSecretInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    /* Virtual methods of Gdm.WorkerManager */
    vfuncHandleChoiceListQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant): boolean
    vfuncHandleHello(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleInfo(invocation: Gio.DBusMethodInvocation, argServiceName: string, argInfo: string): boolean
    vfuncHandleInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string): boolean
    vfuncHandleProblem(invocation: Gio.DBusMethodInvocation, argServiceName: string, argProblem: string): boolean
    vfuncHandleSecretInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string): boolean
    /* Signals of Gdm.WorkerManager */
    connect(sigName: "handle-choice-list-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-choice-list-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): void
    on(sigName: "handle-choice-list-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-choice-list-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-choice-list-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-hello", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hello", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-hello", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-hello", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-hello", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-info", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-info-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-problem", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-problem", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-secret-info-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-secret-info-query", callback: (($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    static name: string
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}
export interface ChooserProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class ChooserProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.Chooser */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    callSelectHostname(argHostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectHostnameFinish(res: Gio.AsyncResult): boolean
    callSelectHostnameSync(argHostname: string, cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    completeSelectHostname(invocation: Gio.DBusMethodInvocation): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gdm.ChooserProxy */
    vfuncHandleDisconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleSelectHostname(invocation: Gio.DBusMethodInvocation, argHostname: string): boolean
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ChooserProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ChooserProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ChooserProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ChooserProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.Chooser */
    connect(sigName: "handle-disconnect", callback: (($obj: ChooserProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: ChooserProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-hostname", callback: (($obj: ChooserProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-hostname", callback: (($obj: ChooserProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-select-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChooserProxy_ConstructProps)
    _init (config?: ChooserProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ChooserSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class ChooserSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.Chooser */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    callSelectHostname(argHostname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectHostnameFinish(res: Gio.AsyncResult): boolean
    callSelectHostnameSync(argHostname: string, cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    completeSelectHostname(invocation: Gio.DBusMethodInvocation): void
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm.ChooserSkeleton */
    vfuncHandleDisconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleSelectHostname(invocation: Gio.DBusMethodInvocation, argHostname: string): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ChooserSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ChooserSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.Chooser */
    connect(sigName: "handle-disconnect", callback: (($obj: ChooserSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: ChooserSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-hostname", callback: (($obj: ChooserSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-hostname", callback: (($obj: ChooserSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-select-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ChooserSkeleton_ConstructProps)
    _init (config?: ChooserSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gdm.Client */
    getChooser(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getChooserFinish(result: Gio.AsyncResult): Chooser
    getChooserSync(cancellable?: Gio.Cancellable | null): Chooser
    getGreeter(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getGreeterFinish(result: Gio.AsyncResult): Greeter
    getGreeterSync(cancellable?: Gio.Cancellable | null): Greeter
    getRemoteGreeter(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getRemoteGreeterFinish(result: Gio.AsyncResult): RemoteGreeter
    getRemoteGreeterSync(cancellable?: Gio.Cancellable | null): RemoteGreeter
    getUserVerifier(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getUserVerifierChoiceList(): UserVerifierChoiceList
    getUserVerifierFinish(result: Gio.AsyncResult): UserVerifier
    getUserVerifierSync(cancellable?: Gio.Cancellable | null): UserVerifier
    openReauthenticationChannel(username: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openReauthenticationChannelFinish(result: Gio.AsyncResult): UserVerifier
    openReauthenticationChannelSync(username: string, cancellable?: Gio.Cancellable | null): UserVerifier
    setEnabledExtensions(extensions: string[]): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
export interface GreeterProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class GreeterProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.Greeter */
    callBeginAutoLogin(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginAutoLoginFinish(res: Gio.AsyncResult): boolean
    callBeginAutoLoginSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callGetTimedLoginDetails(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTimedLoginDetailsFinish(outEnabled: boolean, outUsername: string, outDelay: number, res: Gio.AsyncResult): boolean
    callGetTimedLoginDetailsSync(outEnabled: boolean, outUsername: string, outDelay: number, cancellable?: Gio.Cancellable | null): boolean
    callSelectSession(argSession: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectSessionFinish(res: Gio.AsyncResult): boolean
    callSelectSessionSync(argSession: string, cancellable?: Gio.Cancellable | null): boolean
    callSelectUser(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectUserFinish(res: Gio.AsyncResult): boolean
    callSelectUserSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callStartSessionWhenReady(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartSessionWhenReadyFinish(res: Gio.AsyncResult): boolean
    callStartSessionWhenReadySync(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null): boolean
    completeBeginAutoLogin(invocation: Gio.DBusMethodInvocation): void
    completeGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    completeSelectSession(invocation: Gio.DBusMethodInvocation): void
    completeSelectUser(invocation: Gio.DBusMethodInvocation): void
    completeStartSessionWhenReady(invocation: Gio.DBusMethodInvocation): void
    emitDefaultLanguageNameChanged(argLanguageName: string): void
    emitDefaultSessionNameChanged(argSessionName: string): void
    emitReauthenticated(argServiceName: string): void
    emitSelectedUserChanged(argUsername: string): void
    emitSessionOpened(argServiceName: string): void
    emitTimedLoginRequested(argUsername: string, argDelay: number): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gdm.GreeterProxy */
    vfuncDefaultLanguageNameChanged(argLanguageName: string): void
    vfuncDefaultSessionNameChanged(argSessionName: string): void
    vfuncHandleBeginAutoLogin(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    vfuncHandleGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleSelectSession(invocation: Gio.DBusMethodInvocation, argSession: string): boolean
    vfuncHandleSelectUser(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    vfuncHandleStartSessionWhenReady(invocation: Gio.DBusMethodInvocation, argServiceName: string, argShouldStartSession: boolean): boolean
    vfuncReauthenticated(argServiceName: string): void
    vfuncSelectedUserChanged(argUsername: string): void
    vfuncSessionOpened(argServiceName: string): void
    vfuncTimedLoginRequested(argUsername: string, argDelay: number): void
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: GreeterProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: GreeterProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: GreeterProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: GreeterProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.Greeter */
    connect(sigName: "default-language-name-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "default-language-name-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "default-language-name-changed", object: string): void
    on(sigName: "default-language-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "default-language-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "default-language-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "default-session-name-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "default-session-name-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "default-session-name-changed", object: string): void
    on(sigName: "default-session-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "default-session-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "default-session-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-begin-auto-login", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-auto-login", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-begin-auto-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-begin-auto-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-begin-auto-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-timed-login-details", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-timed-login-details", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-timed-login-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-timed-login-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-timed-login-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-session", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-session", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-select-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-user", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-user", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-select-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-start-session-when-ready", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    connect_after(sigName: "handle-start-session-when-ready", callback: (($obj: GreeterProxy, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean): void
    on(sigName: "handle-start-session-when-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start-session-when-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start-session-when-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reauthenticated", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "reauthenticated", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "reauthenticated", object: string): void
    on(sigName: "reauthenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reauthenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reauthenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selected-user-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "selected-user-changed", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "selected-user-changed", object: string): void
    on(sigName: "selected-user-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selected-user-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selected-user-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "session-opened", callback: (($obj: GreeterProxy, object: string) => void)): number
    connect_after(sigName: "session-opened", callback: (($obj: GreeterProxy, object: string) => void)): number
    emit(sigName: "session-opened", object: string): void
    on(sigName: "session-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "session-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "session-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "timed-login-requested", callback: (($obj: GreeterProxy, object: string, p0: number) => void)): number
    connect_after(sigName: "timed-login-requested", callback: (($obj: GreeterProxy, object: string, p0: number) => void)): number
    emit(sigName: "timed-login-requested", object: string, p0: number): void
    on(sigName: "timed-login-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "timed-login-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "timed-login-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GreeterProxy_ConstructProps)
    _init (config?: GreeterProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface GreeterSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class GreeterSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.Greeter */
    callBeginAutoLogin(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginAutoLoginFinish(res: Gio.AsyncResult): boolean
    callBeginAutoLoginSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callGetTimedLoginDetails(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callGetTimedLoginDetailsFinish(outEnabled: boolean, outUsername: string, outDelay: number, res: Gio.AsyncResult): boolean
    callGetTimedLoginDetailsSync(outEnabled: boolean, outUsername: string, outDelay: number, cancellable?: Gio.Cancellable | null): boolean
    callSelectSession(argSession: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectSessionFinish(res: Gio.AsyncResult): boolean
    callSelectSessionSync(argSession: string, cancellable?: Gio.Cancellable | null): boolean
    callSelectUser(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectUserFinish(res: Gio.AsyncResult): boolean
    callSelectUserSync(argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callStartSessionWhenReady(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callStartSessionWhenReadyFinish(res: Gio.AsyncResult): boolean
    callStartSessionWhenReadySync(argServiceName: string, argShouldStartSession: boolean, cancellable?: Gio.Cancellable | null): boolean
    completeBeginAutoLogin(invocation: Gio.DBusMethodInvocation): void
    completeGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    completeSelectSession(invocation: Gio.DBusMethodInvocation): void
    completeSelectUser(invocation: Gio.DBusMethodInvocation): void
    completeStartSessionWhenReady(invocation: Gio.DBusMethodInvocation): void
    emitDefaultLanguageNameChanged(argLanguageName: string): void
    emitDefaultSessionNameChanged(argSessionName: string): void
    emitReauthenticated(argServiceName: string): void
    emitSelectedUserChanged(argUsername: string): void
    emitSessionOpened(argServiceName: string): void
    emitTimedLoginRequested(argUsername: string, argDelay: number): void
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm.GreeterSkeleton */
    vfuncDefaultLanguageNameChanged(argLanguageName: string): void
    vfuncDefaultSessionNameChanged(argSessionName: string): void
    vfuncHandleBeginAutoLogin(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    vfuncHandleGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleSelectSession(invocation: Gio.DBusMethodInvocation, argSession: string): boolean
    vfuncHandleSelectUser(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    vfuncHandleStartSessionWhenReady(invocation: Gio.DBusMethodInvocation, argServiceName: string, argShouldStartSession: boolean): boolean
    vfuncReauthenticated(argServiceName: string): void
    vfuncSelectedUserChanged(argUsername: string): void
    vfuncSessionOpened(argServiceName: string): void
    vfuncTimedLoginRequested(argUsername: string, argDelay: number): void
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: GreeterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: GreeterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.Greeter */
    connect(sigName: "default-language-name-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "default-language-name-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "default-language-name-changed", object: string): void
    on(sigName: "default-language-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "default-language-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "default-language-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "default-session-name-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "default-session-name-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "default-session-name-changed", object: string): void
    on(sigName: "default-session-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "default-session-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "default-session-name-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-begin-auto-login", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-auto-login", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-begin-auto-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-begin-auto-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-begin-auto-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-get-timed-login-details", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-timed-login-details", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-get-timed-login-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-get-timed-login-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-get-timed-login-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-session", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-session", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-select-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-user", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-select-user", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-select-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-start-session-when-ready", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    connect_after(sigName: "handle-start-session-when-ready", callback: (($obj: GreeterSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: boolean) => boolean)): number
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean): void
    on(sigName: "handle-start-session-when-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-start-session-when-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-start-session-when-ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reauthenticated", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "reauthenticated", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "reauthenticated", object: string): void
    on(sigName: "reauthenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reauthenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reauthenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "selected-user-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "selected-user-changed", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "selected-user-changed", object: string): void
    on(sigName: "selected-user-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "selected-user-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "selected-user-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "session-opened", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    connect_after(sigName: "session-opened", callback: (($obj: GreeterSkeleton, object: string) => void)): number
    emit(sigName: "session-opened", object: string): void
    on(sigName: "session-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "session-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "session-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "timed-login-requested", callback: (($obj: GreeterSkeleton, object: string, p0: number) => void)): number
    connect_after(sigName: "timed-login-requested", callback: (($obj: GreeterSkeleton, object: string, p0: number) => void)): number
    emit(sigName: "timed-login-requested", object: string, p0: number): void
    on(sigName: "timed-login-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "timed-login-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "timed-login-requested", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GreeterSkeleton_ConstructProps)
    _init (config?: GreeterSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface ManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    version?: string
}
export class ManagerProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Properties of Gdm.Manager */
    version: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.Manager */
    callOpenReauthenticationChannel(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenReauthenticationChannelFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenReauthenticationChannelSync(argUsername: string, outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callOpenSession(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenSessionFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenSessionSync(outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callRegisterDisplay(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterDisplayFinish(res: Gio.AsyncResult): boolean
    callRegisterDisplaySync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRegisterSession(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterSessionFinish(res: Gio.AsyncResult): boolean
    callRegisterSessionSync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, address: string): void
    completeOpenSession(invocation: Gio.DBusMethodInvocation, address: string): void
    completeRegisterDisplay(invocation: Gio.DBusMethodInvocation): void
    completeRegisterSession(invocation: Gio.DBusMethodInvocation): void
    dupVersion(): string
    getVersion(): string
    setVersion(value: string): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gdm.ManagerProxy */
    vfuncGetVersion(): string
    vfuncHandleOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    vfuncHandleOpenSession(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleRegisterDisplay(invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant): boolean
    vfuncHandleRegisterSession(invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant): boolean
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: ManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.Manager */
    connect(sigName: "handle-open-reauthentication-channel", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-open-reauthentication-channel", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-open-reauthentication-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-reauthentication-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-reauthentication-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-session", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-open-session", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-open-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-register-display", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-display", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    on(sigName: "handle-register-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-register-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-register-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-register-session", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-session", callback: (($obj: ManagerProxy, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    on(sigName: "handle-register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerProxy_ConstructProps)
    _init (config?: ManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface ManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    version?: string
}
export class ManagerSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of Gdm.Manager */
    version: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.Manager */
    callOpenReauthenticationChannel(argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenReauthenticationChannelFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenReauthenticationChannelSync(argUsername: string, outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callOpenSession(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callOpenSessionFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenSessionSync(outAddress: string, cancellable?: Gio.Cancellable | null): boolean
    callRegisterDisplay(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterDisplayFinish(res: Gio.AsyncResult): boolean
    callRegisterDisplaySync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    callRegisterSession(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callRegisterSessionFinish(res: Gio.AsyncResult): boolean
    callRegisterSessionSync(argDetails: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean
    completeOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, address: string): void
    completeOpenSession(invocation: Gio.DBusMethodInvocation, address: string): void
    completeRegisterDisplay(invocation: Gio.DBusMethodInvocation): void
    completeRegisterSession(invocation: Gio.DBusMethodInvocation): void
    dupVersion(): string
    getVersion(): string
    setVersion(value: string): void
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm.ManagerSkeleton */
    vfuncGetVersion(): string
    vfuncHandleOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    vfuncHandleOpenSession(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleRegisterDisplay(invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant): boolean
    vfuncHandleRegisterSession(invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.Manager */
    connect(sigName: "handle-open-reauthentication-channel", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-open-reauthentication-channel", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-open-reauthentication-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-reauthentication-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-reauthentication-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-open-session", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-open-session", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-open-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-open-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-open-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-register-display", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-display", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    on(sigName: "handle-register-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-register-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-register-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-register-session", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-register-session", callback: (($obj: ManagerSkeleton, object: Gio.DBusMethodInvocation, p0: GLib.Variant) => boolean)): number
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant): void
    on(sigName: "handle-register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ManagerSkeleton_ConstructProps)
    _init (config?: ManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface RemoteGreeterProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class RemoteGreeterProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.RemoteGreeter */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gdm.RemoteGreeterProxy */
    vfuncHandleDisconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: RemoteGreeterProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: RemoteGreeterProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: RemoteGreeterProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: RemoteGreeterProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.RemoteGreeter */
    connect(sigName: "handle-disconnect", callback: (($obj: RemoteGreeterProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: RemoteGreeterProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RemoteGreeterProxy_ConstructProps)
    _init (config?: RemoteGreeterProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface RemoteGreeterSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class RemoteGreeterSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.RemoteGreeter */
    callDisconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable?: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm.RemoteGreeterSkeleton */
    vfuncHandleDisconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: RemoteGreeterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: RemoteGreeterSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.RemoteGreeter */
    connect(sigName: "handle-disconnect", callback: (($obj: RemoteGreeterSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-disconnect", callback: (($obj: RemoteGreeterSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RemoteGreeterSkeleton_ConstructProps)
    _init (config?: RemoteGreeterSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface UserVerifierChoiceListProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class UserVerifierChoiceListProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.UserVerifierChoiceList */
    callSelectChoice(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectChoiceFinish(res: Gio.AsyncResult): boolean
    callSelectChoiceSync(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null): boolean
    completeSelectChoice(invocation: Gio.DBusMethodInvocation): void
    emitChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gdm.UserVerifierChoiceListProxy */
    vfuncChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
    vfuncHandleSelectChoice(invocation: Gio.DBusMethodInvocation, argServiceName: string, argChoice: string): boolean
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: UserVerifierChoiceListProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: UserVerifierChoiceListProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: UserVerifierChoiceListProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: UserVerifierChoiceListProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.UserVerifierChoiceList */
    connect(sigName: "choice-query", callback: (($obj: UserVerifierChoiceListProxy, object: string, p0: string, p1: GLib.Variant) => void)): number
    connect_after(sigName: "choice-query", callback: (($obj: UserVerifierChoiceListProxy, object: string, p0: string, p1: GLib.Variant) => void)): number
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant): void
    on(sigName: "choice-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "choice-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "choice-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceListProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceListProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-select-choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserVerifierChoiceListProxy_ConstructProps)
    _init (config?: UserVerifierChoiceListProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface UserVerifierChoiceListSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class UserVerifierChoiceListSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.UserVerifierChoiceList */
    callSelectChoice(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSelectChoiceFinish(res: Gio.AsyncResult): boolean
    callSelectChoiceSync(argServiceName: string, argChoice: string, cancellable?: Gio.Cancellable | null): boolean
    completeSelectChoice(invocation: Gio.DBusMethodInvocation): void
    emitChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm.UserVerifierChoiceListSkeleton */
    vfuncChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
    vfuncHandleSelectChoice(invocation: Gio.DBusMethodInvocation, argServiceName: string, argChoice: string): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: UserVerifierChoiceListSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: UserVerifierChoiceListSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.UserVerifierChoiceList */
    connect(sigName: "choice-query", callback: (($obj: UserVerifierChoiceListSkeleton, object: string, p0: string, p1: GLib.Variant) => void)): number
    connect_after(sigName: "choice-query", callback: (($obj: UserVerifierChoiceListSkeleton, object: string, p0: string, p1: GLib.Variant) => void)): number
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant): void
    on(sigName: "choice-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "choice-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "choice-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceListSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-select-choice", callback: (($obj: UserVerifierChoiceListSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-select-choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-select-choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-select-choice", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserVerifierChoiceListSkeleton_ConstructProps)
    _init (config?: UserVerifierChoiceListSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface UserVerifierProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class UserVerifierProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.UserVerifier */
    callAnswerQuery(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAnswerQueryFinish(res: Gio.AsyncResult): boolean
    callAnswerQuerySync(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerification(argServiceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUser(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationForUserFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUserSync(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerificationSync(argServiceName: string, cancellable?: Gio.Cancellable | null): boolean
    callCancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(cancellable?: Gio.Cancellable | null): boolean
    callEnableExtensions(argExtensions: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnableExtensionsFinish(res: Gio.AsyncResult): boolean
    callEnableExtensionsSync(argExtensions: string, cancellable?: Gio.Cancellable | null): boolean
    completeAnswerQuery(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerification(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerificationForUser(invocation: Gio.DBusMethodInvocation): void
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    completeEnableExtensions(invocation: Gio.DBusMethodInvocation): void
    emitConversationStarted(argServiceName: string): void
    emitConversationStopped(argServiceName: string): void
    emitInfo(argServiceName: string, argInfo: string): void
    emitInfoQuery(argServiceName: string, argQuery: string): void
    emitProblem(argServiceName: string, argProblem: string): void
    emitReauthenticationStarted(argPidOfCaller: number): void
    emitReset(): void
    emitSecretInfoQuery(argServiceName: string, argQuery: string): void
    emitServiceUnavailable(argServiceName: string, argMessage: string): void
    emitVerificationComplete(argServiceName: string): void
    emitVerificationFailed(argServiceName: string): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gdm.UserVerifierProxy */
    vfuncConversationStarted(argServiceName: string): void
    vfuncConversationStopped(argServiceName: string): void
    vfuncHandleAnswerQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argAnswer: string): boolean
    vfuncHandleBeginVerification(invocation: Gio.DBusMethodInvocation, argServiceName: string): boolean
    vfuncHandleBeginVerificationForUser(invocation: Gio.DBusMethodInvocation, argServiceName: string, argUsername: string): boolean
    vfuncHandleCancel(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleEnableExtensions(invocation: Gio.DBusMethodInvocation, argExtensions: string): boolean
    vfuncInfo(argServiceName: string, argInfo: string): void
    vfuncInfoQuery(argServiceName: string, argQuery: string): void
    vfuncProblem(argServiceName: string, argProblem: string): void
    vfuncReauthenticationStarted(argPidOfCaller: number): void
    vfuncReset(): void
    vfuncSecretInfoQuery(argServiceName: string, argQuery: string): void
    vfuncServiceUnavailable(argServiceName: string, argMessage: string): void
    vfuncVerificationComplete(argServiceName: string): void
    vfuncVerificationFailed(argServiceName: string): void
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: UserVerifierProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: UserVerifierProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: UserVerifierProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: UserVerifierProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.UserVerifier */
    connect(sigName: "conversation-started", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    connect_after(sigName: "conversation-started", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    emit(sigName: "conversation-started", object: string): void
    on(sigName: "conversation-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "conversation-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "conversation-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "conversation-stopped", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    connect_after(sigName: "conversation-stopped", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    emit(sigName: "conversation-stopped", object: string): void
    on(sigName: "conversation-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "conversation-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "conversation-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-answer-query", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-answer-query", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-answer-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-answer-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-answer-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-begin-verification", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-begin-verification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-begin-verification-for-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification-for-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification-for-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-cancel", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-enable-extensions", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    connect_after(sigName: "handle-enable-extensions", callback: (($obj: UserVerifierProxy, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[]): void
    on(sigName: "handle-enable-extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-enable-extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-enable-extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "info", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "info", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "info", object: string, p0: string): void
    on(sigName: "info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "info-query", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "info-query", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "info-query", object: string, p0: string): void
    on(sigName: "info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "problem", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "problem", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "problem", object: string, p0: string): void
    on(sigName: "problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reauthentication-started", callback: (($obj: UserVerifierProxy, object: number) => void)): number
    connect_after(sigName: "reauthentication-started", callback: (($obj: UserVerifierProxy, object: number) => void)): number
    emit(sigName: "reauthentication-started", object: number): void
    on(sigName: "reauthentication-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reauthentication-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reauthentication-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reset", callback: (($obj: UserVerifierProxy) => void)): number
    connect_after(sigName: "reset", callback: (($obj: UserVerifierProxy) => void)): number
    emit(sigName: "reset"): void
    on(sigName: "reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "secret-info-query", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "secret-info-query", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "secret-info-query", object: string, p0: string): void
    on(sigName: "secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "service-unavailable", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    connect_after(sigName: "service-unavailable", callback: (($obj: UserVerifierProxy, object: string, p0: string) => void)): number
    emit(sigName: "service-unavailable", object: string, p0: string): void
    on(sigName: "service-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "service-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "service-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "verification-complete", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    connect_after(sigName: "verification-complete", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    emit(sigName: "verification-complete", object: string): void
    on(sigName: "verification-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "verification-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "verification-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "verification-failed", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    connect_after(sigName: "verification-failed", callback: (($obj: UserVerifierProxy, object: string) => void)): number
    emit(sigName: "verification-failed", object: string): void
    on(sigName: "verification-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "verification-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "verification-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserVerifierProxy_ConstructProps)
    _init (config?: UserVerifierProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface UserVerifierSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class UserVerifierSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.UserVerifier */
    callAnswerQuery(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callAnswerQueryFinish(res: Gio.AsyncResult): boolean
    callAnswerQuerySync(argServiceName: string, argAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerification(argServiceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUser(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callBeginVerificationForUserFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUserSync(argServiceName: string, argUsername: string, cancellable?: Gio.Cancellable | null): boolean
    callBeginVerificationSync(argServiceName: string, cancellable?: Gio.Cancellable | null): boolean
    callCancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(cancellable?: Gio.Cancellable | null): boolean
    callEnableExtensions(argExtensions: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callEnableExtensionsFinish(res: Gio.AsyncResult): boolean
    callEnableExtensionsSync(argExtensions: string, cancellable?: Gio.Cancellable | null): boolean
    completeAnswerQuery(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerification(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerificationForUser(invocation: Gio.DBusMethodInvocation): void
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    completeEnableExtensions(invocation: Gio.DBusMethodInvocation): void
    emitConversationStarted(argServiceName: string): void
    emitConversationStopped(argServiceName: string): void
    emitInfo(argServiceName: string, argInfo: string): void
    emitInfoQuery(argServiceName: string, argQuery: string): void
    emitProblem(argServiceName: string, argProblem: string): void
    emitReauthenticationStarted(argPidOfCaller: number): void
    emitReset(): void
    emitSecretInfoQuery(argServiceName: string, argQuery: string): void
    emitServiceUnavailable(argServiceName: string, argMessage: string): void
    emitVerificationComplete(argServiceName: string): void
    emitVerificationFailed(argServiceName: string): void
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm.UserVerifierSkeleton */
    vfuncConversationStarted(argServiceName: string): void
    vfuncConversationStopped(argServiceName: string): void
    vfuncHandleAnswerQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argAnswer: string): boolean
    vfuncHandleBeginVerification(invocation: Gio.DBusMethodInvocation, argServiceName: string): boolean
    vfuncHandleBeginVerificationForUser(invocation: Gio.DBusMethodInvocation, argServiceName: string, argUsername: string): boolean
    vfuncHandleCancel(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleEnableExtensions(invocation: Gio.DBusMethodInvocation, argExtensions: string): boolean
    vfuncInfo(argServiceName: string, argInfo: string): void
    vfuncInfoQuery(argServiceName: string, argQuery: string): void
    vfuncProblem(argServiceName: string, argProblem: string): void
    vfuncReauthenticationStarted(argPidOfCaller: number): void
    vfuncReset(): void
    vfuncSecretInfoQuery(argServiceName: string, argQuery: string): void
    vfuncServiceUnavailable(argServiceName: string, argMessage: string): void
    vfuncVerificationComplete(argServiceName: string): void
    vfuncVerificationFailed(argServiceName: string): void
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: UserVerifierSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: UserVerifierSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.UserVerifier */
    connect(sigName: "conversation-started", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    connect_after(sigName: "conversation-started", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    emit(sigName: "conversation-started", object: string): void
    on(sigName: "conversation-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "conversation-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "conversation-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "conversation-stopped", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    connect_after(sigName: "conversation-stopped", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    emit(sigName: "conversation-stopped", object: string): void
    on(sigName: "conversation-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "conversation-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "conversation-stopped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-answer-query", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-answer-query", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-answer-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-answer-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-answer-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-begin-verification", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string) => boolean)): number
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string): void
    on(sigName: "handle-begin-verification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-begin-verification-for-user", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-begin-verification-for-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification-for-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification-for-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-cancel", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-cancel", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-enable-extensions", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    connect_after(sigName: "handle-enable-extensions", callback: (($obj: UserVerifierSkeleton, object: Gio.DBusMethodInvocation, p0: string[]) => boolean)): number
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[]): void
    on(sigName: "handle-enable-extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-enable-extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-enable-extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "info", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "info", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "info", object: string, p0: string): void
    on(sigName: "info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "info-query", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "info-query", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "info-query", object: string, p0: string): void
    on(sigName: "info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "problem", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "problem", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "problem", object: string, p0: string): void
    on(sigName: "problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reauthentication-started", callback: (($obj: UserVerifierSkeleton, object: number) => void)): number
    connect_after(sigName: "reauthentication-started", callback: (($obj: UserVerifierSkeleton, object: number) => void)): number
    emit(sigName: "reauthentication-started", object: number): void
    on(sigName: "reauthentication-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reauthentication-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reauthentication-started", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "reset", callback: (($obj: UserVerifierSkeleton) => void)): number
    connect_after(sigName: "reset", callback: (($obj: UserVerifierSkeleton) => void)): number
    emit(sigName: "reset"): void
    on(sigName: "reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "secret-info-query", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "secret-info-query", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "secret-info-query", object: string, p0: string): void
    on(sigName: "secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "service-unavailable", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    connect_after(sigName: "service-unavailable", callback: (($obj: UserVerifierSkeleton, object: string, p0: string) => void)): number
    emit(sigName: "service-unavailable", object: string, p0: string): void
    on(sigName: "service-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "service-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "service-unavailable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "verification-complete", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    connect_after(sigName: "verification-complete", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    emit(sigName: "verification-complete", object: string): void
    on(sigName: "verification-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "verification-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "verification-complete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "verification-failed", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    connect_after(sigName: "verification-failed", callback: (($obj: UserVerifierSkeleton, object: string) => void)): number
    emit(sigName: "verification-failed", object: string): void
    on(sigName: "verification-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "verification-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "verification-failed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserVerifierSkeleton_ConstructProps)
    _init (config?: UserVerifierSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export interface WorkerManagerProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
export class WorkerManagerProxy {
    /* Properties of Gio.DBusProxy */
    gDefaultTimeout: number
    gInterfaceInfo: Gio.DBusInterfaceInfo
    readonly gNameOwner: string
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callFinish(res: Gio.AsyncResult): GLib.Variant
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    getCachedProperty(propertyName: string): GLib.Variant | null
    getCachedPropertyNames(): string[] | null
    getConnection(): Gio.DBusConnection
    getDefaultTimeout(): number
    getFlags(): Gio.DBusProxyFlags
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    getInterfaceName(): string
    getName(): string
    getNameOwner(): string | null
    getObjectPath(): string
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    setDefaultTimeout(timeoutMsec: number): void
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.WorkerManager */
    callChoiceListQuery(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callChoiceListQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callChoiceListQuerySync(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callHello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callHelloFinish(res: Gio.AsyncResult): boolean
    callHelloSync(cancellable?: Gio.Cancellable | null): boolean
    callInfo(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoFinish(res: Gio.AsyncResult): boolean
    callInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callInfoSync(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null): boolean
    callProblem(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callProblemFinish(res: Gio.AsyncResult): boolean
    callProblemSync(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null): boolean
    callSecretInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSecretInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callSecretInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    completeChoiceListQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeHello(invocation: Gio.DBusMethodInvocation): void
    completeInfo(invocation: Gio.DBusMethodInvocation): void
    completeInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeProblem(invocation: Gio.DBusMethodInvocation): void
    completeSecretInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    /* Methods of Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    getInfo(): Gio.DBusInterfaceInfo
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gdm.WorkerManagerProxy */
    vfuncHandleChoiceListQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant): boolean
    vfuncHandleHello(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleInfo(invocation: Gio.DBusMethodInvocation, argServiceName: string, argInfo: string): boolean
    vfuncHandleInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string): boolean
    vfuncHandleProblem(invocation: Gio.DBusMethodInvocation, argServiceName: string, argProblem: string): boolean
    vfuncHandleSecretInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string): boolean
    vfuncInitAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfuncInitFinish(res: Gio.AsyncResult): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    vfuncInit(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfuncGPropertiesChanged(changedProperties: GLib.Variant, invalidatedProperties: string): void
    vfuncGSignal(senderName: string, signalName: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: WorkerManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: WorkerManagerProxy, changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    on(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "g-signal", callback: (($obj: WorkerManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: WorkerManagerProxy, senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    on(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.WorkerManager */
    connect(sigName: "handle-choice-list-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-choice-list-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): void
    on(sigName: "handle-choice-list-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-choice-list-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-choice-list-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-hello", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hello", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-hello", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-hello", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-hello", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-info", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-info-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-problem", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-problem", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-secret-info-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-secret-info-query", callback: (($obj: WorkerManagerProxy, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WorkerManagerProxy_ConstructProps)
    _init (config?: WorkerManagerProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface WorkerManagerSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
}
export class WorkerManagerSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    gFlags: Gio.DBusInterfaceSkeletonFlags
    /* Fields of GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, objectPath: string): boolean
    flush(): void
    getConnection(): Gio.DBusConnection | null
    getConnections(): Gio.DBusConnection[]
    getFlags(): Gio.DBusInterfaceSkeletonFlags
    getInfo(): Gio.DBusInterfaceInfo
    getObjectPath(): string | null
    getProperties(): GLib.Variant
    hasConnection(connection: Gio.DBusConnection): boolean
    setFlags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexportFromConnection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: GObject.Closure, transformFrom: GObject.Closure): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: GObject.Value): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: GObject.Value): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: GObject.Closure): void
    /* Methods of Gdm.WorkerManager */
    callChoiceListQuery(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callChoiceListQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callChoiceListQuerySync(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callHello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callHelloFinish(res: Gio.AsyncResult): boolean
    callHelloSync(cancellable?: Gio.Cancellable | null): boolean
    callInfo(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoFinish(res: Gio.AsyncResult): boolean
    callInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    callInfoSync(argServiceName: string, argInfo: string, cancellable?: Gio.Cancellable | null): boolean
    callProblem(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callProblemFinish(res: Gio.AsyncResult): boolean
    callProblemSync(argServiceName: string, argProblem: string, cancellable?: Gio.Cancellable | null): boolean
    callSecretInfoQuery(argServiceName: string, argQuery: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    callSecretInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callSecretInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable?: Gio.Cancellable | null): boolean
    completeChoiceListQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeHello(invocation: Gio.DBusMethodInvocation): void
    completeInfo(invocation: Gio.DBusMethodInvocation): void
    completeInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeProblem(invocation: Gio.DBusMethodInvocation): void
    completeSecretInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    /* Methods of Gio.DBusInterface */
    getObject(): Gio.DBusObject | null
    setObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gdm.WorkerManagerSkeleton */
    vfuncHandleChoiceListQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant): boolean
    vfuncHandleHello(invocation: Gio.DBusMethodInvocation): boolean
    vfuncHandleInfo(invocation: Gio.DBusMethodInvocation, argServiceName: string, argInfo: string): boolean
    vfuncHandleInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string): boolean
    vfuncHandleProblem(invocation: Gio.DBusMethodInvocation, argServiceName: string, argProblem: string): boolean
    vfuncHandleSecretInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string): boolean
    vfuncDupObject(): Gio.DBusObject | null
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncSetObject(object?: Gio.DBusObject | null): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfuncFlush(): void
    vfuncGAuthorizeMethod(invocation: Gio.DBusMethodInvocation): boolean
    vfuncGetInfo(): Gio.DBusInterfaceInfo
    vfuncGetProperties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfuncConstructed(): void
    vfuncDispatchPropertiesChanged(nPspecs: number, pspecs: GObject.ParamSpec): void
    vfuncDispose(): void
    vfuncFinalize(): void
    vfuncGetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfuncNotify(pspec: GObject.ParamSpec): void
    vfuncSetProperty(propertyId: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: WorkerManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: WorkerManagerSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    on(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "g-authorize-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    on(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    /* Signals of Gdm.WorkerManager */
    connect(sigName: "handle-choice-list-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    connect_after(sigName: "handle-choice-list-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant) => boolean)): number
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): void
    on(sigName: "handle-choice-list-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-choice-list-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-choice-list-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-hello", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-hello", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation): void
    on(sigName: "handle-hello", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-hello", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-hello", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-info", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-info-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-info-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-problem", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-problem", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-problem", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "handle-secret-info-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    connect_after(sigName: "handle-secret-info-query", callback: (($obj: WorkerManagerSkeleton, object: Gio.DBusMethodInvocation, p0: string, p1: string) => boolean)): number
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string): void
    on(sigName: "handle-secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "handle-secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "handle-secret-info-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WorkerManagerSkeleton_ConstructProps)
    _init (config?: WorkerManagerSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
    static $gtype: GObject.Type
}
export abstract class ChooserIface {
    /* Fields of Gdm.ChooserIface */
    parentIface: GObject.TypeInterface
    handleDisconnect: (object: Chooser, invocation: Gio.DBusMethodInvocation) => boolean
    handleSelectHostname: (object: Chooser, invocation: Gio.DBusMethodInvocation, argHostname: string) => boolean
    static name: string
}
export abstract class ChooserProxyClass {
    /* Fields of Gdm.ChooserProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ChooserProxyPrivate {
    static name: string
}
export abstract class ChooserSkeletonClass {
    /* Fields of Gdm.ChooserSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ChooserSkeletonPrivate {
    static name: string
}
export abstract class ClientClass {
    /* Fields of Gdm.ClientClass */
    parentClass: GObject.ObjectClass
    static name: string
}
export abstract class GreeterIface {
    /* Fields of Gdm.GreeterIface */
    parentIface: GObject.TypeInterface
    handleBeginAutoLogin: (object: Greeter, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    handleGetTimedLoginDetails: (object: Greeter, invocation: Gio.DBusMethodInvocation) => boolean
    handleSelectSession: (object: Greeter, invocation: Gio.DBusMethodInvocation, argSession: string) => boolean
    handleSelectUser: (object: Greeter, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    handleStartSessionWhenReady: (object: Greeter, invocation: Gio.DBusMethodInvocation, argServiceName: string, argShouldStartSession: boolean) => boolean
    defaultLanguageNameChanged: (object: Greeter, argLanguageName: string) => void
    defaultSessionNameChanged: (object: Greeter, argSessionName: string) => void
    reauthenticated: (object: Greeter, argServiceName: string) => void
    selectedUserChanged: (object: Greeter, argUsername: string) => void
    sessionOpened: (object: Greeter, argServiceName: string) => void
    timedLoginRequested: (object: Greeter, argUsername: string, argDelay: number) => void
    static name: string
}
export abstract class GreeterProxyClass {
    /* Fields of Gdm.GreeterProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class GreeterProxyPrivate {
    static name: string
}
export abstract class GreeterSkeletonClass {
    /* Fields of Gdm.GreeterSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class GreeterSkeletonPrivate {
    static name: string
}
export abstract class ManagerIface {
    /* Fields of Gdm.ManagerIface */
    parentIface: GObject.TypeInterface
    handleOpenReauthenticationChannel: (object: Manager, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    handleOpenSession: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handleRegisterDisplay: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    handleRegisterSession: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    getVersion: (object: Manager) => string
    static name: string
}
export abstract class ManagerProxyClass {
    /* Fields of Gdm.ManagerProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class ManagerProxyPrivate {
    static name: string
}
export abstract class ManagerSkeletonClass {
    /* Fields of Gdm.ManagerSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ManagerSkeletonPrivate {
    static name: string
}
export abstract class RemoteGreeterIface {
    /* Fields of Gdm.RemoteGreeterIface */
    parentIface: GObject.TypeInterface
    handleDisconnect: (object: RemoteGreeter, invocation: Gio.DBusMethodInvocation) => boolean
    static name: string
}
export abstract class RemoteGreeterProxyClass {
    /* Fields of Gdm.RemoteGreeterProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class RemoteGreeterProxyPrivate {
    static name: string
}
export abstract class RemoteGreeterSkeletonClass {
    /* Fields of Gdm.RemoteGreeterSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class RemoteGreeterSkeletonPrivate {
    static name: string
}
export abstract class UserVerifierChoiceListIface {
    /* Fields of Gdm.UserVerifierChoiceListIface */
    parentIface: GObject.TypeInterface
    handleSelectChoice: (object: UserVerifierChoiceList, invocation: Gio.DBusMethodInvocation, argServiceName: string, argChoice: string) => boolean
    choiceQuery: (object: UserVerifierChoiceList, argServiceName: string, argPromptMessage: string, argList: GLib.Variant) => void
    static name: string
}
export abstract class UserVerifierChoiceListProxyClass {
    /* Fields of Gdm.UserVerifierChoiceListProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class UserVerifierChoiceListProxyPrivate {
    static name: string
}
export abstract class UserVerifierChoiceListSkeletonClass {
    /* Fields of Gdm.UserVerifierChoiceListSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class UserVerifierChoiceListSkeletonPrivate {
    static name: string
}
export abstract class UserVerifierIface {
    /* Fields of Gdm.UserVerifierIface */
    parentIface: GObject.TypeInterface
    handleAnswerQuery: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string, argAnswer: string) => boolean
    handleBeginVerification: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string) => boolean
    handleBeginVerificationForUser: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string, argUsername: string) => boolean
    handleCancel: (object: UserVerifier, invocation: Gio.DBusMethodInvocation) => boolean
    handleEnableExtensions: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argExtensions: string) => boolean
    conversationStarted: (object: UserVerifier, argServiceName: string) => void
    conversationStopped: (object: UserVerifier, argServiceName: string) => void
    info: (object: UserVerifier, argServiceName: string, argInfo: string) => void
    infoQuery: (object: UserVerifier, argServiceName: string, argQuery: string) => void
    problem: (object: UserVerifier, argServiceName: string, argProblem: string) => void
    reauthenticationStarted: (object: UserVerifier, argPidOfCaller: number) => void
    reset: (object: UserVerifier) => void
    secretInfoQuery: (object: UserVerifier, argServiceName: string, argQuery: string) => void
    serviceUnavailable: (object: UserVerifier, argServiceName: string, argMessage: string) => void
    verificationComplete: (object: UserVerifier, argServiceName: string) => void
    verificationFailed: (object: UserVerifier, argServiceName: string) => void
    static name: string
}
export abstract class UserVerifierProxyClass {
    /* Fields of Gdm.UserVerifierProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class UserVerifierProxyPrivate {
    static name: string
}
export abstract class UserVerifierSkeletonClass {
    /* Fields of Gdm.UserVerifierSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class UserVerifierSkeletonPrivate {
    static name: string
}
export abstract class WorkerManagerIface {
    /* Fields of Gdm.WorkerManagerIface */
    parentIface: GObject.TypeInterface
    handleChoiceListQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant) => boolean
    handleHello: (object: WorkerManager, invocation: Gio.DBusMethodInvocation) => boolean
    handleInfo: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argInfo: string) => boolean
    handleInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string) => boolean
    handleProblem: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argProblem: string) => boolean
    handleSecretInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string) => boolean
    static name: string
}
export abstract class WorkerManagerProxyClass {
    /* Fields of Gdm.WorkerManagerProxyClass */
    parentClass: Gio.DBusProxyClass
    static name: string
}
export class WorkerManagerProxyPrivate {
    static name: string
}
export abstract class WorkerManagerSkeletonClass {
    /* Fields of Gdm.WorkerManagerSkeletonClass */
    parentClass: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class WorkerManagerSkeletonPrivate {
    static name: string
}
}