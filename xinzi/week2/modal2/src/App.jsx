import { useState } from 'react'
import Modal from './components/Modal.jsx'
import './App.css'

function App() {

  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <h2>안녕하세요!</h2>
      <p>종강을 원하시나요?</p>
      <div>
       <button className="open-btn" onClick={openModal}>신청</button>
      </div>
      {showModal && <Modal closeModal={closeModal} />}
    </>
  )
}

export default App
