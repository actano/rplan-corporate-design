import { rgbaString } from '../utils/color-conversion'

const COLOR_NAMES = {
  LIGHTEST_GREY: '#F5F7FE', // normal background
  VERY_LIGHT_GREY: '#E8E8F1',
  LIGHT_GREY: '#D1D2E3', // Disabled/Inactive/Subtle
  GREY: '#A3ABC7', // Placeholder/subtle hint
  DARK_GREY: '#5F6887', // Help Text
  DARKEST_GREY: '#414A69', // Paragraphs
  BLACK: '#11141C', // Titles
  LIGHTEST_BLUE: '#EBF0FF',
  LIGHT_BLUE: '#EAEFFE', // Background Secondary Hover
  PALE_BLUE: '#7D9CFE',
  BLUE: '#527BFE', // Active
  DARK_BLUE: '#354A90', // Button pressed
  DARKER_BLUE: '#2c3555', // e.g. background in focus card header
  VERY_DARK_BLUE: '#1C274A', // NavBar background
  GREEN: '#0ED08F', // Signal: Success/Validation
  LIGHT_RED: '#FEF0F0', // Error background
  RED: '#F66D6B', // Signal: Error/Alert
  ORANGE: '#FCB239', // Signal: Warning
  WHITE: '#FFFFFF', // Input background
  NEAR_WHITE: '#F6F6FA',
}

const COLORS = {
  HEADER_BAR: {
    TEXT: {
      NORMAL: COLOR_NAMES.DARKEST_GREY,
      PLACEHOLDER: COLOR_NAMES.GREY,
      HOVER: COLOR_NAMES.GREY,
      FOCUS: COLOR_NAMES.GREY,
      SPECIAL: COLOR_NAMES.DARK_GREY,
      TRANSPARENT: rgbaString(COLOR_NAMES.GREY, 0.5),
    },
    BACKGROUND: {
      MAIN: COLOR_NAMES.WHITE,
      HOVER: COLOR_NAMES.VERY_LIGHT_GREY,
      FOCUS: COLOR_NAMES.VERY_LIGHT_GREY,
    },
    BORDER: {
      NORMAL: COLOR_NAMES.VERY_LIGHT_GREY,
    },
  },
  NAVIGATION_BAR: {
    BACKGROUND: {
      BAR: COLOR_NAMES.VERY_DARK_BLUE,
      LINK_ACTIVE: rgbaString(COLOR_NAMES.BLUE, 0.16),
    },
    LINK_ACTIVE_BORDER: COLOR_NAMES.BLUE,
    SUBNAVIGATION: {
      BACKGROUND: {
        MAIN: COLOR_NAMES.WHITE,
        HOVER: COLOR_NAMES.VERY_LIGHT_GREY,
        FOCUS: COLOR_NAMES.VERY_LIGHT_GREY,
      },
      BORDER: {
        NORMAL: COLOR_NAMES.VERY_LIGHT_GREY,
      },
      TEXT: {
        ACTION: COLOR_NAMES.BLUE,
      },
      ICON: {
        NORMAL: COLOR_NAMES.GREY,
      },
    },
  },
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
    headerBar: COLORS.HEADER_BAR,
    navigationBar: COLORS.NAVIGATION_BAR,
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
        padding: 0,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '14px',
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
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 16px) scale(1)',
        '&$shrink': {
          fontSize: '18px',
          transform: 'translate(14px, -6px) scale(0.63)',
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
        lineHeight: '40px',
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
        fontSize: '13px',
        color: COLOR_NAMES.BLUE,
        letterSpacing: '0.46px',
        lineHeight: '24px',
        padding: '16px',
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
