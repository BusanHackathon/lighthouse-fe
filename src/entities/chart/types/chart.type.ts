/**
 * 차트 관련 entities
 */

// 차트 라인 데이터
export type ChartLine = {
  key: string;
  name: string;
};

// 차트 데이터
export type ChartData = {
  title: string;
  lines: ChartLine[];
  data: SubstituteCompensationsChart[];
};

export type SubstituteCompensationsChart = {
  month: string;
  cases: number;
};

export type SizePriceChart = {
  month: string;
  cases: number;
};
