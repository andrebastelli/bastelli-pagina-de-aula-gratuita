import { ClipboardList, Store, Settings, TrendingUp, BarChart3 } from "lucide-react"

const lessons = [
  {
    icon: ClipboardList,
    title: "Planejamento",
    description: "Como estruturar seu negocio antes de investir em plataforma ou trafego.",
  },
  {
    icon: Store,
    title: "Loja Virtual",
    description: "O que realmente importa na hora de escolher e configurar sua loja.",
  },
  {
    icon: Settings,
    title: "Operacao",
    description: "Estoque, logistica, atendimento e processos que sustentam as vendas.",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description: "Trafego, conversao e estrategias que funcionam para e-commerce.",
  },
  {
    icon: BarChart3,
    title: "Dados e Decisoes",
    description: "Como usar metricas para parar de tomar decisoes no escuro.",
  },
]

export function LessonSummary() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            O que voce vai aprender nesta aula
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma visao completa sobre os pilares que sustentam uma operacao de e-commerce de verdade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              <lesson.icon className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{lesson.title}</h3>
              <p className="text-sm text-muted-foreground">{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
