import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import SmallIcon from '@/components/icons/small-icon/SmallIcon'
import styles from './SmallServiceContainer.module.scss'

export default function SmallServiceContainer({
  className,
  icon,
  viewBox,
  xmlns,
  iconFill,
  iconClassName,
  headerText,
  headerClassName,
  headerSpanText,
  children,
}) {
  return (
    <div className={`relative border-5 br-4 bs-6 ${styles.smallServiceContainer} ${className}`}>
      <SmallIcon
        icon={icon}
        viewBox={viewBox}
        xmlns={xmlns}
        position='left'
        iconFill={iconFill}
        className={iconClassName}
      />
      <MediumHeader className={headerClassName}>
        {headerText}
        {headerSpanText && (
          <span className='font-handwriting'>{headerSpanText}</span>
        )}
      </MediumHeader>
      {children}
    </div>
  )
}
