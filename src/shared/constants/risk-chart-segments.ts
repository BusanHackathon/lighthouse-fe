/**
 * 위험도 차트 구간 정의
 */

// 타입 정의
export type RiskLevel = '안전' | '다소 안전' | '양호' | '다소 위험' | '위험';

export type RiskSegment = {
  name: RiskLevel;
  value: number;
  fill: string;
};

// 색상 상수
const COLORS = {
  RED: '#ff6f6f',
  ORANGE: '#ffba6f',
  YELLOW: '#ffe93f',
  YELLOW_GREEN: '#d9ff41',
  GREEN: '#2cdf44',
} as const;

// 값 상수
const VALUES = {
  RISK: 20,
  MODERATE_RISK: 20,
  GOOD: 20,
  MODERATE_SAFE: 20,
  SAFE: 20,
} as const;

// 이름 상수
const NAMES = {
  RISK: '위험' as const,
  MODERATE_RISK: '다소 위험' as const,
  GOOD: '양호' as const,
  MODERATE_SAFE: '다소 안전' as const,
  SAFE: '안전' as const,
} as const;

// 위험도 구간 정의
export const RISK_CHART_SEGMENTS: readonly RiskSegment[] = [
  { name: NAMES.RISK, value: VALUES.RISK, fill: COLORS.RED },
  { name: NAMES.MODERATE_RISK, value: VALUES.MODERATE_RISK, fill: COLORS.ORANGE },
  { name: NAMES.GOOD, value: VALUES.GOOD, fill: COLORS.YELLOW },
  { name: NAMES.MODERATE_SAFE, value: VALUES.MODERATE_SAFE, fill: COLORS.YELLOW_GREEN },
  { name: NAMES.SAFE, value: VALUES.SAFE, fill: COLORS.GREEN },
];

// 구간 인덱스 타입
export type RiskSegmentIndex = 0 | 1 | 2 | 3 | 4;

// 점수 범위 타입
export type RiskScore = number & { __brand: 'RiskScore' };
