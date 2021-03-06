import React, { FunctionComponent } from 'react'
import { Icon } from './Icon'

export const HistoryIcon: FunctionComponent<Icon> = ({ size }) => (
  <svg height={size} width={size} viewBox="0 0 32 32">
    <polygon points="20.59 22 15 16.41 15 7 17 7 17 15.58 22 20.59 20.59 22" />
    <path d="M16,2A13.94,13.94,0,0,0,6,6.23V2H4v8h8V8H7.08A12,12,0,1,1,4,16H2A14,14,0,1,0,16,2Z" />
  </svg>
)
