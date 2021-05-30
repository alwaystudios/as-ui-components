import React, { FunctionComponent } from 'react'

type ComponentProps = {
  csrfToken: string
}

export const CsrfToken: FunctionComponent<ComponentProps> = ({ csrfToken }) => {
  return <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
}
