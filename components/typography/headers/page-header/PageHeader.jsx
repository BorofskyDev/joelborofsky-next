import styles from './PageHeader.module.scss'

export default function PageHeader({ children, className }) {
  return <h1 className={`fs-900 ${styles.pageHeader}`}>{children}</h1>
}
