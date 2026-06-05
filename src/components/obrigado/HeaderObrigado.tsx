import { MessageCircle } from 'lucide-react';
import { trackEvent } from '@/utils/analytics';

export function HeaderObrigado() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999';
  const whatsappMessage = import.meta.env.VITE_WHATSAPP_MESSAGE || 
    'Olá, tenho uma dúvida sobre a Bastelli Consultoria.';
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSupportClick = () => {
    trackEvent('whatsapp_click', {
      button_location: 'header',
      message_type: 'support'
    });
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-foreground text-lg hidden sm:block">
              Bastelli
            </span>
          </a>

          {/* Suporte */}
          <button
            onClick={handleSupportClick}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Suporte</span>
          </button>
        </div>
      </div>
    </header>
  );
}
