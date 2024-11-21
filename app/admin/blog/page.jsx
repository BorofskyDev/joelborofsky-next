import PostsTable from "@/components/blog/posts-table/PostsTable";
import ModalButton from "@/components/buttons/modal-button/ModalButton";
import CreatePostModal from "@/components/modals/create-post-modal/CreatePostModal";
import MediumHeader from "@/components/typography/headers/medium-header/Mediumheader";
import styles from './page.module.scss'

export default function BlogPage() {
    return (
      <section className={styles.blogPage}>
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
            <PostsTable />
          </li>
        </ul>
      </section>
    )
}