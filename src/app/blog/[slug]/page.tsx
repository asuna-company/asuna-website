import Navbar from "@/app/core/sections/Navbar";
import SlugContentSection from "./sections/SlugContentSection";
import { notFound } from "next/navigation";
import FooterSection from "@/app/core/sections/FooterSection";
import { MarkdownHead } from "./infrastructure/types/markdownHead";
import { getMarkdownContent, getMarkdownContentFormatted, getMarkdownHead } from "./infrastructure/utils/markdownUtils";
import SlugMainSection from "./sections/SlugMainSection";



type Props = { params: Promise<{ slug: string }>; };

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  const markdownContent = await getMarkdownContent({ slug });

  if (!markdownContent) return notFound();

  const formattedMarkdownContent = getMarkdownContentFormatted(markdownContent);
  const headMarkdownContent  = getMarkdownHead(markdownContent);

  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isDark={false} />
      <SlugMainSection markdownHead={headMarkdownContent}/>
      <SlugContentSection params={{ slug, content: formattedMarkdownContent }} />
      <FooterSection/>
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const markdownContent = await getMarkdownContent({ slug });
  const headMarkdownContent = getMarkdownHead(markdownContent ?? '');
  
  const title = headMarkdownContent.title || "Default Title";
  const canonicalUrl = `https://asuna.com.br/blog/${slug}`;
  const description = "Conheça o blog da Asuna e fique por dentro de tudo sobre soluções de software para pequenas e médias empresas.";
  const ogDescription = "Confira nossos artigos sobre soluções de software, tecnologia e muito mais para pequenas e médias empresas.";
  const ogImage = headMarkdownContent.imageUrl || "https://cdn.asuna.com.br/images/metadata-banner.jpg";
  const ogTitle = title;
  const ogUrl = canonicalUrl;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title: ogTitle, description: ogDescription, url: ogUrl, type: "website", siteName: "Asuna", locale: "pt_BR",
      images: [ { url: ogImage, width: 1200, height: 675, alt: ogTitle } ],
      twitter: { card: 'summary_large_image', title: ogTitle, description: ogDescription, images: [ogImage] },
   },
  };
}