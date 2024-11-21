import PageHeader from '@/components/typography/headers/page-header/PageHeader'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import styles from './page.module.scss'

export default function AdminPage() {
  return (
    <div className={`bg-blue ${styles.adminPage}`}>
      <PageHeader>Admin Page</PageHeader>

      <div className={styles.linkContainer}>
        <InternalLinkBox href='/admin/blog'>Blog</InternalLinkBox>
      </div>
    </div>
  )
}
