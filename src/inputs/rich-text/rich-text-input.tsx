import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'

import { CorporateDesignTheme } from '../../theme/corporate-design-theme'
import { testIdProp } from '../../utils/test-id-prop'

import { RichTextDisplay } from './rich-text-display'
import { RichTextEditor, RichTextEditorProps } from './rich-text-editor'
import { createBlockquoteStyles, createHeaderStyles, createLinkStyles } from './rich-text-styles'
import { EditorButtons } from './editor-buttons'
import { ConfirmationDialog } from './confirmation-dialog'

interface StyleProps {
  disabled: boolean
}

const useStyles = makeStyles<CorporateDesignTheme, StyleProps>(theme => ({
  editorContainer: {
    maxHeight: theme.spacing(50),
    paddingRight: theme.spacing(2),
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  details: ({ disabled }) => ({
    display: 'flex',
    outline: 'none',
    cursor: disabled ? 'default' : 'pointer',
    ...createBlockquoteStyles(theme),
    ...createHeaderStyles('h', theme),
    ...createLinkStyles(theme),
  }),
}))

const noTestIds = {
  editor: '',
  placeholder: '',
  editorContainer: '',
  content: '',
  openEditorButton: '',
  saveButton: '',
  cancelButton: '',
  confirmationDialog: '',
  confirmSave: '',
  confirmDontSave: '',
}

interface RichTextInputProps {
  originalValue: string
  onSave: (data: string) => void,
  placeholder?: string
  className?: string
  maxInputLength?: number,
  testIds: {
    editor: string
    placeholder: string
    editorContainer: string
    content: string
    openEditorButton: string
    saveButton: string
    cancelButton: string
    confirmationDialog: string
    confirmSave: string
    confirmDontSave: string
  },
  disabled?: boolean
  fixedHeight?: number
}

export const withControls = (EditorComponent: React.FunctionComponent<RichTextEditorProps>)
  : React.FunctionComponent<RichTextInputProps> => ({
  onSave,
  originalValue = '',
  className = '',
  placeholder = 'Add some text',
  maxInputLength,
  testIds = noTestIds,
  disabled = false,
  fixedHeight,
}) => {
  const classes = useStyles({ disabled })
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [data, setData] = useState(originalValue)
  const [isInputTooLong, setIsInputTooLong] = useState(false)
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

  const onOpen = useCallback(() => {
    setData(originalValue)
    setIsInputTooLong(false)
    setIsEditorOpen(true)
    setIsConfirmationOpen(false)
  }, [originalValue])

  const onChangeEditorData = useCallback((newData) => {
    setData(newData)
    setIsInputTooLong(false)
  }, [])

  const onMaxInputLengthExceeded = useCallback(() => {
    setIsInputTooLong(true)
  }, [])

  const saveChanges = useCallback(() => {
    onSave(data)
    setIsConfirmationOpen(false)
    setIsEditorOpen(false)
  }, [data, onSave])

  const discardChanges = useCallback(() => {
    setIsConfirmationOpen(false)
    setIsEditorOpen(false)
  }, [])

  const handleCancel = useCallback(() => {
    if (data !== originalValue && !isInputTooLong) {
      setIsConfirmationOpen(true)
    } else {
      discardChanges()
    }
  }, [data, discardChanges, isInputTooLong, originalValue])

  if (disabled) {
    return (
      <div
        className={classnames(classes.details, className)}
      >
        <RichTextDisplay
          value={originalValue}
          testIds={testIds}
          placeholder={placeholder}
        />
      </div>
    )
  }

  if (isEditorOpen) {
    return (
      <div
        className={classnames(classes.editorContainer, className)}
        {...testIdProp(testIds.editorContainer)}
      >
        <ConfirmationDialog
          isOpen={isConfirmationOpen}
          confirm={saveChanges}
          cancel={discardChanges}
          testIds={testIds}
          {...testIdProp(testIds.confirmationDialog)}
        />
        <EditorComponent
          placeholder={placeholder}
          onChange={onChangeEditorData}
          onBlur={handleCancel}
          data={data}
          maxInputLength={maxInputLength}
          onMaxInputLengthExceeded={onMaxInputLengthExceeded}
          fixedHeight={fixedHeight}
          {...testIdProp(testIds.editor)}
        />
        <EditorButtons
          onCancel={handleCancel}
          onSave={saveChanges}
          isSaveDisabled={isInputTooLong}
          testIds={testIds}
        />
      </div>
    )
  }
  return (
    <div
      role="button"
      tabIndex={0}
      className={classnames(classes.details, className)}
      onKeyPress={onOpen}
      onClick={onOpen}
      {...testIdProp(testIds.openEditorButton)}
    >
      <RichTextDisplay
        value={originalValue}
        testIds={testIds}
        placeholder={placeholder}
      />
    </div>
  )
}

export const RichTextInput = withControls(RichTextEditor)
