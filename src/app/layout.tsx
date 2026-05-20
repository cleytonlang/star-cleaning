import type { Metadata } from "next";
import Script from "next/script";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Star Cleaning — Professional Cleaning Services in Toronto & GTA",
  description:
    "Toronto's #1 trusted cleaning service. Residential, commercial & deep cleaning in the GTA. Insured, bonded & 100% satisfaction guaranteed. Call (647) 641-1479.",
  authors: [{ name: "Star Cleaning" }],
  openGraph: {
    type: "website",
    title: "Star Cleaning — Professional Cleaning Services in Toronto & GTA",
    description:
      "Toronto's #1 trusted cleaning service. Residential, commercial & deep cleaning in the GTA. Insured, bonded & 100% satisfaction guaranteed. Call (647) 641-1479.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c21fd2f-fb49-44b5-9794-968317822a1e/id-preview-5091aab4--0a635925-0e75-4c54-9a13-08ccbf854f86.lovable.app-1774375904485.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "Star Cleaning — Professional Cleaning Services in Toronto & GTA",
    description:
      "Toronto's #1 trusted cleaning service. Residential, commercial & deep cleaning in the GTA. Insured, bonded & 100% satisfaction guaranteed. Call (647) 641-1479.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0c21fd2f-fb49-44b5-9794-968317822a1e/id-preview-5091aab4--0a635925-0e75-4c54-9a13-08ccbf854f86.lovable.app-1774375904485.png",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/hero-cleaning.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/dm-sans-latin.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/playfair-latin.woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=964597129854082&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            window.fbq = window.fbq || function() {
              (window.fbq.q = window.fbq.q || []).push(arguments);
            };
            window._fbq = window._fbq || window.fbq;
            window.fbq.loaded = true;
            window.fbq.version = '2.0';
            window.fbq('init', '964597129854082');
            window.fbq('track', 'PageView');
          `}
        </Script>
        <Script
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
