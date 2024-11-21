
import "./globals.css";

import { AppRouterProvider } from "./core/configs/appRouter";
import { SpeedInsights } from "@vercel/speed-insights/next"

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