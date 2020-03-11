import React from 'react'
import { Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import {
  TableList,
} from '../../../src'

import { Providers } from '../providers'
import { TableListRow } from '../../../src/components/table/table-list-row'

const columnDefinitions = [
  { name: 'column1', width: '50%' },
  { name: 'column2', width: '25%' },
  { name: 'column3', width: '12.5%' },
  { name: 'column4', width: '12.5%' },
]
const values = [
  <div>Value1</div>,
  <div>Value2</div>,
  <div>Value3</div>,
  <div>Value4</div>,
]
const rows = [
  <TableListRow cells={values} />,
  <TableListRow cells={values} />,
  <TableListRow cells={values} />,
  <TableListRow cells={values} />,
]
export const tableStories = () => {
  storiesOf('Tables', module)
    .add('Tables', () =>
      (
        <Providers>
          <div>
            <Typography variant="h2" align="left">
              Table with headers
            </Typography>
            <div style={{
              marginTop: '20px',
            }}
            >
              <TableList rows={rows} columnDefinitions={columnDefinitions} showHeaders />
            </div>
            <Typography variant="h2" align="left">
            Table without headers
            </Typography>
            <div style={{
              marginTop: '20px',
            }}
            >
              <TableList rows={rows} columnDefinitions={columnDefinitions} />
            </div>
          </div>
        </Providers>
      ))
}
