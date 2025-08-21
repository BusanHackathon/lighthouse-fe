import { CartesianGrid } from 'recharts';

import { useChartConfig } from '../../hooks';

export const ChartGrid = () => {
  const { gridConfig } = useChartConfig();

  return (
    <>
      {/* 가로선 - 실선 */}
      <CartesianGrid {...gridConfig.horizontal} />
      {/* 세로선 - 점선 */}
      <CartesianGrid {...gridConfig.vertical} />
    </>
  );
};
