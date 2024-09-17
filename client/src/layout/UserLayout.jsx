import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '@/components/user/userHeader';
import Footer from '@/components/common/Footer';

const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default UserLayout;
