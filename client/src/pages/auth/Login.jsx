import React from 'react';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const Login = () => {
  return (
    <div>
      <Header />
      {/* <div className='h-screen lg:flex lg:justify-center '>
        <div className='p-10 '>
          <div className='grid w-full max-w-sm items-center gap-1.5 pb-10'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' placeholder='Email' />
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5 pb-10'>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' placeholder='Email' />
          </div>
        </div>
      </div> */}

      <div className='h-screen flex justify-center items-center'>
        <div className='p-10 w-full max-w-lg'>
          <div className='grid w-full items-center gap-1.5 pb-5'>
            <Label htmlFor='email'>User Name</Label>
            <Input
              type='text'
              id='username'
              placeholder='Username'
              className='w-full lg:w-96'
            />
          </div>
          <div className='grid w-full items-center gap-1.5 pb-10'>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              placeholder='Password'
              className='w-full lg:w-96'
            />
          </div>
          <Button type='submit'>Login</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
