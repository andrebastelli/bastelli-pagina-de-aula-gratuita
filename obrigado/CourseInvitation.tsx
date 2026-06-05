"use client";

import { BookOpen, FileText, CheckCircle } from "lucide-react";

export function CourseInvitation() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "offer_click", {
        event_category: "conversion",
        event_label: "course_invitation",
      });
    }
  };

  const includes = [
    "Curso Introdução ao E-commerce Bastelli",
    "E-book Roda do E-commerce",
    "Manual de Boas Práticas para E-commerce",
    "Acesso vitalício ao conteúdo",
  ];

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
              Quer ir além?
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Conheça o Curso Completo
            </h2>
            <p className="text-muted-foreground">
              Aprofunde seu conhecimento e construa uma operação de e-commerce 
              com fundamentos sólidos.
            </p>
          </div>

          <div className="bg-background rounded-xl border border-border p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-lg">
                  Introdução ao E-commerce Bastelli
                </h3>
                <p className="text-sm text-muted-foreground">
                  O curso que ensina o que sustenta uma loja virtual de verdade
                </p>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">
                  Preço de lançamento
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">
                    R$ 197
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    R$ 397
                  </span>
                </div>
              </div>

              <a
                href={process.env.NEXT_PUBLIC_COURSE_CHECKOUT_URL || "#"}
                onClick={handleClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors"
              >
                <FileText className="w-5 h-5" />
                Conhecer o Curso
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Sem pressão. Explore quando estiver pronto.
          </p>
        </div>
      </div>
    </section>
  );
}
