import styles from './MenuLink.module.scss'

function MenuLink({ content, handleMenuToggle, ...props }) {
  return (
    <a {...props} onClick={handleMenuToggle} className={styles.menuLink}>
      <span>{content}</span>
    </a>
  )
}
export default MenuLink
