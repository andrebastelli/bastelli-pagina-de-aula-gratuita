import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Curso de E-commerce | Bastelli Consultoria',
  description: 'Aprenda os fundamentos de uma operação de e-commerce com Bruno Bastelli e pare de vender no achismo.',
  keywords: ['curso de e-commerce', 'introdução ao e-commerce', 'como começar um e-commerce', 'operação de e-commerce', 'e-commerce não vende sozinho', 'loja virtual', 'planejamento de e-commerce'],
  authors: [{ name: 'Bruno Bastelli' }],
  creator: 'Bastelli Consultoria',
  publisher: 'Bastelli Consultoria',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Curso de E-commerce | Bastelli Consultoria',
    description: 'Aprenda os fundamentos de uma operação de e-commerce com Bruno Bastelli e pare de vender no achismo.',
    siteName: 'Bastelli Consultoria',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso de E-commerce | Bastelli Consultoria',
    description: 'Aprenda os fundamentos de uma operação de e-commerce com Bruno Bastelli e pare de vender no achismo.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5f3ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bastelli Consultoria",
              "description": "Consultoria especializada em e-commerce",
              "founder": {
                "@type": "Person",
                "name": "Bruno Bastelli"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Introdução ao E-commerce Bastelli",
              "description": "Curso introdutório sobre fundamentos de e-commerce para lojistas e empreendedores",
              "provider": {
                "@type": "Organization",
                "name": "Bastelli Consultoria"
              },
              "instructor": {
                "@type": "Person",
                "name": "Bruno Bastelli"
              },
              "offers": {
                "@type": "Offer",
                "price": "197",
                "priceCurrency": "BRL"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
