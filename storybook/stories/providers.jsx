import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { CssBaseline } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { enGB } from 'date-fns/locale'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import themeConfig from '../../src'

const theme = createMuiTheme(themeConfig)

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    resources: { en: { translations: {} } },
  })

// eslint-disable-next-line react/prop-types
const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enGB}>
        <CssBaseline />
        { children }
      </MuiPickersUtilsProvider>
    </I18nextProvider>
  </ThemeProvider>
)

export { Providers }
