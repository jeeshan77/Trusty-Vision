// 'use client';
// import HomepageAboutUs from '@/components/Homepage/AboutUs';
// import HomepageBanner from '@/components/Homepage/Banner/Banner';
// import CoreSection from '@/components/coreservices';
// import ConsultationForm from '@/components/Homepage/Consultation/Consultation';
// // import HomepageExamples from '@/components/Homepage/Examples';
// import HomepageFooter from '@/components/Homepage/Footer';
// import Herobanner from '@/components/HeroSection';

// import HomepageHeader from '@/components/Homepage/Header';
// import HomepageReviews from '@/components/Homepage/Reviews';
// import HomepageTechnologies from '@/components/Homepage/Technologies';
// import '@/components/Homepage/styles/spotlights.css';
// import { useEffect, useState } from 'react';
// import DevelopmentProcess from '@/components/DevelopmentProcess';
// import CreditFooter from '@/components/CreditFotter'


// export default function Home() {
//   const [domLoaded, setDomLoaded] = useState(false);
//   useEffect(() => {
//     setDomLoaded(true);
//   }, []);
//   return (
//     <>
//       {domLoaded && (
//         <div className='flex h-full w-full flex-col gap-5'>
//           <HomepageHeader />
//           <HomepageBanner className='mt-52' />
//           <CoreSection/>
//           {/* <HomepageExamples /> */}
//           <HomepageTechnologies />
//           <HomepageReviews />
//           <HomepageAboutUs />
//           <Herobanner/>
//           <DevelopmentProcess/>
//           {/* <ContactUsForm /> */}
//           <ConsultationForm />
//           <HomepageFooter />
//           <CreditFooter/>
//         </div>
//       )}
//     </>
//   );
// }
'use client';
import HomepageAboutUs from '@/components/Homepage/AboutUs';
import HomepageBanner from '@/components/Homepage/Banner/Banner';
import CoreSection from '@/components/coreservices';
import ConsultationForm from '@/components/Homepage/Consultation/Consultation';
// import HomepageExamples from '@/components/Homepage/Examples';
import HomepageFooter from '@/components/Homepage/Footer';
import Herobanner from '@/components/HeroSection';

import HomepageHeader from '@/components/Homepage/Header';
import HomepageReviews from '@/components/Homepage/Reviews';
import HomepageTechnologies from '@/components/Homepage/Technologies';
import '@/components/Homepage/styles/spotlights.css';
import { useEffect, useState } from 'react';
import DevelopmentProcess from '@/components/DevelopmentProcess';
import CreditFooter from '@/components/CreditFotter';
import Preloader from '@/components/InfinityPreloader'; // 👈 import your preloader

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <Preloader>
          <div className="flex h-full w-full flex-col gap-5">
            <HomepageHeader />
            <HomepageBanner className="mt-52" />
            <CoreSection />
            {/* <HomepageExamples /> */}
            <HomepageTechnologies />
            <HomepageReviews />
            <HomepageAboutUs />
            <Herobanner />
            <DevelopmentProcess />
            {/* <ContactUsForm /> */}
            <ConsultationForm />
            <HomepageFooter />
            <CreditFooter />
          </div>
        </Preloader>
      )}
    </>
  );
}
