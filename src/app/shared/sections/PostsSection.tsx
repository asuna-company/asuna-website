"use client";


import AbstractSection from "@/app/core/components/sections/AbstractSection";
import BlogCard from "../components/cards/BlogCard";
import TextBadge from "../components/badges/TextBadge";
import SecondaryTitle from "../components/texts/SecondaryTitle";
import { usePosts } from "@/app/blog/infrastructure/hooks/usePostHook";
import { Post } from "@/app/blog/infrastructure/types/PostType";

export default function PostsSection() {
  const { posts, loading } = usePosts();
  const recentPosts = posts.slice(0, 5);

  return (
    <AbstractSection align="items-start" flex="flex-col" paddingVertical="pb-12 xs:py-12">
      <section className="w-full flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-start w-full max-w-[900px]">
          <TextBadge title="Blog" />
          <div className="pt-2">
            <SecondaryTitle firstPart="Publicações Recentes" secondPart="no blog de especialistas da Asuna"/>
            <h3 className="text-p1 text-gray-600 text-start mt-4 opacity-90">
              Veja o que nossos especialistas fizeram para vocês. Conteúdos exclusivos para o seu negócio e dia a dia.
            </h3>
          </div>
        </div>
      </section>

      {loading ? ( <ShimmerPostLoading />) : ( <PostsContainer recentPosts={recentPosts}/>)}
    </AbstractSection>
  );
}

function PostsContainer({recentPosts}: {recentPosts: Post[]}) {
  return (
    <div id="postsContainer"  className="mt-8 w-full grid grid-cols-1 xs:grid-cols-3 gap-6 overflow-hidden">
      {recentPosts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  )
}

function ShimmerPostLoading() {
  return (
    <div className="pt-8 grid grid-cols-1 xs:grid-cols-3 gap-8 w-full">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="w-full rounded-lg shadow-sm animate-pulse flex flex-col"
        >
          <div className="w-full h-60 bg-gray-300 rounded-md mb-4"></div>
          <div className="flex flex-row justify-between">
            <div className="h-4 bg-gray-300 rounded-md w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-md w-/4 mb-2"></div>
          </div>
          <div className="h-4 w-full bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}
