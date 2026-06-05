"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText } from "lucide-react"

export function CourseInvitation() {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-widest mb-4 opacity-80">
            Apos a aula gratuita
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">
            Conheca o curso Introducao ao E-commerce Bastelli
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Se a aula gratuita fez sentido para voce, o curso completo vai te dar 
            a base necessaria para estruturar ou profissionalizar sua operacao de e-commerce.
          </p>

          {/* Bonus */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <BookOpen className="h-6 w-6 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-sm">E-book Roda do E-commerce</p>
                <p className="text-xs opacity-80">Incluso no curso</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <FileText className="h-6 w-6 flex-shrink-0" />
              <div className="text-left">
                <p className="font-semibold text-sm">Manual de Boas Praticas</p>
                <p className="text-xs opacity-80">Incluso no curso</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Primeiro, assistir a aula gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm opacity-70 mt-6">
            Preco de lancamento: <strong>R$ 197</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
