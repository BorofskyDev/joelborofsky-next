// app/login/page.jsx

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, getIdTokenResult } from 'firebase/auth'
import LoginComponent from '@/components/auth/login-component/LoginComponent'
import styles from './page.module.scss'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Refresh the token to get the latest custom claims
          await user.getIdToken(true)
          const idTokenResult = await getIdTokenResult(user)

          if (idTokenResult.claims.admin) {
            router.push('/admin')
          } else {
            router.push('/')
          }
        } catch (error) {
          console.error('Error fetching ID token:', error)
          setLoading(false)
        }
      } else {
        setLoading(false)
      }
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [router])

  if (loading) {
    return (
      <section className={styles.loginPage}>
        {/* Optional: Add a loading spinner or placeholder */}
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <section className={styles.loginPage}>
      <div
        className={`bg-red ${styles.backgroundDiv} ${styles.backgroundDiv__one}`}
      ></div>
      <div
        className={`bg-blue ${styles.backgroundDiv} ${styles.backgroundDiv__two}`}
      ></div>
      <div
        className={`bg-green ${styles.backgroundDiv} ${styles.backgroundDiv__three}`}
      ></div>
      <div
        className={`bg-yellow ${styles.backgroundDiv} ${styles.backgroundDiv__four}`}
      ></div>
      <LoginComponent />
    </section>
  )
}
