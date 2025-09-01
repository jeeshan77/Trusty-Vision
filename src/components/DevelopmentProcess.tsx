"use client";

import {
  FaUserCog,
  FaSearch,
  FaPencilRuler,
  FaLaptopCode,
  FaChartLine,
  FaBullhorn,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "CONSULTING",
    description: `Choosing right technology, web address, and hosting plan.`,
    icon: <FaUserCog size={22} />,
    gradient: "from-pink-500 to-red-500",
  },
  {
    id: 2,
    title: "ANALYSIS",
    description: `Analyzing requirements and defining strategy.`,
    icon: <FaSearch size={22} />,
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: 3,
    title: "DESIGNING",
    description: `Custom UI/UX design and creative visuals.`,
    icon: <FaPencilRuler size={22} />,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: 4,
    title: "DEVELOPMENT",
    description: `Full-stack development for B2B, B2C, Marketplace.`,
    icon: <FaLaptopCode size={22} />,
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    id: 5,
    title: "OPTIMIZATION",
    description: `Boost conversions, improve user journey, promotions.`,
    icon: <FaChartLine size={22} />,
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    id: 6,
    title: "PROMOTION",
    description: `Digital marketing with Owned, Earned & Paid media.`,
    icon: <FaBullhorn size={22} />,
    gradient: "from-indigo-500 to-violet-600",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-light text-white mb-14 leading-snug">
          WANT TO START{" "}
          <span className="font-extrabold text-indigo-500">
            A WEB DEVELOPMENT PROJECT,
          </span>
          <br />
          HERE IS HOW WE CAN HELP
        </h2>

        {/* Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center md:flex-row md:flex-1">
              {/* Card */}
              <div
                className="flex flex-col items-center text-center 
                bg-gray-900/80 p-6 rounded-xl shadow-md border border-gray-800 
                hover:border-indigo-500 transition duration-300 
                w-full h-full min-h-[220px] max-w-[280px] md:max-w-[200px] mx-auto"
              >
                <div
                  className={`w-14 h-14 mb-4 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-gray-300 leading-snug">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <>
                  {/* Mobile: arrow below box */}
                  <div className="block md:hidden my-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-500 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  {/* Desktop: arrow to the right */}
                  <div className="hidden md:flex items-center px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
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
