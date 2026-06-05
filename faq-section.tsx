"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "A aula e gratuita?",
    answer:
      "Sim, a aula e 100% gratuita. Voce so precisa se cadastrar para ter acesso ao conteudo completo.",
  },
  {
    question: "Para quem e essa aula?",
    answer:
      "Para lojistas, empreendedores, donos de loja fisica, pessoas que vendem por Instagram, WhatsApp ou marketplace e empresas que desejam iniciar ou profissionalizar uma operacao de e-commerce.",
  },
  {
    question: "Serve para quem ainda nao tem loja?",
    answer:
      "Sim! Na verdade, essa e a melhor hora para assistir. Voce vai entender o que precisa estruturar antes de investir em plataforma ou trafego.",
  },
  {
    question: "Serve para quem ja vende online?",
    answer:
      "Tambem. Se voce ja tem uma loja mas sente que falta clareza ou que as vendas nao correspondem ao esforco, essa aula vai te ajudar a identificar gaps na operacao.",
  },
  {
    question: "Vou receber acesso ao curso?",
    answer:
      "A aula gratuita e um conteudo introdutorio. Apos assistir, voce podera conhecer o curso completo se fizer sentido para o seu momento.",
  },
  {
    question: "Preciso assistir antes de comprar o curso?",
    answer:
      "Nao e obrigatorio, mas recomendamos. A aula gratuita vai te ajudar a entender se o curso e para voce e o que esperar do conteudo.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-muted-foreground">
              Tire suas duvidas sobre a aula gratuita
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-card hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="p-4 md:p-5 pt-0 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
