// lib/hooks/blog/useTags.js

'use client'

import { useState, useEffect, useCallback } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'
import { toast } from 'react-toastify'

export function useTags() {
  const [availableTags, setAvailableTags] = useState([])
  const [loadingTags, setLoadingTags] = useState(false)
  const [creatingTag, setCreatingTag] = useState(false)

  /**
   * Fetches all existing tags from Firestore.
   */
  const fetchTags = useCallback(async () => {
    setLoadingTags(true)
    try {
      const tagsCollection = collection(db, 'tags')
      const q = query(tagsCollection)
      const querySnapshot = await getDocs(q)
      const tags = []
      querySnapshot.forEach((doc) => {
        tags.push({ id: doc.id, ...doc.data() })
      })
      setAvailableTags(tags)
    } catch (error) {
      console.error('Error fetching tags:', error)
      toast.error('Failed to load tags. Please try again.')
    } finally {
      setLoadingTags(false)
    }
  }, [])

  /**
   * Creates a new tag in Firestore after checking for duplicates.
   *
   * @param {string} tagName - The name of the tag to create.
   * @returns {Promise<object>} - The created tag object or null if failed.
   */
  const createTag = useCallback(
    async (tagName) => {
      if (!tagName.trim()) {
        toast.error('Tag name cannot be empty.')
        return null
      }

      // Check for duplicate tags (case-insensitive)
      const existingTag = availableTags.find(
        (tag) => tag.name.toLowerCase() === tagName.trim().toLowerCase()
      )

      if (existingTag) {
        toast.error('Tag already exists.')
        return null
      }

      setCreatingTag(true)
      try {
        const tagsCollection = collection(db, 'tags')
        const docRef = await addDoc(tagsCollection, {
          name: tagName.trim(),
          createdAt: new Date(),
        })
        const newTag = { id: docRef.id, name: tagName.trim() }
        setAvailableTags((prev) => [...prev, newTag])
        toast.success(`Tag "${tagName.trim()}" created successfully!`)
        return newTag
      } catch (error) {
        console.error('Error creating tag:', error)
        toast.error('Failed to create tag. Please try again.')
        return null
      } finally {
        setCreatingTag(false)
      }
    },
    [availableTags]
  )

  useEffect(() => {
    fetchTags()
  }, [fetchTags])

  return {
    availableTags,
    loadingTags,
    creatingTag,
    fetchTags,
    createTag,
  }
}
