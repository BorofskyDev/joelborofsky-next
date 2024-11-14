'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import styles from './LoginComponent.module.scss'
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'

export default function LoginComponent() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await signInWithEmailAndPassword(auth, email, password)

      router.push('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`bg-violet border-4 bs-6 br-9 ${styles.loginComponent}`}>
      <SectionHeader className='bg-pink'>Login</SectionHeader>
      <form
        onSubmit={handleSubmit}
        className={`bg-blue border-2 bs-4 br-6 ${styles.loginForm}`}
      >
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.formGroup}>
          <label
            className={`border-1 bs-2 br-4 bg-light ${styles.label}`}
            htmlFor={styles.email}
          >
            Email:
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter your email'
            className={`border-2 br-6 ${styles.input}`}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={`border-1 bs-2 br-4 bg-light ${styles.label}`} htmlFor='password'>
            Password:
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Enter your password'
            className={`border-2 br-6 ${styles.input}`}
          />
        </div>

        <button className={`border-2 br-8 bg-red ${styles.button}`} type='submit' disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}
