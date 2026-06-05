import { siteData } from '@/data/data'
import { Award, Users, Briefcase, TrendingUp, CheckCircle2 } from 'lucide-react'

export function AuthoritySection() {
  const stats = [
    { icon: Award, value: '+15 anos', label: 'de experiência prática' },
    { icon: Users, value: '+200', label: 'clientes atendidos' },
    { icon: Briefcase, value: 'E-commerce', label: 'performance e projetos' },
    { icon: TrendingUp, value: 'Consultorias', label: 'e gestão de tráfego' },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      {/* elementos decorativos */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#284A78]/8 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#D57241]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          {/* Cards de autoridade */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-[#284A78]/10 bg-white/80 p-4 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#284A78]/25 hover:bg-white/95 hover:shadow-lg sm:p-6"
                >
                  <div className="absolute -right-3 -top-4 text-6xl font-black text-[#284A78]/5 transition-colors duration-300 group-hover:text-[#D57241]/10">
                    0{index + 1}
                  </div>

                  <div className="relative mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#284A78]/15 bg-[#284A78]/8 text-[#284A78] transition-all duration-300 group-hover:scale-105 group-hover:border-[#D57241]/20 group-hover:bg-[#D57241]/10 sm:h-14 sm:w-14">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div className="relative text-xl font-black leading-tight text-[#1F2937] sm:text-2xl lg:text-3xl">
                    {stat.value}
                  </div>

                  <div className="relative mt-1 text-xs font-semibold leading-tight text-[#1F2937]/65 sm:text-sm">
                    {stat.label}
                  </div>

                  <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-16 group-hover:bg-[#D57241]/45" />
                </div>
              ))}
            </div>
          </div>

          {/* Texto de autoridade */}
          <div className="order-1 text-center lg:order-2 lg:text-left">
            <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
              Quem é
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:text-4xl lg:mx-0 lg:text-5xl">
              Bruno Bastelli
            </h2>

            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left lg:mx-0">
              <p className="text-base leading-relaxed text-[#1F2937]/75 sm:text-lg">
                Fundador da{' '}
                <strong className="font-bold text-[#1F2937]">
                  {siteData.empresa}
                </strong>
                , Bruno trabalha há mais de 15 anos com e-commerce, performance digital, projetos e consultorias.
              </p>

              <p className="rounded-2xl border border-[#284A78]/10 bg-white/75 p-5 text-base leading-relaxed text-[#1F2937]/75 shadow-sm backdrop-blur-sm sm:text-lg">
                Já atendeu mais de 200 clientes, ajudando empresas a estruturarem suas operações digitais com clareza e foco em resultados reais.
              </p>

              <p className="text-base leading-relaxed text-[#1F2937]/75 sm:text-lg">
                Sua abordagem é consultiva, direta e baseada em experiência prática — sem promessas vazias ou fórmulas milagrosas.
              </p>
            </div>

            {/* pontos de autoridade */}
            <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-3 lg:mx-0">
              {[
                'Experiência prática',
                'Visão consultiva',
                'Resultados reais',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#284A78]/10 bg-white/75 px-4 py-3 text-sm font-bold text-[#1F2937] shadow-sm backdrop-blur-sm lg:justify-start"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#284A78]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#284A78]/10 bg-[#1F2937] px-5 py-5 text-center shadow-lg sm:px-6 lg:mx-0 lg:text-left">
              <p className="text-sm font-semibold leading-relaxed text-[#F5F1EC] sm:text-base">
                A proposta não é ensinar teoria solta. É traduzir anos de prática em uma visão clara para quem quer tratar o e-commerce como uma operação de verdade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}