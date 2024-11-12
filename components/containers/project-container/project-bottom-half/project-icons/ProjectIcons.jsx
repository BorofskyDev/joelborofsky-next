import ProjectIcon from './project-icon/ProjectIcon'
import styles from './ProjectIcons.module.scss'

export default function ProjectIcons({
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
    <div className={styles.projectIcons}>
      <ProjectIcon
        icon={techIcon1}
        xmlns={xmlns1}
        viewBox={viewBox1}
        iconFill={iconFill}
      />
      <ProjectIcon
        icon={techIcon2}
        xmlns={xmlns2}
        viewBox={viewBox2}
        iconFill={iconFill}
      />
      <ProjectIcon
        icon={techIcon3}
        xmlns={xmlns3}
        viewBox={viewBox3}
        iconFill={iconFill}
      />
      <ProjectIcon
        icon={decorativeIcon}
        xmlns={xmlns4}
        viewBox={viewBox4}
        iconFill={iconFill}
      />
    </div>
  )
}
