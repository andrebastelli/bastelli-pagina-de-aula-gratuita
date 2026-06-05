import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Layers3,
  Mail,
  Phone,
  User,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { events } from '@/utils/analytics'

export function HeroVSL() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    events.ctaClick('Cadastro Aula Gratuita')

    // Futuramente integrar aqui com RD Station, CRM, Google Sheets ou API.
    console.log('Lead aula gratuita:', formData)

    navigate('/Obrigado')
  }

  const benefits = [
    'Entenda por que e-commerce não vende sozinho',
    'Descubra o que pode estar travando sua loja virtual',
    'Veja os pilares antes de investir mais em tráfego',
  ]

  return (
    <section className="relative overflow-hidden bg-[#F5F1EC] pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(40,74,120,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(40,74,120,0.055)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="pointer-events-none absolute top-20 -right-32 h-96 w-96 rounded-full bg-[#284A78]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
          {/* Conteúdo principal */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/15 bg-white/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#D57241]" />
              Aula gratuita com Bruno Bastelli
            </div>

            <h1 className="mx-auto mt-5 max-w-3xl text-[2.35rem] font-black leading-[0.98] tracking-[-0.04em] text-[#1F2937] text-balance sm:text-6xl lg:mx-0 lg:text-7xl">
              E-commerce não vende{' '}
              <span className="relative inline-block text-[#D57241]">
                sozinho
                <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#D57241]/18" />
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-[#1F2937]/75 text-pretty sm:text-lg lg:mx-0 lg:text-xl">
              Assista gratuitamente à aula e entenda o que você precisa revisar antes de abrir, corrigir ou tentar crescer sua loja virtual.
            </p>

            <div className="mx-auto mt-6 max-w-xl space-y-3 lg:mx-0">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#284A78]/10 bg-white/75 p-4 text-left shadow-sm backdrop-blur-sm"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D57241]/12 text-[#D57241]">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>

                  <p className="text-sm font-semibold leading-relaxed text-[#1F2937]/75 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#284A78]/10 bg-white/70 px-5 py-4 shadow-sm backdrop-blur-sm lg:max-w-xl">
              <p className="text-sm font-bold leading-relaxed text-[#1F2937] sm:text-base">
                Antes de colocar mais dinheiro em plataforma, anúncios ou novas soluções, entenda se sua operação está preparada para vender.
              </p>
            </div>
          </div>

          {/* Card formulário */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#284A78]/15 bg-white/90 p-3 shadow-2xl backdrop-blur-md sm:p-4">
              <div className="rounded-[1.5rem] bg-[#1F2937] px-5 py-6 text-center text-[#F5F1EC]">
                <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-[#F5F1EC]/15 bg-[#F5F1EC]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-[#F5F1EC]/80">
                  Aula gratuita
                </div>

                <h2 className="text-2xl font-black leading-tight text-balance sm:text-3xl">
                  Receba acesso à aula gratuita
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-relaxed text-[#F5F1EC]/70 sm:text-base">
                  Preencha seus dados para acessar a aula “E-commerce não vende sozinho”.
                </p>
              </div>

              <div className="p-4 sm:p-5">
                <div className="mb-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] p-4">
                    <div className="flex items-center gap-2 text-[#284A78]">
                      <Layers3 className="h-5 w-5" />
                      <p className="text-xs font-black uppercase tracking-[0.12em]">
                        Método
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-bold text-[#1F2937]">
                      Roda do E-commerce
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] p-4">
                    <div className="flex items-center gap-2 text-[#D57241]">
                      <CheckCircle2 className="h-5 w-5" />
                      <p className="text-xs font-black uppercase tracking-[0.12em]">
                        Acesso
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-bold text-[#1F2937]">
                      Gratuito
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label
                      htmlFor="nome"
                      className="mb-1.5 block text-xs font-bold text-[#1F2937]/70"
                    >
                      Nome
                    </label>

                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#284A78]/45" />
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                        className="h-12 w-full rounded-xl border border-[#284A78]/10 bg-[#F5F1EC] pl-11 pr-4 text-sm font-medium text-[#1F2937] outline-none transition-all placeholder:text-[#1F2937]/35 focus:border-[#D57241] focus:ring-2 focus:ring-[#D57241]/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-bold text-[#1F2937]/70"
                    >
                      E-mail
                    </label>

                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#284A78]/45" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@email.com"
                        className="h-12 w-full rounded-xl border border-[#284A78]/10 bg-[#F5F1EC] pl-11 pr-4 text-sm font-medium text-[#1F2937] outline-none transition-all placeholder:text-[#1F2937]/35 focus:border-[#D57241] focus:ring-2 focus:ring-[#D57241]/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="mb-1.5 block text-xs font-bold text-[#1F2937]/70"
                    >
                      WhatsApp
                    </label>

                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#284A78]/45" />
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="h-12 w-full rounded-xl border border-[#284A78]/10 bg-[#F5F1EC] pl-11 pr-4 text-sm font-medium text-[#1F2937] outline-none transition-all placeholder:text-[#1F2937]/35 focus:border-[#D57241] focus:ring-2 focus:ring-[#D57241]/15"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#D57241] px-6 py-4 text-center text-base font-black text-[#F5F1EC] shadow-xl shadow-[#D57241]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337]"
                  >
                    <span>Quero acessar a aula gratuita</span>
                    <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-xs font-medium leading-relaxed text-[#1F2937]/55">
                    Após o cadastro, você será direcionado para a página de obrigado.
                  </p>
                </form>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#284A78]/10 bg-[#F5F1EC] p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#284A78]" />
                  <p className="text-xs font-semibold leading-relaxed text-[#1F2937]/65 sm:text-sm">
                    Sem promessa de dinheiro rápido ou venda automática. A aula mostra fundamentos para tomar decisões melhores.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 left-1/2 w-[88%] -translate-x-1/2 rounded-full border border-[#F5F1EC] bg-[#284A78] px-4 py-2 text-center text-[10px] font-black uppercase tracking-[0.14em] text-[#F5F1EC] shadow-xl sm:w-auto sm:text-xs">
              Antes de abrir ou tentar crescer sua loja virtual
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}