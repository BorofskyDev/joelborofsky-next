'use client'
import { motion } from 'framer-motion'
import SmallIconImg from './small-icon-img/SmallIconImg'
import styles from './SmallIcon.module.scss'

export default function SmallIcon({
  icon,
  viewBox,
  xmlns,
  iconFill,
  className,
  position,
}) {
  const positionClass = position === 'left' ? styles.left : styles.right

  return (
    <motion.div
      className={`absolute ${styles.smallIcon} ${positionClass} ${className}`}
      initial={{ x: position === 'left' ? 150 : -150, opacity: 1 }}
      whileInView={{
        rotate: position === 'left' ? 325 : -315,
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 160,
        damping: 12,
        duration: 0.3,
        ease: 'easeInOut',
      }}
      aria-hidden
    >
      <SmallIconImg
        icon={icon}
        viewBox={viewBox}
        xmlns={xmlns}
        iconFill={iconFill}
      />
    </motion.div>
  )
}
