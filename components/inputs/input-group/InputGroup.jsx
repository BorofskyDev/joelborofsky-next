// components/inputs/InputGroup.jsx
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
  ...props
}) {
  // Generate unique IDs for helperText and error messages
  const helperTextId = helperText ? `${id}-helper-text` : undefined
  const errorId = error ? `${id}-error` : undefined

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
            error ? errorId : helperText ? helperTextId : undefined
          }
          className={`${styles.input} ${error ? styles.errorInput : ''}`}
          {...props}
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
            error ? errorId : helperText ? helperTextId : undefined
          }
          className={`${styles.input} ${error ? styles.errorInput : ''}`}
          {...props}
        />
      )}
      {helperText && (
        <small id={helperTextId} className={styles.helperText}>
          {helperText}
        </small>
      )}
      {error && (
        <span id={errorId} className={styles.error} role='alert'>
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
}
