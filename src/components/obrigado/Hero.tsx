import { Check, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute top-20 -right-32 h-96 w-96 rounded-full" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full" />

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Ícone de sucesso */}
        <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D57241]/25 bg-white/85 text-[#D57241] shadow-xl shadow-black/5">
          <Check className="h-10 w-10" strokeWidth={3} />
        </div>

        {/* Headline */}
        <h1 className="mx-auto mt-6 max-w-5xl text-balance text-[2.35rem] font-black leading-[1.03] tracking-[-0.045em] text-[#1F2937] sm:text-5xl lg:text-7xl">
          Cadastro confirmado. Agora assista à{' '}
          <span className="relative inline-block text-[#D57241]">
            aula gratuita
            <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
          </span>
          .
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-4xl text-pretty text-base font-semibold leading-relaxed text-[#1F2937]/75 sm:text-lg lg:text-xl">
          Você está mais perto de entender por que e-commerce não vende sozinho
          e como enxergar sua operação com mais clareza.
        </p>

        {/* Card explicativo */}
        <div className="mx-auto mt-7 max-w-4xl rounded-[1.7rem] border border-[#D57241]/20 bg-white/80 p-5 text-center shadow-xl shadow-black/5 backdrop-blur-sm sm:p-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
            Antes de colocar mais dinheiro em anúncios, plataformas ou novas
            soluções, assista à aula e entenda o que pode estar travando sua
            loja virtual.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-relaxed text-[#1F2937]/70 sm:text-base">
            Bruno Bastelli mostra por que muitos e-commerces não vendem como
            deveriam e o que você precisa entender para parar de tomar decisões
            no escuro.
          </p>
        </div>

        {/* VSL */}
        <div className="relative mx-auto mt-9 max-w-4xl">
          <div className="absolute -inset-4 rounded-[2.4rem] bg-[#D57241]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-2xl shadow-black/10">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-[#1F2937]">
              <iframe
  className="h-full w-full"
  src="https://www.youtube.com/embed/8r-eyP_bdlU?rel=0&modestbranding=1&playsinline=1"
  title="VSL Introdução ao E-commerce Bastelli"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
            </div>

            <div className="mt-4 rounded-[1.4rem] bg-[#FFF8F3] p-4">
              <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center sm:text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D57241]/12 text-[#D57241]">
                  <Sparkles className="h-5 w-5" />
                </div>

                <p className="text-sm font-bold leading-snug text-[#1F2937]/80">
                  Assista antes de tomar qualquer nova decisão no seu
                  e-commerce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}