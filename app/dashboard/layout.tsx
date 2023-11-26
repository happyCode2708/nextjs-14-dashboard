import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen md:flex-row flex-col p-[3px]'>
      <div className='w-full md:w-64 md:mr-1'>
        <SideNav />
      </div>
      <div className='h-screen flex-1 overflow-auto'>{children}</div>
    </div>
  );
}
