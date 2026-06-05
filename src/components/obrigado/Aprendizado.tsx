import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react'
import { trackEvent } from '@/utils/analytics'

export function Aprendizado() {
  const checkoutUrl = import.meta.env.VITE_COURSE_CHECKOUT_URL || '#'

  const handleCourseClick = () => {
    trackEvent('offer_click', {
      button_location: 'course_invitation',
      offer_type: 'course',
    })

    trackEvent('checkout_initiated', {
      product: 'Introducao ao E-commerce Bastelli',
      price: 197,
    })

    window.open(checkoutUrl, '_blank')
  }

  const aprendizados = [
    {
      titulo: 'Planejamento e metas',
      descricao:
        'Para entender o e-commerce como negócio, definir objetivos mais claros e acompanhar indicadores importantes.',
    },
    {
      titulo: 'Roda do E-commerce',
      descricao:
        'Para enxergar a loja em quatro pilares: Planejamento, Loja, Operação e Marketing.',
    },
    {
      titulo: 'Plataformas e estrutura da loja',
      descricao:
        'Para entender o que observar antes de escolher, trocar ou ajustar uma plataforma.',
    },
    {
      titulo: 'Cadastro de produtos, fotos, descrições e experiência',
      descricao:
        'Para perceber como a apresentação dos produtos influencia a confiança, a percepção de valor e a conversão.',
    },
    {
      titulo: 'Meios de pagamento, frete, ERP, estoque e logística',
      descricao:
        'Para entender o que acontece por trás da venda e como a operação impacta diretamente o cliente.',
    },
    {
      titulo: 'Marketing, tráfego, dados e tracking',
      descricao:
        'Para enxergar campanhas, anúncios, conteúdo e análise como partes de uma estratégia maior.',
    },
    {
      titulo: 'Atendimento, retenção e crescimento',
      descricao:
        'Para pensar além da primeira venda e começar a olhar para relacionamento, recompra e melhoria contínua.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 shadow-2xl shadow-black/5 backdrop-blur-sm">
          {/* Cabeçalho */}
          <div className="bg-[#1F2937] px-6 py-8 text-center text-[#F5F1EC] sm:px-8 sm:py-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F5F1EC]/15 bg-[#F5F1EC]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#F5F1EC]/80 sm:text-xs">
              <BookOpen className="h-4 w-4 text-[#D57241]" />
              O que você vai aprender no curso
            </span>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight text-balance sm:text-4xl lg:text-5xl">
              Uma visão completa para entender o que sustenta uma{' '}
              <span className="text-[#D57241]">loja virtual</span>.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#F5F1EC]/75 sm:text-lg">
              No Introdução ao E-commerce Bastelli, você vai passar pelos
              principais pontos de uma operação digital.
            </p>
          </div>

          <div className="px-5 py-7 sm:px-8 sm:py-9">
            {/* Cards de aprendizado */}
            <div className="grid gap-4 sm:grid-cols-2">
              {aprendizados.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] p-5 shadow-sm ${
                    index === aprendizados.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D57241]/12 text-[#D57241]">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-black uppercase tracking-[0.14em] text-[#D57241]">
                        Módulo {String(index + 1).padStart(2, '0')}
                      </p>

                      <h3 className="text-base font-black leading-snug text-[#1F2937] sm:text-lg">
                        {item.titulo}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm font-medium leading-relaxed text-[#1F2937]/70 sm:text-base">
                    {item.descricao}
                  </p>
                </div>
              ))}
            </div>

            {/* Fechamento */}
            <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-[#D57241]/20 bg-[#FFF8F3] p-5 text-center shadow-sm sm:p-6">
              <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg">
                Você não vai apenas assistir aulas.
              </p>

              <p className="mx-auto mt-3 max-w-3xl text-base font-bold leading-relaxed text-[#1F2937]/75 sm:text-lg">
                Você vai começar a conectar as peças do seu e-commerce.
              </p>
            </div>

            {/* CTA */}
            <div className="mx-auto mt-8 max-w-3xl">
              <button
                onClick={handleCourseClick}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/35"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Conhecer o curso completo</span>
                <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="mt-4 text-center text-xs font-medium leading-relaxed text-[#1F2937]/55">
                Um próximo passo para entender melhor sua operação digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}