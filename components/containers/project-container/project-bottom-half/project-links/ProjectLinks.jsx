import ProjectLink from './project-link/ProjectLink'
import styles from './ProjectLinks.module.scss'

export default function ProjectLinks({ blogHref, liveSiteHref }) {
  return (
    <ul className={styles.projectLinks}>
      <ProjectLink linkTitle='Blog Post' href={blogHref} />
      <ProjectLink linkTitle='Live Site' href={liveSiteHref} />
    </ul>
  )
}
