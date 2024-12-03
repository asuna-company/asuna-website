import FooterSection from "../core/sections/FooterSection";
import Navbar from "../core/sections/Navbar";
import ContactContentSection from "./sections/ContactContentSection";

export default function ContactPage() {
  return (
    <div className="flex flex-col max-w-full">
      <Navbar isDark={false} />
      <div className="space-y-0 xs:space-y-8">
        <ContactContentSection/>
        <FooterSection />
      </div>
    </div>
  )
}
