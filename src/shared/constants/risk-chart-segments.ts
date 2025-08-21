/**
 * 위험도 차트 구간 정의
 */

// 타입 정의
export type RiskLevel = '매우 위험' | '위험' | '양호' | '안전' | '매우 안전';

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

// 위험도 점수별 색상 클래스
export const RISK_SCORE_COLORS = {
  VERY_DANGER: 'text-risk-very-danger', // 매우 위험 (0-20점)
  DANGER: 'text-risk-danger', // 위험 (21-40점)
  CAUTION: 'text-risk-good', // 양호 (41-60점)
  SAFE: 'text-risk-safe', // 안전 (61-80점)
  VERY_SAFE: 'text-risk-very-safe', // 매우 안전 (81-100점)
} as const;

// 값 상수
const VALUES = {
  VERY_RISK: 20,
  RISK: 20,
  GOOD: 20,
  SAFE: 20,
  VERY_SAFE: 20,
} as const;

// 이름 상수
const NAMES = {
  VERY_RISK: '매우 위험' as const,
  RISK: '위험' as const,
  GOOD: '양호' as const,
  SAFE: '안전' as const,
  VERY_SAFE: '매우 안전' as const,
} as const;

// 위험도 구간 정의 (왼쪽이 위험, 오른쪽이 안전)
export const RISK_CHART_SEGMENTS: readonly RiskSegment[] = [
  { name: NAMES.VERY_SAFE, value: VALUES.VERY_SAFE, fill: COLORS.GREEN },
  { name: NAMES.SAFE, value: VALUES.SAFE, fill: COLORS.YELLOW_GREEN },
  { name: NAMES.GOOD, value: VALUES.GOOD, fill: COLORS.YELLOW },
  { name: NAMES.RISK, value: VALUES.RISK, fill: COLORS.ORANGE },
  { name: NAMES.VERY_RISK, value: VALUES.VERY_RISK, fill: COLORS.RED },
];

// 구간 인덱스 타입
export type RiskSegmentIndex = 0 | 1 | 2 | 3 | 4;

// 점수 범위 타입
export type RiskScore = number & { __brand: 'RiskScore' };
