



import PageHeader from '@/components/typography/headers/page-header/PageHeader'

import styles from './page.module.scss'
import MediumHeader from '@/components/typography/headers/medium-header/Mediumheader'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export default function AdminPage() {
 

  return (
    <div className={styles.adminPage}>
      <PageHeader>Admin Page</PageHeader>
      <p>Welcome, Admin!</p>
      <div>
        <MediumHeader>Blog Functions</MediumHeader>
        <ul>
          <li>
            <InternalLinkBox href='/admin/blog/create'>Create New Blog Post </InternalLinkBox>
          </li>
          <li>
            <InternalLinkBox href='/admin/blog/create'>Edit Blog Post </InternalLinkBox>
          </li>
        </ul>
      </div>
    </div>
  )
}
