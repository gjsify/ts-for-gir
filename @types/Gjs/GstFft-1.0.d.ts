/**
 * GstFft-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export enum FFTWindow {
    RECTANGULAR,
    HAMMING,
    HANN,
    BARTLETT,
    BLACKMAN,
}
export function fft_next_fast_length(n: number): number
export class FFTF32 {
    /* Methods of GstFft.FFTF32 */
    fft(timedata: number, freqdata: FFTF32Complex): void
    free(): void
    inverse_fft(freqdata: FFTF32Complex, timedata: number): void
    window(timedata: number, window: FFTWindow): void
    static name: string
}
export class FFTF32Complex {
    /* Fields of GstFft.FFTF32Complex */
    r: number
    i: number
    static name: string
}
export class FFTF64 {
    /* Methods of GstFft.FFTF64 */
    fft(timedata: number, freqdata: FFTF64Complex): void
    free(): void
    inverse_fft(freqdata: FFTF64Complex, timedata: number): void
    window(timedata: number, window: FFTWindow): void
    static name: string
}
export class FFTF64Complex {
    /* Fields of GstFft.FFTF64Complex */
    r: number
    i: number
    static name: string
}
export class FFTS16 {
    /* Methods of GstFft.FFTS16 */
    fft(timedata: number, freqdata: FFTS16Complex): void
    free(): void
    inverse_fft(freqdata: FFTS16Complex, timedata: number): void
    window(timedata: number, window: FFTWindow): void
    static name: string
}
export class FFTS16Complex {
    /* Fields of GstFft.FFTS16Complex */
    r: number
    i: number
    static name: string
}
export class FFTS32 {
    /* Methods of GstFft.FFTS32 */
    fft(timedata: number, freqdata: FFTS32Complex): void
    free(): void
    inverse_fft(freqdata: FFTS32Complex, timedata: number): void
    window(timedata: number, window: FFTWindow): void
    static name: string
}
export class FFTS32Complex {
    /* Fields of GstFft.FFTS32Complex */
    r: number
    i: number
    static name: string
}