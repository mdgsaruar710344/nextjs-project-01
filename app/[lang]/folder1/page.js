import Link from 'next/link';
import React from 'react';

function Folder1() {
  return (
    <div>
      Folder1
      <Link href='/folder2'>Folder 2 Link
      </Link>
    </div>
  );
}

export default Folder1;