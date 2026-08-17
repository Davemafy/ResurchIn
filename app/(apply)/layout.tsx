import { SiteProgress } from "@/components/site/SiteProgress";
import { RouteImmersion } from "@/components/site/RouteImmersion";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ffd800" />
        <meta name="description" content="Research training built around practice, mentorship and real work." />
        <title>Apply | ResurchIn</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/assets/fonts.css" />
          <link rel="stylesheet" href="/assets/styles.css" />
          <link rel="stylesheet" href="/assets/brand-v13.css" />
          <link rel="stylesheet" href="/assets/studio-v1.css" />
          <link rel="stylesheet" href="/assets/responsive-fixes.css" />
          <link rel="stylesheet" href="/assets/immersive-pass.css" />
          <link rel="stylesheet" href="/assets/qa-final.css" />
          <link rel="stylesheet" href="/assets/route-immersion.css" />
        <link rel="icon" href="/favicon.svg?v=33" type="image/svg+xml" />
      </head>
      <body className="inner-page apply-route">
        <SiteProgress />
        <RouteImmersion />
        {children}
      </body>
    </html>
  );
}
