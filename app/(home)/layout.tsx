import type { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#141411" />
        <meta name="description" content="A free six-month research apprenticeship built around one question, repeated revision and mentor review." />
        <title>ResurchIn · Research apprenticeship</title>
        <link rel="stylesheet" href="/assets/fonts.css" />
        <link rel="stylesheet" href="/assets/landing-deliberate.css" />
        <link rel="icon" href="/favicon.svg?v=34" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
