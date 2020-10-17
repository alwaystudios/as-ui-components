import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'

const Svg = styled.svg`
  cursor: row-resize;
`

type Props = Icon & {
  direction: 'vertical' | 'horizontal'
}

export const ResizeIcon: FunctionComponent<Props> = ({ size, direction }) => {
  const rotation = direction === 'vertical' ? '' : '+90deg'
  const transform = `rotate(${rotation})`
  const style = {
    willChange: 'transform',
    transform,
    margin: 'auto',
  }
  return (
    <Svg style={style} height={size} width={size} viewBox="0 0 488.4 488.4">
      <g>
        <polygon points="425.8,228.3 354.7,228.3 354.7,261.7 425.8,261.7 386.2,301.4 409.9,325.1 490,245 409.9,164.9 386.2,188.6" />
        <polygon points="64.2,261.7 135.3,261.7 135.3,228.3 64.2,228.3 103.8,188.6 80.1,164.9 0,245 80.1,325.1 103.8,301.4" />
        <rect x="178.5" width="50.2" height="490" />
        <rect x="269.5" width="50.2" height="490" />
      </g>
    </Svg>
  )
}
