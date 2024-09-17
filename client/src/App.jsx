import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from './layout/UserLayout';
import UserHome from './pages/user/UserHome';
import Menu from './pages/common/Menu';
import UserItem from './pages/user/UserItem';
import UserCheckOut from './pages/user/UserCheckOut';
import PageNotFount from './pages/common/PageNotFount';
import ChefHome from './pages/chef/ChefHome';
import ChefLayout from './layout/ChefLayout';
import AdminLayout from './layout/AdminLayout';
import AdminHome from './pages/admin/AdminHome';
import ChefOrder from './pages/chef/ChefOrder';
import Login from './pages/auth/Login';
import PaymentGateway from './pages/common/PaymentGateway';

function App() {
  return (
    <div>
      <Routes>
        {/*  */}
        <Route path='/' element={<UserLayout />}>
          <Route index path='/' element={<UserHome />} />
          <Route path='menu' element={<Menu />} />
          <Route path='item' element={<UserItem />} />
          <Route path='card' element={<UserCheckOut />} />
          <Route path='payment' element={<PaymentGateway />} />
        </Route>

        {/* Chef Routes */}
        <Route path='/chef' element={<ChefLayout />}>
          <Route index path='/chef' element={<Login />} />
          <Route path='home' element={<ChefHome />} />
          <Route path='item' element={<ChefOrder />} />
        </Route>

        {/* Admin Routes */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route index path='/admin' element={<Login />} />
          <Route path='home' element={<AdminHome />} />
          <Route path='menu' element={<Menu />} />
        </Route>

        {/* Login Route */}
        {/* <Route path='/login' element={<Login />} /> */}

        {/* 404 Page Not Found  */}
        <Route path='*' element={<PageNotFount />} />
      </Routes>
    </div>
  );
}

export default App;
