'use client'

import { motion } from 'framer-motion'
import LargeIconImg from './large-icon-img/LargeIconImg'
import styles from './LargeIcon.module.scss'

export default function LargeIcon({ icon, viewBox, xmlns, className }) {
  const iconClasses = `${styles.largeIcon} ${className || ''}`

  return (
    <motion.div
      className={iconClasses}
      initial={{ scale: 0, y: 150 }}
      whileInView={{ rotate: 360, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 160, damping: 20 }}
    >
      <LargeIconImg icon={icon} viewBox={viewBox} xmlns={xmlns} />
    </motion.div>
  )
}
