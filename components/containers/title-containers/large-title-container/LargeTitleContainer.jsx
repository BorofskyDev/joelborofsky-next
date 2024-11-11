import styles from './LargeTitleContainer.module.scss'

export default function LargeTitleContainer({ className, children }) {
  return (
    <div
      className={`border-4 br-9 fw-bold bs-400 fs-600 ${styles.largeTitleContainer} ${className}`}
    >
      {children}
    </div>
  )
}
