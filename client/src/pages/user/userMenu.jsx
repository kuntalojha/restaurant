import React from 'react';
import Footer from '@/components/common/Footer';
import UserHeader from '@/components/user/userHeader';

const UserMenu = () => {
  return (
    <div>
      <UserHeader />
      <div className='h-screen bg-slate-300'>
        <h1>User Menu</h1>
      </div>
      <Footer />
    </div>
  );
};

export default UserMenu;
