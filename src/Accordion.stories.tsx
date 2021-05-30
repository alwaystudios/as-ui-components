import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Accordion } from './Accordion'
import { AccordionItem } from './AccordionItem'

const stories = storiesOf('Accordion', module)

const Container = styled.div`
  height: 400px;
  width: 50%;
`

stories.add('CSS accordion with state', () =>
  React.createElement(() => {
    const [selected, setSelected] = useState('')

    return (
      <Container>
        <Accordion>
          <AccordionItem
            setSelected={setSelected}
            title="Accordion 1"
            selected={selected}
            height="50px"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur deserunt quis
              quisquam exercitationem repellat est. Aliquam quos at vero, doloribus iure quo
              corporis, magni rem aspernatur minus in tenetur consectetur?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur deserunt quis
              quisquam exercitationem repellat est. Aliquam quos at vero, doloribus iure quo
              corporis, magni rem aspernatur minus in tenetur consectetur?
            </p>
          </AccordionItem>
          <AccordionItem setSelected={setSelected} title="Accordion 2" selected={selected}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur deserunt quis
              quisquam exercitationem repellat est. Aliquam quos at vero, doloribus iure quo
              corporis, magni rem aspernatur minus in tenetur consectetur?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur deserunt quis
              quisquam exercitationem repellat est. Aliquam quos at vero, doloribus iure quo
              corporis, magni rem aspernatur minus in tenetur consectetur?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur deserunt quis
              quisquam exercitationem repellat est. Aliquam quos at vero, doloribus iure quo
              corporis, magni rem aspernatur minus in tenetur consectetur?
            </p>
          </AccordionItem>
          <AccordionItem setSelected={setSelected} title="Accordion 3" selected={selected} />
        </Accordion>
      </Container>
    )
  }),
)
