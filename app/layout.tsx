import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteProgress } from "@/components/site/SiteProgress";

export const metadata: Metadata = {
  title: {
    default: "ResurchIn · Learn research by revising the work",
    template: "%s · ResurchIn",
  },
  description:
    "A free six-month research apprenticeship where one project is framed, tested, reviewed, revised and defended.",
  openGraph: {
    title: "ResurchIn · Learn research by revising the work",
    description:
      "One project. Six versions. Close review. A free six-month research apprenticeship.",
    siteName: "ResurchIn",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "ResurchIn research apprenticeship" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResurchIn · Learn research by revising the work",
    description: "One project. Six versions. Close review.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.svg?v=revision-ledger" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f5f1",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/fonts.css" />
        <link rel="stylesheet" href="/assets/revision-ledger.css" />
      </head>
      <body className="rv-page">
        <SiteProgress />
        {children}
      </body>
    </html>
  );
}
