/**
 * 차트 색상 관련 유틸리티
 */
import { CHART_COLORS, CHART_COLOR_CLASSES, RISK_SCORE_COLORS } from '../../constants';

/**
 * 인덱스에 따른 차트 색상 CSS 변수를 반환
 * @param index - 색상 인덱스 (0부터 시작)
 * @returns CSS 변수 문자열
 */
export const getChartColor = (index: number): string => {
  return CHART_COLORS[index % CHART_COLORS.length];
};

/**
 * 인덱스에 따른 차트 색상 Tailwind CSS 클래스를 반환
 * @param index - 색상 인덱스 (0부터 시작)
 * @returns Tailwind CSS 클래스명
 */
export const getChartColorClass = (index: number): string => {
  return CHART_COLOR_CLASSES[index % CHART_COLOR_CLASSES.length];
};

/**
 * 위험도 점수에 따른 색상 클래스를 반환
 * @param score - 위험도 점수 (0-100, 낮을수록 위험)
 * @returns Tailwind CSS 색상 클래스명
 */
export const getRiskScoreColorClass = (score: number): string => {
  if (score <= 20) return RISK_SCORE_COLORS.VERY_DANGER; // 매우 위험
  if (score <= 40) return RISK_SCORE_COLORS.DANGER; // 위험
  if (score <= 60) return RISK_SCORE_COLORS.CAUTION; // 양호
  if (score <= 80) return RISK_SCORE_COLORS.SAFE; // 안전
  return RISK_SCORE_COLORS.VERY_SAFE; // 매우 안전
};

/**
 * 위험도 색상 HEX 값을 Tailwind CSS 클래스로 변환
 * @param hexColor - HEX 색상 값
 * @returns Tailwind CSS box-shadow 클래스
 */
export const getRiskColorClass = (hexColor: string): string => {
  const colorMap: Record<string, string> = {
    '#ff6f6f': 'bg-risk-very-danger', // 매우 위험
    '#ffba6f': 'bg-risk-danger', // 위험
    '#ffe93f': 'bg-risk-good', // 양호
    '#d9ff41': 'bg-risk-safe', // 안전
    '#2cdf44': 'bg-risk-very-safe', // 매우 안전
  };

  return colorMap[hexColor] || 'bg-gray-400';
};

export const getRiskBoxShadowClass = (hexColor: string): string => {
  const colorMap: Record<string, string> = {
    '#ff6f6f': 'shadow-[0_0_12px_var(--color-risk-very-danger)]', // 매우 위험
    '#ffba6f': 'shadow-[0_0_12px_var(--color-risk-danger)]', // 위험
    '#ffe93f': 'shadow-[0_0_12px_var(--color-risk-good)]', // 양호
    '#d9ff41': 'shadow-[0_0_12px_var(--color-risk-safe)]', // 안전
    '#2cdf44': 'shadow-[0_0_12px_var(--color-risk-very-safe)]', // 매우 안전
  };
  return colorMap[hexColor] || 'shadow-[0_0_12px_rgba(156,163,175,0.5)]';
};

/**
 * 차트 색상 개수
 */
export const CHART_COLOR_COUNT = CHART_COLORS.length;

/**
 * 대위변제 이력에 따른 색상 클래스 반환
 * @param count - 대위변제 횟수
 * @returns Tailwind CSS 텍스트 색상 클래스
 */
export const getSubrogationColorClass = (count: number): string => {
  if (count === 0) {
    return 'text-risk-very-safe'; // 초록색 #2cdf44
  } else if (count === 1) {
    return 'text-risk-danger'; // 주황색 #ffba6f
  } else {
    return 'text-risk-very-danger'; // 빨간색 #ff6f6f
  }
};

/**
 * 다주택자 수에 따른 색상 클래스 반환 (임의 색상)
 * @param count - 다주택자 수
 * @returns Tailwind CSS 텍스트 색상 클래스
 */

// TODO: 적절한 기준에 따른 색상 클래스 반환
export const getMultiHouseColorClass = (count: number): string => {
  if (count === 0) {
    return 'text-risk-very-safe'; // 초록색
  } else if (count <= 2) {
    return 'text-risk-good'; // 노란색
  } else if (count <= 5) {
    return 'text-risk-danger'; // 주황색
  } else {
    return 'text-risk-very-danger'; // 빨간색
  }
};

/**
 * 신뢰도 등급에 따른 색상 클래스 반환
 * @param grade - 신뢰도 등급 (A~E)
 * @returns Tailwind CSS 텍스트 색상 클래스
 */
export const getTrustGradeColorClass = (grade: string): string => {
  const gradeMap: Record<string, string> = {
    A: 'text-risk-very-safe', // 초록색
    B: 'text-risk-safe', // 연두색
    C: 'text-risk-good', // 노란색
    D: 'text-risk-danger', // 주황색
    E: 'text-risk-very-danger', // 빨간색
  };

  return gradeMap[grade] || 'text-gray-600';
};
