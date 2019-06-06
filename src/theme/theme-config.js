const hexToRGBArray = hex => hex.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16))
const rgbaString = (hex, alpha) => `rgb(${hexToRGBArray(hex).join(',')}, ${alpha})`

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
  VERY_DARK_BLUE: '#1C274A', // NavBar background
  GREEN: '#0ED08F', // Signal: Success/Validation
  LIGHT_RED: '#FEF0F0', // Error background
  RED: '#F66D6B', // Signal: Error/Alert
  WHITE: '#FFFFFF', // Input background
  NEAR_WHITE: '#F6F6FA',
}

const COLORS = {
  GENERAL: {
    PRIMARY: {
      MAIN: COLOR_NAMES.BLUE,
    },
    ERROR: {
      MAIN: rgbaString(COLOR_NAMES.RED, 0.4),
      LIGHT: COLOR_NAMES.LIGHT_RED,
    },
  },
  INPUT: {
    NORMAL: COLOR_NAMES.LIGHT_GREY,
    ACTIVE: COLOR_NAMES.BLUE,
    ERROR: COLOR_NAMES.RED,
    VALIDATION: COLOR_NAMES.GREEN,
    DISABLED: COLOR_NAMES.LIGHT_GREY,
    DISABLED_BACKGROUND: rgbaString(COLOR_NAMES.LIGHTEST_GREY, 0.6),
  },
  BACKGROUND: {
    special: 'linear-gradient(128deg, #5352B2 0%, #4983BD 100%, #4983BD 100%)',
    normal: COLOR_NAMES.LIGHTEST_GREY,
    modal: COLOR_NAMES.WHITE,
  },
  BUTTONS: {
    PRIMARY: {
      BACKGROUND: {
        NORMAL: COLOR_NAMES.BLUE,
        HOVER: COLOR_NAMES.PALE_BLUE,
        PRESSED: COLOR_NAMES.DARK_BLUE,
        DISABLED: COLOR_NAMES.LIGHT_GREY,
      },
      TEXT: COLOR_NAMES.LIGHTEST_GREY,
    },
    SECONDARY: {
      BACKGROUND: {
        NORMAL: COLOR_NAMES.WHITE,
        HOVER: COLOR_NAMES.LIGHT_BLUE,
        PRESSED: COLOR_NAMES.WHITE,
        DISABLED: COLOR_NAMES.WHITE,
      },
      BORDER: {
        NORMAL: COLOR_NAMES.BLUE,
        DISABLED: COLOR_NAMES.LIGHT_GREY,
      },
      TEXT: {
        NORMAL: COLOR_NAMES.BLUE,
        DISABLED: COLOR_NAMES.GREY,
      },
    },
    TERTIARY: {
      BACKGROUND: {
        NORMAL: COLOR_NAMES.WHITE,
        HOVER: COLOR_NAMES.NEAR_WHITE,
        PRESSED: COLOR_NAMES.NEAR_WHITE,
        DISABLED: COLOR_NAMES.WHITE,
      },
      BORDER: {
        NORMAL: COLOR_NAMES.LIGHT_GREY,
        HOVER: COLOR_NAMES.LIGHT_GREY,
        PRESSED: COLOR_NAMES.GREY,
        DISABLED: COLOR_NAMES.LIGHT_GREY,
      },
      TEXT: {
        NORMAL: COLOR_NAMES.DARK_GREY,
        DISABLED: COLOR_NAMES.GREY,
      },
    },
  },
  ICON_BUTTONS: {
    TEXT: {
      NORMAL: COLOR_NAMES.DARKEST_GREY,
    },
  },
  TEXT: {
    active: COLOR_NAMES.BLUE,
    title: COLOR_NAMES.BLACK,
    paragraph: COLOR_NAMES.DARK_GREY,
    hint: COLOR_NAMES.GREY,
    success: COLOR_NAMES.GREEN,
  },
  LINKS: {
    NORMAL: COLOR_NAMES.BLUE,
    HOVER: COLOR_NAMES.BLUE,
    VISITED: COLOR_NAMES.DARK_BLUE,
    BUTTON_BACKGROUND: COLOR_NAMES.LIGHTEST_BLUE,
  },
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
  },
  NETPLAN: {
    linkArrow: COLOR_NAMES.LIGHT_GREY,
  },
}

// This is the default but we want to make sure to base our measurements on it here as well
const SPACING = 8

