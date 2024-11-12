import styles from './ProjectTitle.module.scss'

export default function ProjectTitle({title}) {
    return <h4 className={`bg-blue fs-600 fw-medium-bold ${styles.projectTitle}`}>{title}</h4>
}