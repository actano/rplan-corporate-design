import { addParameters, configure } from '@storybook/react'

import {
  buttonStories,
  colorStories,
  errorBoxStories,
  iconButtonStories,
  inputStories,
  linkStories,
  typographyStories,
  headerBarStories,
  modalDialogStories,
} from '../stories/index'

addParameters({
  options: {
    showPanel: false,
  },
})

function loadStories() {
  colorStories()
  buttonStories()
  iconButtonStories()
  linkStories()
  typographyStories()
  inputStories()
  errorBoxStories()
  headerBarStories()
  modalDialogStories()
}

configure(loadStories, module)
