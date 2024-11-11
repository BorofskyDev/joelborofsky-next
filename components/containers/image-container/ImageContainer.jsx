
import JpgImage from './JpgImage'
import SmallTitleContainer from '../title-containers/small-title-container/SmallTitleContainer'
import SmallIcon from '@/components/icons/small-icon/SmallIcon'
import styles from './ImageContainer.module.scss'

export default function ImageContainer({
  src,
  alt,
  className,
  imageBg,
  titleContainerBg,
  title,
  note,
  iconBg1,
  iconFill1,
  icon1,
  xmlns1,
  viewbox1,
  iconBg2,
  xmlns2,
  viewBox2,
  iconFill2,
  icon2,
}) {
  return (
    <div className={`relative border-4 br-6 bs-4 ${styles.imageContainer} ${className}`}>
      <JpgImage src={src} alt={alt} className={imageBg} />
      <SmallTitleContainer className={titleContainerBg}>
        {title} <span className='font-handwriting'>{note}</span>
      </SmallTitleContainer>
      <SmallIcon
        className={`${iconBg1} ${iconFill1}`}
        position='left'
        icon={icon1}
        xmlns={xmlns1}
        viewBox={viewbox1}
        fill={iconFill1}
      />
      <SmallIcon
        className={`${iconBg2} ${iconFill2}`}
        position='right'
        icon={icon2}
        xmlns={xmlns2}
        viewBox={viewBox2}
        fill={iconFill2}
      />
    </div>
  )
}
