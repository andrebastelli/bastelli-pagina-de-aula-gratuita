import { siteData } from '@/data/data'
import {
  MessageCircle,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const whatsappUrl = siteData.whatsappNumber
    ? `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
        siteData.whatsappMessage
      )}`
    : '#'

  return (
    <footer className="relative overflow-hidden bg-grid py-10 sm:py-12 lg:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#284A78]/10 bg-white/90 shadow-2xl shadow-black/5 backdrop-blur-sm">
          {/* Topo */}
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10">
            {/* Marca */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="/logo-a.png"
                  alt={siteData.empresa}
                  className="h-11 w-auto object-contain sm:h-12"
                />
              </div>

              <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-[#1F2937]/65 sm:text-base lg:mx-0">
                E-commerce tratado como operação, estratégia e gestão — não como
                promessa fácil.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {['Fundamentos', 'Clareza', 'Estratégia'].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#284A78]/10 bg-[#F5F1EC] px-3 py-1.5 text-xs font-bold text-[#1F2937]/70"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D57241]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-col items-center gap-4 lg:items-end">
              {siteData.whatsappNumber && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl bg-[#284A78] px-5 py-3.5 text-sm font-black text-[#F5F1EC] shadow-lg shadow-[#284A78]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1F2937] sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar com suporte
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}

              <div className="flex flex-wrap items-center justify-center gap-4 text-center lg:justify-end">
                <a
                  href="#"
                  className="text-sm font-bold text-[#1F2937]/60 transition-colors hover:text-[#284A78]"
                >
                  Termos de Uso
                </a>

                <span className="hidden h-1 w-1 rounded-full bg-[#284A78]/25 sm:block" />

                <a
                  href="#"
                  className="text-sm font-bold text-[#1F2937]/60 transition-colors hover:text-[#284A78]"
                >
                  Política de Privacidade
                </a>
              </div>

              <p className="text-center text-xs font-medium leading-relaxed text-[#1F2937]/45 lg:text-right">
                © {currentYear} {siteData.empresa}. Todos os direitos
                reservados.
              </p>
            </div>
          </div>

          {/* Aviso legal */}
          <div className="border-t border-[#284A78]/10 bg-[#F5F1EC]/70 px-5 py-5 sm:px-8 lg:px-10">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#284A78]/10 bg-white text-[#284A78] shadow-sm">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <p className="text-xs font-medium leading-relaxed text-[#1F2937]/60 sm:text-sm">
                Este curso não promete resultados financeiros automáticos. O
                objetivo é ensinar fundamentos para tomada de decisão mais
                estratégica. Resultados dependem da aplicação individual e do
                contexto de cada negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}