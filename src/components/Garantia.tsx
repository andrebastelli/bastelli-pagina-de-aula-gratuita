import { siteData } from '@/data/data'
import { Check, X, Target, AlertCircle, ShieldCheck } from 'lucide-react'

export function Garantia() {
  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      {/* Elementos decorativos sutis */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Perfil ideal
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            Este curso é para você?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Veja se o treinamento faz sentido para o seu momento e para a forma
            como você quer evoluir no e-commerce.
          </p>
        </div>

        {/* Layout comparativo */}
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6">
          {/* Para quem é */}
          <div className="relative overflow-hidden rounded-3xl border border-[#284A78]/10 bg-white/85 p-5 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:border-[#284A78]/25 hover:bg-white/95 sm:p-7 lg:p-8">
            <div className="absolute -right-5 -top-8 text-8xl font-black text-[#284A78]/5">
              SIM
            </div>

            <div className="relative mb-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#284A78] text-[#F5F1EC] shadow-md">
                <Check className="h-6 w-6" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#284A78]/70">
                Recomendado para
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[#1F2937] sm:text-3xl">
                Quem quer construir com clareza
              </h3>
            </div>

            <ul className="relative space-y-3">
              {siteData.paraQuemE.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-[#284A78]/8 bg-white/75 p-4 shadow-sm"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#284A78]/10 text-[#284A78]">
                    <Check className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-medium leading-relaxed text-[#1F2937]/75 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Separador central */}
          <div className="flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#284A78]/10 bg-[#1F2937] text-sm font-black text-[#F5F1EC] shadow-md backdrop-blur-sm lg:h-16 lg:w-16">
              VS
            </div>
          </div>

          {/* Para quem não é */}
          <div className="relative overflow-hidden rounded-3xl border border-[#1F2937]/10 bg-[#1F2937] p-5 shadow-lg shadow-black/10 backdrop-blur-sm sm:p-7 lg:p-8">
            <div className="absolute -right-5 -top-8 text-8xl font-black text-[#F5F1EC]/5">
              NÃO
            </div>

            <div className="relative mb-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F5F1EC]/20 bg-[#F5F1EC]/10 text-[#F5F1EC] shadow-md">
                <X className="h-6 w-6" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F5F1EC]/60">
                Não recomendado para
              </p>

              <h3 className="mt-1 text-2xl font-bold text-[#F5F1EC] sm:text-3xl">
                Quem procura promessa fácil
              </h3>
            </div>

            <ul className="relative space-y-3">
              {siteData.paraQuemNaoE.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-[#F5F1EC]/10 bg-[#F5F1EC]/8 p-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#F5F1EC]/15 bg-[#F5F1EC]/10 text-[#F5F1EC]">
                    <X className="h-4 w-4" />
                  </div>

                  <span className="text-sm font-medium leading-relaxed text-[#F5F1EC]/75 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Garantia */}
        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-3xl border border-[#284A78]/10 bg-white/85 shadow-sm backdrop-blur-sm sm:mt-10">
          <div className="grid gap-0 lg:grid-cols-[auto_1fr]">
            <div className="flex items-center justify-center bg-[#284A78] px-6 py-6 text-[#F5F1EC]">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <div className="px-5 py-5 text-center sm:px-8 sm:py-6 lg:text-left">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#284A78]/70">
                Garantia de 7 dias
              </p>

              <p className="mt-2 text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                Você tem 7 dias para acessar o conteúdo e decidir se ele faz
                sentido para o seu momento. Se não fizer, basta solicitar o
                reembolso dentro do prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}