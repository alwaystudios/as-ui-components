import React, { FunctionComponent } from 'react'
import { Icon } from './Icon'

export const LockIcon: FunctionComponent<Icon> = ({ size }) => (
  <svg height={size} width={size} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 485 485">
    <g>
      <path
        d="M345,175v-72.5C345,45.981,299.019,0,242.5,0S140,45.981,140,102.5V175H70v310h345V175H345z M170,102.5
		c0-39.977,32.523-72.5,72.5-72.5S315,62.523,315,102.5V175H170V102.5z M385,455H100V205h285V455z"
      />
      <path
        d="M227.5,338.047v53.568h30v-53.569c11.814-5.628,20-17.682,20-31.616c0-19.299-15.701-35-35-35c-19.299,0-35,15.701-35,35
		C207.5,320.365,215.686,332.42,227.5,338.047z"
      />
    </g>
  </svg>
)