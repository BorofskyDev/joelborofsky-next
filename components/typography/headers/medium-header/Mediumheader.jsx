import styles from './MediumHeader.module.scss'

export default function MediumHeader({ children, className }) {
  return <h3 className={`relative border-3 br-6 bs-3 font-title fs-600 fw-extra-bold ${styles.mediumHeader} ${className}`}>{children}</h3>
}
