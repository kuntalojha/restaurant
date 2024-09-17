import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { ModeToggle } from '@/theme/mode-toggle';

const AdminHeader = () => {
  return (
    <div className='text-bold text-xl  bg-slate-300 dark:bg-slate-600 sticky top-0 z-50'>
      <div className='flex items-center justify-between text-center h-20 px-4'>
        {/* Left section (Logo) */}
        <div className='flex items-center'>
          <Link to='/admin'>
            <img src={logo} alt='Logo' width={30} height={30} />
          </Link>
        </div>

        {/* Center section (Nav Links) */}
        <div className='flex items-center space-x-4 flex-grow justify-center'>
          <NavLink
            to='/admin'
            className={({ isActive }) =>
              isActive ? 'text-yellow-500' : 'text-white'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/admin/menu'
            className={({ isActive }) =>
              isActive ? 'text-yellow-500' : 'text-white'
            }
          >
            Menu
          </NavLink>
          {/* <NavLink to='/gallery'>Gallery</NavLink> */}
        </div>

        {/* Right section (Card) */}
        <Button variant='outline' asChild className='flex items-center'>
          <NavLink to='/login'>Login</NavLink>
        </Button>

        {/* <div className='flex items-center'>
          <NavLink to='/login'>Login</NavLink>
        </div> */}
        {/* Dark Mode and Light Mode */}
        <div className='flex items-center px-4'>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
