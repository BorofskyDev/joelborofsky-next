// components/modals/Modal.jsx
'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Modal.module.scss'

export default function Modal({
  isOpen,
  onClose,
  children,
  originRef,
  modalBg,
}) {
  // Handle closing the modal when pressing the Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className={`${styles.modalOverlay}`}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className={`border-4 br-8 bs-4 ${modalBg} ${styles.modalContent}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, x: '-50%', y: '-50%' }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
              aria-label='Close Modal'
            >
              &times;
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
