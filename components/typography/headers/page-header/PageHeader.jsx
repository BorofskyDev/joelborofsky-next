import styles from './PageHeader.module.scss'

export default function PageHeader({ children }) {
  return <h1 className={styles.pageHeader}>{children}</h1>
}
