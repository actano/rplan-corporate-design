import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import { Breakpoints } from '@material-ui/core/styles/createBreakpoints'

interface CorporateDesignPalette {
  background: {
    special: string,
    normal: string,
    modal: string,
    default?: string,
    paper?: string,
  },
  text: {
    active: string,
    title: string,
    paragraph: string,
    hint: string,
    success: string,
    secondary: string,
    disabled: string,
    primary: string,
  },
  error: {
    main: string,
    light: string,
  },
  primary: {
    main: string,
  },
  support: {
    deepBlue: string,
    dullBlue: string,
    cyan: string,
    teal: string,
    almond: string,
    amber: string,
  },
  signal: {
    green: string,
    lightGreen: string,
    red: string,
    lightRed: string,
  },
  colors: {
    lightestGrey: string,
    veryLightGrey: string,
    lightGrey: string,
    grey: string,
    darkGrey: string,
    darkestGrey: string,
    black: string,
    lightestBlue: string,
    lightBlue: string,
    lighterBlue: string,
    paleBlue: string,
    blue: string,
    strongerBlue: string,
    darkBlue: string,
    darkerBlue: string,
    veryDarkBlue: string,
    green: string,
    turquoise: string,
    lightRed: string,
    red: string,
    red60: string,
    darkRed: string,
    orange: string,
    white: string,
    nearWhite: string,
  },
}

export interface CorporateDesignTheme {
  spacing: (...spaces: number[]) => number,
  palette: CorporateDesignPalette,
  breakpoints: Breakpoints,
}

export interface CorporateDesignThemeOptions extends ThemeOptions {
  palette: CorporateDesignPalette,
  overrides: object,
}
