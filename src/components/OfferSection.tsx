import { siteData } from '@/data/data'
import { events } from '@/utils/analytics'
import { Check, Plus, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react'

export function OfferSection() {
  const handleCtaClick = () => {
    events.ctaClick(siteData.ctaSecundario3)
    events.beginCheckout()
  }

  const handleOrderBumpClick = () => {
    events.orderBumpClick()
  }

  return (
  <section className="relative overflow-hidden bg-secundary-grid py-16 sm:py-20 lg:py-28">
    <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D57241]/20 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#284A78]/20 blur-3xl" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Cabeçalho */}
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D57241]/40 bg-[#D57241]/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#F5F1EC] shadow-sm backdrop-blur-sm sm:text-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#D57241] sm:h-4 sm:w-4" />
          Oferta de lançamento
        </span>

        <h2 className="mt-5 text-3xl font-bold leading-tight text-[#F5F1EC] text-balance sm:text-4xl lg:text-5xl">
          Comece agora com uma condição especial de lançamento
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#F5F1EC]/75 sm:text-lg">
          Acesse o curso completo, receba os bônus práticos e comece a enxergar seu e-commerce com mais clareza estratégica.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10">
        {/* Coluna de valor */}
        <div className="relative overflow-hidden rounded-[2rem] border border-[#F5F1EC]/15 bg-[#F5F1EC]/10 p-5 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-7 lg:p-8">
          <div className="absolute -right-8 -top-10 text-9xl font-black text-[#F5F1EC]/5">
            01
          </div>

          <p className="relative text-xs font-black uppercase tracking-[0.16em] text-[#D57241]">
            O que você recebe hoje
          </p>

          <h3 className="relative mt-3 text-2xl font-bold leading-tight text-[#F5F1EC] sm:text-3xl">
            Uma estrutura prática para estudar, diagnosticar e organizar sua operação.
          </h3>

          <div className="relative mt-6 space-y-3">
            <div className="flex items-start gap-3 rounded-2xl border border-[#D57241]/25 bg-[#D57241]/10 p-4">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D57241] text-[#F5F1EC]">
                <Check className="h-4 w-4" />
              </div>

              <span className="text-sm font-bold leading-relaxed text-[#F5F1EC] sm:text-base">
                Acesso ao curso completo
              </span>
            </div>

            {siteData.bonus.slice(0, 2).map((bonus, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-[#F5F1EC]/10 bg-[#F5F1EC]/8 p-4"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F5F1EC]/15 text-[#F5F1EC]">
                  <Check className="h-4 w-4" />
                </div>

                <span className="text-sm font-medium leading-relaxed text-[#F5F1EC]/85 sm:text-base">
                  {bonus.titulo}
                </span>
              </div>
            ))}
          </div>

          <div className="relative mt-6 rounded-2xl border border-[#D57241]/30 bg-[#1F2937]/60 p-4">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D57241]" />

              <p className="text-sm font-semibold leading-relaxed text-[#F5F1EC]/80">
                Sem promessa milagrosa. O foco é clareza, fundamentos e visão prática para tomada de decisão.
              </p>
            </div>
          </div>

          <div className="relative mt-6 rounded-2xl bg-[#F5F1EC]/95 px-4 py-4 text-center">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#284A78]">
              Oferta simples e direta
            </p>

            <p className="mt-1 text-sm font-bold leading-relaxed text-[#1F2937]/75">
              Curso + materiais práticos para começar com mais clareza.
            </p>
          </div>
        </div>

        {/* Card principal da oferta */}
        <div className="relative pt-7">
          <div className="absolute -inset-3 rounded-[2.3rem] bg-gradient-to-br from-[#D57241]/70 via-[#F5F1EC]/10 to-[#284A78]/50 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#D57241]/50 bg-[#F5F1EC] shadow-2xl shadow-[#D57241]/20">
            {/* Selo superior integrado */}
            <div className="bg-[#D57241] px-5 py-5 text-center text-[#F5F1EC]">
              <span className="inline-flex items-center justify-center rounded-full border border-[#F5F1EC]/30 bg-[#1F2937]/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] sm:text-xs">
                Melhor momento para entrar
              </span>

              <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] sm:text-sm">
                Condição especial por tempo limitado
              </p>
            </div>

            <div className="p-5 sm:p-7 lg:p-8">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#284A78]/70">
                  Você vai receber
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-[#1F2937] sm:text-3xl">
                  {siteData.projeto}
                </h3>
              </div>

              {/* Preço */}
              <div className="mt-7 rounded-[1.7rem] border border-[#284A78]/10 bg-white p-5 text-center shadow-lg shadow-black/5 sm:p-6">
                <p className="text-sm font-semibold text-[#1F2937]/55 line-through">
                  De {siteData.precoOficial}
                </p>

                <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-[#D57241]">
                  Hoje por apenas
                </p>

                <div className="mt-2 flex items-end justify-center gap-2">
                  <span className="text-5xl font-black leading-none text-[#1F2937] sm:text-6xl lg:text-7xl">
                    {siteData.precoLancamento}
                  </span>
                </div>

                <p className="mt-3 text-xs font-semibold text-[#1F2937]/60 sm:text-sm">
                  Curso completo + bônus inclusos na oferta de lançamento
                </p>
              </div>

              {/* CTA */}
              <a
                href={siteData.checkoutUrl}
                onClick={handleCtaClick}
                className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/35 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/50 sm:py-5 sm:text-lg"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{siteData.ctaSecundario3}</span>
                <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <p className="mt-3 text-center text-xs font-bold text-[#1F2937]/55 sm:text-sm">
                Acesso imediato após a confirmação.
              </p>

              {/* Micro garantias */}
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {['Acesso rápido', 'Bônus inclusos', 'Conteúdo prático'].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#284A78]/10 bg-white/80 px-3 py-3 text-center text-xs font-bold text-[#1F2937]/70"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Order Bump */}
              <div className="mt-6 rounded-2xl border-2 border-[#D57241] bg-[#1F2937] p-4 text-[#F5F1EC] shadow-lg shadow-black/10 sm:p-5">
                <div
                  className="flex cursor-pointer items-start gap-4"
                  onClick={handleOrderBumpClick}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D57241] bg-[#D57241]/10">
                    <Plus className="h-5 w-5 text-[#D57241]" />
                  </div>

                  <div>
                    <p className="text-sm font-bold leading-snug sm:text-base">
                      Adicione também: {siteData.orderBump.nome}
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-[#F5F1EC]/70 sm:text-sm">
                      Ferramenta prática para organizar sua rotina comercial.
                    </p>

                    <p className="mt-2 text-lg font-black text-[#D57241]">
                      + {siteData.orderBump.preco}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detalhe inferior */}
          <div className="mx-auto mt-4 max-w-md rounded-2xl border border-[#F5F1EC]/15 bg-[#F5F1EC]/10 px-4 py-3 text-center backdrop-blur-sm">
            <p className="text-xs font-semibold leading-relaxed text-[#F5F1EC]/70 sm:text-sm">
              Comece pelos fundamentos antes de investir mais em tráfego, plataforma ou novas ferramentas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}