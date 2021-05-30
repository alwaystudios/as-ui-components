import React, { FunctionComponent } from 'react'
import { Icon } from './Icon'

export const CrossIcon: FunctionComponent<Icon> = ({
  fill = 'black',
  backgroundFill = 'none',
  className = '',
  size = '32',
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
    <rect fill={backgroundFill} width={size} height={size} />
    <path
      fill={fill}
      d="M18.82813,16,29.41406,5.41406a1.99979,1.99979,0,0,0-2.82812-2.82812L16,13.17188,5.41406,2.58594A1.99979,1.99979,0,0,0,2.58594,5.41406L13.17188,16,2.58594,26.58594a1.99979,1.99979,0,1,0,2.82813,2.82813L16,18.82813,26.58594,29.41406a1.99979,1.99979,0,0,0,2.82813-2.82812Z"
    />
  </svg>
)
