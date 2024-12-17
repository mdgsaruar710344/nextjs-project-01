"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Modal({children}) {
  const router=useRouter();


  const[isOpen,setIsOpen]=useState(true);

const handleClose=()=>{
  setIsOpen(false);
  router.back();
}


  return (
    <div>
      <div className='fixed'>
            {isOpen && <div className='bg-slate-500 opacity-40 relative'> Opened now
                <div className='w-[500px] h-[500px]' onClick={(e)=>{e.stopPropagation()}}> 
                  {children}
                   <button className='text-red-800 bg-green-600' onClick={handleClose}>close now</button> 
                </div>
          </div>}
      </div>

    </div>
  );
}

export default Modal;