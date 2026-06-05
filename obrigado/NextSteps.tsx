"use client";

import { Mail, Bookmark, Clock, MessageCircle } from "lucide-react";

export function NextSteps() {
  const steps = [
    {
      icon: Mail,
      title: "Verifique seu e-mail",
      description:
        "Enviamos os dados de acesso para o e-mail que você cadastrou. Confira também a caixa de spam.",
    },
    {
      icon: Bookmark,
      title: "Salve esta página",
      description:
        "Adicione aos favoritos para acessar facilmente quando precisar.",
    },
    {
      icon: Clock,
      title: "Reserve seu tempo",
      description:
        "Separe 30 minutos sem interrupções para absorver o conteúdo com atenção.",
    },
    {
      icon: MessageCircle,
      title: "Entre no WhatsApp",
      description:
        "Tire dúvidas e receba atualizações diretamente pelo nosso canal de suporte.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Próximos passos
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Siga estas orientações para aproveitar ao máximo seu acesso.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 p-4 bg-background rounded-lg border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-muted-foreground">
                      Passo {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
