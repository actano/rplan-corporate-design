import path from 'path'
import { I18nextProvider } from 'react-i18next'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { i18n } from '@rplan/allex-i18n-tools'

import { themeConfig } from '../src/theme/theme-config'

const theme = createMuiTheme(themeConfig)

let i18nInstance
i18n(path.join(__dirname, '../static/i18n')).then((instance) => {
  i18nInstance = instance
})

// eslint-disable-next-line react/prop-types
const TestProviders = ({ children }) => (
  <I18nextProvider i18n={i18nInstance}>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        { children }
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </I18nextProvider>
)

export { TestProviders }
