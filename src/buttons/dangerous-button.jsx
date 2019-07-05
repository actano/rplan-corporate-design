import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.colors.red,
    '&:hover': {
      backgroundColor: theme.palette.colors.darkRed,
    },
  },
}))

const DangerousButton = ({ children, className, ...otherProps }) => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classnames(classes.root, className)}
      {...otherProps}
    >
      { children }
    </Button>
  )
}

DangerousButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

DangerousButton.defaultProps = {
  children: undefined,
  className: undefined,
}

export { DangerousButton }
