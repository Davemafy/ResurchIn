import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteProgress } from "@/components/site/SiteProgress";
import { ExperienceLayer } from "@/components/site/ExperienceLayer";

export const metadata: Metadata = {
  metadataBase: new URL("https://resurchln.vercel.app"),
  title: {
    default: "ResurchIn — Find the question. Earn the claim.",
    template: "%s | ResurchIn",
  },
  description: "A free six-month research apprenticeship for emerging researchers.",
  icons: { icon: "/favicon.svg?v=60" },
  openGraph: {
    type: "website",
    siteName: "ResurchIn",
    title: "ResurchIn — Find the question. Earn the claim.",
    description: "Practice research by doing research: frame the question, test the evidence, revise the claim.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "ResurchIn research apprenticeship" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResurchIn — Find the question. Earn the claim.",
    description: "A free six-month research apprenticeship for emerging researchers.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#efff23",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/fonts.css" />
        <link rel="stylesheet" href="/assets/proof-field.css" />
      </head>
      <body>
        <SiteProgress />
        <ExperienceLayer />
        {children}
      </body>
    </html>
  );
}
