'use client'
import { motion } from 'framer-motion'
import styles from './MediumIconImage.module.scss'

export default function MediumIconImg({ icon, viewBox, className }) {
  const iconClasses = `${styles.mediumIconImg} ${className || ''}`

  return (
    <svg viewBox={viewBox} className={iconClasses}>
      <motion.path d={icon} />
    </svg>
  )
}
