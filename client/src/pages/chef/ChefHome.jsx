// import React from 'react';
// import Footer from '@/components/common/Footer';
// import Header from '@/components/common/Header';
// import { Outlet } from 'react-router-dom';
// const ChefHome = () => {
//   return (
//     <div>
//       <Header />
//       <div className='h-screen '>
//         <h1>Chef Home</h1>
//       </div>
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default ChefHome;

// import React from 'react';
// import { Outlet } from 'react-router-dom';

// const ChefHome = () => {
//   return (
//     <div>
//       <h1>Chef Home</h1>
//       {/* This will render the nested routes */}
//       <Outlet />
//     </div>
//   );
// };

// export default ChefHome;

import React from 'react';
import { Outlet } from 'react-router-dom'; // This will render nested routes

const ChefHome = () => {
  return (
    <div>
      <h1>Chef Home</h1>
      <p>Welcome to the Chef's home page.</p>
      {/* This is where nested routes will be rendered */}
      <Outlet />
    </div>
  );
};

export default ChefHome;
