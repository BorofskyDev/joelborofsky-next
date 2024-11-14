import styles from './SmallText.module.scss'

export default function SmallText({ children }) {
  return <p className={`fs-200 ${styles.smallText}`}>{children}</p>
}