import { events } from '@/utils/analytics'
import {
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  BookOpen,
  FileText,
  ClipboardCheck,
  PlayCircle,
  CreditCard,
  Target,
  KanbanSquare,
  Lightbulb,
} from 'lucide-react'
import { siteData } from '@/data/data'

export function Oferta() {
  const ctaLabel = 'Quero sair do escuro agora'

  const handleCtaClick = () => {
    events.ctaClick(ctaLabel)
    events.beginCheckout()
  }

  const offerItems = [
    {
      icon: PlayCircle,
      title: 'Acesso completo ao curso',
      description:
        'Aulas organizadas para você entender o e-commerce como uma operação completa.',
    },
    {
      icon: BookOpen,
      title: 'E-book Introdução ao E-commerce',
      description:
        'Material de apoio para revisar os conceitos e consultar sempre que precisar.',
    },
    {
      icon: FileText,
      title: 'E-book Roda do E-commerce',
      description:
        'Para analisar sua loja pelos quatro pilares da metodologia Bastelli.',
    },
    {
      icon: ClipboardCheck,
      title: 'Manual de Boas Práticas',
      description:
        'Guia prático para melhorar fotos, banners, descrições, páginas de produtos e experiência visual.',
    },
    {
      icon: Target,
      title: 'Ferramenta de Metas Inteligentes',
      description:
        'Para transformar objetivos soltos em metas claras e conectadas aos indicadores certos.',
    },
    {
      icon: KanbanSquare,
      title: 'Trello de Campanhas e Ações de Venda',
      description:
        'Painel pronto para organizar campanhas, datas importantes, tarefas e acompanhamento.',
    },
    {
      icon: Lightbulb,
      title: 'Planilha com +50 ideias de ofertas validadas',
      description:
        'Repertório para criar campanhas com mais criatividade, estratégia e adaptação.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-secundary-grid py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D57241]/20" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D57241]/40 bg-[#D57241]/15 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#F5F1EC] shadow-sm backdrop-blur-sm sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#D57241] sm:h-4 sm:w-4" />
            Oferta de lançamento
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#F5F1EC] text-balance sm:text-4xl lg:text-6xl">
            Comece entendendo o e-commerce do jeito certo.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#F5F1EC]/75 sm:text-lg lg:text-xl">
            Ao se inscrever no Introdução ao E-commerce Bastelli, você recebe o
            treinamento completo e todos os materiais práticos para sair do
            achismo e enxergar sua operação com mais clareza.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
          {/* Coluna de valor */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#F5F1EC]/15 bg-[#F5F1EC]/10 p-5 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-7 lg:p-8">
            <div className="absolute -right-8 -top-10 text-9xl font-black text-[#F5F1EC]/5">
              01
            </div>

            <p className="relative text-xs font-black uppercase tracking-[0.16em] text-[#D57241]">
              Você recebe
            </p>

            <h3 className="relative mt-3 text-2xl font-bold leading-tight text-[#F5F1EC] sm:text-3xl">
              Curso, e-books, ferramentas e materiais práticos em uma única
              oferta.
            </h3>

            <div className="relative mt-6 space-y-3">
              {offerItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 rounded-2xl border border-[#F5F1EC]/10 bg-[#F5F1EC]/8 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D57241]/30 hover:bg-[#F5F1EC]/12"
                >
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D57241] text-[#F5F1EC] shadow-md shadow-[#D57241]/20 transition-all duration-300 group-hover:scale-105">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-black leading-snug text-[#F5F1EC] sm:text-base">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs font-medium leading-relaxed text-[#F5F1EC]/70 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-6 rounded-2xl border border-[#D57241]/30 bg-[#1F2937]/60 p-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D57241]" />

                <p className="text-sm font-semibold leading-relaxed text-[#F5F1EC]/80">
                  Sem promessa milagrosa. O foco é clareza, fundamentos,
                  processo e visão prática para tomada de decisão.
                </p>
              </div>
            </div>
          </div>

          {/* Card principal da oferta */}
          <div className="relative pt-7">
            <div className="absolute -inset-3 rounded-[2.3rem] bg-gradient-to-br from-[#D57241]/70 via-[#F5F1EC]/10 to-white/10" />

            <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#D57241]/50 bg-[#F5F1EC] shadow-2xl shadow-[#D57241]/20">
              <div className="bg-[#D57241] px-5 py-5 text-center text-[#F5F1EC]">
                <span className="inline-flex items-center justify-center rounded-full border border-[#F5F1EC]/30 bg-[#1F2937]/15 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] sm:text-xs">
                  Condição de lançamento
                </span>

                <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] sm:text-sm">
                  Melhor momento para começar
                </p>
              </div>

              <div className="p-5 sm:p-7 lg:p-8">
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#284A78]/70">
                    Oferta completa
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight text-[#1F2937] sm:text-3xl">
                    Introdução ao E-commerce Bastelli
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm font-semibold leading-relaxed text-[#1F2937]/65 sm:text-base">
                    Curso + e-books + manual + ferramentas práticas para
                    organizar sua visão sobre e-commerce.
                  </p>
                </div>

                {/* Lista resumida */}
                <div className="mt-6 grid gap-3">
                  {[
                    'Acesso completo ao curso',
                    'E-book Introdução ao E-commerce',
                    'E-book Roda do E-commerce',
                    'Manual de Boas Práticas',
                    'Ferramenta de Metas Inteligentes',
                    'Trello de Campanhas e Ações de Venda',
                    'Planilha com +50 ideias de ofertas validadas',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[#284A78]/10 bg-white/80 px-4 py-3 text-left shadow-sm"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D57241] text-[#F5F1EC]">
                        <Check className="h-4 w-4" />
                      </div>

                      <span className="text-sm font-bold leading-relaxed text-[#1F2937]/80 sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Preço */}
                <div className="mt-7 rounded-[1.7rem] border border-[#284A78]/10 bg-white p-5 text-center shadow-lg shadow-black/5 sm:p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#284A78]/65">
                    Condição de lançamento
                  </p>

                  <p className="mt-3 text-sm font-semibold text-[#1F2937]/55 line-through">
                    De R$ 397
                  </p>

                  <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-[#D57241]">
                    Por apenas
                  </p>

                  <div className="mt-2 flex items-end justify-center gap-2">
                    <span className="text-5xl font-black leading-none text-[#1F2937] sm:text-6xl lg:text-7xl">
                      R$ 197
                    </span>
                  </div>

                  <div className="mx-auto mt-5 max-w-md rounded-2xl border border-[#D57241]/20 bg-[#FFF8F3] px-4 py-4">
                    <div className="flex items-start justify-center gap-3 text-left">
                      <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-[#D57241]" />

                      <p className="text-sm font-semibold leading-relaxed text-[#1F2937]/70">
                        Condição de pagamento disponível no checkout, com acesso
                        liberado após a confirmação da compra.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={siteData.checkoutUrl}
                  onClick={handleCtaClick}
                  target="_blank"
                  className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/35 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/50 sm:py-5 sm:text-lg"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">{ctaLabel}</span>
                  <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <p className="mt-3 text-center text-xs font-bold text-[#1F2937]/55 sm:text-sm">
                  Acesso imediato após a confirmação.
                </p>

                {/* Garantia sutil */}
                <div className="mt-5 rounded-2xl border border-[#284A78]/10 bg-white/70 px-4 py-4 text-left shadow-sm">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#284A78]/70" />

                    <div>
                      <p className="text-sm font-black leading-snug text-[#1F2937]">
                        Entre, assista e veja se faz sentido.
                      </p>

                      <p className="mt-1 text-xs font-medium leading-relaxed text-[#1F2937]/60 sm:text-sm">
                        Você terá um prazo de garantia para acessar o conteúdo e avaliar se ele
                        faz sentido para o seu momento. Se dentro desse período o curso não
                        atender às suas expectativas, basta solicitar o reembolso conforme as
                        condições da plataforma.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro garantias */}
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {['Curso completo', 'Bônus inclusos', 'Conteúdo prático'].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#284A78]/10 bg-white/80 px-3 py-3 text-center text-xs font-bold text-[#1F2937]/70"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Detalhe inferior */}
            <div className="mx-auto mt-4 max-w-md rounded-2xl border border-[#F5F1EC]/15 bg-[#F5F1EC]/10 px-4 py-3 text-center backdrop-blur-sm">
              <p className="text-xs font-semibold leading-relaxed text-[#F5F1EC]/70 sm:text-sm">
                Comece pelos fundamentos antes de investir mais em tráfego,
                plataforma ou novas ferramentas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}