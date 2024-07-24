import Cairo from 'cairo';

const imageSurface = new Cairo.ImageSurface(Cairo.Format.ARGB32, 10, 10);

const pngSurface = Cairo.ImageSurface.createFromPNG('filename.png');

const pdfSurface = new Cairo.PDFSurface('filename.pdf', 32, 32);

const psSurface = new Cairo.PSSurface('filename.ps', 32, 32);

const svgSurface = new Cairo.SVGSurface('filename.svg', 32, 32);