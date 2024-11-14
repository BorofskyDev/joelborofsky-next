import ExternalButtonLink from '@/components/links/external-button-link/ExternalButtonLink'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import LargeTitleContainer from '../../title-containers/large-title-container/LargeTitleContainer'
import MediumIcon from '@/components/icons/medium-icon/MediumIcon'
import { icons } from '@/components/icons/icons'
import styles from './ContactLinkContainer.module.scss'

export default function ContactLinkContainer() {
  return (
    <>
    <LargeTitleContainer className='relative bg-blue'>
        <MediumIcon
            icon={icons.world.path}
            viewBox={icons.world.viewBox}
            xmlns={icons.world.xmlns}
            className={`bg-green fill-vibrant-blue ${styles.icon}`}
        />
        Find me on the world wide web!</LargeTitleContainer>
    <ul className={styles.contactLinkContainer}>
      
        <ExternalButtonLink
          className='bg-red'
          href='https://github.com/BorofskyDev'
        >
          My GitHub
        </ExternalButtonLink>
      
        <ExternalButtonLink
          className='bg-yellow'
          href='https://codepen.io/borofskyDev'
        >
          My CodePen
        </ExternalButtonLink>
      
        <ExternalButtonLink
          className='bg-pink'
          href='https://www.linkedin.com/in/joelborofsky/'
        >
          My LinkedIn
        </ExternalButtonLink>
      
        <InternalLinkBox
         
          href='/contact'
        >
          Use my contact form!
        </InternalLinkBox>
      
    </ul>
    </>
  )
}
