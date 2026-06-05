import { LeadForm } from "@/components/lead-form"
import { CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteudo */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-accent uppercase tracking-widest">
                Aula Gratuita
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                E-commerce nao vende sozinho.
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-medium text-pretty">
                O que voce precisa entender antes de abrir ou tentar crescer sua loja virtual.
              </p>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Assista a aula gratuita com Bruno Bastelli e entenda por que vender online 
              depende de planejamento, loja, operacao, marketing e dados.
            </p>

            {/* Prova de autoridade */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>+15 anos de experiencia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>+200 clientes atendidos</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:pl-8">
            <div className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-sm">
              <div className="text-center mb-6">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  Assista agora
                </h2>
                <p className="text-muted-foreground">
                  Preencha seus dados para acessar a aula gratuita
                </p>
              </div>
              <LeadForm variant="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
