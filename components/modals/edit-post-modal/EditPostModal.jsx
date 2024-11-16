// components/modals/edit-post-modal/EditPostModal.jsx

'use client'

import styles from './EditPostModal.module.scss'
import { useState, useEffect, useRef } from 'react'
import { db, storage } from '@/lib/firebase'
import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import InputGroup from '@/components/inputs/input-group/InputGroup'
import TagSelector from '@/components/inputs/tag-selector/TagSelector'
import dynamic from 'next/dynamic'
import 'highlight.js/styles/github.css' // Import Highlight.js styles
import { toast } from 'react-toastify'
import { useTags } from '@/lib/hooks/blog/useTags'
import Image from 'next/image'
import imageCompression from 'browser-image-compression'

const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
  }
)

export default function EditPostModal({ postId, onClose }) {
  const [post, setPost] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const { availableTags, loadingTags, creatingTag, createTag } = useTags()

  // Define state variables for the form fields
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [published, setPublished] = useState(false)
  const [publishDate, setPublishDate] = useState('')
  const [errors, setErrors] = useState({})

  const editorRef = useRef(null)

  /**
   * Fetches the post data and updates state variables.
   */
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'posts', postId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          const fetchedPost = { id: docSnap.id, ...docSnap.data() }
          setPost(fetchedPost)

          // Update state variables with fetched post data
          setTitle(fetchedPost.title || '')
          setSlug(fetchedPost.slug || '')
          setImageURL(fetchedPost.imageURL || '')
          setImagePreview(fetchedPost.imageURL || null)
          setDescription(fetchedPost.description || '')
          setContent(fetchedPost.content || '')
          setSelectedTags(fetchedPost.tags || [])
          setPublished(fetchedPost.published || false)
          setPublishDate(
            fetchedPost.publishDate
              ? fetchedPost.publishDate.toDate().toISOString().substring(0, 16)
              : ''
          )
        } else {
          toast.error('Post not found.')
          onClose()
        }
      } catch (error) {
        console.error('Error fetching post:', error)
        toast.error('Failed to load post. Please try again.')
        onClose()
      }
    }

    fetchPost()
  }, [postId, onClose])

  /**
   * TinyMCE editor configuration
   */
  const editorConfig = {
    height: 500,
    menubar: false,
    plugins:
      'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
    toolbar:
      'undo redo | formatselect | bold italic underline | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | code | image | help',
    toolbar_mode: 'floating',
    setup: (editor) => {
      editorRef.current = editor
      editor.on('init', () => {
        editor.formatter.register('code-block', {
          inline: false,
          block: 'pre',
          classes: 'hljs',
        })
      })
    },
    content_style: `
      body {
        direction: ltr; /* Enforce left-to-right */
        font-family: Arial, sans-serif;
        font-size: 16px;
      }
      pre.hljs {
        background: #f0f0f0;
        padding: 1em;
        border-radius: 5px;
      }
      code {
        background-color: #f0f0f0;
        padding: 2px 4px;
        border-radius: 4px;
      }
      /* Add more custom styles here */
    `,
    automatic_uploads: true,
    images_upload_handler: async (blobInfo, success, failure) => {
      // Handle image uploads within the editor
      try {
        const file = blobInfo.blob()
        const url = await uploadImage(file)
        success(url)
      } catch (error) {
        failure('Image upload failed.')
      }
    },
  }

  /**
   * Handles changes to the title input.
   *
   * @param {Event} e - The change event from the title input.
   */
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    // Optionally, update the slug here if you want to allow slug changes
  }

  /**
   * Handles changes to the description input.
   *
   * @param {Event} e - The change event from the description input.
   */
  const handleDescriptionChange = (e) => {
    const input = e.target.value
    const wordCount = input
      .trim()
      .split(/\s+/)
      .filter((word) => word).length

    if (wordCount <= 100) {
      setDescription(input)
      setErrors((prev) => ({ ...prev, description: null }))
    } else {
      setErrors((prev) => ({
        ...prev,
        description: 'Description cannot exceed 100 words.',
      }))
    }
  }

  /**
   * Handles changes to the rich text editor.
   *
   * @param {string} value - The HTML content from the editor.
   */
  const handleContentChange = (value) => {
    setContent(value)
    setErrors((prev) => ({ ...prev, content: null }))
  }

  /**
   * Handles image file selection and generates a preview.
   *
   * @param {Event} e - The change event from the image input.
   */
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      // Generate image preview using FileReader
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setImageFile(null)
      setImagePreview(imageURL)
    }
  }

  /**
   * Handles image uploads.
   *
   * @param {File} file - The image file to upload.
   * @returns {Promise<string>} - The URL of the uploaded image.
   */
  const uploadImage = async (file) => {
    // Compress the image before uploading
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }
    try {
      const compressedFile = await imageCompression(file, options)
      const imageRef = ref(storage, `postImages/${slug}-${compressedFile.name}`)
      await uploadBytes(imageRef, compressedFile)
      const uploadedImageURL = await getDownloadURL(imageRef)
      return uploadedImageURL
    } catch (error) {
      console.error('Error uploading image: ', error)
      toast.error('Failed to upload image. Please try again.')
      throw error
    }
  }

  /**
   * Handles form submission.
   *
   * @param {Event} e - The submit event from the form.
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setSuccessMessage('')

    // Basic Validation
    const newErrors = {}
    if (!title.trim()) newErrors.title = 'Title is required.'
    if (!description.trim()) newErrors.description = 'Description is required.'
    else {
      const wordCount = description
        .trim()
        .split(/\s+/)
        .filter((word) => word).length
      if (wordCount > 100)
        newErrors.description = 'Description cannot exceed 100 words.'
    }
    if (!content.trim() || content === '<p><br></p>')
      newErrors.content = 'Content is required.'
    if (selectedTags.length === 0)
      newErrors.tags = 'At least one tag is required.'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      let updatedImageURL = imageURL
      if (imageFile) {
        // Upload new image
        updatedImageURL = await uploadImage(imageFile)
      }

      const docRef = doc(db, 'posts', postId)
      await updateDoc(docRef, {
        title: title.trim(),
        description: description.trim(),
        content,
        tags: selectedTags,
        imageURL: updatedImageURL,
        published,
        updatedAt: serverTimestamp(),
        publishDate: publishDate
          ? Timestamp.fromDate(new Date(publishDate))
          : null,
      })

      setSuccessMessage('Post updated successfully!')
      toast.success('Post updated successfully!')
      onClose()
    } catch (error) {
      console.error('Error updating post:', error)
      setErrors({ submit: 'Failed to update post. Please try again.' })
      toast.error('Failed to update post. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Optional: Show a loading state while the post is being fetched
  if (!post) {
    return (
      <div className={styles.editPostModal} role='dialog' aria-modal='true'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div
      className={styles.editPostModal}
      role='dialog'
      aria-modal='true'
      aria-labelledby='edit-post-title'
    >
      <h2 id='edit-post-title'>Edit Post</h2>
      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Title Input */}
        <InputGroup
          label='Post Title'
          id='title'
          type='text'
          value={title}
          onChange={handleTitleChange}
          placeholder='Enter post title'
          required
          error={errors.title}
          helperText='Enter a descriptive title for your post.'
        />

        {/* Slug Display */}
        <InputGroup
          label='Post Slug'
          id='slug'
          type='text'
          value={slug}
          readOnly
          placeholder='Slug'
          helperText='The slug used in the post URL.'
        />

        {/* Image Upload */}
        <InputGroup
          label='Post Image'
          id='image'
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          error={errors.image}
          helperText='Upload an image related to your post.'
        />

        {/* Image Preview */}
        {imagePreview && (
          <div className={styles.imagePreview}>
            <Image
              src={imagePreview}
              alt='Image Preview'
              width={800}
              height={600}
              unoptimized
            />
          </div>
        )}

        {/* Post Description */}
        <InputGroup
          label='Post Description'
          id='description'
          isTextarea={true}
          value={description}
          onChange={handleDescriptionChange}
          placeholder='Enter a brief description (max 100 words)'
          required
          error={errors.description}
          helperText='Provide a concise description of your post (up to 100 words).'
        />

        {/* Tag Selector */}
        <TagSelector
          availableTags={availableTags}
          loadingTags={loadingTags}
          creatingTag={creatingTag}
          createTag={createTag}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          error={errors.tags}
        />

        {/* TinyMCE Rich Text Editor for Content */}
        <div className={styles.inputGroup}>
          <label
            htmlFor='content'
            className={`border-1 bs-3 br-4 fw-bold bg-light fs-200 ${styles.label}`}
          >
            Post Content <span aria-hidden='true'>*</span>
          </label>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            value={content}
            onEditorChange={handleContentChange}
            init={editorConfig}
            className={`${styles.richText} ${
              errors.content ? styles.errorInput : ''
            }`}
            aria-required='true'
            aria-invalid={!!errors.content}
            aria-describedby={errors.content ? 'content-error' : undefined}
          />
          {errors.content && (
            <span id='content-error' className={styles.error} role='alert'>
              {errors.content}
            </span>
          )}
        </div>

        {/* Published Checkbox */}
        <div className={styles.inputGroup}>
          <label htmlFor='published' className={styles.label}>
            <input
              type='checkbox'
              id='published'
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />{' '}
            Published
          </label>
        </div>

        {/* Publish Date */}
        {published && (
          <InputGroup
            label='Publish Date'
            id='publishDate'
            type='datetime-local'
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            error={errors.publishDate}
            helperText='Select a future date to schedule the post.'
          />
        )}

        {/* Submit and Cancel Buttons */}
        <div className={styles.buttonGroup}>
          <button
            type='submit'
            className={`bg-blue border-200 br-800 ${styles.submitButton}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Updating...' : 'Update Post'}
          </button>
          <button
            type='button'
            className={`ml-4 ${styles.cancelButton}`}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
        {errors.submit && (
          <span className={styles.error} role='alert'>
            {errors.submit}
          </span>
        )}
      </form>
    </div>
  )
}
