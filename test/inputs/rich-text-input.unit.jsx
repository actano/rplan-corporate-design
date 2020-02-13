import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import { RichTextInput } from '../../src/inputs'
import { testIdProp } from '../../src/utils/test-id-prop'

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

describe('RichTextInput', () => {
  it('should have an open editor button in write mode', async () => {
    const component = mount(
      <TestProviders>
        <RichTextInput
          originalValue="my description"
          onSave={() => {}}
          readOnly={false}
          testIds={{
            openEditorButton: 'openEditorButton',
          }}
        />
      </TestProviders>,
    )
    await settleComponent(component)
    const openEditorButton = component.find(testIdProp('openEditorButton'))
    expect(openEditorButton).to.be.present()
  })

  it('should not open the editor in read-only mode', async () => {
    const component = mount(
      <TestProviders>
        <RichTextInput
          originalValue="my description"
          onSave={() => {}}
          readOnly
          testIds={{
            openEditorButton: 'openEditorButton',
          }}
        />
      </TestProviders>,
    )
    await settleComponent(component)
    const openEditorButton = component.find(testIdProp('openEditorButton'))
    expect(openEditorButton).to.not.be.present()
  })
})
