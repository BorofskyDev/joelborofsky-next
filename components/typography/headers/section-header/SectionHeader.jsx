import styles from './SectionHeader.module.scss'

export default function SectionHeader({ children, className }) {
  return (
    <h2
      className={`relative border-3 br-9 bs-3 fs-700 fw-extra-bold ${styles.sectionHeader} ${className}`}
    >
      <span>{children}</span>
    </h2>
  )
}
