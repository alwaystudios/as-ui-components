import { storiesOf } from '@storybook/react'
import React, { FunctionComponent, useState, useRef, useEffect, useMemo } from 'react'
import styled from 'styled-components'

const stories = storiesOf('Resize observer', module)

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

  .dragging {
    background-color: pink;
  }
`

type Props = {
  setRect: (data: any) => void
}

const Component: FunctionComponent<Props> = ({ setRect }) => {
  const ref = useRef<HTMLDivElement>(null)

  const getRect = (element: HTMLDivElement) => element.getBoundingClientRect()
  const updateRect = (entries: ResizeObserverEntry[]) => {
    if (!ref.current) return

    const div = entries[0]
    const isSmall = div.contentRect.width < 150
    // eslint-disable-next-line functional/immutable-data
    ref.current.style.backgroundColor = isSmall ? 'blue' : 'red'
    setRect(getRect(ref.current))
  }

  const [dragStart, setDragStart] = useState<[number?, number?]>([undefined, undefined])
  const [dragEnd, setDragEnd] = useState<[number?, number?]>([undefined, undefined])

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragStart([event.clientX, event.clientY])
    event.currentTarget.classList.toggle('dragging')
  }

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setDragEnd([event.clientX, event.clientY])
    event.currentTarget.classList.toggle('dragging')
  }

  const observer = useMemo(() => new ResizeObserver(updateRect), [ref])

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return (
    <Container>
      <p>dragStart: {JSON.stringify(dragStart)}</p>
      <p>dragEnd: {JSON.stringify(dragEnd)}</p>
      <div ref={ref} className="aaa" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}></div>
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
        <Component setRect={setRect} />
      </>
    )
  }),
)
