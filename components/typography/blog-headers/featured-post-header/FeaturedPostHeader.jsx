import styles from './FeaturedPostHeader.module.scss'

export default function FeaturedPostHeader({ children }) {
  return <h2 className={`bg-light border-2 bs-2 br-4 fw-black ${styles.featuredPostHeader}`}>{children}</h2>
}
