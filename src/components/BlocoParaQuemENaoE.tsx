import {
  CheckCircle2,
  XCircle,
  Store,
  Compass,
  MousePointerClick,
  BriefcaseBusiness,
  Brain,
  ZapOff,
  WandSparkles,
  PackageX,
  ShieldCheck,
  MessageCircle,
  Megaphone,
} from 'lucide-react'

export function BlocoParaQuemENaoE() {
  const paraQuem = [
    {
      icon: Compass,
      text: 'Quer começar uma loja virtual, mas não sabe por onde ir.',
    },
    {
      icon: Store,
      text: 'Já tem e-commerce, mas não entende por que ele não vende como deveria.',
    },
    {
      icon: BriefcaseBusiness,
      text: 'Vende pelo Instagram, WhatsApp ou marketplace e quer profissionalizar sua operação.',
    },
    {
      icon: MousePointerClick,
      text: 'Investe em tráfego, mas não sabe se sua loja está pronta para receber visitantes.',
    },
    {
      icon: Brain,
      text: 'Sente que está sempre tentando algo novo, mas sem direção clara.',
    },
    {
      icon: MessageCircle,
      text: 'Quer parar de depender apenas de dica solta, ferramenta ou opinião de terceiros.',
    },
    {
      icon: Megaphone,
      text: 'Quer entender o e-commerce como negócio, não apenas como site ou anúncio.',
    },
  ]

  const naoEParaQuem = [
    {
      icon: ZapOff,
      text: 'Não é para quem procura promessa fácil.',
    },
    {
      icon: WandSparkles,
      text: 'Não é para quem quer uma fórmula de venda automática.',
    },
    {
      icon: PackageX,
      text: 'Não é para quem acredita que e-commerce é só subir produto e anunciar.',
    },
    {
      icon: XCircle,
      text: 'Não é para quem procura uma resposta mágica para problemas que exigem estrutura.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">
          <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            Para quem é esta aula
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            Essa aula é para quem quer entender o e-commerce como{' '}
            <span className="relative inline-block text-[#D57241]">
              negócio
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Antes de acelerar, investir mais ou mudar tudo de novo, é importante
            entender se sua loja está pronta para crescer com mais clareza,
            processo e consistência.
          </p>
        </div>

        {/* Blocos principais */}
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Para quem é */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#D57241]/25 bg-white/95 p-6 shadow-xl shadow-black/5 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#D57241] via-[#284A78] to-[#D57241]" />

            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D57241] text-[#F5F1EC] shadow-lg shadow-[#D57241]/20">
                <CheckCircle2 className="h-7 w-7" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D57241]">
                  Essa aula é para você que:
                </p>

                <h3 className="mt-1 text-2xl font-black leading-tight text-[#1F2937] sm:text-3xl">
                  Quer clareza antes de tentar vender mais
                </h3>

                <p className="mt-2 text-sm font-medium leading-relaxed text-[#1F2937]/60 sm:text-base">
                  Para quem quer construir, ajustar ou profissionalizar uma
                  operação digital com mais visão de negócio e menos achismo.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {paraQuem.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-[#D57241]/12 bg-[#FFF8F3] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D57241]/35 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#D57241] shadow-sm transition-all duration-300 group-hover:bg-[#D57241] group-hover:text-[#F5F1EC]">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <p className="pt-1 text-base font-bold leading-snug text-[#1F2937] sm:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Para quem não é */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/80 p-6 shadow-lg shadow-black/5 sm:p-8">
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#1F2937]/10 text-[#1F2937]">
                <XCircle className="h-7 w-7" />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#284A78]/60">
                  Para quem não é
                </p>

                <h3 className="mt-1 text-2xl font-black leading-tight text-[#1F2937] sm:text-3xl">
                  Não é para quem busca atalho fácil
                </h3>

                <p className="mt-2 text-sm font-medium leading-relaxed text-[#1F2937]/55 sm:text-base">
                  Essa aula não é para quem procura promessa fácil, fórmula
                  mágica ou venda automática sem estrutura.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {naoEParaQuem.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-[#284A78]/10 bg-white/75 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#284A78]/25 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5F1EC] text-[#284A78] transition-all duration-300 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC]">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <p className="pt-1 text-base font-semibold leading-snug text-[#1F2937]/75">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 shadow-xl shadow-black/5 backdrop-blur-sm sm:mt-12">
          <div className="grid gap-0 lg:grid-cols-[auto_1fr]">
            <div className="flex items-center justify-center bg-[#1F2937] px-6 py-7 text-[#F5F1EC]">
              <ShieldCheck className="h-8 w-8 text-[#D57241]" />
            </div>

            <div className="px-5 py-6 text-center sm:px-8 sm:py-7 lg:text-left">
              <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
                A Bastelli acredita em crescimento com clareza, processo e
                consistência.
              </p>

              <p className="mt-2 text-sm font-medium leading-relaxed text-[#1F2937]/65 sm:text-base">
                Se você quer entender melhor sua loja antes de tentar acelerar,
                essa aula faz sentido para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}