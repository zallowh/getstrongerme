import React from 'react';
import logohead from '../assets/tittlelogo.png';

const Logo = ({ w, h }) => {
  return (
    <div className='p-0'>
      <img src={logohead} alt="logo" width={w} />
    </div>
  );
}

export default Logo;
