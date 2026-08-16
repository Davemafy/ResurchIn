import { SiteProgress } from "@/components/site/SiteProgress";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#ffd800" />
        <meta name="description" content="A free six-month research apprenticeship for early-career researchers." />
        <title>ResurchIn — Find the question. Earn the claim.</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="stylesheet" href="/assets/fonts.css" />
          <link rel="stylesheet" href="/assets/styles.css" />
          <link rel="stylesheet" href="/assets/brand-v13.css" />
          <link rel="stylesheet" href="/assets/home-v14.css" />
          <link rel="stylesheet" href="/assets/home-v16.css" />
          <link rel="stylesheet" href="/assets/home-v17.css" />
          <link rel="stylesheet" href="/assets/studio-v1.css" />
          <link rel="stylesheet" href="/assets/responsive-fixes.css" />
        <link rel="icon" href="/favicon.svg?v=33" type="image/svg+xml" />
      </head>
      <body className="home-v16 home-v17">
        <SiteProgress />
        {children}
      </body>
    </html>
  );
}
