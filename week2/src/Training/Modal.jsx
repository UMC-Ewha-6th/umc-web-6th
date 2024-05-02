import React, { useState } from 'react';
import ModalComponent from '../components/ModalComponent';
import './Modal.css';

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
    console.log('모달이 켜짐');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    console.log('모달이 꺼짐');
  };

  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button className='modal-open-btn' onClick={handleOpenModal}>버튼 열기</button>

      {modalOpen && <ModalComponent onClose={handleCloseModal} />}
    </>
  );
}

export default Modal;