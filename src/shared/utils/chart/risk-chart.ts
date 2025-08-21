/**
 * 위험도 게이지 차트 관련 유틸리티
 */
import {
  RISK_CHART_SEGMENTS,
  type RiskScore,
  type RiskSegment,
  type RiskSegmentIndex,
} from '../../constants';

// 게이지 데이터 타입 정의
export type GaugeData = {
  data: RiskSegment[];
  color: string;
  label: string;
  angle: number;
};

// 상수 정의
const MAX_SCORE = 100;
const MAX_ANGLE = 180;
const SEGMENT_SIZE = 20;

// 점수 범위 검증 함수
export const isValidRiskScore = (score: number): score is RiskScore => {
  return score >= 0 && score <= 100;
};

// 안전한 점수 변환 함수
export const toRiskScore = (score: number): RiskScore => {
  return Math.max(0, Math.min(100, score)) as RiskScore;
};

/**
 * 위험도 점수에 따른 구간 인덱스를 계산
 * 점수가 낮을수록 위험하므로 인덱스를 그대로 계산
 * @param score - 위험도 점수 (0-100, 낮을수록 위험)
 * @returns 구간 인덱스 (0-4, 0=위험, 4=안전)
 */
export const getSegmentIndex = (score: RiskScore): RiskSegmentIndex => {
  // 점수가 낮을수록 위험하므로 그대로 계산
  const segmentIndex = Math.floor(score / SEGMENT_SIZE);
  return Math.min(segmentIndex, 4) as RiskSegmentIndex;
};

/**
 * 위험도 점수에 따른 구간 정보를 반환
 * @param score - 위험도 점수 (0-100, 낮을수록 위험)
 * @returns 현재 구간 정보
 */
export const getRiskSegment = (score: number): RiskSegment => {
  const normalizedScore = toRiskScore(score);
  const segmentIndex = getSegmentIndex(normalizedScore);
  return RISK_CHART_SEGMENTS[segmentIndex];
};

/**
 * 위험도 점수에 따른 각도 계산
 * 점수가 낮을수록 위험하므로 각도를 그대로 계산
 * @param score - 위험도 점수 (0-100, 낮을수록 위험)
 * @returns 바늘 각도 (0-180도)
 */
export const getGaugeAngle = (score: number): number => {
  const normalizedScore = toRiskScore(score);
  // 점수가 낮을수록 위험하므로 각도를 그대로 계산
  // 0점(위험) = 0도, 100점(안전) = 180도
  return (normalizedScore / MAX_SCORE) * MAX_ANGLE;
};

/**
 * 위험도 점수에 따른 게이지 데이터를 생성
 * @param score - 위험도 점수 (0-100, 낮을수록 위험)
 * @returns 게이지 차트에 필요한 데이터
 */
export const getGaugeData = (score: number): GaugeData => {
  const normalizedScore = toRiskScore(score);
  const currentSegment = getRiskSegment(normalizedScore);
  const angle = getGaugeAngle(normalizedScore);

  return {
    data: RISK_CHART_SEGMENTS as RiskSegment[],
    color: currentSegment.fill,
    label: currentSegment.name,
    angle,
  };
};

/**
 * 위험도 점수가 유효한지 검증
 * @param score - 검증할 점수
 * @returns 유효성 여부
 */
export const validateRiskScore = (score: number): boolean => {
  return isValidRiskScore(score);
};
