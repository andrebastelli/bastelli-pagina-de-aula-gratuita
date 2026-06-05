export function ImportanceSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
                Por que essa aula e importante?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Muitos lojistas investem em plataforma, trafego e conteudo sem entender 
                  a estrutura do negocio. Abrem lojas virtuais esperando que as vendas 
                  acontecam automaticamente.
                </p>
                <p>
                  <strong className="text-foreground">E-commerce nao e segunda renda.</strong>{" "}
                  Uma loja virtual e uma empresa. E como toda empresa, precisa de fundamentos 
                  solidos para funcionar.
                </p>
                <p>
                  Nesta aula, voce vai entender o que realmente sustenta uma operacao de 
                  e-commerce e por que tantas lojas falham nos primeiros meses.
                </p>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="font-semibold text-foreground mb-4">
                Erros comuns que voce vai evitar:
              </h3>
              <ul className="space-y-3">
                {[
                  "Escolher plataforma sem criterio tecnico",
                  "Investir em trafego sem estrutura para converter",
                  "Ignorar operacao e logistica",
                  "Tomar decisoes sem olhar para dados",
                  "Tratar e-commerce como projeto paralelo",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent font-bold">x</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
