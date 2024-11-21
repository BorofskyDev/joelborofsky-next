// components/modals/edit-post-modal/EditPostModal.jsx

'use client'

import { useState, useRef } from 'react'
import { db, storage } from '@/lib/firebase'
import { doc, updateDoc, serverTimestamp, Timestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import InputGroup from '@/components/inputs/input-group/InputGroup'
import TagSelector from '@/components/inputs/tag-selector/TagSelector'
import dynamic from 'next/dynamic'
import 'highlight.js/styles/github.css'
import { toast } from 'react-toastify'
import { useTags } from '@/lib/hooks/blog/useTags'
import Image from 'next/image'
import imageCompression from 'browser-image-compression'
import Modal from '../Modal'
import styles from './EditPostModal.module.scss'

const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
  }
)

export default function EditPostModal({ post, onClose }) {
  // Initialize state with post data
  const [title, setTitle] = useState(post.title || '')
  const [slug, setSlug] = useState(post.slug || '')
  const [imageURL, setImageURL] = useState(post.imageURL || '')
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(post.imageURL || null)
  const [description, setDescription] = useState(post.description || '')
  const [content, setContent] = useState(post.content || '')
  const [selectedTags, setSelectedTags] = useState(post.tags || [])
  const [published, setPublished] = useState(post.published || false)
  const [publishDate, setPublishDate] = useState(
    post.publishDate
      ? post.publishDate.toDate().toISOString().substring(0, 16)
      : ''
  )
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const { availableTags, loadingTags, creatingTag, createTag } = useTags()

  const editorRef = useRef(null)

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
   * Handles image uploads.
   *
   * @param {File} file - The image file to upload.
   * @returns {Promise<string>} - The URL of the uploaded image.
   */
  const uploadImage = async (file) => {
    const currentSlug = slug || post.slug || 'default-slug'
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }
    try {
      const compressedFile = await imageCompression(file, options)
      const imageRef = ref(
        storage,
        `postImages/${currentSlug}-${compressedFile.name}`
      )
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

      const docRef = doc(db, 'posts', post.id)
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

  return (
    <Modal modalBg='bg-green' isOpen={true} onClose={onClose}>
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
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => {
              const file = e.target.files[0]
              if (file) {
                setImageFile(file)
                const reader = new FileReader()
                reader.onloadend = () => {
                  setImagePreview(reader.result)
                }
                reader.readAsDataURL(file)
              } else {
                setImageFile(null)
                setImagePreview(imageURL)
              }
            }}
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
                // Consider removing 'unoptimized' if not necessary
              />
            </div>
          )}

          {/* Post Description */}
          <InputGroup
            label='Post Description'
            id='description'
            isTextarea={true}
            value={description}
            onChange={(e) => {
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
            }}
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
              onEditorChange={(value) => {
                setContent(value)
                setErrors((prev) => ({ ...prev, content: null }))
              }}
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
              className={`bg-blue border-2 br-4 ${styles.button}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating...' : 'Update Post'}
            </button>
            <button
              type='button'
              className={`bg-red border-2 br-4 ${styles.button}`}
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
    </Modal>
  )
}
