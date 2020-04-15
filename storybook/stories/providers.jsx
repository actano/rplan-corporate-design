import { CssBaseline } from '@material-ui/core'
import { LocalizationProvider } from '@material-ui/pickers'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import { enGB } from 'date-fns/locale'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../src'

const theme = createMuiTheme(themeConfig)

// eslint-disable-next-line react/prop-types
const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={DateFnsAdapter} locale={enGB}>
      <CssBaseline />
      { children }
    </LocalizationProvider>
  </ThemeProvider>
)

export { Providers }
