"use client";

import dynamic from "next/dynamic";
import Navbar from "../core/components/navbar/Navbar";
import ServicesMethodologySection from "./sections/ServicesMethodologySection";
import ServicesLandSection from "./sections/ServicesLandSection";

const SolutionsSectionDynamic = dynamic(() => import('./sections/ServicesSolutionsSection'), { ssr: false });
const FeedbackSectionDynamic = dynamic(() => import('../core/sections/FeedbackSection'), { ssr: false });
const PostsSectionDynamic = dynamic(() => import('../core/sections/PostsSection'), { ssr: false });
const FaqSectionDynamic = dynamic(() => import('../core/sections/FaqSection'), { ssr: false });
const FooterSectionDynamic = dynamic(() => import('../core/sections/FooterSection'), { ssr: false });

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col max-w-full relative">
      {/* Navbar fixa no topo */}
      <div className="absolute inset-0">
        <Navbar startDarkSectionFlag={true} />
      </div>

      <div className="relative overflow-x-hidden">
        <ServicesLandSection />
        <ServicesMethodologySection />
        <SolutionsSectionDynamic />
        <FeedbackSectionDynamic />
        <PostsSectionDynamic />
        <FaqSectionDynamic />
        <FooterSectionDynamic />
      </div>
    </div>
  );
}
