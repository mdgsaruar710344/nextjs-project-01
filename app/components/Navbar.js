import React from 'react';

import Image from 'next/image';
import Logo from './Logo';
import Link from 'next/link';

function Navbar(props) {
  return (
    <div className='flex justify-between'>
      <Logo></Logo>
      This is Navbar!
    </div>
   

  );
}

export default Navbar;