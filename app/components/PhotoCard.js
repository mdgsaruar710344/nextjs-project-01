import Image from 'next/image';
import React from 'react';

function PhotoCard({photo}) {
  const {id,url}=photo;
  return (
    <div>
      This is photo card!
      Id: {id}
      Url: {url}
      <Image
      alt='photo-card'
      src={url}
      width={100}
      height={100}
      
      >

      </Image>
    </div>
  );
}

export default PhotoCard;