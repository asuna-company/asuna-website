"use client";

import Navbar from "./core/components/navbar/Navbar";
import FaqSection from "./core/sections/FaqSection";
import FeedbackSection from "./core/sections/FeedbackSection";
import HomeLandSection from "./pages/home/sections/HomeLandSection";
import HomeResultsSection from "./pages/home/sections/HomeResultsSection";
import HomeServicesSection from "./pages/home/sections/HomeServicesSection";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pb-16 space-y-32">
        <HomeLandSection />
        <HomeResultsSection />
        <HomeServicesSection />
        <FeedbackSection />
        <FaqSection />
      </div>
    </div>
  );
}
