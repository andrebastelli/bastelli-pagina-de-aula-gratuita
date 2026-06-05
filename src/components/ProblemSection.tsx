import { AlertTriangle, TrendingDown, HelpCircle } from 'lucide-react'

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Você não precisa investir mais no escuro',
      description:
        'Muitos lojistas gastam em plataforma, tráfego, layout e conteúdo sem clareza do que realmente precisa ser feito.',
    },
    {
      icon: TrendingDown,
      title: 'O problema pode não ser apenas tráfego',
      description:
        'Às vezes a operação inteira precisa de ajustes, não só mais visitantes na loja.',
    },
    {
      icon: HelpCircle,
      title: 'Uma loja virtual é uma empresa',
      description:
        'E-commerce exige planejamento, operação e gestão como qualquer outro negócio.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            Antes de investir mais
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            O problema do e-commerce quase nunca é só tráfego
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Antes de aumentar investimento, é preciso entender se a operação está preparada para transformar visitantes em clientes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-[#284A78]/10 bg-white/85 p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#284A78]/25 hover:bg-white/95 hover:shadow-xl sm:p-7 lg:p-8"
            >
              {/* Número decorativo */}
              <div className="absolute -right-3 -top-5 text-7xl font-black text-[#284A78]/5 transition-colors duration-300 group-hover:text-[#D57241]/10">
                0{index + 1}
              </div>

              {/* Ícone */}
              <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#284A78]/15 bg-[#284A78]/10 text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC]">
                <problem.icon className="h-6 w-6" />
              </div>

              <h3 className="relative text-xl font-bold leading-snug text-[#1F2937]">
                {problem.title}
              </h3>

              <p className="relative mt-3 text-sm leading-relaxed text-[#1F2937]/70 sm:text-base">
                {problem.description}
              </p>

              <div className="relative mt-6 h-1 w-12 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/55" />
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#284A78]/10 bg-white/80 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-6">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
            O curso ajuda você a enxergar o e-commerce como uma operação completa — com estratégia, estrutura e clareza antes de investir mais.
          </p>
        </div>
      </div>
    </section>
  )
}