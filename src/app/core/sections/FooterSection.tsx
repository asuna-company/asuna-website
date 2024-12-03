"use client"

import Image from 'next/image'
import Link from 'next/link'

import { Phone, MessageCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function FooterSection() {
  const router = useRouter();

  return (
    <footer className="bg-[#111] text-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="space-y-8">
            <Link href="/" className="hover:opacity-80">
              <Image src="/svg/logo_with_text_white.svg" alt="Logo da Asuna" width={165} height={45}/>
            </Link>

            <div><label className="text-gray-400">Softwares que aceleram o futuro do seu negócio! #AsunaExperience</label></div>
          </div>

          <div className="space-y-4 pl-0 xs:pl-32 pt-8 xs:pt-0">
            <h3 className="text-lg font-semibold">Mapa do site</h3>
            <ul className="space-y-2">
              <ItemLink title='Blog' path='/blog'/>
              <ItemLink title='Contato' path='/contato'/>
              <ItemLink title='Serviços' path='/servicos'/>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4 pl-0 xs:pl-16 pt-8 xs:pt-0">
            <h3 className="text-lg font-semibold">Redes sociais</h3>
            <ul className="space-y-2">
              <ItemLink title='LinkedIn' path='https://www.linkedin.com/company/asuna' />
              <ItemLink title='Instagram' path='https://www.instagram.com/asuna.brasil'/>
            </ul>
          </div>

          <div className="space-y-4 pt-8 xs:pt-0">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="flex flex-col gap-3">
                <button
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-700 text-gray-100 hover:bg-gray-800 transition-colors"
                  onClick={() =>  router.push('/contato')}
                >
                  <Phone className="w-5 h-5" />
                  <span>Entrar em contato</span>
                </button>
                
                <button
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-500 transition-colors"
                  onClick={() => window.open('https://wa.me/47992847889', '_blank')}
                >
                  <Image src={"https://cdn.asuna.com.br/svg/whatsapp.svg"} alt='Símbolo do Whatsapp' width={24} height={24}/>
                  <span>Enviar mensagem</span>
                </button>
              </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">© Asuna 2024 - Todos os direitos reservados</p>
      </div>
    </footer>
  )
}


function ItemLink({title, path}: {title: string, path: string}) {
  return (
    <li key={title}>
      <Link href={path} className="text-gray-400 hover:text-white transition-colors">
        {title}
      </Link>
    </li>
  )
}




// import Image from "next/image";
// import Link from "next/link";

// interface FooterColumnProps {
//   title: string;
//   links: { label: string; href: string }[];
// }

// const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
//   <div className="flex flex-col items-start text-white  p-6 space-y-4">
//     <p className="font-heading font-bold text-p2 pb-6">{title}</p>
//     {links.map((link, index) => (
//       <Link
//         key={index}
//         href={link.href}
//         className="font-heading text-p2 pb-2 opacity-90"
//       >
//         {link.label}
//       </Link>
//     ))}
//   </div>
// );

// export default function FooterSection() {
//   const footerData = [
//     {
//       title: "OUTROS LINKS",
//       links: [
//         { label: "Home", href: "/" },
//         { label: "Nosso Blog", href: "/blog" },
//         { label: "Nossos Serviços", href: "/servicos" },
//       ],
//     },
//     {
//       title: "POLÍTICAS",
//       links: [
//         { label: "Política de privacidade", href: "/" },
//         { label: "Notas legais", href: "/" },
//         { label: "Termos de uso", href: "/" },
//       ],
//     },
//     {
//       title: "CONTATO",
//       links: [
//         { label: "contato@asuna.com.br", href: "mailto:contato@asuna.com.br" },
//         { label: "+55 47 99284-7889", href: "tel:+5547992847889" },
//       ],
//     },
//   ];

//   return (
//     <footer className="w-full bg-neutral-900 py-12">
//       <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col md:flex-row ${align} justify-between">
//         <div className="flex flex-col items-start text-white py-6 space-y-4">
//           <Link href="/" className="hover:opacity-80">
//             <Image src="/svg/logo_with_text_white.svg" alt="Asuna Logo" width={175} height={45}/>
//           </Link>
//           <h3 className="font-heading text-h3 font-bold text-center pt-6">Tem algum projeto?</h3>
//           <p className="font-heading text-p2 text-center pt-2 opacity-80">Entre em contato conosco </p>
//           <div className="flex space-x-4 pt-8 items-center">
//             <a href="https://www.linkedin.com/company/asuna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
//               <Image src="https://cdn.asuna.com.br/svg/linkedin_solid.svg" alt="LinkedIn" width={24} height={24}/>
//             </a>
//             <a
//               /* TODO: rever icon */
//               href="https://api.whatsapp.com/send?phone=5547992847889"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="WhatsApp"
//               className="hover:opacity-80"
//             >
//               <Image src="https://cdn.asuna.com.br/svg/square_whatsapp_solid.svg" alt="WhatsApp" width={24} height={24}/>
//             </a>
//             <a href="mailto:contato@asuna.com.br" target="_blank" rel="noopener noreferrer" aria-label="Email" className="hover:opacity-80">
//               <Image src="https://cdn.asuna.com.br/svg/envelope_solid.svg" alt="Email" width={24} height={24}/>
//             </a>
//           </div>
//         </div>
//         {footerData.map((column, index) => (
//           <FooterColumn key={index} title={column.title} links={column.links} />
//         ))}
//       </div>
//     </footer>
//   );
// }
