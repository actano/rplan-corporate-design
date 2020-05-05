import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import { settleComponent } from '@rplan/testhelpers-webclient'

import { testIdProp } from '../../src/shared/test-ids'
import { testIds } from '../../src/components/test-ids'
import { FilterBox, FilterBoxProps } from '../../src/components/filter-box'
import { TestProviders } from '../../src/providers'

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

const renderComponent = async (props: FilterBoxProps<TestItemType>) => {
  const component = mount(
    <TestProviders>
      <FilterBox<TestItemType> {...props} />
    </TestProviders>,
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
})
