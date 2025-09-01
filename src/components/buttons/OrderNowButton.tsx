import gsap from 'gsap';
// import { ButtonHTMLAttributes, useEffect, useState } from 'react';
// import './styles/OrderNowButton.css';
// interface OrderNowButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
//   className?: string;
// }

// export default function OrderNowButton(props: OrderNowButtonProps) {
//   const { className } = props;

//   const [sectionId, setSectionId] = useState('');
//   useEffect(() => {
//     if (sectionId.length)
//       gsap.to(window, {
//         duration: 1,
//         scrollTo: {
//           y: sectionId,
//           autoKill: false
//         }
//       });
//     setSectionId('');
//   }, [sectionId]);

//   return (
//     <div
//       className={`${className} box translate-x-0 cursor-pointer rounded-xl bg-gray-600/50 px-5 py-4 text-center font-coiny text-2xl text-secondary shadow [@media(min-width:1000px)]:text-[25px] [@media(min-width:1200px)]:text-4xl`}
//       onClick={() => {
//         setSectionId('#contactUs');
//       }}
//     >
//       Order now!
//     </div>
//   );
// }
import { ButtonHTMLAttributes } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 13+ app router
import './styles/OrderNowButton.css';

interface OrderNowButtonProps extends ButtonHTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function OrderNowButton(props: OrderNowButtonProps) {
  const { className } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push('/order-now'); // redirect to your new order page
  };

  return (
    // <div
    //   className={`${className} box translate-x-0 cursor-pointer rounded-xl bg-gray-600/50 px-5 py-4 text-center font-coiny text-2xl text-secondary shadow [@media(min-width:1000px)]:text-[25px] [@media(min-width:1200px)]:text-4xl`}
    //   onClick={handleClick}
    // >
    //   Order now!
    // </div>
    <div
      className={`${className} relative inline-block cursor-pointer rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 px-10 py-4 text-center font-bold text-white text-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:animate-pulse`}
      onClick={handleClick}
    >
      Order Now!
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-white rounded-full transition-all duration-300 group-hover:w-3/4"></span>
    </div>


  );
}
