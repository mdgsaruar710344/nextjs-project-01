"use client"
import Modal from '@/app/components/Modal';
import Link from 'next/link';
import React from 'react';

function Folder1() {
  return (
    <div>
      Folder1
      <Link href='/folder2'>Folder 2 Link
      </Link>
      <div className='p-5 m-5'>
        <Modal></Modal>
      </div>
    </div>
  );
}

export default Folder1;