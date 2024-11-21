// components/blog/PostsTableClient.jsx

'use client'

import { useState } from 'react'
import PostRow from './post-row/PostRow'
import EditPostModal from '@/components/modals/edit-post-modal/EditPostModal'
import styles from './PostsTable.module.scss'

export default function PostsTableClient({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null)

  const handleRowClick = (post) => {
    setSelectedPost(post)
  }

  const handleCloseModal = () => {
    setSelectedPost(null)
  }

  return (
    <div className={styles.postsTable}>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Status</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <PostRow key={post.id} post={post} onRowClick={handleRowClick} />
          ))}
        </tbody>
      </table>
      {selectedPost && (
        <EditPostModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </div>
  )
}
