import { FALLBACK_COLORS, PROPERTY_TYPE_COLORS } from '../constants';

/**
 * 매물 타입에 따른 색상을 반환하는 함수
 * @param type - 매물 타입
 * @returns 색상 코드
 */
export const getPropertyTypeColor = (type: string): string => {
  // 이미 정의된 타입이면 해당 색상 반환
  if (type in PROPERTY_TYPE_COLORS) {
    return PROPERTY_TYPE_COLORS[type as keyof typeof PROPERTY_TYPE_COLORS];
  }

  // 정의되지 않은 타입이면 해시를 기반으로 동적 색상 할당
  let hash = 0;
  for (let i = 0; i < type.length; i++) {
    hash = type.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % FALLBACK_COLORS.length;
  return FALLBACK_COLORS[index];
};

/**
 * 매물 목록에 색상 정보를 추가하는 함수
 * @param properties - 매물 목록
 * @returns 색상 정보가 추가된 매물 목록
 */
export const addColorsToProperties = <T extends { type: string }>(properties: T[]) => {
  return properties.map((property) => ({
    ...property,
    typeColor: getPropertyTypeColor(property.type),
  }));
};
