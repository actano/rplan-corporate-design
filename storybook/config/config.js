import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import {
  buttonStories,
  iconButtonStories,
  linkStories,
  typographyStories,
} from '../stories/index'



addDecorator(jsxDecorator)

function loadStories() {
  buttonStories()
  iconButtonStories()
  linkStories()
  typographyStories()
}

configure(loadStories, module)
