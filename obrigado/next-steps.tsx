"use client"

import { Mail, UserPlus, Clock, MessageCircle } from "lucide-react"
import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

const steps = [
  {
    icon: Mail,
    title: "Verifique seu e-mail",
    description: "Enviamos uma confirmacao para o e-mail cadastrado. Confira tambem a caixa de spam.",
  },
  {
    icon: UserPlus,
    title: "Salve nosso contato",
    description: "Adicione a Bastelli Consultoria aos seus contatos para nao perder nenhuma comunicacao.",
  },
  {
    icon: MessageCircle,
    title: "Entre no WhatsApp",
    description: "Envie uma mensagem para confirmar seu acesso e tirar duvidas rapidas.",
  },
  {
    icon: Clock,
    title: "Reserve um tempo",
    description: "Separe de 30 a 45 minutos sem interrupcoes para assistir a aula com atencao.",
  },
]

export function NextSteps() {
  useEffect(() => {
    trackEvent("email_instruction_view")
  }, [])

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
            Proximos passos
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto">
            Siga estas orientacoes para aproveitar ao maximo o conteudo
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-5 flex gap-4"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
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
  )
}
