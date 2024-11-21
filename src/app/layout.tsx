
import "./globals.css";

import Script from "next/script";

import { AppRouterProvider } from "./core/configs/appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { metadata } from "./core/configs/metadata";
import { reportWebVitals } from "./core/configs/reportWebVitals";

export { metadata };

import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", 
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
      <SchemaMarkupScript/>
      <body>
        <AppRouterProvider>
          {children}
          <SpeedInsights />
        </AppRouterProvider>
      </body>
    </html>
  );
}


function SchemaMarkupScript() {
  return <Script
    id="schema-markup"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Asuna",
        "url": "https://www.asuna.com.br",
        "logo": "https://www.asuna.com.br/images/logo.webp",
        "sameAs": [
          "https://www.linkedin.com/company/asuna",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55-47-99284-7889",
          "contactType": "Customer Service",
          "areaServed": "BR",
          "availableLanguage": ["Portuguese"]
        }
      }),
    }}
  />
}