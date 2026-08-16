import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteProgress } from "@/components/site/SiteProgress";

export const metadata: Metadata = {
  title: {
    default: "ResurchIn · Research is what changes between V01 and V06",
    template: "%s · ResurchIn",
  },
  description:
    "A free six-month research apprenticeship where one project is framed, tested, reviewed, revised and defended.",
  openGraph: {
    title: "ResurchIn · Research is what changes between V01 and V06",
    description:
      "One project. Six months. Close review. Make the change between V01 and V06 visible.",
    siteName: "ResurchIn",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "ResurchIn research apprenticeship" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResurchIn · Research is what changes between V01 and V06",
    description: "One project. Six months. Close review. Visible revision.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.svg?v=v24-versioned" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0a",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/fonts.css" />
        <link rel="stylesheet" href="/assets/v24-versioned.css" />
      </head>
      <body className="rv-page">
        <SiteProgress />
        {children}
      </body>
    </html>
  );
}
