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
