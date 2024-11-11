import Link from 'next/link'
import styles from './InternalLinkBox.module.scss'

export default function InternalLinkBox({ href, children, className }) {
  return (
    <Link href={href} className={`border-3 br-8 fw-bold ${styles.internalLinkBox} ${className}`}>
      {children}
    </Link>
  )
}
