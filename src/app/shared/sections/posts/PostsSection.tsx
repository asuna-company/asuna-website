"use client";

import AbstractSection from "@/app/shared/components/sections/AbstractSection";

import { useEffect, useRef, useState } from "react";
import { usePosts } from "@/app/blog/infrastructure/hooks/usePostHook";
import { useIsExtraMobile, useIsMedium } from "../../constants/mediaQueryConstants";
import { Post } from "@/app/blog/infrastructure/types/PostType";

import TextBadge from "../../components/badges/TextBadge";
import SecondaryTitle from "../../components/texts/SecondaryTitle";
import BlogCard from "../../components/cards/BlogCard";
import ScrollButtonComponent from "./internals/ScrollButtonComponent";

export default function PostsSection() {
  const isExtraMobile = useIsExtraMobile();

  const { posts, loading } = usePosts();
  const recentPosts = posts.slice(0, 2);

  return (
    <AbstractSection align="items-start" flex="flex-col" paddingVertical="pb-12 xs:py-12">
      <section className="w-full flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-start w-full">
          <TextBadge title="Blog" />
          <div className="pt-2">
            <SecondaryTitle firstPart="Publicações Recentes" secondPart={isExtraMobile ? "no blog da Asuna" : "no blog de especialistas da Asuna"}/>
            <h3 className="text-p1 text-gray-600 text-start mt-4 opacity-90">
              Veja o que nossos especialistas fizeram para vocês. Conteúdos exclusivos para o seu negócio e dia a dia.
            </h3>
          </div>
        </div>
      </section>

      {loading ? (<ShimmerPostLoading />) : (<PostsContainer recentPosts={recentPosts} />)}
    </AbstractSection>
  );
}

function PostsContainer({ recentPosts }: { recentPosts: Post[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const isMedium = useIsMedium();

  const checkScrollPosition = () => {
    const container = containerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(container.scrollWidth > container.offsetWidth + container.scrollLeft);
  };

  useEffect(() => {
    checkScrollPosition();

    const container = containerRef.current;
    if (container) container.addEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) containerRef.current.scrollBy({ left: -380, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (containerRef.current) containerRef.current.scrollBy({ left: 380, behavior: "smooth" });
  };

  return (
    <div className="relative w-full pt-8">
      {isMedium && canScrollLeft && (<ScrollButtonComponent type="left" onClick={scrollLeft} />)}

      <div ref={containerRef} id="postsContainer" className="flex flex-row gap-6 overflow-x-auto snap-mandatory scroll-smooth scrollbar-hide w-full">
        {recentPosts.map((post, index) => (
          <div key={index} className="w-fit snap-start"> <BlogCard post={post} /> </div>
        ))}
      </div>

      {isMedium && canScrollRight && (<ScrollButtonComponent type="right" onClick={scrollRight} />)}
    </div>
  );
}

function ShimmerPostLoading() {
  return (
    <div className="pt-8 w-full flex gap-8 overflow-x-auto xs:scroll-smooth">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="flex-shrink-0 min-w-[350px] max-w-[95%] xs:max-w-[300px] w-full rounded-lg shadow-sm animate-pulse flex flex-col"
        >
          <div className="w-full h-60 bg-gray-300 rounded-md mb-4"></div>
          <div className="flex flex-row justify-between">
            <div className="h-4 bg-gray-300 rounded-md w-1/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/4 mb-2"></div>
          </div>
          <div className="h-4 w-full bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}
