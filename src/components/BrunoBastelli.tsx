import {
  ArrowRight,
  CheckCircle2,
  Award,
  BarChart3,
  Code2,
  ShoppingCart,
} from 'lucide-react'
import { siteData } from '@/data/data'
import { events } from '@/utils/analytics'

export function BrunoBastelli() {
  const handleCtaClick = () => {
    events.ctaClick(siteData.ctaSecundario1)
    events.checkoutClick()
  }

  const highlights = [
    'Atendimento',
    'Pedidos',
    'Expedição',
    'Integrações',
    'UX',
    'Tráfego',
    'Analytics',
  ]

  const certifications = [
    { icon: BarChart3, title: 'Analytics', label: 'Certificação e leitura de dados' },
    { icon: Code2, title: 'HTML/CSS', label: 'Base técnica para projetos digitais' },
    { icon: ShoppingCart, title: 'E-commerce', label: 'Vivência prática em operação real' },
    { icon: Award, title: 'ABComm', label: 'Reconhecimento profissional' },
  ]

  return (
    <section
      id="curso"
      className="relative overflow-hidden bg-[#F5F1EC] py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(213,114,65,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(40,74,120,0.08),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          {/* Esquerda */}
          <div className="relative">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-4xl font-black uppercase tracking-[0.12em] text-[#1F2937] sm:text-5xl">
                  Bruno
                </p>
                <p className="mt-2 text-4xl font-black uppercase tracking-[0.12em] text-[#1F2937] sm:text-5xl">
                  Bastelli
                </p>
              </div>

              <div className="hidden h-24 w-px bg-[#D57241] sm:block" />

              <div className="max-w-xs">
                <p className="text-2xl font-medium leading-tight text-[#1F2937] sm:text-3xl">
                  Vivência em
                </p>
                <p className="text-2xl font-medium leading-tight text-[#1F2937] sm:text-3xl">
                  E-commerce há mais de{' '}
                  <span className="font-black text-[#D57241]">15 anos!</span>
                </p>
              </div>
            </div>

            <div className="mb-8 h-px w-full max-w-xl border-t border-dashed border-[#1F2937]/25" />

            <div className="max-w-2xl space-y-6">
              <p className="text-lg leading-relaxed text-[#1F2937] sm:text-xl">
                Desde 2010 trabalhando com Comércio Eletrônico — E-commerce —
                com <strong>experiência prática, não apenas teoria</strong>.
              </p>

              <p className="text-lg leading-relaxed text-[#1F2937]/80 sm:text-xl">
                Gerenciamento completo de projetos, passando por áreas como
                atendimento, pedidos, expedição, integrações, desenvolvimento,
                UX, tráfego e analytics.
              </p>

              <p className="text-lg leading-relaxed text-[#1F2937]/80 sm:text-xl">
                Possui{' '}
                <strong className="text-[#D57241]">
                  certificação em Analytics
                </strong>{' '}
                e conhecimentos em HTML/CSS, automação de marketing e gestão de
                projetos.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-[#284A78]/10 bg-white px-4 py-2 text-sm font-bold text-[#1F2937] shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#D57241]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9">
              <a
                href={siteData.checkoutUrl}
                onClick={handleCtaClick}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full max-w-sm items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#D57241] px-6 py-4 text-center text-sm font-bold text-[#F5F1EC] shadow-lg shadow-[#D57241]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c56337] hover:shadow-xl hover:shadow-[#D57241]/30 sm:w-auto sm:max-w-none sm:text-base"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{siteData.ctaSecundario1}</span>
                <ArrowRight className="relative h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Direita */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border border-dashed border-[#D57241]/40" />
            <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full border border-dashed border-[#284A78]/25" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white p-3 shadow-2xl shadow-black/10">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#1F2937]">
                <img
                  src="/bruno-bastelli.png"
                  alt="Bruno Bastelli"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white shadow-xl shadow-black/5">
          <div className="grid lg:grid-cols-[auto_1fr]">
            <div className="flex items-center justify-center bg-[#1F2937] px-6 py-7">
              <Award className="h-8 w-8 text-[#D57241]" />
            </div>

            <div className="px-5 py-6 text-center sm:px-8 sm:py-7 lg:text-left">
              <p className="text-base font-black leading-relaxed text-[#1F2937] sm:text-lg lg:text-xl">
                Foi dessa vivência que nasceu o Introdução ao E-commerce
                Bastelli.
              </p>

              <p className="mt-3 text-sm font-medium leading-relaxed text-[#1F2937]/65 sm:text-base">
                Um curso criado para mostrar o que existe por trás de uma loja
                virtual de verdade e ajudar você a parar de vender no escuro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}