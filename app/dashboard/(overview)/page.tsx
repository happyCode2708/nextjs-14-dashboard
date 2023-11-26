import { Suspense } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

import DbCardList from '@/app/ui/dashboard/db-cards';
import DbRevenueChart from '@/app/ui/dashboard/db-revenue-charts';
import DbLatestInvoices from '@/app/ui/dashboard/db-latest-invoices';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

const Dashboard_page = async () => {
  return (
    <main className='flex-1'>
      <h1 className={`${lusitana.className} mb-1 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <Suspense fallback={<CardsSkeleton />}>
        <DbCardList />
      </Suspense>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <DbRevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <DbLatestInvoices />
        </Suspense>
      </div>
    </main>
  );
};

export default Dashboard_page;
