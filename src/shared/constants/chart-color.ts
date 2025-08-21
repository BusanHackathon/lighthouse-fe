// CSS 변수 기반 색상 배열
export const CHART_COLORS = [
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
export const CHART_COLOR_CLASSES = [
  'bg-chart-orange', // 첫 번째 (1개일 때)
  'bg-chart-blue', // 두 번째
  'bg-chart-green', // 세 번째
  'bg-chart-purple', // 네 번째
  'bg-chart-red', // 다섯 번째
  'bg-chart-yellow', // 여섯 번째
  'bg-chart-pink', // 일곱 번째
  'bg-chart-indigo', // 여덟 번째
] as const;
