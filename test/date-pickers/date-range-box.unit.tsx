import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import { settleComponent } from '@rplan/testhelpers-webclient'

import { DatePicker, DatePickerButton } from '../../src/date-pickers'

import { TestProviders } from '../providers'
import { DateRangeBox, DateRangeBoxContainer, DateRangeBoxProps } from '../../src/date-pickers/date-range-box'

const defaultProps: DateRangeBoxProps = {
  label: 'Select a time interval',
  start: '2021-05-03',
  end: '2021-05-07',
  onAcceptStart: () => {},
  onAcceptEnd: () => {},
  testIdPropForStartDate: { 'data-test-id': 'start-date-id' },
  testIdPropForEndDate: { 'data-test-id': 'end-date-id' },
}

const renderComponent = async (props: DateRangeBoxProps) => {
  const component = mount(
    <TestProviders>
      <DateRangeBox {...props} />
    </TestProviders>,
  )
  await settleComponent(component)
  return component
}

describe('DateRangeBox', async () => {
  it('should render the component', async () => {
    const component = await renderComponent(defaultProps)

    expect(component).to.be.present()
    expect(component).to.have.exactly(1).descendants(DateRangeBoxContainer)
    expect(component).to.have.exactly(2).descendants(DatePickerButton)
  })
  it('should render the correct label', async () => {
    const component = await renderComponent(defaultProps)

    const container = component.find(DateRangeBoxContainer)
    expect(container).to.contain.text(defaultProps.label)
  })
  it('should render the dates with english(default) format', async () => {
    const component = await renderComponent(defaultProps)

    const start = component.find(defaultProps.testIdPropForStartDate!).first()
    expect(start).to.have.text('May 3 2021')
    const end = component.find(defaultProps.testIdPropForEndDate!).first()
    expect(end).to.have.text('May 7 2021')
  })
  it('should render the dates with german format', async () => {
    const component = await renderComponent({
      ...defaultProps,
      language: 'de',
    })

    const start = component.find(defaultProps.testIdPropForStartDate!).first()
    expect(start).to.have.text('3. Mai 2021')
    const end = component.find(defaultProps.testIdPropForEndDate!).first()
    expect(end).to.have.text('7. Mai 2021')
  })
  context('if date is chosen', () => {
    it('should call `onAcceptStart` callback', async () => {
      const saveStub = sinon.stub()

      const component = await renderComponent({
        ...defaultProps,
        onAcceptStart: saveStub,
      })

      const start = component.find(defaultProps.testIdPropForStartDate!).first()

      const selectedDate = new Date(2021, 5, 10, 0, 0, 0)
      const datePicker = start.find(DatePicker)
      datePicker.props().onChange(selectedDate)

      expect(saveStub).to.have.been.calledWith(selectedDate)
    })
    it('should call `onAcceptEnd` callback', async () => {
      const saveStub = sinon.stub()

      const component = await renderComponent({
        ...defaultProps,
        onAcceptEnd: saveStub,
      })

      const end = component.find(defaultProps.testIdPropForEndDate!).first()

      const selectedDate = new Date(2021, 5, 10, 0, 0, 0)
      const datePicker = end.find(DatePicker)
      datePicker.props().onChange(selectedDate)

      expect(saveStub).to.have.been.calledWith(selectedDate)
    })
  })
  context('if disabled is true', () => {
    it('should render the dates with english(default) format', async () => {
      const component = await renderComponent({
        ...defaultProps,
        disabled: true,
      })

      const start = component.find(defaultProps.testIdPropForStartDate!).first()
      expect(start).to.have.text('May 3 2021')
      const end = component.find(defaultProps.testIdPropForEndDate!).first()
      expect(end).to.have.text('May 7 2021')
    })
    it('should render the dates with german format', async () => {
      const component = await renderComponent({
        ...defaultProps,
        language: 'de',
        disabled: true,
      })

      const start = component.find(defaultProps.testIdPropForStartDate!).first()
      expect(start).to.have.text('3. Mai 2021')
      const end = component.find(defaultProps.testIdPropForEndDate!).first()
      expect(end).to.have.text('7. Mai 2021')
    })
    it('should not render a DatePicker for start date', async () => {
      const component = await renderComponent({
        ...defaultProps,
        disabled: true,
      })

      const start = component.find(defaultProps.testIdPropForStartDate!)
      const datePicker = start.find(DatePicker)

      expect(datePicker).not.to.exist
    })
    it('should not render a DatePicker for end date', async () => {
      const component = await renderComponent({
        ...defaultProps,
        disabled: true,
      })

      const end = component.find(defaultProps.testIdPropForEndDate!)
      const datePicker = end.find(DatePicker)

      expect(datePicker).not.to.exist
    })
  })
})
