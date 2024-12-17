
import { getSinglePhoto } from '@/app/lib/image-data';
import Image from 'next/image';
import React from 'react';

const  SinglePhotoPage=async ({params}) =>{
const paramid= params?.id;
const singlephotodata=await fetch(`http://localhost:3000/api/photos/${paramid}`);
const singlephoto= await singlephotodata.json();
const {id, url,title,tags,views,author,likes}=singlephoto;
  return (
    <div>
      This is single photo page!
      <br></br>
      Title: {title}
      ID: {id?id:'No id'}
      <br></br>
      <Image
      alt='single photo'
      src={url}
      width={300}
      height={300}
      
      
      ></Image>
    </div>
  );
}

export default SinglePhotoPage;