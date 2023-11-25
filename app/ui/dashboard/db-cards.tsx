import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';

import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

function DbCard(props: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const { title, value, type } = props;

  const IconRender = iconMap[type];

  return (
    <div className='rounded-xl py-2 px-2 bg-gray-50 mt-10'>
      <div className='flex flex-row gap-2 pl-2'>
        <IconRender className='w-5' />
        <h3 className='py-4'>{title && title}</h3>
      </div>
      <div
        className={`bg-white px-4 py-6 rounded-xl text-2xl text-center ${lusitana.className}`}
      >
        {value && value}
      </div>
    </div>
  );
}

export default DbCard;
