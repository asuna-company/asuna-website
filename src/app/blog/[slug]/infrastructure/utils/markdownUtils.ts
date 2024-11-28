import { MarkdownHead } from "../types/markdownHead";

const cdnFilesUrl = "https://cdn.asuna.com.br/posts/data/";

export async function getMarkdownContent({ slug }: { slug: string }): Promise<string | null> {
  const mdFileUrl = `${cdnFilesUrl}${slug}.md`;
  const response = await fetch(mdFileUrl);
  
  if (!response.ok) return null;

  return response.text();
}

export function getMarkdownContentFormatted(markdownContent: string): string {
  return markdownContent.replace(/^---[\s\S]*?---/, "").replace(/^# .+$/m, "") .trim();
}

export function getMarkdownHead(markdownContent: string): MarkdownHead {
  const headMatch = markdownContent.match(/^---[\s\S]*?---/);
  if (!headMatch) return {};

  const headContent = headMatch[0].replace(/---/g, '').trim();
  const headLines = headContent.split('\n');

  return headLines.reduce<MarkdownHead>((acc, line) => {
    const [key, ...rest] = line.split(':');
    let value = rest.join(':').trim();

    
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }

    if (key && value) acc[key.trim() as keyof MarkdownHead] = value;

    return acc;
  }, {});
}
