import { ArrowRight, Eye, Mail, MonitorPlay, Sparkles, User, MessageCircle } from 'lucide-react'
import { events } from '@/utils/analytics'

export function Hero() {
  const ctaLabel = 'Quero assistir à aula gratuita'
  const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL

const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  events.ctaClick(ctaLabel)
  events.checkoutClick()

  const form = event.currentTarget
  const formData = new FormData(form)

  const payload = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    whatsapp: formData.get('whatsapp'),
    origem: 'Página de Aula gratuita',
  }

  try {
    await fetch(googleSheetsUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    form.reset()

    window.location.href = '/Obrigado'
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    alert('Não foi possível enviar seus dados. Tente novamente.')
  }
}

  return (
    <section className="relative overflow-hidden bg-grid px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        
        {/* Conteúdo */}
        <div className="text-center lg:text-left">
          {/* Headline */}
          <h1 className="text-[2.3rem] font-black leading-[1.04] tracking-[-0.045em] text-[#1F2937] text-balance sm:text-5xl lg:text-6xl">
            Antes de tentar vender mais no e-commerce, entenda o que pode estar{' '}
            <span className="relative inline-block text-[#D57241]">
              travando sua loja
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#1F2937]/75 text-pretty sm:text-lg lg:text-xl">
            Você já tentou postar mais, investir em tráfego, mudar produto,
            fazer promoção ou ajustar a loja… mas ainda sente que está tomando
            decisões no escuro?
          </p>

          {/* Card principal */}
          <div className="mt-7 overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/85 p-5 text-left shadow-xl shadow-black/5 backdrop-blur-sm sm:p-7">
            <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#284A78] text-[#F5F1EC] shadow-lg sm:mx-0">
                <Eye className="h-7 w-7" />
              </div>

              <div>
                <p className="text-base font-medium leading-relaxed text-[#1F2937]/75 sm:text-lg">
                  Nesta aula gratuita, Bruno Bastelli mostra por que muitos
                  e-commerces não vendem como deveriam e o que você precisa
                  entender antes de colocar mais dinheiro, tempo e energia em
                  novas tentativas.
                </p>

                <p className="mt-4 text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
                  Não é uma aula sobre{' '}
                  <span className="text-[#D57241]">
                    “fórmula mágica”
                  </span>{' '}
                  para vender online.
                </p>
              </div>
            </div>
          </div>

          {/* Frase de apoio */}
          <div className="mt-6 rounded-3xl border border-[#D57241]/20 bg-[#FFF8F3] px-5 py-5 shadow-sm">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D57241]/12 text-[#D57241]">
                <MonitorPlay className="h-5 w-5" />
              </div>

              <p className="text-sm font-bold leading-relaxed text-[#1F2937]/80 sm:text-base">
                É uma aula para te ajudar a enxergar o e-commerce como ele
                realmente é: uma operação que precisa de planejamento, loja,
                marketing, dados e processos funcionando juntos.
              </p>
            </div>
          </div>
        </div>

        {/* Visual + Formulário */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white p-4 shadow-2xl shadow-black/10 sm:p-5">
            
            {/* Mockup / Imagem Bruno */}
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#F5F1EC] p-4">
              <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-black text-[#284A78] shadow-lg backdrop-blur-sm">
                <MonitorPlay className="h-4 w-4 text-[#D57241]" />
                Aula gratuita
              </div>

              <div className="grid min-h-[260px] items-end gap-5 sm:grid-cols-[0.9fr_1.1fr]">
                {/* Troque o src pela imagem real do Bruno */}
                <div className="relative mx-auto w-full max-w-[230px] sm:max-w-none">
                  <div className="aspect-[4/5] rounded-[1.5rem] bg-[#284A78] shadow-xl">
                    <img
                      src="/bruno-bastelli.png"
                      alt="Bruno Bastelli"
                      className="h-full w-full rounded-[1.5rem] object-cover"
                    />
                  </div>
                </div>

                {/* Mockup da aula */}
                <div className="rounded-2xl border border-[#284A78]/10 bg-white p-4 shadow-xl">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#D57241]" />
                    <span className="h-3 w-3 rounded-full bg-[#284A78]/30" />
                    <span className="h-3 w-3 rounded-full bg-[#284A78]/20" />
                  </div>

                  <div className="rounded-xl bg-[#284A78] p-5 text-[#F5F1EC]">
                    <MonitorPlay className="mb-4 h-8 w-8 text-[#D57241]" />
                    <p className="text-sm font-black uppercase tracking-[0.12em] text-[#D57241]">
                      Aula online
                    </p>
                    <p className="mt-2 text-lg font-black leading-tight">
                      O que pode estar travando seu e-commerce?
                    </p>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-full rounded-full bg-[#284A78]/10" />
                    <div className="h-3 w-4/5 rounded-full bg-[#284A78]/10" />
                    <div className="h-3 w-2/3 rounded-full bg-[#D57241]/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
              <div>
                <label htmlFor="nome" className="mb-2 block text-sm font-bold text-[#1F2937]">
                  Nome
                </label>

                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#284A78]/50" />
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC]/60 py-4 pl-12 pr-4 text-sm font-medium text-[#1F2937] outline-none transition-all placeholder:text-[#1F2937]/40 focus:border-[#D57241] focus:bg-white focus:ring-4 focus:ring-[#D57241]/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-[#1F2937]">
                  E-mail
                </label>

                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#284A78]/50" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seuemail@email.com"
                    className="w-full rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC]/60 py-4 pl-12 pr-4 text-sm font-medium text-[#1F2937] outline-none transition-all placeholder:text-[#1F2937]/40 focus:border-[#D57241] focus:bg-white focus:ring-4 focus:ring-[#D57241]/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="whatsapp" className="mb-2 block text-sm font-bold text-[#1F2937]">
                  WhatsApp
                </label>

                <div className="relative">
                  <MessageCircle className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#284A78]/50" />
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    className="w-full rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC]/60 py-4 pl-12 pr-4 text-sm font-medium text-[#1F2937] outline-none transition-all placeholder:text-[#1F2937]/40 focus:border-[#D57241] focus:bg-white focus:ring-4 focus:ring-[#D57241]/10"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/35 sm:py-5 sm:text-lg"
              >
                <span>{ctaLabel}</span>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs font-semibold leading-relaxed text-[#1F2937]/55">
                Após preencher, você será direcionado para assistir à aula gratuita.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}