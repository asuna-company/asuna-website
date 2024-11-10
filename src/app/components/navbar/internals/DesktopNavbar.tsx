import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../../buttons/PrimaryButton";

function getLinkClasses() {
  return  "text-gray-700 hover:text-blue-600 hover:underline hover:underline-offset-4 text-p2 font-poppins font-medium ";
}

const NavbarLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className={getLinkClasses()}>
      {children}
    </Link>
  </li>
);

export default function DesktopNavbar() {
  return (
    <div className="bg-[var(--foreground)]">
      <nav className="max-w-[1380px] mx-auto">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
       
          <Link href="/">
            <Image src="svg/logo_with_text.svg" alt="Asuna" width={175} height={45} />
          </Link>

          <ul className="flex space-x-8 items-center pt-1">
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/services">Nossos Serviços</NavbarLink>
            <NavbarLink href="/about">Sobre a Asuna</NavbarLink>
            
            <PrimaryButton
              title="Entre em Contato"
              onClick={() => alert("Button clicked!")}
              paddingY="10px"
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}
