import PropTypes from 'prop-types'
import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/core'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import classnames from 'classnames'
import { testIdProp } from '../utils/test-id-prop'

import { PrimaryButton, SecondaryButton } from '../buttons'

const createHeaderStyles = (classNamePrefix, theme) => ({
  [`& ${classNamePrefix}1`]: {
    fontSize: '0.9375rem',
    lineHeight: '1.5rem',
    fontWeight: 600,
    color: theme.palette.colors.black,
  },
  [`& ${classNamePrefix}2`]: {
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    fontWeight: 600,
    color: theme.palette.colors.black,
  },
  [`& ${classNamePrefix}3`]: {
    fontSize: '0.8125rem',
    lineHeight: '1.25rem',
    fontWeight: 600,
    color: theme.palette.colors.black,
  },
})

const createLinkStyles = theme => ({
  '& a': {
    color: theme.palette.colors.blue,
    '&:visited': {
      color: theme.palette.colors.darkBlue,
    },
  },
})

const createBlockquoteStyles = theme => ({
  '& blockquote': {
    overflow: 'hidden',
    paddingRight: '1.5em',
    paddingLeft: '1.5em',
    marginLeft: 0,
    marginRight: 0,
    fontStyle: 'italic',
    borderLeft: `5px solid ${theme.palette.colors.veryLightGrey}`,
  },

})

