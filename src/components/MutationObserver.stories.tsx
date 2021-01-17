import { storiesOf } from '@storybook/react'
import React, { FunctionComponent, useState, useRef, useEffect, useMemo } from 'react'
import styled from 'styled-components'

const stories = storiesOf('Mutation observer', module)

const Container = styled.section`
  .aaa {
    display: inline-block;
    min-height: 100px;
    min-width: 100px;
    resize: both;
    overflow: auto;
    background: blue;
  }

  .bbb {
    display: inline-block;
    height: 200px;
    width: 200px;
    background: green;
  }
`

type Props = {
  rect: any
  setRect: (data: any) => void
}

const Component: FunctionComponent<Props> = ({ rect, setRect }) => {
  const ref = useRef<HTMLDivElement>(null)

  const getRect = (element: HTMLDivElement) => element.getBoundingClientRect()
  const updateRect = () => {
    ref.current && setRect(getRect(ref.current))
  }

  const observer = useMemo(() => new MutationObserver(updateRect), [ref])

  useEffect(() => {
    if (ref.current) {
      updateRect()
      observer.observe(ref.current, { subtree: true, childList: true, attributes: true })
    }
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return (
    <Container>
      <div ref={ref} className="aaa"></div>
      <div className="bbb"></div>
    </Container>
  )
}

stories.add('drag to resize and observe', () =>
  React.createElement(() => {
    const [rect, setRect] = useState(null)

    return (
      <>
        <div>
          <p>RECT: {JSON.stringify(rect)}</p>
        </div>
        <Component rect={rect} setRect={setRect} />
      </>
    )
  }),
)
