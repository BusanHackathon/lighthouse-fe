/**
 * 차트 색상 관련 유틸리티
 */

// CSS 변수 기반 색상 배열
const CHART_COLORS = [
  'var(--chart-orange)', // 첫 번째 (1개일 때)
  'var(--chart-blue)', // 두 번째
  'var(--chart-green)', // 세 번째
  'var(--chart-purple)', // 네 번째
  'var(--chart-red)', // 다섯 번째
  'var(--chart-yellow)', // 여섯 번째
  'var(--chart-pink)', // 일곱 번째
  'var(--chart-indigo)', // 여덟 번째
] as const;

// Tailwind CSS 클래스 배열
const CHART_COLOR_CLASSES = [
  'bg-chart-orange', // 첫 번째 (1개일 때)
  'bg-chart-blue', // 두 번째
  'bg-chart-green', // 세 번째
  'bg-chart-purple', // 네 번째
  'bg-chart-red', // 다섯 번째
  'bg-chart-yellow', // 여섯 번째
  'bg-chart-pink', // 일곱 번째
  'bg-chart-indigo', // 여덟 번째
] as const;

/**
 * 인덱스에 따른 차트 색상 CSS 변수를 반환
 * @param index - 색상 인덱스 (0부터 시작)
 * @returns CSS 변수 문자열
 */
export const getChartColor = (index: number): string => {
  return CHART_COLORS[index] || CHART_COLORS[index % CHART_COLORS.length];
};

/**
 * 인덱스에 따른 차트 색상 Tailwind CSS 클래스를 반환
 * @param index - 색상 인덱스 (0부터 시작)
 * @returns Tailwind CSS 클래스명
 */
export const getChartColorClass = (index: number): string => {
  return CHART_COLOR_CLASSES[index] || CHART_COLOR_CLASSES[index % CHART_COLOR_CLASSES.length];
};

/**
 * 차트 색상 개수
 */
export const CHART_COLOR_COUNT = CHART_COLORS.length;
