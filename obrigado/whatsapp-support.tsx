"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function WhatsAppSupport() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"
  const whatsappMessage = encodeURIComponent(
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 
    "Ola, acabei de me cadastrar e quero confirmar meu acesso ao material da Bastelli."
  )

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { location: "support_section" })
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")
  }

  return (
    <section className="py-10 md:py-14 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="h-7 w-7 text-[#25D366]" />
          </div>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
            Tem alguma duvida?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Fale diretamente conosco pelo WhatsApp. Respondemos rapidamente para 
            garantir que voce tenha acesso a tudo.
          </p>

          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Falar pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
