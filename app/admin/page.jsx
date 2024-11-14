// app/admin/page.jsx

'use client'

 // If using a centralized auth hook
import styles from './page.module.scss'

export default function AdminPage() {
  // If using a centralized auth hook, you can access user and isAdmin here
  // const { user, isAdmin, loading } = useAuth()

  // Since authentication is handled in layout.jsx or Middleware, proceed to render admin content

  return (
    <div className={styles.adminPage}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin!</p>
      {/* Add your admin-specific components and content here */}
    </div>
  )
}
