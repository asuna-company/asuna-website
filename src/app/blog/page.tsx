import Navbar from "../core/sections/Navbar";
import BlogMainSection from "./sections/BlogMainSection";

export default async function BlogPage() {

  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isDark={false}  />
      <div className="space-y-0 xs:space-y-20 overflow-x-hidden">
        <BlogMainSection/>
      </div>
    </div>
  )
}
