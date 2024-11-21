import ImageContainer from '@/components/containers/image-container/ImageContainer'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'
import { icons } from '@/components/icons/icons'
import birdPhoto from '@/public/img/profile/kyiv-bird-cutout2.png'
import styles from './AboutModals.module.scss'

export function PersonalAbout() {
  return (
    <div className={styles.aboutModals}>
      <ImageContainer
        className='bg-orange'
        src={birdPhoto}
        alt='Joel Borofsky elementary school photo'
        imageBg='bg-vibrant-pink'
        titleContainerBg='bg-pink'
        title='Bird Attorney'
        note='Not really'
        iconBg1='bg-green'
        iconFill1='fill-vibrant-pink'
        icon1={icons.falcon.path}
        xmlns1={icons.falcon.xmlns}
        viewbox1={icons.falcon.viewBox}
        iconBg2='bg-yellow'
        iconFill2='fill-vibrant-blue'
        icon2={icons.cat.path}
        xmlns2={icons.cat.xmlns}
        viewBox2={icons.cat.viewBox}
      />

      <SmallServiceContainer
        className='bg-orange'
        icon={icons.cat.path}
        viewBox={icons.cat.viewBox}
        xmlns={icons.cat.xmlns}
        iconFill='fill-vibrant-blue'
        iconClassName='bg-yellow'
        headerText='Personal'
        headerClassName='bg-pink'
      >
        <p className='border-2 br-5 bs-2'>
          Born and raised in Wichita, KS, I have lived around the nation and
          gained experience from everwhere. I&apos;ve also lived in Dallas,
          Raleigh, and New York.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          I have a degree in philosophy and a decade after obtaining it I
          finally found a use for it! Shockingly enough, coding actually
          requires a lot of logic. Who&apos;d have known?! But I point this out
          to show that I am more than a developer and have decades of life prior
          to throwing myself in front of the lazy glow of a computer screen.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          I love to travel and help people. When I travel I have a hard time
          doing the tourist thing and would rather just explore and get to know
          the area I am in. If you get annoyed or tired of me talking about
          coding, we can always discuss literature, philosophy, history,
          business, PC gaming, or a host of other issues.
        </p>
        <p className='border-2 br-5 bs-2'>
          When not coding you&apos;ll find me reading, playing video games,
          taking nature walks, playing with my cat, or curled up in the fetal
          position crying over the latest bug that I haven&apos;t been able to
          fix!
        </p>
      </SmallServiceContainer>
    </div>
  )
}
