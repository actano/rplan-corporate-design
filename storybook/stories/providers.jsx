import { CssBaseline } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../src'

const theme = createMuiTheme(themeConfig)

// eslint-disable-next-line react/prop-types
const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <CssBaseline />
      { children }
    </MuiPickersUtilsProvider>
  </ThemeProvider>
)

export { Providers }
