import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { settleComponent } from '@rplan/testhelpers-webclient'

import { FilterBox, FilterBoxProps, FilterRule } from '../../src/components/filter-box'
import { testIdProp } from '../../src/shared/test-ids'
import { testIds } from '../../src/components/test-ids'
import { themeConfig } from '../../src/theme/theme-config'

const delay = t => new Promise(resolve => setTimeout(resolve, t))

interface TestItemType {
  foo: string,
  bar: string,
}

const testList: TestItemType[] = [
  { foo: 'foo-1', bar: 'bar-1' },
  { foo: 'foo-2', bar: 'bar-findme-2' },
  { foo: 'findme-foo-3', bar: 'bar-3' },
  { foo: 'foo-4', bar: 'findme-bar-4' },
  { foo: 'foo-5', bar: 'bar-5-findme' },
]

const theme = createMuiTheme(themeConfig)

const renderComponent = async (props: FilterBoxProps<TestItemType>) => {
  const component = mount(
    <ThemeProvider theme={theme}>
      <FilterBox<TestItemType> {...props} />
    </ThemeProvider>,
  )
  await settleComponent(component)
  return component
}

describe('FilterBox component', () => {
  it('should return complete list initially (= on empty searchString)', async () => {
    const setFilteredItemsSpy = sinon.spy()
    await renderComponent({
      filterBy: ['bar'],
      items: testList,
      setFilteredItems: setFilteredItemsSpy,
    })

    expect(setFilteredItemsSpy).to.have.been.calledWith(testList)
  })

  it('should filter the item list for one key', async () => {
    const setFilteredItemsSpy = sinon.spy()
    const component = await renderComponent({
      filterBy: ['bar'],
      items: testList,
      setFilteredItems: setFilteredItemsSpy,
    })

    const filterBox = component.find(testIdProp(testIds.filterBox)).first()

    expect(filterBox).to.have.prop('onSave')
    filterBox.props().onSave('findme')
    await delay(150)
    await settleComponent(component)

    expect(setFilteredItemsSpy).to.have.been.calledWith([
      { foo: 'foo-2', bar: 'bar-findme-2' },
      { foo: 'foo-4', bar: 'findme-bar-4' },
      { foo: 'foo-5', bar: 'bar-5-findme' },
    ])
  })

  it('should filter the item list for different keys', async () => {
    const setFilteredItemsSpy = sinon.spy()
    const component = await renderComponent({
      filterBy: ['foo', 'bar'],
      items: testList,
      setFilteredItems: setFilteredItemsSpy,
    })

    const filterBox = component.find(testIdProp(testIds.filterBox)).first()

    expect(filterBox).to.have.prop('onSave')
    filterBox.props().onSave('findme')
    await delay(150)
    await settleComponent(component)

    expect(setFilteredItemsSpy).to.have.been.calledWith([
      { foo: 'foo-2', bar: 'bar-findme-2' },
      { foo: 'findme-foo-3', bar: 'bar-3' },
      { foo: 'foo-4', bar: 'findme-bar-4' },
      { foo: 'foo-5', bar: 'bar-5-findme' },
    ])
  })

  it('should filter the item list for andFilter rule', async () => {
    const setFilteredItemsSpy = sinon.spy()
    const component = await renderComponent({
      filterBy: ['foo', 'bar'],
      items: testList,
      setFilteredItems: setFilteredItemsSpy,
      rule: FilterRule.andFilter,
    })

    const filterBox = component.find(testIdProp(testIds.filterBox)).first()

    expect(filterBox).to.have.prop('onSave')
    filterBox.props().onSave('foo bar-3')
    await delay(150)
    await settleComponent(component)

    expect(setFilteredItemsSpy).to.have.been.calledWith([
      { foo: 'findme-foo-3', bar: 'bar-3' },
    ])
  })
})
