import { addParameters, configure } from '@storybook/react'

import {
  buttonStories,
  colorStories,
  errorBoxStories,
  iconButtonStories,
  inputStories,
  linkStories,
  typographyStories,
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
}

configure(loadStories, module)
