// components/post-row/PostRow.jsx

'use client'

import { useState } from 'react'
import Image from 'next/image'
import EditPostModal from '@/components/modals/edit-post-modal/EditPostModal'
import format from 'date-fns/format'

export default function PostRow({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleRowClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const publishedStatus = post.published ? 'Published' : 'Draft'

  const createdDate = post.createdAt
    ? format(new Date(post.createdAt), 'PPP')
    : 'Unknown'

  return (
    <>
      <tr onClick={handleRowClick} className='cursor-pointer hover:bg-gray-100'>
        <td>
          {post.imageURL && (
            <Image
              src={post.imageURL}
              alt={post.title}
              width={100}
              height={60}
              objectFit='cover'
            />
          )}
        </td>
        <td>{post.title}</td>
        <td>{publishedStatus}</td>
        <td>{createdDate}</td>
      </tr>
      {isModalOpen && (
        <EditPostModal postId={post.id} onClose={handleCloseModal} />
      )}
    </>
  )
}
