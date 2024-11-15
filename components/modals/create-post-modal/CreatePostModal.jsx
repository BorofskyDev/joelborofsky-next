// components/modals/create-post-modal/CreatePostModal.jsx

'use client'

import styles from './CreatePostModal.module.scss'
import { useCreatePost } from '@/lib/hooks/blog/useCreatePost'
import Image from 'next/image'
import InputGroup from '@/components/inputs/input-group/InputGroup'
import dynamic from 'next/dynamic'
import 'highlight.js/styles/github.css' // Import Highlight.js styles
import { useCallback, useRef } from 'react'
import { toast } from 'react-toastify' // For toast notifications

// Dynamically import the Editor component with SSR disabled
const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>, // Optional: Add a loading state
  }
)

export default function CreatePostModal() {
  const {
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
    uploadImage,
  } = useCreatePost()

  /**
   * Reference to the TinyMCE editor
   */
  const editorRef = useRef(null)

  /**
   * Custom image handler for TinyMCE to handle image uploads.
   */
  const imageHandler = useCallback(() => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = async () => {
      const file = input.files[0]
      if (file) {
        try {
          // Upload image to Firebase and get URL
          const url = await uploadImage(file)
          // Insert image into editor
          const editor = editorRef.current
          if (editor) {
            editor.insertContent(`<img src="${url}" alt="Uploaded Image" />`)
          }
        } catch (error) {
          console.error('Error uploading image: ', error)
          toast.error('Failed to upload image. Please try again.')
        }
      }
    }
  }, [uploadImage])

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
      // Register custom image button
      editor.ui.registry.addButton('image', {
        icon: 'image',
        tooltip: 'Insert Image',
        onAction: () => {
          imageHandler()
        },
      })
      // Register code block with syntax highlighting
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
      // Handle image uploads here if you want to allow drag-and-drop or paste images
      try {
        const file = blobInfo.blob()
        const url = await uploadImage(file)
        success(url)
      } catch (error) {
        failure('Image upload failed.')
      }
    },
  }

  return (
    <div
      className={styles.createPostModal}
      role='dialog'
      aria-modal='true'
      aria-labelledby='create-post-title'
    >
      <h2 id='create-post-title'>Create Post</h2>
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
          placeholder='Auto-generated slug'
          helperText='This slug will be used in the post URL.'
        />

        {/* Image Upload */}
        <InputGroup
          label='Post Image'
          id='image'
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          required
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

        {/* TinyMCE Rich Text Editor for Content */}
        <div className={styles.inputGroup}>
          <label
            htmlFor='content'
            className={`border-1 bs-3 br-4 fw-bold bg-light fs-200 ${styles.label}`}
          >
            Post Content <span aria-hidden='true'>*</span>
          </label>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY} // Correctly accessing the API key
            value={content}
            onEditorChange={(newContent) => handleContentChange(newContent)}
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

        {/* Submit Button */}
        <button
          type='submit'
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create Post'}
        </button>
        {errors.submit && <span className={styles.error}>{errors.submit}</span>}
      </form>
    </div>
  )
}
