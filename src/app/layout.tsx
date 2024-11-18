import { AppRouterProvider } from "./AppRouter";
import "./globals.css";
import { metadata } from "./core/configs/metadata";
import { reportWebVitals } from "./core/configs/reportWebVitals";
import Script from "next/script";
import Head from "next/head";

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
      <Script
        id="google-tag-manager"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.requestIdleCallback(() => {
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.defer=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NL7JPZNT');
            });
          `,
        }}
      />

      <Script
        id="schema-markup"
        type="application/ld+json"
        strategy="lazyOnload"
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

      <Script
        src="/_next/static/chunks/517-875600e1b331d1a3.js"
        strategy="lazyOnload"
      />

      <body>
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
