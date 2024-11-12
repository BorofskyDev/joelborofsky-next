import ProjectIcons from './project-icons/ProjectIcons'
import ProjectLinks from './project-links/ProjectLinks'
import styles from './ProjectBottomHalf.module.scss'

export default function ProjectBottomHalf({
  blogHref,
  liveSiteHref,
  techIcon1,
  xmlns1,
  viewBox1,
  techIcon2,
  xmlns2,
  viewBox2,
  techIcon3,
  xmlns3,
  viewBox3,
  decorativeIcon,
  xmlns4,
  viewBox4,
  iconFill,
}) {
  return (
    <div className={styles.projectBottomHalf}>
      <ProjectLinks blogHref={blogHref} liveSiteHref={liveSiteHref} />
      <ProjectIcons
        techIcon1={techIcon1}
        xmlns1={xmlns1}
        viewBox1={viewBox1}
        techIcon2={techIcon2}
        xmlns2={xmlns2}
        viewBox2={viewBox2}
        techIcon3={techIcon3}
        xmlns3={xmlns3}
        viewBox3={viewBox3}
        decorativeIcon={decorativeIcon}
        xmlns4={xmlns4}
        viewBox4={viewBox4}
        iconFill={iconFill}
      />
    </div>
  )
}
