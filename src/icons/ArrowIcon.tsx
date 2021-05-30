import React, { FunctionComponent } from 'react'
import { Icon } from './Icon'

type Props = Icon & {
  direction: 'up' | 'down' | 'left' | 'right'
}

export const ArrowIcon: FunctionComponent<Props> = ({ direction, size }) => {
  const rotation =
    direction === 'up'
      ? '-90deg'
      : direction === 'down'
      ? '+90deg'
      : direction === 'left'
      ? ''
      : '-180deg'
  const transform = `rotate(${rotation})`
  const style = {
    willChange: 'transform',
    transform,
    margin: 'auto',
  }

  return (
    <svg height={size} width={size} viewBox="0 0 16 16" style={style}>
      <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
    </svg>
  )
}
