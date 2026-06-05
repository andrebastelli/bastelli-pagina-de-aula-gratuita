import type { Metadata } from "next";
import {
  HeaderSimple,
  ThankYouHero,
  BrunoVideo,
  AccessButtons,
  NextSteps,
  WhatsAppSupport,
  PromiseReinforcement,
  CourseInvitation,
  HelpSection,
  FooterSimple,
} from "@/components/obrigado";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Obrigado | Introdução ao E-commerce Bastelli",
  description:
    "Cadastro confirmado. Acesse sua aula ou material da Bastelli e siga o próximo passo para entender melhor sua operação de e-commerce.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Obrigado | Introdução ao E-commerce Bastelli",
    description:
      "Cadastro confirmado. Acesse sua aula ou material da Bastelli e siga o próximo passo para entender melhor sua operação de e-commerce.",
    type: "website",
    locale: "pt_BR",
    siteName: "Bastelli Consultoria",
  },
  twitter: {
    card: "summary",
    title: "Obrigado | Introdução ao E-commerce Bastelli",
    description:
      "Cadastro confirmado. Acesse sua aula ou material da Bastelli.",
  },
};

export default function ObrigadoPage() {
  const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
  const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {/* Google Analytics 4 */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
              gtag('event', 'page_view', { page_title: 'Obrigado' });
              gtag('event', 'thank_you_view', { event_category: 'conversion' });
              gtag('event', 'lead_confirmed', { event_category: 'conversion' });
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel */}
      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
            fbq('track', 'Lead');
          `}
        </Script>
      )}

      <main className="min-h-screen bg-background">
        <HeaderSimple />
        <ThankYouHero />
        <BrunoVideo />
        <AccessButtons />
        <NextSteps />
        <WhatsAppSupport />
        <PromiseReinforcement />
        <CourseInvitation />
        <HelpSection />
        <FooterSimple />
      </main>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Obrigado | Introdução ao E-commerce Bastelli",
            description:
              "Cadastro confirmado. Acesse sua aula ou material da Bastelli.",
            publisher: {
              "@type": "Organization",
              name: "Bastelli Consultoria",
              logo: {
                "@type": "ImageObject",
                url: "/logo.png",
              },
            },
          }),
        }}
      />
    </>
  );
}
