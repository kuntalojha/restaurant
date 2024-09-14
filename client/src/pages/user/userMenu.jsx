import React from 'react';
import Footer from '@/components/common/Footer';
import UserHeader from '@/components/user/userHeader';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import MenuImg from '../../assets/menu.png';
const UserMenu = () => {
  return (
    <div>
      <UserHeader />
      <div className='h-min lg:flex jitify-center'>
        <div className='p-10 '>
          <Card>
            <CardHeader>
              <img src={MenuImg} alt='menu image' />
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
        <div className='p-10 '>
          <Card>
            <CardHeader>
              <img src={MenuImg} alt='menu image' />
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>{' '}
        <div className='p-10 '>
          <Card>
            <CardHeader>
              <img src={MenuImg} alt='menu image' />
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>{' '}
        <div className='p-10 '>
          <Card>
            <CardHeader>
              <img src={MenuImg} alt='menu image' />
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserMenu;
