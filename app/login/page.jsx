import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import styles from './page.module.scss'

export default function LoginPage() {
    return (
        <section className={styles.loginPage}> 
         <PageHeader>Log in!</PageHeader>
         </section>
    )
}