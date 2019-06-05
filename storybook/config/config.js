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
}

configure(loadStories, module)
