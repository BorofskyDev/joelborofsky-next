import styles from './SmallIconImg.module.scss'

export default function SmallIconImg({
  icon,
  viewBox,
  xmlns,
  iconFill,
  className,
}) {
  return (
    <svg
      viewBox={viewBox}
      xmlns={xmlns}
      className={`${styles.smallIconImg} ${className}`}
    >
      <path d={icon} className={iconFill} />
    </svg>
  )
}
