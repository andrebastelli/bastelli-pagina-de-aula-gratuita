import { Quote, AlertTriangle } from 'lucide-react'

const points = [
  'Eles até entendem que precisam melhorar, mas não sabem por onde começar.',
  'Não sabem quais números acompanhar.',
  'Não sabem o que olhar na loja.',
  'Não sabem se o problema está no marketing, na experiência, na operação ou no planejamento.',
]

const travas = [
  'A aula te mostrou o ponto de partida.',
  'Agora você precisa aprofundar a estrutura.',
  'Entender que o e-commerce não vende sozinho já muda a forma como você olha para sua loja.',
  'Mas existe uma diferença entre perceber o problema e saber o que observar em cada parte da operação.',
]

export function Virada() {
  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <Quote className="h-4 w-4 text-[#D57241]" />
            Virada para o próximo passo
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            A aula te mostrou o ponto de partida. Agora você precisa{' '}
            <span className="relative inline-block text-[#D57241]">
              aprofundar a estrutura
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>
        </div>

        <div className="mx-auto mb-8 max-w-4xl rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] p-5 text-center shadow-xl shadow-black/5 sm:p-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            Entender que o e-commerce não vende sozinho já muda a forma como
            você olha para sua loja.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-relaxed text-[#1F2937]/70 sm:text-base">
            Mas existe uma diferença entre perceber o problema e saber o que
            observar em cada parte da operação.
          </p>
        </div>

        <div className="mx-auto mb-8 grid max-w-4xl gap-4 sm:grid-cols-2">
          {points.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#284A78]/10 bg-white/85 p-5 text-center shadow-sm backdrop-blur-sm"
            >
              <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-8 max-w-4xl">
          <div className="mb-5 text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D57241]">
              É aí que muitos lojistas travam
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {travas.map((trava, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#284A78]/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D57241]/30 hover:shadow-lg"
              >
                <div className="absolute -right-4 -top-5 text-6xl font-black leading-none text-[#284A78]/5 transition-all duration-300 group-hover:text-[#D57241]/10">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#D57241]/12 text-[#D57241]">
                    <AlertTriangle className="h-4 w-4" />
                  </div>

                  <p className="text-sm font-bold leading-relaxed text-[#1F2937]/80 sm:text-base">
                    {trava}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-[#284A78]/10 bg-white/85 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:px-8 sm:py-7">
          <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            Por isso, o próximo passo é estudar os fundamentos de uma operação
            digital com mais profundidade.
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-sm font-bold leading-relaxed text-[#1F2937]/70 sm:text-base">
            Não para decorar termos técnicos. Mas para enxergar o seu negócio
            com mais clareza e começar a tomar decisões melhores.
          </p>
        </div>
      </div>
    </section>
  )
}