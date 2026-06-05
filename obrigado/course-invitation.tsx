"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText, CheckCircle2 } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

const bonuses = [
  { icon: BookOpen, text: "E-book Roda do E-commerce" },
  { icon: FileText, text: "Manual de Boas Praticas" },
]

export function CourseInvitation() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#"

  const handleCourseClick = () => {
    trackEvent("offer_click", { location: "thank_you_page" })
    trackEvent("checkout_initiated")
    window.open(checkoutUrl, "_blank")
  }

  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <div className="text-center mb-6">
              <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full mb-4">
                Quando estiver pronto
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Quer ir alem da introducao?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Depois de assistir a aula gratuita, se fizer sentido para voce, 
                conheca o curso completo com conteudo aprofundado e bonus exclusivos.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                O que esta incluso:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>Curso Introducao ao E-commerce Bastelli</span>
                </li>
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <bonus.icon className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{bonus.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <span className="text-sm text-muted-foreground line-through">De R$ 397</span>
                <span className="text-3xl font-bold text-foreground ml-2">R$ 197</span>
                <span className="text-sm text-muted-foreground ml-1">no lancamento</span>
              </div>

              <Button
                onClick={handleCourseClick}
                size="lg"
                variant="outline"
                className="gap-2"
              >
                Conhecer o curso completo
                <ArrowRight className="h-4 w-4" />
              </Button>

              <p className="text-xs text-muted-foreground mt-3">
                Sem pressao. Assista a aula gratuita primeiro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
