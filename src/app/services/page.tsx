"use client";

import dynamic from "next/dynamic";
import Navbar from "../core/components/navbar/Navbar";
import ServicesMethodologySection from "./sections/ServicesMethodologySection";
import ServicesServicesSection from "./sections/ServicesServicesSection";

const FeedbackSectionDynamic = dynamic(() => import('../core/sections/FeedbackSection'), { ssr: false });
const PostsSectionDynamic = dynamic(() => import('../core/sections/PostsSection'), { ssr: false });
const FaqSectionDynamic = dynamic(() => import('../core/sections/FaqSection'), { ssr: false });
const FooterSectionDynamic = dynamic(() => import('../core/sections/FooterSection'), { ssr: false });

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar />
      <div className="space-y-0 xs:space-y-24 overflow-x-hidden">
        <ServicesMethodologySection />
        <ServicesServicesSection />
        <FeedbackSectionDynamic />
        <PostsSectionDynamic />
        <FaqSectionDynamic />
        <FooterSectionDynamic />
      </div>
    </div>
  );
}
