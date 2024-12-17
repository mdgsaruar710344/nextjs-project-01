import Modal from '@/app/components/Modal';
import getDictionary from '@/app/lib/dictionaries';
import { getSinglePhoto } from '@/app/lib/image-data';
import Image from 'next/image';
import React from 'react';

const Idinterceptorage = async ({params})=> {
  const paramsId=params?.id
  const singlePhoto= await fetch(`http://localhost:3000/api/photos/${paramsId}`);
  const photo=await singlePhoto.json();
   const {id, url,title,tags,views,author,likes}=photo;
   const lang=params?.lang;
   const dictionary=await getDictionary(lang)
   console.log('language is:',lang);
   console.log(dictionary);
 
  return (
    
      <Modal>
          Hello interceptor!
          ID:{id}
          Title: {title}
          <br></br>
          {dictionary.views}: {views}
          <br/>
          <Image
          alt='single-photo'
          src={url}
          width={200}
          height={200}
          
          ></Image>
      </Modal>
  
    
  );
}
export default Idinterceptorage;