// components/PostsTable.jsx

import { dbAdmin } from '@/lib/firebaseAdmin'
import PostRow from './post-row/PostRow'

export default async function PostsTable() {
  // Fetch posts from Firestore
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
            <PostRow key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
