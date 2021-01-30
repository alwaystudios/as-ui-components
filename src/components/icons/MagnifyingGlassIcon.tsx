import React, { FunctionComponent } from 'react'
import { Icon } from './Icon'

export const MagnifyingGlassIcon: FunctionComponent<Icon> = ({
  fill = 'black',
  backgroundFill = 'none',
  className = '',
  size = '32',
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <rect fill={backgroundFill} width={size} height={size} />
    <path
      fill={fill}
      d="M29.82861,24.17139,25.56519,19.908A13.0381,13.0381,0,1,0,19.908,25.56525l4.26343,4.26337a4.00026,4.00026,0,0,0,5.65723-5.65723ZM5,14a9,9,0,1,1,9,9A9.00984,9.00984,0,0,1,5,14Z"
    />
  </svg>
)
