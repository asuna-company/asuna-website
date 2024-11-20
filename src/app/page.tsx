"use client";

import dynamic from "next/dynamic";
import HomeLandSection from "./home/sections/HomeLandSection";
import HomeResultsSection from "./home/sections/HomeResultsSection";
import Navbar from "./core/sections/navbar/Navbar";

const ServicesSectionDynamic = dynamic(() => import('./home/sections/HomeServicesSection'), { ssr: false });
const FeedbackSectionDynamic = dynamic(() => import('./core/sections/FeedbackSection'), { ssr: false });
const PostsSectionDynamic = dynamic(() => import('./core/sections/PostsSection'), { ssr: false });
const FaqSectionDynamic = dynamic(() => import('./core/sections/FaqSection'), { ssr: false });
const FooterSectionDynamic = dynamic(() => import('./core/sections/FooterSection'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar startDarkSectionFlag={false}  />
      <div className="space-y-0 xs:space-y-24 overflow-x-hidden">
        <HomeLandSection />
        <div className="pt-0 xs:pt-8"><HomeResultsSection /></div>
        <ServicesSectionDynamic />
        <FeedbackSectionDynamic />
        <PostsSectionDynamic />
        <FaqSectionDynamic />
        <FooterSectionDynamic />
      </div>
    </div>
  );
}