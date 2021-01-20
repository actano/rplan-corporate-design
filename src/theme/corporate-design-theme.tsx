import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import { Breakpoints } from '@material-ui/core/styles/createBreakpoints'
import {
  Palette,
  PaletteOptions,
  TypeBackground,
  TypeText,
} from '@material-ui/core/styles/createPalette'

type BackgroundPalette = TypeBackground & {
  special: string,
  normal: string,
  modal: string,
}

type TextPalette = TypeText & {
  active: string,
  title: string,
  paragraph: string,
  success: string,
}

type SupportPalette = {
  deepBlue: string,
  strongerBlue: string,
  dullBlue: string,
  cyan: string,
  teal: string,
  almond: string,
  amber: string,
  lightestBlue: string,
  lightRed: string,
  darkRed: string,
  turquoise: string,
  darkTurquoise: string,
  turquoise20: string,
  lightOrange: string,
  lightPeach: string,
  darkGreen: string,
  orange: string,
}

type SignalPalette = {
  green: string,
  lightGreen: string,
  red: string,
  lightRed: string,
}

export type ColorsPalette = {
  lightestGrey: string,
  veryLightGrey: string,
  lightGrey: string,
  grey: string,
  darkGrey: string,
  darkerGrey: string,
  darkestGrey: string,
  black: string,
  lightestBlue: string,
  lightGreen: string,
  lightBlue: string,
  lighterBlue: string,
  dullBlue: string,
  paleBlue: string,
  cyan: string,
  teal: string,
  blue: string,
  almond: string,
  amber: string,
  dullTurquoise: string,
  paleGreen: string,
  paleRed: string,
  strongerBlue: string,
  lightDeepBlue: string,
  deepBlue: string,
  veryDarkDeepBlue: string,
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
  lightOrange: string,
  lightPeach: string,
  darkGreen: string,
  darkTurquoise: string,
  turquoise20: string,
}

interface CorporateDesignPalette extends Palette {
  background: BackgroundPalette,
  text: TextPalette,
  support: SupportPalette,
  signal: SignalPalette,
  colors: ColorsPalette,
}

interface CorporateDesignPaletteOptions extends PaletteOptions {
  background: Partial<BackgroundPalette>,
  text: Partial<TextPalette>,
  support: Partial<SupportPalette>,
  signal: Partial<SignalPalette>,
  colors: Partial<ColorsPalette>,
}

export interface CorporateDesignTheme extends Theme {
  palette: CorporateDesignPalette,
  breakpoints: Breakpoints,
}

export interface CorporateDesignThemeOptions extends ThemeOptions {
  palette: CorporateDesignPaletteOptions,
  overrides: object,
}
