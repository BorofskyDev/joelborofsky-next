import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import LargeTitleContainer from '@/components/containers/title-containers/large-title-container/LargeTitleContainer'
import MediumIcon from '@/components/icons/medium-icon/MediumIcon'
import { icons } from '@/components/icons/icons'
import styles from './HeroContent.module.scss'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export default function HeroContent() {
  const notBad = icons.notBad
  return (
    <div className={`bg-blue ${styles.heroContent}`}>
      <PageHeader>Hello!</PageHeader>
      <p className='fs-500 fw-medium-bold'>
        My name is <span className='font-handwriting fs-600'>Joel</span>
      </p>
      <p className='fs-500 fw-medium-bold'>I am a...</p>
      <LargeTitleContainer className='relative bg-red font-handwriting'>
        Fullstack Developer
        <MediumIcon
          icon={notBad.path}
          viewBox={notBad.viewBox}
          xmlns={notBad.xmlns}
          className='bg-light fill-vibrant-blue top-right'
        />
      </LargeTitleContainer>
      <InternalLinkBox href='/contact'>Contact Me!</InternalLinkBox>
    </div>
  )
}
