import { useEffect, useState, lazy } from "react";

const MobileNavbar = lazy(() => import("./internals/MobileNavbar"));
const DesktopNavbar = lazy(() => import("./internals/DesktopNavbar"));

interface NavbarProps {
  bgColor?: string;
  startDarkSectionFlag: boolean;
}

function Navbar({ bgColor = "bg-background", startDarkSectionFlag }: NavbarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(startDarkSectionFlag);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDarkAndScrolled, setIsDarkAndScrolled] = useState(false);

  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 768;
    setIsMobile(isMobileDevice);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-bg='dark']");
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      let isInDarkSection = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.scrollHeight;
        const top = rect.top + window.scrollY;
        const bottom = top + sectionHeight;

        if (scrollPosition >= top && scrollPosition < bottom - 60) {
          isInDarkSection = true;
        }
      });

      const desktopMaxScroll = isMobile ? 40 : 100

      setIsDarkSection(isInDarkSection);
      setHasScrolled(scrollPosition > desktopMaxScroll);
      setIsDarkAndScrolled(isInDarkSection && scrollPosition > desktopMaxScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const defaultBackgrounds = isDarkSection ? "bg-transparent" : bgColor;
  const navbarBackground = isDarkAndScrolled ? "bg-[#222328]" : defaultBackgrounds

  const borderColor = isDarkSection ? "border-b border-neutral-300" : "border-b border-gray-300"
  const borderNavbar = hasScrolled ? borderColor : "border-b border-transparent";

  return (
    <div className={`navbar sticky top-0 z-50 transition-all duration-200 ${borderNavbar} ${navbarBackground}`}>
      {isMobile ? <MobileNavbar isDark={isDarkSection} /> : <DesktopNavbar isDark={isDarkSection} />}
    </div>
  );
}

export default Navbar;
