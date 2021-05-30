import { storiesOf } from '@storybook/react'
import React from 'react'
import { ImageCarousel } from './ImageCarousel'

const stories = storiesOf('Image carousel', module)

const data = [
  {
    caption: 'Game casserole',
    img:
      'https://recipe-bible-content.s3-eu-west-1.amazonaws.com/recipes/game-casserole/Game%20casserole.jpg',
    onClick: () => alert('Game casserole'),
  },
  {
    caption: 'Lentil ragu parpadelle',
    img:
      'https://recipe-bible-content.s3-eu-west-1.amazonaws.com/recipes/lentil-ragu-parpadelle/Lentil%20ragu%20parpadelle.jpg',
  },
  {
    caption: 'Loaded lentil salad with baked mango chutney feta',
    img:
      'https://recipe-bible-content.s3-eu-west-1.amazonaws.com/recipes/loaded-lentil-salad-with-baked-mango-chutney-feta/Lentil%20salad.JPG',
  },
  {
    caption: 'Roasted butternut squash soup',
    img:
      'https://recipe-bible-content.s3-eu-west-1.amazonaws.com/recipes/roasted-butternut-squash-soup/butternut%20squash%20soup.jpg',
  },
]

stories.add('flick through the images', () =>
  React.createElement(() => <ImageCarousel data={data} />),
)
