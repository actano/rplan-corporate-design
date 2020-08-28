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
  SortField, SortFieldType, SortBox, SortBoxProps, SortOrder,
} from '../../src/components/sort-box'
import { testIdProp } from '../../src/shared/test-ids'

const delay = t => new Promise(resolve => setTimeout(resolve, t))

interface Task {
  name: string
  startDate: LocalDate
}

interface TestDataType {
  id: string
  task: Task
  responsible: string
}

const testItem1 = {
  id: 'aaa1',
  task: {
    name: 'Revert to last version',
    startDate: LocalDate.parse('2020-07-24'),
  },
  responsible: 'Zenia K. Owen',
}

const testItem2 = {
  id: 'aaa2',
  task: {
    name: 'Do some noise',
    startDate: LocalDate.parse('2020-07-23'),
  },
  responsible: 'Zenia K. Owen',
}

const testItem3 = {
  id: 'aaa3',
  task: {
    name: 'Build project',
    startDate: LocalDate.parse('2020-07-25'),
  },
  responsible: 'Anika I. Emerson',
}

const testItem4 = {
  id: 'aaa4',
  task: {
    name: 'Restore DB dump',
    startDate: LocalDate.parse('2020-07-20'),
  },
  responsible: 'Neville H. Hess',
}

const testList: TestDataType[] = [
  testItem1,
  testItem2,
  testItem3,
  testItem4,
]

const testListSortedByTaskNameAsc: TestDataType[] = [
  testItem3,
  testItem2,
  testItem4,
  testItem1,
]

const testListSortedByTaskStartDateAsc: TestDataType[] = [
  testItem4,
  testItem2,
  testItem1,
  testItem3,
]

const testListSortedByTaskNameDesc: TestDataType[] = [
  testItem1,
  testItem4,
  testItem2,
  testItem3,
]

const testListSortedByTaskStartDateDesc: TestDataType[] = [
  testItem3,
  testItem1,
  testItem2,
  testItem4,
]

const defaultSort: SortField = {
  sortName: 'default',
  fieldType: SortFieldType.DEFAULT,
}

const sortFieldsAsc: SortField[] = [
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

const sortFieldsDesc: SortField[] = [
  defaultSort,
  {
    sortName: 'task name',
    fieldType: SortFieldType.STRING,
    sortFieldPath: ['task', 'name'],
    order: SortOrder.DESC,
  },
  {
    sortName: 'start date',
    fieldType: SortFieldType.LOCAL_DATE,
    sortFieldPath: ['task', 'startDate'],
    order: SortOrder.DESC,
  },
  {
    sortName: 'responsible',
    fieldType: SortFieldType.STRING,
    sortFieldPath: ['responsible'],
    order: SortOrder.DESC,
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

const createComponent = async (setSortedDataSpy, initialSort, sortFields = sortFieldsAsc) =>
  await renderComponent({
    data: testList,
    sortFields,
    defaultSortFieldName: initialSort,
    setSortedData: setSortedDataSpy,
    labelPrefix: 'Sort by',
  })

describe('SortBox component', () => {
  it('default sort - should return unsorted input list on first render', async () => {
    const setSortedDataSpy = sinon.spy()
    const sortFieldName = defaultSort.sortName
    await createComponent(setSortedDataSpy, sortFieldName)

    expect(setSortedDataSpy).to.have.been
      .calledWith({ data: testList, sortBy: sortFieldName })
  })

  context('sort order ASC', async () => {
    it('name sort - should return the input list sorted by name on first render', async () => {
      const setSortedDataSpy = sinon.spy()
      const sortFieldName = 'task name'
      await createComponent(setSortedDataSpy, sortFieldName)

      expect(setSortedDataSpy).to.have.been
        .calledWith({ data: testListSortedByTaskNameAsc, sortBy: sortFieldName })
    })

    it('date sort - should return the input list sorted by task name on first render', async () => {
      const setSortedDataSpy = sinon.spy()
      const sortFieldName = 'start date'
      await createComponent(setSortedDataSpy, sortFieldName)

      expect(setSortedDataSpy).to.have.been
        .calledWith({ data: testListSortedByTaskStartDateAsc, sortBy: sortFieldName })
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
      expect(setSortedDataSpy).to.have.been
        .calledWith({ data: testListSortedByTaskNameAsc, sortBy: 'task name' })
    })
  })

  context('sort order DESC', async () => {
    it('name sort - should return the input list sorted by name on first render', async () => {
      const setSortedDataSpy = sinon.spy()
      const sortFieldName = 'task name'
      await createComponent(setSortedDataSpy, sortFieldName, sortFieldsDesc)

      expect(setSortedDataSpy).to.have.been
        .calledWith({ data: testListSortedByTaskNameDesc, sortBy: sortFieldName })
    })

    it('date sort - should return the input list sorted by task name on first render', async () => {
      const setSortedDataSpy = sinon.spy()
      const sortFieldName = 'start date'
      await createComponent(setSortedDataSpy, sortFieldName, sortFieldsDesc)

      expect(setSortedDataSpy).to.have.been
        .calledWith({ data: testListSortedByTaskStartDateDesc, sortBy: sortFieldName })
    })

    it('change sort - should return the input list sorted by name', async () => {
      const setSortedDataSpy = sinon.spy()
      const component = await createComponent(
        setSortedDataSpy,
        defaultSort.sortName,
        sortFieldsDesc,
      )

      const selectComponent = component.find(testIdProp('sort-box')).first()
      expect(selectComponent).to.exist
      if (selectComponent && selectComponent.props() && selectComponent.props().onChange) {
        selectComponent.props().onChange({ target: { value: 'task name' } })
        await delay(150)
        await settleComponent(component)
      }
      expect(setSortedDataSpy).to.have.been
        .calledWith({ data: testListSortedByTaskNameDesc, sortBy: 'task name' })
    })
  })
})
