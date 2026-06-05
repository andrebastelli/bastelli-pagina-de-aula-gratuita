import Link from 'next/link'
import { ArrowRight, ArrowDown, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || '#checkout'

export function HeroDirect() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-muted/30 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <span className="text-sm font-medium text-foreground">
              Introdução ao E-commerce Bastelli
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-tight text-balance mb-6">
            Pare de tomar decisões no escuro.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 text-pretty">
            Aprenda os fundamentos de uma operação de e-commerce antes de investir mais em plataforma, tráfego, layout ou conteúdo sem clareza.
          </p>

          {/* Prova Social */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>+15 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>+200 clientes atendidos</span>
            </div>
          </div>

          {/* Price Block */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex items-baseline gap-3">
              <span className="text-sm text-muted-foreground line-through">R$ 397</span>
              <span className="text-3xl md:text-4xl font-semibold text-foreground">R$ 197</span>
            </div>
            <span className="text-sm text-muted-foreground">Valor especial de lançamento</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto min-h-12 text-base px-8">
              <Link href={CHECKOUT_URL}>
                Entrar no Introdução ao E-commerce
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto min-h-12 text-base px-8">
              <Link href="#conteudo">
                Ver o que vou aprender
                <ArrowDown className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
