import { siteData } from '@/data/data'
import { events } from '@/utils/analytics'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export function FinalCTASection() {
  const handleCtaClick = () => {
    events.ctaClick('Quero entrar no curso agora')
    events.beginCheckout()
  }

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Última chamada
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-6xl">
            Pare de tomar decisões no escuro dentro do seu e-commerce
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            Comece pelo fundamento antes de investir mais tempo, dinheiro e energia em uma operação sem clareza.
          </p>

          {/* Pontos rápidos */}
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              'Fundamentos práticos',
              'Visão estratégica',
              'Mais clareza para decidir',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#284A78]/10 bg-white/85 px-4 py-3 text-sm font-bold text-[#1F2937] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#284A78]/25 hover:bg-white/95"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#284A78]" />
                {item}
              </div>
            ))}
          </div>

          {/* Card CTA */}
          <div className="mx-auto mt-9 max-w-3xl rounded-[2rem] border border-[#284A78]/10 bg-white/75 p-4 shadow-2xl shadow-black/5 backdrop-blur-sm sm:p-6">
            <div className="rounded-[1.5rem] bg-[#1F2937] px-5 py-7 text-center shadow-xl sm:px-8 sm:py-9">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D57241]">
                Introdução ao E-commerce Bastelli
              </p>

              <h3 className="mx-auto mt-3 max-w-2xl text-2xl font-bold leading-tight text-[#F5F1EC] text-balance sm:text-3xl">
                Entre agora e comece a enxergar sua operação com mais clareza.
              </h3>

              <a
                href={siteData.checkoutUrl}
                onClick={handleCtaClick}
                className="group relative mt-7 inline-flex w-full max-w-sm items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/40 sm:w-auto sm:max-w-none sm:px-8 sm:text-lg"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Quero entrar no curso agora</span>
                <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <p className="mx-auto mt-4 max-w-md text-xs font-semibold leading-relaxed text-[#F5F1EC]/70 sm:text-sm">
                Um curso introdutório para quem quer parar de agir por tentativa e erro e começar a tomar decisões com mais fundamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}