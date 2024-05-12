import { useState } from 'react';
import Modal from '../components/Modal';
import '../styles/modal.css';

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickModal = () => {
    setIsOpen(true);
    console.log('모달이 켜짐');
  };

  const onClickCloseModal = () => {
    setIsOpen(false);
    console.log('모달이 꺼짐');
  };

  return (
    <div className="modalContent">
      {isOpen ? <Modal closeModal={onClickCloseModal} /> : <></>}
      <div className="large">안녕하세요!</div>
      <div className="small">내용내용내용</div>
      <button className="btn" onClick={onClickModal}>
        버튼 열기
      </button>
    </div>
  );
}

export default ModalPage;
