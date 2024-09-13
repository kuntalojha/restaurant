import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { ModeToggle } from './mode-toggle';

const Header = () => {
  return (
    <div className='text-bold text-xl  bg-slate-300 dark:bg-slate-600'>
      <div className='flex items-center justify-between text-center h-20 px-4'>
        {/* Left section (Logo) */}
        <div className='flex items-center'>
          <Link to='/'>
            <img src={logo} alt='Logo' width={30} height={30} />
          </Link>
        </div>

        {/* Center section (Nav Links) */}
        <div className='flex items-center space-x-4 flex-grow justify-center'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink to='/gallery'>Gallery</NavLink>
        </div>

        {/* Right section (Card) */}
        <div className='flex items-center'>
          <NavLink to='/login'>Login</NavLink>
        </div>
        {/* Dark Mode and Light Mode */}
        <div className='flex items-center px-4'>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
