"use client";

import Navbar from "../core/components/navbar/Navbar";
import FaqSection from "../core/sections/FaqSection";
import FeedbackSection from "../core/sections/FeedbackSection";
import FooterSection from "../core/sections/FooterSection";
import PostsSection from "../core/sections/PostsSection";
import ServicesMethodologySection from "./sections/ServicesMethodologySection";
import ServicesServicesSection from "./sections/ServicesServicesSection";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar />
      <div className="space-y-0 xs:space-y-24 overflow-x-hidden">
        <ServicesMethodologySection />
        <ServicesServicesSection />
        <FeedbackSection />
        <PostsSection />
        <FaqSection />
        <FooterSection />
      </div>
    </div>
  );
}
