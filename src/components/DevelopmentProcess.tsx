'use client';

import {
  FaUserCog,
  FaSearch,
  FaPencilRuler,
  FaLaptopCode,
  FaChartLine,
  FaBullhorn
} from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'CONSULTING',
    description: `Choosing right technology, web address, and hosting plan.`,
    icon: <FaUserCog size={22} />,
    gradient: 'from-pink-500 to-red-500'
  },
  {
    id: 2,
    title: 'ANALYSIS',
    description: `Analyzing requirements and defining strategy.`,
    icon: <FaSearch size={22} />,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    title: 'DESIGNING',
    description: `Custom UI/UX design and creative visuals.`,
    icon: <FaPencilRuler size={22} />,
    gradient: 'from-purple-500 to-violet-500'
  },
  {
    id: 4,
    title: 'DEVELOPMENT',
    description: `Full-stack development for B2B, B2C, Marketplace.`,
    icon: <FaLaptopCode size={22} />,
    gradient: 'from-orange-500 to-yellow-400'
  },
  {
    id: 5,
    title: 'OPTIMIZATION',
    description: `Boost conversions, improve user journey, promotions.`,
    icon: <FaChartLine size={22} />,
    gradient: 'from-teal-400 to-cyan-500'
  },
  {
    id: 6,
    title: 'PROMOTION',
    description: `Digital marketing with Owned, Earned & Paid media.`,
    icon: <FaBullhorn size={22} />,
    gradient: 'from-indigo-500 to-violet-600'
  }
];

export default function DevelopmentProcess() {
  return (
    <section className='bg-black px-6 py-16'>
      <div className='mx-auto max-w-7xl text-center'>
        <h2 className='mb-14 text-3xl font-light leading-snug text-white sm:text-4xl'>
          WANT TO START{' '}
          <span className='font-extrabold text-indigo-500'>A WEB DEVELOPMENT PROJECT,</span>
          <br />
          HERE IS HOW WE CAN HELP
        </h2>

        {/* Container */}
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-6'>
          {steps.map((step, index) => (
            <div key={step.id} className='flex flex-col items-center md:flex-1 md:flex-row'>
              {/* Card */}
              <div
                className='mx-auto flex h-full min-h-[220px] 
                w-full max-w-[280px] flex-col items-center rounded-xl border 
                border-gray-800 bg-gray-900/80 p-6 
                text-center shadow-md transition duration-300 hover:border-indigo-500 md:max-w-[200px]'
              >
                <div
                  className={`mb-4 h-14 w-14 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {step.icon}
                </div>
                <h3 className='mb-2 text-lg font-bold text-white'>{step.title}</h3>
                <p className='text-base leading-snug text-gray-300'>{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <>
                  {/* Mobile: arrow below box */}
                  <div className='my-4 block md:hidden'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='mx-auto h-6 w-6 text-indigo-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                    </svg>
                  </div>

                  {/* Desktop: arrow to the right */}
                  <div className='hidden items-center px-2 md:flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 flex-shrink-0 text-indigo-500'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
