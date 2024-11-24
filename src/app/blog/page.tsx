import FooterSection from "../core/sections/FooterSection";
import Navbar from "../core/sections/Navbar";

import BlogMainSection from "./sections/BlogMainSection";
import BlogPostsSection from "./sections/posts/BlogPostSummarySection";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isDark={false} />
      <div className="overflow-x-hidden space-y-8">
        <BlogMainSection />
        <BlogPostsSection />
        <FooterSection />
      </div>
    </div>
  );
}

export function generateMetadata() {
  const title = "Conheça o Nosso Blog | Asuna - Soluções de Software Para Pequenas e Médias Empresas";
  const canonicalUrl = "https://asuna.com.br/blog";
  const description = "Conheça o blog da Asuna e fique por dentro de tudo sobre soluções de software para pequenas e médias empresas.";
  const ogDescription = "Confira nossos artigos sobre soluções de software, tecnologia e muito mais para pequenas e médias empresas.";
  const ogTitle = title;
  const ogUrl = canonicalUrl;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title: ogTitle, description: ogDescription, url: ogUrl, type: "website", siteName: "Asuna", locale: "pt_BR" },
  };
}
