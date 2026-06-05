"use client"

const pillars = [
  {
    name: "Planejamento",
    description: "Modelo de negocio, posicionamento, publico e metas claras.",
  },
  {
    name: "Loja Virtual",
    description: "Plataforma, usabilidade, checkout e experiencia do cliente.",
  },
  {
    name: "Operacao",
    description: "Estoque, logistica, atendimento e processos internos.",
  },
  {
    name: "Marketing",
    description: "Trafego, conversao, retencao e estrategias de crescimento.",
  },
]

export function EcommerceWheel() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              A Roda do E-commerce
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Os quatro pilares que sustentam qualquer operacao de e-commerce de sucesso. 
              Se um deles falha, toda a roda para.
            </p>
          </div>

          {/* Roda visual */}
          <div className="relative max-w-xl mx-auto">
            {/* Centro */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-sm md:text-base font-bold text-center px-2">
                  E-commerce
                </span>
              </div>
            </div>

            {/* Grid dos pilares */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-all hover:shadow-md aspect-square flex flex-col justify-center items-center text-center"
                >
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {pillar.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-xl mx-auto">
            <strong className="text-foreground">Nao e sobre promessa facil.</strong>{" "}
            E sobre fundamento.
          </p>
        </div>
      </div>
    </section>
  )
}
