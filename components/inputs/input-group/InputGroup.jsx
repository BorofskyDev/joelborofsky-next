// components/inputs/input-group/InputGroup.jsx

'use client'

import React from 'react'
import styles from './InputGroup.module.scss'
import PropTypes from 'prop-types'

export default function InputGroup({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
  isTextarea = false,
  accept = '',
  error = '',
  helperText = '',
  maxWords = null, // New prop for word count
  ...props // Rest props
}) {
  // Calculate remaining words if maxWords is provided
  const remainingWords =
    maxWords && isTextarea
      ? maxWords -
        (value.trim() === ''
          ? 0
          : value
              .trim()
              .split(/\s+/)
              .filter((word) => word).length)
      : null

  return (
    <div className={styles.inputGroup}>
      <label
        htmlFor={id}
        className={`border-1 bs-3 br-4 fw-bold bg-light fs-200 ${styles.label}`}
      >
        {label} {required && <span aria-hidden='true'>*</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-helper-text` : undefined
          }
          className={`${styles.input} ${error ? styles.errorInput : ''}`}
          {...props} // Spread rest props (excluding maxWords)
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          accept={accept}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-helper-text` : undefined
          }
          className={`${styles.input} ${error ? styles.errorInput : ''}`}
          {...props} // Spread rest props (excluding maxWords)
        />
      )}
      {helperText && (
        <small id={`${id}-helper-text`} className={styles.helperText}>
          {helperText}
        </small>
      )}
      {remainingWords !== null && (
        <small
          className={`${styles.helperText} ${
            remainingWords < 0 ? styles.errorText : ''
          }`}
        >
          {remainingWords} words remaining
        </small>
      )}
      {error && (
        <span id={`${id}-error`} className={styles.error} role='alert'>
          {error}
        </span>
      )}
    </div>
  )
}

// Define PropTypes for better type checking
InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(File)])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  isTextarea: PropTypes.bool,
  accept: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  maxWords: PropTypes.number, // New prop for word count
}

InputGroup.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false,
  isTextarea: false,
  accept: '',
  error: '',
  helperText: '',
  maxWords: null,
}
