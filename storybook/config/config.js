import { addDecorator, addParameters, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import * as stories from '../stories/index'

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
  },
})

addDecorator(withKnobs)

function loadStories() {
  for (const story of Object.values(stories)) {
    story()
  }
}

configure(loadStories, module)
