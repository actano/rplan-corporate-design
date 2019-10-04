import { addParameters, configure } from '@storybook/react'

import * as stories from '../stories/index'

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
  },
})

function loadStories() {
  for (const story of Object.values(stories)) {
    story()
  }
}

configure(loadStories, module)
