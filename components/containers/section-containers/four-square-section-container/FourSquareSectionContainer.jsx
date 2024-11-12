import styles from './FourSquareSectionContainer.module.scss'

export default function FourSquareSectionContainer({ children, className, id }) {
  return (
    <section id={id} className={` ${styles.fourSquareSectionContainer} ${className}`}>
      {children}
    </section>
  )
}