const useStyles = makeStyles(theme => ({
  details: {
    display: 'flex',
    outline: 'none',
    cursor: 'pointer',
    ...createBlockquoteStyles(theme),
    ...createHeaderStyles('h', theme),
    ...createLinkStyles(theme),
  },
  descriptionInput: {
    lineHeight: '1.54',
    fontSize: '0.8125rem',
    color: theme.palette.colors.darkestGrey,
    '&::placeholder': {
      color: theme.palette.colors.grey,
    },
  },
  placeholder: {
    lineHeight: '1.54',
    fontSize: '0.8125rem',
    color: theme.palette.colors.grey,
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  saveButton: {
    fontSize: '0.75rem',
    padding: '4px 12px',
  },
  cancelButton: {
    fontSize: '0.75rem',
    padding: '4px 12px',
    marginRight: theme.spacing(1),
  },
  // This nesting is to
  '@global': {
    ':root': {
      // ---------- tooltip
      '--ck-color-tooltip-text': theme.palette.colors.white,
      '--ck-color-tooltip-background': theme.palette.colors.darkGrey,

      '--ck-color-base-background': theme.palette.colors.white,
      '--ck-color-base-border': theme.palette.colors.veryLightGrey,

      // --------- toolbar
      '--ck-color-text': theme.palette.colors.darkGrey,
      '--ck-color-base-foreground': `${theme.palette.colors.lightestGrey}80`,

      // --------- toolbar buttons
      '--ck-color-button-default-background': 'transparent',

      '--ck-color-button-default-hover-background': theme.palette.colors.veryLightGrey,
      '--ck-color-button-on-hover-background': theme.palette.colors.veryLightGrey,
      '--ck-color-button-action-hover-background': theme.palette.colors.veryLightGrey,

      '--ck-color-button-default-disabled-background': 'transparent',
      '--ck-color-button-on-disabled-background': 'transparent',
      '--ck-color-button-action-disabled-background': 'transparent',

      '--ck-color-button-default-active-background': theme.palette.colors.veryLightGrey,
      '--ck-color-button-on-active-background': theme.palette.colors.veryLightGrey,
      '--ck-color-button-action-active-background': theme.palette.colors.veryLightGrey,

      '--ck-color-button-default-active-shadow': theme.palette.colors.lightGrey,
      '--ck-color-button-action-active-shadow': theme.palette.colors.lightGrey,
      '--ck-color-button-on-active-shadow': theme.palette.colors.lightGrey,

      '--ck-color-button-on-background': theme.palette.colors.veryLightGrey,
      '--ck-color-button-action-background': theme.palette.colors.veryLightGrey,

      '--ck-color-list-button-on-text': theme.palette.colors.darkGrey,
      '--ck-color-list-button-on-background': theme.palette.colors.lightGrey,
      '--ck-color-list-button-on-background-focus': theme.palette.colors.lightGrey,
      '--ck-color-list-button-hover-background': theme.palette.colors.veryLightGrey,

      '--ck-border-radius': 2,
      '--ck-color-focus-border': theme.palette.colors.blue,
      '--ck-focus-outer-shadow': '0px 0px',

      '--ck-font-size-base': '0.8125rem',
      '--ck-line-height-base': 1.54,
      '--ck-font-face': theme.typography.fontFamily,
      '--ck-z-modal': 1300,

      // taken from material-ui to make the dropdown box shadows consistent with others
      '--ck-drop-shadow': '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
      '--ck-color-button-save': theme.palette.colors.green,
      '--ck-color-button-cancel': theme.palette.colors.red,
    },
    '.ck': {
      color: theme.palette.colors.darkestGrey,
      fontSize: '0.8125rem',
      '& .ck-placeholder': {
        color: theme.palette.colors.grey,
      },
      '& .ck-dropdown__panel': {
        // there is no override for border
        border: 'none',
      },
      '& .ck-list': {
        // there is no override for the margins within a list
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      '& h1, h2, h3': {
        fontWeight: 600,
      },
      ...createBlockquoteStyles(theme),
      ...createLinkStyles(theme),
      ...createHeaderStyles('.ck-heading_heading', theme),
      ...createHeaderStyles('h', theme),
    },
  },
}))

const baseEditorConfig = {
  copyFormatting_allowedContexts: true,
  baseFloatZIndex: 1300,
  heading: {
    options: [
      {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph',
      }, {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3',
      },
    ],
  },
  removePlugins: [
    'Image',
    'ImageCaption',
    'ImageStyle',
    'ImageToolbar',
    'ImageUpload',
    'CKFinderUploadAdapter',
    'CKFinder',
    'EasyImage',
  ],
  toolbar: [
    'heading', '|',
    'bold', 'italic', '|',
    'link', 'bulletedList', 'numberedList', 'indent', 'outdent', '|',
    'blockQuote', '|',
    'undo', 'redo',
  ],
  link: {
    addTargetToExternalLinks: true,
  },
}

export const RichTextInput = ({
  onSave,
  originalValue,
  className,
  placeholder,
  testIds,
  readOnly,
}) => {
  const classes = useStyles()
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [data, setData] = useState(originalValue)
  const editorConfig = { ...baseEditorConfig, placeholder }

  const onChangeEditorData = useCallback((event, editor) => {
    setData(editor.getData())
  }, [])
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

  if (isEditorOpen) {
    return (
      <div
        className={className}
        {...testIdProp(testIds.editorContainer)}
      >
        <CKEditor
          editor={ClassicEditor}
          data={originalValue}
          onChange={onChangeEditorData}
          config={editorConfig}
          disabled={readOnly}
        />
        <div className={classes.buttonContainer}>
          <SecondaryButton
            className={classes.cancelButton}
            onClick={onCancelClick}
            {...testIdProp(testIds.cancelButton)}
          >
              Cancel
          </SecondaryButton>
          <PrimaryButton
            className={classes.saveButton}
            onClick={onSaveClick}
            disabled={readOnly}
            {...testIdProp(testIds.saveButton)}
          >
              Save
          </PrimaryButton>
        </div>
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
      {
          originalValue
            ? (
              <div
                className={classes.descriptionInput}
                {...testIdProp(testIds.content)}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: originalValue }}
              />
            )
            : (
              <div
                className={classes.placeholder}
                {...testIdProp(testIds.placeholder)}
              >
                <p>{placeholder}</p>
              </div>
            )
        }
    </div>
  )
}

RichTextInput.propTypes = {
  originalValue: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  testIds: PropTypes.shape({
    placeholder: PropTypes.string,
    editorContainer: PropTypes.string,
    content: PropTypes.string,
    openEditorButton: PropTypes.string,
    saveButton: PropTypes.string,
    cancelButton: PropTypes.string,
  }),
  readOnly: PropTypes.bool,
}


RichTextInput.defaultProps = {
  originalValue: '',
  className: '',
  placeholder: 'Add some text',
  testIds: {
    placeholder: '',
    editor: '',
    innerContent: '',
    openEditorButton: '',
    saveButton: '',
    cancelButton: '',
  },
  readOnly: false,
}
