import { ClipboardList, Store, Settings, Megaphone } from 'lucide-react'

const pillars = [
  {
    icon: ClipboardList,
    number: "1",
    title: "Planejamento",
    description: "Clareza sobre oferta, público, posicionamento e metas. A base para qualquer operação sustentável."
  },
  {
    icon: Store,
    number: "2",
    title: "Loja Virtual",
    description: "Estrutura, experiência, páginas, checkout e apresentação da oferta de forma profissional."
  },
  {
    icon: Settings,
    number: "3",
    title: "Operação",
    description: "Estoque, logística, atendimento, processos e rotina comercial que sustentam o crescimento."
  },
  {
    icon: Megaphone,
    number: "4",
    title: "Marketing",
    description: "Tráfego, conteúdo, dados, conversão e estratégias de crescimento sustentável."
  }
]

export function EcommerceWheelSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Metodologia
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mt-4 mb-4 text-balance">
            A Roda do E-commerce
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Nossa metodologia organiza a operação de e-commerce em 4 pilares fundamentais que precisam funcionar juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 md:p-8 flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-medium">
                  {pillar.number}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <pillar.icon className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
          Quando um pilar está desalinhado, toda a operação sofre. O curso ajuda você a identificar onde estão os gargalos.
        </p>
      </div>
    </section>
  )
}
