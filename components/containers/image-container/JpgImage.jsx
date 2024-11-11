import Image from 'next/image'
import styles from './ImageContainer.module.scss'

export default function JpgImage({ src, alt, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`border-4 br-6 bs-3 ${styles.image} ${className}`}
      height={1080}
      width={1260}
    />
  )
}
