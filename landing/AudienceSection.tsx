import { Check, X } from 'lucide-react'

const forWhom = [
  "Donos de loja física que querem vender online",
  "Quem vende pelo Instagram, WhatsApp ou marketplace e quer estruturar melhor",
  "Lojistas que já têm e-commerce, mas não sabem por que vendem pouco",
  "Empreendedores que querem começar com mais clareza"
]

const notForWhom = [
  "Quem procura promessa de dinheiro rápido",
  "Quem quer uma fórmula milagrosa",
  "Quem acredita que e-commerce vende sozinho",
  "Quem não quer estudar fundamentos nem aplicar melhorias"
]

export function AudienceSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mb-4 text-balance">
            Esse curso é para você?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Seja honesto consigo mesmo. Este curso foi pensado para um perfil específico de pessoa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Para quem é */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Check className="h-4 w-4" />
              </div>
              Para quem é
            </h3>
            <ul className="space-y-4">
              {forWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Para quem não é */}
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                <X className="h-4 w-4" />
              </div>
              Para quem não é
            </h3>
            <ul className="space-y-4">
              {notForWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
