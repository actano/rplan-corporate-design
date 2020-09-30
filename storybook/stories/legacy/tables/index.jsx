import React, { useState } from 'react'
import { TableCell, Typography } from '@material-ui/core'
import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import {
  ChangeOnAcceptDatePicker,
  CommonSelect,
  TableList, UserAvatar,
} from '../../../../src'

import { Providers } from '../../providers'
import { TableListRow } from '../../../../src/components/table/table-list-row'

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

// eslint-disable-next-line react/prop-types
const ExampleRow = ({ taskName }) => (
  <TableListRow>
    <TableCell>{taskName}</TableCell>
    <TableCell>
      <SelectStateWrapper
        options={options}
        disabled={false}
      />
    </TableCell>
    <TableCell>
      <UserAvatar
        size="small"
        firstName="Example"
        lastName="Smith"
        email="marie.omann@actano.de"
      />
    </TableCell>
    <TableCell>
      <ChangeOnAcceptDatePicker
        {...onSaveHandler}
      />
    </TableCell>
  </TableListRow>
)

export const tableStories = () => {
  storiesOf('Tables', module)
    .add('Tables', () => {
      const showHeaders = boolean('with table header', true)
      return (
        <Providers>
          <div>
            <Typography variant="h2" align="left">
              Table
            </Typography>
            <TableList columnDefinitions={columnDefinitions} showHeaders={showHeaders}>
              <ExampleRow taskName="Task 1" />
              <ExampleRow taskName="Task 2" />
              <ExampleRow taskName="Task 3" />
              <ExampleRow taskName="Task 4" />
            </TableList>
          </div>
        </Providers>
      )
    })
}
