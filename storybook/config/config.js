import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import {
  buttonStories,
  iconButtonStories,
  inputStories,
  linkStories,
  typographyStories,
} from '../stories/index'



addDecorator(jsxDecorator)

function loadStories() {
  buttonStories()
  iconButtonStories()
  linkStories()
  typographyStories()
  inputStories()
}

configure(loadStories, module)
