import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#263f46" />
        <meta name="description" content="A free six-month research apprenticeship built around one project, repeated review and visible revision." />
        <title>ResurchIn · Bring the question you keep reopening</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/fonts.css" />
        <link rel="stylesheet" href="/assets/human-studio.css" />
        <link rel="icon" href="/favicon-human.svg" type="image/svg+xml" />
      </head>
      <body className="human-studio-body">{children}</body>
    </html>
  );
}
