import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

const stories = storiesOf('broken links', module)

const UnbreakableImg = styled.img`
  position: relative;
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;

  ::after {
    display: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 200px;
    padding: 10px;
    border: 1px dotted #888;
    background-color: #f0f0f0;
    content: attr(alt) ' not found';
    z-index: 1;
  }
`

stories.add('styled broken link', () => {
  return (
    <UnbreakableImg
      src={text('src', 'https://recipe-bible-content.s3-eu-west-1.amazonaws.com/assets/logo.png')}
      alt={text('alt', 'broken image alt text')}
    />
  )
})
