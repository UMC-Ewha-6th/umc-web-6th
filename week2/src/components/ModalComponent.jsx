import React from 'react';
import '../Training/Modal.css';

function ModalComponent({ onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-title">안녕하세요</div>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <button className="modal-close-btn" onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default ModalComponent;