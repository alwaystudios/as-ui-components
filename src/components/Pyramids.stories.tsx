import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

const stories = storiesOf('Animated pyramid', module)

const Container = styled.div`
  position: relative;
  width: 50%;

  .triangle {
    height: 320px;
    clip-path: polygon(50% 0, 20% 100%, 80% 100%);
  }

  .triangle div {
    position: absolute;
    top: 0;
    background: red;
    width: 100%;
    height: 100px;
    margin: 0 auto;
    color: red;
    line-height: 100px;
    text-align: center;
    transition: all ease 0.6s;
  }

  .top {
    z-index: 2;
  }

  .middle {
    z-index: 1;
  }

  .triangle:hover div {
    color: white;
  }

  .triangle:hover .middle {
    top: 110px;
    background: green;
  }

  .triangle:hover .bottom {
    top: 220px;
    background: blue;
  }
`

stories.add('animates on hover', () => (
  <Container>
    <div className="triangle">
      <div className="top">top</div>
      <div className="middle">middle</div>
      <div className="bottom">bottom</div>
    </div>
  </Container>
))
