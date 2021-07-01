import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Button, ButtonProps } from '@material-ui/core'
import { CorporateDesignTheme } from '../theme/corporate-design-theme'

const useStyles = makeStyles<CorporateDesignTheme>(theme => ({
  small: {
    padding: theme.spacing(0.5, 1.5),
  },
}))

interface RootButtonProps extends ButtonProps {
  size?: 'small' | 'medium' | 'large'
}

const RootButton = React.forwardRef<HTMLButtonElement, RootButtonProps>(({
  children, size, className, ...otherProps
}, ref) => {
  const classes = useStyles()
  return (
    <Button
      {...otherProps}
      ref={ref}
      size={size}
      className={classnames((size === 'small') ? classes.small : null, className)}
    >
      {children}
    </Button>
  )
})

export { RootButton, RootButtonProps }
