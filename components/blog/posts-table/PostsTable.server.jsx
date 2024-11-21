// components/blog/PostsTable.server.jsx

import PostsTableClient from './PostsTableClient'
import { dbAdmin } from '@/lib/firebaseAdmin'

export default async function PostsTable() {
  // Fetch posts from Firestore
  const postsSnapshot = await dbAdmin
    .collection('posts')
    .orderBy('createdAt', 'desc')
    .get()

  const posts = postsSnapshot.docs.map((doc) => {
    const data = doc.data()

    // Convert Firestore Timestamps to ISO strings
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : null,
      updatedAt: data.updatedAt ? data.updatedAt.toDate().toISOString() : null,
      publishDate: data.publishDate
        ? data.publishDate.toDate().toISOString()
        : null,
    }
  })

  return <PostsTableClient posts={posts} />
}
