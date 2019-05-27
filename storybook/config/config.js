import { addParameters, configure } from '@storybook/react'

import {
  buttonStories,
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
  buttonStories()
  iconButtonStories()
  linkStories()
  typographyStories()
  inputStories()
  errorBoxStories()
}

configure(loadStories, module)
