import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import styles from './Footer.module.scss'
import MediumTitleContainer from '@/components/containers/title-containers/medium-title-container/MediumTitleContainer'
import ExternalButtonLink from '@/components/links/external-button-link/ExternalButtonLink'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <SectionHeader className={`bg-pink ${styles.header__title}`}>
          Footer!
        </SectionHeader>
      </div>

      <div className={styles.blocks}>
        <MediumTitleContainer className='bg-red'>
          Developer
        </MediumTitleContainer>
        <MediumTitleContainer className='bg-blue'>
          Designer
        </MediumTitleContainer>
        <MediumTitleContainer className='bg-green'>
          Business
        </MediumTitleContainer>
        <MediumTitleContainer className='bg-yellow'>
          Decent Ole' Chap
        </MediumTitleContainer>
      </div>
      <div className={styles.links}>
        <MediumTitleContainer className={`bg-orange ${styles.title}`}>
          People That Helped Me Learn
        </MediumTitleContainer>
        <ul className={styles.links__list}>
          <ExternalButtonLink href='https://scrimba.com' className='bg-blue'>
            Scrimba
          </ExternalButtonLink>
          <ExternalButtonLink href='https://coder-coder.com' className='bg-red'>
            Coder Coder
          </ExternalButtonLink>
          <ExternalButtonLink
            href='https://www.kevinpowell.com'
            className='bg-violet'
          >
            Kevin Powell
          </ExternalButtonLink>
          <ExternalButtonLink
            href='https://codingheroes.io'
            className='bg-pink'
          >
            Coding Heroes
          </ExternalButtonLink>
          <ExternalButtonLink
            href='https://bruno-simon.com'
            className='bg-green'
          >
            Bruno Simon
          </ExternalButtonLink>
          <ExternalButtonLink
            href='https://courses.webdevsimplified.com'
            className='bg-yellow'
          >
            WebDev Simplified
          </ExternalButtonLink>
        </ul>
      </div>
    </footer>
  )
}
