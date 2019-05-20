import { configure } from '@storybook/react'

import {
  buttonStories,
} from '../stories/index'

function loadStories() {
  buttonStories()
}

configure(loadStories, module)
