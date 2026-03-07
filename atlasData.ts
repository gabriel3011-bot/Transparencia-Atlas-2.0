import { LucideIcon, Scale, Megaphone, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FinancialData {
  category: string;
  percentage: number;
}

export interface RoadmapItem {
  phase: string;
  task: string;
  date: string;
}

export interface Partner {
  name: string;
  logoUrl: string;
  link: string;
}

export interface AtlasData {
  hero: {
    title: string;
    subtitle: string;
    lastUpdate: string;
  };
  about: {
    title: string;
    description: string;
    imageUrl: string;
  };
  dashboard: {
    financial: FinancialData[];
    roadmap: RoadmapItem[];
    legal: {
      title: string;
      description: string;
      icon: LucideIcon;
    };
    concept: {
      title: string;
      description: string;
      imageUrl: string;
    };
  };
  presidency: {
    title: string;
    message: string;
    author: string;
  };
  faq: FAQItem[];
  partners: Partner[];
  social: {
    instagram: string;
    linktree: string;
  };
}

export const atlasData: AtlasData = {
  hero: {
    title: "Transparência Atlas",
    subtitle: "Acompanhe em tempo real a gestão financeira e o progresso da nossa comissão de formatura. Compromisso com a clareza e a excelência.",
    lastUpdate: "Março/2026"
  },
  about: {
    title: "Quem Somos",
    description: "A Comissão Ibmec 26 foi formada com o propósito de transformar o sonho da formatura em uma experiência inesquecível. Nossa gestão é pautada na transparência, responsabilidade fiscal e na busca incessante pela qualidade em cada detalhe do evento. Somos um grupo de estudantes dedicados a criar memórias que durarão para sempre.",
    imageUrl: "/images/DSCF1207.JPG"
  },
  dashboard: {
    financial: [
      { category: "Lançamento", percentage: 5 },
      { category: "Pré-eventos", percentage: 10 },
      { category: "Festa de Formatura", percentage: 79 },
      { category: "After Party", percentage: 7 }
    ],
    roadmap: [
      { phase: "Ativações & Pré", task: "Formação da Comissão", date: "Jul 2025" },
      { phase: "Ativações & Pré", task: "Empresa Escolhida", date: "Nov 2025" },
      { phase: "Ativações & Pré", task: "Identidade Visual Base", date: "Jan 2026" },
      { phase: "Pré Lançamento", task: "Criação do Balção de Ativações", date: "Fev 2026" },
      { phase: "Pré Lançamento", task: "Ativações nas Unidades Paulista e Faria Lima", date: "Mar 2026" },
      { phase: "Lançamento", task: "Live de Lançamento", date: "Mar 2026" }
    ],
    legal: {
      title: "Jurídico",
      description: "Garantimos a integridade de todas as etapas da formatura através de uma governança jurídica rigorosa. Todos os contratos firmados com fornecedores de serviços, espaços e entretenimento foram minuciosamente revisados por nossa equipe legal e já se encontram devidamente assinados. Este processo elimina riscos, assegura o cumprimento integral de todas as cláusulas e oferece proteção jurídica total para os alunos, pais e para a comissão organizadora.",
      icon: Scale
    },
    concept: {
      title: "O Conceito",
      description: `O projeto parte da ideia de que, por trás da imagem grandiosa das grandes cidades, com seus prédios iluminados, negócios e figuras de poder, existem relações, encontros e decisões que acontecem de forma mais reservada, mas que são responsáveis por mover tudo o que aparece em público.

A narrativa propõe enxergar a turma como parte dessa lógica: um grupo que, ao longo da jornada acadêmica, construiu conexões, confiança e objetivos em comum. Nesse contexto, elementos como networking, mercado e carreira são representados de forma simbólica como um tabuleiro estratégico, no qual as relações e experiências compartilhadas têm um papel central.

Assim, o conceito do projeto transforma a formatura em uma grande celebração dessa rede formada ao longo dos anos. A proposta valoriza a ideia de exclusividade, elegância e pertencimento, reforçando que os laços criados pela turma são o que sustenta suas futuras conquistas. A noite de formatura se torna, portanto, o momento que marca e celebra essa irmandade construída nos bastidores da jornada universitária.`,
      imageUrl: "/images/IBMEC26.jpg"
    }
  },
  presidency: {
    title: "Palavra da Presidência",
    message: "Nosso compromisso, enquanto comissão, é trabalhar com seriedade, transparência e dedicação para que a formatura represente, da melhor forma possível, o esforço coletivo de todos. Cada decisão tomada busca garantir que esse momento seja marcante, organizado e digno da trajetória que construímos juntos.Contem com a gente!",
    author: "Beatriz Torresi e Maria Fernanda - Presidência da Comissão Ibmec 26"
  },
  faq: [
    {
      question: "Como faço a minha adesão?",
      answer: "A adesão será feita pela plataforma da Blacktag, como normalmente ocorre nas festas de formatura. Por meio dela, o formando poderá selecionar a mesa e escolher a forma de pagamento."
    },
    {
      question: "Quais convites estão inclusos na minha adesão?",
      answer: "Cada mesa dá direito a 10 convites no total, sendo 1 destinado ao formando e 9 aos seus convidados."
    },
    {
      question: "Quando será definida a atração principal?",
      answer: "A votação para a atração principal ocorrerá no segundo semestre de 2026, após a consolidação do orçamento."
    },
    {
      question: "Posso parcelar minha adesão?",
      answer: `💳 Cartão de crédito recorrente
• Parcelamento em até 12x
• Sem juros para compras feitas até 10/03/2026

🧾 Boleto ou Pix
• Parcelamento em até 12x
• Sem juros para compras feitas até 10/03/2026

💳 Cartão de crédito tradicional
• Parcelamento em até 12x
• O número de parcelas sem juros diminui conforme a data do baile se aproxima

📌 Importante:
Se alguma parcela ultrapassar o mês do baile, haverá cobrança de juros em todas as parcelas.
Por isso, o limite de 10/03 garante que quem parcelar em 12x consiga terminar de pagar antes do mês do baile.

Taxas
• Taxa transacional do cartão de crédito: 2,99%
• Taxa de emissão para boleto e Pix: R$ 2,50`
    }
  ],
  partners: [
    {
      name: "Blacktag Formaturas",
      logoUrl: "/images/Blacktag.png",
      link: "https://blacktagformaturas.com.br"
    },
    {
      name: "Toy Formaturas",
      logoUrl: "/images/toy sem fundp.png",
      link: "https://www.instagram.com/toy.formaturas/"
    },
    {
      name: "Studio V",
      logoUrl: "/images/Logo - Studio V - Branco.png",
      link: "https://www.instagram.com/studiov_sp/"
    }
  ],
  social: {
    instagram: "https://www.instagram.com/ibmec2026?igsh=Ym5iN3pzZWxhZGlv",
    linktree: "https://linktr.ee/ibmec2026?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQV2LZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeFKI8o4TI-RugTHR-vSY4D6meYcDpZxDx7AeFuPnrDBewXm2_AGkRSqlRKLQ_aem_b6EDbDzV4-wY_DRV_zl5jA"
  }
};
