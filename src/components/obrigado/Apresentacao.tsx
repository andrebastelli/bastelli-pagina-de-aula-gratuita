import { BookOpen, Gift, FileText, ArrowRight, CheckCircle2 } from 'lucide-react'
import { trackEvent } from '@/utils/analytics'

export function Apresentacao() {
  const checkoutUrl = import.meta.env.VITE_COURSE_CHECKOUT_URL || '#'

  const handleCourseClick = () => {
    trackEvent('offer_click', {
      button_location: 'course_invitation',
      offer_type: 'course',
    })

    trackEvent('checkout_initiated', {
      product: 'Introducao ao E-commerce Bastelli',
      price: 197,
    })

    window.open(checkoutUrl, '_blank')
  }

  const falsasCausas = [
    'Achavam que era tráfego.',
    'Achavam que era plataforma.',
    'Achavam que era preço.',
    'Achavam que era produto.',
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 shadow-2xl shadow-black/5 backdrop-blur-sm">
          {/* Cabeçalho */}
          <div className="bg-[#1F2937] px-6 py-8 text-center text-[#F5F1EC] sm:px-8 sm:py-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F5F1EC]/15 bg-[#F5F1EC]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#F5F1EC]/80 sm:text-xs">
              <BookOpen className="h-4 w-4 text-[#D57241]" />
              Apresentação do curso
            </span>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight text-balance sm:text-4xl lg:text-5xl">
              Foi por isso que criamos o{' '}
              <span className="text-[#D57241]">
                Introdução ao E-commerce Bastelli
              </span>
              .
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#F5F1EC]/75 sm:text-lg">
              Esse curso nasceu dentro da Bastelli, antes de virar um produto.
            </p>
          </div>

          <div className="px-5 py-7 sm:px-8 sm:py-9">
            {/* Texto principal */}
            <div className="mx-auto max-w-4xl space-y-5 text-center">
              <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                Ao longo dos atendimentos, percebemos uma coisa se repetindo com
                muitos lojistas: eles queriam vender mais, investir melhor e
                tomar decisões mais estratégicas, mas ainda não entendiam o
                e-commerce como uma operação completa.
              </p>

              <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg">
                Muitos olhavam só para uma parte do problema.
              </p>
            </div>

            {/* Cards das falsas causas */}
            <div className="mx-auto mt-7 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {falsasCausas.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] p-4 text-center shadow-sm"
                >
                  <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#D57241]/12 text-[#D57241]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <p className="text-sm font-black leading-relaxed text-[#1F2937]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Virada */}
            <div className="mx-auto mt-7 max-w-4xl rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] p-5 text-center shadow-sm sm:p-6">
              <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg">
                Mas, na prática, faltava enxergar o todo.
              </p>

              <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-relaxed text-[#1F2937]/70 sm:text-base">
                Foi por isso que criamos um treinamento interno para apresentar
                aos nossos clientes os fundamentos de uma loja virtual:
                planejamento, loja, operação, marketing, dados, metas,
                ferramentas e processos.
              </p>
            </div>

            {/* Nascimento do curso */}
            <div className="mx-auto mt-7 max-w-4xl space-y-4 text-center">
              <p className="text-base font-bold leading-relaxed text-[#1F2937]/80 sm:text-lg">
                Quando vimos o quanto isso ajudava os clientes a entenderem
                melhor o próprio negócio, decidimos transformar esse conteúdo em
                um curso aberto.
              </p>

              <p className="text-xl font-black leading-tight text-[#D57241] sm:text-2xl">
                Foi assim que nasceu o Introdução ao E-commerce Bastelli.
              </p>

              <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                Um treinamento criado para mostrar de forma clara o que existe
                por trás de uma operação de e-commerce.
              </p>

              <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg">
                Um curso para quem quer entender o e-commerce como negócio de
                verdade e parar de vender no escuro.
              </p>
            </div>

            {/* O que está incluso */}
            <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-[#284A78]/10 bg-white p-5 shadow-lg shadow-black/5 sm:p-6">
              <p className="mb-5 text-center text-sm font-black uppercase tracking-[0.16em] text-[#D57241]">
                O que está incluso
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#1F2937]">
                  <BookOpen className="h-5 w-5 shrink-0 text-[#D57241]" />
                  <span className="text-sm font-bold sm:text-base">
                    Curso Introdução ao E-commerce Bastelli
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[#1F2937]">
                  <Gift className="h-5 w-5 shrink-0 text-[#D57241]" />
                  <span className="text-sm font-bold sm:text-base">
                    E-book Roda do E-commerce
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[#1F2937]">
                  <FileText className="h-5 w-5 shrink-0 text-[#D57241]" />
                  <span className="text-sm font-bold sm:text-base">
                    Manual de Boas Práticas para E-commerce
                  </span>
                </div>
              </div>
            </div>

            {/* Preço */}
            <div className="mx-auto mt-6 max-w-3xl rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] p-5 text-center shadow-sm">
              <p className="mb-1 text-sm font-bold text-[#1F2937]/60">
                Preço de lançamento
              </p>

              <div className="flex items-center justify-center gap-3">
                <span className="text-sm font-bold text-[#1F2937]/50 line-through">
                  R$ 397
                </span>

                <span className="text-4xl font-black text-[#1F2937]">
                  R$ 197
                </span>
              </div>

              <p className="mt-1 text-xs font-medium text-[#1F2937]/60">
                ou 12x de R$ 19,21
              </p>
            </div>

            {/* CTA */}
            <div className="mx-auto mt-6 max-w-3xl">
              <button
                onClick={handleCourseClick}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/35"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Conhecer o curso completo</span>
                <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="mt-4 text-center text-xs font-medium leading-relaxed text-[#1F2937]/55">
                Sem pressão. Explore quando estiver pronto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}