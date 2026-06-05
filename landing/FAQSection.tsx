"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Esse curso serve para quem está começando?",
    answer: "Sim. O curso foi pensado para quem está começando e quer entender os fundamentos antes de investir em plataforma, tráfego ou outras soluções. É um ponto de partida para tomar decisões mais conscientes."
  },
  {
    question: "Serve para quem já tem loja virtual?",
    answer: "Sim. Se você já tem uma loja mas sente que falta clareza sobre a operação ou não entende por que as vendas não acontecem como esperado, o curso ajuda a organizar a visão do negócio."
  },
  {
    question: "É mais um curso genérico de e-commerce?",
    answer: "Não. O curso é baseado na metodologia da Roda do E-commerce, desenvolvida a partir de mais de 15 anos de experiência prática. O foco é em fundamentos e visão de negócio, não em promessas ou táticas isoladas."
  },
  {
    question: "Preciso assistir algum vídeo antes de comprar?",
    answer: "Não. Esta página foi pensada para uma compra direta e objetiva. Todas as informações que você precisa estão aqui."
  },
  {
    question: "Vou aprender tráfego pago?",
    answer: "O curso aborda marketing como um dos pilares da operação, mas não é um curso específico de tráfego pago. O foco é em entender como o marketing se encaixa na operação como um todo."
  },
  {
    question: "O curso promete vender mais automaticamente?",
    answer: "Não. Este curso ensina fundamentos para você tomar decisões melhores. Os resultados dependem da aplicação do conhecimento e do contexto de cada negócio."
  },
  {
    question: "Tem garantia?",
    answer: "A garantia será informada na área de checkout, conforme configuração final da oferta. Consulte os termos antes de finalizar a compra."
  },
  {
    question: "Tem certificado?",
    answer: "As informações sobre certificado serão confirmadas na área de membros após a compra."
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer: "O período de acesso será informado na área de checkout e na área de membros após a compra."
  },
  {
    question: "O que é o order bump?",
    answer: "O order bump é o Trello de Planejamento Comercial para E-commerce, um modelo prático que você pode adicionar à sua compra por R$ 47. É opcional e aparece na finalização do checkout."
  },
  {
    question: "Como acesso o curso depois da compra?",
    answer: "As instruções de acesso serão enviadas pela plataforma de pagamento ou área de membros definida para o lançamento. Você receberá um e-mail com os próximos passos."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Perguntas Frequentes
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground mt-4 mb-4 text-balance">
            Tire suas dúvidas
          </h2>
          <p className="text-lg text-muted-foreground">
            Respostas para as perguntas mais comuns sobre o curso.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
