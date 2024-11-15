// components/TestTinyMCE.jsx

'use client'

import { Editor } from '@tinymce/tinymce-react'

export default function TestTinyMCE() {
  console.log('Rendering TestTinyMCE Editor')
  return (
    <div>
      <h2>Test TinyMCE Editor</h2>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        init={{
          height: 300,
          menubar: false,
          plugins:
            'advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
          toolbar:
            'undo redo | formatselect | bold italic underline | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | removeformat | code | image | help',
        }}
      />
    </div>
  )
}
