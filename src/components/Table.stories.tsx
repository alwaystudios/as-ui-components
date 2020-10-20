import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { Checkbox } from './Checkbox'
import { TableCell, TableHeadCell, TableHeader } from './Table'

const stories = storiesOf('Table', module)

const tableData = [
  {
    recipe: 'Onion soup',
    chef: 'Gordon Ramsey',
    date: '11/10/2020',
  },
  {
    recipe: 'Cheese on Toast',
    chef: 'Jamie Oliver',
    date: '11/10/2020',
  },
  {
    recipe: 'Baked beans on toast',
    chef: 'Heston Blumenthal',
    date: '11/10/2020',
  },
  {
    recipe: 'Steak and chips',
    chef: 'Simon French',
    date: '11/10/2020',
  },
  {
    recipe: 'Cheese burger',
    chef: 'Gary Alway',
    date: '11/10/2020',
  },
  {
    recipe: 'Salmon risotto',
    chef: 'Veronika Ptas',
    date: '11/10/2020',
  },
  {
    recipe: 'a really really really really really really really really really long recipe name',
    chef: 'someone',
    date: '11/10/2020',
  },
]

stories.add('table components - WIP', () =>
  React.createElement(() => {
    const [tableCellWrap, setTableCellWrap] = useState(true)

    return (
      <div style={{ width: '50%', fontFamily: 'sans-serif' }}>
        <Checkbox
          label="Table cells can wrap"
          onChange={setTableCellWrap}
          checked={tableCellWrap}
        />
        <table>
          <thead>
            <TableHeader title="The table header..." />
            <tr>
              <TableHeadCell text="Recipe" />
              <TableHeadCell text="Chef" />
              <TableHeadCell text="Date" />
            </tr>
          </thead>
          <tbody>
            {tableData.map(({ recipe, chef, date }) => (
              <tr>
                <TableCell canWrap={tableCellWrap}>{recipe}</TableCell>
                <TableCell canWrap={tableCellWrap}>{chef}</TableCell>
                <TableCell canWrap={tableCellWrap}>{date}</TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }),
)
