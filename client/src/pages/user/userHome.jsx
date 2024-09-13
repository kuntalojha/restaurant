import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroImg from '../../assets/hero.png';
import Gallery from '@/components/common/Gallery';
const UserHome = () => {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div className='h-max overflow-hidden'>
        <div className='grid  max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 lg:grid-cols-2'>
          <div>
            <h1 className='scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl'>
              Enjoy Our <br /> Delicious Meal
            </h1>
            <p className='leading-7 [&:not(:first-child)]:mt-6'>
              Once upon a time, in a far-off land, there was a very lazy king
              who spent all day lounging on his throne. One day, his advisors
              came to him with a problem: the kingdom was running out of money.
            </p>
            <Button
              asChild
              className='flex items-center mt-10 lg:mt-20 lg:h-12 w-80% md:w-50 '
            >
              <NavLink to='/menu'>MENU</NavLink>
            </Button>
          </div>
          <div className='flex justify-center animate-spin-slow hover:animate-none'>
            <img src={HeroImg} alt='Hero Image' width={'80%'} height={'auto'} />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <hr className='border-t-2 py-10 text-slate-500' />
      <Gallery />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default UserHome;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import Header from '@/components/common/Header';
// import Footer from '@/components/common/Footer';
// import HeroImg from '../../assets/hero.png';

// const UserHome = () => {
//   return (
//     <div>
//       <Header />
//       <div className='h-max overflow-hidden'>
//         <div className='grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 lg:grid-cols-2'>
//           <div>
//             <h1 className='scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl'>
//               Enjoy Our <br /> Delicious Meal
//             </h1>
//             <p className='leading-7 [&:not(:first-child)]:mt-6'>
//               Once upon a time, in a far-off land, there was a very lazy king
//               who spent all day lounging on his throne. One day, his advisors
//               came to him with a problem: the kingdom was running out of money.
//             </p>
//             <Button
//               asChild
//               className='flex items-center mt-10 lg:mt-20 lg:h-12 w-4/5 md:w-2/4'
//             >
//               <NavLink to='/menu'>MENU</NavLink>
//             </Button>
//           </div>
//           <div className='relative flex justify-center'>
//             <img src={HeroImg} alt='Hero Image' className='w-4/5 h-auto z-10' />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default UserHome;
