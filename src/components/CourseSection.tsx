import { ArrowRight, CheckCircle2, Award, Users, Briefcase, TrendingUp } from 'lucide-react'
import { siteData } from '@/data/data'
import { events } from '@/utils/analytics'

export function CourseSection() {
  const handleCtaClick = () => {
    events.ctaClick(siteData.ctaSecundario1)
    events.checkoutClick()
  }

  const authorityStats = [
    { icon: Award, value: '+15 anos', label: 'de experiência prática' },
    { icon: Users, value: '+200', label: 'clientes atendidos' },
    { icon: Briefcase, value: 'E-commerce', label: 'performance e projetos' },
    { icon: TrendingUp, value: 'Consultorias', label: 'e gestão de tráfego' },
  ]

  return (
    <section
      id="curso"
      className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          
          {/* Texto esquerdo */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
              O Curso
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:text-4xl lg:mx-0 lg:text-5xl">
              Introdução ao<br />E-commerce Bastelli
            </h2>

            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left lg:mx-0">
              <p className="text-base leading-relaxed text-[#1F2937]/75 sm:text-lg">
                Um curso introdutório para quem quer começar no e-commerce com mais clareza ou profissionalizar uma operação que já existe.
              </p>

              <p className="rounded-2xl border border-[#284A78]/10 bg-white/85 p-5 text-base leading-relaxed text-[#1F2937]/80 shadow-sm backdrop-blur-sm sm:text-lg">
                Conduzido por{' '}
                <strong className="font-bold text-[#1F2937]">
                  Bruno Bastelli
                </strong>
                , fundador da{' '}
                <strong className="font-bold text-[#1F2937]">
                  {siteData.empresa}
                </strong>
                , com mais de 15 anos de experiência prática e mais de 200 clientes atendidos em e-commerce, performance, projetos, consultorias e gestão de tráfego.
              </p>

              <p className="text-base leading-relaxed text-[#1F2937]/75 sm:text-lg">
                O foco é nos fundamentos, na clareza e na tomada de decisão. Não prometemos enriquecimento rápido, venda automática ou especialização instantânea.
              </p>
            </div>

            {/* Pontos rápidos */}
            <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-3 lg:mx-0">
              {['Fundamentos', 'Clareza', 'Decisão'].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#284A78]/10 bg-white/85 px-4 py-3 text-sm font-bold text-[#1F2937] shadow-sm backdrop-blur-sm lg:justify-start"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#284A78]" />
                  {item}
                </div>
              ))}
            </div>

            {/* Autoridade unificada */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
              {authorityStats.map((stat, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-[#284A78]/10 bg-white/85 p-4 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#284A78]/25 hover:bg-white/95 hover:shadow-lg"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#284A78]/10 text-[#284A78] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC] sm:h-12 sm:w-12">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <p className="text-lg font-black leading-tight text-[#1F2937] sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[11px] font-semibold leading-tight text-[#1F2937]/65 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href={siteData.checkoutUrl}
                onClick={handleCtaClick}
                className="group relative inline-flex w-full max-w-sm items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#D57241] px-5 py-3.5 text-center text-sm font-bold text-[#F5F1EC] shadow-lg shadow-[#D57241]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-xl hover:shadow-[#D57241]/30 sm:w-auto sm:max-w-none sm:px-8 sm:py-4 sm:text-base"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{siteData.ctaSecundario1}</span>
                <ArrowRight className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Foto direita */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#284A78]/15 via-transparent to-[#D57241]/10 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#1F2937]">
                <img
                  src="/bruno-bastelli.png"
                  alt="Bruno Bastelli"
                  className="aspect-[4/5] w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1F2937] via-[#1F2937]/70 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-center sm:p-6">
                  <p className="font-serif text-2xl font-bold text-[#F5F1EC] sm:text-3xl">
                    Bruno Bastelli
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#F5F1EC]/75 sm:text-base">
                    Fundador da {siteData.empresa}
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl bg-[#1F2937] px-4 py-5 text-center">
                <p className="text-sm font-semibold leading-relaxed text-[#F5F1EC]/85 sm:text-base">
                  Abordagem consultiva, direta e baseada em experiência prática — sem promessas vazias ou fórmulas milagrosas.
                </p>
              </div>
            </div>

            {/* Selo flutuante */}
            <div className="absolute -right-2 top-6 hidden rounded-2xl border border-[#284A78]/10 bg-white/95 px-4 py-3 text-center shadow-xl backdrop-blur-sm sm:block lg:-right-6">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#284A78]">
                Bastelli
              </p>
              <p className="mt-1 text-sm font-semibold text-[#1F2937]">
                E-commerce na prática
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}