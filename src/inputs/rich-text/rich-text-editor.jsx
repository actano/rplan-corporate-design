import React from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { makeStyles } from '@material-ui/core'
import { createBlockquoteStyles, createHeaderStyles, createLinkStyles } from './rich-text-styles'

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
      '& .ck-placeholder::before': {
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

// Recommended way to set a fixed height for the editable area is a custom plugin.
// As this doesn't take the toolbar into account, the toolbar height must be subtracted in addition.
const createMinMaxHeightPlugin = (height) => {
  function MinMaxHeightPlugin(editor) {
    this.editor = editor
  }

  MinMaxHeightPlugin.prototype.init = function () {
    const toolbarHeight = 38
    const editableHeight = height - toolbarHeight

    this.editor.ui.view.toolbar.extendTemplate({
      attributes: {
        style: {
          minHeight: `${toolbarHeight}px`,
          maxHeight: `${toolbarHeight}px`,
        },
      },
    })
    this.editor.ui.view.editable.extendTemplate({
      attributes: {
        style: {
          minHeight: `${editableHeight}px`,
          maxHeight: `${editableHeight}px`,
        },
      },
    })
  }

  return MinMaxHeightPlugin
}

const DEFAULT_MAX_INPUT_LENGTH = 4000

export const RichTextEditor = ({
  placeholder,
  onChange,
  data,
  fixedHeight,
  maxInputLength,
  onMaxInputLengthExceeded,
}) => {
  const plugins = [...ClassicEditor.builtinPlugins]

  if (fixedHeight) plugins.push(createMinMaxHeightPlugin(fixedHeight))

  const editorConfig = {
    ...baseEditorConfig,
    plugins,
    placeholder,
  }

  useStyles()
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={(event, editor) => {
        const newData = editor.getData()
        if (newData.length <= maxInputLength) {
          onChange(newData)
        } else {
          onMaxInputLengthExceeded()
        }
      }}
      config={editorConfig}
    />
  )
}

RichTextEditor.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  data: PropTypes.string,
  fixedHeight: PropTypes.number,
  maxInputLength: PropTypes.number,
  onMaxInputLengthExceeded: PropTypes.func,
}

RichTextEditor.defaultProps = {
  placeholder: '',
  onChange: () => {},
  data: '',
  fixedHeight: undefined,
  maxInputLength: DEFAULT_MAX_INPUT_LENGTH,
  onMaxInputLengthExceeded: () => {},
}