const themeConfig = {
  themeName: 'MVP Corporate Design',
  palette: {
    background: COLORS.BACKGROUND,
    input: COLORS.INPUT,
    text: COLORS.TEXT,
    error: {
      main: COLORS.GENERAL.ERROR.MAIN,
      light: COLORS.GENERAL.ERROR.LIGHT,
    },
    primary: {
      main: COLORS.GENERAL.PRIMARY.MAIN,
    },
    headerBar: COLORS.HEADER_BAR,
    navigationBar: COLORS.NAVIGATION_BAR,
    netplan: COLORS.NETPLAN,
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Open Sans',
    ].join(','),
  },
  spacing: {
    unit: SPACING,
  },
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
        color: COLORS.BUTTONS.PRIMARY.TEXT,
        '&$disabled': {
          backgroundColor: COLORS.BUTTONS.PRIMARY.BACKGROUND.DISABLED,
          color: COLORS.BUTTONS.PRIMARY.TEXT,
        },
      },
      containedPrimary: {
        backgroundColor: COLORS.BUTTONS.PRIMARY.BACKGROUND.NORMAL,
        '&:active': {
          backgroundColor: COLORS.BUTTONS.PRIMARY.BACKGROUND.PRESSED,
        },
        '&:hover': {
          backgroundColor: COLORS.BUTTONS.PRIMARY.BACKGROUND.HOVER,
        },
      },
      outlined: {
        padding: '10.5px 24px',
        fontSize: '16px',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '24px',
        color: COLORS.BUTTONS.TERTIARY.TEXT.NORMAL,
        backgroundColor: COLORS.BUTTONS.TERTIARY.BACKGROUND.NORMAL,
        border: `1px solid ${COLORS.BUTTONS.TERTIARY.BORDER.NORMAL}`,
        '&$disabled': {
          backgroundColor: COLORS.BUTTONS.TERTIARY.BACKGROUND.DISABLED,
          color: COLORS.BUTTONS.TERTIARY.TEXT.DISABLED,
        },
        '&:hover': {
          backgroundColor: COLORS.BUTTONS.TERTIARY.BACKGROUND.HOVER,
        },
        '&:active': {
          borderColor: COLORS.BUTTONS.TERTIARY.BORDER.PRESSED,
          backgroundColor: COLORS.BUTTONS.TERTIARY.BACKGROUND.PRESSED,
        },
      },
      outlinedSecondary: {
        borderColor: COLORS.BUTTONS.SECONDARY.BORDER.NORMAL,
        backgroundColor: COLORS.BUTTONS.SECONDARY.BACKGROUND.NORMAL,
        color: COLORS.BUTTONS.SECONDARY.TEXT.NORMAL,
        '&:hover': {
          backgroundColor: COLORS.BUTTONS.SECONDARY.BACKGROUND.HOVER,
          borderColor: COLORS.BUTTONS.SECONDARY.BORDER.NORMAL,
        },
        '&:active': {
          backgroundColor: COLORS.BUTTONS.SECONDARY.BACKGROUND.PRESSED,
        },
        '&$disabled': {
          backgroundColor: COLORS.BUTTONS.SECONDARY.BACKGROUND.DISABLED,
          borderColor: COLORS.BUTTONS.SECONDARY.BORDER.DISABLED,
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
      },
      root: {
        '& $notchedOutline': {
          borderColor: COLORS.INPUT.NORMAL,
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: COLORS.INPUT.NORMAL,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderColor: COLORS.INPUT.NORMAL,
          },
        },
        '&$focused $notchedOutline': {
          borderColor: COLORS.INPUT.ACTIVE,
          borderWidth: 1,
        },
        '&$error $notchedOutline': {
          borderColor: COLORS.INPUT.ERROR,
        },
        '&$disabled $notchedOutline': {
          borderColor: COLORS.INPUT.DISABLED,
          backgroundColor: COLORS.INPUT.DISABLED_BACKGROUND,
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
        color: COLORS.ICON_BUTTONS.TEXT.NORMAL,
      },
    },
    MuiTypography: {
      h2: {
        fontFamily: 'Open Sans',
        fontSize: '40px',
        color: COLOR_NAMES.WHITE,
        letterSpacing: '0.4px',
        textAlign: 'center',
        lineHeight: '40px',
        fontWeight: 300,
      },
      h3: {
        fontFamily: 'Open Sans',
        fontSize: '24px',
        color: COLOR_NAMES.BLACK,
        textAlign: 'center',
        lineHeight: '32px',
        fontWeight: 300,
      },
      h4: {
        fontFamily: 'Open Sans',
        fontSize: '20px',
        color: COLOR_NAMES.BLACK,
        lineHeight: '30px',
      },
      h5: {
        fontFamily: 'Open Sans',
        fontSize: '16px',
        color: COLOR_NAMES.DARKEST_GREY,
        textAlign: 'center',
        lineHeight: '24px',
      },
      body1: {
        fontFamily: 'Open Sans',
        fontSize: '13px',
        color: COLOR_NAMES.DARKEST_GREY,
        textAlign: 'center',
        lineHeight: '20px',
      },
    },
    MuiLink: {
      root: {
        color: COLORS.LINKS.NORMAL,
        '&:hover': {
          color: COLORS.LINKS.HOVER,
        },
        '&:visited': {
          color: COLORS.LINKS.VISITED,
        },
      },
      button: {
        fontFamily: 'Open Sans',
        fontWeight: '600',
        fontSize: '13px',
        color: COLORS.LINKS.NORMAL,
        letterSpacing: '0.46px',
        lineHeight: '24px',
        padding: '16px',
        '&:hover': {
          backgroundColor: COLORS.LINKS.BUTTON_BACKGROUND,
          borderRadius: '2px',
          textDecoration: 'none',
        },
      },
    },
  },
}

export { themeConfig }
