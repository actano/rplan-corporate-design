import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import { wrapWithControls } from '../../src/inputs/rich-text'
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

const TestEditor = () => (<textarea />)
const TestRichTextInput = wrapWithControls(TestEditor)

const testIds = {
  openEditorButton: 'openEditorButton',
  saveButton: 'saveButton',
  editor: 'editor',
}

describe('wrapWithControls', () => {
  it('should have an open editor button in write mode', async () => {
    const component = mount(
      <TestProviders>
        <TestRichTextInput
          originalValue="my description"
          onSave={() => {}}
          testIds={testIds}
        />
      </TestProviders>,
    )
    await settleComponent(component)
    const openEditorButton = component.find(testIdProp('openEditorButton'))
    expect(openEditorButton).to.be.present()
  })

  it('should not open the editor in disabled mode', async () => {
    const component = mount(
      <TestProviders>
        <TestRichTextInput
          originalValue="my description"
          onSave={() => {}}
          disabled
          testIds={testIds}
        />
      </TestProviders>,
    )
    await settleComponent(component)
    const openEditorButton = component.find(testIdProp(testIds.openEditorButton))
    expect(openEditorButton).to.not.be.present()
  })

  context('when the length of the input exceeds the maximal allowed length', () => {
    it('should disable the save button', async () => {
      const component = mount(
        <TestProviders>
          <TestRichTextInput
            maxInputLength={20}
            originalValue="my description"
            onSave={() => {}}
            testIds={testIds}
          />
        </TestProviders>,
      )
      await settleComponent(component)

      const openEditorButton = component.find(testIdProp(testIds.openEditorButton))
      openEditorButton.simulate('click')
      await settleComponent(component)

      let saveButton = component.find(testIdProp(testIds.saveButton)).first()
      expect(saveButton).to.be.present()
      expect(saveButton).to.have.prop('disabled', false)

      const editor = component.find(testIdProp(testIds.editor))
      expect(editor).to.be.present()
      expect(editor).to.have.prop('onChange')
      editor.prop('onChange')({}, { getData() { return 'something longer than maxInputLength' } })
      await settleComponent(component)

      saveButton = component.find(testIdProp(testIds.saveButton)).first()
      expect(saveButton).to.be.present()
      expect(saveButton).to.have.prop('disabled', true)
    })
  })
})
