import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asuna.com.br'),
  title: 'Asuna | Software House',
  description: 'A Asuna é uma software house B2B focada em pequenas e médias empresas, conduzindo todo o ciclo de desenvolvimento da seu negócio.',
  openGraph: {
    title: 'Asuna | Software House',
    description: 'A Asuna é uma software house B2B focada em pequenas e médias empresas, conduzindo todo o ciclo de desenvolvimento da seu negócio.',
    url: 'https://www.asuna.com.br/',
    siteName: 'Asuna',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://www.asuna.com.br/images/metadata-banner.jpg',
        width: 1200,
        height: 675,
        alt: 'Asuna | Software House',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asuna | Software House',
    description: 'A Asuna é uma software house B2B focada em pequenas e médias empresas.',
    images: ['https://www.asuna.com.br/images/metadata-banner.jpg'],
  },
  alternates: {
    canonical: 'https://www.asuna.com.br/',
  },
  icons: {

    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};
