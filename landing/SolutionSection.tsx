import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: "Visão de negócio",
    description: "Entenda e-commerce como uma operação completa, não apenas como uma plataforma."
  },
  {
    icon: Lightbulb,
    title: "Clareza nas decisões",
    description: "Saiba onde investir tempo e dinheiro com mais segurança e fundamento."
  },
  {
    icon: Users,
    title: "Orientação prática",
    description: "Conduzido por Bruno Bastelli, com mais de 15 anos de experiência no mercado."
  },
  {
    icon: TrendingUp,
    title: "Evolução estruturada",
    description: "Ideal para quem está começando ou quer profissionalizar uma operação existente."
  }
]

export function SolutionSection() {
  return (
    <section id="curso" className="py-16 md:py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            A Solução
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mt-4 mb-4 text-balance">
            Introdução ao E-commerce Bastelli
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Um curso para entender e-commerce como negócio, com foco em fundamentos, clareza e tomada de decisão estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 bg-card rounded-lg border border-border"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl font-serif font-medium text-foreground">BB</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Bruno Bastelli</h3>
              <p className="text-sm text-muted-foreground mb-2">Fundador da Bastelli Consultoria</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Mais de 15 anos de experiência prática em e-commerce, performance, projetos, consultorias e gestão de tráfego. 
                Mais de 200 clientes atendidos ao longo da carreira.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          Este curso não promete enriquecimento, venda automática ou especialização instantânea. 
          O objetivo é fornecer fundamentos para uma visão mais clara e estruturada do seu negócio.
        </p>
      </div>
    </section>
  )
}
