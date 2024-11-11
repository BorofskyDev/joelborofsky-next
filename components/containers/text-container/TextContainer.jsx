import styles from './TextContainer.module.scss'

export default function TextContainer({ children, className }) {
  return <p className={`fs-400 fw-medium bg-light border-2 br-4 bs-3 ${styles.textContainer} ${className}`}>{children}</p>
}
