import React from 'react'
import { storiesOf } from '@storybook/react'
import { ExpandingPanel } from './ExpandingPanel'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  align-items: flex-start;
`

const stories = storiesOf('ExpandingPanel', module)

const text =
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

stories.add('expanding panel', () => (
  <Container>
    <ExpandingPanel title="Article 1" text={text} />
    <ExpandingPanel title="Article 2" text={text} />
    <ExpandingPanel title="Article 3" text={text} />
  </Container>
))
