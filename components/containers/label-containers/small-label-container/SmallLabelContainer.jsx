import styles from './SmallContainer.module.scss'

function SmallContainer({ children, className }) {
  const containerClasses = `${styles.smallContainer} ${className || ''}`

  return <div className={containerClasses}>{children}</div>
}
export default SmallContainer
