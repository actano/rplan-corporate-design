import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../src'

const theme = createMuiTheme(themeConfig)

// eslint-disable-next-line react/prop-types
const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    { children }
  </ThemeProvider>
)

export { Providers }
