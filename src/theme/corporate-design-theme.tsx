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
  dullBlue: string,
  cyan: string,
  teal: string,
  almond: string,
  amber: string,
}

type SignalPalette = {
  green: string,
  lightGreen: string,
  red: string,
  lightRed: string,
}

type ColorsPalette = {
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
