import {
  Store,
  Megaphone,
  MonitorSmartphone,
  PackageCheck,
  TrendingUp,
  ClipboardList,
  Target,
  BarChart3,
  Settings2,
  SearchCheck,
  Truck,
  Database,
  Headphones,
  Repeat,
  Lightbulb,
} from 'lucide-react'

export function BlocoApresentacaodasolucao() {
  const falsasCausas = [
    'Achavam que era tráfego.',
    'Achavam que era plataforma.',
    'Achavam que era preço.',
    'Achavam que era produto.',
  ]

  const temas = [
    {
      icon: Target,
      title: 'Planejamento',
      description: 'Direção, metas e clareza antes de tomar decisões.',
    },
    {
      icon: ClipboardList,
      title: 'Roda do E-commerce',
      description: 'Uma visão prática dos pilares que sustentam a operação.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Plataformas',
      description: 'Como entender a estrutura da loja além da aparência.',
    },
    {
      icon: Store,
      title: 'Loja virtual',
      description: 'O e-commerce como operação, não apenas como vitrine.',
    },
    {
      icon: Megaphone,
      title: 'Marketing',
      description: 'O papel do tráfego, da oferta e das ações comerciais.',
    },
    {
      icon: Truck,
      title: 'Logística',
      description: 'Frete, entrega, estoque e processos operacionais.',
    },
    {
      icon: PackageCheck,
      title: 'Produtos e SEO',
      description: 'Cadastro, descrição, busca e experiência de compra.',
    },
    {
      icon: BarChart3,
      title: 'Dados e metas',
      description: 'Indicadores para parar de decidir no achismo.',
    },
    {
      icon: Database,
      title: 'ERP e tracking',
      description: 'Ferramentas, integrações e acompanhamento da operação.',
    },
    {
      icon: Headphones,
      title: 'Atendimento',
      description: 'Relacionamento, suporte, retenção e confiança.',
    },
    {
      icon: Repeat,
      title: 'Retenção',
      description: 'Como pensar no cliente depois da primeira compra.',
    },
    {
      icon: TrendingUp,
      title: 'Crescimento',
      description: 'O ciclo de evolução de uma loja virtual.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <Lightbulb className="h-4 w-4 text-[#D57241]" />
            A origem da solução
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-6xl">
            Esse curso nasceu de uma{' '}
            <span className="relative inline-block text-[#D57241]">
              necessidade real
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>{' '}
            dos nossos clientes.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            Ao longo dos atendimentos, percebemos algo se repetindo: muitos
            lojistas queriam vender mais, investir melhor e tomar decisões mais
            estratégicas, mas ainda não entendiam o e-commerce como uma operação
            completa.
          </p>
        </div>

        {/* Bloco de diagnóstico */}
        <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 shadow-xl shadow-black/5 backdrop-blur-sm">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center justify-center bg-[#1F2937] px-6 py-8 text-center sm:px-8 lg:text-left">
              <div>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D57241] text-[#F5F1EC] shadow-lg shadow-[#D57241]/20 lg:mx-0">
                  <SearchCheck className="h-7 w-7" />
                </div>

                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D57241]">
                  O padrão que se repetia
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight text-[#F5F1EC] text-balance sm:text-3xl">
                  Muitos olhavam só para uma parte do problema.
                </h3>
              </div>
            </div>

            <div className="px-6 py-8 sm:px-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {falsasCausas.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] px-4 py-4 text-sm font-black text-[#1F2937] shadow-sm sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-5 rounded-2xl border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-4 text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                Mas, na prática, faltava enxergar o todo.
              </p>
            </div>
          </div>
        </div>

        {/* Apresentação do curso */}
        <div className="mx-auto mb-10 max-w-5xl rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-6 text-center shadow-sm sm:px-8 sm:py-8">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#284A78]/70">
            Foi assim que nasceu
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-[#1F2937] text-balance sm:text-3xl lg:text-4xl">
            Introdução ao E-commerce Bastelli
          </h3>

          <p className="mx-auto mt-4 max-w-4xl text-base font-medium leading-relaxed text-[#1F2937]/75 sm:text-lg">
            Primeiro criamos um treinamento interno para apresentar aos clientes
            os fundamentos de uma loja virtual: planejamento, loja, operação,
            marketing, dados, metas, ferramentas e processos.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
            Quando vimos o quanto isso ajudava os clientes a entenderem melhor o
            próprio negócio, decidimos transformar esse conteúdo em um curso
            aberto.
          </p>
        </div>

        {/* Destaques rápidos */}
        <div className="mx-auto mb-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-[#284A78]/10 bg-white/90 px-5 py-6 text-center shadow-lg shadow-black/5">
            <p className="text-5xl font-black leading-none text-[#D57241]">
              12
            </p>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-[#284A78]/70">
              módulos
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#284A78]/10 bg-white/90 px-5 py-6 text-center shadow-lg shadow-black/5">
            <p className="text-5xl font-black leading-none text-[#D57241]">
              24
            </p>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.14em] text-[#284A78]/70">
              aulas de conteúdo
            </p>
          </div>
        </div>

        {/* Temas */}
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D57241]">
            Você vai passar por temas como:
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {temas.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D57241]/30 hover:shadow-2xl hover:shadow-[#284A78]/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#284A78] via-[#D57241] to-[#284A78] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute -right-6 -top-8 text-8xl font-black leading-none text-[#284A78]/5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D57241]/10">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC] group-hover:shadow-lg">
                <item.icon className="h-7 w-7" />
              </div>

              <h3 className="relative text-lg font-black leading-snug text-[#1F2937] text-balance sm:text-xl">
                {item.title}
              </h3>

              <p className="relative mt-3 text-sm font-medium leading-relaxed text-[#1F2937]/65">
                {item.description}
              </p>

              <div className="relative mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D57241]" />
                <span className="h-1 w-10 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#284A78]/10 bg-white/85 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            Não é um curso para decorar termos técnicos. É para você começar a
            entender o que está fazendo, por que está fazendo e quais pontos
            precisa observar antes de tomar decisões importantes no seu
            e-commerce.
          </p>
        </div>
      </div>
    </section>
  )
}