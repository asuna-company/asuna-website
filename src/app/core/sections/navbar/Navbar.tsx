import { useLayoutEffect, useState, lazy } from 'react';
import useMobile from '../../hooks/useMobile';


const MobileNavbar = lazy(() => import('./internals/MobileNavbar'));
const DesktopNavbar = lazy(() => import('./internals/DesktopNavbar'));

interface NavbarProps {
  bgColor?: string;
  isMobile: boolean;
  startDarkSectionFlag?: boolean;
}

function Navbar({ bgColor = 'bg-background', startDarkSectionFlag = false, isMobile }: NavbarProps) {
  const [isDarkSection, setIsDarkSection] = useState(startDarkSectionFlag);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDarkAndScrolled, setIsDarkAndScrolled] = useState(false);

  useLayoutEffect(() => {
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

      const desktopMaxScroll = isMobile ? 40 : 100;

      setIsDarkSection(isInDarkSection);
      setHasScrolled(scrollPosition > desktopMaxScroll);
      setIsDarkAndScrolled(isInDarkSection && scrollPosition > desktopMaxScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const defaultBackgrounds = isDarkSection ? 'bg-transparent' : bgColor;
  const navbarBackground = isDarkAndScrolled ? 'bg-[#222328]' : defaultBackgrounds;

  const borderColor = isDarkSection ? 'border-b border-neutral-300' : 'border-b border-gray-300';
  const borderNavbar = hasScrolled ? borderColor : 'border-b border-transparent';

  return (
    <div className={`navbar sticky top-0 z-50 transition-all duration-200 ${borderNavbar} ${navbarBackground}`}>
      {isMobile ? <MobileNavbar isDark={isDarkSection} /> : <DesktopNavbar isDark={isDarkSection} />}
    </div>
  );
}

export default Navbar;
