"use client"

import FooterSection from "../core/sections/FooterSection";
import Navbar from "../core/sections/Navbar";

import BlogMainSection from "./sections/BlogMainSection";
import BlogPostsSection from "./sections/posts/BlogPostSummarySection";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isDark={false}  />
      <div className="overflow-x-hidden space-y-8">
        <BlogMainSection/>
        <BlogPostsSection/>
        <FooterSection/>
      </div>
    </div>
  )
}
