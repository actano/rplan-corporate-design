import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>((theme) => {
  const { colors } = theme.palette

  return {
    input: {
      fontSize: '0.875rem',
      textOverflow: 'ellipsis',
      lineHeight: '1.43',
      padding: theme.spacing(1.75, 2.125),

      backgroundColor: colors.white,
      color: colors.darkestGrey,

      '&::placeholder': {
        color: colors.grey,
      },
    },
    inputRoot: {
      border: `1px solid ${colors.lightGrey}`,

      '&:focus-within': {
        color: colors.grey,
        borderColor: colors.lightGrey,
      },

      '&:hover': {
        color: colors.grey,
        borderColor: colors.grey,
      },
    },
  }
})

const DialogBoxInput = React.forwardRef<any, any>((
  { ...otherProps },
  ref,
) => {
  const classes = useStyles()

  return (
    <InputBase
      ref={ref}
      {...otherProps}
      classes={{
        root: classes.inputRoot,
        input: otherProps.inputStyle || classes.input,
      }}
    />
  )
})

export { DialogBoxInput }
