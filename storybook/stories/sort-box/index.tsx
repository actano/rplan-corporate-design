import React, { useState } from 'react'

import {
  Table, TableBody, TableCell, TableHead, TableRow, Typography,
} from '@material-ui/core'
import { LocalDate } from '@js-joda/core'
import { storiesOf } from '@storybook/react'
import { Providers } from '../providers'
import { SortBox, SortFieldType, SortField } from '../../../src'

interface Task {
  name: string,
  startDate: LocalDate,
}

interface TestDataType {
  id: string,
  task: Task,
  responsible: string,
}

const testList: TestDataType[] = [
  {
    id: 'aaa1',
    task: {
      name: 'Revert to last version',
      startDate: LocalDate.parse('2020-07-24'),
    },
    responsible: 'Zenia K. Owen',
  },
  {
    id: 'aaa2',
    task: {
      name: 'Do some noise',
      startDate: LocalDate.parse('2020-07-24'),
    },
    responsible: 'Zenia K. Owen',
  },
  {
    id: 'aaa3',
    task: {
      name: 'Build project',
      startDate: LocalDate.parse('2020-07-25'),
    },
    responsible: 'Anika I. Emerson',
  },
  {
    id: 'aaa4',
    task: {
      name: 'Restore DB dump',
      startDate: LocalDate.parse('2020-07-20'),
    },
    responsible: 'Neville H. Hess',
  },
]

const defaultSort: SortField = {
  sortName: 'default',
  fieldType: SortFieldType.DEFAULT,
}

const sortFields: SortField[] = [
  defaultSort,
  {
    sortName: 'task name',
    fieldType: SortFieldType.STRING,
    sortFieldPath: ['task', 'name'],
  },
  {
    sortName: 'start date',
    fieldType: SortFieldType.LOCAL_DATE,
    sortFieldPath: ['task', 'startDate'],
  },
  {
    sortName: 'responsible',
    fieldType: SortFieldType.STRING,
    sortFieldPath: ['responsible'],
  },
]


const DemoSortBoxWithResultList = () => {
  const [sortedItems, setSortedItems] = useState([] as TestDataType[])
  return (
    <>
      <SortBox<TestDataType>
        data={testList}
        sortFields={sortFields}
        defaultSortFieldName={defaultSort.sortName}
        setSortedData={setSortedItems}
        labelPrefix="Sort on"
      />
      <Typography variant="h3">
        Filtered list (clear search term for full list)
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Start date</TableCell>
            <TableCell>Responsible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedItems.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.task.name}</TableCell>
              <TableCell>{row.task.startDate.toString()}</TableCell>
              <TableCell>{row.responsible}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}


const sortBoxStories = () => {
  storiesOf('Sort Box', module)
    .add('Sort Box', () => (
      <Providers>
        <Typography variant="h2">
            Sort Box
        </Typography>
        <Typography variant="body1">
            This component sorts a given list of objects
            with respect to the given search term in specified keys.
            It returns the filtered list via a callback.
        </Typography>
        <DemoSortBoxWithResultList />
      </Providers>
    ))
}

export { sortBoxStories }
