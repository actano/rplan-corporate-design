import { rgbaString } from '../utils/color-conversion'

const COLOR_NAMES = {
  LIGHTEST_GREY: '#F5F7FE',
  VERY_LIGHT_GREY: '#E8E8F1',
  LIGHT_GREY: '#D1D2E3',
  GREY: '#A3ABC7',
  DARK_GREY: '#5F6887',
  DARKEST_GREY: '#414A69',
  BLACK: '#11141C',
  LIGHTEST_BLUE: '#EBF0FF',
  LIGHT_BLUE: '#EAEFFE',
  PALE_BLUE: '#7D9CFE',
  BLUE: '#527BFE',
  DARK_BLUE: '#354A90',
  DARKER_BLUE: '#2c3555',
  VERY_DARK_BLUE: '#1C274A',
  GREEN: '#0ED08F',
  LIGHT_RED: '#FEF0F0',
  RED: '#F66D6B',
  ORANGE: '#FCB239',
  WHITE: '#FFFFFF',
  NEAR_WHITE: '#F6F6FA',
}

// This is the default but we want to make sure to base our measurements on it here as well
const SPACING = 8

const themeConfig = {
  themeName: 'MVP Corporate Design',
  palette: {
    background: {
      special: 'linear-gradient(128deg, #5352B2 0%, #4983BD 100%, #4983BD 100%)',
      normal: COLOR_NAMES.LIGHTEST_GREY,
      modal: COLOR_NAMES.WHITE,
    },
    text: {
      active: COLOR_NAMES.BLUE,
      title: COLOR_NAMES.BLACK,
      paragraph: COLOR_NAMES.DARK_GREY,
      hint: COLOR_NAMES.GREY,
      success: COLOR_NAMES.GREEN,
    },
    error: {
      main: COLOR_NAMES.RED,
      light: COLOR_NAMES.LIGHT_RED,
    },
    primary: {
      main: COLOR_NAMES.BLUE,
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
    MuiButton: {
      root: {
        borderRadius: '2px',
        fontSize: '16px',
        padding: '10.5px 24px',
        fontFamily: 'Open Sans',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '24px',
        textTransform: 'none',
      },
      contained: {
        color: COLOR_NAMES.LIGHTEST_GREY,
        '&$disabled': {
          backgroundColor: COLOR_NAMES.LIGHT_GREY,
          color: COLOR_NAMES.LIGHTEST_GREY,
        },
      },
      containedPrimary: {
        backgroundColor: COLOR_NAMES.BLUE,
        '&:active': {
          backgroundColor: COLOR_NAMES.DARK_BLUE,
        },
        '&:hover': {
          backgroundColor: COLOR_NAMES.PALE_BLUE,
        },
      },
      outlined: {
        padding: '10.5px 24px',
        fontSize: '16px',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '24px',
        color: COLOR_NAMES.DARK_GREY,
        backgroundColor: COLOR_NAMES.WHITE,
        border: `1px solid ${COLOR_NAMES.LIGHT_GREY}`,
        '&$disabled': {
          backgroundColor: COLOR_NAMES.WHITE,
          color: COLOR_NAMES.GREY,
        },
        '&:hover': {
          backgroundColor: COLOR_NAMES.NEAR_WHITE,
        },
        '&:active': {
          borderColor: COLOR_NAMES.GREY,
          backgroundColor: COLOR_NAMES.NEAR_WHITE,
        },
      },
      outlinedSecondary: {
        borderColor: COLOR_NAMES.BLUE,
        backgroundColor: COLOR_NAMES.WHITE,
        color: COLOR_NAMES.BLUE,
        '&:hover': {
          backgroundColor: COLOR_NAMES.LIGHT_BLUE,
          borderColor: COLOR_NAMES.BLUE,
        },
        '&:active': {
          backgroundColor: COLOR_NAMES.WHITE,
        },
        '&$disabled': {
          backgroundColor: COLOR_NAMES.WHITE,
          borderColor: COLOR_NAMES.LIGHT_GREY,
        },
      },
    },
    MuiIconButton: {
      root: {
        color: COLOR_NAMES.GREY,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '0.875rem',
        color: COLOR_NAMES.DARKEST_GREY,
        background: COLOR_NAMES.WHITE,
      },
      root: {
        '& $notchedOutline': {
          borderColor: COLOR_NAMES.LIGHT_GREY,
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: COLOR_NAMES.LIGHT_GREY,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: COLOR_NAMES.LIGHT_GREY,
          },
        },
        '&$focused $notchedOutline': {
          borderColor: COLOR_NAMES.BLUE,
          borderWidth: 1,
        },
        '&$error $notchedOutline': {
          borderColor: COLOR_NAMES.RED,
        },
        '&$disabled $notchedOutline': {
          borderColor: COLOR_NAMES.LIGHT_GREY,
          backgroundColor: rgbaString(COLOR_NAMES.LIGHTEST_GREY, 0.6),
        },
      },
    },
    MuiFormHelperText: {
      root: {
        color: COLOR_NAMES.DARKEST_GREY,
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
        color: COLOR_NAMES.BLACK,
        lineHeight: 1.333,
        fontWeight: 300,
      },
      h4: {
        fontFamily: 'Open Sans',
        fontSize: '1.25rem',
        color: COLOR_NAMES.BLACK,
        lineHeight: 1.5,
      },
      h5: {
        fontFamily: 'Open Sans',
        fontSize: '1rem',
        color: COLOR_NAMES.DARKEST_GREY,
        lineHeight: 1.5,
      },
      body1: {
        fontFamily: 'Open Sans',
        fontSize: '0.8125rem',
        color: COLOR_NAMES.DARKEST_GREY,
        lineHeight: 1.54,
      },
    },
    MuiLink: {
      root: {
        color: COLOR_NAMES.BLUE,
        '&:hover': {
          color: COLOR_NAMES.BLUE,
        },
        '&:visited': {
          color: COLOR_NAMES.DARK_BLUE,
        },
      },
      button: {
        fontFamily: 'Open Sans',
        fontWeight: '600',
        fontSize: '0.8125rem',
        color: COLOR_NAMES.BLUE,
        letterSpacing: '0.46px',
        lineHeight: 1.85,
        padding: SPACING * 2,
        '&:hover': {
          backgroundColor: COLOR_NAMES.LIGHTEST_BLUE,
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
    MuiSwitch: {
      track: {
        opacity: undefined,
        backgroundColor: COLOR_NAMES.LIGHT_GREY,
      },
    },
  },
}

export { themeConfig }
