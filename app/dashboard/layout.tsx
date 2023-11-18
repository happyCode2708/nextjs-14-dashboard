import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      // className='flex h-screen flex-col md:flex-row md:overflow-hidden'
      // className='flex h-screen md:flex-row flex-col'
      className='flex h-screen md:flex-row flex-col p-[3px]'
    >
      <div
        // className='w-full flex-none md:w-64'
        className='w-full md:w-64 md:mr-1'
      >
        <SideNav />
      </div>
      <div
        // className='flex-grow p-6 md:overflow-y-auto md:p-12'
        className='grow'
      >
        {children}
      </div>
    </div>
  );
}
