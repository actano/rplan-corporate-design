import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { makeStyles } from '@material-ui/core'
import { testIdProp } from '../../utils/test-id-prop'
import { createBlockquoteStyles, createHeaderStyles, createLinkStyles } from './rich-text-styles'
import { EditorButtons } from './editor-buttons'

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

const useStyles = makeStyles(theme => ({
  editorContainer: {
    maxHeight: theme.spacing(50),

    overflowY: 'auto',
    overflowX: 'hidden',
  },
  editor: {
    marginRight: theme.spacing(2),
  },
  // This nesting is to increase the specificity of these variables
  // so they override the defaults set by ckeditor
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

export const Editor = ({
  placeholder, onChange, onCancel, onSave, isSaveDisabled, testIds, data, className,
}) => {
  const editorConfig = { ...baseEditorConfig, placeholder }
  const classes = useStyles()
  return (
    <div
      className={classnames(classes.editorContainer, className)}
      {...testIdProp(testIds.editorContainer)}
    >
      <div className={classes.editor}>
        <CKEditor
          editor={ClassicEditor}
          data={data}
          onChange={onChange}
          config={editorConfig}
        />
        <EditorButtons
          onCancel={onCancel}
          onSave={onSave}
          isSaveDisabled={isSaveDisabled}
          testIds={testIds}
        />
      </div>
    </div>
  )
}

Editor.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  isSaveDisabled: PropTypes.bool,
  testIds: PropTypes.shape({
    placeholder: PropTypes.string,
    editorContainer: PropTypes.string,
    content: PropTypes.string,
    saveButton: PropTypes.string,
    cancelButton: PropTypes.string,
  }),
  data: PropTypes.string,
  className: PropTypes.string,
}

Editor.defaultProps = {
  placeholder: '',
  onChange: () => {},
  onCancel: () => {},
  onSave: () => {},
  isSaveDisabled: false,
  testIds: {
    placeholder: '',
    editor: '',
    innerContent: '',
    saveButton: '',
    cancelButton: '',
  },
  data: '',
  className: '',
}
