import styles from './FlexColRowContainer.module.scss'

export default function FlexColRowContainer({ children, className, id }) {
  return (
    <section id={id} className={`${styles.flexColRowContainer} ${className}`}>
      {children}
    </section>
  )
}
