"use client";

import dynamic from "next/dynamic";
import Navbar from "../../core/sections/Navbar";
import ServicesMethodologySection from "./ServicesMethodologySection";
import ServicesLandSection from "./ServicesLandSection";
import { useRef } from "react";
import useScrollToTop from "../../core/hooks/useScrollTop";

const SolutionsSectionDynamic = dynamic(() => import('./ServicesSolutionsSection'), { ssr: false });
const FeedbackSectionDynamic = dynamic(() => import('../../core/sections/FeedbackSection'), { ssr: false });
const PostsSectionDynamic = dynamic(() => import('../../core/sections/PostsSection'), { ssr: false });
const FaqSectionDynamic = dynamic(() => import('../../core/sections/FaqSection'), { ssr: false });
const FooterSectionDynamic = dynamic(() => import('../../core/sections/FooterSection'), { ssr: false });


export default function ServiceContentPage() {
  const solutionsRef = useRef<HTMLDivElement>(null);

  const scrollToSolutions = () => {
    if (solutionsRef.current) {
      const elementPosition = solutionsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - 60, behavior: 'smooth' });
    }
  };

  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col max-w-full relative">
        <div className="absolute inset-0"><Navbar isDark={true} /></div>
        <div className="relative overflow-x-hidden">
          <ServicesLandSection scrollToSolutions={scrollToSolutions} />        
          <ServicesMethodologySection />
          <div className="space-y-0 xs:space-y-8">
            <div ref={solutionsRef}> <SolutionsSectionDynamic /></div>
            <FeedbackSectionDynamic />
            <PostsSectionDynamic />
            <FaqSectionDynamic />
            <FooterSectionDynamic />
          </div>
        </div>
    </div>
  );
}