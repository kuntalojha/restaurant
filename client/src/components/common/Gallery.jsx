import React from 'react';
import UserHeader from '../user/userHeader';
import Footer from './Footer';

const Gallery = () => {
  return (
    <div>
      <UserHeader />
      <div className='h-screen'>
        <h1>Gallery</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
