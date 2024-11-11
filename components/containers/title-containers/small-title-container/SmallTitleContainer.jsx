import styles from './SmallTitleContainer.module.scss'

export default function SmallTitleContainer({ children, className }) {
  return (
    <div
      className={`relative border-2 br-9 bs-4 fw-extra-bold fs-400 ${styles.smallTitleContainer} ${className}`}
    >
      {children}
    </div>
  )
}
