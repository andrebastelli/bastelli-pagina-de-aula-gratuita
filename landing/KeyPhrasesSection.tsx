const keyPhrases = [
  { 
    phrase: "E-commerce não vende sozinho.",
    description: "Não basta subir produtos e esperar que as vendas aconteçam."
  },
  { 
    phrase: "E-commerce não é segunda renda.",
    description: "Uma operação digital exige dedicação, estratégia e gestão profissional."
  },
  { 
    phrase: "E-commerce não é só plataforma.",
    description: "A tecnologia é apenas uma das peças de uma operação completa."
  },
  { 
    phrase: "Uma loja virtual é uma empresa.",
    description: "Requer planejamento, processos e visão de negócio."
  },
  { 
    phrase: "Não é sobre promessa fácil. É sobre fundamento.",
    description: "Resultados reais vêm de bases sólidas, não de atalhos."
  },
]

export function KeyPhrasesSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">
            A visão da Bastelli sobre e-commerce
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Antes de qualquer técnica, você precisa entender a realidade do mercado digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyPhrases.slice(0, 3).map((item, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <p className="text-lg font-medium mb-2">{item.phrase}</p>
              <p className="text-sm text-primary-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {keyPhrases.slice(3).map((item, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <p className="text-lg font-medium mb-2">{item.phrase}</p>
              <p className="text-sm text-primary-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
