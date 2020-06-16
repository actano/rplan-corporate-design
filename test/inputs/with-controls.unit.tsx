import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import { expect } from 'chai'

import { withControls } from '../../src/inputs/rich-text/rich-text-input'
import { testIdProp } from '../../src/shared/test-ids'

import { TestProviders } from '../providers'
import { RichTextEditorProps } from '../../src/inputs/rich-text/rich-text-editor'

async function immediate() {
  await new Promise((resolve) => {
    setImmediate(resolve)
  })
}

async function settleComponent(component) {
  await immediate()
  component.update()
}

const TestEditor: React.FunctionComponent<RichTextEditorProps> = () => (<textarea />)
const TestRichTextInput = withControls(TestEditor)

const testIds = {
  openEditorButton: 'openEditorButton',
  saveButton: 'saveButton',
  cancelButton: 'cancelButton',
  editor: 'editor',
  editorContainer: 'editorContainer',
  confirmationDialog: 'confirmationDialog',
  content: 'content',
  confirmButton: 'confirmSave',
  dontConfirmButton: 'confirmDontSave',
  placeholder: 'placeholder',
}

describe('withControls', () => {
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
      editor.prop('onMaxInputLengthExceeded')()
      await settleComponent(component)

      saveButton = component.find(testIdProp(testIds.saveButton)).first()
      expect(saveButton).to.be.present()
      expect(saveButton).to.have.prop('disabled', true)
    })
  })
  context('Confirmation dialog', () => {
    let component
    let saveStub
    beforeEach(async () => {
      saveStub = sinon.stub()
      component = mount(
        <TestProviders>
          <TestRichTextInput
            originalValue="my description"
            onSave={saveStub}
            testIds={testIds}
          />
        </TestProviders>,
      )
      await settleComponent(component)
    })
    context('Editor text was changed', () => {
      beforeEach(async () => {
        const openEditorButton = component.find(testIdProp(testIds.openEditorButton))
        openEditorButton.simulate('click')
        await settleComponent(component)
        const editor = component.find(testIdProp(testIds.editor))
        editor.props().onChange('Some new text')
        await settleComponent(component)
      })
      it('should show the confirmation dialog on clicking cancel', async () => {
        const cancelButton = component.find(testIdProp(testIds.cancelButton)).first()
        cancelButton.simulate('click')
        await settleComponent(component)
        const confirmationDialog = component.find(testIdProp(testIds.confirmationDialog)).first()
        expect(confirmationDialog).to.have.prop('isOpen', true)
      })
      it('should show the confirmation dialog on blur', async () => {
        const editor = component.find(testIdProp(testIds.editor))
        editor.props().onBlur()
        await settleComponent(component)
        const confirmationDialog = component.find(testIdProp(testIds.confirmationDialog)).first()
        expect(confirmationDialog).to.have.prop('isOpen', true)
      })
      it('should show no confirmation dialog on clicking enter but save the text', async () => {
        const saveButton = component.find(testIdProp(testIds.saveButton)).first()
        saveButton.simulate('click')
        await settleComponent(component)
        const confirmationDialog = component.find(testIdProp(testIds.confirmationDialog)).first()
        expect(confirmationDialog).to.not.be.present
        expect(saveStub).to.be.calledWith('Some new text')
      })
      it('should save the changes when clicking save in confirmation dialog ', async () => {
        const editor = component.find(testIdProp(testIds.editor))
        editor.props().onBlur()
        await settleComponent(component)
        const confirmationDialog = component.find(testIdProp(testIds.confirmationDialog)).first()
        const saveButton = confirmationDialog.find(testIdProp(testIds.confirmButton)).first()
        saveButton.simulate('click')
        expect(saveStub).to.be.calledWith('Some new text')
      })
      it('should not save the changes when clicking dont save in confirmation dialog ', async () => {
        const editor = component.find(testIdProp(testIds.editor))
        editor.props().onBlur()
        await settleComponent(component)
        const confirmationDialog = component.find(testIdProp(testIds.confirmationDialog)).first()
        const saveButton = confirmationDialog.find(testIdProp(testIds.dontConfirmButton)).first()
        saveButton.simulate('click')
        expect(saveStub).to.not.have.been.called
      })
    })
    context('Editor text was not changed', () => {
      beforeEach(async () => {
        const openEditorButton = component.find(testIdProp(testIds.openEditorButton))
        openEditorButton.simulate('click')
        await settleComponent(component)
      })
      it('should not show no confirmation dialog on clicking cancel', async () => {
        const cancelButton = component.find(testIdProp(testIds.cancelButton)).first()
        cancelButton.simulate('click')
        await settleComponent(component)
        const confirmationDialog = component.find(testIdProp(testIds.confirmationDialog)).first()
        expect(confirmationDialog).to.not.be.present
      })
      it('should show no confirmation dialog on blur', async () => {
        const editor = component.find(testIdProp(testIds.editor))
        editor.props().onBlur()
        await settleComponent(component)
        const confirmationDialog = component.find(testIdProp(testIds.confirmationDialog)).first()
        expect(confirmationDialog).to.not.be.present
      })
    })
  })
})
