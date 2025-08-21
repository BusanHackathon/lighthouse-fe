import { FALLBACK_COLORS, PROPERTY_TYPE_COLORS } from '../constants';

// 동적 색상 생성 함수 (정의되지 않은 타입용)
const generateDynamicColors = () => {
  let colorIndex = 0;

  return (type: string): string => {
    // 이미 정의된 타입이면 해당 색상 반환
    if (type in PROPERTY_TYPE_COLORS) {
      return PROPERTY_TYPE_COLORS[type as keyof typeof PROPERTY_TYPE_COLORS];
    }

    // 정의되지 않은 타입이면 동적 색상 할당
    const color = FALLBACK_COLORS[colorIndex % FALLBACK_COLORS.length];
    colorIndex++;
    return color;
  };
};

const getColorForType = generateDynamicColors();

/**
 * 매물 타입에 따른 색상을 반환하는 함수
 * @param type - 매물 타입
 * @returns 색상 코드
 */
export const getPropertyTypeColor = (type: string): string => {
  return getColorForType(type);
};

/**
 * 매물 목록에 색상 정보를 추가하는 함수
 * @param properties - 매물 목록
 * @returns 색상 정보가 추가된 매물 목록
 */
export const addColorsToProperties = <T extends { type: string }>(properties: T[]) => {
  return properties.map((property) => ({
    ...property,
    typeColor: getColorForType(property.type),
  }));
};
