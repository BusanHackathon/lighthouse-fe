import { XAxis, YAxis } from 'recharts';

import { useChartConfig } from '../../hooks';

type Props = {
  dataKey: string;
};

export const ChartAxis = ({ dataKey }: Props) => {
  const { xAxisConfig, yAxisConfig } = useChartConfig();

  return (
    <>
      <XAxis dataKey={dataKey} {...xAxisConfig} />
      <YAxis {...yAxisConfig} />
    </>
  );
};
