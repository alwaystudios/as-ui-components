import React, { FunctionComponent } from 'react'
import { Icon } from './Icon'

export const SuccessIcon: FunctionComponent<Icon> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 50 50">
    <g>
      <circle style={{ fill: '#25AE88' }} cx="25" cy="25" r="25" />
      <polyline
        style={{
          fill: 'none',
          stroke: '#FFFFFF',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeMiterlimit: 10,
        }}
        points="38,15 22,33 12,25"
      />
    </g>
  </svg>
)
