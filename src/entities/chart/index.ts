/**
 * 차트 관련 entities
 */

// 차트 라인 데이터
export interface ChartLine {
  key: string;
  name: string;
}

// 차트 데이터 포인트
export interface ChartDataPoint {
  [key: string]: string | number;
}

// 차트 데이터
export interface ChartData {
  title: string;
  lines: ChartLine[];
  data: ChartDataPoint[];
}
