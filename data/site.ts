export const locales = ['ko'] as const;
export type Locale = (typeof locales)[number];
export type PageKey = 'brand' | 'products' | 'rd' | 'partnership' | 'ai' | 'contact';

export const localeLabels: Record<Locale, string> = {
  ko: 'KO',
};

export const navKeys: PageKey[] = ['brand', 'products', 'rd', 'partnership', 'ai', 'contact'];

export const siteContent = {
  ko: {
    nav: {
      brand: '브랜드',
      products: '제품',
      rd: 'R&D',
      partnership: '제휴/공급 문의',
      ai: 'AI 상담',
      contact: '문의',
    },
    heroEyebrow: 'AHC 스타일 기반 GPCLUB 메인 초안',
    heroTitle: '프리미엄 스킨케어 포트폴리오의 첫인상',
    heroDesc: 'GPCLUB은 한국 본사와 정렬된 뷰티 포트폴리오를 베트남 시장과 글로벌 바이어에게 제안하는 B2B 뷰티 브랜드로 재구성됩니다.',
    primaryCta: '제품 보기',
    secondaryCta: '브랜드 보기',
    heroSlides: [
      {
        label: 'MAIN VISUAL',
        title: 'ESSENTIAL HYDRATION',
        subtitle: '브랜드 무드가 먼저 보이는 메인 비주얼',
        desc: '정보를 먼저 쌓는 것이 아니라, 프리미엄 스킨케어 브랜드의 첫인상을 먼저 전달하는 방향으로 설계합니다.',
        image: '/images/hero/hero-mask-model.jpg',
      },
      {
        label: 'SIGNATURE LINE',
        title: 'MASK PORTFOLIO',
        subtitle: '카테고리 대표 라인을 전면에 배치',
        desc: '대표 마스크 라인을 메인 비주얼과 연결해 브랜드의 시그니처 카테고리를 먼저 인지시키는 구조입니다.',
        image: '/images/hero/hero-mask-signature.jpg',
      },
      {
        label: 'SEASONAL CARE',
        title: 'SUN CARE',
        subtitle: '시즌 제안형 선케어 포지셔닝',
        desc: '시즌성 캠페인과 디스트리뷰터 제안에 맞는 선케어 라인을 메인 흐름에 연결합니다.',
        image: '/images/hero/hero-sun-care.jpg',
      },
    ],
    heroMetrics: [
      { label: '포지셔닝', value: 'Premium Beauty B2B' },
      { label: '시장', value: 'Vietnam · Global Buyer' },
      { label: '핵심', value: 'Brand Mood · Portfolio' },
    ],
    featureEyebrow: 'SIGNATURE EDIT',
    featureTitle: '브랜드가 먼저 보이고, 제품은 그 다음에 읽히는 구조',
    featureDesc: '이번 초안은 기존의 정보형 구조를 버리고, AHC식 메인 비주얼 중심 포맷을 먼저 맞추는 데 집중합니다.',
    featureCards: [
      {
        label: '01',
        title: '메인 비주얼 우선',
        desc: '첫 화면은 카드형 정보가 아니라 대형 비주얼 중심으로 보이게 설계합니다.',
      },
      {
        label: '02',
        title: '섹션 수 최소화',
        desc: '불필요하게 많은 블록을 두지 않고, 무드와 위계를 먼저 정리합니다.',
      },
      {
        label: '03',
        title: '브랜드 무드 중심',
        desc: '유통 사이트가 아니라 프리미엄 스킨케어 브랜드처럼 보이는 감각을 우선합니다.',
      },
    ],
    portfolioEyebrow: 'PORTFOLIO PREVIEW',
    portfolioTitle: '메인 비주얼과 연결되는 시그니처 라인',
    portfolioDesc: '제품군은 홈 하단에서 짧고 강하게 보여주고, 필요 시 서브에서 자세히 읽도록 분리합니다.',
    portfolioItems: [
      {
        label: 'SERUM',
        title: 'BRIGHTENING SERUM LINE',
        desc: '브라이트닝 중심 세럼 라인을 짧고 강하게 제안합니다.',
        image: '/images/products/serum-dropper.jpg',
      },
      {
        label: 'MASK',
        title: 'SIGNATURE MASK LINE',
        desc: '대표 마스크 라인을 브랜드 시그니처 축으로 배치합니다.',
        image: '/images/products/mask-boxes-white.jpg',
      },
      {
        label: 'SUN CARE',
        title: 'SEASONAL SUN CARE',
        desc: '시즌 캠페인과 유통 제안을 위한 선케어 축입니다.',
        image: '/images/products/sun-cream-tubes.jpg',
      },
    ],
    brandTitle: '브랜드',
    brandDesc: '준비 중입니다.',
    featuredTitle: '제품',
    rdTitle: 'R&D',
    pageLead: 'GPCLUB 메인 포맷 재설계 초안',
    partnerTitle: '제휴 및 공급 문의',
    partnerDesc: '준비 중입니다.',
    partnerFields: ['회사명', '이메일', '국가', '문의 유형', '상세 내용'],
    partnerCta: '문의 접수',
    aiTitle: 'AI 상담',
    aiDesc: '준비 중입니다.',
    aiCta: 'AI 상담 시작',
    contactTitle: '문의',
    contactDesc: '준비 중입니다.',
    contactCta: '문의하기',
  },
} as const;
