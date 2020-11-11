import mapKeys from 'lodash/mapKeys'
import mapValues from 'lodash/mapValues'
import camelcase from 'camelcase'

import { rgbaString } from '../utils/color-conversion'
import { CorporateDesignThemeOptions, ColorsPalette } from './corporate-design-theme'
import TokenColors from '../../design-tokens/build/js/colors'

// @ts-ignore
const COLOR_NAMES: ColorsPalette = {
  black: '#11141C',
  lightBlue: '#EAEFFE', // alternative name for backwards compatibility
  blue: '#527BFE',
  dullTurquoise: '#46ADC5',
  red60: '#F66D6B99',
  white: '#FFFFFF',
  nearWhite: '#F6F6FA',
  ...mapValues(
    mapKeys(
      TokenColors.color,
      (color, name) => camelcase(name.replace('(', '').replace(')', '')),
    ),
    color => color.value,
  ),
}

// This is the default but we want to make sure to base our measurements on it here as well
const SPACING = 8

const themeConfig: CorporateDesignThemeOptions = {
  palette: {
    background: {
      special: 'linear-gradient(128deg, #5352B2 0%, #4983BD 100%, #4983BD 100%)',
      normal: COLOR_NAMES.lightestGrey,
      modal: COLOR_NAMES.white,
    },
    text: {
      active: COLOR_NAMES.blue,
      title: COLOR_NAMES.black,
      paragraph: COLOR_NAMES.darkGrey,
      hint: COLOR_NAMES.grey,
      success: COLOR_NAMES.green,
      secondary: COLOR_NAMES.darkGrey,
      disabled: COLOR_NAMES.grey,
      primary: COLOR_NAMES.black,
    },
    error: {
      main: COLOR_NAMES.red,
      light: COLOR_NAMES.lightRed,
    },
    primary: {
      main: COLOR_NAMES.blue,
    },
    support: {
      deepBlue: COLOR_NAMES.deepBlue,
      dullBlue: COLOR_NAMES.dullBlue,
      cyan: COLOR_NAMES.cyan,
      teal: COLOR_NAMES.teal,
      almond: COLOR_NAMES.almond,
      amber: COLOR_NAMES.amber,
    },
    signal: {
      green: COLOR_NAMES.green,
      lightGreen: COLOR_NAMES.lightGreen,
      red: COLOR_NAMES.red,
      lightRed: COLOR_NAMES.lightRed,
    },
    colors: COLOR_NAMES,
  },
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
  },
  spacing: SPACING,
  shape: {
    borderRadius: 2,
  },
  props: {
    MuiButtonBase: {
      // TODO: Talk to Marie and find out whether she wants the ripple effect or not
      disableRipple: true,
    },
  },
  overrides: {
    MuiAvatar: {
      colorDefault: {
        backgroundColor: COLOR_NAMES.deepBlue,
      },
    },
    MuiButton: {
      root: {
        borderRadius: '2px',
        fontSize: '1rem',
        padding: '10.5px 24px',
        fontFamily: 'Open Sans',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '24px',
        textTransform: 'none',
      },
      contained: {
        color: COLOR_NAMES.lightestGrey,
        '&$disabled': {
          backgroundColor: COLOR_NAMES.lightGrey,
          color: COLOR_NAMES.lightestGrey,
        },
      },
      containedPrimary: {
        backgroundColor: COLOR_NAMES.blue,
        '&:active': {
          backgroundColor: COLOR_NAMES.darkBlue,
        },
        '&:hover': {
          backgroundColor: COLOR_NAMES.paleBlue,
        },
      },
      outlined: {
        padding: '10.5px 24px',
        fontSize: '1rem',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '24px',
        color: COLOR_NAMES.darkGrey,
        backgroundColor: COLOR_NAMES.white,
        border: `1px solid ${COLOR_NAMES.lightGrey}`,
        '&$disabled': {
          backgroundColor: COLOR_NAMES.white,
          color: COLOR_NAMES.grey,
        },
        '&:hover': {
          backgroundColor: COLOR_NAMES.nearWhite,
        },
        '&:active': {
          borderColor: COLOR_NAMES.grey,
          backgroundColor: COLOR_NAMES.nearWhite,
        },
      },
      outlinedSecondary: {
        borderColor: COLOR_NAMES.blue,
        backgroundColor: COLOR_NAMES.white,
        color: COLOR_NAMES.blue,
        '&:hover': {
          backgroundColor: COLOR_NAMES.lightBlue,
          borderColor: COLOR_NAMES.blue,
        },
        '&:active': {
          backgroundColor: COLOR_NAMES.white,
        },
        '&$disabled': {
          backgroundColor: COLOR_NAMES.white,
          borderColor: COLOR_NAMES.lightGrey,
        },
      },
    },
    MuiIconButton: {
      root: {
        color: COLOR_NAMES.grey,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '0.875rem',
        color: COLOR_NAMES.darkestGrey,
        background: COLOR_NAMES.white,
        '&::placeholder': {
          color: COLOR_NAMES.lightGrey,
          opacity: 1,
        },
      },
      root: {
        '& $notchedOutline': {
          borderColor: COLOR_NAMES.lightGrey,
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: COLOR_NAMES.lightGrey,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: COLOR_NAMES.lightGrey,
          },
        },
        '&$focused $notchedOutline': {
          borderColor: COLOR_NAMES.blue,
          borderWidth: 1,
        },
        '&$error $notchedOutline': {
          borderColor: COLOR_NAMES.red,
        },
        '&$disabled $notchedOutline': {
          borderColor: COLOR_NAMES.lightGrey,
          backgroundColor: rgbaString(COLOR_NAMES.lightestGrey, 0.6),
        },
      },
    },
    MuiFormHelperText: {
      root: {
        color: COLOR_NAMES.darkestGrey,
      },
    },
    MuiTypography: {
      h2: {
        fontFamily: 'Open Sans',
        fontSize: '2.5rem',
        letterSpacing: '0.4px',
        lineHeight: 1,
        fontWeight: 300,
      },
      h3: {
        fontFamily: 'Open Sans',
        fontSize: '1.5rem',
        color: COLOR_NAMES.black,
        lineHeight: 1.333,
        fontWeight: 300,
      },
      h4: {
        fontFamily: 'Open Sans',
        fontSize: '1.25rem',
        color: COLOR_NAMES.black,
        lineHeight: 1.5,
      },
      h5: {
        fontFamily: 'Open Sans',
        fontSize: '1rem',
        color: COLOR_NAMES.darkestGrey,
        lineHeight: 1.5,
      },
      h6: {
        fontFamily: 'Open Sans',
        fontSize: '0.9375rem',
        color: COLOR_NAMES.darkestGrey,
        lineHeight: 1.5,
      },
      body1: {
        fontFamily: 'Open Sans',
        fontSize: '0.8125rem',
        color: COLOR_NAMES.darkestGrey,
        lineHeight: 1.54,
      },
    },
    MuiLink: {
      root: {
        color: COLOR_NAMES.blue,
        '&:hover': {
          color: COLOR_NAMES.blue,
        },
        '&:visited': {
          color: COLOR_NAMES.darkBlue,
        },
      },
      button: {
        fontFamily: 'Open Sans',
        fontWeight: '600',
        fontSize: '0.8125rem',
        color: COLOR_NAMES.blue,
        letterSpacing: '0.46px',
        lineHeight: 1.85,
        padding: SPACING * 2,
        '&:hover': {
          backgroundColor: COLOR_NAMES.lightestBlue,
          borderRadius: '2px',
          textDecoration: 'none',
        },
      },
    },
    MuiExpansionPanelSummary: {
      content: {
        margin: `${SPACING * 1.5}px 0`,
        '&$expanded': {
          margin: `${SPACING * 1.5}px 0`,
        },
      },
    },
    MuiAccordionSummary: {
      content: {
        margin: `${SPACING * 1.5}px 0`,
        '&$expanded': {
          margin: `${SPACING * 1.5}px 0`,
        },
      },
    },
    MuiSwitch: {
      track: {
        opacity: undefined,
        backgroundColor: COLOR_NAMES.lightGrey,
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: rgbaString(COLOR_NAMES.veryDarkBlue, 0.9),
      },
    },
    MuiInputBase: {
      input: {
        '&::placeholder': {
          color: COLOR_NAMES.darkestGrey,
          opacity: 1,
        },
      },
    },
  },
}

export { themeConfig }
