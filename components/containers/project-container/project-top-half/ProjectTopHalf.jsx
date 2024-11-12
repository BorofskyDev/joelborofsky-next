import ProjectImage from './project-image/ProjectImage'
import LeftIndents from './project-indents/LeftIndent'
import RightIndents from './project-indents/RightIndent'
import ProjectTitle from './project-title/ProjectTitle'
import styles from './ProjectTopHalf.module.scss'

export default function ProjectTopHalf({title, src, alt}) {
    return ( 
        <div className={styles.projectTopHalf}>
            <LeftIndents />
            <ProjectTitle title={title} />
            <RightIndents />
            <ProjectImage src={src} alt={alt} />

        </div>
    )
}