import { InputBase } from '@material-ui/core'
import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import { withBlurOnEnter } from '../../src/inputs'

describe('withBlurOnEnter HoC', () => {
  const WrappedInput = withBlurOnEnter(InputBase)

  it('should render', () => {
    const component = mount(<WrappedInput />)

    expect(component).to.be.present()
  })

  it('should blur on enter', async () => {
    const blurStub = sinon.spy()
    const component = mount(<WrappedInput />)

    const input = component.find('input').first()
    input.simulate('focus')
    input.simulate('change', { target: { value: 'test input' } })
    input.simulate('keyup', { target: { blur: blurStub }, key: 'Enter' })

    expect(blurStub).to.have.been.called
  })
})
