import { Quote } from "lucide-react"

const phrases = [
  "E-commerce nao vende sozinho.",
  "Uma loja virtual e uma empresa.",
  "Nao e sobre promessa facil. E sobre fundamento.",
]

export function PromiseReinforcement() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
              Lembre-se sempre
            </h2>
            <p className="text-muted-foreground">
              Estes principios guiam tudo o que ensinamos na Bastelli
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {phrases.map((phrase, index) => (
              <div
                key={index}
                className="bg-primary text-primary-foreground rounded-lg p-6 text-center"
              >
                <Quote className="h-6 w-6 mx-auto mb-3 opacity-50" />
                <p className="font-serif text-lg font-medium">
                  {phrase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
