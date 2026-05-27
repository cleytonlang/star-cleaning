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

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2468216146985041');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2468216146985041&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </body>
    </html>
  );
}
