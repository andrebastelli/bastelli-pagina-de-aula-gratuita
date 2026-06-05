import { siteData } from '@/data/data'

export function TruthSection() {
  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            O que quase ninguém explica sobre e-commerce
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            A verdade que separa uma loja virtual comum de uma operação que vende
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            Antes de investir mais em tráfego, layout ou ferramentas, você precisa entender o que realmente sustenta uma operação de e-commerce.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {siteData.frasesObrigatorias.map((frase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-[#284A78]/10 bg-white/85 p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#284A78]/25 hover:bg-white/95 hover:shadow-xl sm:p-7"
            >
              <div className="absolute -right-4 -top-6 text-8xl font-black text-[#284A78]/5 transition-colors duration-300 group-hover:text-[#D57241]/10">
                0{index + 1}
              </div>

              <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#284A78]/15 bg-[#284A78]/10 text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC] sm:h-14 sm:w-14">
                <span className="text-base font-black sm:text-lg">
                  {index + 1}
                </span>
              </div>

              <p className="relative text-lg font-bold leading-snug text-[#1F2937] text-balance sm:text-xl lg:text-2xl">
                {frase}
              </p>

              <div className="relative mt-6 h-1 w-12 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/60" />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#284A78]/10 bg-white/80 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-6">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            O curso mostra como enxergar o e-commerce como uma operação completa — não como uma promessa fácil de venda online.
          </p>
        </div>
      </div>
    </section>
  )
}