import React from 'react';

const Footer = () => {
  return (
    <div>
      <hr className='border-t-2 border-gray-300  mx-auto ' />
      <div className='text-center  text-sm h-20 flex justify-center items-center space-x-4  bg-slate-300 dark:bg-slate-600'>
        <h1>“This website is designed and maintained by” - Kuntal.</h1>
        <p>Copyright &copy; 2024</p>
      </div>
    </div>
  );
};

export default Footer;
