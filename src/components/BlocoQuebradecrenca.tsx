import {
  Store,
  Megaphone,
  Layers3,
  SearchX,
  Eye,
  MonitorPlay,
} from 'lucide-react'

export function BlocoQuebradecrenca() {
  const topics = [
    {
      icon: Store,
      title: 'Por que e-commerce não vende sozinho',
      description:
        'E por que ter uma loja no ar não significa ter uma operação pronta para vender.',
    },
    {
      icon: Megaphone,
      title: 'Por que tráfego não resolve tudo',
      description:
        'Anúncio pode levar pessoas para a loja, mas não corrige sozinho problemas de oferta, produto, experiência, frete, atendimento ou operação.',
    },
    {
      icon: Layers3,
      title: 'Quais são os pilares que sustentam uma loja virtual',
      description:
        'Você vai entender a importância de olhar para planejamento, loja, operação e marketing como partes de um mesmo negócio.',
    },
    {
      icon: SearchX,
      title: 'Onde muitos lojistas se perdem',
      description:
        'A maioria tenta resolver o sintoma mais visível, mas não olha para a causa real do problema.',
    },
    {
      icon: Eye,
      title: 'Como enxergar sua loja com mais clareza',
      description:
        'Para tomar decisões melhores antes de investir mais dinheiro em tráfego, plataforma, ferramentas ou campanhas.',
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
            <MonitorPlay className="h-4 w-4 text-[#D57241]" />
            Aula gratuita com Bruno Bastelli
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            O que você vai{' '}
            <span className="relative inline-block text-[#D57241]">
              entender na aula
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Nesta aula gratuita, você vai entender por que muitos e-commerces
            não vendem como deveriam e como começar a olhar para sua loja com
            mais clareza antes de investir mais dinheiro, tempo e energia.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {topics.map((item, index) => (
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

              <h3 className="relative text-lg font-black leading-snug text-[#1F2937] text-balance">
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
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-6">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            A ideia não é te entregar uma fórmula mágica. É te ajudar a entender
            melhor o que realmente sustenta uma loja virtual e onde sua operação
            pode estar travando.
          </p>
        </div>
      </div>
    </section>
  )
}