'use client'

import { motion } from 'framer-motion'
import styles from './LargeIconImg.module.scss'

export default function LargeIconImg({ icon, viewBox, className }) {


  return (
    <svg viewBox={viewBox} className={`${styles.largeIconImg} ${className}`}>
      <motion.path d={icon} />
    </svg>
  )
}