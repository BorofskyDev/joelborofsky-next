import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import LargeTitleContainer from '@/components/containers/title-containers/large-title-container/LargeTitleContainer'
import { icons } from '@/components/icons/icons'
import MediumIcon from '@/components/icons/medium-icon/MediumIcon'
import TextContainer from '@/components/containers/text-container/TextContainer'
import ImageContainer from '@/components/containers/image-container/ImageContainer'
import ContactLinkContainer from '@/components/containers/contact-containers/contact-link-container/ContactLinkContainer'
import contactImage from '@/public/img/profile/joel-hat-cutout.png'
import styles from './ContactSection.module.scss'
export default function ContactSection() {
  return (
    <section className={`bg-violet ${styles.contactSection}`}>
      <div className={styles.containerOne}>
        <SectionHeader className='bg-green'>Contact</SectionHeader>
        <PageHeader>Hello Again!</PageHeader>
        <LargeTitleContainer className='relative bg-yellow'>
          <span>Let's work together!</span>
          <MediumIcon
            icon={icons.handshake.path}
            viewBox={icons.handshake.viewBox}
            xmlns={icons.handshake.xmlns}
            className={`bg-vibrant-purple fill-blue ${styles.icon}`}
          />
        </LargeTitleContainer>
        <TextContainer>
          I&apos;m open for consulting, freelance work, or employment. Feel free
          to reach out!
        </TextContainer>
      </div>
      <div className={styles.containerTwo}>
        <ImageContainer
          src={contactImage}
          alt='Joel Borofsky'
          className='bg-vibrant-blue'
          imageBg='bg-vibrant-orange'
          titleContainerBg='bg-vibrant-pink'
          title='Joel Borofsky'
          note='so slavic'
          iconBg1='bg-vibrant-red'
          iconFill1='fill-vibrant-blue'
          icon1={icons.fireHeart.path}
          xmlns1={icons.fireHeart.xmlns}
          viewbox1={icons.fireHeart.viewBox}
          iconBg2='bg-blue'
          iconFill2='fill-vibrant-red'
          icon2={icons.cuteCat.path}
          xmlns2={icons.cuteCat.xmlns}
          viewBox2={icons.cuteCat.viewBox}
        />
        <ContactLinkContainer />
      </div>
    </section>
  )
}
