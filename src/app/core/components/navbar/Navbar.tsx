import { useIsMobile } from "@/app/core/constants/mediaQueryConstants";
import DesktopNavbar from "./internals/DesktopNavbar";
import MobileNavbar from "./internals/MobileNavbar";

export default function Navbar() {
  let hasScrolled = false;

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    hasScrolled = scrollPosition > 100;
    navbar.classList.toggle('border-b', hasScrolled);
  };

  if (typeof window !== 'undefined') {
    window.onscroll = handleScroll;
  }

  return (
    <div className="navbar border-gray-300 sticky top-0 z-20">
      {useIsMobile() ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
}
