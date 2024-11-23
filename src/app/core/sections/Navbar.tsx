"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../components/buttons/PrimaryButton";

interface NavbarProps {
  isDark: boolean;
}

export default function Navbar({ isDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(isDark);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDarkAndScrolled, setIsDarkAndScrolled] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

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

      const desktopMaxScroll = 50;

      setIsDarkSection(isInDarkSection);
      setHasScrolled(scrollPosition > desktopMaxScroll);
      setIsDarkAndScrolled(isInDarkSection && scrollPosition > desktopMaxScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoImage = isDarkSection ? "svg/logo_with_text_white.svg" : "svg/logo_with_text.svg";
  const defaultBackgrounds = isDarkSection ? "bg-transparent" : 'bg-background';
  const navbarBackground = isDarkAndScrolled ? "bg-[#222328]" : defaultBackgrounds;
  const borderColor = isDarkSection ? "border-b border-neutral-300" : "border-b border-gray-300";
  const borderNavbar = hasScrolled ? borderColor : "border-b border-transparent";
  const navbarClasses = `sticky top-0 z-50 transition-all duration-300 ${borderNavbar} ${navbarBackground}`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-[1440px] w-[90%] mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <Image src={logoImage} alt="Asuna" width={130} height={30} className="md:hidden" />
          <Image src={logoImage} alt="Asuna" width={175} height={45} className="hidden md:block" />
        </Link>

        <ul className="hidden md:flex space-x-8 items-center">
          <NavbarLink href="/" isDark={isDarkSection}>Home</NavbarLink>
          <NavbarLink href="/blog" isDark={isDarkSection}>Nosso Blog</NavbarLink>
          <NavbarLink href="/services" isDark={isDarkSection}>Nossos Serviços</NavbarLink>
          {/* <NavbarLink href="/about" isDark={isDarkSection}>Sobre a Asuna</NavbarLink> */}
          <PrimaryButton
            title="Entre em Contato"
            onClick={() => alert("Button clicked!")}
            paddingY="10px"
          />
        </ul>

        <div className="md:hidden flex items-center space-x-4">
          <PrimaryButton
            title="Contato"
            onClick={() => alert("Button clicked!")}
            paddingY="6px"
          />
          <button className="text-gray-700" onClick={toggleMenu}aria-label="Toggle Menu">
            <MenuIcon isOpen={isOpen} isDark={isDarkSection && hasScrolled} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4">
          {menuItems.map(({ href, label }) => (
            <Link key={href} href={href} className="text-gray-700 hover:text-primary-500 transition-colors"> {label} </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

const NavbarLink = ({ isDark, href, children }: { isDark: boolean; href: string; children: React.ReactNode }) => (
  <li> <Link href={href} className={getLinkClasses(isDark)}> {children} </Link> </li>
);

function getLinkClasses(isDark: boolean) {
  const desactiveTextColor = isDark ? "text-white/50" : "text-gray-700";
  const hoverColor = isDark ? "hover:text-white" : "hover:text-primary-500";

  return `${desactiveTextColor} ${hoverColor} hover:underline hover:underline-offset-4 text-p2 font-poppins font-medium`;
}

const MenuIcon = ({ isOpen, isDark }: { isOpen: boolean; isDark: boolean }) => (
  <svg className="w-6 h-6" fill="none" stroke={isDark ? "white" : "currentColor"} viewBox="0 0 24 24">
    {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
);

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Nosso Blog" },
  { href: "/services", label: "Nossos Serviços" },
  // { href: "/about", label: "Sobre a Asuna" },
];