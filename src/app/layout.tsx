import "./globals.css";
import Script from "next/script";

import { AppRouterProvider } from "./core/configs/appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { metadata } from "./core/configs/metadata";
import { reportWebVitals } from "./core/configs/reportWebVitals";
import SchemaMarkupScript from "./core/scripts/SchemaMarkupScript";
import { inter, poppins } from "./core/constants/fontConstants";

export { metadata };

if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    reportWebVitals((metric) => {
      if (window.gtag) {
        window.gtag("event", metric.name, {
          event_category: "Web Vitals",
          value: metric.value,
          event_label: metric.id,
          non_interaction: true,
        });
      }
    });
  });
}

const GTM_ID = "GTM-NL7JPZNT"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.style} ${inter.style}`}>
      <body>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <SchemaMarkupScript />
        <AppRouterProvider>
          {children}
          <SpeedInsights />
        </AppRouterProvider>
      </body>
    </html>
  );
}
