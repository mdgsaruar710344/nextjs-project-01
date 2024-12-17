import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function PhotoCard({photo}) {
  const {id,url}=photo;
  return (
    <div className='p-6 m-4 border-red-600 border-2 w-1/4'>
    <Link href={`/photos/${id}`}>
        <div>
      This is photo card!
      {/* Id: {id}
      Url: {url} */}
      <Image
      alt='photo-card'
      src={url}
      width={100}
      height={100}
      
      >

      </Image>
    </div>
    </Link>
    </div>


  );
}

export default PhotoCard;