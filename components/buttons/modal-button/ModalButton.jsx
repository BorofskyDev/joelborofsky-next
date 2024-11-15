// components/buttons/modal-button/ModalButton.jsx
'use client'

import { useState, useRef } from 'react'
import Modal from '@/components/modals/Modal'
import styles from './ModalButton.module.scss'

export default function ModalButton({
  className,
  children,
  modalContent,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button
        className={`border-2 br-9 ${styles.modalButton} ${className}`}
        onClick={openModal}
        ref={buttonRef}
        {...props}
       
      >
        {children}
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} originRef={buttonRef}>
        {modalContent}
      </Modal>
    </>
  )
}
