// components/blog/post-row/PostRow.jsx

'use client'

import Image from 'next/image'
import format from 'date-fns/format'
import styles from './PostRow.module.scss'

export default function PostRow({ post, onRowClick }) {
  const publishedStatus = post.published ? 'Published' : 'Draft'

  const createdDate = post.createdAt
    ? format(new Date(post.createdAt), 'PPP')
    : 'Unknown'

  const handleClick = () => {
    console.log('Clicked post:', post) // For debugging
    onRowClick(post)
  }
  return (
    <tr className={`${styles.postRow}`}>
      <td>
        {post.imageURL && (
          <button onClick={handleClick}>
            <Image
              src={post.imageURL}
              alt={post.title}
              width={100}
              height={60}
              objectFit='cover'
            />
          </button>
        )}
      </td>
      <td>
        <button onClick={handleClick}>{post.title}</button>
      </td>
      <td>
        <button onClick={handleClick}>{publishedStatus}</button>
      </td>
      <td>
        <button onClick={handleClick}>{createdDate}</button>
      </td>
    </tr>
  )
}
