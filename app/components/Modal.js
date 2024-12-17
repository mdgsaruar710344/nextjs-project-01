import React from 'react';

function Modal(props) {
let isOpen=true;

  return (
    <div>
      {isOpen && <div> Opened now</div>}
    </div>
  );
}

export default Modal;