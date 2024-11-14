import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import LargeTitleContainer from '@/components/containers/title-containers/large-title-container/LargeTitleContainer'
import { icons } from '@/components/icons/icons'
import styles from './ContactSection.module.scss'
import MediumIcon from '@/components/icons/medium-icon/MediumIcon'
import TextContainer from '@/components/containers/text-container/TextContainer'

export default function ContactSection() {
  return (
    <section className={`bg-violet ${styles.contactSection}`}>
      <SectionHeader className='bg-green'>Contact</SectionHeader>
      <PageHeader>Hello Again!</PageHeader>
      <LargeTitleContainer className='bg-yellow'>
        <span>Let's work together!</span>
        <MediumIcon
          icon={icons.handshake.path}
          viewBox={icons.handshake.viewBox}
          xmlns={icons.handshake.xmlns}
          className='bg-vibrant-purple fill-blue'
        />
      </LargeTitleContainer>
      <TextContainer>
        I&apos;m open for consulting, freelance work, or employment. Feel free
        to reach out!
      </TextContainer>
    </section>
  )
}
