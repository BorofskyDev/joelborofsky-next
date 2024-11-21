// components/blog/PostsTable.jsx
'use client'
import { useState } from 'react'
import PostRow from './post-row/PostRow'
import EditPostModal from '@/components/modals/edit-post-modal/EditPostModal'

export default async function PostsTable() {
  // Fetch posts as before
  const postsSnapshot = await dbAdmin
    .collection('posts')
    .orderBy('createdAt', 'desc')
    .get()

  const posts = postsSnapshot.docs.map((doc) => {
    const data = doc.data()

    // Convert Timestamps to ISO strings
    const serializedData = {
      id: doc.id,
      ...data,
      createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : null,
      updatedAt: data.updatedAt ? data.updatedAt.toDate().toISOString() : null,
      publishDate: data.publishDate
        ? data.publishDate.toDate().toISOString()
        : null,
    }

    return serializedData
  })

  const [selectedPost, setSelectedPost] = useState(null)

  const handleRowClick = (post) => {
    setSelectedPost(post)
  }

  const handleCloseModal = () => {
    setSelectedPost(null)
  }

  return (
    <div>
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
