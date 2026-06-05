"use client"

import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export function ThankYouHero() {
  const lessonUrl = process.env.NEXT_PUBLIC_LESSON_URL || "#"

  const handleAccessClick = () => {
    trackEvent("access_click", { location: "hero" })
    window.open(lessonUrl, "_blank")
  }

  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icone de sucesso */}
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-accent" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Cadastro confirmado. Agora siga o proximo passo.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto text-pretty">
            Voce esta mais perto de entender por que e-commerce nao vende sozinho 
            e como enxergar sua operacao com mais clareza.
          </p>

          <Button
            onClick={handleAccessClick}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6"
          >
            Acessar aula gratuita
          </Button>
        </div>
      </div>
    </section>
  )
}
