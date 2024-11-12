'use client'

import { motion } from 'framer-motion'
import styles from './ProjectIconImg.module.scss'

export default function ProjectIconImg({
  icon,
  iconFill,
  viewBox,
  xmlns,
  className,
}) {
  const iconClasses = `${styles.projectIconImg} ${className || ''}`

  return (
    <motion.svg
      viewBox={viewBox}
      xmlns={xmlns}
      className={iconClasses}
      initial={{ scale: 0, y: 100 }}
      whileInView={{ scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 160, damping: 20 }}
    >
      <path d={icon} className={iconFill} />
    </motion.svg>
  )
}

