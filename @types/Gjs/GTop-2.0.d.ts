/**
 * GTop-2.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export const AUTH_NAMESZ: number
export const AUTH_TIMEOUT: number
export const CONN_INTERNET: number
export const CONN_IPC: number
export const CONN_UNIX: number
export const DEFAULT_PORT: number
export const DEFAUTH_NAME: string
export const EOT_CHR: number
export const EOT_STR: string
export const FALSE: number
export const GLIBTOP_CMND_CPU: number
export const GLIBTOP_CMND_FSUSAGE: number
export const GLIBTOP_CMND_LOADAVG: number
export const GLIBTOP_CMND_MEM: number
export const GLIBTOP_CMND_MOUNTLIST: number
export const GLIBTOP_CMND_MSG_LIMITS: number
export const GLIBTOP_CMND_NETLIST: number
export const GLIBTOP_CMND_NETLOAD: number
export const GLIBTOP_CMND_PPP: number
export const GLIBTOP_CMND_PROCLIST: number
export const GLIBTOP_CMND_PROC_AFFINITY: number
export const GLIBTOP_CMND_PROC_ARGS: number
export const GLIBTOP_CMND_PROC_IO: number
export const GLIBTOP_CMND_PROC_KERNEL: number
export const GLIBTOP_CMND_PROC_MAP: number
export const GLIBTOP_CMND_PROC_MEM: number
export const GLIBTOP_CMND_PROC_OPEN_FILES: number
export const GLIBTOP_CMND_PROC_SEGMENT: number
export const GLIBTOP_CMND_PROC_SIGNAL: number
export const GLIBTOP_CMND_PROC_STATE: number
export const GLIBTOP_CMND_PROC_TIME: number
export const GLIBTOP_CMND_PROC_UID: number
export const GLIBTOP_CMND_PROC_WD: number
export const GLIBTOP_CMND_QUIT: number
export const GLIBTOP_CMND_SEM_LIMITS: number
export const GLIBTOP_CMND_SHM_LIMITS: number
export const GLIBTOP_CMND_SWAP: number
export const GLIBTOP_CMND_SYSDEPS: number
export const GLIBTOP_CMND_UPTIME: number
export const GLIBTOP_CPU_FREQUENCY: number
export const GLIBTOP_CPU_IDLE: number
export const GLIBTOP_CPU_IOWAIT: number
export const GLIBTOP_CPU_IRQ: number
export const GLIBTOP_CPU_NICE: number
export const GLIBTOP_CPU_SOFTIRQ: number
export const GLIBTOP_CPU_SYS: number
export const GLIBTOP_CPU_TOTAL: number
export const GLIBTOP_CPU_USER: number
export const GLIBTOP_ERROR_METHOD_ABORT: number
export const GLIBTOP_ERROR_METHOD_IGNORE: number
export const GLIBTOP_ERROR_METHOD_WARN: number
export const GLIBTOP_ERROR_METHOD_WARN_ONCE: number
export const GLIBTOP_EXCLUDE_IDLE: number
export const GLIBTOP_EXCLUDE_NOTTY: number
export const GLIBTOP_EXCLUDE_SYSTEM: number
export const GLIBTOP_FEATURES_EXCEPT: number
export const GLIBTOP_FEATURES_NO_SERVER: number
export const GLIBTOP_FILE_ENTRY_FD: number
export const GLIBTOP_FILE_ENTRY_INETSOCKET_DST_HOST: number
export const GLIBTOP_FILE_ENTRY_INETSOCKET_DST_PORT: number
export const GLIBTOP_FILE_ENTRY_NAME: number
export const GLIBTOP_FILE_ENTRY_TYPE: number
export const GLIBTOP_FSUSAGE_BAVAIL: number
export const GLIBTOP_FSUSAGE_BFREE: number
export const GLIBTOP_FSUSAGE_BLOCKS: number
export const GLIBTOP_FSUSAGE_BLOCK_SIZE: number
export const GLIBTOP_FSUSAGE_FFREE: number
export const GLIBTOP_FSUSAGE_FILES: number
export const GLIBTOP_FSUSAGE_READ: number
export const GLIBTOP_FSUSAGE_WRITE: number
export const GLIBTOP_INIT_NO_INIT: number
export const GLIBTOP_INIT_NO_OPEN: number
export const GLIBTOP_IPC_MSGMAP: number
export const GLIBTOP_IPC_MSGMAX: number
export const GLIBTOP_IPC_MSGMNB: number
export const GLIBTOP_IPC_MSGMNI: number
export const GLIBTOP_IPC_MSGPOOL: number
export const GLIBTOP_IPC_MSGSSZ: number
export const GLIBTOP_IPC_MSGTQL: number
export const GLIBTOP_IPC_SEMAEM: number
export const GLIBTOP_IPC_SEMMAP: number
export const GLIBTOP_IPC_SEMMNI: number
export const GLIBTOP_IPC_SEMMNS: number
export const GLIBTOP_IPC_SEMMNU: number
export const GLIBTOP_IPC_SEMMSL: number
export const GLIBTOP_IPC_SEMOPM: number
export const GLIBTOP_IPC_SEMUME: number
export const GLIBTOP_IPC_SEMUSZ: number
export const GLIBTOP_IPC_SEMVMX: number
export const GLIBTOP_IPC_SHMALL: number
export const GLIBTOP_IPC_SHMMAX: number
export const GLIBTOP_IPC_SHMMIN: number
export const GLIBTOP_IPC_SHMMNI: number
export const GLIBTOP_IPC_SHMSEG: number
export const GLIBTOP_KERN_PROC_ALL: number
export const GLIBTOP_KERN_PROC_MASK: number
export const GLIBTOP_KERN_PROC_PGRP: number
export const GLIBTOP_KERN_PROC_PID: number
export const GLIBTOP_KERN_PROC_RUID: number
export const GLIBTOP_KERN_PROC_SESSION: number
export const GLIBTOP_KERN_PROC_TTY: number
export const GLIBTOP_KERN_PROC_UID: number
export const GLIBTOP_LOADAVG_LAST_PID: number
export const GLIBTOP_LOADAVG_LOADAVG: number
export const GLIBTOP_LOADAVG_NR_RUNNING: number
export const GLIBTOP_LOADAVG_NR_TASKS: number
export const GLIBTOP_MAP_ENTRY_DEVICE: number
export const GLIBTOP_MAP_ENTRY_END: number
export const GLIBTOP_MAP_ENTRY_FILENAME: number
export const GLIBTOP_MAP_ENTRY_INODE: number
export const GLIBTOP_MAP_ENTRY_OFFSET: number
export const GLIBTOP_MAP_ENTRY_PERM: number
export const GLIBTOP_MAP_ENTRY_PRIVATE_CLEAN: number
export const GLIBTOP_MAP_ENTRY_PRIVATE_DIRTY: number
export const GLIBTOP_MAP_ENTRY_PSS: number
export const GLIBTOP_MAP_ENTRY_RSS: number
export const GLIBTOP_MAP_ENTRY_SHARED_CLEAN: number
export const GLIBTOP_MAP_ENTRY_SHARED_DIRTY: number
export const GLIBTOP_MAP_ENTRY_SIZE: number
export const GLIBTOP_MAP_ENTRY_START: number
export const GLIBTOP_MAP_ENTRY_SWAP: number
export const GLIBTOP_MAP_FILENAME_LEN: number
export const GLIBTOP_MAP_PERM_EXECUTE: number
export const GLIBTOP_MAP_PERM_PRIVATE: number
export const GLIBTOP_MAP_PERM_READ: number
export const GLIBTOP_MAP_PERM_SHARED: number
export const GLIBTOP_MAP_PERM_WRITE: number
export const GLIBTOP_MAX_CMND: number
export const GLIBTOP_MAX_CPU: number
export const GLIBTOP_MAX_FSUSAGE: number
export const GLIBTOP_MAX_GROUPS: number
export const GLIBTOP_MAX_LOADAVG: number
export const GLIBTOP_MAX_MAP_ENTRY: number
export const GLIBTOP_MAX_MEM: number
export const GLIBTOP_MAX_MOUNTLIST: number
export const GLIBTOP_MAX_MSG_LIMITS: number
export const GLIBTOP_MAX_NETLIST: number
export const GLIBTOP_MAX_NETLOAD: number
export const GLIBTOP_MAX_OPEN_FILE_ENTRY: number
export const GLIBTOP_MAX_PPP: number
export const GLIBTOP_MAX_PROCLIST: number
export const GLIBTOP_MAX_PROC_AFFINITY: number
export const GLIBTOP_MAX_PROC_ARGS: number
export const GLIBTOP_MAX_PROC_IO: number
export const GLIBTOP_MAX_PROC_KERNEL: number
export const GLIBTOP_MAX_PROC_MAP: number
export const GLIBTOP_MAX_PROC_MEM: number
export const GLIBTOP_MAX_PROC_OPEN_FILES: number
export const GLIBTOP_MAX_PROC_SEGMENT: number
export const GLIBTOP_MAX_PROC_SIGNAL: number
export const GLIBTOP_MAX_PROC_STATE: number
export const GLIBTOP_MAX_PROC_TIME: number
export const GLIBTOP_MAX_PROC_UID: number
export const GLIBTOP_MAX_PROC_WD: number
export const GLIBTOP_MAX_SEM_LIMITS: number
export const GLIBTOP_MAX_SHM_LIMITS: number
export const GLIBTOP_MAX_SWAP: number
export const GLIBTOP_MAX_SYSDEPS: number
export const GLIBTOP_MAX_SYSINFO: number
export const GLIBTOP_MAX_UPTIME: number
export const GLIBTOP_MEM_BUFFER: number
export const GLIBTOP_MEM_CACHED: number
export const GLIBTOP_MEM_FREE: number
export const GLIBTOP_MEM_LOCKED: number
export const GLIBTOP_MEM_SHARED: number
export const GLIBTOP_MEM_TOTAL: number
export const GLIBTOP_MEM_USED: number
export const GLIBTOP_MEM_USER: number
export const GLIBTOP_METHOD_DIRECT: number
export const GLIBTOP_METHOD_INET: number
export const GLIBTOP_METHOD_PIPE: number
export const GLIBTOP_METHOD_UNIX: number
export const GLIBTOP_MOUNTENTRY_LEN: number
export const GLIBTOP_MOUNTLIST_NUMBER: number
export const GLIBTOP_MOUNTLIST_SIZE: number
export const GLIBTOP_MOUNTLIST_TOTAL: number
export const GLIBTOP_NCPU: number
export const GLIBTOP_NETLIST_NUMBER: number
export const GLIBTOP_NETLOAD_ADDRESS: number
export const GLIBTOP_NETLOAD_ADDRESS6: number
export const GLIBTOP_NETLOAD_BYTES_IN: number
export const GLIBTOP_NETLOAD_BYTES_OUT: number
export const GLIBTOP_NETLOAD_BYTES_TOTAL: number
export const GLIBTOP_NETLOAD_COLLISIONS: number
export const GLIBTOP_NETLOAD_ERRORS_IN: number
export const GLIBTOP_NETLOAD_ERRORS_OUT: number
export const GLIBTOP_NETLOAD_ERRORS_TOTAL: number
export const GLIBTOP_NETLOAD_HWADDRESS: number
export const GLIBTOP_NETLOAD_IF_FLAGS: number
export const GLIBTOP_NETLOAD_MTU: number
export const GLIBTOP_NETLOAD_PACKETS_IN: number
export const GLIBTOP_NETLOAD_PACKETS_OUT: number
export const GLIBTOP_NETLOAD_PACKETS_TOTAL: number
export const GLIBTOP_NETLOAD_PREFIX6: number
export const GLIBTOP_NETLOAD_SCOPE6: number
export const GLIBTOP_NETLOAD_SUBNET: number
export const GLIBTOP_OPEN_DEST_HOST_LEN: number
export const GLIBTOP_OPEN_FILENAME_LEN: number
export const GLIBTOP_PARAM_COMMAND: number
export const GLIBTOP_PARAM_ERROR_METHOD: number
export const GLIBTOP_PARAM_FEATURES: number
export const GLIBTOP_PARAM_HOST: number
export const GLIBTOP_PARAM_METHOD: number
export const GLIBTOP_PARAM_PORT: number
export const GLIBTOP_PARAM_REQUIRED: number
export const GLIBTOP_PPP_BYTES_IN: number
export const GLIBTOP_PPP_BYTES_OUT: number
export const GLIBTOP_PPP_STATE: number
export const GLIBTOP_PROCESS_DEAD: number
export const GLIBTOP_PROCESS_INTERRUPTIBLE: number
export const GLIBTOP_PROCESS_RUNNING: number
export const GLIBTOP_PROCESS_STOPPED: number
export const GLIBTOP_PROCESS_SWAPPING: number
export const GLIBTOP_PROCESS_UNINTERRUPTIBLE: number
export const GLIBTOP_PROCESS_ZOMBIE: number
export const GLIBTOP_PROCLIST_NUMBER: number
export const GLIBTOP_PROCLIST_SIZE: number
export const GLIBTOP_PROCLIST_TOTAL: number
export const GLIBTOP_PROC_AFFINITY_ALL: number
export const GLIBTOP_PROC_AFFINITY_NUMBER: number
export const GLIBTOP_PROC_ARGS_SIZE: number
export const GLIBTOP_PROC_IO_DISK_RBYTES: number
export const GLIBTOP_PROC_IO_DISK_RCHAR: number
export const GLIBTOP_PROC_IO_DISK_WBYTES: number
export const GLIBTOP_PROC_IO_DISK_WCHAR: number
export const GLIBTOP_PROC_KERNEL_CMAJ_FLT: number
export const GLIBTOP_PROC_KERNEL_CMIN_FLT: number
export const GLIBTOP_PROC_KERNEL_KSTK_EIP: number
export const GLIBTOP_PROC_KERNEL_KSTK_ESP: number
export const GLIBTOP_PROC_KERNEL_K_FLAGS: number
export const GLIBTOP_PROC_KERNEL_MAJ_FLT: number
export const GLIBTOP_PROC_KERNEL_MIN_FLT: number
export const GLIBTOP_PROC_KERNEL_NWCHAN: number
export const GLIBTOP_PROC_KERNEL_WCHAN: number
export const GLIBTOP_PROC_MAP_NUMBER: number
export const GLIBTOP_PROC_MAP_SIZE: number
export const GLIBTOP_PROC_MAP_TOTAL: number
export const GLIBTOP_PROC_MEM_RESIDENT: number
export const GLIBTOP_PROC_MEM_RSS: number
export const GLIBTOP_PROC_MEM_RSS_RLIM: number
export const GLIBTOP_PROC_MEM_SHARE: number
export const GLIBTOP_PROC_MEM_SIZE: number
export const GLIBTOP_PROC_MEM_VSIZE: number
export const GLIBTOP_PROC_OPEN_FILES_NUMBER: number
export const GLIBTOP_PROC_OPEN_FILES_SIZE: number
export const GLIBTOP_PROC_OPEN_FILES_TOTAL: number
export const GLIBTOP_PROC_SEGMENT_DATA_RSS: number
export const GLIBTOP_PROC_SEGMENT_DIRTY_SIZE: number
export const GLIBTOP_PROC_SEGMENT_END_CODE: number
export const GLIBTOP_PROC_SEGMENT_SHLIB_RSS: number
export const GLIBTOP_PROC_SEGMENT_STACK_RSS: number
export const GLIBTOP_PROC_SEGMENT_START_CODE: number
export const GLIBTOP_PROC_SEGMENT_START_STACK: number
export const GLIBTOP_PROC_SEGMENT_TEXT_RSS: number
export const GLIBTOP_PROC_SIGNAL_BLOCKED: number
export const GLIBTOP_PROC_SIGNAL_SIGCATCH: number
export const GLIBTOP_PROC_SIGNAL_SIGIGNORE: number
export const GLIBTOP_PROC_SIGNAL_SIGNAL: number
export const GLIBTOP_PROC_STATE_CMD: number
export const GLIBTOP_PROC_STATE_GID: number
export const GLIBTOP_PROC_STATE_HAS_CPU: number
export const GLIBTOP_PROC_STATE_LAST_PROCESSOR: number
export const GLIBTOP_PROC_STATE_PROCESSOR: number
export const GLIBTOP_PROC_STATE_RGID: number
export const GLIBTOP_PROC_STATE_RUID: number
export const GLIBTOP_PROC_STATE_STATE: number
export const GLIBTOP_PROC_STATE_UID: number
export const GLIBTOP_PROC_TIME_CSTIME: number
export const GLIBTOP_PROC_TIME_CUTIME: number
export const GLIBTOP_PROC_TIME_FREQUENCY: number
export const GLIBTOP_PROC_TIME_IT_REAL_VALUE: number
export const GLIBTOP_PROC_TIME_RTIME: number
export const GLIBTOP_PROC_TIME_START_TIME: number
export const GLIBTOP_PROC_TIME_STIME: number
export const GLIBTOP_PROC_TIME_TIMEOUT: number
export const GLIBTOP_PROC_TIME_UTIME: number
export const GLIBTOP_PROC_TIME_XCPU_STIME: number
export const GLIBTOP_PROC_TIME_XCPU_UTIME: number
export const GLIBTOP_PROC_UID_EGID: number
export const GLIBTOP_PROC_UID_EUID: number
export const GLIBTOP_PROC_UID_FSGID: number
export const GLIBTOP_PROC_UID_FSUID: number
export const GLIBTOP_PROC_UID_GID: number
export const GLIBTOP_PROC_UID_GROUPS: number
export const GLIBTOP_PROC_UID_NGROUPS: number
export const GLIBTOP_PROC_UID_NICE: number
export const GLIBTOP_PROC_UID_PGRP: number
export const GLIBTOP_PROC_UID_PID: number
export const GLIBTOP_PROC_UID_PPID: number
export const GLIBTOP_PROC_UID_PRIORITY: number
export const GLIBTOP_PROC_UID_SESSION: number
export const GLIBTOP_PROC_UID_SGID: number
export const GLIBTOP_PROC_UID_SUID: number
export const GLIBTOP_PROC_UID_TPGID: number
export const GLIBTOP_PROC_UID_TTY: number
export const GLIBTOP_PROC_UID_UID: number
export const GLIBTOP_PROC_WD_EXE: number
export const GLIBTOP_PROC_WD_EXE_LEN: number
export const GLIBTOP_PROC_WD_NUMBER: number
export const GLIBTOP_PROC_WD_ROOT: number
export const GLIBTOP_PROC_WD_ROOT_LEN: number
export const GLIBTOP_SWAP_FREE: number
export const GLIBTOP_SWAP_PAGEIN: number
export const GLIBTOP_SWAP_PAGEOUT: number
export const GLIBTOP_SWAP_TOTAL: number
export const GLIBTOP_SWAP_USED: number
export const GLIBTOP_SYSDEPS_ALL: number
export const GLIBTOP_SYSDEPS_CPU: number
export const GLIBTOP_SYSDEPS_FEATURES: number
export const GLIBTOP_SYSDEPS_FSUSAGE: number
export const GLIBTOP_SYSDEPS_LOADAVG: number
export const GLIBTOP_SYSDEPS_MEM: number
export const GLIBTOP_SYSDEPS_MOUNTLIST: number
export const GLIBTOP_SYSDEPS_MSG_LIMITS: number
export const GLIBTOP_SYSDEPS_NETLIST: number
export const GLIBTOP_SYSDEPS_NETLOAD: number
export const GLIBTOP_SYSDEPS_PPP: number
export const GLIBTOP_SYSDEPS_PROCLIST: number
export const GLIBTOP_SYSDEPS_PROC_AFFINITY: number
export const GLIBTOP_SYSDEPS_PROC_ARGS: number
export const GLIBTOP_SYSDEPS_PROC_IO: number
export const GLIBTOP_SYSDEPS_PROC_KERNEL: number
export const GLIBTOP_SYSDEPS_PROC_MAP: number
export const GLIBTOP_SYSDEPS_PROC_MEM: number
export const GLIBTOP_SYSDEPS_PROC_OPEN_FILES: number
export const GLIBTOP_SYSDEPS_PROC_SEGMENT: number
export const GLIBTOP_SYSDEPS_PROC_SIGNAL: number
export const GLIBTOP_SYSDEPS_PROC_STATE: number
export const GLIBTOP_SYSDEPS_PROC_TIME: number
export const GLIBTOP_SYSDEPS_PROC_UID: number
export const GLIBTOP_SYSDEPS_PROC_WD: number
export const GLIBTOP_SYSDEPS_SEM_LIMITS: number
export const GLIBTOP_SYSDEPS_SHM_LIMITS: number
export const GLIBTOP_SYSDEPS_SWAP: number
export const GLIBTOP_SYSDEPS_UPTIME: number
export const GLIBTOP_SYSINFO_CPUINFO: number
export const GLIBTOP_SYSINFO_NCPU: number
export const GLIBTOP_UPTIME_BOOT_TIME: number
export const GLIBTOP_UPTIME_IDLETIME: number
export const GLIBTOP_UPTIME_UPTIME: number
export const GLIBTOP_XCPU_FLAGS: number
export const GLIBTOP_XCPU_IDLE: number
export const GLIBTOP_XCPU_IOWAIT: number
export const GLIBTOP_XCPU_IRQ: number
export const GLIBTOP_XCPU_NICE: number
export const GLIBTOP_XCPU_SOFTIRQ: number
export const GLIBTOP_XCPU_SYS: number
export const GLIBTOP_XCPU_TOTAL: number
export const GLIBTOP_XCPU_USER: number
export const HOSTNAMSZ: number
export const LIBGTOP_MAJOR_VERSION: number
export const LIBGTOP_MICRO_VERSION: number
export const LIBGTOP_MINOR_VERSION: number
export const MCOOKIE_NAME: string
export const MCOOKIE_SCREEN: string
export const MCOOKIE_X_NAME: string
export const PATCHLEVEL: number
export const REPLYSIZ: number
export const TABLE_SIZE: number
export const TRUE: number
export function glibtop_close(): void
export function glibtop_get_cpu(buf: glibtop_cpu): void
export function glibtop_get_fsusage(buf: glibtop_fsusage, mount_dir: string): void
export function glibtop_get_loadavg(buf: glibtop_loadavg): void
export function glibtop_get_mem(buf: glibtop_mem): void
export function glibtop_get_mountlist(buf: glibtop_mountlist, all_fs: number): glibtop_mountentry[]
export function glibtop_get_msg_limits(buf: glibtop_msg_limits): void
export function glibtop_get_netlist(buf: glibtop_netlist): string[]
export function glibtop_get_netload(buf: glibtop_netload, interface: string): void
export function glibtop_get_ppp(buf: glibtop_ppp, device: number): void
export function glibtop_get_proc_affinity(buf: glibtop_proc_affinity, pid: number): number
export function glibtop_get_proc_args(buf: glibtop_proc_args, pid: number, max_len: number): string
export function glibtop_get_proc_argv(buf: glibtop_proc_args, pid: number, max_len: number): string[]
export function glibtop_get_proc_io(buf: glibtop_proc_io, pid: number): void
export function glibtop_get_proc_kernel(buf: glibtop_proc_kernel, pid: number): void
export function glibtop_get_proc_map(buf: glibtop_proc_map, pid: number): glibtop_map_entry[]
export function glibtop_get_proc_mem(buf: glibtop_proc_mem, pid: number): void
export function glibtop_get_proc_open_files(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry[]
export function glibtop_get_proc_segment(buf: glibtop_proc_segment, pid: number): void
export function glibtop_get_proc_signal(buf: glibtop_proc_signal, pid: number): void
export function glibtop_get_proc_state(buf: glibtop_proc_state, pid: number): void
export function glibtop_get_proc_time(buf: glibtop_proc_time, pid: number): void
export function glibtop_get_proc_uid(buf: glibtop_proc_uid, pid: number): void
export function glibtop_get_proc_wd(buf: glibtop_proc_wd, pid: number): string[]
export function glibtop_get_proclist(buf: glibtop_proclist, which: number, arg: number): number[]
export function glibtop_get_sem_limits(buf: glibtop_sem_limits): void
export function glibtop_get_shm_limits(buf: glibtop_shm_limits): void
export function glibtop_get_swap(buf: glibtop_swap): void
export function glibtop_get_sysdeps(buf: glibtop_sysdeps): void
export function glibtop_get_sysinfo(): glibtop_sysinfo
export function glibtop_get_uptime(buf: glibtop_uptime): void
export function glibtop_init(): glibtop
export function glibtop_init_r(features: number, flags: number): [ /* returnType */ glibtop, /* server_ptr */ glibtop ]
export function glibtop_internet_addr(host: string): number
export function glibtop_make_connection(hostarg: string, portarg: number, s: number): number
export class glibtop {
    /* Fields of GTop.glibtop */
    flags: number
    method: number
    error_method: number
    input: number[]
    output: number[]
    socket: number
    ncpu: number
    real_ncpu: number
    os_version_code: number
    name: string
    server_command: string
    server_host: string
    server_user: string
    server_rsh: string
    features: number
    server_port: number
    sysdeps: glibtop_sysdeps
    required: glibtop_sysdeps
    pid: number
    uid: number
    euid: number
    gid: number
    egid: number
    machine: glibtop_machine
    /* Methods of GTop.glibtop */
    call_l(command: number, send_size: number, send_buf: object | null, recv_size: number, recv_buf?: object | null): object | null
    call_s(command: number, send_size: number, send_buf: object | null, recv_size: number, recv_buf?: object | null): object | null
    close_p(): void
    close_r(): void
    close_s(): void
    get_cpu_l(buf: glibtop_cpu): void
    get_cpu_s(buf: glibtop_cpu): void
    get_fsusage_l(buf: glibtop_fsusage, mount_dir: string): void
    get_fsusage_s(buf: glibtop_fsusage, mount_dir: string): void
    get_loadavg_l(buf: glibtop_loadavg): void
    get_loadavg_s(buf: glibtop_loadavg): void
    get_mem_l(buf: glibtop_mem): void
    get_mem_s(buf: glibtop_mem): void
    get_mountlist_l(all_fs: number): [ /* returnType */ glibtop_mountentry[], /* buf */ glibtop_mountlist ]
    get_mountlist_s(all_fs: number): [ /* returnType */ glibtop_mountentry[], /* buf */ glibtop_mountlist ]
    get_msg_limits_l(buf: glibtop_msg_limits): void
    get_msg_limits_s(buf: glibtop_msg_limits): void
    get_netlist_l(buf: glibtop_netlist): string[]
    get_netlist_s(buf: glibtop_netlist): string[]
    get_netload_l(buf: glibtop_netload, interface: string): void
    get_netload_s(buf: glibtop_netload, interface: string): void
    get_parameter_l(parameter: number, data_ptr: object | null, data_size: number): number
    get_ppp_l(buf: glibtop_ppp, device: number): void
    get_ppp_s(buf: glibtop_ppp, device: number): void
    get_proc_affinity_l(buf: glibtop_proc_affinity, pid: number): number
    get_proc_affinity_s(buf: glibtop_proc_affinity, pid: number): number
    get_proc_args_l(buf: glibtop_proc_args, pid: number, max_len: number): string
    get_proc_args_s(buf: glibtop_proc_args, pid: number, max_len: number): string
    get_proc_io_l(buf: glibtop_proc_io, pid: number): void
    get_proc_io_s(buf: glibtop_proc_io, pid: number): void
    get_proc_kernel_l(buf: glibtop_proc_kernel, pid: number): void
    get_proc_kernel_s(buf: glibtop_proc_kernel, pid: number): void
    get_proc_map_l(pid: number): [ /* returnType */ glibtop_map_entry[], /* buf */ glibtop_proc_map ]
    get_proc_map_s(pid: number): [ /* returnType */ glibtop_map_entry[], /* buf */ glibtop_proc_map ]
    get_proc_mem_l(buf: glibtop_proc_mem, pid: number): void
    get_proc_mem_s(buf: glibtop_proc_mem, pid: number): void
    get_proc_open_files_l(pid: number): [ /* returnType */ glibtop_open_files_entry[], /* buf */ glibtop_proc_open_files ]
    get_proc_open_files_s(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry
    get_proc_segment_l(buf: glibtop_proc_segment, pid: number): void
    get_proc_segment_s(buf: glibtop_proc_segment, pid: number): void
    get_proc_signal_l(buf: glibtop_proc_signal, pid: number): void
    get_proc_signal_s(buf: glibtop_proc_signal, pid: number): void
    get_proc_state_l(buf: glibtop_proc_state, pid: number): void
    get_proc_state_s(buf: glibtop_proc_state, pid: number): void
    get_proc_time_l(buf: glibtop_proc_time, pid: number): void
    get_proc_time_s(buf: glibtop_proc_time, pid: number): void
    get_proc_uid_l(buf: glibtop_proc_uid, pid: number): void
    get_proc_uid_s(buf: glibtop_proc_uid, pid: number): void
    get_proclist_l(buf: glibtop_proclist, which: number, arg: number): number[]
    get_proclist_s(buf: glibtop_proclist, which: number, arg: number): number[]
    get_sem_limits_l(buf: glibtop_sem_limits): void
    get_sem_limits_s(buf: glibtop_sem_limits): void
    get_shm_limits_l(buf: glibtop_shm_limits): void
    get_shm_limits_s(buf: glibtop_shm_limits): void
    get_swap_l(buf: glibtop_swap): void
    get_swap_s(buf: glibtop_swap): void
    get_sysdeps_r(buf: glibtop_sysdeps): void
    get_sysinfo_s(): glibtop_sysinfo
    get_uptime_l(buf: glibtop_uptime): void
    get_uptime_s(buf: glibtop_uptime): void
    init_p(features: number, flags: number): void
    open_l(program_name: string, features: number, flags: number): void
    open_p(program_name: string, features: number, flags: number): void
    open_s(program_name: string, features: number, flags: number): void
    set_parameter_l(parameter: number, data_ptr: object | null, data_size: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static close(): void
    static get_cpu(buf: glibtop_cpu): void
    static get_fsusage(buf: glibtop_fsusage, mount_dir: string): void
    static get_loadavg(buf: glibtop_loadavg): void
    static get_mem(buf: glibtop_mem): void
    static get_mountlist(buf: glibtop_mountlist, all_fs: number): glibtop_mountentry[]
    static get_msg_limits(buf: glibtop_msg_limits): void
    static get_netlist(buf: glibtop_netlist): string[]
    static get_netload(buf: glibtop_netload, interface: string): void
    static get_ppp(buf: glibtop_ppp, device: number): void
    static get_proc_affinity(buf: glibtop_proc_affinity, pid: number): number
    static get_proc_args(buf: glibtop_proc_args, pid: number, max_len: number): string
    static get_proc_argv(buf: glibtop_proc_args, pid: number, max_len: number): string[]
    static get_proc_io(buf: glibtop_proc_io, pid: number): void
    static get_proc_kernel(buf: glibtop_proc_kernel, pid: number): void
    static get_proc_map(buf: glibtop_proc_map, pid: number): glibtop_map_entry[]
    static get_proc_mem(buf: glibtop_proc_mem, pid: number): void
    static get_proc_open_files(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry[]
    static get_proc_segment(buf: glibtop_proc_segment, pid: number): void
    static get_proc_signal(buf: glibtop_proc_signal, pid: number): void
    static get_proc_state(buf: glibtop_proc_state, pid: number): void
    static get_proc_time(buf: glibtop_proc_time, pid: number): void
    static get_proc_uid(buf: glibtop_proc_uid, pid: number): void
    static get_proc_wd(buf: glibtop_proc_wd, pid: number): string[]
    static get_proclist(buf: glibtop_proclist, which: number, arg: number): number[]
    static get_sem_limits(buf: glibtop_sem_limits): void
    static get_shm_limits(buf: glibtop_shm_limits): void
    static get_swap(buf: glibtop_swap): void
    static get_sysdeps(buf: glibtop_sysdeps): void
    static get_sysinfo(): glibtop_sysinfo
    static get_uptime(buf: glibtop_uptime): void
    static init(): glibtop
    static init_r(features: number, flags: number): [ /* returnType */ glibtop, /* server_ptr */ glibtop ]
    static internet_addr(host: string): number
    static make_connection(hostarg: string, portarg: number, s: number): number
}
export class glibtop_command {
    /* Fields of GTop.glibtop_command */
    command: number
    size: number
    data_size: number
    parameter: number[]
    static name: string
}
export class glibtop_cpu {
    /* Fields of GTop.glibtop_cpu */
    flags: number
    total: number
    user: number
    nice: number
    sys: number
    idle: number
    iowait: number
    irq: number
    softirq: number
    frequency: number
    xcpu_total: number[]
    xcpu_user: number[]
    xcpu_nice: number[]
    xcpu_sys: number[]
    xcpu_idle: number[]
    xcpu_iowait: number[]
    xcpu_irq: number[]
    xcpu_softirq: number[]
    xcpu_flags: number
    static name: string
}
export class glibtop_entry {
    /* Fields of GTop.glibtop_entry */
    labels: object[]
    values: GLib.HashTable
    descriptions: GLib.HashTable
    static name: string
}
export class glibtop_fsusage {
    /* Fields of GTop.glibtop_fsusage */
    flags: number
    blocks: number
    bfree: number
    bavail: number
    files: number
    ffree: number
    block_size: number
    read: number
    write: number
    static name: string
}
export class glibtop_loadavg {
    /* Fields of GTop.glibtop_loadavg */
    flags: number
    loadavg: number[]
    nr_running: number
    nr_tasks: number
    last_pid: number
    static name: string
}
export class glibtop_machine {
    static name: string
}
export class glibtop_map_entry {
    /* Fields of GTop.glibtop_map_entry */
    flags: number
    start: number
    end: number
    offset: number
    perm: number
    inode: number
    device: number
    size: number
    rss: number
    shared_clean: number
    shared_dirty: number
    private_clean: number
    private_dirty: number
    pss: number
    swap: number
    filename: number[]
    static name: string
}
export class glibtop_mem {
    /* Fields of GTop.glibtop_mem */
    flags: number
    total: number
    used: number
    free: number
    shared: number
    buffer: number
    cached: number
    user: number
    locked: number
    static name: string
}
export class glibtop_mountentry {
    /* Fields of GTop.glibtop_mountentry */
    dev: number
    devname: number[]
    mountdir: number[]
    type: number[]
    static name: string
}
export class glibtop_mountlist {
    /* Fields of GTop.glibtop_mountlist */
    flags: number
    number: number
    total: number
    size: number
    static name: string
}
export class glibtop_msg_limits {
    /* Fields of GTop.glibtop_msg_limits */
    flags: number
    msgpool: number
    msgmap: number
    msgmax: number
    msgmnb: number
    msgmni: number
    msgssz: number
    msgtql: number
    static name: string
}
export class glibtop_netlist {
    /* Fields of GTop.glibtop_netlist */
    flags: number
    number: number
    static name: string
}
export class glibtop_netload {
    /* Fields of GTop.glibtop_netload */
    flags: number
    if_flags: number
    mtu: number
    subnet: number
    address: number
    packets_in: number
    packets_out: number
    packets_total: number
    bytes_in: number
    bytes_out: number
    bytes_total: number
    errors_in: number
    errors_out: number
    errors_total: number
    collisions: number
    address6: Uint8Array[]
    prefix6: Uint8Array[]
    scope6: number
    hwaddress: Uint8Array[]
    static name: string
}
export class glibtop_open_files_entry {
    /* Fields of GTop.glibtop_open_files_entry */
    fd: number
    type: number
    static name: string
}
export class glibtop_ppp {
    /* Fields of GTop.glibtop_ppp */
    flags: number
    state: number
    bytes_in: number
    bytes_out: number
    static name: string
}
export class glibtop_proc_affinity {
    /* Fields of GTop.glibtop_proc_affinity */
    flags: number
    number: number
    all: boolean
    static name: string
}
export class glibtop_proc_args {
    /* Fields of GTop.glibtop_proc_args */
    flags: number
    size: number
    static name: string
}
export class glibtop_proc_io {
    /* Fields of GTop.glibtop_proc_io */
    flags: number
    disk_rchar: number
    disk_wchar: number
    disk_rbytes: number
    disk_wbytes: number
    reserved: number[]
    static name: string
}
export class glibtop_proc_kernel {
    /* Fields of GTop.glibtop_proc_kernel */
    flags: number
    k_flags: number
    min_flt: number
    maj_flt: number
    cmin_flt: number
    cmaj_flt: number
    kstk_esp: number
    kstk_eip: number
    nwchan: number
    wchan: number[]
    static name: string
}
export class glibtop_proc_map {
    /* Fields of GTop.glibtop_proc_map */
    flags: number
    number: number
    total: number
    size: number
    static name: string
}
export class glibtop_proc_mem {
    /* Fields of GTop.glibtop_proc_mem */
    flags: number
    size: number
    vsize: number
    resident: number
    share: number
    rss: number
    rss_rlim: number
    static name: string
}
export class glibtop_proc_open_files {
    /* Fields of GTop.glibtop_proc_open_files */
    flags: number
    number: number
    total: number
    size: number
    static name: string
}
export class glibtop_proc_segment {
    /* Fields of GTop.glibtop_proc_segment */
    flags: number
    text_rss: number
    shlib_rss: number
    data_rss: number
    stack_rss: number
    dirty_size: number
    start_code: number
    end_code: number
    start_stack: number
    static name: string
}
export class glibtop_proc_signal {
    /* Fields of GTop.glibtop_proc_signal */
    flags: number
    signal: number[]
    blocked: number[]
    sigignore: number[]
    sigcatch: number[]
    static name: string
}
export class glibtop_proc_state {
    /* Fields of GTop.glibtop_proc_state */
    flags: number
    cmd: number[]
    state: number
    uid: number
    gid: number
    ruid: number
    rgid: number
    has_cpu: number
    processor: number
    last_processor: number
    static name: string
}
export class glibtop_proc_time {
    /* Fields of GTop.glibtop_proc_time */
    start_time: number
    rtime: number
    utime: number
    stime: number
    cutime: number
    cstime: number
    timeout: number
    it_real_value: number
    frequency: number
    xcpu_utime: number[]
    xcpu_stime: number[]
    static name: string
}
export class glibtop_proc_uid {
    /* Fields of GTop.glibtop_proc_uid */
    flags: number
    uid: number
    euid: number
    gid: number
    egid: number
    suid: number
    sgid: number
    fsuid: number
    fsgid: number
    pid: number
    ppid: number
    pgrp: number
    session: number
    tty: number
    tpgid: number
    priority: number
    nice: number
    ngroups: number
    groups: number[]
    static name: string
}
export class glibtop_proc_wd {
    /* Fields of GTop.glibtop_proc_wd */
    flags: number
    number: number
    root: number[]
    exe: number[]
    static name: string
}
export class glibtop_proclist {
    /* Fields of GTop.glibtop_proclist */
    flags: number
    number: number
    total: number
    size: number
    static name: string
}
export class glibtop_response {
    /* Fields of GTop.glibtop_response */
    offset: number
    size: number
    data_size: number
    u: glibtop_response_union
    static name: string
}
export class glibtop_sem_limits {
    /* Fields of GTop.glibtop_sem_limits */
    flags: number
    semmap: number
    semmni: number
    semmns: number
    semmnu: number
    semmsl: number
    semopm: number
    semume: number
    semusz: number
    semvmx: number
    semaem: number
    static name: string
}
export class glibtop_shm_limits {
    /* Fields of GTop.glibtop_shm_limits */
    flags: number
    shmmax: number
    shmmin: number
    shmmni: number
    shmseg: number
    shmall: number
    static name: string
}
export class glibtop_signame {
    /* Fields of GTop.glibtop_signame */
    number: number
    name: string
    label: string
    static name: string
}
export class glibtop_swap {
    /* Fields of GTop.glibtop_swap */
    flags: number
    total: number
    used: number
    free: number
    pagein: number
    pageout: number
    static name: string
}
export class glibtop_sysdeps {
    /* Fields of GTop.glibtop_sysdeps */
    flags: number
    features: number
    cpu: number
    mem: number
    swap: number
    uptime: number
    loadavg: number
    shm_limits: number
    msg_limits: number
    sem_limits: number
    proclist: number
    proc_state: number
    proc_uid: number
    proc_mem: number
    proc_time: number
    proc_signal: number
    proc_kernel: number
    proc_segment: number
    proc_args: number
    proc_map: number
    proc_open_files: number
    mountlist: number
    fsusage: number
    netlist: number
    netload: number
    ppp: number
    proc_wd: number
    proc_affinity: number
    proc_io: number
    reserved0: number
    reserved1: number
    reserved2: number
    reserved3: number
    reserved4: number
    reserved5: number
    reserved6: number
    reserved7: number
    static name: string
}
export class glibtop_sysinfo {
    /* Fields of GTop.glibtop_sysinfo */
    flags: number
    ncpu: number
    cpuinfo: glibtop_entry[]
    static name: string
}
export class glibtop_uptime {
    /* Fields of GTop.glibtop_uptime */
    flags: number
    uptime: number
    idletime: number
    boot_time: number
    static name: string
}
export class glibtop_response_union {
    /* Fields of GTop.glibtop_response_union */
    data: glibtop_union
    sysdeps: glibtop_sysdeps
    static name: string
}
export class glibtop_union {
    /* Fields of GTop.glibtop_union */
    cpu: glibtop_cpu
    mem: glibtop_mem
    swap: glibtop_swap
    uptime: glibtop_uptime
    loadavg: glibtop_loadavg
    shm_limits: glibtop_shm_limits
    msg_limits: glibtop_msg_limits
    sem_limits: glibtop_sem_limits
    proclist: glibtop_proclist
    proc_state: glibtop_proc_state
    proc_uid: glibtop_proc_uid
    proc_mem: glibtop_proc_mem
    proc_time: glibtop_proc_time
    proc_signal: glibtop_proc_signal
    proc_kernel: glibtop_proc_kernel
    proc_segment: glibtop_proc_segment
    proc_args: glibtop_proc_args
    proc_map: glibtop_proc_map
    mountlist: glibtop_mountlist
    fsusage: glibtop_fsusage
    netlist: glibtop_netlist
    netload: glibtop_netload
    ppp: glibtop_ppp
    proc_open_files: glibtop_proc_open_files
    proc_wd: glibtop_proc_wd
    proc_affinity: glibtop_proc_affinity
    proc_io: glibtop_proc_io
    static name: string
}