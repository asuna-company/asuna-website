import { useState } from 'react';
import Link from 'next/link';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Asuna</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link href="#home" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="#services" className="text-gray-700 hover:text-blue-600">Serviços</Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600">Sobre Nós</Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">Contato</Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
