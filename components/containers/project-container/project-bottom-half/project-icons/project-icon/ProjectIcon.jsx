import ProjectIconImg from './project-icon-img/ProjectIconImg'
import styles from './ProjectIcon.module.scss'

export default function ProjectIcon({ icon, viewBox, xmlns, iconFill }) {
  return (
    <div className={styles.projectIcon} aria-hidden>
      <ProjectIconImg
        icon={icon}
        viewBox={viewBox}
        xmlns={xmlns}
        iconFill={iconFill}
      />
    </div>
  )
}
