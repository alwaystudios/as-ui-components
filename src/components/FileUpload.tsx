import React, { FunctionComponent, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ hidden }: { hidden: boolean }) =>
    hidden &&
    css`
      display: none;
      visibility: hidden;
    `}
`

type Props = {
  multiple?: boolean
  accept?: string
  onChange: (acceptedFiles: File[]) => void
  hidden?: boolean
  openFileDialog?: boolean
  disabled?: boolean
  className?: string
}

export const FileUpload: FunctionComponent<Props> = ({
  multiple = false,
  accept,
  onChange,
  children,
  hidden = false,
  openFileDialog = false,
  disabled = false,
  className = '',
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    onChange(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, open } = useDropzone({ onDrop })

  useEffect(() => {
    if (openFileDialog) {
      open()
    }
  }, [openFileDialog])

  return (
    <Container hidden={hidden} {...getRootProps()}>
      <input disabled={disabled} className={className} {...getInputProps({ multiple, accept })} />
      {children}
    </Container>
  )
}
