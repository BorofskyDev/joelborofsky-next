// lib/hooks/blog/useCreatePost.js

'use client'

import { useState, useCallback } from 'react'
import { auth, storage, db } from '@/lib/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from 'firebase/firestore'
import { slugify } from '@/lib/utils/slugify'
import debounce from 'lodash.debounce'
import imageCompression from 'browser-image-compression'
import { toast } from 'react-toastify'

export function useCreatePost() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  /**
   * Generates a unique slug by checking Firestore for existing slugs.
   * If the slug exists, appends a counter to make it unique.
   *
   * @param {string} baseSlug - The initial slug generated from the title.
   * @returns {Promise<string>} - A unique slug.
   */
  const generateUniqueSlug = useCallback(async (baseSlug) => {
    let uniqueSlug = baseSlug
    let counter = 1

    const postsRef = collection(db, 'posts')
    let slugExists = true

    while (slugExists) {
      const q = query(postsRef, where('slug', '==', uniqueSlug))
      const querySnapshot = await getDocs(q)
      if (querySnapshot.empty) {
        slugExists = false
      } else {
        uniqueSlug = `${baseSlug}-${counter}`
        counter += 1
      }
    }

    return uniqueSlug
  }, [])

  /**
   * Debounced slug generation to prevent excessive Firestore queries.
   */
  const debouncedGenerateSlug = useCallback(
    debounce(async (baseSlug) => {
      if (baseSlug) {
        const uniqueSlug = await generateUniqueSlug(baseSlug)
        setSlug(uniqueSlug)
      } else {
        setSlug('')
      }
    }, 500), // 500ms delay
    [generateUniqueSlug]
  )

  /**
   * Handles changes to the title input.
   * Updates the title and generates a unique slug.
   *
   * @param {Event} e - The change event from the title input.
   */
  const handleTitleChange = useCallback(
    (e) => {
      const newTitle = e.target.value
      setTitle(newTitle)
      const baseSlug = slugify(newTitle)
      debouncedGenerateSlug(baseSlug)
    },
    [debouncedGenerateSlug]
  )

  /**
   * Handles image file selection and generates a preview.
   *
   * @param {Event} e - The change event from the image input.
   */
  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0]
    if (file) {
      // Optional: Validate file type and size here
      setImage(file)
      // Generate image preview using FileReader
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImage(null)
      setImagePreview(null)
    }
  }, [])

  /**
   * Handles changes to the rich text editor.
   *
   * @param {string} value - The HTML content from the editor.
   */
  const handleContentChange = useCallback((value) => {
    setContent(value)
    setErrors((prev) => ({ ...prev, content: null }))
  }, [])

  /**
   * Resets all form fields and status messages.
   */
  const resetForm = useCallback(() => {
    setTitle('')
    setSlug('')
    setImage(null)
    setImagePreview(null)
    setContent('')
    setErrors({})
    setSuccessMessage('')
  }, [])

  /**
   * Handles image uploads within the rich text editor.
   *
   * @param {File} file - The image file to upload.
   * @returns {Promise<string>} - The URL of the uploaded image.
   */
  const uploadImage = useCallback(
    async (file) => {
      // Compress the image before uploading
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }
      try {
        const compressedFile = await imageCompression(file, options)
        const imageRef = ref(
          storage,
          `postImages/${slug}-${compressedFile.name}`
        )
        await uploadBytes(imageRef, compressedFile)
        const imageURL = await getDownloadURL(imageRef)
        return imageURL
      } catch (error) {
        console.error('Error uploading image: ', error)
        toast.error('Failed to upload image. Please try again.')
        throw error
      }
    },
    [slug]
  )

  /**
   * Handles form submission.
   * Uploads the main image to Firebase Storage and creates a new post in Firestore.
   *
   * @param {Event} e - The submit event from the form.
   */
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      setIsSubmitting(true)
      setErrors({})
      setSuccessMessage('')

      // Basic Validation
      const newErrors = {}
      if (!title.trim()) newErrors.title = 'Title is required.'
      if (!content.trim() || content === '<p><br></p>')
        newErrors.content = 'Content is required.'
      if (!image) newErrors.image = 'Post image is required.'

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        setIsSubmitting(false)
        return
      }

      try {
        // Upload Main Image to Firebase Storage
        const imageURL = await uploadImage(image)

        // Create Post Document in Firestore
        const postsCollection = collection(db, 'posts')
        await addDoc(postsCollection, {
          title: title.trim(),
          slug,
          imageURL,
          content, // Rich text content
          published: false, // Default to false
          createdAt: serverTimestamp(),
          authorId: auth.currentUser ? auth.currentUser.uid : null,
        })

        // Set Success Message and Reset Form
        setSuccessMessage('Post created successfully!')
        toast.success('Post created successfully!')
        resetForm()
      } catch (error) {
        console.error('Error creating post:', error)
        setErrors({ submit: 'Failed to create post. Please try again.' })
        toast.error('Failed to create post. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    },
    [title, slug, image, content, uploadImage, resetForm]
  )

  return {
    title,
    slug,
    image,
    imagePreview,
    content,
    errors,
    isSubmitting,
    successMessage,
    handleTitleChange,
    handleImageChange,
    handleContentChange,
    handleSubmit,
    resetForm,
    uploadImage, // Exposed if needed elsewhere
  }
}
