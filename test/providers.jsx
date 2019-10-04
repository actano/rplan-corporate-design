import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import { themeConfig } from '../src/theme/theme-config'

const theme = createMuiTheme(themeConfig)

// eslint-disable-next-line react/prop-types
const TestProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      { children }
    </MuiPickersUtilsProvider>
  </ThemeProvider>
)

export { TestProviders }
