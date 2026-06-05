import { siteData } from '@/data/data'
import { Gift, Sparkles, ImageIcon } from 'lucide-react'

export function BonusSection() {
  return (
    <section
      id="bonus"
      className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28"
    >
      

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Bônus inclusos
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            Você também recebe materiais práticos para aplicar no seu e-commerce
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Materiais complementares para ajudar você a transformar o conteúdo do curso em ação, organização e melhoria real na operação.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:gap-8">
  {siteData.bonus.slice(0, 2).map((bonus, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-3xl border border-[#284A78]/10 bg-white/85 p-4 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#284A78]/25 hover:bg-white/95 hover:shadow-xl sm:p-5 lg:p-6"
    >
      {/* Número decorativo */}
      <div className="absolute -right-4 -top-6 z-0 text-8xl font-black text-[#284A78]/5 transition-colors duration-300 group-hover:text-[#D57241]/10">
        0{index + 1}
      </div>

      {/* Quadro da imagem */}
      <div className="relative z-10 mb-5 overflow-hidden rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] shadow-sm">
        <div className="aspect-[4/5] w-full">
          {bonus.imagem ? (
            <img
              src={bonus.imagem}
              alt={bonus.titulo}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(rgba(40,74,120,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(40,74,120,0.06)_1px,transparent_1px)] bg-[size:24px_24px]">
              <div className="flex flex-col items-center gap-2 text-[#284A78]/45">
                <ImageIcon className="h-8 w-8" />
                <span className="text-xs font-bold uppercase tracking-[0.14em]">
                  Imagem do bônus
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#284A78]/15 bg-[#284A78] text-[#F5F1EC] shadow-md transition-all duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
          <Gift className="h-6 w-6" />
        </div>

        <div className="text-left">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#284A78]/65">
            Bônus {index + 1}
          </p>

          <h3 className="text-xl font-bold leading-snug text-[#1F2937] sm:text-2xl">
            {bonus.titulo}
          </h3>
        </div>
      </div>

      <p className="relative z-10 text-sm leading-relaxed text-[#1F2937]/70 sm:text-base">
        {bonus.descricao}
      </p>

      <div className="relative z-10 mt-6 h-1 w-12 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/45" />
    </div>
  ))}
</div>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#284A78]/10 bg-white/75 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-10 sm:px-8">
          <p className="text-sm font-semibold leading-relaxed text-[#1F2937]/75 sm:text-base">
            Os bônus foram pensados para facilitar a aplicação prática dos conceitos, ajudando você a analisar, organizar e evoluir sua operação com mais clareza.
          </p>
        </div>
      </div>
    </section>
  )
}