import React, { useState } from 'react'
import { TableCell, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'
import {
  ChangeOnAcceptDatePicker,
  CommonSelect,
  TableList, UserAvatar,
} from '../../../src'

import { Providers } from '../providers'
import { TableListRow } from '../../../src/components/table/table-list-row'

const columnDefinitions = [
  { name: 'Task' },
  { name: 'Status', width: '25%' },
  { name: 'Responsible', width: '12.5%' },
  { name: 'Due date', width: '12.5%' },
]

const onSaveHandler = actions('onSelectDate')

const options = [
  {
    id: 'planned',
    value: 'Planned',
  },
  {
    id: 'inProgress',
    value: 'In Progress',
  },
  {
    id: 'done',
    value: 'Done',
  },
]

const SelectStateWrapper = (props) => {
  const [value, setValue] = useState(options[0].id)

  const onChange = val =>
    setValue(val)

  return (
    <CommonSelect
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

const values = taskName => ([
  <TableCell>{taskName}</TableCell>,
  <TableCell>
    <SelectStateWrapper
      options={options}
      disabled={false}
    />
  </TableCell>,
  <TableCell>
    <UserAvatar
      size="small"
      firstName="Example"
      lastName="Smith"
      email="marie.omann@actano.de"
    />
  </TableCell>,
  <TableCell>
    <ChangeOnAcceptDatePicker
      {...onSaveHandler}
    />
  </TableCell>,
])

const rows = [
  <TableListRow>{values('Task 1')}</TableListRow>,
  <TableListRow>{values('Task 2')}</TableListRow>,
  <TableListRow>{values('Task 3')}</TableListRow>,
  <TableListRow>{values('Task 4')}</TableListRow>,
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
              <TableList columnDefinitions={columnDefinitions} showHeaders>
                {rows}
              </TableList>
            </div>
            <Typography variant="h2" align="left">
            Table without headers
            </Typography>
            <div style={{
              marginTop: '20px',
            }}
            >
              <TableList columnDefinitions={columnDefinitions}>
                {rows}
              </TableList>
            </div>
          </div>
        </Providers>
      ))
}
