import { useState } from 'react'
import { siteData } from '@/data/data'
import { ChevronDown, HelpCircle } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28"
    >
      

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Dúvidas frequentes
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Tire suas principais dúvidas antes de entrar no curso.
          </p>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {siteData.faq.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                    isOpen
                      ? 'border-[#284A78]/20 bg-white/95 shadow-xl'
                      : 'border-[#284A78]/10 bg-white/75 shadow-sm hover:border-[#284A78]/25 hover:bg-white/90 hover:shadow-lg'
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-colors duration-300 ${
                          isOpen
                            ? 'bg-[#284A78] text-[#F5F1EC]'
                            : 'bg-[#284A78]/10 text-[#284A78]'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <span className="text-sm font-bold leading-relaxed text-[#1F2937] sm:text-base">
                        {item.pergunta}
                      </span>
                    </div>

                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#284A78] text-[#F5F1EC]'
                          : 'bg-[#284A78]/10 text-[#284A78] group-hover:bg-[#284A78]/15'
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6">
                      <div className="border-t border-[#284A78]/10 pt-4">
                        <p className="text-sm leading-relaxed text-[#1F2937]/70 sm:text-base">
                          {item.resposta}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#284A78]/10 bg-white/75 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-10 sm:px-8">
          <p className="text-sm font-semibold leading-relaxed text-[#1F2937]/75 sm:text-base">
            Ainda ficou alguma dúvida? O mais importante é entender que este curso foi criado para quem quer clareza antes de investir mais no e-commerce.
          </p>
        </div>
      </div>
    </section>
  )
}