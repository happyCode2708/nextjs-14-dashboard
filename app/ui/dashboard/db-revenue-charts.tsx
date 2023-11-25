// import generate from '@/app/lib/utils';
import { generateYAxis } from '@/app/lib/utils';
import { Revenue } from '@/app/lib/definitions';
import { lusitana } from '@/app/ui/fonts';
import { CalendarIcon } from '@heroicons/react/24/outline';

const chartHeight = 350;

const DbRevenueChart = (props: { revenue: Revenue[] }) => {
  const { revenue } = props;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  const RenderYAxis = (
    <div className=''>
      <div className='h-[20px]'> </div>
      <div className={`flex flex-col h-[${chartHeight}px] justify-between`}>
        {yAxisLabels.map((labelItem) => (
          <div
            key={labelItem}
            className={`${lusitana.className} text-gray-400`}
          >
            {labelItem}
          </div>
        ))}
      </div>
      <div className='h-[20px]'> </div>
    </div>
  );

  const RenderColumns = (
    <div className='md:col-span-12 grid grid-cols-12 items-end gap-3'>
      {revenue.map((revenueItem, index) => {
        return (
          <div key={index} className='text-center'>
            <div className={`${lusitana.className} text-gray-400`}>
              {revenueItem.revenue}
            </div>
            <div
              className='bg-blue-300 rounded-md'
              style={{ height: (revenueItem.revenue / topLabel) * chartHeight }}
            ></div>
            <div className={`${lusitana.className} text-gray-400 h-[20px]`}>
              {revenueItem.month}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className={`md:col-span-4  p-5 bg-gray-50 rounded-xl flex flex-col`}>
      <div className='grid grid-cols-13 bg-white h-full rounded-xl p-5'>
        {RenderYAxis}
        {RenderColumns}
      </div>

      <div className='flex flex-row items-center pt-3 text-gray-400'>
        <CalendarIcon className='w-5 h-5 mr-3' />
        <div>Last 12 months</div>
      </div>
    </div>
  );
};
export default DbRevenueChart;
