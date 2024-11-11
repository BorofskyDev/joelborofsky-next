import Image from 'next/image'
import styles from './ImageContainer.module.scss'

function JPGImage({ src, alt, className }) {
  const imageClasses = `${styles.image} ${className || ''}`

  return (
    <Image
      src={src}
      alt={alt}
      className={imageClasses}
      height={1080}
      width={1260}
    />
  )
}
export default JPGImage
