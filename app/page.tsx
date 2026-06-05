import {
  Header,
  HeroDirect,
  KeyPhrasesSection,
  ProblemSection,
  SolutionSection,
  CourseContentSection,
  EcommerceWheelSection,
  BonusSection,
  AudienceSection,
  OfferSection,
  FAQSection,
  FinalCTASection,
  Footer,
} from '@/components/landing'

// JSON-LD for FAQ Page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Esse curso serve para quem está começando?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. O curso foi pensado para quem está começando e quer entender os fundamentos antes de investir em plataforma, tráfego ou outras soluções."
      }
    },
    {
      "@type": "Question",
      "name": "Serve para quem já tem loja virtual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Se você já tem uma loja mas sente que falta clareza sobre a operação ou não entende por que as vendas não acontecem como esperado, o curso ajuda a organizar a visão do negócio."
      }
    },
    {
      "@type": "Question",
      "name": "É mais um curso genérico de e-commerce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. O curso é baseado na metodologia da Roda do E-commerce, desenvolvida a partir de mais de 15 anos de experiência prática."
      }
    },
    {
      "@type": "Question",
      "name": "O curso promete vender mais automaticamente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Este curso ensina fundamentos para você tomar decisões melhores. Os resultados dependem da aplicação do conhecimento e do contexto de cada negócio."
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <Header />
      <main>
        <HeroDirect />
        <KeyPhrasesSection />
        <ProblemSection />
        <SolutionSection />
        <CourseContentSection />
        <EcommerceWheelSection />
        <BonusSection />
        <AudienceSection />
        <OfferSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
