import Image from 'next/image'
import styles from './FeaturedPostPreview.module.scss'
import SmallText from '@/components/typography/small-text/SmallText'
import FeaturedPostHeader from '@/components/typography/blog-headers/featured-post-header/FeaturedPostHeader'
import TextContainer from '@/components/containers/text-container/TextContainer'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export default function FeaturedPostPreview({
  cardBg,
  image,
  title,
  date,
  content,
  category,
  href,
}) {
  return (
    <div className={`border-4 bs-6 br-6 ${cardBg} ${styles.featuredPostPreview}`}>
      <Image className='border-2 bs-2' src={image} alt={title} height={1060} width={1280} />
      <div className={styles.content}>
        <FeaturedPostHeader>{title}</FeaturedPostHeader>
        <div className={`bg-light border-1 bs-2 br-9 ${styles.dateCat}`}>
          <SmallText>{date}</SmallText>
          <SmallText>{category}</SmallText>
        </div>
        <TextContainer>{content}</TextContainer>
      </div>
      <InternalLinkBox href={href}>Continue reading {title}</InternalLinkBox>
    </div>
  )
}
