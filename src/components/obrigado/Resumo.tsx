import { Quote, AlertTriangle } from 'lucide-react'

const points = [
  'Talvez você tenha chegado aqui achando que o problema da sua loja era só tráfego pago.',
  'Ou só plataforma.',
  'Ou só preço.',
  'Ou só produto.',
]

const travas = [
  'Porque a oferta não está clara.',
  'Porque o frete assusta.',
  'Porque a página de produto não convence.',
  'Porque a operação não acompanha.',
  'Porque os dados não são analisados.',
  'Porque as campanhas estão desalinhadas.',
  'Porque o lojista está tomando decisões no escuro.',
]

export function Resumo() {
  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <Quote className="h-4 w-4 text-[#D57241]" />
            O que você precisa lembrar
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            Agora você já entendeu uma coisa importante:{' '}
            <span className="relative inline-block text-[#D57241]">
              o problema quase nunca está em um único lugar
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>
        </div>

        <div className="mx-auto mb-8 grid max-w-4xl gap-4 sm:grid-cols-2">
          {points.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#284A78]/10 bg-white/85 p-5 text-center shadow-sm backdrop-blur-sm"
            >
              <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-8 max-w-4xl rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] p-5 text-center shadow-xl shadow-black/5 sm:p-7">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            Mas, como você viu na aula, uma loja virtual não vende apenas porque
            está no ar. Ela precisa de estrutura, clareza e conexão entre as
            partes.
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-4xl">
          <div className="mb-5 text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#D57241]">
              Um e-commerce pode travar
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {travas.map((trava, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#284A78]/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D57241]/30 hover:shadow-lg"
              >
                <div className="absolute -right-4 -top-5 text-6xl font-black leading-none text-[#284A78]/5 transition-all duration-300 group-hover:text-[#D57241]/10">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#D57241]/12 text-[#D57241]">
                    <AlertTriangle className="h-4 w-4" />
                  </div>

                  <p className="text-sm font-bold leading-relaxed text-[#1F2937]/80 sm:text-base">
                    {trava}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-[#284A78]/10 bg-white/85 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:px-8 sm:py-7">
          <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
            E quando você não entende o todo, qualquer ação vira tentativa e
            erro.
          </p>
        </div>
      </div>
    </section>
  )
}