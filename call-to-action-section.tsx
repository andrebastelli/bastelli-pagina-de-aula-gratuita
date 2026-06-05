"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToActionSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Pronto para entender o que sustenta um e-commerce de verdade?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Assista a aula gratuita e de o primeiro passo para profissionalizar sua operacao.
          </p>
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Garantir meu acesso gratuito
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            100% gratuito. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  )
}
