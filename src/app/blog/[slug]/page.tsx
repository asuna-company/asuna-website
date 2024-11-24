import Navbar from "@/app/core/sections/Navbar";
import SlugContentSection from "./sections/SlugContentSection";
import { notFound } from "next/navigation";
import FooterSection from "@/app/core/sections/FooterSection";

const cdnFilesUrl = "https://cdn.asuna.com.br/posts/data/";

type Props = { params: Promise<{ slug: string }>; };

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;

  const markdownContent = await getMarkdownContent({ slug });

  if (!markdownContent) return notFound();

  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isDark={false} />
      <SlugContentSection params={{ slug, content: markdownContent }} />
      <FooterSection/>
    </div>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const markdownContent = await getMarkdownContent({ slug });
  const markdownTitle = markdownContent?.match(/^# (.+)$/m)?.[1] || "Default Title";

  const pageTitle = `${markdownTitle} | Asuna - Soluções de Software Para Pequenas e Médias Empresas`
  const canonicalUrl = `https://asuna.com.br/blog/${slug}`;

  return {title: pageTitle, alternates: { canonical: canonicalUrl } };
}

async function getMarkdownContent({ slug }: { slug: string }): Promise<string | null> {
  const mdFileUrl = `${cdnFilesUrl}${slug}.md`;
  const response = await fetch(mdFileUrl);
  
  if (!response.ok) return null;

  const markdownContent = await response.text();
  return markdownContent.replace(/^---[\s\S]*?---/, "").trim();
}
