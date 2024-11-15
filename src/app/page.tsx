"use client";

import Navbar from "./core/components/navbar/Navbar";
import FaqSection from "./core/sections/FaqSection";
import FeedbackSection from "./core/sections/FeedbackSection";
import FooterSection from "./core/sections/FooterSection";
import PostsSection from "./core/sections/PostsSection";
import HomeLandSection from "./home/sections/HomeLandSection";
import HomeResultsSection from "./home/sections/HomeResultsSection";
import HomeServicesSection from "./home/sections/HomeServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar />
      <div className="space-y-0 xs:space-y-24 overflow-x-hidden">
        <HomeLandSection />
        <HomeResultsSection />
        <HomeServicesSection />
        <FeedbackSection />
        <PostsSection />
        <FaqSection />
        <FooterSection />
      </div>
    </div>
  );
}
