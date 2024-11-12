import Link from 'next/link'
import styles from './ProjectLink.module.scss'

export default function ProjectLink({ linkTitle, href }) {
  return (
    <Link href={href} target='_blank' className={`${styles.projectLink}`}>
      {linkTitle}
    </Link>
  )
}
