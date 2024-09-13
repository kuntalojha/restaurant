import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import img from '../../assets/hero.png';

const Gallery = () => {
  return (
    <div id='gallery' className='h-screen flex items-center justify-center'>
      <div className='relative w-full max-w-4xl'>
        <h1 className='scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl text-right'>
          GALLERY
        </h1>

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
                width={'50%'}
                height={'auto'}
                alt='Carousel item 1'
                className='object-contain'
              />
            </CarouselItem>
            <CarouselItem className='flex justify-center items-center'>
              <img
                src={img}
                width={'50%'}
                height={'auto'}
                alt='Carousel item 2'
                className='object-contain'
              />
            </CarouselItem>
            <CarouselItem className='flex justify-center items-center'>
              <img
                src={img}
                width={'50%'}
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
