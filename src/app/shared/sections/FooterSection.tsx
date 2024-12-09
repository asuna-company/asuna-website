"use client"

import Image from 'next/image'
import Link from 'next/link'

import { Phone } from 'lucide-react'
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

          <div className="space-y-4 pl-0 xs:pl-16 laptop:pl-32 pt-8 xs:pt-0">
            <h3 className="text-lg font-semibold">Site</h3>
            <ul className="space-y-2">
              <ItemLink title='Blog' path='/blog'/>
              <ItemLink title='Contato' path='/contato'/>
              <ItemLink title='Serviços' path='/servicos'/>
            </ul>
          </div>

          <div className="space-y-4 pl-0 xs:pl-8 laptop:pl-16 pt-8 xs:pt-0">
            <h3 className="text-lg font-semibold">Redes sociais</h3>
            <ul className="space-y-2">
              <ItemLink title='LinkedIn' path='https://www.linkedin.com/company/asuna' />
              <ItemLink title='Instagram' path='https://www.instagram.com/asuna.brasil'/>
              <ItemLink title='Medium' path='https://medium.com/@asunabrasil'/>
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
                  onClick={() => window.open('https://wa.me/47992847889?text=Olá,%20gostaria%20de%20realizar%20um%20orçamento%20de%20um%20projeto%20com%20vocês!', '_blank')}
                >
                  <Image src={"https://cdn.asuna.com.br/svg/whatsapp.svg"} alt='Símbolo do Whatsapp' width={24} height={24}/>
                  <span>Enviar mensagem</span>
                </button>
              </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-400/10">
          <p className="text-center text-gray-400">© Asuna 2024 - Todos os direitos reservados - CNPJ: 57.841.370/0001-79</p>
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