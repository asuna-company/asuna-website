import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from '../../buttons/PrimaryButton';

const getLinkClasses = () => {
  return "text-gray-700 hover:text-blue-600 text-p2 font-poppins font-medium";
};

export default function DesktopNavbar() {
  return (
    <nav className="">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="#about" className="text-gray-700 hover:text-blue-600 font-inter flex items-center">
            <Image src="svg/logo_with_text.svg" alt="Asuna" width={160} height={45} />
          </Link>
        </div>
        <ul className="flex space-x-6 items-center">
          <li><Link href="#home" className={getLinkClasses()}>Home</Link></li>
          <li><Link href="#services" className={getLinkClasses()}>Nossos Serviços</Link></li>
          <li><Link href="#about" className={getLinkClasses()}>Sobre a Asuna</Link></li>
          <PrimaryButton title='Entre em Contato' onClick={() => alert('Button clicked!')} paddingY="10px" />
        </ul>
      </div>
    </nav>
  );
};

