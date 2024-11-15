import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import ModalButton from '@/components/buttons/modal-button/ModalButton'
import CreatePostModal from '@/components/modals/create-post-modal/CreatePostModal'
import styles from './page.module.scss'

export default function AdminPage() {
  return (
    <div className={`bg-blue ${styles.adminPage}`}>
      <PageHeader>Admin Page</PageHeader>

      <div>
        <MediumHeader className='bg-pink'>Blog Functions</MediumHeader>
        <ul className={styles.functionsList}>
          <li>
            <ModalButton
              className='bg-green'
              modalContent={<CreatePostModal />}
            >
              Create New Blog Post
            </ModalButton>
          </li>
          <li>
            <ModalButton className='bg-violet' modalContent={<div>Edit Post Will Go Here</div>}>
              Edit Blog Post
            </ModalButton>
          </li>
        </ul>
      </div>
    </div>
  )
}
