import { events } from '@/utils/analytics'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export function CTAFinal() {
  const ctaLabel = 'Quero entrar no Introdução ao E-commerce Bastelli'
  const checkoutUrl = import.meta.env.VITE_COURSE_CHECKOUT_URL || '#'

  const handleCtaClick = () => {
    events.ctaClick(ctaLabel)
    events.beginCheckout()

    window.open(checkoutUrl, '_blank')
  }

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#D57241] sm:h-4 sm:w-4" />
            CTA final
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-6xl">
            A aula te mostrou o começo. Agora aprofunde a{' '}
            <span className="relative inline-block text-[#D57241]">
              estrutura
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            Você já entendeu que vender online não depende de uma única ação.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
            Agora é hora de entender melhor o que sustenta uma loja virtual de
            verdade.
          </p>

          <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-6 text-center shadow-xl shadow-black/5 backdrop-blur-sm sm:px-8 sm:py-8">
            <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
              Se você quer parar de tentar crescer no escuro e começar a olhar
              para o e-commerce com mais clareza, o Introdução ao E-commerce
              Bastelli é o próximo passo.
            </p>
          </div>

          {/* Pontos rápidos */}
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              'Entenda a estrutura',
              'Veja a operação com clareza',
              'Tome decisões melhores',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#284A78]/10 bg-white/85 px-4 py-3 text-sm font-bold text-[#1F2937] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D57241]/30 hover:bg-white/95"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D57241]" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mx-auto mt-9 max-w-3xl rounded-[2rem] border border-[#284A78]/10 bg-white/75 p-4 shadow-2xl shadow-black/5 backdrop-blur-sm sm:p-6">
            <div className="rounded-[1.5rem] bg-[#1F2937] px-5 py-7 text-center shadow-xl sm:px-8 sm:py-9">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D57241]">
                Próximo passo
              </p>

              <h3 className="mx-auto mt-3 max-w-2xl text-2xl font-black leading-tight text-[#F5F1EC] text-balance sm:text-3xl">
                Entre no Introdução ao E-commerce Bastelli
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-[#F5F1EC]/70 sm:text-base">
                Curso + materiais complementares para estudar, diagnosticar e
                aplicar no seu e-commerce.
              </p>

              <button
                type="button"
                onClick={handleCtaClick}
                className="group relative mt-7 inline-flex w-full max-w-xl items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/40 sm:text-lg"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{ctaLabel}</span>
                <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="mt-4 text-center text-xs font-semibold leading-relaxed text-[#F5F1EC]/60 sm:text-sm">
                Curso + materiais complementares para estudar, diagnosticar e
                aplicar no seu e-commerce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}