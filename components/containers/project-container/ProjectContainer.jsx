import ProjectBottomHalf from './project-bottom-half/ProjectBottomHalf'
import ProjectTopHalf from './project-top-half/ProjectTopHalf'
import styles from './ProjectContainer.module.scss'

export default function ProjectContainer({
  title,
  src,
  alt,
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
  className
}) {
  return (
    <div className={`border-4 bs-4 ${styles.projectContainer} ${className}`}>
      <ProjectTopHalf title={title} src={src} alt={alt} />
      <ProjectBottomHalf
        blogHref={blogHref}
        liveSiteHref={liveSiteHref}
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
