import { BookOpen, FileText, Gift } from 'lucide-react'

const bonuses = [
  {
    icon: BookOpen,
    title: "E-book Roda do E-commerce",
    description: "Material complementar com a metodologia completa para você consultar sempre que precisar.",
    included: true
  },
  {
    icon: FileText,
    title: "Manual de Boas Práticas para E-commerce",
    description: "Guia prático com as principais boas práticas para aplicar na sua operação desde o primeiro dia.",
    included: true
  }
]

export function BonusSection() {
  return (
    <section id="bonus" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
            <Gift className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Bônus Inclusos</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mb-4 text-balance">
            Materiais extras para acelerar seu aprendizado
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Além do curso, você recebe materiais complementares para aplicar o conhecimento na prática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 md:p-8 relative overflow-hidden"
            >
              {bonus.included && (
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium bg-primary text-primary-foreground px-2 py-1 rounded">
                    Incluso
                  </span>
                </div>
              )}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <bonus.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 pr-16">
                {bonus.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {bonus.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
