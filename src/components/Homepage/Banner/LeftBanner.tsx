import OrderNowButton from '@/components/buttons/OrderNowButton';

export default function LeftBanner({ className }: { className?: string }) {
  return (
    // <div
    //   className={`flex h-full flex-col items-center justify-center font-coiny text-secondary md:items-start ${className}`}
    // >
    //   <div className='flex h-full flex-col text-center md:text-right -ml-5'>
    //     <div className='text-3xl lg:text-6xl'>Sites Built Different,</div>
    //     <div className='text-2xl lg:text-5xl -ml-5'>
    //       <span className='text-primary'>{"Just"}</span> Like You!
    //     </div>
    //     <OrderNowButton className='mt-10 self-center lg:mt-32 lg:w-1/2' />
    //   </div>
    // </div>
    <div
      className={`flex h-full flex-col items-center justify-center font-sans text-secondary md:items-start ${className}`}
    >
      <div className='-ml-5 flex h-full flex-col text-center md:text-right'>
        <div className='text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl'>
          Sites Built Different,
        </div>
        <div className='-ml-5 text-3xl font-bold tracking-tight lg:text-5xl'>
          <span className='text-primary'>{'Just'}</span> Like You!
        </div>
        <OrderNowButton className='mt-10 self-center lg:mt-32 lg:w-1/2' />
      </div>
    </div>
  );
}
