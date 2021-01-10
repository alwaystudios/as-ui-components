import { storiesOf } from '@storybook/react'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const stories = storiesOf('CSS only Pacman', module)

const mouthTop = keyframes`
    50% {
        transform: rotate(44deg)
    }
`

const mouthBottom = keyframes`
    50% {
        transform: rotate(-44deg)
    }
`

const moveForward = keyframes`
    0% {
        left: -20%;
    }
    100% {
        left: 100%;
    }
`

const blink = keyframes`
    50% {
        background: hotpink;
    }
`

const leftEye = keyframes`
    0%, 100% {
        left: 6px;
    }
    50% {
        left: 10px;
    }
`

const rightEye = keyframes`
    0%, 100% {
        left: 29px;
    }
    50% {
        left: 34px;
    }
`

const Container = styled.div`
  .path {
    position: relative;
    width: 50%;
    height: 100px;
    background: #333;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .path::after {
    content: '';
    position: absolute;
    display: block;
    border-top: 12px dotted white;
    width: 90%;
    top: calc(50% - 6px);
    left: 5%;
  }

  .pacman {
    position: absolute;
    z-index: 99;
    top: 50%;
    left: -20%;
    animation: ${moveForward} 5s linear infinite;
    animation-delay: 0.8s;
  }

  .pacman::before,
  .pacman::after {
    position: absolute;
    content: '';
    display: block;
    height: 0;
    width: 0;
    border: solid 30px yellow;
    margin-top: -30px;
    border-radius: 100%;
    border-right-color: transparent;
    border-bottom-color: transparent;
    animation: ${mouthTop} 0.7s ease infinite;
  }

  .pacman::after {
    border-color: yellow;
    border-right-color: transparent;
    border-top-color: transparent;
    animation: ${mouthBottom} 0.7s ease infinite;
  }

  .ghost {
    position: absolute;
    z-index: 99;
    top: 50%;
    left: 20%;
    height: 70px;
    width: 60px;
    margin-top: -35px;
    background: red;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
    animation: ${moveForward} 5s linear infinite, ${blink} 0.5s ease infinite;
  }

  .ghost::before,
  .ghost::after {
    content: '';
    position: absolute;
    background: white;
    height: 25px;
    width: 20px;
    border-radius: 100%;
    top: 15px;
    left: 5px;
  }

  .ghost::after {
    left: 29px;
  }

  .eyes::before,
  .eyes::after {
    content: '';
    position: absolute;
    background: blue;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    top: 25px;
    left: 6px;
    z-index: 99;
    animation: ${leftEye} 0.7s linear infinite;
  }

  .eyes::after {
    left: 32px;
    animation: ${rightEye} 0.7s linear infinite;
  }

  .skirt,
  .skirt::before,
  .skirt::after {
    position: absolute;
    height: 0;
    width: 0;
    border: solid 10px #333;
    border-top-color: transparent;
    bottom: -10px;
  }

  .skirt::before {
    content: '';
    left: 10px;
  }

  .skirt::after {
    content: '';
    left: 30px;
  }
`

stories.add('chomp! chomp!', () => (
  <Container>
    <div className="path">
      <div className="pacman" />
      <div className="ghost">
        <div className="eyes" />
        <div className="skirt" />
      </div>
    </div>
  </Container>
))
