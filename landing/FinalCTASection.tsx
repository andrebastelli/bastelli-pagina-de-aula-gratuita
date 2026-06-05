import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || '#checkout'

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-balance">
          Pare de vender no achismo.
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
          Comece pelo fundamento antes de investir mais tempo, dinheiro e energia em uma operação sem clareza.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="w-full sm:w-auto min-h-14 text-lg px-10"
          >
            <Link href={CHECKOUT_URL}>
              Comprar agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/60">
          <span>Valor de lançamento: R$ 197</span>
          <span className="hidden sm:inline">•</span>
          <span>Acesso imediato após confirmação</span>
        </div>
      </div>
    </section>
  )
}
