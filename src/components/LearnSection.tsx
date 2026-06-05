import {
  BookOpen,
  AlertTriangle,
  Workflow,
  Plug,
  Repeat,
  BriefcaseBusiness,
  MonitorSmartphone,
  CreditCard,
  ShieldAlert,
  LayoutTemplate,
  MailCheck,
  Flag,
} from 'lucide-react'

export function LearnSection() {
  const modules = [
    {
      number: '01',
      icon: BookOpen,
      title: 'Boas-vindas e visão geral',
      description:
        'Entenda a proposta do curso, a experiência prática por trás do conteúdo e como usar o treinamento para evoluir sua operação.',
    },
    {
      number: '02',
      icon: AlertTriangle,
      title: 'Como uma empresa quebra vendendo',
      description:
        'Aprenda por que vender mais nem sempre resolve o problema e como processos ruins podem comprometer caixa, entrega e reputação.',
    },
    {
      number: '03',
      icon: Workflow,
      title: 'A Roda do E-commerce',
      description:
        'Conheça os pilares que sustentam uma loja virtual: planejamento, loja, operação, marketing, metas, equipe e posicionamento.',
    },
    {
      number: '04',
      icon: Plug,
      title: 'Parceiros digitais',
      description:
        'Veja como escolher plataformas, meios de pagamento, logística, ERPs e ferramentas sem transformar fornecedores em gargalos.',
    },
    {
      number: '05',
      icon: Repeat,
      title: 'Modalidades comerciais',
      description:
        'Entenda modelos como B2C, B2B, D2C, marketplace, loja física integrada, prateleira infinita e e-commerce unificado.',
    },
    {
      number: '06',
      icon: BriefcaseBusiness,
      title: 'Gestão de e-commerce',
      description:
        'Entenda o papel do gestor no dia a dia: metas, relatórios, equipe, fornecedores, produtividade e tomada de decisão.',
    },
    {
      number: '07',
      icon: MonitorSmartphone,
      title: 'Plataforma de e-commerce',
      description:
        'Aprenda como funciona o front-end, o back-end, as configurações da loja, integrações e pontos críticos da escolha da plataforma.',
    },
    {
      number: '08',
      icon: CreditCard,
      title: 'Meios de pagamento',
      description:
        'Conheça os principais formatos de pagamento, seus impactos na conversão, taxas, operação e experiência de compra.',
    },
    {
      number: '09',
      icon: ShieldAlert,
      title: 'Fraudes e chargeback',
      description:
        'Entenda riscos de fraude, cancelamentos, chargeback, prevenção e como proteger a operação financeira da loja.',
    },
    {
      number: '10',
      icon: LayoutTemplate,
      title: 'Experiência do site',
      description:
        'Veja como visual, conteúdo, cadastro, navegação, SEO, UX e front-end impactam a conversão e a confiança do cliente.',
    },
    {
      number: '11',
      icon: MailCheck,
      title: 'E-mails transacionais',
      description:
        'Aprenda a importância dos e-mails automáticos na jornada de compra, recuperação, confirmação, senha, pedido e relacionamento.',
    },
    {
      number: '12',
      icon: Flag,
      title: 'Fechamento e aplicação',
      description:
        'Conecte todos os módulos, revise os pilares da operação e entenda como aplicar o conhecimento de forma prática no negócio.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-grid py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#284A78]/15 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#284A78] shadow-sm backdrop-blur-sm sm:text-xs">
            Conteúdo do treinamento
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#1F2937] text-balance sm:text-4xl lg:text-5xl">
            Os módulos do curso
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#1F2937]/70 text-pretty sm:text-lg">
            Uma jornada prática para entender o e-commerce como uma operação completa, passando por estratégia, plataforma, gestão, pagamentos, segurança, experiência e aplicação.
          </p>
        </div>

        {/* Destaque superior */}
        <div className="mx-auto mb-8 grid max-w-4xl gap-3 sm:grid-cols-3">
          {[
            '12 módulos práticos',
            'Mais de 4h de conteúdo',
            'Visão operacional completa',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#284A78]/10 bg-white/85 px-4 py-4 text-center text-sm font-bold text-[#1F2937] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#284A78]/25 hover:bg-white/95"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Módulos */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.number}
              className="group relative overflow-hidden rounded-3xl border border-[#284A78]/10 bg-white/85 p-5 text-[#1F2937] shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#284A78]/25 hover:bg-white/95 hover:shadow-xl sm:p-6"
            >
              <div className="absolute -right-3 -top-5 text-7xl font-black text-[#284A78]/5 transition-colors duration-300 group-hover:text-[#D57241]/10">
                {module.number}
              </div>

              <div className="relative mb-5 flex items-center justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#284A78]/15 bg-[#284A78]/10 text-[#284A78] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#284A78] group-hover:text-[#F5F1EC]">
                  <module.icon className="h-6 w-6" />
                </div>

                <span className="rounded-full border border-[#284A78]/10 bg-[#284A78]/5 px-3 py-1 text-xs font-black text-[#284A78]/75">
                  Módulo {module.number}
                </span>
              </div>

              <h3 className="relative text-lg font-bold leading-snug text-[#1F2937] sm:text-xl">
                {module.title}
              </h3>

              <p className="relative mt-3 text-sm leading-relaxed text-[#1F2937]/70 sm:text-base">
                {module.description}
              </p>

              <div className="relative mt-5 h-1 w-12 rounded-full bg-[#284A78]/20 transition-all duration-300 group-hover:w-20 group-hover:bg-[#D57241]/55" />
            </div>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#284A78]/10 bg-white/80 px-5 py-5 text-center shadow-sm backdrop-blur-sm sm:mt-12 sm:px-8 sm:py-6">
          <p className="text-base font-bold leading-relaxed text-[#1F2937] sm:text-lg">
            A proposta é sair da visão de “loja virtual” como algo isolado e passar a enxergar o e-commerce como uma empresa com processos, gestão, operação e estratégia.
          </p>
        </div>
      </div>
    </section>
  )
}