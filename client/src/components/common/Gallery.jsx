import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import img from '../../assets/hero.png';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  return (
    <div id='gallery' className='h-screen flex items-center justify-center '>
      <div className='relative w-full max-w-4xl'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-right m-2'>
          GALLERY
        </h1>

        <Button className='lg:h-20 lg:w-25 lg:m-5 h-10 w-25 m-2'>
          <NavLink
            className=' text-4xl font-extrabold tracking-tight lg:text-5xl text-left m-2 p-10 hover:underline hover:text-yellow-500'
            to={'/menu'}
          >
            MENU
          </NavLink>
        </Button>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className='flex items-center justify-center'
        >
          <CarouselContent className='flex space-x-4'>
            <CarouselItem className='flex justify-center items-center'>
              <img
                src={img}
                width={'45%'}
                height={'auto'}
                alt='Carousel item 1'
                className='object-contain'
              />
            </CarouselItem>
            <CarouselItem className='flex justify-center items-center'>
              <img
                src={img}
                width={'45%'}
                height={'auto'}
                alt='Carousel item 2'
                className='object-contain'
              />
            </CarouselItem>
            <CarouselItem className='flex justify-center items-center'>
              <img
                src={img}
                width={'45%'}
                height={'auto'}
                alt='Carousel item 3'
                className='object-contain'
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className='absolute left-0 top-1/2 transform -translate-y-1/2' />
          <CarouselNext className='absolute right-0 top-1/2 transform -translate-y-1/2' />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
