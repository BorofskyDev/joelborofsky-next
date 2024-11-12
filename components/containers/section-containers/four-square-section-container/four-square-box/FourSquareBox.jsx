import styles from './FourSquareBox.module.scss'

export default function FourSquareBox({ children, className }) {
  return (
    <div className={`${styles.fourSquareBox} ${className}`}>{children}</div>
  )
}
