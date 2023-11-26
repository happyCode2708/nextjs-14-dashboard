import { LatestInvoice } from '@/app/lib/definitions';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';

const DbLatestInvoinces = async () => {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className='md:col-span-4 flex flex-col'>
      <h2 className={`test-xl md:text-2xl ${lusitana.className}`}>
        Latest Invoices
      </h2>
      <div className='bg-gray-5 rounded-xl p-5 flex-grow'>
        <div className='bg-white h-full divide-y-2 divide-gray-100 px-3'>
          {latestInvoices.map((invoiceItem) => (
            <>
              <InvoiceItem key={invoiceItem.id} invoiceData={invoiceItem} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const InvoiceItem = ({ invoiceData }: { invoiceData: LatestInvoice }) => {
  const { image_url, name, email, amount } = invoiceData;

  return (
    <div className='flex flex-row items-center py-5 px-3'>
      <Image
        className='rounded-full mr-3'
        alt='invoice avatar'
        src={image_url}
        width={35}
        height={35}
      />
      <div className='overflow-hidden'>
        <p className='truncate text-base font-semibold'>{name}</p>
        <p className='text-gray-500 text-sm'> {email} </p>
      </div>
      <div className='flex-grow'></div>
      <p className={`${lusitana.className} pl-5`}>{amount}</p>
    </div>
  );
};

export default DbLatestInvoinces;
