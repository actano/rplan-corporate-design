import { CssBaseline } from '@material-ui/core'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React from 'react'
import { storiesOf } from '@storybook/react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig, { LogoPageHeadline } from '../../../src'
import { LogoPage } from '../../../src/components'

const theme = createMuiTheme(themeConfig)

const logoPageStories = () => {
  storiesOf('LogoPage', module)
    .add('LogoPage', () =>
      (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <LogoPage>
            <LogoPageHeadline>This is a headline</LogoPageHeadline>
          </LogoPage>
        </MuiThemeProvider>
      ))
}

export { logoPageStories }
