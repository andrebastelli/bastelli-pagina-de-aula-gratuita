import {
  Instagram,
  Store,
  MousePointerClick,
  Brain,
  RefreshCcw,
  HelpCircle,
  Target,
} from 'lucide-react'

export function Blocodeidentificacao() {
  const problems = [
    {
      icon: Instagram,
      title: 'Colocam a loja no ar',
      description:
        'Mas percebem que só ter uma loja online não garante que as vendas aconteçam como esperado.',
    },
    {
      icon: Store,
      title: 'Cadastram produtos e ajustam a plataforma',
      description:
        'Mas continuam sem clareza sobre o que realmente impede a loja de vender melhor.',
    },
    {
      icon: MousePointerClick,
      title: 'Postam no Instagram e impulsionam anúncios',
      description:
        'Mas mesmo investindo em divulgação, ainda sentem que os resultados não acompanham o esforço.',
    },
    {
      icon: Brain,
      title: 'Fazem promoção e trocam ferramentas',
      description:
        'Mas cada nova tentativa parece apenas mais um teste sem direção clara.',
    },
    {
      icon: Target,
      title: 'Continuam sem saber onde está o problema',
      description:
        'Às vezes é tráfego, oferta, produto, frete, experiência, operação ou falta de planejamento.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <HelpCircle className="h-4 w-4 text-[#D57241]" />
            O problema pode ser falta de clareza
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            Talvez o problema não seja falta de esforço. Talvez seja{' '}
            <span className="relative inline-block text-[#D57241]">
              falta de clareza
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Muitos lojistas tentam crescer no digital fazendo o que todo mundo
            fala para fazer. Colocam a loja no ar, cadastram produtos, postam no
            Instagram, impulsionam anúncios, fazem promoção, trocam ferramenta e
            mudam a plataforma.
          </p>
        </div>

        {/* Pergunta central */}
        <div className="mx-auto mb-10 max-w-4xl overflow-hidden rounded-[2rem] border border-[#D57241]/25 bg-[#FFF8F3] p-5 text-center shadow-xl shadow-black/5 sm:p-7">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D57241] text-[#F5F1EC] shadow-lg shadow-[#D57241]/20">
            <RefreshCcw className="h-7 w-7" />
          </div>

          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#284A78]/70">
            Mas, mesmo assim, continuam com a mesma dúvida:
          </p>

          <h3 className="mx-auto mt-3 max-w-3xl text-2xl font-black leading-tight text-[#1F2937] text-balance sm:text-3xl lg:text-4xl">
            “Por que minha loja não vende como deveria?”
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 sm:text-lg">
            E essa pergunta quase nunca tem uma resposta simples.
          </p>
        </div>

        {/* Subtítulo dos cards */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D57241]">
            O problema pode estar em diferentes partes da operação
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D57241]/30 hover:shadow-2xl hover:shadow-[#284A78]/10"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#284A78] via-[#D57241] to-[#284A78] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute -right-6 -top-8 text-8xl font-black leading-none text-[#284A78]/5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#D57241]/10">
                0{index + 1}
              </div>

              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC] group-hover:shadow-lg">
                <problem.icon className="h-7 w-7" />
              </div>

              <h3 className="relative text-lg font-black leading-snug text-[#1F2937] text-balance">
                {problem.title}
              </h3>

              <p className="relative mt-3 text-sm font-medium leading-relaxed text-[#1F2937]/65">
                {problem.description}
              </p>

              <div className="relative mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D57241]" />
                <span className="h-1 w-10 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Bloco explicativo */}
        <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] border border-[#284A78]/10 bg-white/85 p-6 shadow-xl shadow-black/5 backdrop-blur-sm sm:mt-12 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Às vezes o problema está no tráfego.',
              'Às vezes está na oferta.',
              'Às vezes está no produto.',
              'Às vezes está no frete.',
              'Às vezes está na experiência da loja.',
              'Às vezes está na operação.',
              'Às vezes está na falta de planejamento.',
              'Às vezes está na soma de tudo isso.',
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC]/60 px-4 py-4 text-sm font-bold leading-relaxed text-[#1F2937]/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-6">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            Por isso, antes de tentar vender mais, você precisa entender melhor
            o que está acontecendo com o seu e-commerce.
          </p>
        </div>
      </div>
    </section>
  )
}