import React, { useState } from 'react'
import { TableCell } from '@material-ui/core'

import {
  ChangeOnAcceptDatePicker, CommonSelect, TableList, UserAvatar,
} from '../../../../src'
import { TableListRow } from '../../../../src/components/table/table-list-row'

const columnDefinitions = [
  { name: 'Task' },
  { name: 'Status', width: '25%' },
  { name: 'Responsible', width: '12.5%' },
  { name: 'Due date', width: '12.5%' },
]

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

  const onChange = val => setValue(val)

  return <CommonSelect value={value} onChange={onChange} {...props} />
}

const ExampleRow = ({ taskName }) => (
  <TableListRow>
    <TableCell>{taskName}</TableCell>
    <TableCell>
      <SelectStateWrapper options={options} disabled={false} />
    </TableCell>
    <TableCell>
      <UserAvatar size="small" firstName="Example" lastName="Smith" email="marie.omann@actano.de" />
    </TableCell>
    <TableCell>
      <ChangeOnAcceptDatePicker onSelectDate={() => {}} />
    </TableCell>
  </TableListRow>
)

const ExampleTable = args => (
  <TableList columnDefinitions={columnDefinitions} {...args}>
    <ExampleRow taskName="Task 1" />
    <ExampleRow taskName="Task 2" />
    <ExampleRow taskName="Task 3" />
    <ExampleRow taskName="Task 4" />
  </TableList>
)

export { ExampleTable }
