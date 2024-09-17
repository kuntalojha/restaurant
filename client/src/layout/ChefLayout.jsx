import ChefHeader from '@/components/chef/ChefHeader';
import Footer from '@/components/common/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';

const ChefLayout = () => {
  return (
    <div>
      <ChefHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ChefLayout;
