import { siteData } from '@/data/data'
import { events } from '@/utils/analytics'
import { ArrowRight, Target, Store, Settings2, Megaphone } from 'lucide-react'

export function RodadoEcommerce() {
  const ctaLabel = 'Quero entender minha operação'

  const handleCtaClick = () => {
    events.ctaClick(ctaLabel)
    events.beginCheckout()
  }

  const pilares = [
    {
      numero: '01',
      icon: Target,
      titulo: 'Planejamento',
      descricao:
        'Metas, calendário, campanhas, indicadores, canais e direção estratégica para a loja crescer com clareza.',
    },
    {
      numero: '02',
      icon: Store,
      titulo: 'Loja',
      descricao:
        'Layout, experiência de compra, produtos, descrições, SEO, páginas e conversão dentro da loja virtual.',
    },
    {
      numero: '03',
      icon: Settings2,
      titulo: 'Operação',
      descricao:
        'Pedidos, estoque, ERP, logística, atendimento e rotina interna para manter o e-commerce funcionando.',
    },
    {
      numero: '04',
      icon: Megaphone,
      titulo: 'Marketing',
      descricao:
        'Tráfego, conteúdo, posicionamento, dados, remarketing e relacionamento para atrair e vender melhor.',
    },
  ]

  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            Metodologia Bastelli
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:mt-6 sm:text-4xl lg:text-6xl">
            Quando você entende o todo, para de olhar para o e-commerce como{' '}
            <span className="relative inline-block text-[#D57241]">
              partes soltas
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:mt-6 sm:text-lg lg:text-xl">
            A Bastelli criou a metodologia Roda do E-commerce para analisar uma
            loja de forma completa, identificando onde a operação realmente
            trava e o que precisa ser melhorado para crescer.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14">
          {/* Cards à esquerda */}
          <div>
            <div className="mb-6 rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-5 shadow-sm">
              <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                Quando um desses pilares está fraco, a loja sente. E a maioria
                dos lojistas trabalha no escuro porque foca só em tráfego ou na
                plataforma.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {pilares.map((pilar) => (
                <div
                  key={pilar.numero}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D57241]/30 hover:shadow-2xl hover:shadow-[#284A78]/10"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#284A78] via-[#D57241] to-[#284A78] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute -right-6 -top-8 text-8xl font-black leading-none text-[#284A78]/5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D57241]/10">
                    {pilar.numero}
                  </div>

                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC] group-hover:shadow-lg">
                    <pilar.icon className="h-7 w-7" />
                  </div>

                  <h3 className="relative text-lg font-black leading-snug text-[#1F2937] text-balance sm:text-xl">
                    {pilar.titulo}
                  </h3>

                  <p className="relative mt-3 text-sm font-medium leading-relaxed text-[#1F2937]/65 sm:text-base">
                    {pilar.descricao}
                  </p>

                  <div className="relative mt-6 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D57241]" />
                    <span className="h-1 w-10 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Roda à direita */}
          <div className="relative mx-auto flex w-full max-w-sm items-center justify-center sm:max-w-md lg:max-w-none">
            <div className="absolute h-64 w-64 rounded-full bg-white/60 sm:h-80 sm:w-80" />
            <div className="absolute h-52 w-52 rounded-full bg-[#D57241]/8 sm:h-64 sm:w-64" />

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

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#284A78]/10 bg-white/85 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            A metodologia da Roda do E-commerce ajuda a identificar onde o
            e-commerce realmente trava e o que precisa ser melhorado para
            crescer com mais clareza, estrutura e direção.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={siteData.checkoutUrl}
            onClick={handleCtaClick}
            target="_blank"
            className="group relative inline-flex w-full max-w-sm items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/40 sm:w-auto sm:max-w-none sm:px-8 sm:py-5 sm:text-lg"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">{ctaLabel}</span>
            <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}