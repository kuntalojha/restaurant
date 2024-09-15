import React from 'react';
import ChefHeader from './ChefHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';

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
