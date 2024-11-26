import "./globals.css";
import Script from "next/script";

import { AppRouterProvider } from "./core/configs/appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { metadata } from "./core/configs/metadata";
import { reportWebVitals } from "./core/configs/reportWebVitals";
import SchemaMarkupScript from "./core/scripts/SchemaMarkupScript";
import { inter, poppins } from "./core/constants/fontConstants";

import { GoogleTagManager } from '@next/third-parties/google'

export { metadata };

const GTM_ID = "GTM-NL7JPZNT"; 

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.style} ${inter.style}`}>
      <body>
        <SchemaMarkupScript />
        <AppRouterProvider>
          {children}
          <SpeedInsights />
        </AppRouterProvider>
        <GoogleTagManager gtmId={GTM_ID}/>
      </body>
    </html>
  );
}
