import { Hero } from '@/components/Hero'
import { Blocodeidentificacao } from '@/components/Blocodeidentificacao'
import { BlocoQuebradecrenca } from '@/components/BlocoQuebradecrenca'
import { ViradadeChave } from '@/components/ViradadeChave'
import { BlocoParaQuemENaoE } from '@/components/BlocoParaQuemENaoE'
import { BrunoBastelli } from '@/components/BrunoBastelli'
import { CTAFinal } from '@/components/CTAFinal'
import { Footer } from '@/components/Footer'

export function VendasPage() {
  return (
    <>
      <div className="min-h-screen bg-grid">
        <main>
          <Hero /> 
          <Blocodeidentificacao />
          <BlocoQuebradecrenca />
          <ViradadeChave />
          <BlocoParaQuemENaoE />
          <BrunoBastelli />
          <CTAFinal />
        </main>

        <Footer />
      </div>
    </>
  )
}
