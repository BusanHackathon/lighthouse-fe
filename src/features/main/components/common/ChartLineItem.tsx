import { Line } from 'recharts';

import type { ChartLine } from '@/entities';

import { useChartConfig } from '../../hooks';

type Props = {
  line: ChartLine;
  index: number;
};

export const ChartLineItem = ({ line, index }: Props) => {
  const { getLineConfig } = useChartConfig();
  const config = getLineConfig(line, index);

  return <Line key={line.key} {...config} />;
};
