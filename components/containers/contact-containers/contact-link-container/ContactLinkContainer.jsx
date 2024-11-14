import ExternalButtonLink from '@/components/links/external-button-link/ExternalButtonLink'
import styles from './ContactLinkContainer.scss'

export default function ContactLinkContainer() {
  return (
    <ul className={styles.contactLinkContainer}>
      <li>
        <ExternalButtonLink
          className='bg-red'
          href='https://github.com/BorofskyDev'
        >
          My GitHub
        </ExternalButtonLink>
      </li>
      <li>
        <ExternalButtonLink
          className='bg-yellow'
          href='https://codepen.io/borofskyDev'
        >
          My CodePen
        </ExternalButtonLink>
      </li>
      <li>
        <ExternalButtonLink
          className='bg-pink'
          href='https://www.linkedin.com/in/joelborofsky/'
        >
          My CodePen
        </ExternalButtonLink>
      </li>
    </ul>
  )
}
