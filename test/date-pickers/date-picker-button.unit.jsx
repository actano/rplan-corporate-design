import { DatePicker } from '@material-ui/pickers'
import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import { DatePickerButton } from '../../src/date-pickers'

import { TestProviders } from '../providers'

async function immediate() {
  await new Promise((resolve) => {
    setImmediate(resolve)
  })
}

async function settleComponent(component) {
  await immediate()
  component.update()
}

// this is just a dummy component
// eslint-disable-next-line react/prop-types
const DummyComponent = ({ onClick }) => <button type="button" onClick={onClick} />

describe('DatePickerButton', () => {
  it('should render button and date picker', async () => {
    const component = mount(
      <TestProviders>
        <DatePickerButton
          renderButton={showPicker => (<DummyComponent showPicker={showPicker} />)}
          onSelectDate={() => {}}
        />
      </TestProviders>,
    )

    expect(component).to.be.present()
    expect(component).to.have.exactly(1).descendants(DummyComponent)
    expect(component).to.have.exactly(1).descendants(DatePicker)
  })

  context('if date is chosen', () => {
    it('should call `onSelectDate` callback', async () => {
      const saveStub = sinon.stub()

      const component = mount(
        <TestProviders>
          <DatePickerButton
            renderButton={showPicker => (<DummyComponent showPicker={showPicker} />)}
            onSelectDate={saveStub}
          />
        </TestProviders>,
      )

      const datePicker = component.find(DatePicker)
      datePicker.props().onChange(new Date(2019, 5, 10, 0, 0, 0))

      expect(saveStub).to.have.been.calledWith('2019-06-10')
    })
  })

  context('if button is clicked', () => {
    it('should open date picker', async () => {
      const component = mount(
        <TestProviders>
          <DatePickerButton
            renderButton={showPicker => (<DummyComponent onClick={showPicker} />)}
            onSelectDate={() => {}}
          />
        </TestProviders>,
      )

      let datePicker = component.find(DatePicker)
      expect(datePicker).to.have.prop('open', false)

      const button = component.find(DummyComponent)
      button.simulate('click')
      await settleComponent(component)

      datePicker = component.find(DatePicker)
      expect(datePicker).to.have.prop('open', true)
    })
  })
})
