import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import {
  buttonStories,
  iconButtonStories,
} from '../stories/index'



addDecorator(jsxDecorator)

function loadStories() {
  buttonStories()
  iconButtonStories()
}

configure(loadStories, module)
