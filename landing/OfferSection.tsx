import Link from 'next/link'
import { ArrowRight, Check, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || '#checkout'

const includedItems = [
  "Curso Introdução ao E-commerce Bastelli",
  "E-book Roda do E-commerce",
  "Manual de Boas Práticas para E-commerce"
]

export function OfferSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Main Offer Card */}
          <div className="bg-card border-2 border-primary rounded-xl p-6 md:p-10 text-center mb-6">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Oferta Especial de Lançamento
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground mt-4 mb-6">
              Introdução ao E-commerce Bastelli
            </h2>

            {/* Included items */}
            <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-lg text-muted-foreground line-through">R$ 397</span>
                <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
                  -50%
                </span>
              </div>
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-1">
                R$ 197
              </div>
              <p className="text-sm text-muted-foreground">
                Valor especial de lançamento
              </p>
            </div>

            {/* CTA */}
            <Button asChild size="lg" className="w-full sm:w-auto min-h-14 text-lg px-10">
              <Link href={CHECKOUT_URL}>
                Entrar no Introdução ao E-commerce
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Order Bump */}
          <div className="bg-secondary border border-border rounded-lg p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Plus className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded">
                    Opcional
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Trello de Planejamento Comercial para E-commerce
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Modelo pronto para organizar seu planejamento comercial de forma visual e prática.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-foreground">+ R$ 47</span>
                  <span className="text-sm text-muted-foreground">na finalização da compra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
