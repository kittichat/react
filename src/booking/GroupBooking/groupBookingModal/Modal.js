
import React from 'react'
import ReactDom from 'react-dom'
import Form from './CreateForm'
import FocusTrap from 'focus-trap-react'
// don't forget to import modal css
// import '../../css/Modal.css'

export const Modal =({
    onClickOutside,
    onKeyDown,
    modalRef,
    buttonRef,
    closeModal,
    onSubmit,
    bookingDetail,
    bookingDetail3,
    date,
}) => {
    return ReactDom.createPortal(
        <FocusTrap>
            <aside
                tag='aside'
                role='dialog'
                tabIndex='-1'
                aria-modal='true'
                className='modal-cover'
                onClick={onClickOutside}
                onKeyDown={onKeyDown}
                >
                    <div className="modal-area" ref={modalRef}>
                        <button
                            ref={buttonRef}
                            aria-label="close Modal"
                            aria-labelledby="clsoe-modal"
                            className="_modal-close"
                            onClick={closeModal}
                            >
                                <span id="clsoe-modal" className="_hide-visual">
                                    close
                                </span>
                                <svg className="_modal-close-icon" viewBox="0 0 40 40">
                                     <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                                </svg>
                            </button>
                            <div className="modal-body">
                                <Form 
                                    onSubmit={onSubmit} 
                                    bookingDetail={bookingDetail} 
                                    bookingDetail3={bookingDetail3}
                                    date={date}
                                    test1={"it's work"}
                                     />
                            </div>
                    </div>
                </aside>
        </FocusTrap>,
        document.body
    )
}

export default Modal