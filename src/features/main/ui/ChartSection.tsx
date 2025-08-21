import { ChartBox } from '../components';
import { CHART_DATA_LIST } from '../mock';

export const ChartSection = () => {
  return (
    <div className='mx-auto w-full max-w-6xl p-6'>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {CHART_DATA_LIST.map((chartData, index) => (
          <div key={chartData.title} className={`bg-white ${index === 2 ? 'lg:col-span-2' : ''}`}>
            <ChartBox chartData={chartData} />
          </div>
        ))}
      </div>
    </div>
  );
};
