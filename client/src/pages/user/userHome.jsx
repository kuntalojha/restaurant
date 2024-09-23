import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
// import HeroImg from '../../assets/hero.png';
const UserHome = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='h-max overflow-hidden lg:ml-5 ml-0'>
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
            <img src='hero.png' alt='Hero Image' width={'80%'} height={'auto'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
