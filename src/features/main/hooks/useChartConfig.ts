/**
 * 차트 설정 관련 hook
 */
import { getChartColor, getChartColorClass } from '@/shared/utils/chart/chart-colors';

import type { ChartLine } from '@/entities';

export const useChartConfig = () => {
  // 차트 기본 설정
  const chartConfig = {
    margin: { top: 5, right: 30, left: 0, bottom: 5 },
    height: 300,
  };

  // X축 설정
  const xAxisConfig = {
    stroke: '#BDBDBF',
    fontSize: 14,
    tickLine: false,
    axisLine: true,
    tickMargin: 10,
  };

  // Y축 설정
  const yAxisConfig = {
    stroke: '#BDBDBF',
    fontSize: 12,
    tickLine: false,
    axisLine: false,
  };

  // 그리드 설정
  const gridConfig = {
    horizontal: {
      horizontal: true,
      vertical: false,
      strokeDasharray: '0',
      stroke: '#BDBDBF',
    },
    vertical: {
      horizontal: false,
      vertical: true,
      strokeDasharray: '3 3',
      stroke: '#f0f0f0',
    },
  };

  // 범례 설정
  const legendConfig = {
    verticalAlign: 'top' as const,
    align: 'left' as const,
    height: 36,
    wrapperStyle: {
      paddingBottom: '10px',
      marginLeft: '30px',
      marginTop: '-20px',
    },
  };

  // 라인 설정 생성 함수
  const getLineConfig = (line: ChartLine, index: number) => ({
    type: 'monotone' as const,
    dataKey: line.key,
    stroke: getChartColor(index),
    strokeWidth: 2,
    dot: {
      fill: getChartColor(index),
      strokeWidth: 2,
      r: 4,
    },
    activeDot: {
      r: 6,
      stroke: getChartColor(index),
      strokeWidth: 2,
    },
  });

  // 범례 아이템 설정 생성 함수
  const getLegendItemConfig = (line: ChartLine, index: number) => ({
    key: line.key,
    colorClass: getChartColorClass(index),
    name: line.name,
  });

  return {
    chartConfig,
    xAxisConfig,
    yAxisConfig,
    gridConfig,
    legendConfig,
    getLineConfig,
    getLegendItemConfig,
  };
};
