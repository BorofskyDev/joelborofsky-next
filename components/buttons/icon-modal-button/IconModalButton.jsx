'use client'
import { useState, useRef } from 'react'
import Modal from '@/components/modals/Modal'
import styles from './IconModalButton.module.scss'
import LargeIcon from '@/components/icons/large-icon/LargeIcon'
import SmallTitleContainer from '@/components/containers/title-containers/small-title-container/SmallTitleContainer'

export default function IconModalButton({
  className,
  label,
  icon,
  viewBox,
  xmlns,
  modalContent,
  modalBg,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button
        className={`relative ${styles.iconModalButton}`}
        onClick={openModal}
        ref={buttonRef}
        {...props}
      >
        <LargeIcon className={className} icon={icon} xmlns={xmlns} viewBox={viewBox} />
        <SmallTitleContainer className={className}>{label}</SmallTitleContainer>
      </button>
      <Modal modalBg={modalBg} isOpen={isOpen} onClose={closeModal} originRef={buttonRef}>
        {modalContent}
      </Modal>
    </>
  )
}