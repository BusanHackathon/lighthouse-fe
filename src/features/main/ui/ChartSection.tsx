import { ChartBox } from '../components';
import { CHART_DATA_CONFIGS } from '../mock';

export const ChartSection = () => {
  return (
    <div className='mx-auto w-full max-w-6xl p-6'>
      <div className='grid grid-cols-2 gap-6'>
        {CHART_DATA_CONFIGS.map((config) => (
          <div key={config.title} className='bg-white'>
            <ChartBox data={config.data} lines={config.lines} title={config.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
