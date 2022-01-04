import { storiesOf } from '@storybook/react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import styled from 'styled-components'

const stories = storiesOf('Intersection observer', module)

const Container = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 25rem;
    width: fit-content;
    padding: 1rem;
  }

  .card {
    background: white;
    border: 1px solid black;
    border-radius: 0.25rem;
    transform: translateX(100px);
    opacity: 0;
    transition: 500ms;
    padding: 2rem;
  }

  .card.show {
    transform: translateX(0);
    opacity: 1;
  }
`

const Component: FunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null)

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
    })
  }

  const observer = new IntersectionObserver(callback, { threshold: 0.5 })

  useEffect(() => {
    document.querySelectorAll('.card').forEach((div) => observer.observe(div))

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return (
    <Container>
      <div className="container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="card">
            this is card {i}
          </div>
        ))}
      </div>
    </Container>
  )
}

stories.add('intersection observer', () => React.createElement(() => <Component />))
