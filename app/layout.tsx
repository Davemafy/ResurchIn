import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteProgress } from "@/components/site/SiteProgress";

export const metadata: Metadata = {
  title: "ResurchIn — Turn curiosity into proof.",
  description: "A free six-month research apprenticeship for emerging researchers.",
  icons: { icon: "/favicon.svg?v=40" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#e8ff31" />
        <link rel="stylesheet" href="/assets/fonts.css" />
        <link rel="stylesheet" href="/assets/awwwards-v1.css" />
      </head>
      <body>
        <SiteProgress />
        {children}
      </body>
    </html>
  );
}
