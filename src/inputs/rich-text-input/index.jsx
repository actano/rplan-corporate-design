import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import classnames from 'classnames'
import { testIdProp } from '../../utils/test-id-prop'

import { RichTextDisplay } from './rich-text-display'
import { Editor } from './editor'
import { createBlockquoteStyles, createHeaderStyles, createLinkStyles } from './rich-text-styles'

const useStyles = makeStyles(theme => ({
  details: ({ disabled }) => ({
    display: 'flex',
    outline: 'none',
    cursor: !disabled && 'pointer',
    ...createBlockquoteStyles(theme),
    ...createHeaderStyles('h', theme),
    ...createLinkStyles(theme),
  }),
}))

const DEFAULT_MAX_INPUT_LENGTH = 4000

export const RichTextInput = ({
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

  const onChangeEditorData = useCallback((event, editor) => {
    const newData = editor.getData()
    if (newData.length <= maxInputLength) {
      setData(newData)
      setIsSaveDisabled(false)
    } else {
      setIsSaveDisabled(true)
    }
  }, [maxInputLength])

  const onSaveClick = useCallback(() => {
    onSave(data)
    setIsEditorOpen(false)
  }, [data, onSave])

  const onCancelClick = useCallback(() => {
    setIsEditorOpen(false)
  }, [])

  const onOpen = useCallback(() => {
    setIsEditorOpen(true)
  }, [])

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
      <Editor
        className={className}
        placeholder={placeholder}
        onChange={onChangeEditorData}
        onCancel={onCancelClick}
        onSave={onSaveClick}
        isSaveDisabled={isSaveDisabled}
        data={data}
        testIds={testIds}
      />
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

RichTextInput.propTypes = {
  originalValue: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  maxInputLength: PropTypes.number,
  testIds: PropTypes.shape({
    placeholder: PropTypes.string,
    editorContainer: PropTypes.string,
    content: PropTypes.string,
    openEditorButton: PropTypes.string,
    saveButton: PropTypes.string,
    cancelButton: PropTypes.string,
  }),
  disabled: PropTypes.bool,
}


RichTextInput.defaultProps = {
  originalValue: '',
  className: '',
  placeholder: 'Add some text',
  maxInputLength: DEFAULT_MAX_INPUT_LENGTH,
  testIds: {
    placeholder: '',
    editor: '',
    innerContent: '',
    openEditorButton: '',
    saveButton: '',
    cancelButton: '',
  },
  disabled: false,
}
