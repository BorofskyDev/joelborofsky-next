import ImageContainer from '@/components/containers/image-container/ImageContainer'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'
import { icons } from '@/components/icons/icons'
import birdPhoto from '@/public/img/profile/kyiv-bird-cutout2.png'
import sunsetPhoto from '@/public/img/profile/joel-laying-cutout.png'
import styles from './AboutModals.module.scss'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export function CVAbout() {
  return (
    <div className={styles.aboutModals}>
      <ImageContainer
        className={`bg-pink ${styles.image}`}
        src={sunsetPhoto}
        alt='Joel Borofsky elementary school photo'
        imageBg='bg-vibrant-blue'
        titleContainerBg='bg-yellow'
        title='My CV'
        note='My foot!'
        iconBg1='bg-vibrant-pink'
        iconFill1='fill-red'
        icon1={icons.fireHeart.path}
        xmlns1={icons.fireHeart.xmlns}
        viewbox1={icons.fireHeart.viewBox}
        iconBg2='bg-red'
        iconFill2='fill-yellow'
        icon2={icons.dinosaur.path}
        xmlns2={icons.dinosaur.xmlns}
        viewBox2={icons.dinosaur.viewBox}
      />

      <SmallServiceContainer
        className={`bg-pink ${styles.contentContainer}`}
        icon={icons.dinosaur.path}
        viewBox={icons.dinosaur.viewBox}
        xmlns={icons.dinosaur.xmlns}
        iconFill='fill-vibrant-blue'
        iconClassName='bg-red'
        headerText='My CV'
        headerClassName='bg-yellow'
      >
        <p className='border-2 br-5 bs-2'>
          Freelance - Since 2021 I have been designing, consulting, and
          developing for small businesses.
        </p>
        <InternalLinkBox href='/projects'>
          Take a look at my projects
        </InternalLinkBox>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          Whole Foods - why include my retail experience? Because I&apos;m the
          Market Team Trainer for them and that has given me valuable insight
          into retail. While working here, I have actually built an app for my
          team to use to help improve effeciency. I can bring that retail
          experience to your small retail business.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          SwyftOps - I helped design a new project and work their tech support.
          I left them with a beautiful Figma design for a new website.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          Trader Joe&apos;s - Yet again, more retail experience! I cherish my
          retail experience as I feel it gives me an edge in development, since
          anyone who has worked retail knows that it takes a multifacet set of
          skills to be good at it.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          SellSafe - This was my pre-development days. I helped launch a company
          that handled B2B credit decisions, but unfortunately COVID had the
          ultimate say in the success of the business. Still, I learned a lot
          about starting a business on my own rather than consulting, learned
          the frustrations of finding a developer, and taught myself how to code
          as a result of the failure - meaning it was&apos;t a failure, just a
          lesson to be learned.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          WellsFargo - Arguably the job that serves as the bulk of my business
          experience. I started in Raleigh, North Carolina as a basic customer
          service rep and left the company having worked in New York with wealth
          and brokerage clients. This job gave me access to regulations
          experience, compliance training, sales, marketing, business
          development, and a host of other skills that have served my clients
          well in freelancing.
        </p>
      </SmallServiceContainer>
    </div>
  )
}
