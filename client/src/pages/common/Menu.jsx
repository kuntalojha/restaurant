import React from 'react';
import MenuCard from '@/components/common/MenuCard';

const UserMenu = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4'>
      <MenuCard/>
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </div>
  );
};

export default UserMenu;
