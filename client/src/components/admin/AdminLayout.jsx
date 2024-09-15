import React from 'react';
import AdminHeader from './AdminHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminLayout;
