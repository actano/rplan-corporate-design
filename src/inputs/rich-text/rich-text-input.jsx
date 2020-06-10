import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'

import { testIdProp } from '../../utils/test-id-prop'

import { RichTextDisplay } from './rich-text-display'
import { RichTextEditor } from './rich-text-editor'
import { createBlockquoteStyles, createHeaderStyles, createLinkStyles } from './rich-text-styles'
import { EditorButtons } from './editor-buttons'
import { ConfirmationDialog } from './confirmation-dialog'

const useStyles = makeStyles(theme => ({
  editorContainer: {
    maxHeight: theme.spacing(50),
    paddingRight: theme.spacing(2),
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  details: ({ disabled }) => ({
    display: 'flex',
    outline: 'none',
    cursor: !disabled && 'pointer',
    ...createBlockquoteStyles(theme),
    ...createHeaderStyles('h', theme),
    ...createLinkStyles(theme),
  }),
}))

export const wrapWithControls = (EditorComponent) => {
  const Wrapped = ({
    onSave,
    originalValue,
    className,
    placeholder,
    maxInputLength,
    testIds,
    disabled,
  }) => {
    const classes = useStyles({ disabled })
    const [isEditorOpen, setIsEditorOpen] = useState(false)
    const [data, setData] = useState(originalValue)
    const [isSaveDisabled, setIsSaveDisabled] = useState(false)
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

    const onOpen = useCallback(() => {
      setIsEditorOpen(true)
      setIsConfirmationOpen(false)
    }, [])

    const onChangeEditorData = useCallback((newData) => {
      setData(newData)
      setIsSaveDisabled(false)
    }, [])

    const onMaxInputLengthExceeded = useCallback(() => {
      setIsSaveDisabled(true)
    }, [])

    const saveDataAndCloseEditor = useCallback(() => {
      onSave(data)
      setIsEditorOpen(false)
    }, [data, onSave])

    const discardChangesAndCloseEditor = useCallback(() => {
      setData(originalValue)
      setIsEditorOpen(false)
    }, [originalValue])

    const onSaveClick = useCallback(() => {
      saveDataAndCloseEditor()
    }, [saveDataAndCloseEditor])

    const checkAndHandleUnsavedChanges = useCallback(() => {
      if (data !== originalValue) {
        setIsConfirmationOpen(true)
      } else {
        setIsEditorOpen(false)
      }
    }, [data, originalValue])

    const onCancelClick = useCallback(() => {
      checkAndHandleUnsavedChanges()
    }, [checkAndHandleUnsavedChanges])

    const handleOnBlur = useCallback(() => {
      if (isSaveDisabled) {
        return
      }
      checkAndHandleUnsavedChanges()
    }, [checkAndHandleUnsavedChanges, isSaveDisabled])

    const discardChanges = useCallback(() => {
      setIsConfirmationOpen(false)
      discardChangesAndCloseEditor()
    }, [discardChangesAndCloseEditor])

    const saveChanges = useCallback(() => {
      setIsConfirmationOpen(false)
      saveDataAndCloseEditor()
    }, [saveDataAndCloseEditor])

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
            onBlur={handleOnBlur}
            data={data}
            maxInputLength={maxInputLength}
            onMaxInputLengthExceeded={onMaxInputLengthExceeded}
            {...testIdProp(testIds.editor)}
          />
          <EditorButtons
            onCancel={onCancelClick}
            onSave={onSaveClick}
            isSaveDisabled={isSaveDisabled}
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

  Wrapped.propTypes = {
    originalValue: PropTypes.string,
    onSave: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    maxInputLength: PropTypes.number,
    testIds: PropTypes.shape({
      editor: PropTypes.string,
      placeholder: PropTypes.string,
      editorContainer: PropTypes.string,
      content: PropTypes.string,
      openEditorButton: PropTypes.string,
      saveButton: PropTypes.string,
      cancelButton: PropTypes.string,
      confirmationDialog: PropTypes.string,
      confirmSave: PropTypes.string,
      confirmDontSave: PropTypes.string,
    }),
    disabled: PropTypes.bool,
  }

  Wrapped.defaultProps = {
    originalValue: '',
    className: '',
    placeholder: 'Add some text',
    maxInputLength: undefined,
    testIds: {
      placeholder: '',
      editor: '',
      innerContent: '',
      openEditorButton: '',
      saveButton: '',
      cancelButton: '',
      confirmationDialog: '',
      confirmSave: '',
      confirmDontSave: '',
    },
    disabled: false,
  }
  return Wrapped
}

export const RichTextInput = wrapWithControls(RichTextEditor)
