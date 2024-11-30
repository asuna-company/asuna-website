import ServiceContentPage from "./sections/ServiceContentPage";

export default function Services() {
  return (<ServiceContentPage/> );
}

export function generateMetadata() {
  const title = 'Conheça os Nossos Serviços | Asuna'
  const canonicalUrl = `https://asuna.com.br/servicos`;
  const description = "Conheça os serviços da Asuna e descubra como podemos impulsionar a sua empresa para o próximo nível.";
  const ogDescription = "Conheça os serviços da Asuna e descubra como podemos impulsionar a sua empresa para o próximo nível.";
  const ogTitle = title;
  const ogUrl = canonicalUrl;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title: ogTitle, description: ogDescription, url: ogUrl, type: "website", siteName: "Asuna", locale: "pt_BR" },
  };
}