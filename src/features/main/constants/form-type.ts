// 임대 유형 상수
export const RENT_TYPES = {
  JEONSE: 'jeonse',
  MONTHLY: 'monthly',
} as const;

// 폼 필드 상수
export const FORM_FIELDS = {
  ADDRESS: 'address',
  HOUSE_TYPE: 'house-type',
  DETAIL_ADDRESS: 'detail-address',
  RENT_AMOUNT: 'rent-amount',
} as const;

// 플레이스홀더 텍스트 상수
export const PLACEHOLDER_TEXTS = {
  ADDRESS: '주소를 알려주세요',
  HOUSE_TYPE: '주택유형을 알려주세요',
  DETAIL_ADDRESS: '상세주소를 알려주세요.',
  JEONSE_AMOUNT: '전세금액',
  MONTHLY_AMOUNT: '월세금액',
} as const;

// 라벨 텍스트 상수
export const LABEL_TEXTS = {
  ADDRESS: '주소',
  HOUSE_TYPE: '주택유형',
  DETAIL_ADDRESS: '상세주소',
  DEPOSIT: '보증금',
  JEONSE: '전세',
  MONTHLY: '월세',
} as const;

// 임대 유형별 설정 객체
export const RENT_TYPE_CONFIG = {
  [RENT_TYPES.JEONSE]: {
    label: LABEL_TEXTS.JEONSE,
    placeholder: PLACEHOLDER_TEXTS.JEONSE_AMOUNT,
  },
  [RENT_TYPES.MONTHLY]: {
    label: LABEL_TEXTS.MONTHLY,
    placeholder: PLACEHOLDER_TEXTS.MONTHLY_AMOUNT,
  },
} as const;
