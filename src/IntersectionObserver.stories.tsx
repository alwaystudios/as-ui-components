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

  const callback1 = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
    })
  }

  const callback2 = (entries: IntersectionObserverEntry[]) => {
    const lastCard = entries[0]
    if (!lastCard.isIntersecting) return
    loadCards()
    observer2.unobserve(lastCard.target)
    document.querySelectorAll('.card:last-of-type').forEach((div) => observer2.observe(div))
  }

  const observer1 = new IntersectionObserver(callback1, { threshold: 0.5 })
  const observer2 = new IntersectionObserver(callback2, { rootMargin: '100px' })

  useEffect(() => {
    document.querySelectorAll('.card').forEach((div) => observer1.observe(div))
    document.querySelectorAll('.card:last-of-type').forEach((div) => observer2.observe(div))

    return () => {
      observer1.disconnect()
      observer2.disconnect()
    }
  }, [ref])

  const loadCards = () => {
    // eslint-disable-next-line functional/no-let
    for (let i = 0; i < 10; i++) {
      const card = document.createElement('div')
      // eslint-disable-next-line functional/immutable-data
      card.textContent = 'new card'
      card.classList.add('card')
      observer1.observe(card)
      ref.current?.append(card)
    }
  }

  return (
    <Container>
      <div className="container" ref={ref}>
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
