import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '@/components/admin/AdminHeader';
import Footer from '@/components/common/Footer';

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
