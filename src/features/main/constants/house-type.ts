// 주택 유형 상수
export const HOUSE_TYPES = ['원룸', '투룸', '오피스텔', '아파트', '복층'] as const;

export const HOUSE_TYPE_OPTIONS = [
  { value: 'ONEROOM', label: '원룸' },
  { value: 'TWOROOM', label: '투룸' },
  { value: 'OFFICETEL', label: '오피스텔' },
  { value: 'APARTMENT', label: '아파트' },
  { value: 'DUPLEX', label: '복층' },
] as const;
