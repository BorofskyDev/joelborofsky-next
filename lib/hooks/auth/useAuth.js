// lib/hooks/useAuth.js

'use client'
import { useEffect, useState, createContext, useContext } from 'react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, getIdTokenResult } from 'firebase/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          await currentUser.getIdToken(true)
          const idTokenResult = await getIdTokenResult(currentUser)
          setUser(currentUser)
          setIsAdmin(!!idTokenResult.claims.admin)
        } catch (error) {
          console.error('Error fetching ID token:', error)
          setUser(null)
          setIsAdmin(false)
        }
      } else {
        setUser(null)
        setIsAdmin(false)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
