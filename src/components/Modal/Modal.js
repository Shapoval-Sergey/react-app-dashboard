import React, { useEffect } from 'react';

import s from './Modal.module.css';

export default function Modal({ closeModal, children }) {
  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const handleClick = e => {
    if (e.target.id === 'close') {
      closeModal();
    }
  };

  return (
    <div className={s.overlay}>
      <div className={s.close} onClick={handleClick}>
        <svg width="15" viewBox="0 0 15 15" id="close">
          <path
            d="M13.365 14.2771L7.49676 8.40887L1.7805 14.1251L0.837928 13.1825L6.55418 7.46629L0.716307 1.62842L1.59807 0.746657L7.43594 6.58453L13.1826 0.837873L14.1252 1.78045L8.37852 7.52711L14.2468 13.3954L13.365 14.2771Z"
            fill="#181C27"
          />
        </svg>
      </div>
      <div className={s.modalBody} onClick={handleClick}>
        {children}
      </div>
    </div>
  );
}
