import AbstractSection from "@/app/core/components/sections/AbstractSection";
import { usePosts } from "../../infrastructure/hooks/usePostHook";
import BlogPostListSection from "./BlogPostListSection";
import Link from "next/link";

export default function BlogPostsSection() {
  const { posts, loading, error } = usePosts()

  return (
    <AbstractSection align="items-start">
      <section className="flex flex-row items-center space-x-8 mb-8">
        <p className="text-[18px] font-semibold">Categorias:</p>
        <FilterTextButton title="Front-end" />
        <FilterTextButton title="Back-end" />
        <FilterTextButton title="Mobile" />
        <FilterTextButton title="Mercado Digital" />
      </section>



      <h1>{error}</h1>


      <BlogPostListSection posts={posts}/>


    </AbstractSection>
  );
}

function FilterTextButton({ title }: { title: string }) {
  return (
    <Link href="/" className="hover:text-primary-500">
      <p>{title}</p>
    </Link>
  );
}

function BlogPostCard({ post }: { post: any }) {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p>{post.summary}</p>
    </div>
  );
}
