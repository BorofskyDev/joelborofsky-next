import FourSquareSectionContainer from '@/components/containers/section-containers/four-square-section-container/FourSquareSectionContainer'
import FourSquareBox from '@/components/containers/section-containers/four-square-section-container/four-square-box/FourSquareBox'
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import { icons } from '@/components/icons/icons'
import styles from './ReviewsSection.module.scss'
import ReviewContainer from '@/components/containers/review-container/ReviewContainer'

export default function ReviewsSection() {
    return (
      <FourSquareSectionContainer className={styles.reviewsSection}>
        <FourSquareBox className={`bg-red ${styles.boxOne}`}>
          <SectionHeader className='bg-blue'>Reviews</SectionHeader>
        </FourSquareBox>
        <FourSquareBox className={`bg-violet ${styles.boxTwo}`}>
          <ReviewContainer
            reviewerName='John Doe'
            reviewerHref='#'
            review='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            icon={icons.cool.path}
            viewBox={icons.cool.viewBox}
            xmlns={icons.cool.xmlns}
            iconBg='bg-yellow'
            iconFill='fill-vibrant-purple'
          />
        </FourSquareBox>
        <FourSquareBox className={`bg-green ${styles.boxThree}`}>
          <ReviewContainer
            reviewerName='Roger Smith'
            reviewerHref='#'
            review='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            icon={icons.smilingSun.path}
            viewBox={icons.smilingSun.viewBox}
            xmlns={icons.smilingSun.xmlns}
            iconBg='bg-blue'
            iconFill='fill-vibrant-orange'
          />
        </FourSquareBox>
        <FourSquareBox className={`bg-orange ${styles.boxFour}`}>
          <ReviewContainer
            reviewerName='Roger Smith'
            reviewerHref='#'
            review='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            icon={icons.smilingSun.path}
            viewBox={icons.smilingSun.viewBox}
            xmlns={icons.smilingSun.xmlns}
            iconBg='bg-blue'
            iconFill='fill-vibrant-orange'
          />
        </FourSquareBox>
      </FourSquareSectionContainer>
    )
}