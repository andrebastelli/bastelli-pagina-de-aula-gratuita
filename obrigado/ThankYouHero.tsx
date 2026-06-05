"use client";

import { CheckCircle } from "lucide-react";

export function ThankYouHero() {
  const handleAccessClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "access_click", {
        event_category: "engagement",
        event_label: "hero_access_button",
      });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Cadastro confirmado. Agora siga o próximo passo.
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Você está mais perto de entender por que e-commerce não vende sozinho 
            e como enxergar sua operação com mais clareza.
          </p>

          <a
            href={process.env.NEXT_PUBLIC_LESSON_URL || "#"}
            onClick={handleAccessClick}
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-lg font-semibold text-lg hover:bg-foreground/90 transition-colors"
          >
            Acessar Aula Agora
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
