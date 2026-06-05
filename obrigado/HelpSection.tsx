"use client";

import { Mail, Link2, MessageCircle } from "lucide-react";

export function HelpSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5500000000000";

  const helpItems = [
    {
      icon: Mail,
      question: "Não encontrou o e-mail?",
      answer:
        "Verifique sua caixa de spam ou lixo eletrônico. Se não encontrar, entre em contato pelo WhatsApp.",
    },
    {
      icon: Link2,
      question: "O link não abriu?",
      answer:
        "Tente copiar e colar o link diretamente no navegador. Se o problema persistir, fale conosco.",
    },
    {
      icon: MessageCircle,
      question: "Tem outra dúvida?",
      answer: "Nossa equipe está pronta para ajudar. Clique no botão abaixo.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Ajuda rápida
          </h2>

          <div className="space-y-4">
            {helpItems.map((item) => (
              <div
                key={item.question}
                className="flex gap-4 p-4 bg-muted/30 rounded-lg"
              >
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0 border border-border">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, preciso de ajuda com meu acesso.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:underline"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com suporte pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
