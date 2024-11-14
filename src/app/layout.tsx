import { AppRouterProvider } from "./AppRouter";
import "./globals.css";
import { metadata } from "./core/configs/metadata";
import { reportWebVitals } from "./core/configs/reportWebVitals";
import Script from "next/script";

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
    <html lang="pt-BR">
      <head>
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          defer
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NL7JPZNT');
          `}
        </Script>
      </head>
      <body className="bg-[var(--foreground)]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NL7JPZNT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AppRouterProvider>{children}</AppRouterProvider>
      </body>
    </html>
  );
}
