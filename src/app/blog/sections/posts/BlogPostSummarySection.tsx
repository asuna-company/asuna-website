"use client";

import AbstractSection from "@/app/shared/components/sections/AbstractSection";
import BlogPostListSection from "./BlogPostListSection";;

import { usePosts } from "../../infrastructure/hooks/usePostHook";

export default function BlogPostsSection() {
  const { posts, loading } = usePosts();

  return (
    <AbstractSection align="items-start" flex="flex-col" paddingVertical="pb-12 xs:py-12">
      {loading ? ( <ShimmerPostLoading /> ) : ( <div className="pt-8 w-full"> <BlogPostListSection posts={posts} /> </div> )}
    </AbstractSection>
  );
}

function ShimmerPostLoading() {
  return (
    <div className="pt-8 grid grid-cols-1 xs:grid-cols-3 gap-8 w-full">
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
  );
}
