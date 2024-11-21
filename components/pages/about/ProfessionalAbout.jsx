import ImageContainer from '@/components/containers/image-container/ImageContainer'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'
import { icons } from '@/components/icons/icons'
import railroad from '@/public/img/profile/railroad-cutout.png'
import styles from './AboutModals.module.scss'

export function ProfessionalAbout() {
  return (
    <div className={styles.aboutModals}>
      <ImageContainer
        className='bg-pink'
        src={railroad}
        alt='Joel Borofsky black and white carrying a railroad tie'
        imageBg='bg-vibrant-red'
        titleContainerBg='bg-blue'
        title='Putting In Work'
        note='Not a model'
        iconBg1='bg-orange'
        iconFill1='fill-vibrant-purple'
        icon1={icons.handshake.path}
        xmlns1={icons.handshake.xmlns}
        viewbox1={icons.handshake.viewBox}
        iconBg2='bg-yellow'
        iconFill2='fill-vibrant-blue'
        icon2={icons.liberty.path}
        xmlns2={icons.liberty.xmlns}
        viewBox2={icons.liberty.viewBox}
      />

      <SmallServiceContainer
        className='bg-pink'
        icon={icons.liberty.path}
        viewBox={icons.liberty.viewBox}
        xmlns={icons.liberty.xmlns}
        iconFill='fill-vibrant-blue'
        iconClassName='bg-yellow'
        headerText='Business'
        headerClassName='bg-blue'
      >
        <p className='border-2 br-5 bs-2'>
          I specialize in helping small businesses that are in their early
          growth stages of development. Whether you are at the beginning and
          trying to map out the business, or you&apos;ve been around for a few
          years and need that extra something to get over the edge, I can help.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          Moments to Memories by KAL is a business that I have been working with
          for a while now. Prior to developing her website, Kelli handled all
          appointments and business matters via email. She would email clients
          for photo oppoortunities, put it into her calendar, and have back and
          forths. <br /> <br />
          Since building her site, she now has an admin panel that allows her to
          add prospets and clients, set appointments, keep track of
          appointments, send an image selection gallery to clients, load client
          galleries on her website, and so much more. I didn&apos;t just create
          a front-facing website, I created a fully-fledged web app that helped
          increase her business.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          The next success is Criminal Rolls. When I began scoping this project,
          all orders were done via Facebook messenger or email. It was a
          confusing order system and resulted in missed orders, missed
          opportunities, and customers giving up trying to order when they
          realized it was a process. Through my website I developed an ordering
          system that simplified her process. She went from an average of 1-2
          orders a week to selling out her inventory every week based on the
          site design, development, and marketing campaign I put together.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          I have also worked with numerous small businesses with simple
          consultations around the development process to helping with cash flow
          and account management. When it comes to B2B credit, I use an approval
          system that has approved over $6 billion in B2B credit and had less
          than $200k in uncollected debt.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          I have also built numerous profile sites, which are very simple builds
          but significant for the clients who use them. Whatever your business
          needs or project, I have the experience to cover those needs.
        </p>
      </SmallServiceContainer>
    </div>
  )
}
