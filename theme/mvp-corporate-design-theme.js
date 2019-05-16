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
  BACKGROUND: {},
}

const mvpCorporateTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Open Sans',
    ].join(','),
  },
  overrides: {
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
      root: {
        '& $h2': {
          fontFamily: 'Open Sans',
          fontSize: '40px',
          color: '#FFFFFF',
          letterSpacing: '0.4px',
          textAlign: 'center',
          lineHeight: '40px',
          fontWeight: 'light',
        },
        '& $h3': {
          fontFamily: 'Open Sans',
          fontSize: '24px',
          color: '#1141C',
          textAlign: 'center',
          lineHeight: '32px',
          fontWeight: 'light',
        },
        '& $h5': {
          fontFamily: 'Open Sans',
          fontSize: '16px',
          color: '#414A69',
          textAlign: 'center',
          lineHeight: '24px',
        },
        '& $body1': {
          fontFamily: 'Open Sans',
          fontSize: '13px',
          color: '#414A69',
          textAlign: 'center',
          lineHeight: '20px',
        },
      },
    },
  },
})

export { mvpCorporateTheme }
