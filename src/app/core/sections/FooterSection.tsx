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
        { label: "Política de privacidade", href: "/politicas/privacidade" },
        { label: "Notas legais", href: "/politicas/notas-legais" },
        { label: "Termos de uso", href: "/politicas/termos-de-uso" },
      ],
    },
    {
      title: "OUTROS LINKS",
      links: [
        { label: "Criação de sites", href: "/servicos/criacao-de-sites" },
        {
          label: "Criação de aplicativos",
          href: "/servicos/criacao-de-aplicativos",
        },
      ],
    },
    {
      title: "CONTATO",
      links: [
        { label: "contato@asuna.com.br", href: "mailto:contato@asuna.com.br" },
        { label: "+55 47 99999-9999", href: "tel:+5547999999999" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-neutral-900 py-12">
      <div className="max-w-[1380px] w-full mx-auto flex flex-wrap justify-between">
        <div className="flex flex-col items-start text-white p-6 space-y-4">
          <Link href="/" className="hover:opacity-80">
            <Image
              src="/svg/logo_with_text_white.svg"
              alt="Asuna Logo"
              width={175}
              height={45}
            />
          </Link>
          <h3 className="font-heading text-h3 font-bold text-center pt-6">
            Tem algum projeto?
          </h3>
          <p className="font-heading text-p2 text-center pt-2 opacity-80">
            Entre em contato conosco
          </p>
          <div className="flex space-x-4 pt-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-80"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
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
