import {
  Gift,
  Sparkles,
  ImageIcon,
  BookOpen,
  ClipboardCheck,
  Target,
  KanbanSquare,
  Lightbulb,
} from 'lucide-react'

export function Bonus() {
  const bonusItems = [
    {
      icon: BookOpen,
      titulo: 'E-book Introdução ao E-commerce',
      descricao:
        'Para revisar os conceitos principais do treinamento e consultar sempre que precisar.',
      imagem: '/bonus/ebook-introducao-ecommerce.png',
    },
    {
      icon: BookOpen,
      titulo: 'E-book Roda do E-commerce',
      descricao:
        'Para analisar sua loja pelos quatro pilares da metodologia e entender onde estão os gargalos.',
      imagem: '/bonus/ebook-roda-ecommerce.png',
    },
    {
      icon: ClipboardCheck,
      titulo: 'Manual de Boas Práticas',
      descricao:
        'Guia prático para melhorar fotos, banners, descrições, páginas de produtos e experiência visual.',
      imagem: '/bonus/manual-boas-praticas.png',
    },
    {
      icon: Target,
      titulo: 'Como Definir Metas Inteligentes',
      descricao:
        'Ferramenta para transformar objetivos soltos em metas claras e conectadas aos indicadores certos.',
      imagem: '/bonus/metas-inteligentes.png',
    },
    {
      icon: KanbanSquare,
      titulo: 'Trello de Campanhas e Ações de Venda',
      descricao:
        'Painel pronto para organizar campanhas, ações promocionais, datas importantes, tarefas e acompanhamento.',
      imagem: '/bonus/trello-campanhas.png',
    },
    {
      icon: Lightbulb,
      titulo: 'Planilha com +50 Ideias de Ofertas Validadas',
      descricao:
        'Repertório para criar campanhas com mais criatividade, estratégia e adaptação para sua loja.',
      imagem: '/bonus/planilha-ofertas.png',
    },
  ]

  return (
    <section
      id="bonus"
      className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#D57241] sm:h-4 sm:w-4" />
            Bônus inclusos
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-6xl">
            Esse curso por si só já pode transformar a sua visão sobre{' '}
            <span className="relative inline-block text-[#D57241]">
              e-commerce
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            Mas decidimos ajudar você de verdade. Por isso, turbinamos o
            Introdução ao E-commerce com bônus que, sozinhos, poderiam ser
            vendidos separadamente.
          </p>

          <p className="mx-auto mt-4 max-w-3xl rounded-3xl border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-5 text-base font-bold leading-relaxed text-[#1F2937] shadow-sm sm:text-lg">
            Eles vão ajudar você a alcançar seus resultados com uma vantagem
            absurda sobre quem ainda vende no escuro, sem estratégias reais.
          </p>
        </div>

        {/* Cards dos bônus */}
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonusItems.map((bonus, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 p-5 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D57241]/30 hover:shadow-2xl hover:shadow-[#284A78]/10 sm:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#284A78] via-[#D57241] to-[#284A78] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute -right-6 -top-8 z-0 text-8xl font-black leading-none text-[#284A78]/5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D57241]/10">
                {String(index + 1).padStart(2, '0')}
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
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC] group-hover:shadow-lg">
                  <bonus.icon className="h-7 w-7" />
                </div>

                <div className="text-left">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D57241]">
                    Bônus {index + 1}
                  </p>

                  <h3 className="text-xl font-black leading-snug text-[#1F2937] text-balance sm:text-2xl">
                    {bonus.titulo}
                  </h3>
                </div>
              </div>

              <p className="relative z-10 text-sm font-medium leading-relaxed text-[#1F2937]/65 sm:text-base">
                {bonus.descricao}
              </p>

              <div className="relative z-10 mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D57241]" />
                <span className="h-1 w-10 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 shadow-xl shadow-black/5 backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[auto_1fr]">
            <div className="flex items-center justify-center bg-[#1F2937] px-6 py-7 text-[#F5F1EC]">
              <Gift className="h-8 w-8 text-[#D57241]" />
            </div>

            <div className="px-5 py-6 text-center sm:px-8 sm:py-7 lg:text-left">
              <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
                Aprenda a estrutura. Diagnostique sua loja. Defina metas.
                Planeje campanhas. Crie ofertas melhores. Tudo em um só lugar.
              </p>

              <p className="mt-3 text-sm font-medium leading-relaxed text-[#1F2937]/65 sm:text-base">
                Os bônus foram pensados para transformar o conteúdo do curso em
                aplicação prática, ajudando você a organizar, analisar e evoluir
                sua operação com mais clareza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}