import type { ImgHTMLAttributes } from "react";

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height" | "loading" | "decoding"> & {
  src: string;
  priority?: boolean;
  sizes?: string;
};

const dimensions: Record<string, readonly [number, number]> = {
  "pexels-5940711-w1200.avif": [1200, 800],
  "pexels-5940711-w1600.avif": [1600, 1067],
  "pexels-5940711-w1800.avif": [1800, 1200],
  "pexels-5940715-w1200.avif": [1200, 800],
  "pexels-5940715-w1600.avif": [1600, 1067],
  "pexels-5940715-w1800.avif": [1800, 1200],
  "pexels-5940830-w1200.avif": [1200, 800],
  "pexels-5940830-w1600.avif": [1600, 1067],
  "pexels-5940830-w1800.avif": [1800, 1200],
  "pexels-5940839-w1200.avif": [1200, 800],
  "pexels-5940839-w1600.avif": [1600, 1067],
  "pexels-5940839-w1800.avif": [1800, 1200],
  "pexels-8197503-w1200.avif": [1200, 1800],
  "pexels-8197503-w1600.avif": [1600, 2400],
  "pexels-8197503-w1800.avif": [1800, 2700],
  "pexels-9243385-w1200.avif": [1200, 800],
  "pexels-9243385-w1400.avif": [1400, 933],
  "pexels-9243385-w1600.avif": [1600, 1067],
  "pexels-9243385-w1800.avif": [1800, 1200],
  "process-illustration.webp": [1536, 1024],
  "revision-illustration.webp": [1448, 1086],
};

const variants: Record<string, readonly number[]> = {
  "5940711": [480, 640, 768, 828, 960, 1080, 1200, 1600, 1800],
  "5940715": [480, 640, 768, 828, 960, 1080, 1200, 1600, 1800],
  "5940830": [480, 640, 768, 828, 960, 1080, 1200, 1600, 1800],
  "5940839": [480, 640, 768, 828, 960, 1080, 1200, 1600, 1800],
  "8197503": [480, 640, 768, 828, 960, 1080, 1200, 1600, 1800],
  "9243385": [480, 640, 768, 828, 960, 1080, 1200, 1400, 1600, 1800],
};

function getResponsiveSet(src: string) {
  const match = src.match(/pexels-(\d+)-w\d+\.avif$/);
  if (!match) return undefined;
  const widths = variants[match[1]];
  if (!widths) return undefined;
  return widths.map((width) => `/assets/images/pexels-${match[1]}-w${width}.avif ${width}w`).join(", ");
}

export function ResponsiveImage({ src, alt = "", priority = false, sizes = "(max-width: 720px) 100vw, 50vw", ...props }: ImageProps) {
  const file = src.split("/").pop() ?? "";
  const [width, height] = dimensions[file] ?? [1600, 1067];
  const srcSet = getResponsiveSet(src);

  return (
    <img
      {...props}
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
