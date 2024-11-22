import Script from "next/script";

export default function SchemaMarkupScript() {
  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Asuna",
            "url": "https://www.asuna.com.br",
            "logo": "https://www.asuna.com.br/images/logo.webp",
            "description": "A Asuna é uma software house especializada em desenvolvimento mobile, consultoria e SaaS para pequenas e médias empresas no Brasil.",
            "foundingDate": "2024-10-01",
            "sameAs": [
              "https://www.linkedin.com/company/asuna"
            ],
            "identifier": {
              "@type": "PropertyValue",
              "propertyID": "BR:CNPJ",
              "value": "57.841.370/0001-79"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+55-47-99284-7889",
                "contactType": "Customer Service",
                "areaServed": "BR",
                "availableLanguage": ["Portuguese"]
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Avenida Paulista, 1106",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "postalCode": "01310-914",
              "addressCountry": "BR"
            },
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Serviços",
                "item": "https://www.asuna.com.br/services"
              },
            ]
          }
        ])
      }}
    />
  );
}
