import { InputBase } from '@material-ui/core'
import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import { withSaveOnBlurControlled } from '../../src/inputs'


describe('withSaveOnBlurControlled HoC', () => {
  const WrappedInput = withSaveOnBlurControlled(InputBase)

  it('should render', () => {
    const component = mount(<WrappedInput />)

    expect(component).to.be.present()
  })

  it('should save on blur', () => {
    const saveStub = sinon.spy()
    const component = mount(<WrappedInput originalValue="original" onSave={saveStub} />)

    const input = component.find('input').first()
    input.simulate('focus')
    input.simulate('change', { target: { value: 'changed' } })
    input.simulate('blur')

    expect(saveStub).to.have.been.called
  })

  it('should only save if the value has changed', () => {
    const saveStub = sinon.spy()
    const component = mount(<WrappedInput originalValue="original" onSave={saveStub} />)

    const input = component.find('input').first()
    input.simulate('focus')
    input.simulate('change', { target: { value: 'original' } })
    input.simulate('blur')

    expect(saveStub).to.not.have.been.called
  })

  context('onlySaveChanges flag is set to false', () => {
    const AlwaysSaveInput = withSaveOnBlurControlled(InputBase, false)
    it('should always save if component was created with onlySaveChanges flag set to false', () => {
      const saveStub = sinon.spy()
      const component = mount(<AlwaysSaveInput originalValue="original" onSave={saveStub} />)

      const input = component.find('input').first()
      input.simulate('focus')
      input.simulate('change', { target: { value: 'original' } })
      input.simulate('blur')

      expect(saveStub).to.have.been.called
    })
  })
})
