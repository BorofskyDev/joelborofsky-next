import styles from './SmallTitleContainer.module.scss'

export default function SmallTitleContainer({ children, className }) {
  return (
    <div className={`${styles.smallTitleContainer} ${className}`}>
      {children}
    </div>
  )
}
