import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import ModalLinkContainer from '@/components/containers/section-containers/modal-link-container/ModalLinkContainer'
import IconModalButton from '@/components/buttons/icon-modal-button/IconModalButton'
import { icons } from '@/components/icons/icons'
import { WebDesign, WebDevelopment, BusinessDev } from '@/components/pages/services'
import styles from './page.module.scss'

export default function ServicesPage() {

  
 
  return (
    <section className={`bg-blue ${styles.servicesPage}`}>
      <PageHeader>Services!</PageHeader>
      <ModalLinkContainer>
        <IconModalButton
          label='Web Design'
          icon={icons.designer.path}
          viewBox={icons.designer.viewBox}
          xmlns={icons.designer.xmlns}
          className='fill-vibrant-blue bg-red'
          modalContent={<WebDesign />}
          modalBg='bg-red'
        />
        <IconModalButton
          label='Web Developer'
          icon={icons.developer.path}
          viewBox={icons.developer.viewBox}
          xmlns={icons.developer.xmlns}
          className='fill-vibrant-pink bg-green'
          modalContent={<WebDevelopment />}
          modalBg='bg-green'
        />
        <IconModalButton
          label='Business Development'
          icon={icons.business.path}
          viewBox={icons.business.viewBox}
          xmlns={icons.business.xmlns}
          className='fill-green bg-pink'
          modalContent={<BusinessDev />}
          modalBg='bg-pink'
        />

      </ModalLinkContainer>
    </section>
  )
}
