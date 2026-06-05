export const siteData = {
  empresa: 'Bastelli Consultoria',
  projeto: 'Introdução ao E-commerce Bastelli',
  especialista: 'Bruno Bastelli',
  
  // URLs e contato
  checkoutUrl: import.meta.env.VITE_CHECKOUT_URL || 'https://pay.hotmart.com/G100638464G?off=fvkwnua1&checkoutMode=10&bid=1780434842803',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '',
  whatsappMessage:
    import.meta.env.VITE_WHATSAPP_MESSAGE ||
    'Olá, quero saber mais sobre o curso Introdução ao E-commerce Bastelli.',
  vslUrl:
    import.meta.env.VITE_VSL_URL ||
    'https://www.youtube.com/embed/n6Ite3WNMKg?autoplay=1',
  
  // Hero
  eyebrow: 'Introdução ao E-commerce Bastelli',
  headline: 'E-commerce não vende sozinho',
  subheadline:  'Aprenda os fundamentos que sustentam uma operação de e-commerce e pare de tomar decisões no escuro antes de abrir, ajustar ou crescer sua loja virtual.',
  heroTextoComplementar: 'Antes de colocar mais dinheiro em anúncios, plataforma ou novas "soluções", assista esse vídeo.',
  heroTextoVideo: 'Nele, Bruno Bastelli mostra por que muitos lojistas continuam travados mesmo se esforçando todos os dias — e o que você precisa entender para começar a enxergar sua loja como uma operação de verdade.',
  heroFraseImpacto: 'O problema pode não ser falta de esforço. Pode ser falta de visão sobre o que realmente sustenta um e-commerce.',
  heroTextoApoio: 'Curso + materiais práticos para estudar, diagnosticar e aplicar no seu negócio.',
  
  // Provas de confiança
  proofStats: [
    { value: '+10', label: 'anos de experiência prática' },
    { value: '+200', label: 'clientes atendidos em todo o Brasil' },
  ],
  
  // CTAs
  ctaPrincipal: 'Comprar agora',
  ctaSecundario1: 'Quero entender meu e-commerce de verdade',
  ctaSecundario2: 'Quero começar pelo caminho certo',
  ctaSecundario3: 'Entrar agora no curso',
  
  // Preços
  precoLancamento: 'R$ 197',
  precoOficial: 'R$ 397',
  orderBump: {
    nome: 'Trello de Planejamento Comercial para E-commerce',
    preco: 'R$ 47',
  },
  
  // Frases obrigatórias da Bastelli (para seção de verdade)
  frasesObrigatorias: [
    'Porque e-commerce não é só plataforma.',
    'Não é só tráfego.',
    'Não é só Instagram.',
    'Não é só produto.',
    'E-commerce é uma operação.',
    'E operação precisa de planejamento, loja, marketing, processos, dados, atendimento, logística e consistência funcionando juntos.',
  ],
  
  // Frases da virada de chave
  frasesVirada: [
    'Porque e-commerce não é só plataforma.',
    'Não é só tráfego.',
    'Não é só Instagram.',
    'Não é só produto.',
    'E-commerce é uma operação.',
    'E operação precisa de planejamento, loja, marketing, processos, dados, atendimento, logística e consistência funcionando juntos.',
  ],
  
  // Roda do E-commerce
  metodologia: [
    {
      numero: '01',
      titulo: 'Planejamento',
      descricao: 'Metas, calendário comercial, campanhas, indicadores, canais, equipe e direção estratégica.',
    },
    {
      numero: '02',
      titulo: 'Loja',
      descricao: 'Layout, experiência de compra, produtos, descrições, banners, SEO, páginas e conversão.',
    },
    {
      numero: '03',
      titulo: 'Operação',
      descricao: 'Pedidos, estoque, ERP, logística, expedição, atendimento, processos e rotina interna.',
    },
    {
      numero: '04',
      titulo: 'Marketing',
      descricao: 'Tráfego, conteúdo, posicionamento, dados, remarketing, campanhas e relacionamento.',
    },
  ],
  
  // O que vai aprender - módulos
  modulos: [
    {
      titulo: 'Planejamento e metas',
      descricao: 'Como pensar o e-commerce como negócio, definir objetivos mais claros e acompanhar os indicadores certos.',
    },
    {
      titulo: 'Plataforma e estrutura da loja',
      descricao: 'O que observar antes de escolher, trocar ou ajustar uma plataforma, pensando em gestão, experiência e crescimento.',
    },
    {
      titulo: 'Produtos, fotos, descrições e experiência de compra',
      descricao: 'Como cadastro, imagem, texto, navegação e página de produto influenciam a percepção de valor e a conversão.',
    },
    {
      titulo: 'Pagamentos, frete, logística e operação',
      descricao: 'Como meios de pagamento, envio, ERP, estoque e rotina impactam diretamente a experiência do cliente.',
    },
    {
      titulo: 'Marketing, tráfego e dados',
      descricao: 'Como enxergar tráfego pago, conteúdo, campanhas e tracking como partes de uma estratégia maior — e não como soluções isoladas.',
    },
    {
      titulo: 'Atendimento, retenção e crescimento',
      descricao: 'Como pensar relacionamento, recompra, suporte e melhoria contínua para construir uma operação mais saudável.',
    },
  ],
  
  // Bônus
  bonus: [
    {
      titulo: 'E-book Introdução ao E-commerce',
      descricao: 'Um material de apoio para revisar os conceitos mais importantes do curso e consultar sempre que precisar retomar a base.',
      imagem: '/bonus/checklist.png',
    },
    {
      titulo: 'E-book Roda do E-commerce',
      descricao: 'Um material estratégico para analisar sua loja pelos quatro pilares da metodologia Bastelli: Planejamento, Loja, Operação e Marketing.',
      imagem: '/bonus/planilha.png',
    },
    {
      titulo: 'Manual de Boas Práticas para E-commerce',
      descricao: 'Um guia prático para melhorar pontos que impactam a percepção de valor da loja, como fotos, banners, descrições, páginas de produto e organização visual.',
      imagem: '',
    },
    {
      titulo: 'Ferramenta Como Definir Metas Inteligentes',
      descricao: 'Um recurso para transformar objetivos soltos, como "quero vender mais", em metas mais claras, acompanháveis e conectadas com os indicadores certos.',
      imagem: '',
    },
    {
      titulo: 'Trello de Campanhas e Ações de Venda',
      descricao: 'Um painel pronto para organizar campanhas comerciais, datas importantes, ações promocionais, tarefas e acompanhamento das iniciativas de venda.',
      imagem: '',
    },
    {
      titulo: 'Planilha com mais de 50 ideias de ofertas validadas',
      descricao: 'Uma planilha complementar, entregue junto com o Trello, para ajudar você a criar campanhas com mais repertório e adaptar ideias de ofertas para diferentes momentos do seu e-commerce.',
      imagem: '',
    },
  ],
  
  // Para quem é
  paraQuemE: [
    'Donos de loja física que querem vender online',
    'Quem vende pelo Instagram, WhatsApp ou marketplace e quer estruturar melhor',
    'Lojistas que já têm e-commerce, mas não sabem por que vendem pouco',
    'Empreendedores que querem começar com mais clareza',
  ],
  
  // Para quem não é
  paraQuemNaoE: [
    'Quem procura promessa de dinheiro rápido',
    'Quem quer uma fórmula milagrosa',
    'Quem acredita que e-commerce vende sozinho',
    'Quem não quer estudar fundamentos nem aplicar melhorias na operação',
  ],
  
  // FAQ
  faq: [
    {
      pergunta: 'O curso é para quem está começando?',
      resposta: 'Sim. O treinamento foi pensado para quem quer entender os fundamentos do e-commerce antes de abrir, ajustar ou tentar crescer uma loja virtual.',
    },
    {
      pergunta: 'Serve para quem já tem loja virtual?',
      resposta: 'Sim. Se você já tem loja, o curso pode ajudar a enxergar pontos que talvez estejam travando sua operação, como planejamento, loja, operação, marketing, dados e experiência de compra.',
    },
    {
      pergunta: 'Preciso ter uma loja virtual para fazer?',
      resposta: 'Não necessariamente. O curso também serve para quem ainda está planejando entrar no e-commerce e quer começar com mais clareza.',
    },
    {
      pergunta: 'O curso ensina tráfego pago?',
      resposta: 'O curso apresenta conceitos importantes sobre marketing, tráfego e dados dentro da operação de e-commerce. Ele não é uma formação avançada em tráfego pago, mas ajuda você a entender o papel do tráfego dentro da estratégia.',
    },
    {
      pergunta: 'O curso promete que minha loja vai vender mais?',
      resposta: 'Não. A Bastelli não trabalha com promessa de resultado milagroso. O objetivo do curso é ensinar fundamentos, dar clareza e ajudar você a tomar decisões melhores sobre sua operação digital.',
    },
    {
      pergunta: 'Quais bônus estão inclusos?',
      resposta: 'Você recebe o E-book Introdução ao E-commerce, o E-book Roda do E-commerce, o Manual de Boas Práticas, a Ferramenta de Metas Inteligentes, o Trello de Campanhas e Ações de Venda e a Planilha com mais de 50 ideias de ofertas validadas.',
    },
    {
      pergunta: 'Como recebo o acesso?',
      resposta: 'Após a confirmação da compra, você recebe as instruções de acesso ao curso e aos materiais pela plataforma definida para entrega.',
    },
    {
      pergunta: 'Por quanto tempo terei acesso?',
      resposta: 'Esse ponto precisa ser definido antes da publicação da página.',
    },
    {
      pergunta: 'Tem garantia?',
      resposta: 'Sim. Você terá um prazo de garantia para acessar o conteúdo e avaliar se o treinamento faz sentido para você. Se dentro desse período você entender que o curso não é o que precisava agora, basta solicitar o reembolso conforme as condições da plataforma.',
    },
  ],
  
  // Autoridade
  autoridade: {
    titulo: 'Não aprendi e-commerce olhando de fora. Aprendi resolvendo problemas reais na prática!',
    texto: [
      'Eu sou Bruno Bastelli, fundador da Bastelli Consultoria E-commerce e Performance.',
      'Antes de empreender, minha vida era o futebol. Depois de problemas de saúde, precisei interromper essa trajetória e recomeçar do zero.',
      'Foi nesse recomeço que tive meu primeiro contato forte com o digital, trabalhando no atendimento da Kabum. Ali eu comecei a entender que uma venda online não acontece só porque existe um site no ar.',
      'Existe uma operação inteira por trás: produto, pedido, pagamento, entrega, atendimento, expectativa e experiência.',
      'Depois disso, mergulhei em programação, design, logística, marketing, tráfego, loja virtual, performance, operação e estratégia.',
      'Com o tempo, criei a Bastelli Consultoria, uma empresa especializada em e-commerce, construída com mais de 10 anos de experiência prática no mercado digital.',
      'Hoje, a Bastelli atua com criação de lojas virtuais, gestão de tráfego, consultoria, estruturação de operação digital e estratégias de crescimento para e-commerces.',
      'Trabalhamos com limite de clientes porque preferimos profundidade, proximidade e qualidade em vez de volume.',
    ],
    destaque: 'Como fruto desse trabalho, dos resultados entregues e da nossa atuação no mercado, Bruno Bastelli foi reconhecido pela ABComm como Melhor Profissional de E-commerce do Interior de São Paulo.',
    fechamento: 'Foi dessa vivência que nasceu o Introdução ao E-commerce Bastelli. Um curso criado para mostrar o que existe por trás de uma loja virtual de verdade e ajudar você a parar de vender no escuro.',
  },
}
