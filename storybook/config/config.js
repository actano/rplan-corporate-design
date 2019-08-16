import { addParameters, configure } from '@storybook/react'

import * as stories from '../stories/index'

addParameters({
  options: {
    showPanel: false,
  },
})

function loadStories() {
  for (const story of Object.values(stories)) {
    story()
  }
}

configure(loadStories, module)
