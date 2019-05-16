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
    modal: '#FFF'
  },
  BUTTONS: {
    BACKGROUND: {
      NORMAL: '#527BFE',
      HOVER: '#7D9CFE',
      PRESSED: '#354A90',
      DISABLED: '#D1D2E3',
    },
    TEXT: '#F7F9FF',
  },
}

// This is the default but we want to make sure to base our measurements on it here as well
const SPACING = 8

const themeConfig = {
  props: {
    MuiButtonBase: {
      // TODO: Talk to Marie and find out whether she wants the ripple effect or not
      // disableRipple: true,
    },
  },
  palette: {
    background: COLORS.BACKGROUND,
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
        color: COLORS.BUTTONS.TEXT,
        textAlign: 'center',
        lineHeight: '24px',
        textTransform: 'none',
      },
      contained: {
        '&$disabled': {
          backgroundColor: COLORS.BUTTONS.BACKGROUND.DISABLED,
        },
      },
      containedPrimary: {
        backgroundColor: COLORS.BUTTONS.BACKGROUND.NORMAL,
        '&:active': {
          backgroundColor: COLORS.BUTTONS.BACKGROUND.PRESSED,
        },
        '&:hover': {
          backgroundColor: COLORS.BUTTONS.BACKGROUND.HOVER,
        },
      },
    },
    MuiOutlinedInput: {
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
  },
}

export { themeConfig }
