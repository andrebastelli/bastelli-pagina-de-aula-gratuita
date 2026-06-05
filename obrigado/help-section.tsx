"use client"

import { Mail, Link2, MessageCircle } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

export function HelpSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999"
  
  const handleSupportClick = () => {
    trackEvent("whatsapp_click", { location: "help_section" })
  }

  const helpItems = [
    {
      icon: Mail,
      question: "Nao encontrou o e-mail?",
      answer: "Verifique a caixa de spam ou promocoes. O remetente e Bastelli Consultoria.",
    },
    {
      icon: Link2,
      question: "O link nao abriu?",
      answer: "Tente novamente ou copie o link e cole em uma nova aba do navegador.",
    },
    {
      icon: MessageCircle,
      question: "Precisa de ajuda?",
      answer: "Fale com nosso suporte pelo WhatsApp. Respondemos em ate 24 horas uteis.",
      action: {
        label: "Falar com suporte",
        href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Ola, preciso de ajuda com meu acesso ao material da Bastelli.")}`,
        onClick: handleSupportClick,
      },
    },
  ]

  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
            Ajuda rapida
          </h2>

          <div className="space-y-4">
            {helpItems.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 flex gap-4"
              >
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.answer}
                  </p>
                  {item.action && (
                    <a
                      href={item.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={item.action.onClick}
                      className="inline-block mt-2 text-sm text-accent hover:underline font-medium"
                    >
                      {item.action.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
