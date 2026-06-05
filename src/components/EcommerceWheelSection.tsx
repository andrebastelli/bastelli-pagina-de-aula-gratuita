import { siteData } from '@/data/data'

export function EcommerceWheelSection() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            Metodologia Bastelli
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:mt-6 sm:text-4xl lg:text-5xl">
            A Roda do E-commerce
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1F2937]/70 text-pretty sm:mt-5 sm:text-lg lg:text-xl">
            Uma visão prática dos 4 pilares que sustentam uma operação de e-commerce estruturada, profissional e pronta para crescer.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14">
          {/* Cards à esquerda */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {siteData.metodologia.map((pilar, index) => (
              <div
                key={pilar.numero}
                className="group relative overflow-hidden rounded-2xl border border-[#284A78]/10 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#284A78]/25 hover:bg-white/95 hover:shadow-lg sm:p-6"
              >
                {/* número grande decorativo */}
                <div className="absolute -right-2 -top-4 text-6xl font-black text-[#284A78]/5 transition-colors duration-300 group-hover:text-[#284A78]/8 sm:text-7xl">
                  {pilar.numero}
                </div>

                {/* marcador superior */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#284A78]/15 bg-[#284A78]/8 text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#D57241]/25 group-hover:bg-[#D57241]/10 group-hover:text-[#1F2937]">
                  <span className="text-base font-bold">
                    {index + 1}
                  </span>
                </div>

                <h3 className="relative mb-3 text-lg font-bold text-[#1F2937] transition-colors duration-300 group-hover:text-[#284A78] sm:text-xl">
                  {pilar.titulo}
                </h3>

                <p className="relative text-sm leading-relaxed text-[#1F2937]/65 sm:text-base">
                  {pilar.descricao}
                </p>

                <div className="mt-5 h-1 w-12 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/45" />
              </div>
            ))}
          </div>

          {/* Roda à direita */}
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center sm:max-w-md lg:max-w-none">
            <div className="absolute h-64 w-64 rounded-full bg-[#284A78]/10 blur-3xl sm:h-80 sm:w-80" />
            <div className="absolute h-52 w-52 rounded-full bg-[#D57241]/8 blur-2xl sm:h-64 sm:w-64" />

            <div className="relative rounded-full border border-[#284A78]/10 bg-white/70 p-4 shadow-2xl backdrop-blur-sm sm:p-6">
              <img
                src="/roda.png"
                alt="Roda do E-commerce"
                className="h-auto w-full max-w-[280px] animate-wheel-spin object-contain sm:max-w-[360px] lg:max-w-[430px]"
              />
            </div>

            {/* Selo flutuante */}
            <div className="absolute bottom-2 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-[#284A78]/10 bg-white/90 px-4 py-3 text-center shadow-lg backdrop-blur-sm sm:bottom-4 sm:w-auto sm:min-w-[260px]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#284A78]/75">
                Diagnóstico visual
              </p>
              <p className="mt-1 text-sm font-bold text-[#1F2937]">
                Entenda onde sua operação precisa evoluir
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}