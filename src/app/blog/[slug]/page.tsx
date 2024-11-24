import Navbar from "@/app/core/sections/Navbar";
import SlugContentSection from "./sections/SlugContentSection";
import { notFound } from "next/navigation";

const cdnFilesUrl = "https://cdn.asuna.com.br/posts/data/";

export default async function SlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const markdownContent = await getMarkdownContent({ slug })

  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isDark={false} />
      <div className="overflow-x-hidden space-y-8">
        <SlugContentSection slug={slug} content={markdownContent} />
      </div>
    </div>
  );
}

async function getMarkdownContent({slug}: {slug: string}): Promise<string> {
  const mdFileUrl = `${cdnFilesUrl}${slug}.md`;
  const response = await fetch(mdFileUrl);
  if (!response.ok) return notFound()

  let markdownContent = await response.text();
  return markdownContent.replace(/^---[\s\S]*?---/, '').trim();
}
