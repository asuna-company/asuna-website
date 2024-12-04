import FooterSection from "../core/sections/FooterSection";
import Navbar from "../core/sections/Navbar";
import RecruitmentBanner from "../core/components/banners/RecruitmentBanner";
import ContactContentSection from "./sections/ContactContentSection";


export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col max-w-full">
      <Navbar isDark={false} />
      <div className="space-y-0 xs:space-y-8">
        <ContactContentSection/>
        <FooterSection />
      </div>
    </div>
  )
}
