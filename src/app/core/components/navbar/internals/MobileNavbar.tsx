import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-between p-4">
          <Link href="/">
            <Image src="svg/logo_with_text.svg" alt="Asuna" width={130} height={45} />
          </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link href="#home" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-blue-600">
            Serviços
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600">
            Sobre Nós
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;