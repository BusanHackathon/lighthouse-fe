import type { ChartLine } from '@/entities';

import { useChartConfig } from '../../hooks';

type Props = {
  lines: ChartLine[];
};

export const LegendLine = ({ lines }: Props) => {
  const { getLegendItemConfig } = useChartConfig();

  return (
    <ul className='m-0 flex list-none gap-5 p-0'>
      {lines.map((line, index) => {
        const config = getLegendItemConfig(line, index);
        return (
          <li key={config.key} className='flex items-center gap-2'>
            <div className={`h-1 w-5 ${config.colorClass}`} />
            <span className='text-sm text-gray-600'>{config.name}</span>
          </li>
        );
      })}
    </ul>
  );
};
