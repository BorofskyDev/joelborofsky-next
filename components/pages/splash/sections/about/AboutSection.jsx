import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import FlexColContainer from '@/components/containers/section-containers/flex-col-container/FlexColContainer'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import ImageContainer from '@/components/containers/image-container/ImageContainer'
import aboutPicture from '@/public/img/profile/joel-cutout-kyiv.png'
import { icons } from '@/components/icons/icons'
import styles from './AboutSection.module.scss'
import TextContainer from '@/components/containers/text-container/TextContainer'

export default function AboutSection() {
  return (
    <FlexColContainer id='about' className={`bg-red ${styles.aboutSection}`}>
      <SectionHeader className='bg-blue'>About</SectionHeader>
      <div className={`relative ${styles.servicesWrapper}`}>
        <SmallServiceContainer
          className='bg-orange'
          icon={icons.developer.path}
          viewBox={icons.developer.viewBox}
          xmlns={icons.developer.xmlns}
          iconFill='fill-green'
          iconClassName='bg-dark'
          headerText='Developer'
          headerClassName='bg-violet'
        >
          <p className='border-2 br-5 bs-2'>
            Nextjs, React, Firebase, TailwindCSS, and more!
          </p>
          <InternalLinkBox href='/services'>
            Learn more about development services
          </InternalLinkBox>
        </SmallServiceContainer>

        <SmallServiceContainer
          className='bg-blue'
          icon={icons.designer.path}
          viewBox={icons.designer.viewBox}
          xmlns={icons.designer.xmlns}
          iconFill='fill-vibrant-blue'
          iconClassName='bg-orange'
          headerText='Designer'
          headerClassName='bg-pink'
        >
          <p className='border-2 br-5 bs-2'>
            Figma, SASS/SCSS, Framer Motion, TailwindCSS, and other libraries!
          </p>
          <InternalLinkBox href='/services'>
            Learn more about web design services
          </InternalLinkBox>
        </SmallServiceContainer>

        <SmallServiceContainer
          className='bg-green'
          icon={icons.business.path}
          viewBox={icons.business.viewBox}
          xmlns={icons.business.xmlns}
          iconFill='fill-vibrant-orange'
          iconClassName='bg-vibrant-purple'
          headerText='Business'
          headerClassName='bg-yellow'
          headerSpanText='(er)'
        >
          <p className='border-2 br-5 bs-2'>
            Financial Sales, Marketing, Customer Service, Stakeholder Relations,
            even Retail!
          </p>
          <InternalLinkBox href='/services'>
            Learn more about business services
          </InternalLinkBox>
        </SmallServiceContainer>
      </div>
      <div className={styles.bioContainer}>
        <ImageContainer
          className='bg-yellow'
          src={aboutPicture}
          alt='Joel Borofsky with a falcon on his shoulder'
          imageBg='bg-vibrant-pink'
          titleContainerBg='bg-violet'
          title='Joel Borofsky'
          note='a bit older'
          iconBg1='bg-blue'
          iconFill1='fill-vibrant-blue'
          icon1={icons.falcon.path}
          xmlns1={icons.falcon.xmlns}
          viewbox1={icons.falcon.viewBox}
          iconBg2='bg-vibrant-blue'
          iconFill2='fill-red'
          icon2={icons.liberty.path}
          xmlns2={icons.liberty.xmlns}
          viewBox2={icons.liberty.viewBox}
        />
        <TextContainer>
          Hello there!
          <br />
          <br />
          Based in Kansas, USA, I&apos;m a fullstack developer who also loves
          design and UI/UX. After spending years doing banking, finance, and
          business development in North Carolina and New York, as well as helpin
          ga few start ups and even attempting one of my own, I decided to do
          the meme and learn to code. My passion is around making the web
          beautiful, accessible, fun, and - probably most importantly - working.
          <br />
          <br />
          My stack of HTML, CSS, JavaScript, Nextjs, Firebase, TailwindCSS, and
          more ensure that I&apos;m a great fit for your team and project.
          I&apos;m always looking for new opportunities to learn and grow, so if
          you&apos;re looking for a developer, designer, or business person,
          I&apos;ve also been told that I&apos;m fun!
        </TextContainer>
      </div>
      <InternalLinkBox  href='/about/'>Learn more about me!</InternalLinkBox>
    </FlexColContainer>
  )
}
