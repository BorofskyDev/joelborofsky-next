import styles from './FlexColContainer.module.scss'

export default function FlexColContainer({children, className, id}) {
    return ( 
        <section id={id} className={`relative ${styles.flexColContainer} ${className}`}>
            {children}
        </section>
    )
}