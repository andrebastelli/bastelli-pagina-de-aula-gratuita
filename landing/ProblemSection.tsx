import { AlertCircle, HelpCircle, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: AlertCircle,
    title: "Decisões no escuro",
    description: "Você investe em plataforma, tráfego, layout e conteúdo sem clareza do que realmente precisa melhorar."
  },
  {
    icon: TrendingDown,
    title: "Tentativa e erro constante",
    description: "Sem estrutura, cada nova decisão vira um experimento caro que pode não dar resultado."
  },
  {
    icon: HelpCircle,
    title: "Falta de visão de negócio",
    description: "Você pode estar tentando vender mais sem entender o que está travando sua operação."
  }
]

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mb-4 text-balance">
            Por que sua loja não vende como você esperava?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            O problema pode não ser apenas tráfego. Muitos lojistas investem em soluções isoladas sem entender a operação como um todo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 md:p-8"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 bg-secondary rounded-lg max-w-3xl mx-auto">
          <p className="text-center text-foreground font-medium text-lg">
            {"\"Você pode estar tentando vender mais sem entender o que está travando sua loja.\""}
          </p>
        </div>
      </div>
    </section>
  )
}
