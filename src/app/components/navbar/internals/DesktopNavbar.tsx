import Link from 'next/link';

const DesktopNavbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">Asuna</Link>
        </div>
        <ul className="flex space-x-6">
          <li><Link href="#home" className="text-gray-700 hover:text-blue-600">Home</Link></li>
          <li><Link href="#services" className="text-gray-700 hover:text-blue-600">Serviços</Link></li>
          <li><Link href="#about" className="text-gray-700 hover:text-blue-600">Sobre Nós</Link></li>
          <li><Link href="#contact" className="text-gray-700 hover:text-blue-600">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
