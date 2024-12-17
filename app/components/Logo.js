import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/lws_logo.png'
import Link from 'next/link';

function Logo() {
  return (
    <Link href='/'>
    <div>
            <Image
        alt='logo'
        src={logo}
        width={50}
        height={50}
        
        ></Image>
    </div>
    </Link>
  );
}

export default Logo;