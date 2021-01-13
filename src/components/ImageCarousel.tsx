import React, { FunctionComponent, useState } from 'react'
import classnames from 'classnames'
import './ImageCarousel.css'
import styled, { css } from 'styled-components'

type Data = {
  caption: string
  img: string
  onClick?: () => void
}

type Props = {
  startIndex?: number
  width?: string
  height?: string
  data: Data[]
}

const Img = styled.img<{ width: string; maxHeight: string }>`
  ${({ width, maxHeight }) => css`
    width: ${width};
    max-height: ${maxHeight};
  `}
`

export const ImageCarousel: FunctionComponent<Props> = ({
  startIndex = 0,
  data,
  width = '400px',
  height = '300px',
}) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex)
  const totalItems = data.length

  const changeIndex = (newIndex: number) => {
    if (newIndex > totalItems - 1) {
      setCurrentIndex(0)
      return
    }

    if (newIndex < 0) {
      setCurrentIndex(totalItems - 1)
      return
    }

    setCurrentIndex(newIndex)
  }

  return (
    <section className="container">
      <div className="slides" style={{ height: `${height}` }}>
        {data.map(({ caption, img, onClick }, index) => (
          <div className={classnames('slide', { active: index === currentIndex })} key={caption}>
            <Img
              className={classnames('slide__img', { clickable: Boolean(onClick) })}
              src={img}
              width={width}
              maxHeight={height}
              onClick={() => {
                onClick && onClick()
              }}
            />
            <div className="caption">
              <div className="caption__text">{caption}</div>
            </div>
          </div>
        ))}

        <a className="prev" onClick={() => changeIndex(currentIndex - 1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => changeIndex(currentIndex + 1)}>
          &#10095;
        </a>
      </div>
      <div className="controls">
        {[...Array(totalItems)].map((_, index) => (
          <span
            key={index}
            className={classnames('dot', { active: index === currentIndex })}
            onClick={() => changeIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}
