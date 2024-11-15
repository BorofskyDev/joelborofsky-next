// components/inputs/selector-input/TagSelector.jsx

'use client'

import { useState, useMemo, useCallback } from 'react'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'

import { icons } from '@/components/icons/icons'
import PropTypes from 'prop-types'
import styles from './TagSelector.module.scss'

export default function TagSelector({
  availableTags,
  loadingTags,
  creatingTag,
  createTag,
  selectedTags,
  setSelectedTags,
  error,
}) {
  const [query, setQuery] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  // Filter tags based on query
  const filteredTags = useMemo(() => {
    if (query === '') {
      return availableTags
    }
    return availableTags.filter((tag) =>
      tag.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [availableTags, query])

  /**
   * Handles the creation of a new tag.
   */
  const handleCreateTag = useCallback(async () => {
    if (query.trim() === '') return
    setIsCreating(true)
    const newTag = await createTag(query.trim())
    if (newTag) {
      setSelectedTags((prev) => [...prev, newTag.id])
      setQuery('')
    }
    setIsCreating(false)
  }, [createTag, query, setSelectedTags])

  /**
   * Handles selecting a tag from the dropdown.
   *
   * @param {object} tag - The tag object selected.
   */
  const handleSelectTag = useCallback(
    (tag) => {
      if (!selectedTags.includes(tag.id)) {
        setSelectedTags((prev) => [...prev, tag.id])
      }
      setQuery('')
    },
    [selectedTags, setSelectedTags]
  )

  /**
   * Handles removing a tag from the selectedTags list.
   *
   * @param {string} tagId - The ID of the tag to remove.
   */
  const handleRemoveTag = useCallback(
    (tagId) => {
      setSelectedTags((prev) => prev.filter((id) => id !== tagId))
    },
    [setSelectedTags]
  )

  return (
    <div className={styles.tagSelector}>
      <Combobox value={null} onChange={handleSelectTag}>
        <div>
          <ComboboxInput
            className={`${styles.comboboxInput} ${
              error ? styles.errorInput : ''
            }`}
            placeholder='Select or create tags...'
            onChange={(event) => setQuery(event.target.value)}
            displayValue={() => ''}
          />
          <ComboboxButton className={styles.comboboxButton}>
            <svg
              xmlns={icons.selector.xmlns}
              viewBox={icons.selector.viewBox}
              fill='currentColor'
              aria-hidden='true'
            >
              <path d={icons.selector.path} />
            </svg>
          </ComboboxButton>
          {filteredTags.length > 0 || query !== '' ? (
            <ComboboxOptions className={styles.comboboxOptions}>
              {filteredTags.length === 0 && query !== '' && !loadingTags ? (
                <ComboboxOption
                  value={{
                    id: 'create-new-tag',
                    name: `Create "${query.trim()}"`,
                  }}
                  className={({ active }) =>
                    `${styles.comboboxOption} ${
                      active ? styles.activeOption : ''
                    }`
                  }
                  onClick={handleCreateTag}
                >
                  <div className='flex items-center'>
                    <svg className='w-5 h-5 text-green-500 mr-2' />
                    Create &quot;{query.trim()}&quot;
                  </div>
                </ComboboxOption>
              ) : (
                filteredTags.map((tag) => (
                  <ComboboxOption
                    key={tag.id}
                    value={tag}
                    className={({ active }) =>
                      `${styles.comboboxOption} ${
                        active ? styles.activeOption : ''
                      }`
                    }
                  >
                    {({ active }) => (
                      <div className='flex items-center'>
                        <svg
                          xmlns={icons.check.xmlns}
                          viewBox={icons.check.viewBox}
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          {' '}
                          <path d={icons.check.path} />{' '}
                        </svg>
                        {tag.name}
                      </div>
                    )}
                  </ComboboxOption>
                ))
              )}
              {loadingTags && (
                <div className={styles.loading}>Loading tags...</div>
              )}
            </ComboboxOptions>
          ) : null}
        </div>
      </Combobox>

      {/* Selected Tags Display */}
      <div className={styles.selectedTags}>
        {selectedTags.map((tagId) => {
          const tag = availableTags.find((t) => t.id === tagId)
          if (!tag) return null
          return (
            <span key={tag.id} className={styles.tag}>
              {tag.name}
              <button
                type='button'
                onClick={() => handleRemoveTag(tag.id)}
                className={styles.removeTagButton}
                aria-label={`Remove tag ${tag.name}`}
              >
                <svg
                  xmlns={icons.x.xmlns}
                  viewBox={icons.x.viewBox}
                  className='w-4 h-4'
                >
                  <path d={icons.x.path} />
                </svg>
              </button>
            </span>
          )
        })}
      </div>

      {/* Error Message */}
      {error && (
        <span className={styles.error} role='alert'>
          {error}
        </span>
      )}
    </div>
  )
}

TagSelector.propTypes = {
  availableTags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  loadingTags: PropTypes.bool.isRequired,
  creatingTag: PropTypes.bool.isRequired,
  createTag: PropTypes.func.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedTags: PropTypes.func.isRequired,
  error: PropTypes.string,
}

TagSelector.defaultProps = {
  error: '',
}
