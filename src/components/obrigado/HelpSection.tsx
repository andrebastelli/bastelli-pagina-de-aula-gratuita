import { Mail, Link2, MessageCircle } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

export function HelpSection() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999';
  const whatsappMessage = import.meta.env.VITE_WHATSAPP_MESSAGE || 
    'Olá, preciso de ajuda com meu acesso ao material da Bastelli.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSupportClick = () => {
    trackEvent('whatsapp_click', {
      button_location: 'help_section',
      message_type: 'help'
    });
    window.open(whatsappUrl, '_blank');
  };

  const helpItems = [
    {
      icon: Mail,
      question: 'Não encontrou o e-mail?',
      answer: 'Verifique sua caixa de spam, promoções ou lixo eletrônico. Se não encontrar em 10 minutos, fale conosco.',
    },
    {
      icon: Link2,
      question: 'O link não abriu?',
      answer: 'Tente abrir em outro navegador ou dispositivo. Se persistir o problema, entre em contato.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
          Precisa de ajuda?
        </h2>

        <div className="space-y-4 mb-6">
          {helpItems.map((item, index) => (
            <div
              key={index}
              className="p-5 bg-background rounded-xl border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suporte WhatsApp */}
        <button
          onClick={handleSupportClick}
          className="w-full flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-medium py-3 rounded-lg transition-colors border border-border"
        >
          <MessageCircle className="w-5 h-5 text-green-600" />
          Falar com suporte pelo WhatsApp
        </button>
      </div>
    </section>
  );
}
