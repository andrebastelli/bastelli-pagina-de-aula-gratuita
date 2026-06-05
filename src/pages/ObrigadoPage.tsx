import { useEffect } from 'react';
import { Hero } from '@/components/obrigado/Hero';
import { Resumo } from '@/components/obrigado/Resumo';
import { Virada } from '@/components/obrigado/Virada';
import { Apresentacao } from '@/components/obrigado/Apresentacao';
import { Aprendizado } from '@/components/obrigado/Aprendizado';
import { Bonus } from '@/components/obrigado/Bonus';
import { Oferta } from '@/components/obrigado/Oferta';
import { FAQ } from '@/components/obrigado/FAQ';
import { CTAFinal } from '@/components/obrigado/CTAFinal';
import { FooterObrigado } from '@/components/obrigado/FooterObrigado';
import { trackEvent } from '@/utils/analytics';

export function ObrigadoPage() {
  useEffect(() => {
    // Track page view
    trackEvent('thank_you_view', {
      page: 'obrigado'
    });
    trackEvent('lead_confirmed', {
      conversion_type: 'registration'
    });

    // Update document title
    document.title = 'Obrigado | Introdução ao E-commerce Bastelli';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Cadastro confirmado. Acesse sua aula ou material da Bastelli e siga o próximo passo para entender melhor sua operação de e-commerce.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Resumo />
        <Virada />
        <Apresentacao />
        <Aprendizado />
        <Bonus />
        <Oferta />
        <FAQ />
        <CTAFinal />
      </main>
      <FooterObrigado />
    </div>
  );
}
