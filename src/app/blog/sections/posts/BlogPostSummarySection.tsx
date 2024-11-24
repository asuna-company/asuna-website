"use client";

import AbstractSection from "@/app/core/components/sections/AbstractSection";
import { usePosts } from "../../infrastructure/hooks/usePostHook";
import BlogPostListSection from "./BlogPostListSection";
import Link from "next/link";

export default function BlogPostsSection() {
  const { posts, loading } = usePosts();

  return (
    <AbstractSection align="items-start" flex="flex-col">
      <section className="flex flex-row items-center space-x-8 mb-8">
        <p className="text-[18px] font-semibold">Categorias:</p>
        <FilterTextButton title="Front-end" />
        <FilterTextButton title="Back-end" />
        <FilterTextButton title="Mobile" />
        <FilterTextButton title="Mercado Digital" />
      </section>

      {loading ? <ShimmerPostLoading/> : <div className="pt-8 w-full"> <BlogPostListSection posts={posts} /></div>}
    </AbstractSection>
  );
}

function FilterTextButton({ title }: { title: string }) {
  return (<Link href="/" className="hover:text-primary-500"><p>{title}</p></Link>);
}


function ShimmerPostLoading() {
  return (
    <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="w-full rounded-lg shadow-sm animate-pulse flex flex-col">
          <div className="w-full h-60 bg-gray-300 rounded-md mb-4"></div>
          <div className="flex flex-row justify-between">
            <div className="h-4 bg-gray-300 rounded-md w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-md w-/4 mb-2"></div>
          </div>
          <div className="h-4 w-full bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  )
}
