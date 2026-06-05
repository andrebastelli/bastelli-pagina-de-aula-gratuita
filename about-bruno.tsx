import { CheckCircle2 } from "lucide-react"

const credentials = [
  "Mais de 15 anos de experiencia pratica em e-commerce",
  "Mais de 200 clientes atendidos em diferentes segmentos",
  "Experiencia com performance, projetos e consultorias",
  "Especialista em gestao de trafego e conversao",
  "Visao estrategica de negocio, nao apenas tecnica",
]

export function AboutBruno() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto placeholder */}
            <div className="order-2 md:order-1">
              <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="font-serif text-4xl font-bold text-primary">BB</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Foto de Bruno Bastelli
                  </p>
                </div>
              </div>
            </div>

            {/* Conteudo */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">
                  Seu instrutor
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Bruno Bastelli
                </h2>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Consultor de e-commerce com trajetoria construida na pratica. 
                Ja ajudou centenas de empresas a estruturar, lancar e escalar 
                suas operacoes de venda online.
              </p>

              <ul className="space-y-3">
                {credentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-foreground font-medium italic border-l-2 border-accent pl-4">
                {'"Pare de tomar decisoes no escuro. Entenda o que sustenta um e-commerce de verdade."'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
