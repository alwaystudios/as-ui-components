import { storiesOf } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

const stories = storiesOf('Layouts', module)

const Container = styled.div`
  height: 300px;
  width: 50%;
  position: relative;

  .content {
    overflow-y: scroll;
    height: calc(100% - 60px);
    width: 100%;
    padding-top: 70px;
    border: 1px solid black;
  }

  .text {
    padding: 0 20px;
  }

  header {
    z-index: 1;
    background: rgba(242, 57, 90, 0.9);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    color: white;
    font-size: 2rem;
    font-family: Helvetica;
    position: absolute;
    top: 0;
    width: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  }
`

stories.add('sticky header', () => (
  <Container>
    <header>Sticky header</header>
    <div className="content">
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, commodi at ab eligendi
          facilis odit maxime consectetur pariatur nihil sit voluptates iure vero excepturi
          aspernatur reiciendis natus voluptatem fugit praesentium?
        </p>
      </div>
    </div>
  </Container>
))
