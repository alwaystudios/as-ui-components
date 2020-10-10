import React from 'react'

type Props = {
  onClick: () => void
}

export const Button: React.FunctionComponent<Props> = ({ onClick }) => {
  return <button onClick={onClick}>todo</button>
}
