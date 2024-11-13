import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import PrimaryButton from "../../buttons/PrimaryButton";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="bg-[var(--foreground)]">
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <Image
            src="svg/logo_with_text.svg"
            alt="Asuna"
            width={130}
            height={45}
            className="cursor-pointer"
          />
        </Link>

        <div className="flex items-center space-x-6">
          <PrimaryButton
            title="Contato"
            onClick={() => alert("Button clicked!")}
            paddingY="4px"
          />
          <button
            onClick={toggleMenu}
            className="text-gray-700 flex items-center"
            aria-label="Toggle Menu">
          <MenuIcon isOpen={isOpen} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center space-y-4 py-4">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
);

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Serviços" },
  { href: "#about", label: "Sobre Nós" },
];
