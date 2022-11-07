import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext, AppProvider } from './context'

const Modal = () => {
  const {closeModal, isModalOpen}= useContext(AppContext)
  return (
    <div className={`${
      isModalOpen  ? 'modal-overlay show-modal' : "modal-overlay"}`}>
     <div className='modal-container'>
      <h3> modal content </h3>
      <button className='close-modal-btn' onClick={closeModal}>
     <FaTimes/>
      </button>
     </div>
    </div>
  )
}

export default Modal
