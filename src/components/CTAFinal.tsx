import { events } from '@/utils/analytics'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  User,
  Mail,
  MessageCircle,
  MonitorPlay,
} from 'lucide-react'

export function CTAFinal() {
  const ctaLabel = 'Quero assistir à aula gratuita'

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    events.ctaClick(ctaLabel)
    events.beginCheckout()

    const formData = new FormData(event.currentTarget)

    const nome = formData.get('nome')
    const email = formData.get('email')
    const whatsapp = formData.get('whatsapp')

    console.log({
      nome,
      email,
      whatsapp,
    })

    /**
     * Integre aqui com sua ferramenta de envio:
     * RD Station, Mailchimp, Brevo, ActiveCampaign, API própria etc.
     *
     * Como a aula será enviada por e-mail, o ideal é:
     * 1. capturar os dados do formulário
     * 2. enviar para a automação
     * 3. disparar o e-mail com o acesso à aula
     */
  }

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#D57241] sm:h-4 sm:w-4" />
            Aula gratuita com Bruno Bastelli
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-black leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-6xl">
            Assista gratuitamente e comece a entender o que pode estar{' '}
            <span className="relative inline-block text-[#D57241]">
              travando sua loja
              <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/20" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg lg:text-xl">
            Antes de tentar vender mais, trocar plataforma, investir mais em
            tráfego ou criar novas campanhas, entenda o que sustenta uma
            operação de e-commerce de verdade.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
            Essa aula pode ser o primeiro passo para você parar de tomar
            decisões no escuro.
          </p>

          {/* Pontos rápidos */}
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              'Clareza para decidir',
              'Visão da operação',
              'Menos achismo',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#284A78]/10 bg-white/85 px-4 py-3 text-sm font-bold text-[#1F2937] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D57241]/30 hover:bg-white/95"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#D57241]" />
                {item}
              </div>
            ))}
          </div>

          {/* Card CTA com formulário */}
          <div className="mx-auto mt-9 max-w-3xl rounded-[2rem] border border-[#284A78]/10 bg-white/75 p-4 shadow-2xl shadow-black/5 backdrop-blur-sm sm:p-6">
            <div className="rounded-[1.5rem] bg-[#1F2937] px-5 py-7 text-center shadow-xl sm:px-8 sm:py-9">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D57241] text-[#F5F1EC] shadow-lg shadow-[#D57241]/20">
                <MonitorPlay className="h-7 w-7" />
              </div>

              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D57241]">
                Acesso gratuito à aula
              </p>

              <h3 className="mx-auto mt-3 max-w-2xl text-2xl font-black leading-tight text-[#F5F1EC] text-balance sm:text-3xl">
                Preencha seus dados para receber o acesso à aula.
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-[#F5F1EC]/70 sm:text-base">
                Você receberá gratuitamente a aula para começar a entender o que
                pode estar travando sua operação de e-commerce.
              </p>

              <form onSubmit={handleFormSubmit} className="mx-auto mt-7 max-w-xl space-y-4 text-left">
                <div>
                  <label
                    htmlFor="cta-nome"
                    className="mb-2 block text-sm font-bold text-[#F5F1EC]"
                  >
                    Nome
                  </label>

                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#D57241]" />
                    <input
                      id="cta-nome"
                      name="nome"
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-12 pr-4 text-sm font-medium text-[#F5F1EC] outline-none transition-all placeholder:text-[#F5F1EC]/40 focus:border-[#D57241] focus:bg-white/15 focus:ring-4 focus:ring-[#D57241]/15"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cta-email"
                    className="mb-2 block text-sm font-bold text-[#F5F1EC]"
                  >
                    E-mail
                  </label>

                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#D57241]" />
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      required
                      placeholder="seuemail@email.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-12 pr-4 text-sm font-medium text-[#F5F1EC] outline-none transition-all placeholder:text-[#F5F1EC]/40 focus:border-[#D57241] focus:bg-white/15 focus:ring-4 focus:ring-[#D57241]/15"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cta-whatsapp"
                    className="mb-2 block text-sm font-bold text-[#F5F1EC]"
                  >
                    WhatsApp
                  </label>

                  <div className="relative">
                    <MessageCircle className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#D57241]" />
                    <input
                      id="cta-whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      className="w-full rounded-2xl border border-white/10 bg-white/10 py-4 pl-12 pr-4 text-sm font-medium text-[#F5F1EC] outline-none transition-all placeholder:text-[#F5F1EC]/40 focus:border-[#D57241] focus:bg-white/15 focus:ring-4 focus:ring-[#D57241]/15"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-2xl hover:shadow-[#D57241]/40 sm:text-lg"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">{ctaLabel}</span>
                  <ArrowRight className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="text-center text-xs font-semibold leading-relaxed text-[#F5F1EC]/60 sm:text-sm">
                  Preencha seus dados para receber o acesso à aula.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}