import './Modal.css'

function Modal({closeModal}) {

    return (
        <>
            <div className="modal-wrapper">
                 <div className="modal">
                    <h2 className="modal-title">정말 종강을 신청하시겠습니까?</h2>
                    <p className="modal-content">(이 선택은 되돌릴 수 없습니다)</p>
                <div className="close-div">
                    <button className="close-btn" onClick={closeModal}>확인</button>
                </div>
            </div>
        </div>
      </>
    )
}

export default Modal