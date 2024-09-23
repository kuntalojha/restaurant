import React from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// import MenuImg from '../../assets/menu.png';
import { Button } from '../ui/button';

// const image = MenuImg;
const title = 'Vesper debilito beneficium umquam statim.';
const description =
  'Fresh mixed greens tossed with ginger-rubbed venison, raspberry, and a light dressing.';

const MenuCard = () => {
  return (
    <div className='flex justify-center p-10'>
      <Card>
        <CardHeader>
          <img src='menu.png' alt='menu image' />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <Button className='w-full'>Go to Item</Button>
      </Card>
    </div>
  );
};

export default MenuCard;
