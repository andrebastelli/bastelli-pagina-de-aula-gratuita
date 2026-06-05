import { MessageCircle } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

export function WhatsAppSupport() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999';
  const whatsappMessage = import.meta.env.VITE_WHATSAPP_MESSAGE || 
    'Olá, acabei de me cadastrar e quero confirmar meu acesso ao material da Bastelli.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', {
      button_location: 'support_section',
      message_type: 'support'
    });
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20">
          <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-7 h-7 text-green-600" />
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            Dúvidas? Fale conosco
          </h2>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Se tiver qualquer dúvida sobre seu acesso ou precisar de suporte, 
            estamos prontos para ajudar.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chamar no WhatsApp
          </button>

          <p className="text-xs text-muted-foreground mt-4">
            Resposta em até 24 horas úteis
          </p>
        </div>
      </div>
    </section>
  );
}
