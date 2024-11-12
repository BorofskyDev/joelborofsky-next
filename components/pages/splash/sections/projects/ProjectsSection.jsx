import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import ProjectContainer from '@/components/containers/project-container/ProjectContainer'
import { icons } from '@/components/icons/icons'
import freelanceSiteProjectImg from '@/public/img/projects/freelance-site.png'
import rfProjectImg from '@/public/img/projects/rf.png'
import nawaProjectImg from '@/public/img/projects/nawa.png'
import momentsToMemoriesProjectImg from '@/public/img/projects/moments-to-memories.png'
import criminalRollsProjectImg from '@/public/img/projects/criminal-rolls.png'
import styles from './ProjectsSection.module.scss'

export default function ProjectsSection() {
  return (
    <section id='projects' className={styles.projectsSection}>
      <SectionHeader className='bg-red'>Projects</SectionHeader>
    <ProjectContainer
    className='bg-vibrant-blue'
    title='This Site!'
    src={freelanceSiteProjectImg}
    alt='intro section of this website'
    blogHref='/blog'
    liveSiteHref='/'
    techIcon1={icons.nextjs.path}
    xmlns1={icons.nextjs.xmlns}
    viewBox1={icons.nextjs.viewBox}
    techIcon2={icons.sass.path}
    xmlns2={icons.sass.xmlns}
    viewBox2={icons.sass.viewBox}
    techIcon3={icons.firebase.path}
    xmlns3={icons.firebase.xmlns}
    viewBox3={icons.firebase.viewBox}
    decorativeIcon={icons.cat.path}
    xmlns4={icons.cat.xmlns}
    viewBox4={icons.cat.viewBox}
    iconFill='fill-vibrant-blue'
    />
   
    </section>
  )
}
