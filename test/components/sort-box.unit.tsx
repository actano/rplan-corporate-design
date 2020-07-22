import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { LocalDate } from '@js-joda/core'

import { settleComponent } from '@rplan/testhelpers-webclient'

import { themeConfig } from '../../src/theme/theme-config'
import {
  SortField, SortFieldType, SortBox, SortBoxProps,
} from '../../src/components/sort-box'
import { testIdProp } from '../../src/shared/test-ids'

const delay = t => new Promise(resolve => setTimeout(resolve, t))

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
      startDate: LocalDate.parse('2020-07-23'),
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

const testListSortedByTaskName: TestDataType[] = [
  {
    id: 'aaa3',
    task: {
      name: 'Build project',
      startDate: LocalDate.parse('2020-07-25'),
    },
    responsible: 'Anika I. Emerson',
  },
  {
    id: 'aaa2',
    task: {
      name: 'Do some noise',
      startDate: LocalDate.parse('2020-07-23'),
    },
    responsible: 'Zenia K. Owen',
  },
  {
    id: 'aaa4',
    task: {
      name: 'Restore DB dump',
      startDate: LocalDate.parse('2020-07-20'),
    },
    responsible: 'Neville H. Hess',
  },
  {
    id: 'aaa1',
    task: {
      name: 'Revert to last version',
      startDate: LocalDate.parse('2020-07-24'),
    },
    responsible: 'Zenia K. Owen',
  },
]

const testListSortedByTaskStartDate: TestDataType[] = [
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
      startDate: LocalDate.parse('2020-07-23'),
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

const theme = createMuiTheme(themeConfig)

const renderComponent = async (props: SortBoxProps<TestDataType>) => {
  const component = mount(
    <ThemeProvider theme={theme}>
      <SortBox<TestDataType> {...props} />
    </ThemeProvider>,
  )
  await settleComponent(component)
  return component
}

const createComponent = async (setSortedDataSpy, initialSort) => await renderComponent({
  data: testList,
  sortFields,
  defaultSortFieldName: initialSort,
  setSortedData: setSortedDataSpy,
  labelPrefix: 'Sort by',
})

describe('SortBox component', () => {
  it('default sort - should return unsorted input list on first render', async () => {
    const setSortedDataSpy = sinon.spy()
    await createComponent(setSortedDataSpy, defaultSort.sortName)

    expect(setSortedDataSpy).to.have.been.calledWith(testList)
  })

  it('name sort - should return the input list sorted by name on first render', async () => {
    const setSortedDataSpy = sinon.spy()
    await createComponent(setSortedDataSpy, 'task name')

    expect(setSortedDataSpy).to.have.been.calledWith(testListSortedByTaskName)
  })

  it('date sort - should return the input list sorted by task name on first render', async () => {
    const setSortedDataSpy = sinon.spy()
    await createComponent(setSortedDataSpy, 'start date')

    expect(setSortedDataSpy).to.have.been.calledWith(testListSortedByTaskStartDate)
  })

  it('change sort - should return the input list sorted by name', async () => {
    const setSortedDataSpy = sinon.spy()
    const component = await createComponent(setSortedDataSpy, defaultSort.sortName)

    const selectComponent = component.find(testIdProp('sort-box')).first()
    expect(selectComponent).to.exist
    if (selectComponent && selectComponent.props() && selectComponent.props().onChange) {
      selectComponent.props().onChange({ target: { value: 'task name' } })
      await delay(150)
      await settleComponent(component)
    }
    expect(setSortedDataSpy).to.have.been.calledWith(testListSortedByTaskName)
  })
})
