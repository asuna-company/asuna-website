import axios from "axios";
import { notFound } from "next/navigation";

type Post = {
  slug: string;
  title: string;
  author: string;
  readingTime: string;
  tag: string;
  imageUrl: string;
};

const cdnFilesUrl = "https://cdn.asuna.com.br/posts/files.json";

export default async function PostPage(params: { params: Promise<{ slug: string }> }) {
  const { slug } = await params.params;

  try {
    const { data: posts }: { data: Post[] } = await axios.get(cdnFilesUrl);
    const post = posts.find((p) => p.slug === slug);

    if (!post) notFound();

    return (
      <div className="max-w-4xl mx-auto p-8">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-2">
          Por {post.author} • {post.readingTime} • {post.tag}
        </p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post data:", error);
    notFound();
  }
}
