// 임의의 데이터 생성 (2020-2025년)

// 최근 6개월 가격 지수 변동률

const CHART_DATA = {
  // 최근 6개월 가격 지수 변동률
  RECENT_PRICE_FLUCTUATIONS: [
    { year: '20', 기준치: 0, 변동률: 2.5 },
    { year: '21', 기준치: 0, 변동률: 1.8 },
    { year: '22', 기준치: 0, 변동률: 0.9 },
    { year: '23', 기준치: 0, 변동률: 3.2 },
    { year: '24', 기준치: 0, 변동률: 1.5 },
    { year: '25', 기준치: 0, 변동률: 2.1 },
  ],
  // LTV 전세금, 매매가 그래프
  REAL_ESTATE_PRICE_DATA: [
    { year: '20', 전세금: 2.8, 매매가: 3.2, 임대료: 1.5 },
    { year: '21', 전세금: 3.1, 매매가: 3.5, 임대료: 1.8 },
    { year: '22', 전세금: 2.5, 매매가: 2.9, 임대료: 1.2 },
    { year: '23', 전세금: 3.8, 매매가: 4.1, 임대료: 2.1 },
    { year: '24', 전세금: 3.0, 매매가: 3.3, 임대료: 1.6 },
    { year: '25', 전세금: 3.4, 매매가: 3.7, 임대료: 1.9 },
  ],
  // 해당 지역 대위변제 발생 빈도 및 증가율
  REGIONAL_INCREASE_RATE: [
    { year: '20', 증가율: 1.2 },
    { year: '21', 증가율: 1.8 },
    { year: '22', 증가율: 0.9 },
    { year: '23', 증가율: 2.5 },
    { year: '24', 증가율: 1.6 },
    { year: '25', 증가율: 2.1 },
  ],
};

export const CHART_DATA_CONFIGS = [
  {
    title: '최근 6개월 가격 지수 변동률',
    data: CHART_DATA.RECENT_PRICE_FLUCTUATIONS,
    lines: [
      {
        key: '기준치',
        color: '#0c3165',
        name: '기준치',
        showDot: false,
      },
      {
        key: '변동률',
        color: '#f57a0c',
        name: '변동률',
        showDot: true,
      },
    ],
  },
  {
    title: 'LTV 전세금, 매매가 그래프',
    data: CHART_DATA.REAL_ESTATE_PRICE_DATA,
    lines: [
      {
        key: '전세금',
        name: '전세금',
        showDot: true,
      },
      {
        key: '매매가',
        name: '매매가',
        showDot: true,
      },
      {
        key: '임대료',
        name: '임대료',
        showDot: true,
      },
    ],
  },
  {
    title: '해당 지역 대위변제 발생 빈도 및 증가율',
    data: CHART_DATA.REGIONAL_INCREASE_RATE,
    lines: [
      {
        key: '증가율',
        name: '증가율',
        showDot: true,
      },
    ],
  },
];
