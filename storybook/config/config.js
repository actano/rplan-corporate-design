import { addParameters, configure } from '@storybook/react'

import {
  avatarStories,
  buttonStories,
  colorStories,
  dotMenuStories,
  errorBoxStories,
  iconButtonStories,
  inputStories,
  selectStories,
  linkStories,
  typographyStories,
  headerBarStories,
  modalDialogStories,
  logoPageStories,
  iconStories,
} from '../stories/index'

addParameters({
  options: {
    showPanel: false,
  },
})

function loadStories() {
  avatarStories()
  colorStories()
  dotMenuStories()
  buttonStories()
  iconButtonStories()
  linkStories()
  typographyStories()
  inputStories()
  selectStories()
  errorBoxStories()
  headerBarStories()
  modalDialogStories()
  logoPageStories()
  iconStories()
}

configure(loadStories, module)
