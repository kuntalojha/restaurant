import React from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from './userHeader';
import Footer from '../common/Footer';

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
