import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asuna.com.br'),
  title: 'Asuna | Soluções de Software Para Pequenas e Médias Empresas',
  description: 'A Asuna é uma software house B2B focada em pequenas e médias empresas, conduzindo todo o ciclo de desenvolvimento.',
  keywords: [
    "asuna", "assuna", "azuna", "asunna", "asuma", "asum", 
    "asuna software house", "assuna software house", "azuna software house", 
    "software house asuna", "software house", "softwer house", "sofware house", 
    "sotware house", "sotwer house", "software haus", "sorfware house",
    "asina", "asuna site", "asuna desenvolvimento", "assuna desenvolvimento", 
    "azuna desenvolvimento", "asuna web", "asuna app", "asuna aplicativos", 
    "asun", "asuma tecnologia", "asuna consultoria", "assuna consultoria", 
    "assuma consultoria", "azuna consultoria", "asana", "asana software"
  ],
  openGraph: {
    title: 'Asuna | Software House',
    description: 'A Asuna é uma software house B2B focada em pequenas e médias empresas, conduzindo todo o ciclo de desenvolvimento.',
    url: 'https://www.asuna.com.br/',
    siteName: 'Asuna',
    locale: 'pt_BR',
    type: 'website',
    countryName: 'Brazil',
    phoneNumbers: ['+5547992847889'],
    images: [
      {
        url: 'https://cdn.asuna.com.br/images/metadata-banner.jpg',
        width: 1200,
        height: 675,
        alt: 'Asuna - Software House',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asuna | Software House',
    description: 'A Asuna é uma software house B2B focada em pequenas e médias empresas.',
    images: ['https://cdn.asuna.com.br/images/metadata-banner.jpg'],
  },
  alternates: {
    canonical: 'https://www.asuna.com.br/',
  },
  manifest: '/favicon/site.webmanifest',
  icons: {
    shortcut: '/favicon/favicon.ico',
    apple: '/images/logo.webp',
  }, 
};
