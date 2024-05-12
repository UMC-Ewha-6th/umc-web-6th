import { useState } from 'react';
import '../App.jsx';

function Modal({ closeModal }) {
  return (
    <>
      <div className="modal">
        <div className="modalBox">
          <div className="text">
            <div className="modalLarge">안녕하세요</div>
            <div className="modalSmall">모달 내용은 어쩌고 저쩌고..</div>
          </div>
          <div className="btnBox">
            <button className="modalBtn" onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
