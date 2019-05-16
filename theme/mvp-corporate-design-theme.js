import { createMuiTheme } from '@material-ui/core/styles'

const COLORS = {
  INPUT: {
    NORMAL: '#D1D2E3',
    ACTIVE: '#D1D2E3',
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

const theme = createMuiTheme({
  palette: {
    background: COLORS.BACKGROUND,
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Open Sans',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '2px',
        fontSize: '16px',
        fontFamily: 'Open Sans',
        fontWeight: 600,
        color: COLORS.BUTTONS.TEXT,
        textAlign: 'center',
        lineHeight: '24px',
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
          borderWidth: 2,
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
})

export { theme }
