// 주택 유형 상수
export const HOUSE_TYPES = ['원룸', '투룸', '오피스텔', '아파트', '기타'] as const;

export const HOUSE_TYPE_OPTIONS = [
  { value: 'ONE_ROOM', label: '원룸' },
  { value: 'TWO_ROOM', label: '투룸' },
  { value: 'OFFICETEL', label: '오피스텔' },
  { value: 'APARTMENT', label: '아파트' },
  { value: 'ETC', label: '기타' },
] as const;
