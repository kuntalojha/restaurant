import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const Login = () => {
  return (
    <div>
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
    </div>
  );
};

export default Login;
