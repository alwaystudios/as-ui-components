import React, { useState } from 'react'
import { FileUpload } from './FileUpload'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { noop } from '../noop'

const stories = storiesOf('FileUpload', module)

stories.add('renders', () => (
  <FileUpload
    multiple={boolean('multiple', false)}
    accept={text('accept', 'image/gif')}
    onChange={noop}
    hidden={boolean('hidden', false)}
    openFileDialog={boolean('openFileDiaglog', false)}
    disabled={boolean('disabled', false)}
    className={text('className', 'some-custom-class')}
  >
    children render here
  </FileUpload>
))

stories.add('with react state', () =>
  React.createElement(() => {
    const [uploadedFiles, setUploadedFiles] = useState<string[]>([])
    const handleOnChange = (files: File[]) => {
      const fileNames = files.map((file) => file.name)
      setUploadedFiles(fileNames)
    }
    return (
      <>
        <p>Uploaded file(s) {uploadedFiles.join(', ')}</p>
        <FileUpload
          accept={text('Accept', 'application/pdf')}
          multiple={boolean('Multiple', true)}
          onChange={handleOnChange}
        >
          drag zone
        </FileUpload>
      </>
    )
  }),
)
