// 기본 매물 타입별 색상 정의
export const PROPERTY_TYPE_COLORS = {
  오피스텔: '#B27373', // 적갈색
  원룸: '#73B286', // 연한 초록색
  투룸: '#7573B2', // 보라색
  아파트: '#B273AE', // 연한 분홍색
  복층: '#739EB2', // 청록색
  빌라: '#FFA500', // 주황색
  단독주택: '#32CD32', // 라임색
} as const;

// 동적 색상 생성을 위한 fallback 색상 배열
export const FALLBACK_COLORS = [
  '#FF6B6B', // 빨간색
  '#4ECDC4', // 청록색
  '#45B7D1', // 파란색
  '#96CEB4', // 연한 초록색
  '#FFEAA7', // 연한 노란색
  '#DDA0DD', // 연한 보라색
  '#98D8C8', // 민트색
  '#F7DC6F', // 노란색
  '#BB8FCE', // 연한 보라색
  '#85C1E9', // 하늘색
] as const;
