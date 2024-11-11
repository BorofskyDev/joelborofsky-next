import ImageContainer from '@/components/containers/image-container/ImageContainer'
import heroPicture from '@/public/img/profile/joel-kid-cutout.png'
import { icons } from '@/components/icons/icons'
import styles from './HeroImage.module.scss'

export default function HeroImage() {
  return (
    <div className={styles.heroImage}>
      <ImageContainer
        className='bg-green'
        src={heroPicture}
        alt='Joel Borofsky elementary school photo'
        imageBg='bg-vibrant-blue'
        titleContainerBg='bg-orange'
        title='Joel Borofsky'
        note='a wee lad'
        iconBg1='bg-vibrant-purple'
        iconFill1='fill-vibrant-red'
        icon1={icons.astronaut.path}
        xmlns1={icons.astronaut.xmlns}
        viewbox1={icons.astronaut.viewBox}
        iconBg2='bg-yellow'
        iconFill2='fill-vibrant-blue'
        icon2={icons.sunflower.path}
        xmlns2={icons.sunflower.xmlns}
        viewBox2={icons.sunflower.viewBox}
      />
    </div>
  )
}
