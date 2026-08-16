import type { Metadata } from "next";
import Script from "next/script";
import "./base.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://resurchin.vercel.app"),
  title: "ResurchIn",
  description: "A free six-month research apprenticeship for early-career researchers.",
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffd800",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/fonts/jizBRFtNs2ka5fXjeivQ4LroWlx-6zUTjg.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/jizHRFtNs2ka5fXjeivQ4LroWlx-6zAjjH7M.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/aFTU7PB1QTsUX8KYthqQBA.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/assets/site-v2.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
