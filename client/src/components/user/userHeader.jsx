import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const UserHeader = () => {
  return (
    <div className='text-bold text-xl'>
      <div className='flex items-center justify-between bg-slate-800 text-white text-center h-20 px-4'>
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
          <NavLink to='/card'>Card</NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
