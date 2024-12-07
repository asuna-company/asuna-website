import FooterSection from "../shared/sections/FooterSection";
import Navbar from "../shared/sections/Navbar";
import ContactContentSection from "./sections/ContactContentSection";


export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isDark={false} />
      <div className="space-y-0 xs:space-y-8">
        <ContactContentSection/>
        <FooterSection />
      </div>
    </div>
  )
}


export function generateMetadata() {
  const title = "Contato - Asuna";
  const canonicalUrl = "https://asuna.com.br/contato";
  const description = "Entre em contato com a Asuna e descubra como podemos ajudar sua empresa com soluções de software sob medida.";
  const ogDescription = "Fale conosco! Estamos prontos para atender suas necessidades de software e ajudar sua empresa a crescer.";
  const ogTitle = title;
  const ogUrl = canonicalUrl;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { 
      title: ogTitle, 
      description: ogDescription, 
      url: ogUrl, 
      type: "website", 
      siteName: "Asuna", 
      locale: "pt_BR" 
    },
  };
}

