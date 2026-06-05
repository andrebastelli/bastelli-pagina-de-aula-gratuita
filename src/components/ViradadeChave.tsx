import {
  PackageCheck,
  Truck,
  MonitorSmartphone,
  BadgePercent,
  BarChart3,
  Headphones,
  Settings2,
  AlertTriangle,
  Store,
} from 'lucide-react'

export function ViradadeChave() {
  const travas = [
    {
      icon: PackageCheck,
      title: 'Bons produtos não garantem vendas',
      description:
        'Uma loja pode ter bons produtos e ainda assim não vender se a operação não estiver bem estruturada.',
    },
    {
      icon: BarChart3,
      title: 'Tráfego não garante conversão',
      description:
        'Você pode levar pessoas para a loja, mas isso não significa que elas vão comprar se houver gargalos no caminho.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Plataforma conhecida não resolve tudo',
      description:
        'Mesmo usando uma boa plataforma, a experiência pode ser ruim, confusa ou pouco preparada para vender.',
    },
    {
      icon: BadgePercent,
      title: 'Promoção não significa lucro',
      description:
        'Fazer desconto pode até gerar movimento, mas sem estratégia pode comprometer margem e resultado.',
    },
    {
      icon: Truck,
      title: 'Frete pode travar a decisão',
      description:
        'Custo, prazo e regras pouco claras podem fazer o cliente abandonar a compra no momento mais importante.',
    },
    {
      icon: Headphones,
      title: 'Atendimento também faz parte da venda',
      description:
        'Respostas lentas, dúvidas mal resolvidas e falta de processo podem fazer uma venda escapar.',
    },
    {
      icon: Settings2,
      title: 'Operação sem processo vira tentativa',
      description:
        'Quando não existe clareza operacional, cada decisão vira improviso e cada ajuste parece um teste isolado.',
    },
    {
      icon: Store,
      title: 'E-commerce é uma operação',
      description:
        'Não é uma peça isolada. É a soma de produto, loja, marketing, atendimento, dados, logística e gestão.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <AlertTriangle className="h-4 w-4 text-[#D57241]" />
            Uma nova forma de olhar para sua loja
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            O e-commerce não trava porque falta{' '}
            <span className="relative inline-block text-[#D57241]">
              uma única coisa
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Uma loja virtual pode ter bons produtos e ainda assim não vender.
            Pode ter tráfego e ainda assim não converter. Pode ter uma
            plataforma conhecida e ainda assim gerar uma experiência ruim.
          </p>
        </div>

        {/* Bloco de impacto */}
        <div className="mx-auto mb-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] p-5 text-center shadow-xl shadow-black/5 sm:p-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            Pode fazer promoção e ainda assim não ter lucro. Porque e-commerce
            não é uma peça isolada.{' '}
            <span className="text-[#D57241]">É uma operação.</span>
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {travas.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D57241]/30 hover:shadow-2xl hover:shadow-[#284A78]/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#284A78] via-[#D57241] to-[#284A78] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute -right-6 -top-8 text-8xl font-black leading-none text-[#284A78]/5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D57241]/10">
                0{index + 1}
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
            Quando você não entende essa operação, cada decisão vira uma
            tentativa. A proposta desta aula é te mostrar uma nova forma de
            olhar para sua loja — com mais clareza, mais visão de negócio e
            menos achismo.
          </p>
        </div>
      </div>
    </section>
  )
}