import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

interface DesktopNavbarProps {
  isDark: boolean
}

function getLinkClasses(isDark: boolean) {
  const desactiveTextColor = isDark ? 'text-white/50' :'text-gray-700'
  const hoverColor = isDark ? 'hover:text-white': 'hover:text-primary-500'

  return `${desactiveTextColor} ${hoverColor} hover:underline hover:underline-offset-4 text-p2 font-poppinsfont-medium`
}

const NavbarLink = ({isDark, href, children}: { isDark: boolean; href: string; children: React.ReactNode}) => (
  <li>
    <Link href={href} className={getLinkClasses(isDark)}>
      {children}
    </Link>
  </li>
);

export default function DesktopNavbar({isDark}: DesktopNavbarProps) {
  const logoImage = isDark ? "svg/logo_with_text_white.svg" : "svg/logo_with_text.svg"

  return (
    <div className="bg-[var(--foreground)]">
      <nav className="max-w-[1440px] w-[90%] mx-auto flex flex-col md:flex-row ${align} justify-between">
        <div className="container mx-auto  py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src={logoImage}
              alt="Asuna"
              width={175}
              height={45}
            />
          </Link>

          <ul className="flex space-x-8 items-center pt-1">
            <NavbarLink href="/" isDark={isDark}>Home</NavbarLink>
            <NavbarLink href="/blog" isDark={isDark}>Nosso Blog</NavbarLink>
            <NavbarLink href="/services" isDark={isDark}>Nossos Serviços</NavbarLink>
            <NavbarLink href="/about" isDark={isDark}>Sobre a Asuna</NavbarLink>

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
