import { configure, addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeConfig from '../../src'
import { muiTheme } from 'storybook-addon-material-ui'

import {
  buttonStories,
} from '../stories/index'


const theme = createMuiTheme(themeConfig)

addDecorator(jsxDecorator)
addDecorator(muiTheme([theme]))

function loadStories() {
  buttonStories()
}

configure(loadStories, module)
