import { Eye, ShieldCheck, Layers, Search, BarChart } from 'lucide-react'

const courseTopics = [
  {
    icon: Eye,
    title: "Visão de negócio",
    description: "Como enxergar e-commerce como um negócio completo, não apenas como uma loja online."
  },
  {
    icon: ShieldCheck,
    title: "Decisões fundamentadas",
    description: "Como evitar decisões no escuro e investir com mais clareza e segurança."
  },
  {
    icon: Layers,
    title: "Pilares da operação",
    description: "Como entender os pilares de uma operação digital: planejamento, loja, operação e marketing."
  },
  {
    icon: Search,
    title: "Diagnóstico de gargalos",
    description: "Como identificar gargalos antes de investir mais dinheiro em soluções isoladas."
  },
  {
    icon: BarChart,
    title: "Pensamento integrado",
    description: "Como pensar em planejamento, loja, operação e marketing de forma integrada."
  }
]

export function CourseContentSection() {
  return (
    <section id="conteudo" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Conteúdo do Curso
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mt-4 mb-4 text-balance">
            O que você vai aprender
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Temas essenciais para construir uma visão estruturada da sua operação de e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseTopics.slice(0, 3).map((topic, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <topic.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {topic.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {courseTopics.slice(3).map((topic, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <topic.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {topic.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
