import { SiteProgress } from "@/components/site/SiteProgress";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ffd800" />
        <meta name="description" content="Move one research question through six practical decisions." />
        <title>Curriculum — ResurchIn</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/assets/fonts.css" />
          <link rel="stylesheet" href="/assets/styles.css" />
          <link rel="stylesheet" href="/assets/brand-v13.css" />
          <link rel="stylesheet" href="/assets/inner-pages-v23.css" />
          <link rel="stylesheet" href="/assets/studio-v2.css" />
        <link rel="icon" href="/favicon.svg?v=33" type="image/svg+xml" />
      </head>
      <body className="inner-page curriculum-page">
        <SiteProgress />
        {children}
      </body>
    </html>
  );
}
