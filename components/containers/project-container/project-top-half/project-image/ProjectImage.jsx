import Image from 'next/image'
import styles from './ProjectImage.module.scss'

export default function ProjectImage({ src, alt }) {
  return (
    <div className={styles.projectImage}>
      <Image className='bg-blue' src={src} alt={alt} width={1260} height={1080}  />
    </div>
  )
}
