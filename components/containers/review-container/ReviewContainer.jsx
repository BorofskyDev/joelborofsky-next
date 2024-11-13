import styles from './ReviewContainer.module.scss'
import LargeIcon from '@/components/icons/large-icon/LargeIcon'

export default function ReviewContainer({
  reviewerName,
  reviewerHref,
  review,
  icon,
  viewBox,
  xmlns,
  iconBg,
  iconFill,
}) {
  return (
    <div className={styles.reviewContainer}>
      <div className={`border-2 br-6 bs-4 bg-light ${styles.review}`}>
        <p>{review}</p>
      </div>
      <div className={styles.reviewer}>
        <LargeIcon
          icon={icon}
          viewBox={viewBox}
          xmlns={xmlns}
          className={`${iconBg} ${iconFill} ${styles.reviewerIcon}`}
        />
        <a
          className={`fw-bold border-1 br-4 ${styles.link}`}
          href={reviewerHref}
          target='_blank'
          rel='noreferrer'
        >
          {reviewerName}
        </a>
      </div>
    </div>
  )
}
