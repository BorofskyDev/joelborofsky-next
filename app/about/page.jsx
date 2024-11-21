import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import styles from './page.module.scss'
import ModalLinkContainer from '@/components/containers/section-containers/modal-link-container/ModalLinkContainer'
import IconModalButton from '@/components/buttons/icon-modal-button/IconModalButton'
import { CVAbout, PersonalAbout } from '@/components/pages/about/'
import { icons } from '@/components/icons/icons'
import { ProfessionalAbout } from '@/components/pages/about/ProfessionalAbout'

export default function AboutPage() {
    return (
      <section className={`bg-red ${styles.aboutPage}`}>
        <PageHeader>About Me!</PageHeader>
        <ModalLinkContainer>
          <IconModalButton
            label='Business Experience'
            icon={icons.liberty.path}
            viewBox={icons.liberty.viewBox}
            xmlns={icons.liberty.xmlns}
            className='fill-orange bg-vibrant-blue'
            modalContent={<ProfessionalAbout />}
            modalBg='bg-vibrant-blue'
          />
          <IconModalButton
            label='CV'
            icon={icons.dinosaur.path}
            viewBox={icons.dinosaur.viewBox}
            xmlns={icons.dinosaur.xmlns}
            className='fill-pink bg-green'
            modalContent={<CVAbout />}
            modalBg='bg-green'
          />
          <IconModalButton
            label='Getting Personal'
            icon={icons.cat.path}
            viewBox={icons.cat.viewBox}
            xmlns={icons.cat.xmlns}
            className='fill-vibrant-blue bg-violet'
            modalContent={<PersonalAbout />}
            modalBg='bg-violet'
          />
        </ModalLinkContainer>
      </section>
    )
}