import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className='flex flex-col w-full h-full'>
      <Link
        className='flex bg-blue-600 rounded-md p-4 md:h-40 items-end mb-2 md:w-full'
        href='/'
      >
        <AcmeLogo />
      </Link>
      <div className='flex flex-row md:flex-col grow gap-2'>
        <NavLinks />

        <div className='md:grow md:block hidden'> </div>
        <form className='grow md:grow-0'>
          <button className='flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 w-full grow md:grow-0'>
            <PowerIcon className='w-6' />
            <div className='hidden md:block'>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
