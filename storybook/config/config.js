import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import {
  buttonStories,
} from '../stories/index'



addDecorator(jsxDecorator)

function loadStories() {
  buttonStories()
}

configure(loadStories, module)
