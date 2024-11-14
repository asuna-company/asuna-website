import { useEffect, useState } from "react";
import { useIsMobile } from "../../constants/mediaQueryConstants";
import MobileNavbar from "./internals/MobileNavbar";
import DesktopNavbar from "./internals/DesktopNavbar";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 768 || useIsMobile();
    setIsMobile(isMobileDevice);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    navbar.classList.toggle('border-b', scrollPosition > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar border-gray-300 sticky top-0 z-50">
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
}
