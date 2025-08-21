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
 * 점수가 낮을수록 위험하므로 인덱스를 반대로 계산
 * @param score - 위험도 점수 (0-100, 낮을수록 위험)
 * @returns 구간 인덱스 (0-4, 0=매우 안전, 4=매우 위험)
 */
export const getSegmentIndex = (score: RiskScore): RiskSegmentIndex => {
  // 점수가 낮을수록 위험하므로 인덱스를 반대로 계산
  // 0-20점: 4번 인덱스 (매우 위험)
  // 21-40점: 3번 인덱스 (위험)
  // 41-60점: 2번 인덱스 (양호)
  // 61-80점: 1번 인덱스 (안전)
  // 81-100점: 0번 인덱스 (매우 안전)
  const segmentIndex = Math.floor((score - 1) / SEGMENT_SIZE);
  const reversedIndex = 4 - Math.max(0, Math.min(segmentIndex, 4));
  return reversedIndex as RiskSegmentIndex;
};

/**
 * 위험도 점수에 따른 구간 정보를 반환
 * @param score - 위험도 점수 (0-100, 낮을수록 위험)
 * @returns 현재 구간 정보
 */
export const getRiskSegment = (score: number): RiskSegment => {
  const normalizedScore = toRiskScore(score);
  const segmentIndex = getSegmentIndex(normalizedScore);
  const result = RISK_CHART_SEGMENTS[segmentIndex];
  return result;
};

/**
 * 위험도 점수를 5구간으로 나눠서 각도로 변환 (이산형)
 * 5구간을 36도씩 나누어 표현 (0-36, 36-72, 72-108, 108-144, 144-180)
 * @param score - 위험도 점수 (0-100, 낮을수록 위험)
 * @returns 바늘 각도 (0-180도)
 */
export const getGaugeAngle = (score: number): number => {
  const normalized = Math.max(0, Math.min(100, score)); // 0~100 보정

  // 5구간을 36도씩 나누어 계산
  let result: number;
  if (normalized <= 20) {
    // 0-20점: 매우 위험 (0-36도, 왼쪽)
    result = (normalized / 20) * 36;
  } else if (normalized <= 40) {
    // 21-40점: 위험 (36-72도)
    result = 36 + ((normalized - 20) / 20) * 36;
  } else if (normalized <= 60) {
    // 41-60점: 양호 (72-108도, 중앙)
    result = 72 + ((normalized - 40) / 20) * 36;
  } else if (normalized <= 80) {
    // 61-80점: 안전 (108-144도)
    result = 108 + ((normalized - 60) / 20) * 36;
  } else {
    // 81-100점: 매우 안전 (144-180도, 오른쪽)
    result = 144 + ((normalized - 80) / 20) * 36;
  }

  console.log(`보정점수 : ${normalized} 바늘 위치: ${score}점 → ${result}도`);
  return result;
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

  const result = {
    data: RISK_CHART_SEGMENTS as RiskSegment[],
    color: currentSegment.fill,
    label: currentSegment.name,
    angle,
  };

  return result;
};

/**
 * 위험도 점수가 유효한지 검증
 * @param score - 검증할 점수
 * @returns 유효성 여부
 */
export const validateRiskScore = (score: number): boolean => {
  return isValidRiskScore(score);
};
