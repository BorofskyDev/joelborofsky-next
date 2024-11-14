import styles from './MediumTitleContainer.module.scss'

export default function MediumTitleContainer({ children, className }) {
  return (
    <div
      className={`border-2 br-6 bs-4 font-title ${styles.mediumTitleContainer} ${className}`}
    >
      <span className='fs-600 fw-bold'>{children}</span>
    </div>
  )
}
