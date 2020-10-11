import React, { FunctionComponent } from 'react'
import { Icon } from './Icon'

export const DustbinIcon: FunctionComponent<Icon> = ({ size }) => (
  <svg
    height={size}
    width={size}
    viewBox="0 0 24 24"
    id="trash_bin"
    data-name="trash bin"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" fill="none" />
    <path
      id="Rectangle"
      d="M0,0H14L13,13H1Z"
      transform="translate(5 8)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="1.5"
    />
    <path
      id="Rectangle_3"
      data-name="Rectangle 3"
      d="M3,0H13a3,3,0,0,1,3,3V3a0,0,0,0,1,0,0H0A0,0,0,0,1,0,3V3A3,3,0,0,1,3,0Z"
      transform="translate(4 5)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="1.5"
    />
    <path
      id="Oval"
      d="M0,0A2,2,0,0,0,2,2,2,2,0,0,0,4,0"
      transform="translate(14 4.5) rotate(-180)"
      fill="none"
      stroke="#000"
      stroke-miterlimit="10"
      stroke-width="1.5"
    />
    <path
      id="Line"
      d="M1,0V5"
      transform="translate(9 12)"
      fill="none"
      stroke="#000"
      stroke-linecap="square"
      stroke-miterlimit="10"
      stroke-width="1.5"
    />
    <path
      id="Line-2"
      data-name="Line"
      d="M1,0V5"
      transform="translate(13 12)"
      fill="none"
      stroke="#000"
      stroke-linecap="square"
      stroke-miterlimit="10"
      stroke-width="1.5"
    />
  </svg>
)
