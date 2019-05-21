const COLORS = {
  INPUT: {
    NORMAL: '#D1D2E3',
    ACTIVE: '#527BFE',
    ERROR: '#F66D6D',
    VALIDATION: '#0ED08F',
    DISABLED: '#D1D2E3',
    DISABLED_BACKGROUND: '#F7F9FF',
  },
  BACKGROUND: {
    special: 'linear-gradient(128deg, #5352B2 0%, #4983BD 100%, #4983BD 100%)',
    normal: '#F7F9FF',
    modal: '#FFF',
  },
  BUTTONS: {
    PRIMARY: {
      BACKGROUND: {
        NORMAL: '#527BFE',
        HOVER: '#7D9CFE',
        PRESSED: '#354A90',
        DISABLED: '#D1D2E3',
      },
      TEXT: '#F7F9FF',
    },
    SECONDARY: {
      BACKGROUND: {
        NORMAL: '#FFFFFF',
        HOVER: '#EAEFFE',
        PRESSED: '#FFFFFF',
        DISABLED: '#FFFFFF',
      },
      BORDER: {
        NORMAL: '#527BFE',
        DISABLED: '#D1D2E3',
      },
      TEXT: {
        NORMAL: '#527BFE',
        DISABLED: '#A3ABC7',
      },
    },
    TERNARY: {
      BACKGROUND: {
        NORMAL: '#FFFFFF',
        HOVER: '#F6F6FA',
        PRESSED: '#F6F6FA',
        DISABLED: '#FFFFFF',
      },
      BORDER: {
        NORMAL: '#D1D2E3',
        HOVER: '#D1D2E3',
        PRESSED: '#A3ABC7',
        DISABLED: '#D1D2E3',
      },
      TEXT: {
        NORMAL: '#F6887',
        DISABLED: '#A3ABC7',
      },
    },
  },
  LINKS: {
    NORMAL: '#527BFE',
    HOVER: '#527BFE',
    VISITED: '#354A90',
  },
}

// This is the default but we want to make sure to base our measurements on it here as well
const SPACING = 8

const themeConfig = {
  themeName: 'MVP Corporate Design',
  props: {
    MuiButtonBase: {
      // TODO: Talk to Marie and find out whether she wants the ripple effect or not
      disableRipple: true,
    },
  },
  palette: {
    background: COLORS.BACKGROUND,
    input: COLORS.INPUT,
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
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '2px',
        fontSize: '16px',
        padding: '10.5px 16px',
        fontFamily: 'Open Sans',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '24px',
        textTransform: 'none',
      },
      contained: {
        color: COLORS.BUTTONS.TEXT,
        '&$disabled': {
          backgroundColor: COLORS.BUTTONS.PRIMARY.BACKGROUND.DISABLED,
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
        padding: '10.5px 16px',
        fontSize: '16px',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: '24px',
        backgroundColor: COLORS.BUTTONS.TERNARY.BACKGROUND.NORMAL,
        border: `1px solid ${COLORS.BUTTONS.TERNARY.BORDER.NORMAL}`,
        '&$disabled': {
          backgroundColor: COLORS.BUTTONS.TERNARY.BACKGROUND.DISABLED,
          color: COLORS.BUTTONS.TERNARY.TEXT.DISABLED,
        },
        '&:hover': {
          backgroundColor: COLORS.BUTTONS.TERNARY.BACKGROUND.HOVER,
        },
        '&:active': {
          borderColor: COLORS.BUTTONS.TERNARY.BORDER.PRESSED,
          backgroundColor: COLORS.BUTTONS.TERNARY.BACKGROUND.PRESSED,
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
        padding: 0,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '14px',
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
        }
      },
    },
    MuiTypography: {
      h2: {
        fontFamily: 'Open Sans',
        fontSize: '40px',
        color: '#FFFFFF',
        letterSpacing: '0.4px',
        textAlign: 'center',
        lineHeight: '40px',
        fontWeight: 300,
      },
      h3: {
        fontFamily: 'Open Sans',
        fontSize: '24px',
        color: '#11141C',
        textAlign: 'center',
        lineHeight: '32px',
        fontWeight: 300,
      },
      h5: {
        fontFamily: 'Open Sans',
        fontSize: '16px',
        color: '#414A69',
        textAlign: 'center',
        lineHeight: '24px',
      },
      body1: {
        fontFamily: 'Open Sans',
        fontSize: '13px',
        color: '#414A69',
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
          backgroundColor: '#EBF0FF',
          borderRadius: '2px',
          textDecoration: 'none',
        },
      },
    },
  },
}

export { themeConfig }
