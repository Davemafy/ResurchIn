import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteProgress } from "@/components/site/SiteProgress";

export const metadata: Metadata = {
  title: "ResurchIn — Find the question. Earn the claim.",
  description: "A free six-month research apprenticeship for emerging researchers.",
  icons: { icon: "/favicon.svg?v=50" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#eeff25" />
        <link rel="stylesheet" href="/assets/fonts.css" />
        <link rel="stylesheet" href="/assets/proof-field.css" />
      </head>
      <body>
        <SiteProgress />
        {children}
      </body>
    </html>
  );
}
