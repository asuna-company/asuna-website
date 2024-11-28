import Image from "next/image";
import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col items-start text-white  p-6 space-y-4">
    <p className="font-heading font-bold text-p2 pb-6">{title}</p>
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        className="font-heading text-p2 pb-2 opacity-90"
      >
        {link.label}
      </Link>
    ))}
  </div>
);

export default function FooterSection() {
  const footerData = [
    {
      title: "POLÍTICAS",
      links: [
        { label: "Política de privacidade", href: "/" },
        { label: "Notas legais", href: "/" },
        { label: "Termos de uso", href: "/" },
      ],
    },
    {
      title: "OUTROS LINKS",
      links: [
        { label: "Criação de sites", href: "/" },
        { label: "Criação de aplicativos", href: "/" },
      ],
    },
    {
      title: "CONTATO",
      links: [
        { label: "contato@asuna.com.br", href: "mailto:contato@asuna.com.br" },
        { label: "+55 47 99284-7889", href: "tel:+5547992847889" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-neutral-900 py-12">
      <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col md:flex-row ${align} justify-between">
        <div className="flex flex-col items-start text-white py-6 space-y-4">
          <Link href="/" className="hover:opacity-80">
            <Image src="/svg/logo_with_text_white.svg" alt="Asuna Logo" width={175} height={45}/>
          </Link>
          <h3 className="font-heading text-h3 font-bold text-center pt-6">Tem algum projeto?</h3>
          <p className="font-heading text-p2 text-center pt-2 opacity-80">Entre em contato conosco </p>
          <div className="flex space-x-4 pt-8 items-center">
            <a href="https://www.linkedin.com/company/asuna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
              <Image src="/svg/linkedin_solid.svg" alt="LinkedIn" width={24} height={24}/>
            </a>
            <a
              /* TODO: rever icon */
              href="https://api.whatsapp.com/send?phone=5547992847889"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:opacity-80"
            >
              <Image src="/svg/square_whatsapp_solid.svg" alt="WhatsApp" width={24} height={24}/>
            </a>
            <a href="mailto:contato@asuna.com.br" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:opacity-80">
              <Image src="/svg/envelope_solid.svg" alt="Email" width={24} height={24}/>
            </a>
          </div>
        </div>
        {footerData.map((column, index) => (
          <FooterColumn key={index} title={column.title} links={column.links} />
        ))}
      </div>
    </footer>
  );
}
