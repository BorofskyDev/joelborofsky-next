import styles from './page.module.scss'

export default function LoginPage() {
    return (
        <section className={styles.loginPage}> 
         <div className={`bg-red ${styles.backgroundDiv} ${styles.backgroundDiv__one}`}></div>
         <div className={`bg-blue ${styles.backgroundDiv} ${styles.backgroundDiv__two}`}></div>
         <div className={`bg-green ${styles.backgroundDiv} ${styles.backgroundDiv__three}`}></div>
         <div className={`bg-yellow ${styles.backgroundDiv} ${styles.backgroundDiv__four}`}></div>
         </section>
    )
}